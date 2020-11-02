"""

@todo: Creates/adjust Param object to be of generic use

"""

import os
import sys
import numpy as np
import lib.logHandler as logHandler
from lxml import etree
from prosecda.lib.rule_parser import Rule


class Usearch:
    """

    Container to run muscle program

    """
    def __init__(self, _input: str, identity: float, outdir: str) -> None:
        """

        @param _input: multiple fasta filename
        @param identity: maximum identity threshold used to cluster sequences
        @param outdir: output directory
        """

        self.input = _input
        self.identity = identity
        self.outdir = outdir if outdir[-1] == '/' else outdir + '/'
        self.output = outdir + '.'.join(os.path.basename(self.input).split('.')[0:-1]) + '_nr.fa'

        self.logger = logHandler.Logger(name=__name__)

    def run(self):
        """

        Method used to run usearch.

        @return: None
        """
        cmd = 'usearch -sort length -cluster_fast ' + self.input + ' -id ' + str(self.identity) + ' -centroids ' + self.output + ' -quiet'
        self.logger.info('Running {}'.format(cmd.replace(self.outdir, '')))
        os.system(cmd)


class Muscle:
    """

    Container to run muscle program

    """
    def __init__(self, _input: str, outdir: str) -> None:
        """
        @param _input: multiple fasta filename
        @param outdir: output directory
        """

        self.input = _input
        self.outdir = outdir if outdir[-1] == '/' else outdir + '/'
        self.output = outdir + '.'.join(os.path.basename(self.input).split('.')[0:-1]) + '.clw'

        self.logger = logHandler.Logger(name=__name__)

    def run(self):
        """

        Method used to run muscle.

        @return: None
        """
        cmd = 'muscle -in ' + self.input + ' -out ' + self.output + ' -clw -quiet'
        self.logger.info('Running {}'.format(cmd.replace(self.outdir, '')))
        os.system(cmd)


class HmmBuild:
    """

    Container to run hmmbuild program

    """
    def __init__(self, _input: str, name: str, outdir: str) -> None:
        """

        @param _input: clustalw filename
        @param name: HMM profile output name
        @param outdir: output directory
        """

        self.input = _input
        self.name = name
        self.outdir = outdir if outdir[-1] == '/' else outdir + '/'
        self.output = outdir + '.'.join(os.path.basename(self.input).split('.')[0:-1]) + '.hmm'

        self.logger = logHandler.Logger(name=__name__)

    def run(self):
        """

        Method used to run hmmbuild.

        @return: None
        """
        cmd = 'hmmbuild ' + '-o /dev/null -n ' + self.name + ' ' + self.output + ' ' + self.input
        self.logger.info('Running {}'.format(cmd.replace(self.outdir, '')))
        os.system(cmd)


class HmmSearch:
    """

    Container to run hmmsearch program and parse results

    """
    def __init__(self, input_hmm: str, input_db: str, parameters: any, outdir: str, **kwargs: dict):
        """

        @param input_hmm: hmm profile filename
        @param input_db: name of the fasta to scan against the HMM profile for the enrichment process
        @param parameters: Param instance
        @param outdir: output directory
        @param **kwargs: optional argument(s):
            - 'basename': desired name of the output file
            - 'domains': list of domain names to be fetched from input_hmm to a temporary new hmmdb
        """
        if 'basename' not in kwargs:
            self.basename = '.'.join(os.path.basename(input_hmm).split('.')[0:-1])
        else:
            self.basename = '.'.join(str(kwargs['basename']).split('.')[0:-1])
        self.param = parameters
        self.input_db = input_db
        self.outdir = outdir
        self.output = outdir + self.basename + '.domtblout'

        self.hmmfetch = False
        if 'domains' not in kwargs:
            self.input_hmm = input_hmm
        else:
            self.hmmfetch = True
            self.domains = kwargs['domains']
            self.input_hmm = hmmfetch(hmmdb=input_hmm, keys=self.domains, outdir=self.outdir)

        self.hits = None

        self.logger = logHandler.Logger(name=__name__)

    def run(self):
        """

        Method used to run hmmsearch.

        @return: None
        """
        cmd = 'hmmsearch' + ' -o /dev/null ' + '--domtblout ' + self.output + ' ' + self.input_hmm + ' ' + self.input_db
        self.logger.info('Running {}'.format(cmd.replace(self.outdir, '')))
        os.system(cmd)

        if self.hmmfetch:
            os.remove(self.input_hmm)

        self.get_hits()

    def get_hits(self):
        if not os.path.isfile(self.output):
            self.logger.error(self.output + ' does not exist.')
            sys.exit(1)
        else:
            self.hits = HmmerHits(parameters=self.param)
            with open(self.output, 'r') as output_file:
                for line in output_file:
                    if not line.startswith('#'):
                        hit = HmmerDomtbl(cols=line.split(), hmmer_type='search')
                        self.hits.add(hit=hit, filtering=True)

    def get_dict(self):
        return self.hits.get_dict()

    def get_proteins(self):
        return self.hits.get_proteins()


def hmmfetch(hmmdb: str, keys: list, outdir: str) -> str:
    """

    @param hmmdb: HMM profile database
    @param keys: list of domain names to fetch from hmmdb
    @param outdir: output directory of the new HMM profile database
    @return: the filename of the new HMM profile database
    """
    keys_file = outdir + 'domains.lst'
    outfile = outdir + hmmdb.replace('.hmm', '_tmp.hmm')

    with open(keys_file, 'w') as _file:
        _file.write('\n'.join(keys) + '\n')

    cmd = 'hmmfetch -f ' + hmmdb + ' ' + keys_file + ' > ' + outfile
    os.system(cmd)
    os.remove(keys_file)

    return outfile


class HmmerDomtbl:
    """

    Container used to describe any hmmer hit in a domtblout format from either hmmsearch or hmmscan.

    """

    def __init__(self, cols: list, hmmer_type: str):
        """

        @param cols: list of all descriptors found in hmmer domtblout format
        @param hmmer_type: 'search' if hmmsearch, 'scan' if hmmscan
        """
        if hmmer_type == 'search':
            self.tname = cols[0] if cols else None
            self.tlen = int(cols[2]) if cols else None
            self.qname = cols[3] if cols else None
            self.qlen = int(cols[5]) if cols else None
        elif hmmer_type == 'scan':
            self.tname = cols[3] if cols else None
            self.tlen = int(cols[5]) if cols else None
            self.qname = cols[0] if cols else None
            self.qlen = int(cols[2]) if cols else None
        self.seq_eval = float(cols[6]) if cols else None
        self.seq_score = float(cols[7]) if cols else None
        self.seq_bias = float(cols[8]) if cols else None
        self.dom_id = int(cols[9]) if cols else None
        self.dom_nb = int(cols[10]) if cols else None
        self.dom_cval = float(cols[11]) if cols else None
        self.dom_ival = float(cols[12]) if cols else None
        self.dom_score = float(cols[13]) if cols else None
        self.dom_bias = float(cols[14]) if cols else None
        self.hmm_from = int(cols[15]) if cols else None
        self.hmm_to = int(cols[16]) if cols else None
        self.ali_from = int(cols[17]) if cols else None
        self.ali_to = int(cols[18]) if cols else None
        self.env_from = int(cols[19]) if cols else None
        self.env_to = int(cols[20]) if cols else None
        self.acc = float(cols[21]) if cols else None

    def ali_coors(self):
        return self.ali_from, self.ali_to

    def env_coors(self):
        return self.env_from, self.env_to

    def env_sequence(self, sequence: str):
        """

        @param sequence: string of any amino acid (aa) sequence
        @return: string of the aa sequence corresponding to env coords
        """
        if sequence:
            return sequence[self.env_from - 1:self.env_to]

    def ali_sequence(self, sequence: str):
        """

        @param sequence: string of any amino acid (aa) sequence
        @return: string of the aa sequence corresponding to ali coords
        """
        if sequence:
            return sequence[self.ali_from - 1:self.ali_to]

    def description(self):
        """

        @return: a formatted string describing the hit attributes
        """
        return ';'.join(['name:' + self.qname,
                         'hmm_len:' + str(self.qlen),
                         'hmm_coords_len:' + str(self.hmm_to - self.hmm_from + 1),
                         'env_len:' + str(self.env_to - self.env_from + 1),
                         'cval:' + str(self.dom_cval),
                         'ival:' + str(self.dom_ival),
                         'score:' + str(self.dom_score)])


class HmmerHits:
    def __init__(self, parameters: any):
        """

        @param parameters: Param instance
        """
        self.param = parameters
        self.list = []

    def add(self, hit: HmmerDomtbl, filtering: bool):
        """

        Adds an hit to self.list

        @param hit: HmmerDomtbl instance
        @param filtering: boolean, True if hit requires a filtering, False otherwise
        @return: None
        """
        if not filtering:
            if hit not in self.list:
                self.list.append(hit)
        else:
            if self.filter(hit=hit):
                self.list.append(hit)

    def filter(self, hit: HmmerDomtbl):
        """

        Checks if hit pass the following criteria:
            - 1: hmm profile env length has to be >= to X % of the hmm profile length (X % = param.cov)
            - 2: if hit passes criteria 1, the other criteria are:
                    - domain cval <= param.cval
                    - domain ival <= param.ival
                    - mean probability of the alignment accuracy >= param.acc
                else:
                    - hit doesn't pass the filter

        @todo: replace (hit.env_to - hit.env_from + 1) by (hit.hmm_to - hit.hmm_from + 1)

        @param hit: HmmerDomtbl instance
        @return: boolean, True if hmmer hit pass criteria, False otherwise

        """
        is_relevant = False

        if float(hit.env_to - hit.env_from + 1) >= hit.qlen * self.param.cov:
            if hit.dom_cval <= self.param.cval and hit.dom_ival <= self.param.ival and hit.acc >= self.param.acc:
                is_relevant = True

        return is_relevant

    def get_dict(self) -> dict:
        _dict = {}
        for x in self.list:
            if x.tname not in _dict:
                _dict[x.tname] = []
            _dict[x.tname].append(x)

        # return {x.tname: x for x in self.list}
        return _dict

    def get_proteins(self) -> list:
        _dict = self.get_dict()
        proteins = []
        for protein_name in sorted(_dict):
            proteins.append(Protein(name=protein_name, domains=_dict[protein_name]))

        return proteins

    def get_fasta(self, fasta_dict: dict) -> list:
        """

        @param fasta_dict:
        @return: list of fasta hits
        """
        fasta_hits = []
        for hit in self.list:
            protein_id = hit.tname
            sequence = hit.env_sequence(sequence=fasta_dict[protein_id])
            sequence_splitted = [sequence[i:i + 80] for i in range(0, len(sequence), 80)]

            header = '>' + ';'.join([protein_id, hit.description()]) + '\n'
            fasta_hits.append(header + '\n'.join(sequence_splitted) + '\n')

        return fasta_hits

    def write_fasta(self, fasta_dict: dict, output: str):
        """

        @param fasta_dict: dictionary (keys=protein ids, values=sequences)
        @param output: string of the output filename
        @return: None
        """
        with open(output, 'w+') as enriched_fasta_file:
            for hit in self.list:
                protein_id = hit.tname
                sequence = hit.env_sequence(sequence=fasta_dict[protein_id])
                sequence_splitted = [sequence[i:i+80] for i in range(0, len(sequence), 80)]

                header = '>' + ';'.join([protein_id, hit.description()]) + '\n'
                enriched_fasta_file.write(header + '\n'.join(sequence_splitted) + '\n')


class Protein:
    """

    Container to deal with protein

    """
    def __init__(self, name: str, domains: list, check_duplicates=False):
        """

        @param name: name/id of the protein
        @param domains: list of domains (HmmerDomTbl instances) composing the protein
        """

        self.name = name
        if check_duplicates:
            self.domains = self.rm_duplicates(domains=domains)
        else:
            self.domains = domains
        self.architectures = []
        self.best_architecture = None
        self.length = domains[0].tlen

        self.logger = logHandler.Logger(name=__name__)

    def rm_duplicates(self, domains: list) -> list:
        """

        @param domains: list of HmmDomTbl instances
        @return: list of non-redundant domains
        """
        if len(domains) == 1:
            return domains
        else:
            nr_domains = []
            for i, domain_i in enumerate(domains):
                if i == 0:
                    nr_domains.append(domain_i)
                for j, domain_j in enumerate(domains):
                    if i > j:
                        if not self.is_duplicate(domain_i=domain_i, domain_j=domain_j):
                            if domain_j not in nr_domains:
                                nr_domains.append(domain_j)
                            else:
                                print(nr_domains, domain_j)

        return nr_domains

    @staticmethod
    def is_duplicate(domain_i: HmmerDomtbl, domain_j: HmmerDomtbl):
        flag = False
        if domain_i.dom_ival == domain_j.dom_ival:
            if domain_i.env_from == domain_j.env_from and domain_i.env_to == domain_j.env_to:
                flag = True

        return flag

    def list_domains(self):
        return [x.qname for x in self.domains]

    def set_best_architecture(self):
        if not self.best_architecture:
            if not self.is_arch_with_ival_null():
                arch_with_best_logscore = sorted([(x, x.get_logscore()) for x in self.architectures], key=lambda x: x[1])[-1][0]
                self.best_architecture = arch_with_best_logscore
            else:
                arch_with_best_bitscore = sorted([(x, x.get_bitscore()) for x in self.architectures], key=lambda x: x[1])[-1][0]
                self.best_architecture = arch_with_best_bitscore

    def get_sequence(self, fasta_dict):
        return fasta_dict[self.name]

    def is_arch_with_ival_null(self):
        return True in [x.is_ival_null() for x in self.architectures]

    def write_fasta(self, outdir: str, fasta_dict: dict):
        fasta_sequence = self.get_fasta(fasta_dict)
        with open(outdir + self.name + '.fa', 'w') as o_fasta:
            o_fasta.write(fasta_sequence)

    def get_fasta(self, fasta_dict: dict) -> str:
        header = '>' + self.name + '\n'
        sequence_ori = fasta_dict[self.name]
        sequence = '\n'.join([sequence_ori[x:x + 80] for x in range(0, len(sequence_ori), 80)])

        return header + sequence + '\n'

    def write_xml(self, outdir: str, rule: Rule):
        with open(outdir + self.name + '.xml', 'w') as o_xml:
            o_xml.write(self.get_xml(rule=rule))

    def get_xml(self, rule: Rule):

        protein_element = etree.Element('protein')

        protein_id = etree.SubElement(protein_element, 'id')
        protein_id.text = self.name

        sequence_length = etree.SubElement(protein_element, 'sequence_length')
        sequence_length.text = str(self.length)

        class_name = etree.SubElement(protein_element, 'class_name')
        class_name.text = rule.name

        domain_architecture = etree.SubElement(protein_element, 'most_likely_architecture')
        for domain in self.best_architecture.domains:
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

        other_domains = [x for x in self.domains if x not in self.best_architecture.domains]
        if other_domains:
            _other_domains = etree.SubElement(protein_element, 'other_matching_domains')
            for domain in other_domains:
                _domain = etree.SubElement(_other_domains, "domain")
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


class Architecture:
    def __init__(self, _id: str, domains: list):
        self._id = _id
        self.domains = domains
        self.domain_nb = len(domains)
        self.logscore = None

    def domain_names(self) -> list:
        """

        @return: list of domain names
        """
        return [x.qname for x in self.domains]

    def get_logscore(self) -> float:
        """

        @return: sum of -log(all domains ival)
        """
        return sum([-np.log(x.dom_ival) for x in self.domains])

    def get_bitscore(self) -> float:
        """

        @return: sum of domain's score
        """
        return sum([x.dom_score for x in self.domains])

    def is_ival_null(self):
        return True in [x.dom_ival == 0. for x in self.domains]
