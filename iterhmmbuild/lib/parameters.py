# -*- coding: utf-8 -*-

import os
import argparse
import datetime
import lib.logHandler as logHandler

date = datetime.datetime.now()
date = '_'.join(str(date).split('.')[0].split()).replace(':', '-')


class Param:
    """
    Wrapper of all input files and arguments
    """

    def __init__(self, args):
        self.fasta_fname = args.fa
        self.hmm_name = args.name if args.name else '.'.join(args.fa.split('.')[0:-1])
        self.protdb = args.protdb
        self.id = args.id
        self.cov = args.cov
        self.cval = args.cval
        self.ival = args.ival
        self.acc = args.acc

        outpath = args.out if args.out[-1] == '/' else args.out + '/'
        default_mainname = 'iterhmmbuild_' + date + '/'
        self.outdirname = outpath + default_mainname
        os.makedirs(self.outdirname, exist_ok=True)

        self.logger = logHandler.Logger(name=__name__)

    def description(self):
        """

        A formatted string describing all key index positions stored.

        Returns:
            object: str

        """
        self.logger.info('')
        self.logger.info('Parameters description:')
        self.logger.info('- fasta filename: ' + self.fasta_fname)
        self.logger.info('- hmm name: ' + self.hmm_name)
        self.logger.info('- proteome database: ' + self.protdb)
        self.logger.info('- id: ' + str(self.id))
        self.logger.info('- cov: ' + str(self.cov))
        self.logger.info('- cval: ' + str(self.cval))
        self.logger.info('- ival: ' + str(self.ival))
        self.logger.info('- acc: ' + str(self.acc))
        self.logger.info('- out: ' + self.outdirname)
        self.logger.info('')


def get_args():
    """
    Returns:
        Parameters
    """

    parser = argparse.ArgumentParser(description='Iterative building of hmm profiles')
    parser.add_argument("-fa", required=True, nargs="?",
                        help="Fasta file of sequence(s) used as first seed or directory containing such files")
    parser.add_argument("-protdb", required=True, nargs="?",
                        help="Sequences used to learn the hmm profile (fasta format)")
    parser.add_argument("-name", required=False, nargs="?", type=str,
                        help="Name for the HMM profile (fasta name by default).")
    parser.add_argument("-out", required=False, nargs="?", default='./', type=str,
                        help="Output directory")
    parser.add_argument("-id", required=False, default=0.9, type=float,
                        help="Sequence identity threshold to remove redundancy in seeds'sequences (0.9)")
    parser.add_argument("-cov", required=False, default=0.0, type=float,
                        help="Minimum percentage of coverage alignment between hmm hit and hmm profile (0.0)")
    parser.add_argument("-cval", required=False, default=0.01, type=float,
                        help="hmmer conditional e-value cutoff (0.01)")
    parser.add_argument("-ival", required=False, default=0.01, type=float,
                        help="hmmer independant e-value cutoff (0.01)")
    parser.add_argument("-acc", required=False, default=0.6, type=float,
                        help="hmmer mean probability of the alignment accuracy between each residues of the target and the corresponding hmm state (0.6)")

    args = parser.parse_args()

    return args
