const FOODS = {
  33292: {
    name: 'Blackened Sporefish',
    icon: 'inv_misc_food_79',
    stats: {
      Stam: 20,
      MP5: 8,
    },
  },
  27664: {
    name: 'Grilled Mudfish',
    icon: 'inv_misc_food_78',
    stats: {
      Spi: 20,
      Agi: 20
    }
  },
  13928: {
    name: 'Grilled Squid',
    icon: 'inv_misc_fish_13',
    stats: {
      Agi: 10
    }
  },
  27655: {
    name: 'Ravager Dog',
    icon: 'inv_misc_food_53',
    stats: {
      Spi: 20,
      MAP: 40,
      RAP: 40
    }
  },
  27667: {
    name: 'Spicy Crawdad',
    icon: 'inv_misc_fish_16',
    stats: {
      Sta: 30,
      Spi: 20
    }
  },
  33872: {
    name: 'Spicy Hot Talbuk',
    icon: 'inv_misc_food_84_roastclefthoof',
    stats: {
      Spi: 20,
      Hit: 20
    }
  },
  27660: {
    name: 'Talbuk Steak',
    icon: 'inv_misc_food_84_roastclefthoof',
    stats: {
      Stam: 20,
      Spi: 20
    }
  },
  27659: {
    name: 'Warp Burger',
    icon: 'inv_misc_food_65',
    stats: {
      Spi: 20,
      Agi: 20
    }
  }
}

const BATTLE_ELIXIRS = {
  9224: {
    name: 'Elixir of Demonslaying',
    icon: 'inv_potion_27',
    stats: {
      MAP: 0, // change to target AP data only - returns 0 AP, but will check if selected in AP update data based on target
      RAP: 0
    }
  },
  22831: {
    name: 'Elixir of Major Agility',
    icon: 'inv_potion_127',
    stats: {
      Agi: 35,
      Crit: 20
    }
  },
  13452: {
    name: 'Elixir of the Mongoose',
    icon: 'inv_potion_32',
    stats: {
      Agi: 25,
      Crit: 28
    }
  },
  31679: {
    name: 'Fel Strength Elixir',
    icon: 'inv_potion_152',
    stats: {
      Stam: -10,
      MAP: 90,
      RAP: 90
    }
  },
  28102: {
    name: 'Onslaught Elixir',
    icon: 'inv_potion_58',
    stats: {
      MAP: 60,
      RAP: 60
    }
  },
  9187: {
    name: 'Elixir of Greater Agility',
    icon: 'inv_potion_94',
    stats: {
      Agi: 25
    }
  },
  8949: {
    name: 'Elixir of Agility',
    icon: 'inv_potion_93',
    stats: {
      Agi: 15
    }
  },
  28104: {
    name: 'Elixir of Mastery',
    icon: 'inv_potion_111',
    stats: {
      Str: 15,
      Agi: 15,
      Stam: 15,
      Int: 15,
      Spi: 15
    }
  }
}

const GUARDIAN_ELIXIRS = {
  22840: {
    name: 'Elixir of Major Mageblood',
    icon: 'inv_potion_151',
    stats: {
      MP5: 16
    }
  },
  32067: {
    name: 'Elixir of Draenic Wisdom',
    icon: 'inv_potion_155',
    stats: {
      Int: 30,
      Spi: 30
    }
  },
  20007: {
    name: 'Mageblood Potion',
    icon: 'inv_potion_45',
    stats: {
      MP5: 12
    }
  },
  9179: {
    name: 'Elixir of Greater Intellect',
    icon: 'inv_potion_10',
    stats: {
      Int: 25
    }
  },
  32062: {
    name: 'Elixir of Major Fortitude',
    icon: 'inv_potion_158',
    stats: {
      Health: 250,
      HP5: 10
    }
  },
  3825: {
    name: 'Elixir of Fortitude',
    icon: 'inv_potion_43',
    stats: {
      Health: 120
    }
  }
}

const FLASKS = {
  13511: {
    name: 'Flask of Distilled Wisdom',
    icon: 'inv_potion_97',
    stats: {
      Int: 65
    }
  },
  22851: {
    name: 'Flask of Fortification',
    icon: 'inv_potion_119',
    stats: {
      Health: 500
    }
  },
  22853: {
    name: 'Flask of Mighty Restoration',
    icon: 'inv_potion_118',
    stats: {
      MP5: 25
    }
  },
  22854: {
    name: 'Flask of Relentless Assault',
    icon: 'inv_potion_117',
    stats: {
      MAP: 120,
      RAP: 120
    }
  },
  13510: {
    name: 'Flask of the Titans',
    icon: 'inv_potion_62',
    stats: {
      Health: 400
    }
  },
  32599: {
    name: 'Unstable Flask of the Bandit',
    icon: 'inv_potion_91',
    stats: {
      Agi: 20,
      MAP: 40,
      RAP: 40,
      Stam: 30
    }
  }
}

const SCROLLS_OF_AGILITY = {
  3012: {
    name: 'Scroll of Agility I',
    icon: 'inv_scroll_02',
    stats: {
      Agi: 5
    }
  },
  1477: {
    name: 'Scroll of Agility II',
    icon: 'inv_scroll_02',
    stats: {
      Agi: 9
    }
  },
  4425: {
    name: 'Scroll of Agility III',
    icon: 'inv_scroll_02',
    stats: {
      Agi: 13
    }
  },
  10309: {
    name: 'Scroll of Agility IV',
    icon: 'inv_scroll_02',
    stats: {
      Agi: 17
    }
  },
  27498: {
    name: 'Scroll of Agility V',
    icon: 'inv_scroll_02',
    stats: {
      Agi: 20
    }
  }
}

const SCROLLS_OF_STRENGTH = {
  954: {
    name: 'Scroll of Strength I',
    icon: 'inv_scroll_02',
    stats: {
      Str: 5
    }
  },
  2289: {
    name: 'Scroll of Strength II',
    icon: 'inv_scroll_02',
    stats: {
      Str: 9
    }
  },
  4426: {
    name: 'Scroll of Strength III',
    icon: 'inv_scroll_02',
    stats: {
      Str: 13
    }
  },
  10310: {
    name: 'Scroll of Strength IV',
    icon: 'inv_scroll_02',
    stats: {
      Str: 17
    }
  },
  27503: {
    name: 'Scroll of Strength V',
    icon: 'inv_scroll_02',
    stats: {
      Str: 20
    }
  }
}

const PET_FOODS = {
  33874: {
    name: "Kibler's Bits",
    icon: 'inv_misc_food_49',
    stats: {
      Str: 20,
      Spi: 20
    }
  },
  27656: {
    name: 'Sporeling Snack',
    icon: 'inv_misc_food_87_sporelingsnack',
    stats: {
      Stam: 20,
      Spi: 20
    }
  }
}

const PLAYER_CONSUMABLES = {
  food: FOODS,
  battle_elixir: BATTLE_ELIXIRS,
  guardian_elixir: GUARDIAN_ELIXIRS,
  flask: FLASKS,
  agi_scroll: SCROLLS_OF_AGILITY,
  str_scroll: SCROLLS_OF_STRENGTH
}

const PET_CONSUMABLES = {
  pet_food: PET_FOODS,
  agi_scroll: SCROLLS_OF_AGILITY,
  str_scroll: SCROLLS_OF_STRENGTH
};
