import os
import sys

import lib.logHandler as logHandler
import lib.external as external
import lib.seqio as seqio
import prosecda.lib.parameters as parameters
import prosecda.lib.rules as Rules
import prosecda.lib.path as path
import prosecda.lib.match as matching


def main():
    param = parameters.Param(parameters.get_arguments())
    logger = logHandler.Logger(name='prosecda', outpath=param.outdirname)
    param.description()

    rules = Rules.parse_yaml(input_filename=param.yamlrules, co_ival=param.ival)
    for rule in rules:
        print(rule.description())

    # Runs hmmsearch and gets hits from its output (.domtblout format)
    logger.title('Running hmmsearch...')
    hmmsearch = external.HmmSearch(input_hmm=param.hmmdb, input_db=param.proteome_filename,
                                   parameters=param, outdir=param.outdirname,
                                   basename=os.path.basename(param.proteome_filename))
    hmmsearch.run()
    proteins = hmmsearch.get_proteins()

    logger.title('Searching for possible domain architectures...')
    for protein in proteins:
        protein_architecture_path = path.Path(protein=protein)
        protein_architecture_path.search()
        protein.set_best_architecture()

    sys.exit()

    fasta_dict = seqio.get_fasta_dict(fasta_filename=param.proteome_filename,
                                      protein_ids=[x.name for x in proteins])

    logger.title('Searching for proteins matching rules...')
    matches = matching.Matches(param=param)
    matches.search(rules=rules, proteins=proteins)
    matches.report(fasta_dict=fasta_dict)


if __name__ == '__main__':
    sys.exit(main())
