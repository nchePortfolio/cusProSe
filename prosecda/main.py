# -*- coding: utf-8 -*-
"""
Created on Wed Apr  1 17:25:46 2020

@author: nicolas
"""
import sys

#sys.path.append('/home/nicolas/spyder_workspace/ProSeCDA/prosecda')
#import os

from prosecda.lib import logger as logging
from prosecda.lib import config
from prosecda.lib import header
from prosecda.lib import hmmer
from prosecda.lib import match
from prosecda.lib import report


def main(args=None):
    if not args:        
        param = config.Parameters(config.get_arguments())
    else:
        param = config.Parameters(args)
        print('\n'.join(param.summary()))

    logger = logging.get_logger(name='prosecda', param=param)
    
    # Resumes parameters
    for line in header.get_logo():
        logger.info(line)
    
    for line in param.summary():
        logger.info(line)
    
    # Gets a list of Hmm_query instances from an hmmscan domtblout file
    hmm_queries = hmmer.parse_domtblout(param=param)
    
    # Searches queries matching rules
    matches = match.run_search(param=param, hmm_queries=hmm_queries)
    
    # Writes output
    results_report = report.Report(matches=matches, param=param)
    results_report.write_xml()
    results_report.run_report()
    
    # Draws pdf plots
    if param.pdf:
        for _match in matches:
            report.draw_match(match=_match, param=param)
            
def test():
    args = config.Test_args()
    sys.exit(main(args=args))
            
if __name__ == '__main__':
    sys.exit(main())
    
    
    
    
    
    
    
    
    
    
