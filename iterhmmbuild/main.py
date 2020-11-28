#!/usr/bin/python2.7
# -*- coding: utf-8 -*-
"""
Created on Mon Jul 16 15:45:57 2018

"""
# import os
import sys

import lib.logHandler as logHandler
from iterhmmbuild.lib import parameters, pipeline


def main():
    param = parameters.Param(args=parameters.get_args())
    logger = logHandler.Logger(name='main', outpath=param.outdirname)
    param.description()

    iterhmmbuilder = pipeline.IterHmmBuilder(_input=param.fasta_fname, input_db=param.protdb, param=param)
    logger.title("Running iterHmmBuilder")
    iterhmmbuilder.run()

if __name__ == '__main__':
    sys.exit(main())
