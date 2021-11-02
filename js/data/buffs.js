const BOK = {
  name: 'Greater Blessing of Kings',
  id: 25898,
  icon: 'spell_magic_greaterblessingofkings',
}

const WF = {
  name: 'Windfury Totem',
  id: 25587,
  icon: 'spell_nature_windfury'
}

const BUFFS = [
  BOK,
  {
    name: 'Greater Blessing of Might',
    id: 27141,
    icon: 'spell_holy_greaterblessingofkings',
    improve_ratio: 1.2,
    stats: {
      MAP: 220,
      RAP: 220,
    }
  },
  {
    name: 'Greater Blessing of Wisdom',
    id: 27143,
    icon: 'spell_holy_greaterblessingofwisdom',
    improve_ratio: 1.2,
    stats: {
      MP5: 41
    }
  },
  {
    name: 'Battle Shout',
    id: 2048,
    icon: 'ability_warrior_battleshout',
    improve_ratio: 1.25,
    stats: {
      MAP: 306
    }
  },
  {
    name: 'Trueshot Aura',
    id: 27066,
    icon: 'ability_trueshot',
    stats: {
      MAP: 125,
      RAP: 125
    }
  },
  {
    name: 'Leader of the Pack',
    id: 17007,
    icon: 'spell_nature_unyeildingstamina',
    stats: {
      CritChance: 5
    }
  },
  {
    name: 'Grace of Air Totem',
    id: 25359,
    icon: 'spell_nature_invisibilitytotem',
    improve_ratio: 1.15,
    stats: {
      Agi: 77
    }
  },
  {
    name: 'Strength of Earth Totem',
    id: 25528,
    icon: 'spell_nature_earthbindtotem',
    improve_ratio: 1.15,
    stats: {
      Str: 86
    }
  },
  {
    name: 'Mana Spring Totem',
    id: 25570,
    icon: 'spell_nature_manaregentotem',
    stats: {
      MP5: 50
    }
  },
  WF,
  {
    name: 'Arcane Brilliance',
    id: 27127,
    icon: 'spell_holy_arcaneintellect',
    stats: {
      Int: 40
    }
  },
  {
    name: 'Gift of the Wild',
    id: 26991,
    icon: 'spell_nature_giftofthewild',
    improve_ratio: 1.35,
    stats: {
      Str: 14,
      Agi: 14,
      Stam: 14,
      Int: 14,
      Spi: 14
    }
  },
  {
    name: 'Prayer of Fortitude',
    id: 25392,
    icon: 'spell_holy_prayeroffortitude',
    improve_ratio: 1.3,
    stats: {
      Stam: 79
    }
  },
  {
    name: 'Blood Pact',
    id: 27268,
    icon: 'spell_shadow_bloodboil',
    improve_ratio: 1.3,
    stats: {
      Stam: 70
    }
  },
  {
    name: 'Heroic Presence',
    id: 6562,
    icon: 'inv_helmet_21',
    stats: {
      HitChance: 1
    }
  },
]

function getStatsFromBuffs(buffs) {
  return buffs.reduce(({stats, talents}, buffData) => {
    let buffId = buffData
    let isImproved = false

    if (typeof buffData === 'object') {
      isImproved = buffData.improved
      buffId = buffData.id
    }

    if (buffId === BOK.id) talents.kingsMod = 1.1
    else if (buffId === WF.id) talents.windfury = 1
    else {
      const buff = BUFFS.find(buff => buffId === buff.id)
      if (!buff) throw Error(`Detected invalid buff id ${id}`)

      const ratio = isImproved ? buff.improve_ratio || 1 : 1
      if (buff.stats)
        Object.entries(buff.stats).forEach(([stat, amount]) => stats[stat] = (stats[stat] || 0) + amount * ratio)
    }

    return { stats, talents }
  }, { stats: {}, talents: { kingsMod: 1, windfury: 0 } })
}
