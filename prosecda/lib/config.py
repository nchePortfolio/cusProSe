# -*- coding: utf-8 -*-
"""
Created on Wed Apr  1 17:41:15 2020

@author: nicolas
"""
import os
import argparse
import pkg_resources as pkg_r
import json
import datetime
date = datetime.datetime.now()
date = date.isoformat().replace(':', '.')

from prosecda.lib import seqio
from prosecda.lib import rules
from prosecda.lib import logger as logging

class Parameters():
    """
    Wrapper of all input files and arguments
    """
    def __init__(self, args):
        self.proteome_filename = args.proteome
        self.fasta_dict = seqio.read_fasta(sequences=self.proteome_filename)
        self.domtblout = args.hmmdb
        self.yamlrules = args.rules
        self.outpath = args.out+'run_'+date+'/'
        os.makedirs(self.outpath, exist_ok=True)

        self.score_co = args.score
        self.cov = args.cov
        self.cval = args.cval
        self.ival = args.ival
        self.acc = args.acc
        self.pdf = args.pdf
        self.rules = rules.parse_rules(filename=self.yamlrules,
                                       score_co=self.score_co)

        self.update_logging()
        self.logger = logging.get_logger(name=__name__)

    def update_logging(self):
#        template_path = os.path.join(os.pardir, 'data/logging_template.json')
#        path2file = pkg_r.resource_filename(__name__, template_path)
        template_path = 'prosecda/data/logging_template.json'
        path2file = pkg_r.resource_filename(pkg_r.Requirement.parse('prosecda'), template_path)
        with open(path2file, 'rt') as f:
            config = json.load(f)

        handlers = config['handlers']
        handlers['info_handler']['filename'] = self.outpath + 'info.log'
        handlers['summary_handler']['filename'] = self.outpath + 'summary.log'

        with open(self.outpath+'logging.json', "w") as write_file:
            json.dump(config, write_file, indent=4)

    def summary(self):
        log = []
        txt = '# Summary of input files used parameters'
        log.append(txt)
        log.append(len(txt)*'-')
        log.append('- Output of hmmscan (.domtblout): {}'.format(self.domtblout))
        log.append('- Proteome (.fasta): {}'.format(self.proteome_filename))
        log.append('- Rules (.yaml): {}'.format(self.yamlrules))
        log.append('- Output path: {}'.format(self.outpath))
        log.append('- Score cutoff for domain match: {}'.format(self.score_co))
        log.append('')

        return log

def get_arguments():
    """
    Returns all arguments given as inputs
    """
    parser = argparse.ArgumentParser(description='Search proteins matching rules.')
    parser.add_argument("-proteome", required=True, nargs="?",
                        help="Proteome file (.fasta) ")
    parser.add_argument("-hmmdb", required=True, nargs="?",
                        help="hmmsearch output (.domtblout)")
    parser.add_argument("-rules", required=True, nargs="?",
                        help="Rules'file (.yaml)")
    parser.add_argument("-out", required=False, nargs="?", default='./', type=str,
                        help="Output directory")

    parser.add_argument("-cov", required=False, default=0.2, type=float,
                        help="Minimum percentage of coverage alignment between hmm hit and hmm profile (0.2)")
    parser.add_argument("-cval", required=False, default=0.01, type=float,
                        help="hmmer conditional e-value cutoff (0.01)")
    parser.add_argument("-ival", required=False, default=0.01, type=float,
                        help="hmmer independant e-value cutoff (0.01)")
    parser.add_argument("-score", required=False, default=3.0, type=float,
                        help="hmmer score cutoff (3.0)")
    parser.add_argument("-acc", required=False, default=0.6, type=float,
                        help="hmmer mean probability of the alignment accuracy between each residues of the target and the corresponding hmm state (0.6)")
    parser.add_argument("-pdf", required=False, action='store_true', help="True to generate pdf results (False)")
    args = parser.parse_args()

    return args
    
class Test_args():
    path2package = pkg_r.Requirement.parse('prosecda')
    path = 'prosecda/tests/'

    def __init__(self):
        self.proteome = self.getpath(filename='dataset/fusarium_fujikuroi_IMI58289_V2_protein.fasta')
        self.hmmdb = self.getpath(filename='dataset/fusarium_fujikuroi_IMI58289_V2_protein.domtblout')
        self.rules = self.getpath(filename='dataset/annotation_rules.yaml')
        self.out = self.getpath()

        self.score = 3.0
        self.cov = 0.2
        self.cval = 0.01
        self.ival = 0.01
        self.acc = 0.6
        self.pdf = False
        
    def getpath(self, filename=''):
        return pkg_r.resource_filename(self.path2package, self.path+filename)
        
        
        
        
        
        
        
        