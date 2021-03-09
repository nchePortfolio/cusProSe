# -*- coding: utf-8 -*-
"""
Created on Wed Apr  1 17:41:15 2020

@author: nicolas
"""
import os
import argparse
import datetime
import prosecda.lib.seqio as seqio
import lib.logHandler as logHandler

date = datetime.datetime.now()
date = '_'.join(str(date).split('.')[0].split()).replace(':', '-')


class Param:
    """

    Wrapper of all input files and arguments

    """
    def __init__(self, args):
        """

        @param args: return of argparse.ArgumentParser.parse_args()
        """
        self.proteome_filename = args.proteome
        self.fasta_dict = seqio.read_fasta(sequences=self.proteome_filename)
        self.hmmdb = args.hmmdb
        self.yamlrules = args.rules

        outpath = args.out if args.out[-1] == '/' else args.out + '/'
        default_mainname = 'prosecda_' + date + '/'
        self.outdirname = outpath + default_mainname
        os.makedirs(self.outdirname, exist_ok=True)

        self.score_co = args.score
        self.cov = args.cov
        self.cval = args.cval
        self.ival = args.ival
        self.acc = args.acc
        self.pdf = args.pdf
        # self.rules = rules.parse_rules(filename=self.yamlrules, score_co=self.score_co)

        self.logger = logHandler.Logger(name=__name__)

    def description(self):
        """

        A formatted string describing all key index positions stored.

        Returns:
            object: str

        """
        self.logger.info('')
        self.logger.info('# Summary of input files used parameters:')
        self.logger.info('- Output of hmmscan (.domtblout): {}'.format(self.hmmdb))
        self.logger.info('- Proteome (.fasta): {}'.format(self.proteome_filename))
        self.logger.info('- Rules (.yaml): {}'.format(self.yamlrules))
        self.logger.info('- Output path: {}'.format(self.outdirname))
        self.logger.info('- E-value cutoff for domain match: {}'.format(self.ival))
        self.logger.info('')


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

    parser.add_argument("-cov", required=False, default=0.0, type=float,
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
