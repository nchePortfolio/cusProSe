import os
import sys

import lib.logHandler as logHandler
import lib.external as external
import lib.seqio as seqio
import prosecda.lib.parameters as parameters
import prosecda.lib.rule_parser as rule_parser
import prosecda.lib.path as path
import prosecda.lib.match as matching


def main():
    param = parameters.Param(parameters.get_arguments())
    logger = logHandler.Logger(name='prosecda', outpath=param.outdirname)
    param.description()

    rules = rule_parser.Parser(input_filename=param.yamlrules, co_ival=param.ival)
    rules.description()

    # Runs hmmsearch and gets hits from its output (.domtblout format)
    logger.title('Running hmmsearch...')
    hmmsearch = external.HmmSearch(input_hmm=param.hmmdb, input_db=param.proteome_filename,
                                   parameters=param, outdir=param.outdirname,
                                   basename=os.path.basename(param.proteome_filename),
                                   domains=rules.list_alldomains())
    hmmsearch.run()
    proteins = hmmsearch.get_proteins()
    # sys.exit()

    logger.title('Searching for possible domain architectures...')
    for protein in proteins:
        protein_architecture_path = path.Path(protein=protein)
        protein_architecture_path.search()
        protein.set_best_architecture()

    fasta_dict = seqio.get_fasta_dict(fasta_filename=param.proteome_filename,
                                      protein_ids=[x.name for x in proteins])

    logger.title('Searching for proteins matching rules...')
    matches = matching.Matches(param=param)
    matches.search(rules=rules.rules, proteins=proteins)
    matches.report(fasta_dict=fasta_dict)


if __name__ == '__main__':
    sys.exit(main())
