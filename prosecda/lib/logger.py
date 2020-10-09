# -*- coding: utf-8 -*-
"""
Created on Fri Apr  3 16:27:37 2020

@author: nicolas
"""
import pkg_resources as pkg_r
import json
import logging
import logging.config


def get_logger(name, param=None):
#    template_path = 'prosecda/data/logging.json'
#    path2file = pkg_r.resource_filename(pkg_r.Requirement.parse('prosecda'), template_path)

#    path2file = pkg_resources.resource_filename(
#            __name__, os.path.join(os.pardir, 'data/logging.json'))
            
    if param:
        with open(param.outpath+'logging.json', 'rt') as f:
            config = json.load(f)
            logging.config.dictConfig(config)

    return logging.getLogger(name)
    
