# -*- coding: utf-8 -*-
"""
Created on Wed Apr  1 17:41:40 2020

@author: nicolas
"""
import yaml
from prosecda.lib import logger as logging

def parse_rules(filename, score_co):
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
    with open(filename, 'r') as f:
        yaml_rules = yaml.load(f, Loader=yaml.FullLoader)
    families = []
    for name in sorted(yaml_rules):
        families.append(Family_rules(name=name,
                                     rules=yaml_rules[name], 
                                     score_co=score_co))
        
    return families
    
class Family_rules:
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
    def __init__(self, name, rules, score_co):
        self.name = name
        self.rules = rules
        self.comment = rules['COMMENT']
        self.score_co = score_co
        self.mandatory = self.parse_mandatory()
        self.forbidden = self.parse_forbidden()
        self.logger = logging.get_logger(__name__)

    def parse_mandatory(self):
        """
        Returns a list of tuple: (mandatory name, mandatory score)
        A default score value is assigned as mandatory score if no score
        is provided for the mandatory domain.
        """
        mandatories = []
        for dom in self.rules['CONDITION']['mandatory']:
            dom_def = dom.split(',')
            if len(dom_def) == 2:
                dom_name = dom_def[0].strip()
                dom_score = float(dom_def[1].strip())
            elif len(dom_def) == 1:
                dom_name = dom_def[0].strip()
                dom_score = self.score_co
            mandatories.append((dom_name, dom_score))
                        
        return mandatories
        
    def parse_forbidden(self):
        """
        Returns a list of forbidden domain names
        """
        forbidden = []        
        if not self.rules['CONDITION']['forbidden']:
            return forbidden
        else:
            for dom in self.rules['CONDITION']['forbidden']:
                dom_def = dom.split(',')
                if len(dom_def) == 1:
                    dom_name = dom_def[0].strip()
                forbidden.append((dom_name))                        
            return forbidden
            
    def summary(self):
        log = []
        txt = '# Summary for the rule {}'.format(self.name)
        log.append(txt)
        log.append(len(txt)*'-')
        log.append('Comment: {}'.format(self.comment))
        log.append('Mandatories: [(name, score), ...]: {}'.format(self.mandatory))
        log.append('Forbidden: [name, ...]: {}'.format(self.forbidden))
        log.append('')
        
        return '\n'.join(log)
