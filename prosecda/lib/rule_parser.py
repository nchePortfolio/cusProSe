# -*- coding: utf-8 -*-
"""
Created on Wed Apr  1 17:41:40 2020

@author: nicolas
"""
import yaml
import lib.logHandler as logHandler


def parse_yaml(input_filename: str, co_ival=None):
    """
    Parses yaml file rules. Reading of yaml file returns a dictionary.
    The dictionary looks like: 
    {'PKS-NRPS-like_a': {'COMMENT': 'Hybrides PKS-NRPS like',
                     'CONDITION': {'mandatory': ['KS', 'C,10', 'AT,5'],
                                   'forbidden': ['PP-binding']}}
    Arguments:
        - filename: yaml rules filename
        - param: instance of parameters
    
    Return:
        - list of Family_rules instances
    """
    with open(input_filename, 'r') as input_file:
        yaml_data = yaml.load(input_file, Loader=yaml.FullLoader)
    rules = []
    for name in sorted(yaml_data):
        rules.append(Rule(name=name, rule_def=yaml_data[name], co_ival=co_ival))
        
    return rules
    

class Rule:
    """
    Wrapper containing all rules defining a given family
    
    Arguments:
        - name: family name (str)
        - rules: dictionary from yaml input
                 The dictionary looks like: 
                 {'PKS-NRPS-like_a': {'COMMENT': 'Hybrides PKS-NRPS like',
                                      'CONDITION': {'mandatory': ['KS', 'C,10', 'AT,5'],
                                                    'forbidden': ['PP-binding']}}
        - param: instance of Parameters
    """
    def __init__(self, name: str, rule_def: dict, co_ival=None):
        """

        @param name: name of the rule (i.e. the protein "family" name)
        @param rule_def: dictionary containing criteria to define the rule
        @param co_ival: cutoff threshold of hmmer i-evalue
        """
        self.name = name
        self.rule_def = rule_def
        self.comment = rule_def['COMMENT']
        self.co_ival = co_ival

        self.mandatory_domains = self.parse_mandatory()
        self.forbidden_domains = self.parse_forbidden()

        self.logger = logHandler.Logger(name=__name__)

    def parse_mandatory(self) -> list:
        """

        @return: a list of tuple (domain name, domain ival). A default ival value is assigned if none is provided.
        """
        mandatories = []

        for element in self.rule_def['CONDITION']['mandatory']:
            domain = Domain()

            splitted_element = element.split(',')
            if len(splitted_element) == 2:
                domain.name = splitted_element[0].strip()
                domain.ival = float(splitted_element[1].strip())
            elif len(splitted_element) == 1:
                domain.name = splitted_element[0].strip()
                domain.ival = self.co_ival

            mandatories.append(domain)
                        
        return mandatories
        
    def parse_forbidden(self):
        """
        Returns a list of forbidden domain names
        """
        forbidden = []

        if not self.rule_def['CONDITION']['forbidden']:
            return forbidden
        else:
            for element in self.rule_def['CONDITION']['forbidden']:
                domain = Domain()
                splitted_element = element.split(',')
                if len(splitted_element) == 1:
                    domain.name = splitted_element[0].strip()
                forbidden.append(domain)

            return forbidden
            
    def description(self):
        log = []
        txt = '# Summary for the rule {}'.format(self.name)
        log.append(txt)
        log.append(len(txt)*'-')
        log.append('Comment: {}'.format(self.comment))
        log.append('Mandatories:')
        for domain in self.mandatory_domains:
            log.append(' - {} ({})'.format(domain.name, domain.ival))
        log.append('Forbidden:')
        if not self.forbidden_domains:
            log.append(' - None')
        else:
            for domain in self.forbidden_domains:
                log.append(' - {}'.format(domain.name))
        log.append('')
        
        return '\n'.join(log)


class Domain:
    def __init__(self, name=None, ival=None):
        self.name = name
        self.ival = ival
