# -*- coding: utf-8 -*-
"""
Created on Wed Apr  1 17:41:27 2020

@author: nicolas
"""
import os
import networkx as nx
from prosecda.lib import logger as logging

class Hmm_target(object):
    """
    Wrapper of all descriptors of an HMM target from
    hmmsearch or hmmscan
    
    Arguments:
        - cols: list of all descriptors of an HMM target
                coming from a domtblout parsing (see read_domtblout()).
                The target is a domain for hmmsearch or a protein for hmmscan
        - domtype: 'search' if domtbltout comes from hmmsearch
                   'scan' if domtblout comes from hmmscan
    """
    def __init__(self, cols=[], domtype='search'):    
        if domtype == 'search':
            self.tname = cols[0] if cols else None
            self.tlen = int(cols[2]) if cols else None
            self.qname = cols[3] if cols else None
            self.qlen = int(cols[5]) if cols else None
        elif domtype == 'scan':
            self.tname = cols[3] if cols else None
            self.tlen = int(cols[5]) if cols else None
            self.qname = cols[0] if cols else None
            self.qlen = int(cols[2]) if cols else None
        self.seq_eval = float(cols[6]) if cols else None
        self.seq_score = float(cols[7]) if cols else None
        self.seq_bias = float(cols[8]) if cols else None
        self.dom_id = int(cols[9]) if cols else None
        self.dom_nb = int(cols[10]) if cols else None
        self.dom_cval = float(cols[11]) if cols else None
        self.dom_ival = float(cols[12]) if cols else None
        self.dom_score = float(cols[13]) if cols else None
        self.dom_bias = float(cols[14]) if cols else None
        self.hmm_from = int(cols[15]) if cols else None
        self.hmm_to = int(cols[16]) if cols else None
        self.ali_from = int(cols[17]) if cols else None
        self.ali_to = int(cols[18]) if cols else None
        self.env_from = int(cols[19]) if cols else None
        self.env_to = int(cols[20]) if cols else None
        self.acc = float(cols[21]) if cols else None
        self.sequence = None
        self.pass_score_co = False # flags if domain passes a given score cutoff
        
    def get_name(self):
        return '{}.{}'.format(self.qname, self.dom_id)
        
    def get_sequence(self, query_sequence):
        if self.sequence is None:
            self.sequence = query_sequence[self.env_from-1:self.env_to]

class Architecture:
    """
    Wrapper describing an architecture of a protein. An architecture is defined
    as a set of non-overlapping domains.
    
    Argument:
        domains: list of Hmm_target instances
    """
    def __init__(self, domains):
        self.domains = domains

    def domain_names(self):
        return [ x.qname for x in self.domains ]

class Hmm_query(object):
    """
    Wrapper describing a protein query
    
    Constructor:
        - name: protein query name (str)
        - domains: list of Hmm_target instances
        - architectures: list of Architecture instances
    """
    def __init__(self, name=None, score_co=3):
        self.name = name
        self.score_co = score_co
        self.sequence = None
        self.length = self.get_seqlen()
        self.domains = []
        self.architectures = []
        self.logger = logging.get_logger(__name__)

        
    def get_seqlen(self):
        if self.sequence is None:
            return 0
        else:
            return len(self.sequence)
        
    def get_match_architectures(self, _bool=[]):
        """
        Returns architectures matching rules
        
        Argument:
            _bool: list of boolean values refering to each architecture
        """
        if not _bool:
            return self.architectures
        else:
            return [ x for x,j in zip(self.architectures, _bool) if j ]

    def is_duplicate(self, Hmm_target):
        """
        Checks if an Hmm_target instance has already been assigned to the
        Hmm_query instance.
        Returns True if already assigned, False otherwise
        """
        duplicate_flag = False
        
        if len(self.domains) >= 1:
            dom_samename = [ dom for dom in self.domains if dom.qname == Hmm_target.qname ]
            if dom_samename:
                for dom in dom_samename:
                    if Hmm_target.dom_ival == dom.dom_ival:
                        if Hmm_target.env_from == dom.env_from and Hmm_target.env_to == dom.env_to:
                            duplicate_flag = True
                            break
        return duplicate_flag

    def add_domain(self, Hmm_target):
        """
        Adds an Hmm_target instance in the list of domains of the Hmm_query
        instance.
        Addition occurs only if:
            - Hmm_target is not already present
            - Hmm_target.score >= param.score (default=3.0)
            
        TODO:
            - add other criteria to accept domain:
                - accuracy ?
                - coverage ?
            - define nb of residues (or %) for overlap
            - merge domains ? 
                Example for XP_023437038.1:
                    -> 2 architectures are found:
                        - KS.1 - AT.1 - PP-binding.2
                        - KS.2 - AT.1 - PP-binding.2
                    -> KS profile is composed of 422 aa
                        - aa of KS.1 match from 1 to 256 of the profile
                        - aa of KS.2 match from 294 to 422 of the profile
                        - KS.2 overlap KS.1 by 1 aa:
                            - KS.1 match from 40 to 296 of the query sequence
                            - KS.2 match from 295 to 422 of the query sequence
        """
        if self.is_duplicate(Hmm_target):
            warn = ' - Removal of domain {}: (duplicate)'.format(Hmm_target.get_name())
            self.logger.warning(warn) 
        else:
            if Hmm_target.dom_score >= self.score_co:
                self.domains.append(Hmm_target)
                self.logger.debug(' - Addition of domain {}'.format(Hmm_target.get_name()))
            else:
                debug = ' - Dropping of domain {}: bit score {} < {} (i-evalue: {})'.\
                format(Hmm_target.get_name(), Hmm_target.dom_score,
                       self.score_co, Hmm_target.dom_ival)
                self.logger.debug(debug) 
     
    def add_virtual_domains(self):
        """
        Creates and adds virtual Hmm_target instance at each extremity of the
        of the Hmm_query instance in order to make the search pathes process
        (self.get_architectures()) easier (only one start point and one end
        point).
        The final step sorts all domains of the Hmm_query instance by their 
        position in ascending order.
        """
        virtual_start, virtual_end = Hmm_target(), Hmm_target()
        virtual_start.qname, virtual_end.qname = 'start', 'end'
        virtual_start.dom_id, virtual_end.dom_id = 1, 1
        virtual_start.env_from, virtual_start.env_to = -10, -5
        
        max_coor = max([ dom.env_to for dom in self.domains ])
        virtual_end.env_from, virtual_end.env_to = max_coor+5, max_coor+10
        
        self.domains.append(virtual_start)
        self.domains.append(virtual_end)
        self.sort_domains_by_pos()
        
    def rm_virtual_domains(self):
        virtual_domains = [ x for x in self.domains if x.qname in ['start', 'end'] ]
        for dom in virtual_domains:
            self.domains.remove(dom)
        
    def sort_domains_by_pos(self):
        """
        Sorts all domains of the Hmm_query instance by their 
        position in ascending order.
        """
        self.domains = [ x[0] for x in sorted([ (x, x.env_from) for x in self.domains ], key=lambda x: x[1]) ]

    def get_edges(self):
        """
        Finds all contiguous domain pairs (edges) with no overlap
        
        Returns: list of list of Hmm_target instance pairs
        """         
        edges = []
        for i, dom_i in enumerate(self.domains):
            for j, dom_j in enumerate(self.domains):
                if j <= i:
                    continue
                else:
                    if self.is_overlap(dom_i, dom_j) == False:
                        if self.is_dom_between(dom_i.env_to, dom_j.env_from) == False:
                            edges.append((dom_i, dom_j))                   
        return edges

    def is_overlap(self, dom_i, dom_j):
        """
        Checks if domains are overlapping. An overlap is currently defined
        if at least 1 aa is shared between 2 domains.
        
        Arguments:
            - dom_i: Hmm_target instance
            - dom_j: Hmm_target instance

        Returns: True if overlap, False otherwise
        """
        overlap_flag = False
        # dom_i overlap on its left part
        if dom_j.env_from <= dom_i.env_from <= dom_j.env_to and dom_i.env_from <= dom_j.env_to <= dom_i.env_to :
            overlap_flag = True
        # dom_i overlap on its right part
        if dom_j.env_from <= dom_i.env_to <= dom_j.env_to and dom_i.env_from <= dom_j.env_from <= dom_i.env_to :
            overlap_flag = True
        # dom_j is included in dom_i
        if dom_i.env_from <= dom_j.env_from <= dom_i.env_to and dom_i.env_from <= dom_j.env_to <= dom_i.env_to :
            overlap_flag = True
        # dom_i is included in dom_j
        if dom_j.env_from <= dom_i.env_from <= dom_j.env_to and dom_j.env_from <= dom_i.env_to <= dom_j.env_to :
            overlap_flag = True
        
        return overlap_flag

    def is_dom_between(self, i_to, j_from):
        """
        Checks if one domain is present between a set of two domains.
        
        Arguments:
            - i_to: position (int) of a domain on the left
            - j_from: position (int) of a domain on the right
            
        Return: True if a domain is present, False otherwise
        """
        dom_inside_flag = False
        for dom in self.domains:
            if dom.env_to < j_from and dom.env_from > i_to:
                dom_inside_flag = True
                break
    
        return dom_inside_flag   
        
    def get_architectures(self):
        """
        Finds all possible combinations/architectures of non-overlapping domains.
        """
        self.add_virtual_domains() 
        
        G=nx.DiGraph()
        G.add_edges_from(self.get_edges())
        #nx.draw(G, with_labels=True)
    
        source = self.domains[0] # 'virtual_start' domain
        target = self.domains[-1] # 'virtual_end' domain
        
        paths = [ path for path in nx.all_simple_paths(G, source=source, target=target) ]
        paths = sorted([ x for x in paths ], key=lambda x: len(x))
        
        # removal of virtual_domains
        self.rm_virtual_domains()
        
        subpath = []
        for i,path_i in enumerate(paths):
            for j, path_j in enumerate(paths):
                if j > i :
                    if sum([ x in path_j for x in path_i ] ) == len(path_i):
                        if path_i not in subpath:
                            subpath.append(path_i)                            
                        
        for p in [ x for x in paths if x not in subpath ]:
            domains = [ x for x in p if x.qname not in ['start','end'] ]
            
            domains_copy = []
            for domain in domains:
                a = Hmm_target()
                for key,value in domain.__dict__.items():
                    a.__dict__[key] = value
                domains_copy.append(a)
                del(a)
                
            self.architectures.append(Architecture(domains_copy))

def parse_domtblout(param):
    """
    Parses output of hmmscan/hmmsearch
    
    Argument:
        - output in .domtblout format
        
    Return:
        - dictionary of Hmm_query instances (key=query_name, value=Hmm_query())
    """
    logger = logging.get_logger(__name__)

    # Creates the dictionary
    log = '# Parsing of {}... #'.format(os.path.basename(param.domtblout))
    log_deco = len(log)*'-'
    logger.info(log_deco)
    logger.info(log)
    logger.info(log_deco)
    
    hmm_queries = {}
    with open(param.domtblout, 'r') as scanfile:
        for domtbl_line in scanfile:
            if not domtbl_line.startswith('#'):
                query = domtbl_line.split()[3]
                if query not in hmm_queries:
                    hmm_queries[query] = Hmm_query(query, param.score_co)
                    hmm_queries[query].sequence = param.fasta_dict[query]
                    logger.debug('')
                    logger.debug('* Reading of query {} *'.format(query))
                hmm_target = Hmm_target(domtbl_line.split()[:22], domtype='scan')
                hmm_target.get_sequence(query_sequence=hmm_queries[query].sequence)
                hmm_queries[query].add_domain(hmm_target)

                
    # Finds all possible architectures for all Hmm_query instances
    logger.info('')
    log = '# Building of all possible architectures of queries #'
    log_deco = len(log)*'-'
    logger.info(log_deco)
    logger.info(log)
    logger.info(log_deco)
    
    for query in sorted(hmm_queries):
        logger.info('')
        logger.info('* Reading of query {}'.format(query))
        query_instance = hmm_queries[query]
        domain_nb = len(query_instance.domains)
        logger.debug('- {} domain(s) in query: {}'.\
                    format(domain_nb,
                           ', '.join([ x.get_name() for x in query_instance.domains ])))
        
        query_instance.get_architectures()
        
        arch_nb = len(query_instance.architectures)
        logger.info('- {} possible architecture(s) found:'.format(arch_nb))
            
        for architecture in query_instance.architectures:
            logger.info('  -> '+' - '.join([ x.get_name() for x in architecture.domains ]))
    
    return hmm_queries    
    
