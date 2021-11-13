const BUFFS = {
  25898: {
    name: 'Greater Blessing of Kings',
    icon: 'spell_magic_greaterblessingofkings',
    special: { kingsMod: 1.1 }
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
  27066: {
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
      Agi: 0 //changed to 0, handled with combatAgi -- 77 base agi
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
  25587 : {
    name: 'Windfury Totem',
    icon: 'spell_nature_windfury',
    special: { windfury: true }
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
  31870 : {
    name: 'Improved Sanctity Aura',
    icon: 'spell_holy_mindvision',
    special: { impSancAura: 1.02 }
  },
  6562: {
    name: 'Heroic Presence',
    icon: 'inv_helmet_21',
    stats: {
      HitChance: 1
    }
  },
  31025: {
    name: 'Braided Eternium Chain',
    icon: 'inv_jewelry_necklace_08',
    stats: {
      Crit: 28
    }
  }
};
