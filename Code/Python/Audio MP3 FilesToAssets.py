# -*- coding: utf-8 -*-
"""
Created on Mon Sep 20 14:51:00 2021

@author: lovro
@version 0.3.2
"""
from os.path import join
from glob import glob

Directory = 'C:/Users/Uporabnik/Downloads/MP3'



Prefix = ''

files = []
ext = ['*.mp3']


for e in ext:
    files.extend(glob(join(Directory, e)))

files = sorted([f.split('\\')[1] for f in files])
assets = [f'{{ srcName: "{Prefix}{f}", name: "{f.split(".")[0]}"}},' for f in files]
assetText = "\n".join(assets)


