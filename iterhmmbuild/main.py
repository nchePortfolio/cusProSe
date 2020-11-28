#!/usr/bin/python2.7
# -*- coding: utf-8 -*-
"""
Created on Mon Jul 16 15:45:57 2018

"""
# import os
import sys

import lib.logHandler as logHandler
import iterhmmbuild.lib.parameters as parameters
import iterhmmbuild.lib.pipeline as pipeline


def main():
    param = parameters.Param(args=parameters.get_args())
    logger = logHandler.Logger(name='main', outpath=param.outdirname)
    param.description()

    iterhmmbuilder = pipeline.IterHmmBuilder(_input=param.fasta_fname, input_db=param.protdb, param=param)
    logger.title("Running iterHmmBuilder")
    iterhmmbuilder.run()

    logger.title('Output files for {} HMM profile'.format(param.hmm_name))
    logger.info('HMM profile file:   \t{}'.format(iterhmmbuilder.output_hmm))
    logger.info('Fasta seed file:    \t{}'.format(iterhmmbuilder.output_fasta))
    logger.info('Alignment seed file:\t{}'.format(iterhmmbuilder.output_muscle))
    logger.info('')


if __name__ == '__main__':
    sys.exit(main())
