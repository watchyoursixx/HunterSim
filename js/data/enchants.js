const HEAD_ENCHANTS = {
  22840: {
    name: 'Arcanum of Rapidity',
    effectId: 2543,
    stats: {
        Haste: 10
    },
    Phase: 1,
    icon: 'inv_misc_gem_02'
  },
  24162: {
    name: "Falcon's Call",
    effectId: 2586,
    stats: {
      Stam: 10,
      Hit: 10,
      RAP: 24
    }
  },
  35452: {
    name: 'Glyph of Ferocity',
    effectId: 3003,
    stats: {
        MAP: 34,
        RAP: 34,
        Hit: 16
    },
    Phase: 1,
    icon: 'classic_ability_druid_demoralizingroar'
  },
  35453: {
    name: 'Glyph of the Gladiator',
    effectId: 3004,
    stats: {
        Stam: 18,
        Resil: 20
    },
    Phase: 5,
    icon: 'inv_misc_statue_04'
  },
  44968: {
    name: 'Heavy Knothide Armor Kit',
    effectId: 2841,
    stats: {
      Stam: 10
    },
    Phase: 1,
    icon: 'inv_misc_armorkit_25'
  },
  15402: {
    name: 'Lesser Arcanum of Voracity',
    effectId: 1508,
    stats: {
      Agi: 8
    },
    Phase: 1,
    icon: 'inv_misc_gem_03'
  },
}

const SHOULDER_ENCHANTS = {
  35439: {
    name: 'Greater Inscription of the Blade',
    effectId: 2997,
    stats: {
      MAP: 20,
      RAP: 20,
      Crit: 15
    },
    Phase: 1,
    icon: 'spell_holy_weaponmastery'
  },
  35417: {
    name: 'Greater Inscription of Vengeance',
    effectId: 2986,
    stats: {
      MAP: 30,
      RAP: 30,
      Crit: 10
    },
    Phase: 1,
    icon: 'spell_holy_greaterblessingofkings'
  },
  44968: {
    name: 'A Armor Kit',
    effectId: 2841,
    stats: {
      Stam: 10
    },
    Phase: 1,
    icon: 'inv_misc_armorkit_25'
  },
  35438: {
    name: 'Inscription of the Blade',
    effectId: 2996,
    stats: {
      Crit: 13
    },
    Phase: 1,
    icon: 'ability_dualwield'
  },
  35407: {
    name: 'Inscription of Vengeance',
    effectId: 2983,
    stats: {
      MAP: 26,
      RAP: 26,
    },
    Phase: 1,
    icon: 'spell_holy_fistofjustice'
  },
  29483: {
    name: 'Might of the Scourge',
    effectId: 2717,
    stats: {
      MAP: 26,
      RAP: 26,
      Crit: 14
    },
    Phase: 1,
    icon: 'spell_shadow_deathpact'
  },
  24422: {
    name: 'Zandalar Signet of Might',
    effectId: 2606,
    stats: {
      MAP: 30,
      RAP: 30
    },
    Phase: 1,
    icon: 'inv_misc_armorkit_08'
  },
}

const BACK_ENCHANTS = {
  34004: {
    name: 'Greater Agility',
    effectId: 368,
    stats: {
      Agi: 12
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  13882: {
    name: 'Lesser Agility',
    effectId: 849,
    stats: {
      Agi: 3
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  13419: {
    name: 'Minor Agility',
    effectId: 247,
    stats: {
      Agi: 1
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  }
}

const CHEST_ENCHANTS = {
  27957: {
    name: 'Exceptional Health',
    effectId: 2659,
    stats: {
      Health: 150
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  27958: {
    name: 'Exceptional Mana',
    effectId: 2660,
    stats: {
      Mana: 150
    },
    Phase: 1,
    icon: 'inv_misc_note_01'
  },
  27960: {
    name: 'Exceptional Stats',
    effectId: 2661,
    stats: {
      Agi: 6,
      Str: 6,
      Stam: 6,
      Spi: 6,
      Int: 6
    },
    Phase: 1,
    icon: 'inv_misc_note_01'
  },
  20025: {
    name: 'Greater Stats',
    effectId: 1891,
    stats: {
      Agi: 4,
      Str: 4,
      Stam: 4,
      Spi: 4,
      Int: 4
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  44968: {
    name: 'A Armor Kit',
    effectId: 2841,
    stats: {
      Stam: 10
    },
    Phase: 1,
    icon: 'inv_misc_armorkit_25'
  },
  33992: {
    name: 'Major Resilience',
    effectId: 2933,
    stats: {
      Resil: 15
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  33991: {
    name: 'Restore Mana Prime',
    effectId: 3150,
    stats: {
      MP5: 6
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  13941: {
    name: 'Stats',
    effectId: 928,
    stats: {
      Agi: 3,
      Str: 3,
      Stam: 3,
      Spi: 3,
      Int: 3
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
}

const WRIST_ENCHANTS = {
  34002: {
    name: 'Assault',
    effectId: 1593,
    stats: {
      MAP: 24,
      RAP: 24
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  27899: {
    name: 'Brawn',
    effectId: 2647,
    stats: {
      Str: 12
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  27914: {
    name: 'Fortitude',
    effectId: 2649,
    stats: {
      Stam: 12
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  34001: {
    name: 'Major Intellect',
    effectId: 369,
    stats: {
      Int: 12
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  27913: {
    name: 'Restore Mana Prime',
    effectId: 2679,
    stats: {
      MP5: 6
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  27905: {
    name: 'Stats',
    effectId: 1891,
    stats: {
      Agi: 4,
      Str: 4,
      Stam: 4,
      Spi: 4,
      Int: 4
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  }
}

const HAND_ENCHANTS = {
  13815: {
    name: 'Agility',
    effectId: 904,
    stats: {
      Agi: 5
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  33996: {
    name: 'Assault',
    effectId: 1594,
    stats: {
      MAP: 26,
      RAP: 26
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  20012: {
    name: 'Greater Agility',
    effectId: 1887,
    stats: {
      Agi: 7
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  44968: {
    name: 'A Armor Kit',
    effectId: 2841,
    stats: {
      Stam: 10
    },
    Phase: 1,
    icon: 'inv_misc_armorkit_25'
  },
  33995: {
    name: 'Major Strength',
    effectId: 684,
    stats: {
      Str: 15
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  44968: {
    name: 'A Armor Kit',
    effectId: 2841,
    stats: {
      Stam: 10
    },
    Phase: 1,
    icon: 'inv_misc_armorkit_25'
  },
  25080: {
    name: 'Superior Agility',
    effectId: 2564,
    stats: {
      Agi: 15
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
}

const LEG_ENCHANTS = {
  22840: {
    name: 'Arcanum of Rapidity',
    effectId: 2543,
    stats: {
        Haste: 10
    },
    Phase: 1,
    icon: 'inv_misc_gem_02'
  },
  35489: {
    name: 'Clefthide Leg Armor',
    effectId: 3011,
    stats: {
      Agi: 10,
      Stam: 30
    },
    Phase: 1,
    icon: 'inv_misc_armorkit_23'
  },
  35488: {
    name: 'Cobrahide Leg Armor',
    effectId: 3010,
    stats: {
      MAP: 40,
      RAP: 40,
      Crit: 10
    },
    Phase: 1,
    icon: 'inv_misc_armorkit_21'
  },
  24162: {
    name: "Falcon's Call",
    effectId: 2586,
    stats: {
      Stam: 10,
      Hit: 10,
      RAP: 24
    }
  },
  44968: {
    name: 'A Armor Kit',
    effectId: 2841,
    stats: {
      Stam: 10
    },
    Phase: 1,
    icon: 'inv_misc_armorkit_25'
  },
  15402: {
    name: 'Lesser Arcanum of Voracity',
    effectId: 1508,
    stats: {
      Agi: 8
    },
    Phase: 1,
    icon: 'inv_misc_gem_03'
  },
  35495: {
    name: 'Nethercleft Leg Armor',
    effectId: 3013,
    stats: {
      Agi: 12,
      Stam: 40
    },
    Phase: 1,
    icon: 'inv_misc_armorkit_25'
  },
  35490: {
    name: 'Nethercobra Leg Armor',
    effectId: 3012,
    stats: {
      MAP: 50,
      RAP: 50,
      Crit: 12
    },
    Phase: 1,
    icon: 'inv_misc_armorkit_25',
  }
}

const FEET_ENCHANTS = {
  13935: {
    name: 'Agility',
    effectId: 904,
    stats: {
      Agi: 5
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  34008: {
    name: "Boar's Speed",
    effectId: 2940,
    special: { moveSpeed: 1.08 },
    stats: {
      Stam: 9,
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  34007: {
    name: "Cat's Switfness",
    effectId: 2939,
    special: { moveSpeed: 1.08 },
    stats: {
      Agi: 6,
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  27951: {
    name: 'Dexterity',
    effectId: 2657,
    stats: {
      Agi: 12
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  27950: {
    name: 'Fortitude',
    effectId: 2649,
    stats: {
      Stam: 12
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  20023: {
    name: 'Greater Agility',
    effectId: 1887,
    stats: {
      Agi: 7
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  44968: {
    name: 'A Armor Kit',
    effectId: 2841,
    stats: {
      Stam: 10
    },
    Phase: 1,
    icon: 'inv_misc_armorkit_25'
  },
  27954: {
    name: 'Surefooted',
    effectId: 2658,
    stats: {
      Hit: 10
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  27948: {
    name: 'Vitality',
    effectId: 2656,
    stats: {
      MP5: 4,
      HP5: 4
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  }
}

const RING_ENCHANTS = {
  27927: {
    name: 'Stats',
    effectId: 2931,
    stats: {
      Agi: 4,
      Str: 4,
      Stam: 4,
      Spi: 4,
      Int: 4
    },
    Phase: 3,
    icon: 'inv_misc_note_01'
  },
  27920: {
    name: 'Striking',
    effectId: 2929,
    special: { incWeapDmg: 2 },
    stats: {},
    Phase: 1,
    icon: 'inv_misc_note_01'
  }
}

const MELEE_ENCHANTS = {
  23800: {
    name: 'Agility',
    effectId: 2564,
    stats: {
      Agi: 15,
    },
    Phase: 1,
    icon: 'inv_misc_note_01'
  },
  27837: {
    name: 'Agility (2H)',
    effectId: 2646,
    for_two_handed: true,
    stats: {
      Agi: 25,
    },
    Phase: 1,
    icon: 'inv_misc_note_01'
  },
  42620: {
    name: 'Greater Agility',
    effectId: 3222,
    stats: {
      Agi: 20
    },
    Phase: 3,
    icon: 'inv_misc_note_01'
  },
  27977: {
    name: 'Major Agility (2H)',
    effectId: 2670,
    for_two_handed: true,
    stats: {
      Agi: 35
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  27968: {
    name: 'Major Intellect',
    effectId: 2666,
    stats: {
      Int: 30
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  23804: {
    name: 'Mighty Intellect',
    effectId: 2568,
    stats: {
      Int: 22
    },
    Phase: 1,
    icon: 'inv_misc_note_01'
  },
  27972: {
    name: 'Potency',
    effectId: 2668,
    stats: {
      Str: 20
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  27971: {
    name: 'Savagery (2H)',
    effectId: 2667,
    for_two_handed: true,
    stats: {
      MAP: 70,
      RAP: 70
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  23799: {
    name: 'Strength',
    effectId: 2563,
    stats: {
      Str: 15
    },
    Phase: 1,
    icon: 'inv_misc_note_01'
  },
  27984: {
    name: 'Mongoose',
    effectId: 2673,
    aura: {
      stats: {
        Agi: 120,
        Haste: 30
      },
      duration: 15,
      PPM: 1,
      proc_type: 4
    },
    Phase: 1,
    icon: 'spell_holy_greaterheal'
  },
  42974: {
    name: 'Executioner',
    effectId: 3225,
    aura: {
      stats: {
        ArP: 840,
      },
      duration: 15,
      PPM: 1,
      proc_type: 4
    },
    Phase: 4,
    icon: 'spell_holy_greaterheal'
  }
}

const RANGE_ENCHANTS = {
  3976: {
    name: 'Accurate Scope',
    effectId: 33,
    special: {
      incWeapDmg: 3
    },
    Phase: 1,
    icon: 'trade_engineering'
  },
  12459: {
    name: 'Deadly Scope',
    effectId: 663,
    special: {
      incWeapDmg: 5
    },
    Phase: 1,
    icon: 'trade_engineering'
  },
  22779: {
    name: 'Biznicks 247x128 Accurascope',
    effectId: 2523,
    stats: {
      Hit: 30
    },
    Phase: 1,
    icon: 'trade_engineering'
  },
  30252: {
    name: 'Khorium Scope',
    effectId: 2723,
    special: {
      incWeapDmg: 12
    },
    Phase: 1,
    icon: 'trade_engineering'
  },
  12460: {
    name: 'Sniper Scope',
    effectId: 664,
    special: {
      incWeapDmg: 7
    },
    Phase: 1,
    icon: 'trade_engineering'
  },
  30260: {
    name: 'Stabilitzed Eternium Scope',
    effectId: 2724,
    stats: {
      Crit: 28
    },
    Phase: 1,
    icon: 'trade_engineering'
  }
}

const ENCHANT_MAP = {
  back: BACK_ENCHANTS,
  chest: CHEST_ENCHANTS,
  feet: FEET_ENCHANTS,
  hand: HAND_ENCHANTS,
  head: HEAD_ENCHANTS,
  leg: LEG_ENCHANTS,
  mainhand: MELEE_ENCHANTS,
  offhand: MELEE_ENCHANTS,
  range: RANGE_ENCHANTS,
  ring1: RING_ENCHANTS,
  ring2: RING_ENCHANTS,
  shoulder: SHOULDER_ENCHANTS,
  wrist: WRIST_ENCHANTS
};
