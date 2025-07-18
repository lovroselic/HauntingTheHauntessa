# -*- coding: utf-8 -*-
"""
Created on Sun Aug  1 09:20:45 2021

@author: lovro selic
@version 0.4.9

private tool for creation of excel files from monster
definition in MAP module of CH2 game
"""

import regex as re
import pandas as pd
from pandas import ExcelWriter
from collections import defaultdict


_file = "C:/Users/Uporabnik/Documents/JS/HauntingTheHauntessa/Assets/Definitions/HauntingTheHauntessa/Monsters_HTH.js"
with open(_file) as fh:
    data = fh.read()

firstPattern = re.compile(r'const MONSTER_TYPE\s*=\s*{[.\s\w\:{\"\',()}\[\]\-\/\*]*};')
monsters = re.search(firstPattern, data).group(0)
monsterExtractionPattern = re.compile(
    r'(\w+\:\s{[\s\w\:\"\,\.\(\)\[\]\-\/\'\*]*})')

# attributePattern = re.compile(r'((?<!\/)\b\w+\:\s*\"?[\-\w\.\s\*\/]*\"?),?')
attributePattern = re.compile(r'(\w+):\s*([^,\n]+)')

MonsterList = defaultdict(dict)

for match in re.finditer(monsterExtractionPattern, monsters):
    monster = match.group(0)
    monsterName = monster.split(':')[0]

    for attr in re.finditer(attributePattern, monster.split('{')[1]):
        key, value = attr.groups()
        value = value.strip().strip(',').strip('"').strip("'")
        MonsterList[key][monsterName] = value
    

MON = pd.DataFrame(MonsterList)
MON.drop(["behaviourArguments", "scale", "rotateToNorth", "midHeight", "deathType", "texture"],
         inplace=True, axis=1)

# =============================================================================
# # Calculated attributes
# =============================================================================

MON['attack'] = pd.to_numeric(MON['attack'])
MON['defense'] = pd.to_numeric(MON['defense'])
MON['magic'] = pd.to_numeric(MON['magic'])
MON['health'] = pd.to_numeric(MON['health'])
MON['xp'] = pd.to_numeric(MON['xp'])
MON['mana'] = pd.to_numeric(MON['mana'])

MON['ADM'] = MON['attack'] + MON['defense'] + MON['magic']
MON['F'] = MON['xp'] / MON['ADM']
MON['Xf'] = MON['xp'] / (MON['ADM'] + MON['health'])
MON['hADM'] = MON['health'] / MON['ADM']
MON['MagicMight'] = MON['magic'] * MON['mana']
MON.sort_values(["attack", "defense", "magic", "health", "xp", "mana", "name"], inplace=True, ascending=False)

# =============================================================================
# # To excel
# =============================================================================
# print(MON.info())
excel = ExcelWriter("MonsterList.xlsx", engine='xlsxwriter')
MON.to_excel(excel, sheet_name='Monster data')
excel.close()
