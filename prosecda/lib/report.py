# -*- coding: utf-8 -*-
"""
Created on Wed Apr  1 17:41:05 2020

@author: nicolas
"""
import os
from prosecda.lib import header
from prosecda.lib import logger as logging

import matplotlib
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import matplotlib.gridspec as gridspec
from matplotlib.backends.backend_pdf import PdfPages

matplotlib.interactive(False)
#print(plt.style.available)
plt.style.use('seaborn-white')
            
class Report():
    def __init__(self, matches, param):
        self.param = param
        self.matches = matches
        self.logger = logging.get_logger(__name__)
        self.summary_filename = self.param.outpath+'results_summary.txt'
    
    def write_xml(self):
        outdir = self.param.outpath+'xml_matches/'
        os.mkdir(outdir)
        
        self.logger.debug('')
        log = '# Writing xml of matches in {}'.format(outdir)
        log_deco = len(log)*'-'
        self.logger.debug(log_deco)
        self.logger.debug(log)
        self.logger.debug(log_deco)
        
        for match in self.matches:
            self.logger.debug('- Writing xml for queries matching the rule {}'.format(match.family_rules.name))
            with open (outdir+match.family_rules.name+'.xml', 'w') as xml_file:
                xml_file.write(match.get_xml())
        self.logger.debug('')

    def run_report(self):
        for line in header.get_logo():
            self.logger.info(line)
        
        for line in self.param.summary():
            self.logger.info(line)
        
        for match in self.matches:               
            for line in match.summary():
                self.logger.info(line)
            self.logger.info('')
     
class Draw_protein():
    MAX_NROWS = 20
    def __init__(self, protein):
        self.protein = protein        
        self.protein_length = float(len(protein.sequence))
        self.architectures = protein.architectures

        self.fig = plt.figure(figsize=(8,12))
        plt.gcf().subplots_adjust(left = 0.05, bottom = 0.05,
                               right = 0.995, top = 0.9, wspace = 0.105, hspace = 0.2)
        self.gs = gridspec.GridSpec(self.MAX_NROWS, 5)
        
        
    def draw_seq(self, ax):    
        """
        Draws a sequence pattern representing as a rectangle
        Returns fig and ax instances
        """
        ax.set_xlim([1/self.protein_length, self.protein_length/self.protein_length])
        ax.set_ylim([0,0.2])
        
        mean_ax_lim = (ax.get_ylim()[1]-ax.get_ylim()[0])/2.
        width = self.protein_length/self.protein_length
        height = mean_ax_lim*0.01
        x = 1/self.protein_length
        y = mean_ax_lim - height/2. 
     
        ax.add_patch(
            patches.Rectangle(
                (x, y),
                width,
                height,
                color = 'grey',
                alpha = 0.9
            )
        )
        
    def draw_domain(self, ax, domain):
        """
        Draws a domain
        """
        color = 'dodgerblue'
        start_pos = domain.env_from
        end_pos = domain.env_to
        
        mean_ax_lim = (ax.get_ylim()[1]-ax.get_ylim()[0])/2    
        width = (end_pos - start_pos) / self.protein_length
        height = mean_ax_lim*0.5
        x = start_pos / self.protein_length
        y = mean_ax_lim - height/2.
     
        ax.add_patch(
        patches.Rectangle(
            (x, y),
                width,
                height,
                color=color,
                alpha=0.95,
                label=domain.qname
            )
        )
        ax.text(ax.patches[-1].get_x()+width/2., ax.patches[-1].get_y()+height*1.4,
                 domain.qname+':'+str(domain.dom_id), fontsize=8, horizontalalignment='center')

    def draw_architecture(self):
        for idx,architecture in enumerate(self.architectures):
            
            ax1 = self.fig.add_subplot(self.gs[idx, :-2])
            self.draw_seq(ax1)
            for domain in architecture.domains:
                self.draw_domain(ax1, domain)
            ax1.text(0, ax1.patches[0].get_y()-0.045, '1',fontsize=8, ha='right')
            ax1.text(1., ax1.patches[0].get_y()-0.045, str(int(self.protein_length)),
                     fontsize=8, ha='left')
            
            ax2 = self.fig.add_subplot(self.gs[idx,-2:])
            arch_label = 'Architecture '+str(idx+1)
            ax2.text(0.5, 0.5, arch_label, fontsize=10, fontweight='bold',
                     ha='center', va='center')
              
            ax1.axis('off')
            ax2.axis('off')
            
    def draw_table(self):        
        table_data = []
        for domain in self.protein.domains:
            if domain.qname not in ['start', 'end']:
                table_data.append([str(domain.env_from), str(domain.env_to), str(domain.dom_ival), str(domain.dom_score)])
            
        rowLabels = [ x.qname+':'+str(x.dom_id) for x in self.protein.domains if x.qname not in ['start', 'end'] ]
        colLabels = ['from', 'to', 'i-eval', 'score']

        ax = self.fig.add_subplot(self.gs[10, 1:])
        table = ax.table(cellText=table_data, rowLabels=rowLabels,
                 colLabels=colLabels, rowLoc='center', colLoc='center', loc='center', cellLoc='center',
                 colWidths=[0.185 for x in range(len(colLabels))])
                 
        for (row, col), cell in table.get_celld().items():
            if (row == 0):
                cell.set_text_props(fontproperties=matplotlib.font_manager.FontProperties(weight='bold'))
        table.scale(1,2)
        ax.axis('off')
        
    def plot(self):
        self.draw_architecture()
        self.draw_table()        
        self.fig.suptitle(self.protein.name, y=0.95, fontsize=16,
                          fontweight='bold', verticalalignment='center')
                     
        return self.fig
        
def draw_match(match, param):
    logger = logging.get_logger(__name__)
    logger.info('\n')
    log = '** Creating pdf for queries matching the rule {}'.format(match.family_rules.name)
    log_deco = len(log)*'#'
    logger.info(log_deco)
    logger.info(log)
    logger.info(log_deco+'\n')
    
    out_path = param.outpath+'pdf_matches/'
    if not os.path.exists(out_path):
        os.mkdir(out_path)
    
    with PdfPages(out_path+match.family_rules.name+'.pdf') as pdf_pages:
        for protein in match.hmm_queries:
            logger.debug('- Plotting protein {} **'.format(protein.name))
            results_drawing = Draw_protein(protein)
            fig = results_drawing.plot()
            
            pdf_pages.savefig(fig)
            plt.close('all')     
        