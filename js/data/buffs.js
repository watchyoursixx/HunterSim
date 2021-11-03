const BOK_ID = 25898
const WF_ID = 25587
const IMP_SANC_AURA_ID = 31870

const BUFFS = {
  [BOK_ID]: {
    name: 'Greater Blessing of Kings',
    icon: 'spell_magic_greaterblessingofkings',
  },
  27141: {
    name: 'Greater Blessing of Might',
    icon: 'spell_holy_greaterblessingofkings',
    talented_ratio: 1.2,
    stats: {
      MAP: 220,
      RAP: 220,
    }
  },
  27143: {
    name: 'Greater Blessing of Wisdom',
    icon: 'spell_holy_greaterblessingofwisdom',
    talented_ratio: 1.2,
    stats: {
      MP5: 41
    }
  },
  2048: {
    name: 'Battle Shout',
    icon: 'ability_warrior_battleshout',
    t2_3p_bonus: 30,
    solarian_sapphire_bonus: 70,
    talented_ratio: 1.25,
    stats: {
      MAP: 306
    }
  },
  27077: {
    name: 'Trueshot Aura',
    icon: 'ability_trueshot',
    stats: {
      MAP: 125,
      RAP: 125
    }
  },
  17007: {
    name: 'Leader of the Pack',
    icon: 'spell_nature_unyeildingstamina',
    stats: {
      CritChance: 5
    }
  },
  25359: {
    name: 'Grace of Air Totem',
    icon: 'spell_nature_invisibilitytotem',
    talented_ratio: 1.15,
    stats: {
      Agi: 77
    }
  },
  25528: {
    name: 'Strength of Earth Totem',
    icon: 'spell_nature_earthbindtotem',
    talented_ratio: 1.15,
    stats: {
      Str: 86
    }
  },
  25570: {
    name: 'Mana Spring Totem',
    icon: 'spell_nature_manaregentotem',
    stats: {
      MP5: 50
    }
  },
  [WF_ID] : {
    name: 'Windfury Totem',
    icon: 'spell_nature_windfury'
  },
  27127: {
    name: 'Arcane Brilliance',
    icon: 'spell_holy_arcaneintellect',
    stats: {
      Int: 40
    }
  },
  26991: {
    name: 'Gift of the Wild',
    icon: 'spell_nature_giftofthewild',
    talented_ratio: 1.35,
    stats: {
      Str: 14,
      Agi: 14,
      Stam: 14,
      Int: 14,
      Spi: 14
    }
  },
  25392: {
    name: 'Prayer of Fortitude',
    icon: 'spell_holy_prayeroffortitude',
    talented_ratio: 1.3,
    stats: {
      Stam: 79
    }
  },
  27268: {
    name: 'Blood Pact',
    icon: 'spell_shadow_bloodboil',
    talented_ratio: 1.3,
    stats: {
      Stam: 70
    }
  },
  [IMP_SANC_AURA_ID] : {
    name: 'Improved Sanctity Aura',
    icon: 'spell_holy_mindvision'
  },
  6562: {
    name: 'Heroic Presence',
    icon: 'inv_helmet_21',
    stats: {
      HitChance: 1
    }
  },
}

function getStatsFromBuffs(buffs) {
  return buffs.reduce(({stats, talents}, buffData) => {
    let buffId = buffData
    let props = {}

    if (typeof buffData === 'object')
      ({ id: buffId, ...props } = buffData)

    if (buffId === BOK_ID) talents.kingsMod += 10/100
    else if (buffId === WF_ID) talents.windfury = true
    else if (buffId === IMP_SANC_AURA_ID) talents.impSancAura += 2/100
    else {
      if (!BUFFS[buffId]) throw Error(`Detected invalid buff id ${id}`)
      const buff = BUFFS[buffId]

      let bonus = 0
      let ratio = 1
      Object.entries(props).forEach(([name, value]) => {
        if (!value) return;
        if (buff[name + "_bonus"]) bonus += buff[name + "_bonus"]
        else if (buff[name + "_ratio"]) ratio *= buff[name + "_ratio"]
        else throw Error(`Detected invalid property "${name}" for buff "${buff.name}"`)
      })

      if (buff.stats)
        Object.entries(buff.stats).forEach(([stat, amount]) => stats[stat] = (stats[stat] || 0) + (amount + bonus)* ratio)
    }

    return { stats, talents }
  }, { stats: {}, talents: { impSancAura: 1, kingsMod: 1, windfury: false } })
}
