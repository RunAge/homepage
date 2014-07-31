#!/usr/bin/env python

import yaml, json

in_f  = open('home.yaml', 'r')
out_f = open('home.json', 'w')

json.dump(
	yaml.load(in_f),
	out_f,
	indent="\t")
