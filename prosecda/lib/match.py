import os

from lxml import etree

import logging
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec
import matplotlib.patches as patches
from matplotlib.backends.backend_pdf import PdfPages

import prosecda.lib.rules as Rules
import lib.logHandler as logHandler

logging.getLogger('matplotlib.font_manager').disabled = True
logging.getLogger('matplotlib.backends.backend_pdf').disabled = True


class Matches:
    def __init__(self, param):
        self.param = param
        self.list = []
        self.outdir = param.outdirname + 'matches/'

        self.logger = logHandler.Logger(name=__name__)

    def add(self, match: None):
        """

        @param match: a Match instance
        @return: None
        """
        self.list.append(match)

    def search(self, rules: list, proteins: list):
        """
        Searches proteins matching defined rules.

        @param rules: list of Rules.Rule instances
        @param proteins: list of external.Protein instances
        @return: None
        """
        self.logger.info('Searching for proteins matching rules...')

        match = None
        for rule in rules:
            for protein in proteins:
                if is_match(rule, protein):
                    if not self.is_match_in_list(name=rule.name):
                        match = Match(rule=rule)
                        self.add(match=match)

                    match.add(protein=protein)

    def is_match_in_list(self, name: str):
        return name in self.get_rulenames()

    def get_rulenames(self):
        if self.list:
            return sorted([x.rule.name for x in self.list])
        else:
            return []

    def report(self, fasta_dict: dict):
        if self.list:
            os.makedirs(self.outdir, exist_ok=True)
            for match in self.list:
                match.report(fasta_dict=fasta_dict, outdir=self.outdir)


def is_match(rule, protein):
    protein_architecture = protein.best_architecture

    if True in [x in [y.name for y in rule.forbidden_domains] for x in protein_architecture.domain_names()]:
        return False
    elif sum([x.name in protein_architecture.domain_names() for x in rule.mandatory_domains]) < len(
            rule.mandatory_domains):
        return False
    else:
        mandatories_in_architecture = (x for x in protein_architecture.domains if
                                       x.qname in [y.name for y in rule.mandatory_domains])
        encountered_names = []

        for protein_domain in mandatories_in_architecture:
            for mandatory_domain in rule.mandatory_domains:
                if protein_domain.qname == mandatory_domain.name and mandatory_domain.name not in encountered_names:
                    if protein_domain.dom_ival <= mandatory_domain.ival:
                        encountered_names.append(mandatory_domain.name)

        if len(encountered_names) == len(rule.mandatory_domains):
            return True
        else:
            return False


class Match:
    palette = ['dodgerblue', 'orange', 'darkseagreen',
               'red', 'lightsalmon', 'steelblue',
               'cyan', 'teal', 'darkkhaki',
               'firebrick', 'greenyellow', 'mediumvioletred',
               'midnightblue', 'tan', 'rosybrown']

    def __init__(self, rule: Rules.Rule):
        self.rule = rule
        self.proteins = []

        self.domain_colors = None

        self.logger = logHandler.Logger(name=__name__)

    def add(self, protein=None):
        if protein not in self.proteins:
            self.proteins.append(protein)

    def set_colors(self):
        domains_set = self.list_domains()
        if len(domains_set) <= len(self.palette):
            self.domain_colors = {x: self.palette[i] for i, x in enumerate(self.list_domains())}

    def list_domains(self):
        all_lists = [x.best_architecture.domain_names() for x in self.proteins]

        return sorted(set([item for sublist in all_lists for item in sublist]))

    def report(self, fasta_dict: dict, outdir: str):
        self.set_colors()

        outpath = outdir + self.rule.name + '/'
        os.makedirs(outpath, exist_ok=True)

        pdf_pages = PdfPages(filename=outpath[:-1] + '.pdf')
        self.logger.info('Creating plots for proteins matching {}:'.format(self.rule.name))

        for protein in self.proteins:
            self.logger.info(' - {}'.format(protein.name))
            with open(outpath + protein.name + '.fa', 'w') as o_fasta:
                header = '>' + protein.name + '\n'
                sequence_ori = fasta_dict[protein.name]
                sequence = '\n'.join([sequence_ori[x:x + 80] for x in range(0, len(sequence_ori), 80)])
                o_fasta.write(header + sequence + '\n')

            with open(outpath + protein.name + '.xml', 'w') as o_xml:
                o_xml.write(self.get_xml(protein=protein))

            visual_protein = PlotProt(protein=protein, colors=self.domain_colors)
            visual_protein.draw()
            visual_protein.save(pdf_pages=pdf_pages)
            visual_protein.close_figs()

        pdf_pages.close()

    def get_xml(self, protein):

        protein_element = etree.Element('protein')

        protein_id = etree.SubElement(protein_element, 'id')
        protein_id.text = protein.name

        sequence_length = etree.SubElement(protein_element, 'sequence_length')
        sequence_length.text = str(protein.length)

        class_name = etree.SubElement(protein_element, 'class_name')
        class_name.text = self.rule.name

        domain_architecture = etree.SubElement(protein_element, 'domain_architecture')
        for domain in protein.best_architecture.domains:
            _domain = etree.SubElement(domain_architecture, "domain")
            _domain.set('name', domain.qname)

            _domain_cval = etree.SubElement(_domain, "cval")
            _domain_cval.text = str(domain.dom_cval)
            _domain_ival = etree.SubElement(_domain, "ival")
            _domain_ival.text = str(domain.dom_ival)
            _domain_score = etree.SubElement(_domain, "score")
            _domain_score.text = str(domain.dom_score)

            _domain_start = etree.SubElement(_domain, "start")
            _domain_start.text = str(domain.env_from)
            _domain_end = etree.SubElement(_domain, "end")
            _domain_end.text = str(domain.env_to)
            _domain_length = etree.SubElement(_domain, "domain_length")
            _domain_length.text = str(domain.env_to - domain.env_from + 1)

        return etree.tostring(protein_element, pretty_print=True, encoding="utf-8").decode()


class PlotProt:
    def __init__(self, protein, colors=None):
        self.protein = protein
        self.domains = protein.best_architecture.domains
        self.domains_nb = len(self.domains)

        self.colors = colors
        self.delta = self.protein.length * 0.01

        self.n_max_rows = 20 + 1
        self.gs = gridspec.GridSpec(nrows=self.n_max_rows, ncols=5)

        self.plots = self.create_fig()

    def create_fig(self):
        n_figs = self.domains_nb // (self.n_max_rows - 1) + (self.domains_nb % (self.n_max_rows - 1) > 0)
        plots = {}
        for i in range(n_figs):
            figure = plt.figure(figsize=(8, 10))
            axs_draw = [figure.add_subplot(self.gs[x, :-2]) for x in range(self.n_max_rows)]
            [x.set_axis_off() for x in axs_draw]

            axs_text = [figure.add_subplot(self.gs[x, -2:]) for x in range(self.n_max_rows)]
            [x.set_axis_off() for x in axs_text]
            start = i * (self.n_max_rows - 1)
            end = start + self.n_max_rows - 1

            plots[i] = {'fig': figure,
                        'axs_draw': axs_draw,
                        'axs_text': axs_text,
                        'domains_idx': (start, end),
                        }

        return plots

    def draw(self):
        for i in self.plots:
            self.draw_protein(ax=self.plots[i]['axs_draw'][0])

            start = self.plots[i]['domains_idx'][0]
            end = self.plots[i]['domains_idx'][1]
            for j, domain in enumerate(self.domains[start:end], start=1):
                self.draw_sequence(ax=self.plots[i]['axs_draw'][j])
                self.draw_domain(domain=domain, ax=self.plots[i]['axs_draw'][j])

                pos_from = domain.env_from - self.delta  # - len(str(domain.env_from))
                pos_to = domain.env_to + self.delta  # + len(str(domain.env_to))
                self.plots[i]['axs_draw'][j].text(pos_from, 7, str(domain.env_from), fontsize=7, ha='right')
                self.plots[i]['axs_draw'][j].text(pos_to, 7, str(domain.env_to), fontsize=7)

                self.plot_text(domain=domain, ax_text=self.plots[i]['axs_text'][j])

                self.plots[i]['fig'].suptitle(self.protein.name, fontsize=12, fontweight='bold')

    def draw_protein(self, ax):
        self.draw_sequence(ax=ax)
        for domain in self.domains:
            self.draw_domain(domain=domain, ax=ax)

        ax.text(1 - self.delta, 9, '1', fontsize=8, ha='right')
        ax.text(self.protein.length, 9, str(self.protein.length), fontsize=8)

    def draw_sequence(self, ax):
        ax.set_xlim([1, self.protein.length])
        ax.set_ylim([0, 10])

        mean_ax_lim = (ax.get_ylim()[1] - ax.get_ylim()[0]) / 2.
        width = self.protein.length
        height = 0.2  # mean_ax_lim * 0.025
        x = 1
        y = mean_ax_lim - height / 2.

        ax.add_patch(
            patches.Rectangle(
                (x, y),
                width,
                height,
                color='darkslategrey',
                alpha=0.95
            )
        )

    def draw_domain(self, domain, ax):
        """
        Draws a domain
        """
        if not self.colors:
            color = 'orange'  # 'dodgerblue'
        else:
            color = self.colors[domain.qname]
        start_pos = domain.env_from
        end_pos = domain.env_to

        mean_ax_lim = (ax.get_ylim()[1] - ax.get_ylim()[0]) / 2
        width = (end_pos - start_pos)
        height = mean_ax_lim * 1
        x = start_pos
        y = mean_ax_lim - height / 2.

        ax.add_patch(
            patches.Rectangle(
                (x, y),
                width,
                height,
                facecolor=color,
                edgecolor='black',
                alpha=0.75,
                label=domain.qname
            )
        )

    def plot_text(self, domain, ax_text):
        domain_name = r'$\bf{' + domain.qname.replace('_', '\_') + ':' + '}$'
        text = ' i_val = {}, score = {}'.format(domain.dom_ival, domain.dom_score)
        ax_text.text(0.055, 0.35, domain_name + text, fontsize=9)

    def save(self, pdf_pages):
        for i in self.plots:
            pdf_pages.savefig(self.plots[i]['fig'])

    def close_figs(self):
        for i in self.plots:
            plt.close(self.plots[i]['fig'])
