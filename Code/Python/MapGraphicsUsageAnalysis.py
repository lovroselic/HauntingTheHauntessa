# -*- coding: utf-8 -*-
"""
Created on Thu Oct  5 07:59:53 2023

@author: lovro
v 0.3.0


usage analysis
asset def creation
"""


import regex as re
from collections import defaultdict
import pandas as pd


_file = "C:/Users/Uporabnik/Documents/JS/CastleHaunt2/Assets/Definitions/CastleHaunt2/MAP_CastleHaunt2.js"
with open(_file, encoding="utf8") as fh:
    data = fh.read()

map_regex = re.compile(r'const\sMAP\s=\s{([\w\W]*)};')
decal_regex = re.compile(r'decals:\s*\'(.*)\'')
MAP = re.search(map_regex, data).group(1).strip()
MAP = re.split(r'\n\s*\,', MAP)

Textures = defaultdict(int)
Decals = defaultdict(int)


for room in MAP:
    for t in ["wall", "floor", "ceil"]:
        texture = re.search(re.compile(r'{}:\s\"(.*)\"'.format(t)), room).group(1)
        Textures[texture] += 1
    decals = re.search(decal_regex, room)
    if decals:
        decals = decals.group(1)[1:-1]
        decals = re.split(r'\],\[', re.sub(r'^\[|\]$', '', decals))
        for d in decals:
            decal = d.split(",")[2]
            Decals[decal] += 1

DECAL = pd.DataFrame.from_dict(Decals, orient='index', columns=["count"])
DECAL.sort_values("count", inplace=True, ascending=False)
TEXTURE = pd.DataFrame.from_dict(Textures, orient='index', columns=["count"])
TEXTURE.sort_values("count", inplace=True, ascending=False)


# =============================================================================
# #
# =============================================================================

Prefix = 'Wall/'
assets_textures = "\n".join([f'{{srcName: "{Prefix}{t}.jpg", name:"{t}"}},' for t in Textures.keys()])

PrefixDecal = ""
assets_decals = "\n".join([f'{{srcName: {PrefixDecal}{d}.png, name:{d}}},' for d in Decals.keys()])
