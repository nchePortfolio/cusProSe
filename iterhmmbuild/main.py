#!/usr/bin/python2.7
# -*- coding: utf-8 -*-
"""
Created on Mon Jul 16 15:45:57 2018

"""
import os
import glob
import sys

import lib.logHandler as logHandler
from iterhmmbuild.lib import parameters, pipeline


def main():
    param = parameters.Param(args=parameters.get_args())
    logger = logHandler.Logger(name='main', outpath=param.outdirname)
    param.description()

    if os.path.isdir(param.fasta_fname):
        fasta_filenames = (x for x in glob.glob(param.fasta_fname + '/' + '*.fa'))
        if fasta_filenames:
            for fasta_filename in fasta_filenames:
                param.hmm_name = os.path.basename(fasta_filename).split('.')[0]
                iterhmmbuilder = pipeline.IterHmmBuilder(_input=fasta_filename, input_db=param.protdb, param=param)
                logger.title("Running iterHmmBuilder")
                iterhmmbuilder.run()

    else:
        iterhmmbuilder = pipeline.IterHmmBuilder(_input=param.fasta_fname, input_db=param.protdb, param=param)
        logger.title("Running iterHmmBuilder")
        iterhmmbuilder.run()


if __name__ == '__main__':
    sys.exit(main())
