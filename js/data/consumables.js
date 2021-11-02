const FOODS = [
  {
    name: 'Blackened Sporefish',
    id: 33292,
    icon: 'inv_misc_food_79',
    stats: {
      Stam: 20,
      MP5: 8,
    },
  },
  {
    name: 'Grilled Mudfish',
    id: 27664,
    icon: 'inv_misc_food_78',
    stats: {
      Spi: 20,
      Agi: 20
    }
  },
  {
    name: 'Grilled Squid',
    id: 13928,
    icon: 'inv_misc_fish_13',
    stats: {
      Agi: 10
    }
  },
  {
    name: 'Ravager Dog',
    id: 27655,
    icon: 'inv_misc_food_53',
    stats: {
      Spi: 20,
      MAP: 40,
      RAP: 40
    }
  },
  {
    name: 'Spicy Crawdad',
    id: 27667,
    icon: 'inv_misc_fish_16',
    stats: {
      Sta: 30,
      Spi: 20
    }
  },
  {
    name: 'Spicy Hot Talbuk',
    id: 33872,
    icon: 'inv_misc_food_84_roastclefthoof',
    stats: {
      Spi: 20,
      Hit: 20
    }
  },
  {
    name: 'Talbuk Steak',
    id: 27660,
    icon: 'inv_misc_food_84_roastclefthoof',
    stats: {
      Stam: 20,
      Spi: 20
    }
  },
  {
    name: 'Warp Burger',
    id: 27659,
    icon: 'inv_misc_food_65',
    stats: {
      Spi: 20,
      Agi: 20
    }
  }
]

const BATTLE_ELIXIRS = [
  {
    name: 'Elixir of Demonslaying',
    id: 9224,
    icon: 'inv_potion_27',
    stats: {
      MAP: 265,
      RAP: 265
    }
  },
  {
    name: 'Elixir of Major Agility',
    id: 22831,
    icon: 'inv_potion_127',
    stats: {
      Agi: 35,
      Crit: 20
    }
  },
  {
    name: 'Elixir of the Mongoose',
    id: 13452,
    icon: 'inv_potion_32',
    stats: {
      Agi: 25,
      Crit: 28
    }
  },
  {
    name: 'Fel Strength Elixir',
    id: 31679,
    icon: 'inv_potion_152',
    stats: {
      Stam: -10,
      MAP: 90,
      RAP: 90
    }
  },
  {
    name: 'Onslaught Elixir',
    id: 28102,
    icon: 'inv_potion_58',
    stats: {
      MAP: 60,
      RAP: 60
    }
  },
  {
    name: 'Elixir of Greater Agility',
    id: 9187,
    icon: 'inv_potion_94',
    stats: {
      Agi: 25
    }
  },
  {
    name: 'Elixir of Agility',
    id: 8949,
    icon: 'inv_potion_93',
    stats: {
      Agi: 15
    }
  },
  {
    name: 'Elixir of Mastery',
    id: 28104,
    icon: 'inv_potion_111',
    stats: {
      Str: 15,
      Agi: 15,
      Stam: 15,
      Int: 15,
      Spi: 15
    }
  }
]

const GUARDIAN_ELIXIRS = [
  {
    name: 'Elixir of Major Mageblood',
    id: 22840,
    icon: 'inv_potion_151',
    stats: {
      MP5: 16
    }
  },
  {
    name: 'Elixir of Draenic Wisdom',
    id: 32067,
    icon: 'inv_potion_155',
    stats: {
      Int: 30,
      Spi: 30
    }
  },
  {
    name: 'Mageblood Potion',
    id: 20007,
    icon: 'inv_potion_45',
    stats: {
      MP5: 12
    }
  },
  {
    name: 'Elixir of Greater Intellect',
    id: 9179,
    icon: 'inv_potion_10',
    stats: {
      Int: 25
    }
  },
  {
    name: 'Elixir of Major Fortitude',
    id: 32062,
    icon: 'inv_potion_158',
    stats: {
      Health: 250,
      HP5: 10
    }
  },
  {
    name: 'Elixir of Fortitude',
    id: 3825,
    icon: 'inv_potion_43',
    stats: {
      Health: 120
    }
  }
]

const FLASKS = [
  {
    name: 'Flask of Distilled Wisdom',
    id: 13511,
    icon: 'inv_potion_97',
    stats: {
      Int: 65
    }
  },
  {
    name: 'Flask of Fortification',
    id: 22851,
    icon: 'inv_potion_119',
    stats: {
      Health: 500
    }
  },
  {
    name: 'Flask of Mighty Restoration',
    id: 22853,
    icon: 'inv_potion_118',
    stats: {
      MP5: 25
    }
  },
  {
    name: 'Flask of Relentless Assault',
    id: 22854,
    icon: 'inv_potion_117',
    stats: {
      MAP: 120,
      RAP: 120
    }
  },  {
    name: 'Flask of the Titans',
    id: 13510,
    icon: 'inv_potion_62',
    stats: {
      Health: 400
    }
  },
  {
    name: 'Unstable Flask of the Bandit',
    id: 32599,
    icon: 'inv_potion_91',
    stats: {
      Agi: 20,
      MAP: 40,
      RAP: 40,
      Stam: 30
    }
  }
]

const SCROLLS_OF_AGILITY = [
  {
    name: 'Scroll of Agility I',
    id: 3012,
    icon: 'inv_scroll_02',
    stats: {
      Agi: 5
    }
  },
  {
    name: 'Scroll of Agility II',
    id: 1477,
    icon: 'inv_scroll_02',
    stats: {
      Agi: 9
    }
  },
  {
    name: 'Scroll of Agility III',
    id: 4425,
    icon: 'inv_scroll_02',
    stats: {
      Agi: 13
    }
  },
  {
    name: 'Scroll of Agility IV',
    id: 10309,
    icon: 'inv_scroll_02',
    stats: {
      Agi: 17
    }
  },
  {
    name: 'Scroll of Agility V',
    id: 27498,
    icon: 'inv_scroll_02',
    stats: {
      Agi: 20
    }
  }
]

const SCROLLS_OF_STRENGTH = [
  {
    name: 'Scroll of Strength I',
    id: 954,
    icon: 'inv_scroll_02',
    stats: {
      Str: 5
    }
  },
  {
    name: 'Scroll of Strength II',
    id: 2289,
    icon: 'inv_scroll_02',
    stats: {
      Str: 9
    }
  },
  {
    name: 'Scroll of Strength III',
    id: 4426,
    icon: 'inv_scroll_02',
    stats: {
      Str: 13
    }
  },
  {
    name: 'Scroll of Strength IV',
    id: 10310,
    icon: 'inv_scroll_02',
    stats: {
      Str: 17
    }
  },
  {
    name: 'Scroll of Strength V',
    id: 27503,
    icon: 'inv_scroll_02',
    stats: {
      Str: 20
    }
  }
]

const PET_FOODS = [
  {
    name: "Kibler's Bits",
    id: 33874,
    icon: 'inv_misc_food_49',
    stats: {
      Str: 20,
      Spi: 20
    }
  },
  {
    name: 'Sporeling Snack',
    id: 27656,
    icon: 'inv_misc_food_87_sporelingsnack',
    stats: {
      Stam: 20,
      Spi: 20
    }
  }
]

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
}

function getStatsFromConsumes(consumables, source) {
  return Object.entries(consumables).reduce((stats, [type, id]) => {
    if (!source[type]) throw Error(`Detected invalid consumable of type "${type}"`)
    const consume = source[type].find(consume => id === consume.id)
    if (!consume) throw Error(`Detected invalid consume id ${id}`)

    Object.entries(consume.stats).forEach(([stat, amount]) => stats[stat] = (stats[stat] || 0) + amount)

    return stats
  }, {})
}

function getPlayerStatsFromConsumes(consumables) {
  if (consumables.flask && (consumables.battle_elixir || consumables.guardian_elixir))
    throw Error('Detected flask AND elixir. You must use one OR the other.')

  return getStatsFromConsumes(consumables, PLAYER_CONSUMABLES)
}

function getPetStatsFromConsumes(consumables) {
  return getStatsFromConsumes(consumables, PET_CONSUMABLES)
}
