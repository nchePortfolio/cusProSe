# -*- coding: utf-8 -*-
"""
Created on Wed Apr  1 17:42:07 2020

@author: nicolas
    
"""

from lxml import etree
from prosecda.lib import logger as logging

class Match():
    """
    Wrapper containing informations about hmm hits that match rules defining 
    a given family. 
    
    Constructor:
        - family_rules: instance of Family_rules
        - hmm_queries: list of Hmm_query instances
        - matching_arch_bool: list of boolean (one for each hmm_queries element)
    """
    def __init__(self, family_rules, param):
        self.family_rules = family_rules
        self.param = param
        self.hmm_queries = []
        self.matching_arch_bool = []
        self.logger = logging.get_logger(__name__)
        
    def query_names(self):
        """
        Returns a list of all hmm_queries domain names
        """
        if not self.hmm_queries:
            return None
        else:
            return [ x.name for x in self.hmm_queries ]
    
    def get_xml(self):
        """
        Returns an XML format resuming informations about hits in the
        Match instance
        """
        annotation = etree.Element('annotation')
        inputs = etree.SubElement(annotation,'inputs')
        domtblout = etree.SubElement(inputs,'domtblout')
        domtblout.text = self.param.domtblout
        proteome = etree.SubElement(inputs,'proteome')
        proteome.text = self.param.proteome_filename
        yamlrules = etree.SubElement(inputs,'yamlrules')
        yamlrules.text = self.param.yamlrules
        
        family = etree.SubElement(annotation,'family')
        family_name = etree.SubElement(family, "name")
        family_name.text = self.family_rules.name
        family_comment = etree.SubElement(family, "comment")
        family_comment.text = self.family_rules.comment
        
        family_rule = etree.SubElement(family, "rule")
        mandatories = etree.SubElement(family_rule, "mandatories")
        
        for dom_name, dom_score in self.family_rules.mandatory:        
            name = etree.SubElement(mandatories, "name")
            name.text = dom_name
            score = etree.SubElement(mandatories, "score")
            score.text = str(dom_score)

        forbidden = etree.SubElement(family_rule, "forbidden")
        if self.family_rules.forbidden:
            for dom_name in self.family_rules.forbidden:
                name = etree.SubElement(forbidden, "name")
                name.text = dom_name
            
#        forbidden = etree.SubElement(family_rule, "forbidden")
#        if self.family_rules.forbidden:
#            for i,dom_name in enumerate(self.family_rules.forbidden, start=1):
#                forbid = etree.SubElement(forbidden, "forbid")
#                forbid.set('id', str(i))
#                name = etree.SubElement(forbid, "name")
#                name.text = dom_name
        
        proteins = etree.SubElement(annotation,'proteins')
        match_nb = etree.SubElement(proteins,'match_nb')
        match_nb.text = str(len(self.hmm_queries))
        for i,query in enumerate(self.hmm_queries):        
            protein = etree.SubElement(proteins, "protein")
            protein.set('id', query.name)
            protein_sequence = etree.SubElement(protein, "sequence")
            protein_sequence.text = query.sequence
            protein_length = etree.SubElement(protein, "length")
            protein_length.text = str(len(query.sequence))
            architectures = etree.SubElement(protein, "architectures")
            architectures_nb = etree.SubElement(architectures, "number")
            architectures_nb.text = str(len(query.architectures))
            for j,(arch,arch_bool) in enumerate(zip(query.architectures, self.matching_arch_bool[i]), start=1):
                architecture = etree.SubElement(architectures, "architecture")
                architecture.set('id', str(j))
                is_matching_rule = etree.SubElement(architecture, "is_matching_rule")
                is_matching_rule.text = str(arch_bool)
                domains = etree.SubElement(architecture, "domains")
                domains_nb = etree.SubElement(domains, "number")
                domains_nb.text = str(len(arch.domains))
                for dom in arch.domains:
                    domain = etree.SubElement(domains, "domain")
                    domain.set('name', dom.qname)
                    domain_sequence = etree.SubElement(domain, "sequence")
                    domain_sequence.text = dom.sequence
                    domain_length = etree.SubElement(domain, "length")
                    domain_length.text = str(len(dom.sequence))
                    domain_from = etree.SubElement(domain, "from")
                    domain_from.text = str(dom.env_from)
                    domain_to = etree.SubElement(domain, "to")
                    domain_to.text = str(dom.env_to)
                    domain_score = etree.SubElement(domain, "score")
                    domain_score.text = str(dom.dom_score)
                    domain_ival = etree.SubElement(domain, "i-eval")
                    domain_ival.text = str(dom.dom_ival)
        
        xml = etree.tostring(annotation, pretty_print=True, encoding="utf-8")
        
        return xml.decode('utf-8')
        
    def summary(self):
        log = []
        match_nb = len(self.hmm_queries)
        txt = '{} protein(s) match the rule {}'.format(match_nb, self.family_rules.name)
        log.append(txt)
        log.append(len(txt)*'-')
        log.append('Comment: {}'.format(self.family_rules.comment))
        log.append('Mandatories: [(name, score), ...]: {}'.format(self.family_rules.mandatory))
        log.append('Forbidden: [name, ...]: {}'.format(self.family_rules.forbidden))
            
        for query in self.hmm_queries:
            log.append('> {}'.format(query.name))
            
        return log

def is_mandatory(mandatories, domains):
    """
    Checks if all mandatory domains are in domains
    
    Arguments:
        - domains: list of domain names (str)
        - mandatories: list of mandatory domain names (str)
        
    Return:
        - True if all mandatories in domains, False otherwise
    """
    return all([ x in set(domains) for x in mandatories ])

def is_forbidden(forbidden, domains):
    """
    Checks if all forbidden domains are in domains
    
    Arguments:
        - domains: list of domain names (str)
        - forbidden: list of forbidden domain names (str)
        
    Return:
        - True if a forbidden domain is in domains, False otherwise
    """
    if forbidden:
        return True in [ x in set(domains) for x in forbidden ]
    else:
        return False

def get_mandatories_passing_score(mandatory_rules, domains):
    """
    Finds mandatory domains in architecture passing the score cutoff assigned
    to a given mandatory domain.
    
    Arguments:
        - mandatory_rules: tuple in the form -> (mandatory name (str),
                                                 mandatory score (float))
        - domains: list of Hmm_target instances
        
    Return:
        - list all mandatory domain names in architecture that passes the score
        cutoff
    """
    for mand_name, mand_score in mandatory_rules:
        for dom in domains:
            if dom.qname == mand_name:
                if dom.dom_score >= mand_score:
                    dom.pass_score_co = True
                else:
                    dom.pass_score_co = False
        
    return [ x.qname for x in domains if x.pass_score_co ]

def is_rule_met(family_rules, architecture):
    """
    Checks if a rule defining a family is met for a given architecture.
    
    Arguments:
        - family_rules: instance of Family_rules
        - architecture: instance of Architecture
        
    Return:
        - True if rule is met, False otherwise
    """
    domains_in_architecture = [x.qname for x in architecture.domains]
    mandatory_domains = [ x[0] for x in family_rules.mandatory ]
    forbidden_domains = [ x for x in family_rules.forbidden ]
    if not is_forbidden(domains=domains_in_architecture, forbidden=forbidden_domains):
        mandatories_passing_score = get_mandatories_passing_score(mandatory_rules=family_rules.mandatory,
                                                                  domains=architecture.domains)
        if is_mandatory(domains=mandatories_passing_score, mandatories=mandatory_domains):
            return True
        else:
            return False
    else:
        return False

def run_search(param, hmm_queries):
    """
    Finds all Hmm_query instances matching defined families.
    For each rule defining a family:
        - a Match instance is created for the rule
        - for each Hmm_query instance, all possible architectures are searched
        for a match.
            - for each architecture
                - the architecture is flagged as a match if conditions are met
                (True appended in matching_arch_bool)
            - if at least one architecture is flagged as a match,
            the Hmm_query instance is flagged as a match for the rule
        - if the Hmm_query instance is flagged as a match,
        the Match instance is appended to matching_families
        
    Arguments:
        - param: instance of Parameters
        - hmm_queries: dictionary of Hmm_query instances
        
    Returns:
        - list of Match instances
    """
    logger = logging.get_logger(__name__)
    logger.info('')
    log = '# Searching for queries matching rules'
    log_deco = len(log)*'-'
    logger.info(log_deco)
    logger.info(log)
    logger.info(log_deco)
    
    matching_families = []
    for family_rules in sorted([ family for family in param.rules ], key=lambda x: len(x.mandatory), reverse=True):
        
        logger.info('')
        log = '* Search queries matching the rule {}:'.format(family_rules.name)
        logger.info(log)
        logger.info('- Comment: {}'.format(family_rules.comment))
        logger.info('- Mandatories: [(name, score), ...]: {}'.format(family_rules.mandatory))
        logger.info('- Forbidden: [name, ...]: {}'.format(family_rules.forbidden))     
        logger.info(len(log)*'-')
        
        match = Match(family_rules, param)
        flag_query_match = False
        for query in sorted(hmm_queries):
            matching_arch_bool = []
            query_instance = hmm_queries[query]
            for architecture in query_instance.architectures:
                if is_rule_met(family_rules=family_rules, architecture=architecture):
                    matching_arch_bool.append(True)                    
                else:
                    matching_arch_bool.append(False)
            if True in matching_arch_bool:
                logger.info('- Match found for query {}:'.format(query))
                
                for i,_bool in enumerate(matching_arch_bool, start=1):
                    logger.info('   -> {} for architecture {}/{}: {}'.format(_bool,
                                i,
                                len(matching_arch_bool),
                                ' - '.join([ x.get_name() for x in query_instance.architectures[i-1].domains ])))
                    
                match.hmm_queries.append(query_instance)
                match.matching_arch_bool.append(matching_arch_bool)
                flag_query_match = True
        if flag_query_match:
            matching_families.append(match)
        else:
            logger.info('- No query matches the rule')
        del match
        
    return matching_families

