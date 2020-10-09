# -*- coding: utf-8 -*-
"""
Created on Mon Apr  6 10:58:21 2020

@author: nicolas
"""

import os
import lib.logger as logging
logger = logging.get_logger(__name__)

def run_hmmscan(proteome=None, output=None, hmmdb=None):
    """
    - Calls hmmscan from hmmer
    - Returns outputfile in domtblout format
    """
    cmd = 'hmmscan '+'-o /dev/null '+'--domtblout '+output+' '+hmmdb+' '+proteome

    logger.info(cmd)
    os.system(cmd)