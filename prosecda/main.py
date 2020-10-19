# -*- coding: utf-8 -*-
"""
Created on Wed Apr  1 17:25:46 2020

@author: nicolas
"""
import os
import sys

import lib.logHandler as logHandler
import lib.external as external
import prosecda.lib.parameters as parameters
import prosecda.lib.path as path
import prosecda.lib.hmmer as hmmer
import prosecda.lib.match as match
import prosecda.lib.report as report


def main():
    param = parameters.Param(parameters.get_arguments())
    logger = logHandler.Logger(name='prosecda', outpath=param.outdirname)
    param.description()
    for rule in param.rules:
        print(rule.summary())
    sys.exit()

    # Runs hmmsearch and gets hits from its output (.domtblout format)
    logger.title('Running hmmsearch...')
    hmmsearch = external.HmmSearch(input_hmm=param.hmmdb, input_db=param.proteome_filename,
                                   parameters=param, outdir=param.outdirname,
                                   basename=os.path.basename(param.proteome_filename))
    hmmsearch.run()
    proteins = hmmsearch.get_proteins()

    for protein in proteins:
        protein_path = path.Path(domains=protein.domains)
        protein_path.search()
        protein.architectures = protein_path.architectures


    sys.exit(0)

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


if __name__ == '__main__':
    sys.exit(main())
