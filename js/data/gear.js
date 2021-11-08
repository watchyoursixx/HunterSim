const SETS = {
  650: {
    name: 'Beast Lord Armor',
    abrv: 'beast_lord',
    bonuses: {
      2: { trap_cdr: -4 },
      4: { kc_arp: 600 }
    }
  },
  '-7': {
    name: "Brutal Gladiator's Pursuit",
    abrv: 'brutal_gladiator_pursuit',
    bonuses: {
      2: { stats: { Resil: 35 } },
      4: { multishot_cdr: 1 }
    }
  },
  530: {
    name: 'Cryptstalker Armor',
    abrv: 'cryptstalker',
    bonuses: {
      2: { rf_duration: 4 },
      4: { stats: { RAP: 50, MAP: 50 } },
      6: { crit_mana_return: 50 },
      8: { reduced_mana_cost: 20 },
    }
  },
  651: {
    name: 'Demon Stalker Armor',
    abrv: 'demon_stalker',
    bonuses: {
      2: { fd_resist: 0.05 },
      4: { reduced_ms_mana_ratio: 0.9 },
    }
  },
  660: {
    name: 'Desolation Battlegear',
    abrv: 'desolation_battlegear',
    bonuses: {
      2: { stats: { Hit: 35 }},
      4: { aura: { stats: { MAP: 160, RAP: 160 }, duration: 15, is_proc: true, proc_type: 2, proc_chance: 0.01 }}
    }
  },
  561: {
    name: 'Fel Iron Chain',
    abrv: 'fel_iron_chain',
    bonuses: {
      2: { stats: { Crit: 14 } },
      4: { stats: { MP5: 8 } },
    }
  },
  611: {
    name: 'Felscale Armor',
    abrv: 'felscale',
    bonuses: {
      2: { stats: { Crit: 15 } },
      4: { stats: { Stam: 20 } },
    }
  },
  575: {
    name: 'Felstalker Armor',
    abrv: 'felstalker',
    bonuses: {
      2: { stats: { Hit: 20 } }
    }
  },
  586: {
    name: "Gladiator's Pursuit",
    abrv: 'gladiator_pursuit',
    bonuses: {
      2: { stats: { Resil: 35 } },
      4: { multishot_cdr: 1 }
    }
  },
  669: {
    name: "Gronnstalker's Armor",
    abrv: 'gronnstalker',
    bonuses: {
      2: { viper_mana_gain_ratio: 0.05 },
      4: { steady_shot_dmg_ratio: 0.1 }
    }
  },
  706: {
    name: "Merciless Gladiator's Pursuit",
    abrv: 'merciless_gladiator_pursuit',
    bonuses: {
      2: { stats: { Resil: 35 } },
      4: { multishot_cdr: 1 }
    }
  },
  616: {
    name: 'Netherscale Armor',
    abrv: 'netherscale',
    bonuses: {
      2: { stats: { Hit: 20 } }
    }
  },
  619: {
    name: 'Primal Intent',
    abrv: 'primalstrike',
    bonuses: {
        2: { stats: { MAP: 40, RAP: 40 } }
    }
  },
  652: {
    name: 'Rift Stalker Armor',
    abrv: 'rift_stalker',
    bonuses: {
      2: { pet_heal_on_dmg: 0.15 },
      4: { ss_crit: 5 }
    }
  },
  749: {
      name: "Stalker's Chain Battlegear",
      abrv: 'stalker_chain_battlegear',
      bonuses: {
        2: { stats: { Resil: +35 } },
        4: { conc_shot_cdr: 1 }
      }
  },
  723: {
    name: "Vengeful Gladiator's Pursuit",
    abrv: 'vengeful_gladiator_pursuit',
    bonuses: {
      2: { stats: { Resil: 35 } },
      4: { multishot_cdr: 1 }
    }
  },
  659: {
      name: 'Wastewalker Armor',
      abrv: 'wastewalker',
      bonuses: {
        2: { stats: { Hit: 35 } },
        4: { aura: { stats: { MAP: 160, RAP: 160 }, duration: 15, is_proc: true, proc_type: 2, proc_chance: 0.02 }}
      }
  }
}

const AMMOS = {
    10513: {
        name: "Mithril Gyro-Shot",
        ammo_dps: 15,
        Location: "Crafted - Eng",
        Phase: 1,
        type: "bullet",
        icon: "inv_ammo_bullet_01"
    },
    11285: {
        name: "Jagged Arrow",
        ammo_dps: 13,
        Location: "Vendor",
        Phase: 1,
        type: "arrow",
        icon: "inv_weapon_shortblade_25"
    },
    12654: {
        name: "Doomshot",
        ammo_dps: 20,
        Location: "Dungeon",
        Phase: 1,
        type: "arrow",
        icon: "ability_hunter_criticalshot"
    },
    15997: {
        name: "Thorium Shells",
        ammo_dps: 17.5,
        Location: "Crafted - Eng",
        Phase: 1,
        type: "bullet",
        icon: "inv_ammo_bullet_03"
    },
    18042: {
        name: "Thorium Headed Arrow",
        ammo_dps: 17.5,
        Location: "Crafted - Eng",
        Phase: 1,
        type: "arrow",
        icon: "inv_ammo_arrow_02"
    },
    19316: {
        name: "Ice Threaded Arrow",
        ammo_dps: 16.5,
        Location: "Honor Reward",
        Phase: 1,
        type: "arrow",
        icon: "spell_frost_iceshard"
    },
    19317: {
        name: "Ice Threaded Bullet",
        ammo_dps: 16.5,
        Location: "Honor Reward",
        Phase: 1,
        type: "bullet",
        icon: "spell_frost_frostblast"
    },
    23772: {
        name: "Fel Iron Shells",
        ammo_dps: 26,
        Location: "Crafted - Eng",
        Phase: 1,
        type: "bullet",
        icon: "inv_gizmo_felironshell"
    },
    23773: {
        name: "Adamantite Shells",
        ammo_dps: 43,
        Location: "Crafted - Eng",
        Phase: 2,
        type: "bullet",
        icon: "inv_misc_ammo_bullet_04"
    },
    24417: {
        name: "Scout's Arrow",
        ammo_dps: 26,
        Location: "Cenarion Expedition - Friendly",
        Phase: 1,
        type: "arrow",
        icon: "inv_misc_ammo_arrow_05"
    },
    28053: {
        name: "Wicked Arrow",
        ammo_dps: 22,
        Location: "Vendor",
        Phase: 1,
        type: "arrow",
        icon: "inv_misc_ammo_arrow_03"
    },
    28056: {
        name: "Blackflight Arrow",
        ammo_dps: 32,
        Location: "Vendor",
        Phase: 1,
        type: "arrow",
        icon: "inv_misc_ammo_arrow_01"
    },
    28061: {
        name: "Ironbite Shell",
        ammo_dps: 32,
        Location: "Vendor",
        Phase: 1,
        type: "bullet",
        icon: "inv_misc_ammo_bullet_06"
    },
    30611: {
        name: "Halaani Razorshaft",
        ammo_dps: 34,
        Location: "Halaa Vendor (if faction controlled)",
        Phase: 1,
        type: "arrow",
        icon: "inv_misc_ammo_arrow_03"
    },
    30612: {
        name: "Halaani Grimshot",
        ammo_dps: 34,
        Location: "Vendor",
        Phase: 1,
        type: "bullet",
        icon: "inv_misc_ammo_bullet_04"
    },
    31735: {
        name: "Timeless Shell",
        ammo_dps: 53,
        Location: "Reputation Reward",
        Phase: 3,
        type: "bullet",
        icon: "inv_misc_ammo_bullet_02"
    },
    31737: {
        name: "Timeless Arrow",
        ammo_dps: 53,
        Location: "The Scale of the Sands - Honored",
        Phase: 3,
        type: "arrow",
        icon: "inv_misc_ammo_arrow_04"
    },
    31949: {
        name: "Warden's Arrow",
        ammo_dps: 37,
        Location: "Cenarion Expedition - Revered",
        Phase: 1,
        type: "arrow",
        icon: "inv_misc_ammo_arrow_02"
    },
    32882: {
        name: "Hellfire Shot",
        ammo_dps: 37,
        Location: "Reputation Reward",
        Phase: 1,
        type: "bullet",
        icon: "inv_misc_ammo_bullet_02"
    },
    32883: {
        name: "Felbane Slugs",
        ammo_dps: 37,
        Location: "Reputation Reward",
        Phase: 1,
        type: "bullet",
        icon: "inv_misc_ammo_bullet_02"
    },
    33803: {
        name: "Adamantite Stinger",
        ammo_dps: 43,
        Location: "Crafted - Eng",
        Phase: 2,
        type: "arrow",
        icon: "inv_ammo_arrow_02"
    },
    34581: {
        name: "Mysterious Arrow",
        ammo_dps: 46.5,
        Location: "The Violet Eye - Revered",
        Phase: 3,
        type: "arrow",
        icon: "inv_misc_ammo_arrow_02"
    },
    34582: {
        name: "Mysterious Shell",
        ammo_dps: 46.5,
        Location: "Reputation Reward",
        Phase: 3,
        type: "bullet",
        icon: "inv_misc_ammo_bullet_02"
    }
}

const BACKS = {
  24150: {
      name: "Mok'Nathal Wildercloak",
      stats: {
          Stam: 21,
          Resil: 21
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_misc_cape_17"
  },
  24258: {
      name: "Resolute Cape",
      stats: {
          Stam: 30,
          Resil: 21
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_misc_cape_16"
  },
  24259: {
      name: "Vengeance Wrap",
      stats: {
          MAP: 52,
          RAP: 52,
          Crit: 23
      },
      Location: "Crafting",
      sockets: [
          "Red"
      ],
      socketBonus: {
          Hit: 2
      },
      Phase: 1,
      icon: "inv_misc_cape_18"
  },
  25540: {
      name: "Dark Cloak of the Marsh",
      stats: {
          Agi: 16,
          Stam: 24,
          MAP: 30,
          RAP: 30
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_misc_cape_20"
  },
  25636: {
      name: "Talbuk Cape",
      stats: {
          Agi: 13,
          Stam: 21,
          MAP: 28,
          RAP: 28
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_misc_cape_20"
  },
  25712: {
      name: "Perfectly Balanced Cape",
      stats: {
          Agi: 15,
          Stam: 22,
          MAP: 30,
          RAP: 30
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_misc_cape_20"
  },
  25927: {
      name: "Consortium Cloak of the Quick",
      stats: {
          Agi: 14,
          MAP: 26,
          RAP: 26,
          Hit: 14
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_misc_cape_11"
  },
  25965: {
      name: "Cloak of Grasping Talons",
      stats: {
          Agi: 11,
          Stam: 16,
          MAP: 22,
          RAP: 22,
          Hit: 11
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_misc_cape_13"
  },
  27423: {
      name: "Cloak of Impulsiveness",
      stats: {
          Agi: 18,
          Stam: 19,
          MAP: 40,
          RAP: 40
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_misc_cape_18"
  },
  27519: {
      name: "Cloak of Malice",
      stats: {
          Agi: 21,
          Stam: 18,
          MAP: 38,
          RAP: 38
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_misc_cape_06"
  },
  27731: {
      name: "Vindicator's Cloak",
      stats: {
          Agi: 10,
          Stam: 15,
          MAP: 20,
          RAP: 20,
          Hit: 10
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_misc_cape_13"
  },
  27878: {
      name: "Auchenai Death Shroud",
      stats: {
          Agi: 15,
          Stam: 15,
          MAP: 36,
          RAP: 36,
          Hit: 17
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_misc_cape_21"
  },
  27892: {
      name: "Cloak of the Inciter",
      stats: {
          Stam: 15,
          MAP: 30,
          RAP: 30,
          Crit: 18,
          Hit: 16
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_misc_cape_08"
  },
  28032: {
      name: "Delicate Green Poncho",
      stats: {
          Agi: 14,
          Stam: 19,
          MAP: 28,
          RAP: 28,
          Hit: 14
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_misc_cape_05"
  },
  28380: {
      name: "Sergeant's Heavy Cloak",
      stats: {
          Stam: 27,
          MAP: 38,
          RAP: 38,
          Crit: 19,
          Resil: 19
      },
      Location: "Honor Reward",
      Phase: 1,
      icon: "inv_misc_cape_07"
  },
  28672: {
      name: "Drape of the Dark Reavers",
      stats: {
          Agi: 24,
          Stam: 21,
          MAP: 34,
          RAP: 34,
          Hit: 17
      },
      Location: "Karazhan",
      Phase: 1,
      icon: "inv_misc_cape_10"
  },
  28764: {
      name: "Farstrider Wildercloak",
      stats: {
          Stam: 36,
          MAP: 70,
          RAP: 70
      },
      Location: "Karazhan",
      Phase: 1,
      icon: "inv_misc_cape_17"
  },
  28777: {
      name: "Cloak of the Pit Stalker",
      stats: {
          Stam: 28,
          MAP: 56,
          RAP: 56,
          Crit: 24
      },
      Location: "Magtheridon's Lair",
      Phase: 1,
      icon: "inv_misc_cape_14"
  },
  29139: {
      name: "Ceremonial Cover",
      stats: {
          Stam: 15,
          Int: 26,
          MP5: 6
      },
      Location: "Reputation Reward",
      Phase: 1,
      icon: "inv_misc_cape_06"
  },
  29382: {
      name: "Blood Knight War Cloak",
      stats: {
          Agi: 23,
          Stam: 22,
          MAP: 48,
          RAP: 48
      },
      Location: "Badge Reward",
      Phase: 1,
      icon: "inv_misc_cape_18"
  },
  29792: {
      name: "Dawnstrike's Cloak",
      stats: {
          Agi: 12,
          MAP: 42,
          RAP: 42,
          Hit: 9
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_misc_cape_22"
  },
  29994: {
      name: "Thalassian Wildercloak",
      stats: {
          Agi: 28,
          Stam: 28,
          MAP: 68,
          RAP: 68
      },
      Location: "The Eye",
      Phase: 2,
      icon: "inv_misc_cape_15"
  },
  30729: {
      name: "Black-Iron Battlecloak",
      stats: {
          MAP: 60,
          RAP: 60,
          Crit: 30
      },
      Location: "World Boss",
      Phase: 1,
      icon: "inv_misc_cape_20"
  },
  31255: {
      name: "Cloak of the Craft",
      stats: {
          Agi: 25,
          MAP: 20,
          RAP: 20,
          Hit: 13
      },
      Location: "World Drop",
      Phase: 1,
      icon: "inv_misc_cape_20"
  },
  31792: {
      name: "Evergrove Ranger's Cloak",
      stats: {
          Agi: 12,
          Int: 12,
          MAP: 26,
          RAP: 26,
          MP5: 5
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_misc_cape_17"
  },
  32323: {
      name: "Shadowmoon Destroyer's Drape",
      stats: {
          Stam: 24,
          MAP: 72,
          RAP: 72,
          Crit: 24,
          Hit: 17
      },
      Location: "Black Temple",
      Phase: 3,
      icon: "inv_misc_cape_naxxramas_02"
  },
  32539: {
      name: "Skyguard's Drape",
      stats: {
          Agi: 15,
          MAP: 52,
          RAP: 52
      },
      Location: "Reputation Reward",
      Phase: 1,
      icon: "inv_misc_cape_08"
  },
  32540: {
      name: "Terokk's Might",
      stats: {
          Agi: 16,
          Stam: 18,
          MAP: 56,
          RAP: 56
      },
      Location: "World Drop",
      Phase: 1,
      icon: "inv_misc_cape_08"
  },
  32665: {
      name: "Crystalweave Cape",
      stats: {
          Agi: 15,
          Stam: 15,
          Haste: 26
      },
      Location: "World Drop",
      Phase: 1,
      icon: "inv_misc_cape_02"
  },
  33484: {
      name: "Dory's Embrace",
      stats: {
          Stam: 34,
          MAP: 46,
          RAP: 46,
          Crit: 20,
          Resil: 20,
          ArP: 112
      },
      Location: "Badge Reward",
      Phase: 3,
      icon: "inv_misc_cape_20"
  },
  33590: {
      name: "Cloak of Fiends",
      stats: {
          Agi: 20,
          Stam: 22,
          MAP: 46,
          RAP: 46,
          Haste: 25
      },
      Location: "Zul'Aman",
      Phase: 4,
      icon: "inv_misc_cape_20"
  },
  34241: {
      name: "Cloak of Unforgivable Sin",
      stats: {
          Agi: 26,
          Stam: 35,
          MAP: 72,
          RAP: 72,
          Haste: 32
      },
      Location: "Sunwell",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          MAP: 4,
          RAP: 4
      },
      Phase: 5,
      icon: "inv_misc_cape_naxxramas_02"
  },
  34708: {
      name: "Cloak of the Coming Night",
      stats: {
          Stam: 18,
          MAP: 38,
          RAP: 38,
          Hit: 12,
          Haste: 18
      },
      Location: "Dungeon",
      Phase: 5,
      icon: "inv_misc_cape_06"
  }
}

const CHESTS = {
  22191: {
      name: "Obsidian Mail Tunic",
      stats: {
          MAP: 76,
          RAP: 76,
          Crit: 14
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_chest_chain_17"
  },
  22436: {
      name: "Cryptstalker Tunic",
      set: 530,
      stats: {
          Agi: 30,
          Stam: 27,
          Int: 15,
          MAP: 60,
          RAP: 60,
          Crit: 14,
          Hit: 10,
          MP5: 4
      },
      Location: "Naxx",
      Phase: 1,
      icon: "inv_chest_chain_15"
  },
  23490: {
      name: "Fel Iron Chain Tunic",
      set: 561,
      stats: {
          Stam: 36,
          Int: 24,
          MAP: 48,
          RAP: 48
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_chest_chain_14"
  },
  23563: {
      name: "Nether Chain Shirt",
      stats: {
          Stam: 40,
          Int: 18,
          MAP: 40,
          RAP: 40,
          Crit: 28,
          MP5: 7
      },
      Location: "Crafting",
      sockets: [
          "Red",
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          Agi: 4
      },
      Phase: 1,
      icon: "inv_chest_chain_17"
  },
  23564: {
      name: "Twisting Nether Chain Shirt",
      stats: {
          Stam: 48,
          Int: 22,
          MAP: 68,
          RAP: 68,
          Crit: 33,
          MP5: 9
      },
      Location: "Crafting",
      sockets: [
          "Red",
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          Agi: 4
      },
      Phase: 1,
      icon: "inv_chest_chain_17"
  },
  23565: {
      name: "Embrace of the Twisting Nether",
      stats: {
          Stam: 56,
          Int: 27,
          MAP: 85,
          RAP: 85,
          Crit: 35,
          MP5: 10
      },
      Location: "Crafting",
      sockets: [
          "Red",
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          Agi: 4
      },
      Phase: 1,
      icon: "inv_chest_chain_17"
  },
  24465: {
      name: "Shamblehide Chestguard",
      stats: {
          Stam: 16,
          Int: 19,
          MAP: 44,
          RAP: 44,
          Crit: 21
      },
      Location: "Dungeon",
      sockets: [
          "Yellow",
          "Blue",
          "Red"
      ],
      socketBonus: {
          Agi: 4
      },
      Phase: 1,
      icon: "inv_chest_chain_03"
  },
  25512: {
      name: "Tribal Hauberk",
      stats: {
          Agi: 19,
          Stam: 28,
          MAP: 38,
          RAP: 38,
          Hit: 19
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_chest_chain_06"
  },
  25612: {
      name: "Daggerfen Mail",
      stats: {
          Agi: 17,
          Stam: 25,
          Int: 16,
          MAP: 34,
          RAP: 34
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_chest_plate08"
  },
  25614: {
      name: "Feralfen Beastmaster's Hauberk",
      stats: {
          Agi: 21,
          Stam: 31,
          Int: 20,
          MAP: 42,
          RAP: 42
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_chest_plate08"
  },
  25657: {
      name: "Felscale Breastplate",
      set: 661,
      stats: {
          Agi: 30,
          MAP: 72,
          RAP: 72
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_chest_chain_13"
  },
  25696: {
      name: "Felstalker Breastplate",
      set: 575,
      stats: {
          Agi: 26,
          Int: 26,
          MAP: 52,
          RAP: 52
      },
      Location: "Crafting",
      sockets: [
          "Red",
          "Red",
          "Blue"
      ],
      socketBonus: {
          Stam: 6
      },
      Phase: 1,
      icon: "inv_chest_chain_13"
  },
  25838: {
      name: "Warden's Hauberk",
      stats: {
          Agi: 39,
          Stam: 30
      },
      Location: "Reputation Reward",
      sockets: [
          "Red",
          "Red",
          "Red"
      ],
      socketBonus: {
          Hit: 4
      },
      Phase: 1,
      icon: "inv_chest_leather_08"
  },
  27787: {
      name: "Chestguard of No Remorse",
      stats: {
          Stam: 35,
          MAP: 92,
          RAP: 92,
          Crit: 21
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_chest_plate11"
  },
  27823: {
      name: "Shard Encrusted Breastplate",
      stats: {
          Agi: 32,
          Stam: 24,
          Int: 23,
          MAP: 70,
          RAP: 70,
          MP5: 3
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_chest_chain_13"
  },
  28057: {
      name: "Bonechewer Berserker's Vest",
      stats: {
          Agi: 14,
          Stam: 15,
          Int: 13,
          MAP: 72,
          RAP: 72,
          MP5: 4
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_chest_plate16"
  },
  28186: {
      name: "Laughing Skull Battle-Harness",
      stats: {
          Agi: 28,
          Stam: 29,
          Int: 20,
          MAP: 40,
          RAP: 40
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          MP5: 2
      },
      Phase: 1,
      icon: "inv_chest_leather_04"
  },
  28204: {
      name: "Tunic of Assassination",
      stats: {
          Agi: 28,
          Stam: 21,
          MAP: 54,
          RAP: 54
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Red",
          "Blue"
      ],
      socketBonus: {},
      Phase: 1,
      icon: "inv_chest_chain_17"
  },
  28228: {
      name: "Beast Lord Cuirass",
      set: 650,
      stats: {
          Agi: 20,
          Stam: 30,
          Int: 24,
          MAP: 40,
          RAP: 40,
          MP5: 4
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Red",
          "Blue"
      ],
      socketBonus: {
          Agi: 4
      },
      Phase: 1,
      icon: "inv_chest_chain_03"
  },
  28264: {
      name: "Wastewalker Tunic",
      set: 659,
      stats: {
          Agi: 28,
          Stam: 36,
          MAP: 56,
          RAP: 56
      },
      Location: "Dungeon",
      sockets: [
          "Yellow",
          "Yellow",
          "Yellow"
      ],
      socketBonus: {
          Agi: 4
      },
      Phase: 1,
      icon: "inv_chest_chain_17"
  },
  28334: {
      name: "Gladiator's Chain Armor",
      set: 586,
      stats: {
          Agi: 27,
          Stam: 51,
          Int: 17,
          MAP: 26,
          RAP: 26,
          Crit: 18,
          Resil: 20
      },
      Location: "Honor Reward",
      sockets: [
          "Red",
          "Red",
          "Yellow"
      ],
      socketBonus: {
          Crit: 4
      },
      Phase: 1,
      icon: "inv_chest_chain_11"
  },
  28401: {
      name: "Hauberk of Desolation",
      set: 660,
      stats: {
          Stam: 28,
          Int: 25,
          MAP: 50,
          RAP: 50,
          Crit: 16
      },
      Location: "Dungeon",
      sockets: [
          "Yellow",
          "Yellow",
          "Red"
      ],
      socketBonus: {
          Crit: 4
      },
      Phase: 1,
      icon: "inv_chest_chain_03"
  },
  28599: {
      name: "Scaled Breastplate of Carnage",
      stats: {
          Stam: 33,
          Int: 38,
          MAP: 80,
          RAP: 80,
          Crit: 24,
          MP5: 8
      },
      Location: "Karazhan",
      Phase: 1,
      icon: "inv_chest_chain_07"
  },
  28601: {
      name: "Chestguard of the Conniver",
      stats: {
          Agi: 37,
          Stam: 36,
          MAP: 90,
          RAP: 90,
          Hit: 22
      },
      Location: "Karazhan",
      Phase: 1,
      icon: "inv_chest_leather_06"
  },
  29082: {
      name: "Demon Stalker Harness",
      set: 651,
      stats: {
          Agi: 26,
          Stam: 24,
          Int: 35,
          MAP: 70,
          RAP: 70,
          MP5: 6
      },
      Location: "Magtheridon's Lair",
      sockets: [
          "Red",
          "Blue",
          "Blue"
      ],
      socketBonus: {
          MAP: 8,
          RAP: 8
      },
      Phase: 1,
      icon: "inv_chest_chain_15"
  },
  29339: {
      name: "Auchenai Tracker's Hauberk",
      stats: {
          Int: 29,
          MAP: 60,
          RAP: 60,
          MP5: 5
      },
      Location: "Quest Reward",
      sockets: [
          "Blue",
          "Blue",
          "Blue"
      ],
      socketBonus: {
          Crit: 4
      },
      Phase: 1,
      icon: "inv_chest_plate10"
  },
  29514: {
      name: "Thick Netherscale Breastplate",
      stats: {
          Agi: 36,
          Stam: 36,
          Int: 25,
          MAP: 76,
          RAP: 76
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_chest_plate08"
  },
  29515: {
      name: "Ebon Netherscale Breastplate",
      set: 616,
      stats: {
          Stam: 25,
          Int: 23,
          MAP: 80,
          RAP: 80,
          Crit: 31,
          MP5: 8
      },
      Location: "Crafting",
      sockets: [
          "Blue",
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          Agi: 4
      },
      Phase: 1,
      icon: "inv_chest_plate08"
  },
  29525: {
      name: "Primalstrike Vest",
      set: 619,
      stats: {
          Agi: 38,
          Stam: 39,
          MAP: 108,
          RAP: 108,
          Hit: 12
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_chest_cloth_45"
  },
  29941: {
      name: "Scale Brand Breastplate",
      stats: {
          Agi: 19,
          Stam: 30,
          MAP: 38,
          RAP: 38
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_chest_chain_17"
  },
  30054: {
      name: "Ranger-General's Chestguard",
      stats: {
          Agi: 36,
          Stam: 19,
          Int: 30,
          MAP: 88,
          RAP: 88,
          Crit: 14
      },
      Location: "Serpentshrine Cavern",
      sockets: [
          "Blue",
          "Red",
          "Yellow"
      ],
      socketBonus: {
          Agi: 4
      },
      Phase: 2,
      icon: "inv_chest_plate09"
  },
  30076: {
      name: "Stormforged Hauberk",
      stats: {
          Agi: 25,
          Stam: 11,
          Int: 11,
          MAP: 50,
          RAP: 50,
          MP5: 7
      },
      Location: "Crafting",
      sockets: [
          "Blue",
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          Crit: 4
      },
      Phase: 1,
      icon: "inv_chest_chain_17"
  },
  30101: {
      name: "Bloodsea Brigand's Vest",
      stats: {
          Stam: 24,
          MAP: 92,
          RAP: 92,
          Crit: 36,
          Hit: 27
      },
      Location: "Serpentshrine Cavern",
      sockets: [
          "Yellow",
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          MAP: 8,
          RAP: 8
      },
      Phase: 2,
      icon: "inv_chest_plate08"
  },
  30139: {
      name: "Rift Stalker Hauberk",
      set: 652,
      stats: {
          Agi: 40,
          Stam: 40,
          Int: 19,
          MAP: 80,
          RAP: 80,
          Hit: 19,
          MP5: 8
      },
      Location: "The Eye",
      sockets: [
          "Blue",
          "Yellow",
          "Yellow"
      ],
      socketBonus: {
          Agi: 4
      },
      Phase: 2,
      icon: "inv_chest_chain_15"
  },
  30255: {
      name: "Chestguard of the Stormspire",
      stats: {
          Agi: 21,
          MAP: 78,
          RAP: 78,
          Hit: 16
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_chest_leather_08"
  },
  30730: {
      name: "Terrorweave Tunic",
      stats: {
          MAP: 96,
          RAP: 96,
          Crit: 25,
          Hit: 21
      },
      Location: "World Boss",
      sockets: [
          "Red",
          "Yellow",
          "Yellow"
      ],
      socketBonus: {
          Crit: 4
      },
      Phase: 1,
      icon: "inv_chest_cloth_45"
  },
  30835: {
      name: "Salvager's Hauberk",
      stats: {
          Stam: 49,
          MAP: 66,
          RAP: 66,
          Crit: 33
      },
      Location: "Reputation Reward",
      Phase: 1,
      icon: "inv_chest_plate08"
  },
  30905: {
      name: "Midnight Chestguard",
      stats: {
          Stam: 64,
          MAP: 106,
          RAP: 106,
          Crit: 46,
          Hit: 29
      },
      Location: "Mount Hyjal",
      sockets: [
          "Red",
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          MAP: 8,
          RAP: 8
      },
      Phase: 3,
      icon: "inv_chest_plate02"
  },
  30907: {
      name: "Mail of Fevered Pursuit",
      stats: {
          Agi: 49,
          Stam: 66,
          MAP: 108,
          RAP: 108,
          Crit: 29,
          MP5: 8
      },
      Location: "Mount Hyjal",
      Phase: 3,
      icon: "inv_chest_chain_17"
  },
  30947: {
      name: "Crimson Mail Hauberk",
      stats: {
          Agi: 14,
          Stam: 16,
          Int: 14,
          MAP: 76,
          RAP: 76,
          MP5: 4
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_chest_chain_07"
  },
  31004: {
      name: "Gronnstalker's Chestguard",
      set: 669,
      stats: {
          Agi: 40,
          Stam: 52,
          Int: 37,
          MAP: 90,
          RAP: 90,
          Crit: 19
      },
      Location: "Black Temple",
      sockets: [
          "Red",
          "Yellow",
          "Yellow"
      ],
      socketBonus: {
          Agi: 4
      },
      Phase: 3,
      icon: "inv_chest_mail_03"
  },
  31286: {
      name: "Breastplate of Rapid Striking",
      stats: {
          Agi: 40,
          Int: 20,
          MAP: 46,
          RAP: 46,
          Hit: 20
      },
      Location: "World Drop",
      Phase: 1,
      icon: "inv_chest_plate10"
  },
  31514: {
      name: "Dragonkin Shirt",
      stats: {
          Agi: 15,
          Stam: 21,
          Int: 15,
          MAP: 74,
          RAP: 74
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_chest_chain_12"
  },
  31782: {
      name: "Warpstalker Breastplate",
      stats: {
          Agi: 20,
          Int: 30,
          MAP: 42,
          RAP: 42,
          MP5: 8
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_chest_chain_08"
  },
  31960: {
      name: "Merciless Gladiator's Chain Armor",
      set: 706,
      stats: {
          Agi: 31,
          Stam: 57,
          Int: 17,
          MAP: 32,
          RAP: 32,
          Crit: 21,
          Resil: 21
      },
      Location: "Arena Reward",
      sockets: [
          "Red",
          "Red",
          "Yellow"
      ],
      socketBonus: {
          Crit: 4
      },
      Phase: 2,
      icon: "inv_chest_chain_11"
  },
  32252: {
      name: "Nether Shadow Tunic",
      stats: {
          Agi: 36,
          Stam: 52,
          MAP: 86,
          RAP: 86,
          Hit: 35
      },
      Location: "Black Temple",
      sockets: [
          "Red",
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          MAP: 8,
          RAP: 8
      },
      Phase: 3,
      icon: "inv_chest_leather_03"
  },
  32334: {
      name: "Vest of Mounting Assault",
      stats: {
          Agi: 58,
          Stam: 27,
          Int: 18,
          MAP: 116,
          RAP: 116
      },
      Location: "Black Temple",
      Phase: 3,
      icon: "inv_chest_samurai"
  },
  33328: {
      name: "Arrow-fall Chestguard",
      stats: {
          Agi: 39,
          Stam: 25,
          Int: 38,
          MAP: 78,
          RAP: 78,
          Haste: 30
      },
      Location: "Zul'Aman",
      Phase: 4,
      icon: "inv_chest_chain_13"
  },
  33329: {
      name: "Shadowtooth Trollskin Cuirass",
      stats: {
          Agi: 45,
          Stam: 46,
          MAP: 92,
          RAP: 92,
          ArP: 210
      },
      Location: "Zul'Aman",
      Phase: 4,
      icon: "inv_chest_leather_06"
  },
  33664: {
      name: "Vengeful Gladiator's Chain Armor",
      set: 723,
      stats: {
          Agi: 27,
          Stam: 63,
          Int: 21,
          MAP: 38,
          RAP: 38,
          Crit: 25,
          Hit: 12,
          Resil: 21,
          ArP: 84
      },
      Location: "Arena Reward",
      sockets: [
          "Red",
          "Red",
          "Yellow"
      ],
      socketBonus: {
          Crit: 4
      },
      Phase: 3,
      icon: "inv_chest_mail_03"
  },
  34228: {
      name: "Vicious Hawkstrider Hauberk",
      stats: {
          Agi: 47,
          Stam: 64,
          Int: 30,
          MAP: 104,
          RAP: 104,
          ArP: 182
      },
      Location: "Sunwell",
      sockets: [
          "Red",
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          MAP: 8,
          RAP: 8
      },
      Phase: 5,
      icon: "inv_chest_chain_17"
  },
  34369: {
      name: "Carapace of Sun and Shadow",
      stats: {
          Agi: 42,
          Stam: 45,
          MAP: 120,
          RAP: 120,
          Hit: 30,
          Haste: 38
      },
      Location: "Sunwell",
      sockets: [
          "Yellow",
          "Red",
          "Red"
      ],
      socketBonus: {
          MAP: 8,
          RAP: 8
      },
      Phase: 5,
      icon: "inv_chest_plate02"
  },
  34373: {
      name: "Embrace of the Phoenix",
      stats: {
          Agi: 44,
          Stam: 43,
          Int: 30,
          MAP: 104,
          RAP: 104,
          Haste: 44
      },
      Location: "Crafting",
      sockets: [
          "Red",
          "Red",
          "Red"
      ],
      socketBonus: {
          MAP: 8,
          RAP: 8
      },
      Phase: 5,
      icon: "inv_chest_chain_17"
  },
  34397: {
      name: "Bladed Chaos Tunic",
      stats: {
          Agi: 42,
          Stam: 45,
          MAP: 120,
          RAP: 120,
          Crit: 38,
          ArP: 210
      },
      Location: "Sunwell",
      sockets: [
          "Blue",
          "Yellow",
          "Red"
      ],
      socketBonus: {
          MAP: 8,
          RAP: 8
      },
      Phase: 5,
      icon: "inv_chest_leather_16"
  },
  34614: {
      name: "Tunic of the Ranger Lord",
      stats: {
          Agi: 45,
          Stam: 34,
          Int: 23,
          MAP: 88,
          RAP: 88,
          Crit: 23
      },
      Location: "Dungeon",
      Phase: 5,
      icon: "inv_chest_chain_06"
  },
  34799: {
      name: "Hauberk of the War Bringer",
      stats: {
          Agi: 24,
          Stam: 25,
          Int: 17,
          MAP: 76,
          RAP: 76,
          Haste: 20
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Yellow",
          "Yellow"
      ],
      socketBonus: {
          MAP: 8,
          RAP: 8
      },
      Phase: 1,
      icon: "inv_chest_chain_17"
  },
  34912: {
      name: "Scaled Drakeskin Chestguard",
      stats: {
          Agi: 47,
          Stam: 39,
          Int: 26,
          MAP: 102,
          RAP: 102,
          Haste: 25
      },
      Location: "Badge Reward",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          MAP: 4,
          RAP: 4
      },
      Phase: 3,
      icon: "inv_chest_chain_17"
  },
  34927: {
      name: "Tunic of the Dark Hour",
      stats: {
          Agi: 44,
          Stam: 51,
          MAP: 102,
          RAP: 102,
          Hit: 34
      },
      Location: "Badge Reward",
      sockets: [
          "Red"
      ],
      socketBonus: {
          Stam: 3
      },
      Phase: 3,
      icon: "inv_chest_plate02"
  },
  34990: {
      name: "Brutal Gladiator's Chain Armor",
      set: '-7',
      stats: {
          Agi: 32,
          Stam: 70,
          Int: 25,
          MAP: 46,
          RAP: 46,
          Crit: 29,
          Hit: 16,
          Resil: 21,
          ArP: 84
      },
      Location: "Arena Reward",
      sockets: [
          "Red",
          "Red",
          "Yellow"
      ],
      socketBonus: {
          Crit: 4
      },
      Phase: 5,
      icon: "inv_chest_chain_07"
  },
  35376: {
      name: "Stalker's Chain Armor",
      set: 749,
      stats: {
          Agi: 20,
          Stam: 42,
          Int: 15,
          MAP: 12,
          RAP: 12,
          Crit: 12,
          Resil: 16
      },
      Location: "Reputation Reward",
      sockets: [
          "Red",
          "Red",
          "Yellow"
      ],
      socketBonus: {
          Crit: 4
      },
      Phase: 1,
      icon: "inv_chest_chain_11"
  }
}

const FEET = {
  22061: {
      name: "Beastmaster's Boots",
      stats: {
          Agi: 16,
          Stam: 9,
          MAP: 32,
          RAP: 32
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_boots_plate_07"
  },
  22440: {
      name: "Cryptstalker Boots",
      set: 530,
      stats: {
          Agi: 22,
          Stam: 19,
          Int: 8,
          MAP: 44,
          RAP: 44,
          Hit: 10
      },
      Location: "Naxx",
      Phase: 1,
      icon: "inv_boots_chain_05"
  },
  25655: {
      name: "Felscale Boots",
      set: 661,
      stats: {
          Agi: 20,
          MAP: 44,
          RAP: 44
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_boots_chain_08"
  },
  25686: {
      name: "Fel Leather Boots",
      stats: {
          MAP: 36,
          RAP: 36,
          Crit: 17,
          Hit: 25
      },
      Location: "Crafting",
      sockets: [
          "Yellow",
          "Red"
      ],
      socketBonus: {
          MAP: 6,
          RAP: 6
      },
      Phase: 1,
      icon: "inv_boots_cloth_05"
  },
  25941: {
      name: "Boots of the Outlander",
      stats: {
          Agi: 22,
          Stam: 21,
          Int: 15,
          MAP: 44,
          RAP: 44
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_boots_chain_03"
  },
  25951: {
      name: "Fleet Refugee's Boots",
      stats: {
          Agi: 18,
          MAP: 36,
          RAP: 36,
          Hit: 17
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_boots_plate_01"
  },
  27450: {
      name: "Wild Stalker Boots",
      stats: {
          Stam: 24,
          Int: 17,
          MAP: 64,
          RAP: 64,
          Hit: 17
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_boots_chain_03"
  },
  27467: {
      name: "Silent-Strider Kneeboots",
      stats: {
          Agi: 27,
          Stam: 30,
          MAP: 50,
          RAP: 50
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_boots_cloth_06"
  },
  27867: {
      name: "Boots of the Unjust",
      stats: {
          Stam: 25,
          MAP: 64,
          RAP: 64,
          Crit: 19,
          Hit: 12
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_boots_chain_06"
  },
  27915: {
      name: "Sky-Hunter Swift Boots",
      stats: {
          Agi: 25,
          Stam: 19,
          Int: 24,
          MAP: 26,
          RAP: 26,
          MP5: 5
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_boots_chain_05"
  },
  28177: {
      name: "Auchenai Boots",
      stats: {
          Stam: 25,
          Int: 25,
          MP5: 10
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Red"
      ],
      socketBonus: {},
      Phase: 1,
      icon: "inv_boots_chain_11"
  },
  28384: {
      name: "Outland Striders",
      stats: {
          Stam: 18,
          Int: 24,
          MAP: 50,
          RAP: 50,
          Crit: 21
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_boots_chain_09"
  },
  28545: {
      name: "Edgewalker Longboots",
      stats: {
          Agi: 29,
          Stam: 28,
          MAP: 44,
          RAP: 44,
          Hit: 13
      },
      Location: "Karazhan",
      sockets: [
          "Red",
          "Yellow"
      ],
      socketBonus: {
          Hit: 3
      },
      Phase: 1,
      icon: "inv_boots_plate_06"
  },
  28610: {
      name: "Ferocious Swift-Kickers",
      stats: {
          Stam: 22,
          Int: 21,
          MAP: 58,
          RAP: 58,
          Crit: 16
      },
      Location: "Karazhan",
      sockets: [
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          MAP: 6,
          RAP: 6
      },
      Phase: 1,
      icon: "inv_boots_chain_04"
  },
  28669: {
      name: "Rapscallion Boots",
      stats: {
          Stam: 26,
          MAP: 82,
          RAP: 82,
          Crit: 24
      },
      Location: "Karazhan",
      Phase: 1,
      icon: "inv_boots_plate_06"
  },
  28746: {
      name: "Fiend Slayer Boots",
      stats: {
          Agi: 26,
          Stam: 24,
          Int: 16,
          MAP: 34,
          RAP: 34,
          Hit: 17
      },
      Location: "Karazhan",
      sockets: [
          "Red",
          "Blue"
      ],
      socketBonus: {
          Agi: 3
      },
      Phase: 1,
      icon: "inv_boots_chain_05"
  },
  29248: {
      name: "Shadowstep Striders",
      stats: {
          Agi: 31,
          Stam: 30,
          MAP: 54,
          RAP: 54
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_boots_cloth_05"
  },
  29262: {
      name: "Boots of the Endless Hunt",
      stats: {
          Agi: 26,
          Stam: 19,
          Int: 23,
          MAP: 48,
          RAP: 48,
          MP5: 6
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_boots_chain_05"
  },
  29951: {
      name: "Star-Strider Boots",
      stats: {
          Agi: 33,
          Stam: 13,
          Int: 18,
          MAP: 66,
          RAP: 66,
          MP5: 4
      },
      Location: "The Eye",
      sockets: [
          "Blue",
          "Blue"
      ],
      socketBonus: {
          MAP: 6,
          RAP: 6
      },
      Phase: 2,
      icon: "inv_boots_chain_04"
  },
  30039: {
      name: "Boots of Utter Darkness",
      stats: {
          Stam: 34,
          MAP: 66,
          RAP: 66,
          Crit: 32,
          Hit: 23
      },
      Location: "Crafting",
      Phase: 2,
      icon: "inv_boots_05"
  },
  30045: {
      name: "Boots of the Crimson Hawk",
      stats: {
          Agi: 28,
          Stam: 28,
          Int: 27,
          MAP: 58,
          RAP: 58,
          Crit: 19
      },
      Location: "Crafting",
      Phase: 2,
      icon: "inv_boots_chain_07"
  },
  30060: {
      name: "Boots of Effortless Striking",
      stats: {
          Agi: 42,
          Stam: 41,
          MAP: 58,
          RAP: 58
      },
      Location: "Serpentshrine Cavern",
      Phase: 2,
      icon: "inv_boots_plate_06"
  },
  30104: {
      name: "Cobra-Lash Boots",
      stats: {
          Agi: 33,
          Stam: 25,
          Int: 25,
          MAP: 66,
          RAP: 66
      },
      Location: "Serpentshrine Cavern",
      sockets: [
          "Blue",
          "Red"
      ],
      socketBonus: {
          Agi: 3
      },
      Phase: 2,
      icon: "inv_boots_chain_12"
  },
  30263: {
      name: "Heavy-Duty Engineering Boots",
      stats: {
          Stam: 15,
          Int: 13,
          MAP: 26,
          RAP: 26,
          MP5: 10
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_boots_plate_03"
  },
  30273: {
      name: "Duro Footgear",
      stats: {
          Agi: 23,
          Int: 15,
          MAP: 46,
          RAP: 46,
          MP5: 9
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_boots_chain_04"
  },
  30880: {
      name: "Quickstrider Moccasins",
      stats: {
          Agi: 28,
          Stam: 30,
          Int: 31,
          MAP: 58,
          RAP: 58,
          Hit: 15
      },
      Location: "Mount Hyjal",
      sockets: [
          "Red",
          "Yellow"
      ],
      socketBonus: {
          Agi: 3
      },
      Phase: 3,
      icon: "inv_boots_chain_09"
  },
  30891: {
      name: "Black Featherlight Boots",
      stats: {
          Stam: 41,
          MAP: 98,
          RAP: 98,
          Hit: 34
      },
      Location: "Mount Hyjal",
      Phase: 3,
      icon: "inv_boots_cloth_05"
  },
  30939: {
      name: "Felboar Hide Shoes",
      stats: {
          Agi: 18,
          Stam: 15,
          MAP: 68,
          RAP: 68,
          Hit: 9
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_boots_chain_11"
  },
  30953: {
      name: "Boots of the Skybreaker",
      stats: {
          Agi: 16,
          Stam: 22,
          Int: 15,
          MAP: 48,
          RAP: 48
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_boots_02"
  },
  31187: {
      name: "Boots of the Pathfinder",
      stats: {
          Int: 23,
          MAP: 18,
          RAP: 18,
          Crit: 19
      },
      Location: "World Drop",
      Phase: 1,
      icon: "inv_boots_chain_11"
  },
  31420: {
      name: "Protector's Boots",
      stats: {
          Agi: 15,
          Int: 10,
          MAP: 52,
          RAP: 52
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_boots_chain_02"
  },
  32366: {
      name: "Shadowmaster's Boots",
      stats: {
          Agi: 30,
          Stam: 38,
          MAP: 76,
          RAP: 76,
          Crit: 17
      },
      Location: "Black Temple",
      sockets: [
          "Red",
          "Yellow"
      ],
      socketBonus: {
          Crit: 3
      },
      Phase: 3,
      icon: "inv_boots_cloth_02"
  },
  32510: {
      name: "Softstep Boots of Tracking",
      stats: {
          Agi: 27,
          Int: 29,
          MAP: 76,
          RAP: 76,
          Crit: 26,
          Hit: 17
      },
      Location: "Black Temple",
      Phase: 3,
      icon: "inv_boots_chain_01"
  },
  32785: {
      name: "Veteran's Chain Sabatons",
      stats: {
          Agi: 30,
          Stam: 45,
          Int: 20,
          MAP: 32,
          RAP: 32,
          Crit: 16,
          Resil: 21
      },
      Location: "Honor Reward",
      Phase: 1,
      icon: "inv_boots_plate_06"
  },
  32790: {
      name: "Veteran's Leather Boots",
      stats: {
          Agi: 30,
          Stam: 45,
          MAP: 34,
          RAP: 34,
          Crit: 16,
          Resil: 30
      },
      Location: "Honor Reward",
      Phase: 1,
      icon: "inv_boots_08"
  },
  33222: {
      name: "Nyn'jah's Tabi Boots",
      stats: {
          Agi: 29,
          Stam: 21,
          MAP: 60,
          RAP: 60,
          Hit: 22
      },
      Location: "Badge Reward",
      sockets: [
          "Blue",
          "Red"
      ],
      socketBonus: {
          Hit: 3
      },
      Phase: 3,
      icon: "inv_boots_07"
  },
  33805: {
      name: "Shadowhunter's Treads",
      stats: {
          Agi: 26,
          Stam: 26,
          Int: 25,
          MAP: 66,
          RAP: 66,
          ArP: 105
      },
      Location: "Zul'Aman",
      Phase: 4,
      icon: "inv_boots_chain_08"
  },
  33878: {
      name: "Vindicator's Chain Sabatons",
      stats: {
          Agi: 33,
          Stam: 48,
          Int: 23,
          MAP: 38,
          RAP: 38,
          Crit: 18,
          Resil: 21
      },
      Location: "Honor Reward",
      Phase: 2,
      icon: "inv_boots_plate_06"
  },
  34570: {
      name: "Gronnstalker's Boots",
      set: 669,
      stats: {
          Agi: 30,
          Stam: 21,
          Int: 21,
          MAP: 86,
          RAP: 86,
          Crit: 21,
          Hit: 14,
          ArP: 140
      },
      Location: "Sunwell",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          Agi: 2
      },
      Phase: 5,
      icon: "inv_boots_chain_08"
  },
  34809: {
      name: "Sunrage Treads",
      stats: {
          Agi: 28,
          Stam: 28,
          MAP: 58,
          RAP: 58,
          ArP: 126
      },
      Location: "Dungeon",
      sockets: [
          "Red"
      ],
      socketBonus: {
          Stam: 3
      },
      Phase: 4,
      icon: "inv_boots_07"
  }
}

const HANDS = {
  22441: {
      name: "Cryptstalker Handguards",
      set: 530,
      stats: {
          Agi: 16,
          Stam: 21,
          Int: 15,
          MAP: 32,
          RAP: 32,
          Crit: 14,
          MP5: 4
      },
      Location: "Naxx",
      Phase: 1,
      icon: "inv_gauntlets_25"
  },
  23491: {
      name: "Fel Iron Chain Gloves",
      set: 561,
      stats: {
          Stam: 24,
          Int: 17,
          MAP: 34,
          RAP: 34
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_gauntlets_11"
  },
  23526: {
      name: "Swiftsteel Gloves",
      stats: {
          MAP: 50,
          RAP: 50,
          MP5: 10
      },
      Location: "Crafting",
      sockets: [
          "Red",
          "Blue"
      ],
      socketBonus: {
          Agi: 3
      },
      Phase: 1,
      icon: "inv_gauntlets_17"
  },
  23531: {
      name: "Felfury Gauntlets",
      stats: {
          Stam: 30,
          MAP: 40,
          RAP: 40,
          Crit: 27
      },
      Location: "Crafting",
      sockets: [
          "Red",
          "Blue"
      ],
      socketBonus: {
          Hit: 3
      },
      Phase: 1,
      icon: "inv_gauntlets_26"
  },
  24090: {
      name: "Bloodstained Ravager Gauntlets",
      stats: {
          Agi: 13,
          Stam: 19,
          Int: 14,
          MAP: 26,
          RAP: 26
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Red"
      ],
      socketBonus: {
          Int: 3
      },
      Phase: 1,
      icon: "inv_gauntlets_10"
  },
  25584: {
      name: "Murkblood Oven Mitts",
      stats: {
          Agi: 16,
          Stam: 24,
          Int: 16,
          MAP: 32,
          RAP: 32
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_gauntlets_26"
  },
  25654: {
      name: "Felscale Gloves",
      set: 661,
      stats: {
          Agi: 19,
          MAP: 40,
          RAP: 40
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_gauntlets_04"
  },
  25685: {
      name: "Fel Leather Gloves",
      stats: {
          MAP: 36,
          RAP: 36,
          Crit: 24,
          Hit: 17
      },
      Location: "Crafting",
      sockets: [
          "Red",
          "Yellow"
      ],
      socketBonus: {
          MAP: 6,
          RAP: 6
      },
      Phase: 1,
      icon: "inv_gauntlets_22"
  },
  25716: {
      name: "Handguards of Precision",
      stats: {
          Agi: 20,
          Stam: 28,
          MAP: 38,
          RAP: 38
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_gauntlets_10"
  },
  27474: {
      name: "Beast Lord Handguards",
      set: 650,
      stats: {
          Agi: 25,
          Stam: 12,
          Int: 17,
          MAP: 34,
          RAP: 34
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Blue"
      ],
      socketBonus: {
          Hit: 3
      },
      Phase: 1,
      icon: "inv_gauntlets_10"
  },
  27509: {
      name: "Handgrips of Assassination",
      stats: {
          Agi: 25,
          Stam: 24,
          MAP: 50,
          RAP: 50,
          Hit: 17
      },
      Location: "Badge Reward",
      Phase: 3,
      icon: "inv_gauntlets_01"
  },
  27528: {
      name: "Gauntlets of Desolation",
      set: 660,
      stats: {
          Stam: 25,
          Int: 16,
          MAP: 32,
          RAP: 32,
          Crit: 17
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Red"
      ],
      socketBonus: {},
      Phase: 1,
      icon: "inv_gauntlets_10"
  },
  27531: {
      name: "Wastewalker Gloves",
      set: 659,
      stats: {
          Agi: 32,
          Stam: 33,
          MAP: 16,
          RAP: 16
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Yellow"
      ],
      socketBonus: {},
      Phase: 1,
      icon: "inv_gauntlets_25"
  },
  27722: {
      name: "Gloves of Marshmanship",
      stats: {
          Agi: 17,
          MAP: 34,
          RAP: 34,
          Hit: 16
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_gauntlets_12"
  },
  27745: {
      name: "Hungarhide Gauntlets",
      stats: {
          Agi: 27,
          Stam: 21,
          Int: 20,
          MAP: 44,
          RAP: 44
      },
      Location: "Dungeon",
      sockets: [],
      socketBonus: {
          Str: null
      },
      Phase: 1,
      icon: "inv_gauntlets_11"
  },
  27825: {
      name: "Predatory Gloves",
      stats: {
          Stam: 16,
          MAP: 48,
          RAP: 48,
          Crit: 21,
          Hit: 19
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_gauntlets_15"
  },
  28335: {
      name: "Gladiator's Chain Gauntlets",
      set: 586,
      special: { multishot_dmg_inc_ratio: 1.05 },
      stats: {
          Agi: 26,
          Stam: 41,
          Int: 10,
          MAP: 26,
          RAP: 26,
          Crit: 14,
          Resil: 18
      },
      Location: "Honor Reward",
      Phase: 1,
      icon: "inv_gauntlets_11"
  },
  28396: {
      name: "Gloves of the Unbound",
      stats: {
          Agi: 27,
          Stam: 20,
          MAP: 38,
          RAP: 38
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Blue"
      ],
      socketBonus: {},
      Phase: 1,
      icon: "inv_gauntlets_22"
  },
  28506: {
      name: "Gloves of Dexterous Manipulation",
      stats: {
          Agi: 35,
          Stam: 22,
          MAP: 42,
          RAP: 42
      },
      Location: "Karazhan",
      sockets: [
          "Red",
          "Blue"
      ],
      socketBonus: {
          Crit: 3
      },
      Phase: 1,
      icon: "inv_gauntlets_28"
  },
  28519: {
      name: "Gloves of Quickening",
      stats: {
          Stam: 22,
          Int: 24,
          MAP: 52,
          RAP: 52,
          Crit: 17,
          MP5: 4
      },
      Location: "Karazhan",
      sockets: [
          "Blue",
          "Red"
      ],
      socketBonus: {
          Agi: 3
      },
      Phase: 1,
      icon: "inv_gauntlets_25"
  },
  28776: {
      name: "Liar's Tongue Gloves",
      stats: {
          Stam: 31,
          MAP: 72,
          RAP: 72,
          Crit: 26
      },
      Location: "Magtheridon's Lair",
      sockets: [
          "Blue",
          "Blue"
      ],
      socketBonus: {
          Crit: 3
      },
      Phase: 1,
      icon: "inv_gauntlets_19"
  },
  28827: {
      name: "Gauntlets of the Dragonslayer",
      stats: {
          Agi: 24,
          Stam: 27,
          Int: 27,
          MAP: 48,
          RAP: 48
      },
      Location: "Gruul's Lair",
      sockets: [
          "Red",
          "Red"
      ],
      socketBonus: {
          Int: 3
      },
      Phase: 1,
      icon: "inv_gauntlets_25"
  },
  29085: {
      name: "Demon Stalker Gauntlets",
      set: 651,
      stats: {
          Agi: 28,
          Stam: 24,
          Int: 24,
          MAP: 58,
          RAP: 58,
          MP5: 6
      },
      Location: "Karazhan",
      Phase: 1,
      icon: "inv_gauntlets_25"
  },
  29511: {
      name: "Netherdrake Gloves",
      stats: {
          Agi: 26,
          Stam: 24,
          Int: 23,
          MAP: 50,
          RAP: 50
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_gauntlets_05"
  },
  29806: {
      name: "Cowpoke's Riding Gloves",
      stats: {
          Stam: 18,
          Int: 16,
          MAP: 42,
          RAP: 42,
          MP5: 6
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_gauntlets_25"
  },
  30140: {
      name: "Rift Stalker Gauntlets",
      set: 652,
      stats: {
          Agi: 34,
          Stam: 29,
          Int: 20,
          MAP: 68,
          RAP: 68,
          Hit: 19
      },
      Location: "Serpentshrine Cavern",
      Phase: 2,
      icon: "inv_gauntlets_25"
  },
  30336: {
      name: "Surger's Hand Wraps",
      stats: {
          Agi: 20,
          Stam: 15,
          Int: 11,
          MAP: 40,
          RAP: 40,
          MP5: 5
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_gauntlets_25"
  },
  30370: {
      name: "Gauntlets of the Redeemed Vindicator",
      stats: {
          Agi: 23,
          Stam: 21,
          Int: 20,
          MAP: 48,
          RAP: 48
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_gauntlets_10"
  },
  30951: {
      name: "Ar'tor's Mainstay",
      stats: {
          Agi: 18,
          Int: 11,
          MAP: 68,
          RAP: 68,
          MP5: 3
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_gauntlets_26"
  },
  31001: {
      name: "Gronnstalker's Gloves",
      set: 669,
      stats: {
          Agi: 35,
          Stam: 31,
          Int: 21,
          MAP: 62,
          RAP: 62,
          Crit: 13,
          ArP: 140
      },
      Location: "Mount Hyjal",
      sockets: [
          "Red"
      ],
      socketBonus: {
          Crit: 2
      },
      Phase: 3,
      icon: "inv_gauntlets_59"
  },
  31454: {
      name: "Scalewing Gloves",
      stats: {
          Agi: 16,
          Int: 16,
          MAP: 32,
          RAP: 32,
          MP5: 6
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_gauntlets_03"
  },
  31796: {
      name: "Shadowed Gauntlets of Paroxysm",
      stats: {
          Agi: 41,
          Stam: 33,
          MAP: 82,
          RAP: 82,
          Haste: 30
      },
      Location: "Sunwell",
      sockets: [
          "Red",
          "Blue"
      ],
      socketBonus: {
          Agi: 3
      },
      Phase: 5,
      icon: "inv_gauntlets_14"
  },
  31961: {
      name: "Merciless Gladiator's Chain Gauntlets",
      set: 706,
      special: { multishot_dmg_inc_ratio: 1.05 },
      stats: {
          Agi: 30,
          Stam: 48,
          Int: 13,
          MAP: 34,
          RAP: 34,
          Crit: 17,
          Resil: 21
      },
      Location: "Arena Reward",
      Phase: 2,
      icon: "inv_gauntlets_11"
  },
  32076: {
      name: "Handguards of the Steady",
      stats: {
          Agi: 29,
          Stam: 22,
          Int: 21,
          MAP: 54,
          RAP: 54
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_gauntlets_31"
  },
  32234: {
      name: "Fists of Mukoa",
      stats: {
          Agi: 25,
          Stam: 24,
          Int: 17,
          MAP: 76,
          RAP: 76,
          Haste: 37
      },
      Location: "Black Temple",
      Phase: 3,
      icon: "inv_gauntlets_59"
  },
  32347: {
      name: "Grips of Damnation",
      stats: {
          Agi: 27,
          Stam: 38,
          MAP: 76,
          RAP: 76,
          Haste: 37
      },
      Location: "Black Temple",
      Phase: 3,
      icon: "inv_gauntlets_65"
  },
  32656: {
      name: "Crystalhide Handwraps",
      stats: {
          Agi: 11,
          Int: 27,
          MAP: 56,
          RAP: 56
      },
      Location: "Reputation Reward",
      sockets: [
          "Red",
          "Red"
      ],
      socketBonus: {
          Int: 3
      },
      Phase: 1,
      icon: "inv_gauntlets_09"
  },
  33528: {
      name: "Gauntlets of Sniping",
      stats: {
          Agi: 20,
          Stam: 27,
          Int: 20,
          MAP: 58,
          RAP: 58,
          Hit: 19
      },
      Location: "Badge Reward",
      sockets: [
          "Yellow",
          "Red"
      ],
      socketBonus: {
          MAP: 6,
          RAP: 6
      },
      Phase: 3,
      icon: "inv_gauntlets_25"
  },
  33539: {
      name: "Trickster's Stickyfingers",
      stats: {
          Agi: 30,
          Stam: 28,
          MAP: 68,
          RAP: 68,
          Haste: 25
      },
      Location: "Badge Reward",
      Phase: 3,
      icon: "inv_gauntlets_50"
  },
  33665: {
      name: "Vengeful Gladiator's Chain Gauntlets",
      set: 723,
      special: { multishot_dmg_inc_ratio: 1.05 },
      stats: {
          Agi: 33,
          Stam: 52,
          Int: 15,
          MAP: 40,
          RAP: 40,
          Crit: 19,
          Resil: 21
      },
      Location: "Arena Reward",
      Phase: 3,
      icon: "inv_gauntlets_59"
  },
  34234: {
      name: "Sha'tari Marksman's Gloves",
      stats: {
          Agi: 20,
          Int: 20,
          MAP: 42,
          RAP: 42,
          MP5: 8
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_gauntlets_28"
  },
  34343: {
      name: "Thalassian Ranger Gauntlets",
      stats: {
          Agi: 40,
          Stam: 43,
          Int: 27,
          MAP: 80,
          RAP: 80,
          Crit: 23,
          ArP: 182
      },
      Location: "Sunwell",
      sockets: [
          "Red",
          "Yellow"
      ],
      socketBonus: {
          Agi: 3
      },
      Phase: 5,
      icon: "inv_gauntlets_51"
  },
  34370: {
      name: "Gloves of Immortal Dusk",
      stats: {
          Agi: 30,
          Stam: 33,
          MAP: 90,
          RAP: 90,
          Crit: 30,
          ArP: 154
      },
      Location: "Crafting",
      sockets: [
          "Red",
          "Red"
      ],
      socketBonus: {
          Crit: 3
      },
      Phase: 5,
      icon: "inv_gauntlets_28"
  },
  34374: {
      name: "Fletcher's Gloves of the Phoenix",
      stats: {
          Agi: 30,
          Stam: 33,
          Int: 25,
          MAP: 76,
          RAP: 76,
          Haste: 34
      },
      Location: "Sunwell",
      sockets: [
          "Yellow",
          "Yellow"
      ],
      socketBonus: {
          MAP: 6,
          RAP: 6
      },
      Phase: 5,
      icon: "inv_gauntlets_59"
  },
  34916: {
      name: "Gauntlets of Rapidity",
      stats: {
          Agi: 34,
          Stam: 30,
          Int: 19,
          MAP: 78,
          RAP: 78,
          Crit: 16
      },
      Location: "Badge Reward",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          Agi: 2
      },
      Phase: 3,
      icon: "inv_gauntlets_25"
  },
  34991: {
      name: "Brutal Gladiator's Chain Gauntlets",
      set: '-7',
      special: { multishot_dmg_inc_ratio: 1.05 },
      stats: {
          Agi: 37,
          Stam: 56,
          Int: 19,
          MAP: 48,
          RAP: 48,
          Crit: 23,
          Resil: 21
      },
      Location: "Arena Reward",
      Phase: 5,
      icon: "inv_gauntlets_65"
  },
  35475: {
      name: "Stalker's Chain Gauntlets",
      set: 749,
      special: { multishot_dmg_inc_ratio: 1.05 },
      stats: {
          Agi: 21,
          Stam: 31,
          Int: 6,
          MAP: 20,
          RAP: 20,
          Crit: 11,
          Resil: 14
      },
      Location: "Reputation Reward",
      Phase: 1,
      icon: "inv_gauntlets_11"
  }
}

const HEADS = {
  22438: {
      name: "Cryptstalker Headpiece",
      set: 530,
      stats: {
          Agi: 21,
          Stam: 30,
          Int: 12,
          MAP: 40,
          RAP: 40,
          Crit: 28,
          MP5: 3
      },
      Location: "Naxx",
      Phase: 1,
      icon: "inv_helmet_15"
  },
  23493: {
      name: "Fel Iron Chain Coif",
      set: 561,
      stats: {
          Stam: 33,
          Int: 21,
          MAP: 42,
          RAP: 42
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_helmet_35"
  },
  23534: {
      name: "Storm Helm",
      stats: {
          Int: 30,
          MAP: 44,
          RAP: 44,
          Crit: 22,
          MP5: 9
      },
      Location: "Crafting",
      sockets: [
          "Red",
          "Blue",
          "Yellow"
      ],
      socketBonus: {
          Stam: 6
      },
      Phase: 1,
      icon: "inv_helmet_29"
  },
  23839: {
      name: "Foreman's Reinforced Helmet",
      stats: {
          Agi: 30,
          Stam: 48,
          MAP: 62,
          RAP: 62
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_helmet_60"
  },
  25506: {
      name: "Vindicator's Chain Helm",
      stats: {
          Agi: 23,
          Stam: 33,
          MAP: 44,
          RAP: 44
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_helmet_08"
  },
  25683: {
      name: "Stylin' Crimson Hat",
      stats: {
          Int: 30,
          MAP: 96,
          RAP: 96
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_helmet_50"
  },
  25930: {
      name: "Cenarion Thicket Helm",
      stats: {
          Stam: 24,
          MAP: 34,
          RAP: 34,
          Hit: 16
      },
      Location: "Quest Reward",
      sockets: [
          "Yellow",
          "Red",
          "Blue"
      ],
      socketBonus: {
          Stam: 6
      },
      Phase: 1,
      icon: "inv_helmet_18"
  },
  25976: {
      name: "Helm of Lupine Grace",
      stats: {
          Agi: 23,
          Stam: 34,
          MAP: 46,
          RAP: 46
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_helmet_15"
  },
  27414: {
      name: "Mok'Nathal Beast-Mask",
      stats: {
          Agi: 23,
          Stam: 22,
          Int: 15,
          MAP: 24,
          RAP: 24
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Red",
          "Yellow"
      ],
      socketBonus: {
          MP5: 2
      },
      Phase: 1,
      icon: "inv_helmet_19"
  },
  27888: {
      name: "Dream-Wing Helm",
      stats: {
          Stam: 16,
          Int: 25,
          MAP: 66,
          RAP: 66,
          Crit: 20,
          Hit: 13,
          MP5: 6
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_helmet_21"
  },
  28181: {
      name: "Earthwarden's Coif",
      stats: {
          Agi: 25,
          Stam: 25,
          Int: 18,
          MAP: 34,
          RAP: 34,
          MP5: 7
      },
      Location: "Quest Reward",
      sockets: [
          "Red",
          "Meta",
      ],
      socketBonus: {
          Agi: 4
      },
      Phase: 1,
      icon: "inv_helmet_38"
  },
  28192: {
      name: "Helm of Desolation",
      set: 660,
      stats: {
          Stam: 21,
          Int: 25,
          MAP: 66,
          RAP: 66,
          Crit: 14
      },
      Location: "Dungeon",
      sockets: [
          "Yellow",
          "Meta",
      ],
      socketBonus: {
          Hit: 4
      },
      Phase: 1,
      icon: "inv_helmet_18"
  },
  28215: {
      name: "Mok'Nathal Mask of Battle",
      stats: {
          Agi: 32,
          Stam: 21,
          Int: 21,
          MAP: 30,
          RAP: 30,
          Hit: 19
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_helmet_72"
  },
  28224: {
      name: "Wastewalker Helm",
      set: 659,
      stats: {
          Stam: 30,
          MAP: 56,
          RAP: 56,
          Crit: 22,
          Hit: 18
      },
      Location: "Dungeon",
      sockets: [
          "Blue",
          "Meta",
      ],
      socketBonus: {
          MAP: 8,
          RAP: 8
      },
      Phase: 1,
      icon: "inv_helmet_15"
  },
  28275: {
      name: "Beast Lord Helm",
      set: 650,
      stats: {
          Agi: 25,
          Stam: 21,
          Int: 22,
          MAP: 50,
          RAP: 50
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Meta",
      ],
      socketBonus: {
          MP5: 2
      },
      Phase: 1,
      icon: "inv_helmet_19"
  },
  28331: {
      name: "Gladiator's Chain Helm",
      set: 586,
      stats: {
          Agi: 34,
          Stam: 49,
          Int: 18,
          MAP: 36,
          RAP: 36,
          Crit: 20,
          Resil: 20
      },
      Location: "Arena Reward",
      sockets: [
          "Meta",
          "Red"
      ],
      socketBonus: {
          Resil: 4
      },
      Phase: 1,
      icon: "inv_helmet_09"
  },
  28414: {
      name: "Helm of Assassination",
      stats: {
          Stam: 23,
          MAP: 66,
          RAP: 66,
          Crit: 25
      },
      Location: "Dungeon",
      sockets: [
          "Yellow",
          "Meta",
      ],
      socketBonus: {},
      Phase: 1,
      icon: "inv_helmet_15"
  },
  28576: {
      name: "Exorcist's Chain Helm",
      stats: {
          Agi: 20,
          Stam: 35,
          Int: 15,
          MAP: 20,
          RAP: 20,
          Crit: 10,
          Resil: 12
      },
      Location: "PvP Reward",
      sockets: [
          "Meta"
      ],
      socketBonus: {
          Agi: 2
      },
      Phase: 1,
      icon: "inv_helmet_09"
  },
  28671: {
      name: "Steelspine Faceguard",
      stats: {
          Agi: 36,
          Stam: 34,
          Int: 34,
          MAP: 62,
          RAP: 62,
          MP5: 9
      },
      Location: "Karazhan",
      Phase: 1,
      icon: "inv_helmet_05"
  },
  28732: {
      name: "Cowl of Defiance",
      stats: {
          Agi: 34,
          Stam: 33,
          MAP: 100,
          RAP: 100,
          Hit: 24
      },
      Location: "Karazhan",
      Phase: 1,
      icon: "inv_helmet_58"
  },
  28796: {
      name: "Malefic Mask of the Shadows",
      stats: {
          Stam: 45,
          MAP: 84,
          RAP: 84,
          Crit: 42,
          Hit: 31
      },
      Location: "Gruul's Lair",
      Phase: 1,
      icon: "inv_helmet_58"
  },
  28801: {
      name: "Maulgar's Warhelm",
      stats: {
          Stam: 43,
          Int: 31,
          MAP: 86,
          RAP: 86,
          Crit: 42
      },
      Location: "Gruul's Lair",
      Phase: 1,
      icon: "inv_helmet_23"
  },
  29081: {
      name: "Demon Stalker Greathelm",
      set: 651,
      stats: {
          Agi: 35,
          Stam: 28,
          Int: 27,
          MAP: 66,
          RAP: 66
      },
      Location: "Karazhan",
      sockets: [
          "Yellow",
          "Meta",
      ],
      socketBonus: {
          Agi: 4
      },
      Phase: 1,
      icon: "inv_helmet_15"
  },
  29502: {
      name: "Cobrascale Hood",
      stats: {
          Agi: 37,
          Stam: 42,
          MAP: 74,
          RAP: 74,
          Hit: 18
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_helmet_38"
  },
  29510: {
      name: "Netherdrake Helm",
      stats: {
          Stam: 16,
          Int: 26,
          MAP: 64,
          RAP: 64,
          Crit: 31,
          MP5: 12
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_helmet_06"
  },
  29782: {
      name: "Coif of the Wicked",
      stats: {
          Agi: 26,
          Stam: 39,
          MAP: 52,
          RAP: 52,
          MP5: 10
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_helmet_03"
  },
  30141: {
      name: "Rift Stalker Helm",
      set: 652,
      stats: {
          Agi: 40,
          Stam: 36,
          Int: 25,
          MAP: 82,
          RAP: 82,
          MP5: 10
      },
      Location: "SerpentShrine Cavern",
      sockets: [
          "Yellow",
          "Meta",
      ],
      socketBonus: {
          Stam: 6
      },
      Phase: 2,
      icon: "inv_helmet_15"
  },
  30329: {
      name: "Flesh Handler's Headpiece",
      stats: {
          Stam: 26,
          Int: 24,
          MAP: 52,
          RAP: 52,
          MP5: 8
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_helmet_35"
  },
  30955: {
      name: "Crown of Cinders",
      stats: {
          Agi: 21,
          Stam: 30,
          Int: 20,
          MAP: 40,
          RAP: 40,
          MP5: 8
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_helmet_08"
  },
  31003: {
      name: "Gronnstalker's Helmet",
      set: 669,
      stats: {
          Agi: 45,
          Stam: 45,
          Int: 29,
          MAP: 90,
          RAP: 90,
          MP5: 8
      },
      Location: "Mount Hyjal",
      sockets: [
          "Red",
          "Meta",
      ],
      socketBonus: {
          Crit: 4
      },
      Phase: 3,
      icon: "inv_helmet_95"
  },
  31106: {
      name: "Stalker's Helmet of Second Sight",
      stats: {
          Agi: 31,
          Stam: 12,
          Int: 8,
          MAP: 60,
          RAP: 60,
          MP5: 4
      },
      Location: "Quest Reward",
      sockets: [
          "Blue",
          "Blue",
          "Blue"
      ],
      socketBonus: {
          MAP: 8,
          RAP: 8
      },
      Phase: 1,
      icon: "inv_helmet_01"
  },
  31222: {
      name: "Headdress of Inner Rage",
      stats: {
          Str: 32,
          Agi: 28,
          Int: 20,
          MP5: 8
      },
      Location: "World Drop",
      Phase: 1,
      icon: "inv_helmet_57"
  },
  31435: {
      name: "Gurn's Horned Helmet",
      stats: {
          Agi: 20,
          Int: 15,
          MAP: 72,
          RAP: 72
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_helmet_08"
  },
  31487: {
      name: "Wild Horned Helm",
      stats: {
          Agi: 20,
          Int: 14,
          MAP: 70,
          RAP: 70
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_helmet_08"
  },
  31547: {
      name: "Malefactor's Eyepatch",
      stats: {
          Agi: 30,
          Stam: 24,
          Int: 18,
          MAP: 60,
          RAP: 60,
          MP5: 7
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_helmet_45"
  },
  31962: {
      name: "Merciless Gladiator's Chain Helm",
      set: 706,
      stats: {
          Agi: 37,
          Stam: 55,
          Int: 19,
          MAP: 50,
          RAP: 50,
          Crit: 22,
          Resil: 22
      },
      Location: "Arena Reward",
      sockets: [
          "Meta",
          "Red"
      ],
      socketBonus: {
          Resil: 4
      },
      Phase: 2,
      icon: "inv_helmet_09"
  },
  32085: {
      name: "Warpstalker Helm",
      stats: {
          Agi: 24,
          Stam: 36,
          Int: 32,
          MAP: 48,
          RAP: 48
      },
      Location: "Badge Reward",
      sockets: [
          "Red",
          "Meta",
      ],
      socketBonus: {},
      Phase: 3,
      icon: "inv_helmet_72"
  },
  32087: {
      name: "Mask of the Deceiver",
      stats: {
          Agi: 32,
          Stam: 36,
          MAP: 64,
          RAP: 64,
          Hit: 16
      },
      Location: "Badge Reward",
      sockets: [
          "Yellow",
          "Meta",
      ],
      socketBonus: {},
      Phase: 1,
      icon: "inv_helmet_73"
  },
  32235: {
      name: "Cursed Vision of Sargeras",
      stats: {
          Agi: 39,
          Stam: 46,
          MAP: 108,
          RAP: 108,
          Crit: 38,
          Hit: 21
      },
      Location: "Black Temple",
      sockets: [
          "Meta",
          "Yellow"
      ],
      socketBonus: {
          Stam: 6
      },
      Phase: 3,
      icon: "inv_misc_bandana_03"
  },
  32376: {
      name: "Forest Prowler's Helm",
      stats: {
          Agi: 42,
          Stam: 29,
          Int: 28,
          MAP: 100,
          RAP: 100,
          Crit: 20
      },
      Location: "Black Temple",
      sockets: [
          "Red",
          "Meta",
      ],
      socketBonus: {
          MP5: 2
      },
      Phase: 3,
      icon: "inv_helmet_95"
  },
  32474: {
      name: "Surestrike Goggles v2.0",
      stats: {
          Stam: 28,
          MAP: 96,
          RAP: 96,
          Crit: 38,
          Hit: 13
      },
      Location: "Crafting",
      sockets: [
          "Meta",
          "Blue"
      ],
      socketBonus: {
          Agi: 4
      },
      Phase: 2,
      icon: "inv_gizmo_newgoggles"
  },
  33432: {
      name: "Coif of the Jungle Stalker",
      stats: {
          Agi: 36,
          Stam: 40,
          Int: 35,
          MAP: 72,
          RAP: 72,
          ArP: 140
      },
      Location: "Zul'Aman",
      sockets: [
          "Red",
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          MAP: 8,
          RAP: 8
      },
      Phase: 4,
      icon: "inv_helmet_113"
  },
  33479: {
      name: "Grimgrin Faceguard",
      stats: {
          Agi: 40,
          Stam: 48,
          MAP: 82,
          RAP: 82,
          Hit: 24
      },
      Location: "Zul'Aman",
      sockets: [
          "Red",
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          MAP: 8,
          RAP: 8
      },
      Phase: 4,
      icon: "inv_helmet_116"
  },
  33666: {
      name: "Vengeful Gladiator's Chain Helm",
      set: 723,
      stats: {
          Agi: 33,
          Stam: 61,
          Int: 22,
          MAP: 58,
          RAP: 58,
          Crit: 26,
          Hit: 12,
          Resil: 22,
          ArP: 84
      },
      Location: "Arena Reward",
      sockets: [
          "Meta",
          "Red"
      ],
      socketBonus: {
          Resil: 4
      },
      Phase: 3,
      icon: "inv_helmet_95"
  },
  34244: {
      name: "Duplicitous Guise",
      stats: {
          Agi: 43,
          Stam: 57,
          MAP: 126,
          RAP: 126,
          Hit: 30,
          Haste: 34
      },
      Location: "Sunwell",
      sockets: [
          "Meta",
          "Red"
      ],
      socketBonus: {
          Hit: 4
      },
      Phase: 5,
      icon: "inv_helmet_126"
  },
  34333: {
      name: "Coif of Alleria",
      stats: {
          Agi: 43,
          Stam: 45,
          Int: 25,
          MAP: 126,
          RAP: 126,
          Crit: 34,
          ArP: 182
      },
      Location: "Sunwell",
      sockets: [
          "Red",
          "Meta",
      ],
      socketBonus: {
          Agi: 4
      },
      Phase: 5,
      icon: "inv_helmet128"
  },
  34356: {
      name: "Surestrike Goggles v3.0",
      stats: {
          Stam: 47,
          MAP: 124,
          RAP: 124,
          Crit: 51,
          Hit: 26
      },
      Location: "Crafting",
      sockets: [
          "Meta",
          "Blue"
      ],
      socketBonus: {
          Agi: 4
      },
      Phase: 5,
      icon: "inv_gizmo_newgoggles"
  },
  34992: {
      name: "Brutal Gladiator's Chain Helm",
      set: '-7',
      stats: {
          Agi: 37,
          Stam: 67,
          Int: 27,
          MAP: 66,
          RAP: 66,
          Crit: 30,
          Hit: 17,
          Resil: 22,
          ArP: 84
      },
      Location: "Arena Reward",
      sockets: [
          "Meta",
          "Red"
      ],
      socketBonus: {
          Resil: 4
      },
      Phase: 5,
      icon: "inv_helmet128"
  },
  35378: {
      name: "Stalker's Chain Helm",
      set: 749,
      stats: {
          Agi: 20,
          Stam: 30,
          Int: 14,
          MAP: 28,
          RAP: 28,
          Crit: 14,
          Resil: 15
      },
      Location: "Reputation Reward",
      sockets: [
          "Meta",
          "Red"
      ],
      socketBonus: {
          Resil: 4
      },
      Phase: 1,
      icon: "inv_helmet_09"
  }
}

const LEGS = {
  22437: {
      name: "Cryptstalker Legguards",
      set: 530,
      stats: {
          Agi: 28,
          Stam: 26,
          Int: 10,
          MAP: 56,
          RAP: 56,
          Crit: 14,
          MP5: 6
      },
      Location: "Naxx",
      Phase: 1,
      icon: "inv_pants_mail_15"
  },
  24022: {
      name: "Scale Leggings of the Skirmisher",
      stats: {
          Agi: 22,
          Stam: 24,
          Int: 15,
          MAP: 32,
          RAP: 32,
          MP5: 2
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Blue",
          "Yellow"
      ],
      socketBonus: {
          MP5: 2
      },
      Phase: 1,
      icon: "inv_pants_leather_15"
  },
  25656: {
      name: "Felscale Pants",
      set: 661,
      stats: {
          Agi: 31,
          MAP: 60,
          RAP: 60
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_pants_mail_08"
  },
  25687: {
      name: "Fel Leather Leggings",
      stats: {
          MAP: 52,
          RAP: 52,
          Crit: 25,
          Hit: 25
      },
      Location: "Crafting",
      sockets: [
          "Red",
          "Yellow",
          "Yellow"
      ],
      socketBonus: {
          MAP: 8,
          RAP: 8
      },
      Phase: 1,
      icon: "inv_pants_leather_03"
  },
  25782: {
      name: "Sunstrider Legguards",
      stats: {
          Agi: 22,
          MAP: 44,
          RAP: 44,
          Hit: 23
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_pants_mail_04"
  },
  27430: {
      name: "Scaled Greaves of Patience",
      stats: {
          Agi: 28,
          Stam: 24,
          Int: 13,
          MAP: 46,
          RAP: 46,
          MP5: 4
      },
      Location: "Dungeon",
      sockets: [
          "Yellow",
          "Red",
          "Blue"
      ],
      socketBonus: {},
      Phase: 1,
      icon: "inv_pants_plate_21"
  },
  27545: {
      name: "Mennu's Scaled Leggings",
      stats: {
          Stam: 25,
          MAP: 46,
          RAP: 46,
          Crit: 32
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Red",
          "Red"
      ],
      socketBonus: {},
      Phase: 1,
      icon: "inv_pants_mail_05"
  },
  27647: {
      name: "Marksman's Legguards",
      stats: {
          Agi: 25,
          Stam: 39,
          Int: 13,
          MAP: 22,
          RAP: 22,
          Crit: 11,
          Resil: 13
      },
      Location: "PvP Reward",
      sockets: [
          "Yellow"
      ],
      socketBonus: {},
      Phase: 1,
      icon: "inv_pants_mail_04"
  },
  27650: {
      name: "Shadowstalker's Leggings",
      stats: {
          Agi: 23,
          Stam: 33,
          MAP: 30,
          RAP: 30,
          Crit: 15,
          Resil: 17
      },
      Location: "PvP Reward",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          Resil: 2
      },
      Phase: 1,
      icon: "inv_pants_leather_03"
  },
  27717: {
      name: "Expedition Forager Leggings",
      stats: {
          Agi: 12,
          Stam: 18,
          Int: 12,
          MAP: 36,
          RAP: 36
      },
      Location: "Quest Reward",
      sockets: [
          "Red",
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          Crit: 4
      },
      Phase: 1,
      icon: "inv_pants_03"
  },
  27773: {
      name: "Barbaric Legstraps",
      stats: {
          Agi: 25,
          Stam: 13,
          Int: 17,
          MAP: 56,
          RAP: 56,
          MP5: 7
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Red",
          "Blue"
      ],
      socketBonus: {
          Int: 4
      },
      Phase: 1,
      icon: "inv_pants_leather_06"
  },
  27837: {
      name: "Wastewalker Leggings",
      set: 659,
      stats: {
          Agi: 31,
          Stam: 27,
          MAP: 28,
          RAP: 28,
          Hit: 19
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Red",
          "Blue"
      ],
      socketBonus: {
          Resil: 4
      },
      Phase: 1,
      icon: "inv_pants_mail_04"
  },
  27874: {
      name: "Beast Lord Leggings",
      set: 650,
      stats: {
          Agi: 30,
          Stam: 25,
          Int: 19,
          MAP: 52,
          RAP: 52,
          MP5: 7
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_pants_03"
  },
  27908: {
      name: "Leggings of Assassination",
      stats: {
          Agi: 40,
          Stam: 33,
          MAP: 44,
          RAP: 44,
          Hit: 22
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_pants_leather_03"
  },
  27936: {
      name: "Greaves of Desolation",
      set: 660,
      stats: {
          Stam: 24,
          Int: 33,
          MAP: 66,
          RAP: 66,
          Crit: 22,
          Hit: 12
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_pants_cloth_20"
  },
  28173: {
      name: "Mag'hari Huntsman's Leggings",
      stats: {
          Agi: 16,
          Stam: 18,
          Int: 12,
          MAP: 86,
          RAP: 86,
          Hit: 15
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_pants_mail_09"
  },
  28219: {
      name: "Emerald-Scale Greaves",
      stats: {
          Agi: 28,
          Int: 20,
          MAP: 56,
          RAP: 56,
          MP5: 5
      },
      Location: "Dungeon",
      sockets: [
          "Blue",
          "Blue",
          "Yellow"
      ],
      socketBonus: {
          MAP: 8,
          RAP: 8
      },
      Phase: 1,
      icon: "inv_pants_mail_16"
  },
  28332: {
      name: "Gladiator's Chain Leggings",
      set: 586,
      stats: {
          Agi: 35,
          Stam: 53,
          Int: 14,
          MAP: 38,
          RAP: 38,
          Crit: 19,
          Resil: 31
      },
      Location: "Honor Reward",
      Phase: 1,
      icon: "inv_pants_mail_15"
  },
  28740: {
      name: "Rip-Flayer Leggings",
      stats: {
          Stam: 18,
          Int: 30,
          MAP: 56,
          RAP: 56,
          Crit: 28,
          MP5: 8
      },
      Location: "Karazhan",
      sockets: [
          "Red",
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          Stam: 6
      },
      Phase: 1,
      icon: "inv_pants_plate_02"
  },
  28741: {
      name: "Skulker's Greaves",
      stats: {
          Agi: 32,
          Stam: 28,
          MAP: 64,
          RAP: 64,
          Hit: 28
      },
      Location: "Karazhan",
      sockets: [
          "Red",
          "Red",
          "Blue"
      ],
      socketBonus: {},
      Phase: 1,
      icon: "inv_pants_leather_13"
  },
  29083: {
      name: "Demon Stalker Greaves",
      set: 651,
      stats: {
          Agi: 40,
          Stam: 30,
          Int: 30,
          MAP: 82,
          RAP: 82,
          Hit: 15
      },
      Location: "Gruul's Lair",
      Phase: 1,
      icon: "inv_pants_mail_15"
  },
  29116: {
      name: "Nomad's Leggings",
      stats: {
          Agi: 33,
          Stam: 49,
          MAP: 66,
          RAP: 66
      },
      Location: "Reputation Reward",
      Phase: 1,
      icon: "inv_pants_02"
  },
  29788: {
      name: "Finely Wrought Scale Leggings",
      stats: {
          Stam: 24,
          Int: 21,
          MAP: 76,
          RAP: 76
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_pants_02"
  },
  29942: {
      name: "Battle Scarred Leggings",
      stats: {
          Agi: 19,
          Stam: 30,
          MAP: 38,
          RAP: 38
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_pants_mail_01"
  },
  29968: {
      name: "Nether Leggings",
      stats: {
          Agi: 28,
          MAP: 58,
          RAP: 58,
          Hit: 17
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_pants_03"
  },
  29985: {
      name: "Void Reaver Greaves",
      stats: {
          Agi: 37,
          Stam: 33,
          Int: 24,
          MAP: 88,
          RAP: 88
      },
      Location: "The Eye",
      sockets: [
          "Red",
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          Agi: 4
      },
      Phase: 2,
      icon: "inv_pants_mail_15"
  },
  29995: {
      name: "Leggings of Murderous Intent",
      stats: {
          Agi: 45,
          Stam: 31,
          MAP: 92,
          RAP: 92,
          Crit: 37
      },
      Location: "The Eye",
      Phase: 2,
      icon: "inv_pants_leather_03"
  },
  30142: {
      name: "Rift Stalker Leggings",
      set: 652,
      stats: {
          Agi: 40,
          Stam: 39,
          Int: 26,
          MAP: 92,
          RAP: 92,
          Hit: 18,
          MP5: 7
      },
      Location: "Serpentshrine Cavern",
      sockets: [
          "Red"
      ],
      socketBonus: {
          Crit: 2
      },
      Phase: 2,
      icon: "inv_pants_mail_15"
  },
  30534: {
      name: "Wyrmscale Greaves",
      stats: {
          Int: 32,
          MAP: 64,
          RAP: 64,
          Crit: 26,
          MP5: 6
      },
      Location: "Dungeon",
      sockets: [
          "Blue",
          "Blue",
          "Yellow"
      ],
      socketBonus: {
          MAP: 8,
          RAP: 8
      },
      Phase: 1,
      icon: "inv_pants_mail_16"
  },
  30538: {
      name: "Midnight Legguards",
      stats: {
          Stam: 30,
          MAP: 64,
          RAP: 64,
          Crit: 27,
          Hit: 17
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Red",
          "Blue"
      ],
      socketBonus: {
          Hit: 4
      },
      Phase: 1,
      icon: "inv_pants_leather_09"
  },
  30739: {
      name: "Scaled Greaves of the Marksman",
      stats: {
          Agi: 37,
          MAP: 76,
          RAP: 76,
          Hit: 16
      },
      Location: "World Boss",
      sockets: [
          "Red",
          "Red",
          "Red"
      ],
      socketBonus: {
          Agi: 4
      },
      Phase: 1,
      icon: "inv_pants_mail_11"
  },
  30898: {
      name: "Shady Dealer's Pantaloons",
      stats: {
          Agi: 50,
          Stam: 61,
          MAP: 102,
          RAP: 102,
          ArP: 175
      },
      Location: "Mount Hyjal",
      Phase: 3,
      icon: "inv_pants_leather_25"
  },
  30900: {
      name: "Bow-stitched Leggings",
      stats: {
          Agi: 42,
          Stam: 28,
          Int: 28,
          MAP: 100,
          RAP: 100,
          Crit: 20
      },
      Location: "Mount Hyjal",
      sockets: [
          "Red",
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          Crit: 4
      },
      Phase: 3,
      icon: "inv_pants_mail_15"
  },
  30948: {
      name: "Sunfury Legguards",
      stats: {
          Agi: 25,
          Int: 12,
          MAP: 90,
          RAP: 90,
          MP5: 5
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_pants_plate_21"
  },
  31005: {
      name: "Gronnstalker's Leggings",
      set: 669,
      stats: {
          Agi: 37,
          Stam: 43,
          Int: 28,
          MAP: 106,
          RAP: 106,
          Crit: 19,
          MP5: 11
      },
      Location: "Black Temple",
      sockets: [
          "Red"
      ],
      socketBonus: {
          Agi: 2
      },
      Phase: 3,
      icon: "inv_pants_mail_24"
  },
  31240: {
      name: "Scales of the Beast",
      stats: {
          Agi: 30,
          Stam: 22,
          Int: 23,
          MAP: 60,
          RAP: 60
      },
      Location: "World Drop",
      Phase: 1,
      icon: "inv_pants_mail_03"
  },
  31328: {
      name: "Leggings of Beast Mastery",
      stats: {
          Agi: 30,
          Stam: 45
      },
      Location: "World Drop",
      Phase: 1,
      icon: "inv_pants_mail_16"
  },
  31685: {
      name: "Brood Mother Leggings",
      stats: {
          Int: 10,
          MAP: 42,
          RAP: 42,
          Crit: 37,
          MP5: 4
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_pants_mail_15"
  },
  31689: {
      name: "Mok'Nathal Hero's Pantaloons",
      stats: {
          Int: 10,
          MAP: 42,
          RAP: 42,
          Crit: 37,
          MP5: 4
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_pants_mail_01"
  },
  31963: {
      name: "Merciless Gladiator's Chain Leggings",
      set: 706,
      stats: {
          Agi: 38,
          Stam: 58,
          Int: 15,
          MAP: 52,
          RAP: 52,
          Crit: 21,
          Resil: 33
      },
      Location: "Arena Reward",
      Phase: 2,
      icon: "inv_pants_mail_15"
  },
  33527: {
      name: "Shifting Camouflage Pants",
      stats: {
          Agi: 34,
          Stam: 45,
          Int: 30,
          MAP: 90,
          RAP: 90,
          ArP: 175
      },
      Location: "Badge Reward",
      Phase: 3,
      icon: "inv_pants_leather_23"
  },
  33538: {
      name: "Shallow-grave Trousers",
      stats: {
          Agi: 45,
          Stam: 46,
          MAP: 92,
          RAP: 92,
          Haste: 30
      },
      Location: "Badge Reward",
      Phase: 4,
      icon: "inv_pants_leather_09"
  },
  33667: {
      name: "Vengeful Gladiator's Chain Leggings",
      set: 723,
      stats: {
          Agi: 34,
          Stam: 64,
          Int: 18,
          MAP: 60,
          RAP: 60,
          Crit: 25,
          Hit: 12,
          Resil: 33,
          ArP: 84
      },
      Location: "Arena Reward",
      Phase: 3,
      icon: "inv_pants_mail_24"
  },
  34168: {
      name: "Starstalker Legguards",
      stats: {
          Agi: 57,
          Stam: 49,
          Int: 24,
          MAP: 120,
          RAP: 120,
          Hit: 20
      },
      Location: "Sunwell",
      sockets: [
          "Yellow",
          "Blue",
          "Blue"
      ],
      socketBonus: {
          MAP: 8,
          RAP: 8
      },
      Phase: 5,
      icon: "inv_pants_mail_16"
  },
  34188: {
      name: "Leggings of the Immortal Night",
      stats: {
          Agi: 41,
          Stam: 48,
          MAP: 124,
          RAP: 124,
          Hit: 32,
          ArP: 224
      },
      Location: "Sunwell",
      sockets: [
          "Red",
          "Red",
          "Red"
      ],
      socketBonus: {
          Agi: 4
      },
      Phase: 5,
      icon: "inv_pants_leather_27"
  },
  34701: {
      name: "Leggings of the Betrayed",
      stats: {
          Agi: 26,
          Stam: 25,
          MAP: 66,
          RAP: 66,
          Haste: 18
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          Haste: 4
      },
      Phase: 5,
      icon: "inv_pants_06"
  },
  34914: {
      name: "Leggings of the Pursuit",
      stats: {
          Agi: 44,
          Stam: 36,
          Int: 30,
          MAP: 104,
          RAP: 104,
          Hit: 15
      },
      Location: "Badge Reward",
      sockets: [
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          Agi: 3
      },
      Phase: 3,
      icon: "inv_pants_mail_05"
  },
  34928: {
      name: "Trousers of the Scryers' Retainer",
      stats: {
          Agi: 43,
          Stam: 45,
          MAP: 104,
          RAP: 104,
          Hit: 30
      },
      Location: "Badge Reward",
      sockets: [
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          Hit: 3
      },
      Phase: 5,
      icon: "inv_pants_leather_03"
  },
  34993: {
      name: "Brutal Gladiator's Chain Leggings",
      set: '-7',
      stats: {
          Agi: 38,
          Stam: 70,
          Int: 23,
          MAP: 68,
          RAP: 68,
          Crit: 29,
          Hit: 17,
          Resil: 33,
          ArP: 84
      },
      Location: "Arena Reward",
      Phase: 5,
      icon: "inv_pants_mail_20"
  },
  35379: {
      name: "Stalker's Chain Leggings",
      set: 749,
      stats: {
          Agi: 28,
          Stam: 42,
          Int: 8,
          MAP: 28,
          RAP: 28,
          Crit: 14,
          Resil: 25
      },
      Location: "Reputation Reward",
      Phase: 1,
      icon: "inv_pants_mail_15"
  }
}

const MELEE_WEAPONS = {
  23039: {
      name: "The Eye of Nerub",
      stats: {
          Agi: 30,
          Stam: 22,
          MAP: 60,
          RAP: 60,
          Hit: 16
      },
      Location: "Naxx",
      type: 4,
      speed: 2.3,
      mindmg: 132,
      maxdmg: 199,
      hand: "Two",
      Phase: 1,
      icon: "inv_weapon_halberd_04"
  },
  23499: {
      name: "Fel Iron Greatsword",
      stats: {
          MAP: 62,
          RAP: 62,
          Crit: 30
      },
      Location: "Crafting",
      type: 2,
      speed: 3.2,
      mindmg: 172,
      maxdmg: 259,
      hand: "Two",
      Phase: 1,
      icon: "inv_sword_26"
  },
  23503: {
      name: "Adamantite Cleaver",
      stats: {
          Agi: 25,
          Stam: 39,
          MAP: 52,
          RAP: 52
      },
      Location: "Crafting",
      type: 3,
      speed: 3.5,
      mindmg: 203,
      maxdmg: 305,
      hand: "Two",
      Phase: 1,
      icon: "inv_axe_09"
  },
  23504: {
      name: "Adamantite Dagger",
      stats: {
          Crit: 10,
          Hit: 15
      },
      Location: "Crafting",
      type: 1,
      speed: 1.9,
      mindmg: 74,
      maxdmg: 138,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_12"
  },
  23540: {
      name: "Felsteel Longblade",
      stats: {
          Agi: 25,
          Stam: 14
      },
      Location: "Crafting",
      type: 2,
      speed: 2.2,
      mindmg: 128,
      maxdmg: 239,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_59"
  },
  23542: {
      name: "Fel Edged Battleaxe",
      stats: {
          Crit: 21,
          Hit: 14
      },
      Location: "Crafting",
      sockets: [
          "Red"
      ],
      socketBonus: {
          Stam: 3
      },
      type: 3,
      speed: 2.2,
      mindmg: 128,
      maxdmg: 239,
      hand: "One",
      Phase: 1,
      icon: "inv_axe_15"
  },
  23543: {
      name: "Felsteel Reaper",
      stats: {
          MAP: 112,
          RAP: 112,
          Crit: 30
      },
      Location: "Crafting",
      type: 2,
      speed: 3.4,
      mindmg: 295,
      maxdmg: 443,
      hand: "Two",
      Phase: 1,
      icon: "inv_axe_02"
  },
  23555: {
      name: "Dirge",
      stats: {
          MAP: 36,
          RAP: 36,
          Crit: 20
      },
      Location: "Crafting",
      type: 1,
      speed: 1.4,
      mindmg: 81,
      maxdmg: 152,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_05"
  },
  24020: {
      name: "Shadowrend Longblade",
      stats: {
          Stam: 12,
          MAP: 22,
          RAP: 22,
          Crit: 12
      },
      Location: "Dungeon",
      type: 2,
      speed: 2.6,
      mindmg: 96,
      maxdmg: 179,
      hand: "Main",
      Phase: 1,
      icon: "inv_sword_63"
  },
  24356: {
      name: "Wastewalker Shiv",
      stats: {
          Stam: 12,
          MAP: 28,
          RAP: 28,
          Hit: 12
      },
      Location: "Dungeon",
      type: 1,
      speed: 1.8,
      mindmg: 69,
      maxdmg: 130,
      hand: "Main",
      Phase: 1,
      icon: "inv_weapon_shortblade_33"
  },
  24394: {
      name: "Warsong Howling Axe",
      stats: {
          Stam: 37,
          MAP: 80,
          RAP: 80
      },
      Location: "Dungeon",
      type: 3,
      speed: 3.1,
      mindmg: 174,
      maxdmg: 262,
      hand: "Two",
      Phase: 1,
      icon: "inv_axe_61"
  },
  24464: {
      name: "The Stalker's Fangs",
      stats: {
          Stam: 16,
          MAP: 20,
          RAP: 20,
          Crit: 15
      },
      Location: "Dungeon",
      type: 1,
      speed: 1.8,
      mindmg: 71,
      maxdmg: 133,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_53"
  },
  25495: {
      name: "Wolfrider's Dagger",
      stats: {
          Stam: 13,
          MAP: 18,
          RAP: 18,
          Crit: 10
      },
      Location: "Quest Reward",
      type: 1,
      speed: 1.8,
      mindmg: 61,
      maxdmg: 115,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_03"
  },
  25538: {
      name: "Sporeling Claw",
      stats: {
          Stam: 18,
          MAP: 24,
          RAP: 24,
          Hit: 12
      },
      Location: "Quest Reward",
      type: 5,
      speed: 2.5,
      mindmg: 99,
      maxdmg: 184,
      hand: "One",
      Phase: 1,
      icon: "inv_gauntlets_11"
  },
  25545: {
      name: "Talbuk Dirk",
      stats: {
          MAP: 20,
          RAP: 20,
          Hit: 11
      },
      Location: "Quest Reward",
      type: 1,
      speed: 1.8,
      mindmg: 70,
      maxdmg: 131,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_03"
  },
  25763: {
      name: "Ceremonial Warmaul Blood-blade",
      stats: {
          Agi: 13,
          Stam: 19,
          MAP: 26,
          RAP: 26
      },
      Location: "Quest Reward",
      type: 1,
      speed: 1.7,
      mindmg: 74,
      maxdmg: 139,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_05"
  },
  25823: {
      name: "Gladiator's Slicer",
      stats: {
          Stam: 21,
          MAP: 28,
          RAP: 28,
          Crit: 15,
          Hit: 9,
          Resil: 10
      },
      Location: "Honor Reward",
      type: 2,
      speed: 2.6,
      mindmg: 189,
      maxdmg: 285,
      hand: "One",
      Phase: 1,
      icon: "inv_axe_11"
  },
  25825: {
      name: "Footman's Longsword",
      stats: {
          Stam: 16,
          MAP: 22,
          RAP: 22,
          Hit: 11
      },
      Location: "Reputation Reward",
      type: 2,
      speed: 2.1,
      mindmg: 77,
      maxdmg: 145,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_20"
  },
  25916: {
      name: "Terokkar Axe",
      stats: {
          Stam: 13,
          MAP: 20,
          RAP: 20,
          Crit: 10
      },
      Location: "Quest Reward",
      type: 3,
      speed: 2.6,
      mindmg: 90,
      maxdmg: 169,
      hand: "One",
      Phase: 1,
      icon: "inv_axe_03"
  },
  25918: {
      name: "Blood-Guided Knife",
      stats: {
          Stam: 15,
          Hit: 10
      },
      Location: "Quest Reward",
      type: 1,
      speed: 1.3,
      mindmg: 45,
      maxdmg: 84,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_15"
  },
  25943: {
      name: "Creepjacker",
      stats: {
          Stam: 13,
          MAP: 28,
          RAP: 28,
          Crit: 13
      },
      Location: "Dungeon",
      type: 5,
      speed: 2.6,
      mindmg: 106,
      maxdmg: 197,
      hand: "Main",
      Phase: 1,
      icon: "inv_weapon_shortblade_16"
  },
  25952: {
      name: "Scimitar of the Nexus-Stalkers",
      stats: {
          Agi: 14,
          Stam: 16,
          Hit: 12
      },
      Location: "Dungeon",
      type: 2,
      speed: 1.5,
      mindmg: 61,
      maxdmg: 114,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_09"
  },
  27424: {
      name: "Amani Venom-Axe",
      stats: {
          Stam: 15,
          MAP: 26,
          RAP: 26,
          Crit: 15
      },
      Location: "Dungeon",
      type: 3,
      speed: 2.3,
      mindmg: 101,
      maxdmg: 188,
      hand: "One",
      Phase: 1,
      icon: "inv_axe_15"
  },
  27673: {
      name: "Phosphorescent Blade",
      stats: {
          Stam: 12,
          MAP: 40,
          RAP: 40,
          Crit: 11
      },
      Location: "Dungeon",
      type: 2,
      speed: 2.4,
      mindmg: 120,
      maxdmg: 224,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_27"
  },
  27751: {
      name: "Survivalist's Pike",
      stats: {
          Agi: 21,
          Stam: 30,
          Int: 20,
          MAP: 40,
          RAP: 40
      },
      Location: "Quest Reward",
      type: 4,
      speed: 3.2,
      mindmg: 172,
      maxdmg: 259,
      hand: "Two",
      Phase: 1,
      icon: "inv_spear_02"
  },
  27754: {
      name: "Hungering Spineripper",
      stats: {
          Stam: 13,
          MAP: 30,
          RAP: 30,
          Hit: 16
      },
      Location: "Dungeon",
      type: 1,
      speed: 1.8,
      mindmg: 103,
      maxdmg: 155,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_36"
  },
  27756: {
      name: "Marshfang Blade Axe",
      stats: {
          Agi: 12,
          MAP: 24,
          RAP: 24
      },
      Location: "Quest Reward",
      type: 3,
      speed: 1.5,
      mindmg: 51,
      maxdmg: 96,
      hand: "One",
      Phase: 1,
      icon: "inv_axe_14"
  },
  27767: {
      name: "Bogreaver",
      stats: {
          Stam: 15,
          MAP: 28,
          RAP: 28,
          Crit: 18
      },
      Location: "Dungeon",
      type: 3,
      speed: 1.7,
      mindmg: 85,
      maxdmg: 159,
      hand: "One",
      Phase: 1,
      icon: "inv_axe_55"
  },
  27846: {
      name: "Claw of the Watcher",
      stats: {
          MAP: 24,
          RAP: 24,
          Crit: 12
      },
      Location: "Dungeon",
      sockets: [
          "Blue",
          "Red"
      ],
      socketBonus: {
          Crit: 3
      },
      type: 5,
      speed: 2.5,
      mindmg: 125,
      maxdmg: 233,
      hand: "Main",
      Phase: 1,
      icon: "inv_weapon_hand_07"
  },
  27903: {
      name: "Sonic Spear",
      stats: {
          Agi: 35,
          Stam: 30,
          MAP: 62,
          RAP: 62,
          Hit: 24
      },
      Location: "Dungeon",
      type: 4,
      speed: 3.5,
      mindmg: 261,
      maxdmg: 392,
      hand: "Two",
      Phase: 1,
      icon: "inv_spear_08"
  },
  28189: {
      name: "Latro's Shifting Sword",
      stats: {
          Agi: 15,
          MAP: 26,
          RAP: 26
      },
      Location: "Dungeon",
      type: 2,
      speed: 1.4,
      mindmg: 70,
      maxdmg: 131,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_76"
  },
  28222: {
      name: "Reaver of the Infinites",
      stats: {
          Stam: 22,
          MAP: 50,
          RAP: 50,
          Resil: 27
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Blue",
          "Yellow"
      ],
      socketBonus: {
          Resil: 4
      },
      type: 3,
      speed: 3.6,
      mindmg: 268,
      maxdmg: 403,
      hand: "Two",
      Phase: 1,
      icon: "inv_axe_71"
  },
  28226: {
      name: "Timeslicer",
      stats: {
          Stam: 13,
          MAP: 30,
          RAP: 30
      },
      Location: "Dungeon",
      type: 1,
      speed: 1.4,
      mindmg: 80,
      maxdmg: 121,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_51"
  },
  28263: {
      name: "Stellaris",
      stats: {
          Agi: 21,
          Stam: 12,
          MAP: 22,
          RAP: 22
      },
      Location: "Dungeon",
      type: 3,
      speed: 1.9,
      mindmg: 95,
      maxdmg: 177,
      hand: "One",
      Phase: 1,
      icon: "inv_axe_63"
  },
  28267: {
      name: "Edge of the Cosmos",
      stats: {
          Stam: 13,
          MAP: 30,
          RAP: 30,
          Crit: 16
      },
      Location: "Dungeon",
      type: 2,
      speed: 2.6,
      mindmg: 130,
      maxdmg: 243,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_77"
  },
  28295: {
      name: "Gladiator's Shanker",
      stats: {
          Stam: 21,
          MAP: 28,
          RAP: 28,
          Crit: 15,
          Hit: 9,
          Resil: 10
      },
      Location: "Honor Reward",
      type: 1,
      speed: 1.8,
      mindmg: 131,
      maxdmg: 197,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_71"
  },
  28298: {
      name: "Gladiator's Decapitator",
      stats: {
          Stam: 48,
          MAP: 64,
          RAP: 64,
          Crit: 35,
          Hit: 20,
          Resil: 28
      },
      Location: "Honor Reward",
      type: 3,
      speed: 3.6,
      mindmg: 341,
      maxdmg: 513,
      hand: "Two",
      Phase: 1,
      icon: "inv_axe_68"
  },
  28300: {
      name: "Gladiator's Painsaw",
      stats: {
          Stam: 48,
          MAP: 70,
          RAP: 70,
          Crit: 35,
          Resil: 36
      },
      Location: "Honor Reward",
      type: 3,
      speed: 2.2,
      mindmg: 208,
      maxdmg: 313,
      hand: "Two",
      Phase: 1,
      icon: "inv_weapon_halberd15"
  },
  28307: {
      name: "Gladiator's Quickblade",
      stats: {
          Stam: 21,
          MAP: 28,
          RAP: 28,
          Crit: 15,
          Hit: 9,
          Resil: 10
      },
      Location: "Honor Reward",
      type: 2,
      speed: 1.5,
      mindmg: 95,
      maxdmg: 175,
      hand: "Off",
      Phase: 1,
      icon: "inv_sword_71"
  },
  28308: {
      name: "Gladiator's Cleaver",
      stats: {
          Stam: 21,
          MAP: 28,
          RAP: 28,
          Crit: 15,
          Hit: 9,
          Resil: 10
      },
      Location: "Honor Reward",
      type: 3,
      speed: 2.6,
      mindmg: 166,
      maxdmg: 309,
      hand: "One",
      Phase: 1,
      icon: "inv_axe_54"
  },
  28309: {
      name: "Gladiator's Hacker",
      stats: {
          Stam: 21,
          MAP: 28,
          RAP: 28,
          Crit: 15,
          Hit: 9,
          Resil: 10
      },
      Location: "Honor Reward",
      type: 3,
      speed: 1.5,
      mindmg: 95,
      maxdmg: 175,
      hand: "Off",
      Phase: 1,
      icon: "inv_axe_54"
  },
  28310: {
      name: "Gladiator's Shiv",
      stats: {
          Stam: 21,
          MAP: 28,
          RAP: 28,
          Crit: 15,
          Hit: 9,
          Resil: 10
      },
      Location: "Honor Reward",
      type: 1,
      speed: 1.4,
      mindmg: 89,
      maxdmg: 166,
      hand: "Off",
      Phase: 1,
      icon: "inv_weapon_shortblade_45"
  },
  28312: {
      name: "Gladiator's Cleaver",
      stats: {
          Stam: 21,
          MAP: 28,
          RAP: 28,
          Crit: 15,
          Hit: 9,
          Resil: 10
      },
      Location: "Honor Reward",
      type: 3,
      speed: 2.6,
      mindmg: 166,
      maxdmg: 309,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_45"
  },
  28313: {
      name: "Gladiator's Right Ripper",
      stats: {
          Stam: 21,
          MAP: 28,
          RAP: 28,
          Crit: 15,
          Hit: 9,
          Resil: 10
      },
      Location: "Honor Reward",
      type: 5,
      speed: 2.6,
      mindmg: 166,
      maxdmg: 309,
      hand: "Main",
      Phase: 1,
      icon: "inv_weapon_hand_13"
  },
  28314: {
      name: "Gladiator's Left Ripper",
      stats: {
          Stam: 21,
          MAP: 28,
          RAP: 28,
          Crit: 15,
          Hit: 9,
          Resil: 10
      },
      Location: "Honor Reward",
      type: 5,
      speed: 1.5,
      mindmg: 95,
      maxdmg: 178,
      hand: "Off",
      Phase: 1,
      icon: "inv_weapon_hand_13"
  },
  28315: {
      name: "Stormreaver Warblades",
      stats: {
          Stam: 13,
          MAP: 22,
          RAP: 22,
          Crit: 21
      },
      Location: "Dungeon",
      type: 5,
      speed: 1.6,
      mindmg: 80,
      maxdmg: 149,
      hand: "Off",
      Phase: 1,
      icon: "inv_weapon_hand_08"
  },
  28345: {
      name: "Warp Splinter's Thorn",
      stats: {
          Agi: 16,
          Stam: 13,
          Hit: 15
      },
      Location: "Dungeon",
      type: 1,
      speed: 1.3,
      mindmg: 74,
      maxdmg: 112,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_57"
  },
  28416: {
      name: "Hope Ender",
      stats: {
          MAP: 70,
          RAP: 70
      },
      Location: "World Boss",
      type: 2,
      speed: 2.6,
      mindmg: 163,
      maxdmg: 304,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_35"
  },
  28425: {
      name: "Fireguard",
      stats: {
          Agi: 16,
          Stam: 23,
          Hit: 16
      },
      Location: "Crafting",
      type: 2,
      speed: 1.6,
      mindmg: 94,
      maxdmg: 176,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_1h_blacksmithing_01"
  },
  28426: {
      name: "Blazeguard",
      stats: {
          Agi: 17,
          Stam: 25,
          Hit: 17
      },
      Location: "Crafting",
      type: 2,
      speed: 1.6,
      mindmg: 102,
      maxdmg: 190,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_1h_blacksmithing_02"
  },
  28427: {
      name: "Blazefury",
      stats: {
          Agi: 19,
          Stam: 28,
          Hit: 18
      },
      Location: "Crafting",
      type: 2,
      speed: 1.6,
      mindmg: 109,
      maxdmg: 203,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_1h_blacksmithing_03"
  },
  28431: {
      name: "The Planar Edge",
      stats: {
          MAP: 42,
          RAP: 42,
          Crit: 20
      },
      Location: "Crafting",
      type: 3,
      speed: 2.7,
      mindmg: 159,
      maxdmg: 296,
      hand: "Main",
      Phase: 1,
      icon: "inv_axe_1h_blacksmithing_01"
  },
  28432: {
      name: "Black Planar Edge",
      stats: {
          MAP: 44,
          RAP: 44,
          Crit: 21
      },
      Location: "Crafting",
      type: 3,
      speed: 2.7,
      mindmg: 172,
      maxdmg: 320,
      hand: "Main",
      Phase: 1,
      icon: "inv_axe_1h_blacksmithing_02"
  },
  28433: {
      name: "Wicked Edge of the Planes",
      stats: {
          MAP: 48,
          RAP: 48,
          Crit: 23
      },
      Location: "Crafting",
      type: 3,
      speed: 2.7,
      mindmg: 184,
      maxdmg: 343,
      hand: "Main",
      Phase: 1,
      icon: "inv_axe_1h_blacksmithing_03"
  },
  28434: {
      name: "Lunar Crescent",
      stats: {
          MAP: 96,
          RAP: 96,
          Crit: 47
      },
      Location: "Crafting",
      type: 3,
      speed: 3.7,
      mindmg: 324,
      maxdmg: 487,
      hand: "Two",
      Phase: 1,
      icon: "inv_axe_50"
  },
  28435: {
      name: "Mooncleaver",
      stats: {
          MAP: 106,
          RAP: 106,
          Crit: 52
      },
      Location: "Crafting",
      type: 3,
      speed: 3.7,
      mindmg: 351,
      maxdmg: 527,
      hand: "Two",
      Phase: 1,
      icon: "inv_axe_51"
  },
  28436: {
      name: "Bloodmoon",
      stats: {
          MAP: 112,
          RAP: 112,
          Crit: 56
      },
      Location: "Crafting",
      type: 3,
      speed: 3.7,
      mindmg: 375,
      maxdmg: 564,
      hand: "Two",
      Phase: 3,
      icon: "inv_axe_52"
  },
  28524: {
      name: "Emerald Ripper",
      stats: {
          Agi: 19,
          Stam: 18,
          MAP: 36,
          RAP: 36
      },
      Location: "Karazhan",
      type: 1,
      speed: 1.8,
      mindmg: 126,
      maxdmg: 189,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_38"
  },
  28572: {
    name: 'Blade of the Unrequited',
    stats: {
      MAP: 18,
      RAP: 18,
      Crit: 9
    },
    Location: 'Karazhan',
    sockets: [
      "Red",
      "Yellow",
      "Blue"
  ],
    type: 1,
    speed: 1.6,
    mindmg: 112,
    maxdmg: 168,
    hand: 'One',
    Phase: 1,
    icon: 'inv_weapon_shortblade_39'
  },
  34894: {
      name: "Blade of Serration",
      stats: {
          Stam: 30,
          MAP: 44,
          RAP: 44,
          Crit: 24
      },
      Location: "Badge Reward",
      type: 1,
      speed: 1.8,
      mindmg: 130,
      maxdmg: 241,
      hand: "One",
      Phase: 5,
      icon: "inv_weapon_shortblade_78"
  },
  28584: {
      name: "Big Bad Wolf's Paw",
      stats: {
          Agi: 17,
          Stam: 18,
          Crit: 20
      },
      Location: "Karazhan",
      type: 5,
      speed: 2.5,
      mindmg: 153,
      maxdmg: 285,
      hand: "Main",
      Phase: 1,
      icon: "inv_misc_monsterclaw_04"
  },
  28587: {
      name: "Legacy",
      stats: {
          Agi: 40,
          Stam: 46,
          MAP: 80,
          RAP: 80,
          MP5: 8
      },
      Location: "Karazhan",
      type: 3,
      speed: 3.5,
      mindmg: 319,
      maxdmg: 479,
      hand: "Two",
      Phase: 1,
      icon: "inv_axe_46"
  },
  28729: {
      name: "Spiteblade",
      stats: {
          Agi: 14,
          Stam: 16,
          MAP: 46,
          RAP: 46
      },
      Location: "Karazhan",
      type: 2,
      speed: 2.7,
      mindmg: 165,
      maxdmg: 308,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_74"
  },
  28768: {
      name: "Malchazeen",
      stats: {
          Stam: 16,
          MAP: 50,
          RAP: 50,
          Hit: 15
      },
      Location: "Karazhan",
      type: 1,
      speed: 1.8,
      mindmg: 132,
      maxdmg: 199,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_40"
  },
  28773: {
      name: "Gorehowl",
      stats: {
          Str: 49,
          Agi: 43,
          Stam: 51
      },
      Location: "Karazhan",
      type: 3,
      speed: 3.6,
      mindmg: 345,
      maxdmg: 518,
      hand: "Two",
      Phase: 1,
      icon: "inv_axe_60"
  },
  28794: {
      name: "Axe of the Gronn Lords",
      stats: {
          Stam: 66,
          MAP: 124,
          RAP: 124
      },
      Location: "Gruul's Lair",
      type: 3,
      speed: 3.6,
      mindmg: 345,
      maxdmg: 518,
      hand: "Two",
      Phase: 1,
      icon: "inv_axe_64"
  },
  29108: {
      name: "Blade of the Unyielding",
      stats: {
          Agi: 8,
          Stam: 10,
          MAP: 16,
          RAP: 16,
          Hit: 7
      },
      Location: "Quest Reward",
      type: 2,
      speed: 2.4,
      mindmg: 78,
      maxdmg: 146,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_23"
  },
  29121: {
      name: "Grunt's Waraxe",
      stats: {
          Stam: 16,
          MAP: 22,
          RAP: 22,
          Hit: 11
      },
      Location: "Reputation Reward",
      type: 3,
      speed: 1.9,
      mindmg: 70,
      maxdmg: 131,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_31"
  },
  29124: {
      name: "Vindicator's Brand",
      stats: {
          MAP: 38,
          RAP: 38,
          Hit: 19
      },
      Location: "Reputation Reward",
      type: 2,
      speed: 2.6,
      mindmg: 147,
      maxdmg: 275,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_draenei_01"
  },
  29125: {
      name: "Retainer's Blade",
      stats: {
          Agi: 22,
          Stam: 21
      },
      Location: "Reputation Reward",
      type: 1,
      speed: 1.5,
      mindmg: 97,
      maxdmg: 146,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_29"
  },
  29137: {
      name: "Hellscream's Will",
      stats: {
          MAP: 84,
          RAP: 84,
          Hit: 42
      },
      Location: "Reputation Reward",
      type: 3,
      speed: 3.5,
      mindmg: 261,
      maxdmg: 392,
      hand: "Two",
      Phase: 1,
      icon: "inv_axe_44"
  },
  29150: {
      name: "Guile of Khoraazi",
      stats: {
          Agi: 19,
          MAP: 38,
          RAP: 38
      },
      Location: "Reputation Reward",
      type: 1,
      speed: 1.6,
      mindmg: 104,
      maxdmg: 156,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_08"
  },
  29166: {
      name: "Hellforged Halberd",
      stats: {
          Agi: 26,
          MAP: 92,
          RAP: 92,
          Hit: 19
      },
      Location: "Reputation Reward",
      type: 4,
      speed: 3.5,
      mindmg: 261,
      maxdmg: 392,
      hand: "Two",
      Phase: 1,
      icon: "inv_weapon_halberd_12"
  },
  29167: {
      name: "Blackened Spear",
      stats: {
          Agi: 26,
          MAP: 92,
          RAP: 92,
          Hit: 19
      },
      Location: "Reputation Reward",
      type: 4,
      speed: 3.5,
      mindmg: 261,
      maxdmg: 392,
      hand: "Two",
      Phase: 1,
      icon: "inv_spear_03"
  },
  29182: {
      name: "Riftmaker",
      stats: {
          Agi: 21,
          MAP: 22,
          RAP: 22
      },
      Location: "Reputation Reward",
      type: 1,
      speed: 1.8,
      mindmg: 117,
      maxdmg: 176,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_26"
  },
  29275: {
      name: "Searing Sunblade",
      stats: {
          Agi: 24,
          Stam: 22
      },
      Location: "Badge Reward",
      type: 1,
      speed: 1.3,
      mindmg: 77,
      maxdmg: 145,
      hand: "Off",
      Phase: 1,
      icon: "inv_knife_1h_stratholme_d_03"
  },
  29329: {
      name: "Terokk's Quill",
      stats: {
          Agi: 54,
          Stam: 33
      },
      Location: "Quest Reward",
      type: 4,
      speed: 3.3,
      mindmg: 246,
      maxdmg: 370,
      hand: "Two",
      Phase: 1,
      icon: "inv_spear_08"
  },
  29346: {
      name: "Feltooth Eviscerator",
      stats: {
          MAP: 34,
          RAP: 34,
          Crit: 22
      },
      Location: "Dungeon",
      type: 1,
      speed: 1.4,
      mindmg: 83,
      maxdmg: 156,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_38"
  },
  29356: {
      name: "Quantum Blade",
      stats: {
          Stam: 31,
          MAP: 102,
          RAP: 102,
          Crit: 30
      },
      Location: "Dungeon",
      type: 2,
      speed: 3.5,
      mindmg: 304,
      maxdmg: 456,
      hand: "Two",
      Phase: 1,
      icon: "inv_sword_81"
  },
  29360: {
      name: "Vileblade of the Betrayer",
      stats: {
          MAP: 56,
          RAP: 56
      },
      Location: "Dungeon",
      type: 1,
      speed: 1.8,
      mindmg: 120,
      maxdmg: 181,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_33"
  },
  29372: {
      name: "Void-Talon",
      stats: {
          Agi: 14,
          MAP: 28,
          RAP: 28
      },
      Location: "Vendor",
      type: 5,
      speed: 2.4,
      mindmg: 78,
      maxdmg: 146,
      hand: "Off",
      Phase: 1,
      icon: "inv_weapon_hand_01"
  },
  29391: {
      name: "Pulse Dagger",
      stats: {
          Hit: 21
      },
      Location: "Vendor",
      type: 1,
      speed: 1.3,
      mindmg: 52,
      maxdmg: 95,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_07"
  },
  29456: {
      name: "Gift of the Ethereal",
      stats: {
          Agi: 12,
          Stam: 18,
          MAP: 24,
          RAP: 24
      },
      Location: "Reputation Reward",
      type: 2,
      speed: 2,
      mindmg: 79,
      maxdmg: 147,
      hand: "Main",
      Phase: 1,
      icon: "inv_sword_draenei_01"
  },
  29908: {
      name: "Rage Reaver",
      stats: {
          Agi: 19,
          Stam: 30,
          MAP: 38,
          RAP: 38
      },
      Location: "Quest Reward",
      type: 3,
      speed: 3.6,
      mindmg: 167,
      maxdmg: 251,
      hand: "Two",
      Phase: 1,
      icon: "inv_axe_12"
  },
  29909: {
      name: "Screaming Dagger",
      stats: {
          Agi: 7,
          Stam: 12,
          MAP: 16,
          RAP: 16
      },
      Location: "Quest Reward",
      type: 1,
      speed: 1.8,
      mindmg: 56,
      maxdmg: 105,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_03"
  },
  29914: {
      name: "Hellfire Skiver",
      stats: {
          Agi: 7,
          Stam: 9,
          MAP: 16,
          RAP: 16,
          Hit: 5
      },
      Location: "Quest Reward",
      type: 1,
      speed: 1.4,
      mindmg: 43,
      maxdmg: 81,
      hand: "Off",
      Phase: 1,
      icon: "inv_weapon_shortblade_15"
  },
  29924: {
      name: "Nether-Stalker's Blade",
      stats: {
          Agi: 8,
          MAP: 32,
          RAP: 32
      },
      Location: "Quest Reward",
      type: 1,
      speed: 1.8,
      mindmg: 72,
      maxdmg: 135,
      hand: "One",
      Phase: 1,
      icon: "inv_axe_62"
  },
  29948: {
      name: "Claw of the Phoenix",
      stats: {
          Agi: 21,
          Stam: 30,
          MAP: 40,
          RAP: 40
      },
      Location: "The Eye",
      type: 5,
      speed: 1.5,
      mindmg: 101,
      maxdmg: 189,
      hand: "Off",
      Phase: 2,
      icon: "inv_weapon_hand_12"
  },
  29962: {
      name: "Heartless",
      stats: {
          Stam: 30,
          MAP: 42,
          RAP: 42,
          Haste: 20
      },
      Location: "Zul'Aman",
      type: 2,
      speed: 2.6,
      mindmg: 174,
      maxdmg: 323,
      hand: "One",
      Phase: 4,
      icon: "inv_weapon_shortblade_46"
  },
  29993: {
      name: "Twinblade of the Phoenix",
      stats: {
          Stam: 53,
          MAP: 110,
          RAP: 110,
          Crit: 37
      },
      Location: "The Eye",
      sockets: [
          "Red",
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          MAP: 8,
          RAP: 8
      },
      type: 2,
      speed: 3.6,
      mindmg: 375,
      maxdmg: 564,
      hand: "Two",
      Phase: 2,
      icon: "inv_sword_2h_blood_c_01"
  },
  30013: {
      name: "Twin-Bladed Ripper",
      stats: {
          Agi: 12,
          Stam: 12,
          MAP: 24,
          RAP: 24,
          Hit: 11
      },
      Location: "Dungeon",
      type: 1,
      speed: 1.8,
      mindmg: 84,
      maxdmg: 157,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_15"
  },
  30077: {
      name: "Windforged Rapier",
      stats: {
          Hit: 24
      },
      Location: "Crafting",
      type: 2,
      speed: 1.7,
      mindmg: 72,
      maxdmg: 134,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_30"
  },
  30082: {
      name: "Talon of Azshara",
      stats: {
          Agi: 15,
          MAP: 40,
          RAP: 40,
          Hit: 20
      },
      Location: "Serpentshrine Cavern",
      type: 2,
      speed: 2.7,
      mindmg: 182,
      maxdmg: 339,
      hand: "One",
      Phase: 2,
      icon: "inv_sword_50"
  },
  30087: {
      name: "Stormforged Axe",
      stats: {
          Agi: 24
      },
      Location: "Crafting",
      type: 3,
      speed: 2.6,
      mindmg: 110,
      maxdmg: 205,
      hand: "Main",
      Phase: 1,
      icon: "inv_axe_39"
  },
  30088: {
      name: "Skyforged Great Axe",
      stats: {
          MAP: 80,
          RAP: 80,
          Crit: 35
      },
      Location: "Crafting",
      type: 3,
      speed: 3.4,
      mindmg: 213,
      maxdmg: 321,
      hand: "Two",
      Phase: 1,
      icon: "inv_axe_46"
  },
  30103: {
      name: "Fang of Vashj",
      stats: {
          Stam: 19,
          MAP: 56,
          RAP: 56
      },
      Location: "Serpentshrine Cavern",
      type: 1,
      speed: 1.8,
      mindmg: 144,
      maxdmg: 217,
      hand: "One",
      Phase: 2,
      icon: "inv_weapon_shortblade_39"
  },
  30364: {
      name: "Resonating Axe",
      stats: {
          MAP: 22,
          RAP: 22,
          Crit: 11
      },
      Location: "Quest Reward",
      type: 3,
      speed: 2.8,
      mindmg: 113,
      maxdmg: 211,
      hand: "One",
      Phase: 1,
      icon: "inv_axe_40"
  },
  30396: {
      name: "Jeweled Halberd",
      stats: {
          Agi: 21,
          Int: 16,
          MAP: 78,
          RAP: 78
      },
      Location: "Quest Reward",
      type: 4,
      speed: 2.7,
      mindmg: 173,
      maxdmg: 260,
      hand: "Two",
      Phase: 1,
      icon: "inv_spear_05"
  },
  30733: {
      name: "Heavy Elven Dirk",
      stats: {
          Agi: 17,
          MAP: 14,
          RAP: 14
      },
      Location: "Quest Reward",
      type: 1,
      speed: 1.8,
      mindmg: 67,
      maxdmg: 126,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_74"
  },
  30855: {
      name: "Shatterstone Pick",
      stats: {
          Stam: 7,
          MAP: 24,
          RAP: 24,
          Crit: 7
      },
      Location: "Quest Reward",
      type: 3,
      speed: 1.8,
      mindmg: 57,
      maxdmg: 107,
      hand: "One",
      Phase: 1,
      icon: "inv_pick_01"
  },
  30865: {
      name: "Tracker's Blade",
      stats: {
          MAP: 44,
          RAP: 44,
          Crit: 23,
          Hit: 20
      },
      Location: "Mount Hyjal",
      type: 1,
      speed: 1.5,
      mindmg: 105,
      maxdmg: 196,
      hand: "One",
      Phase: 3,
      icon: "inv_weapon_shortblade_59"
  },
  30881: {
      name: "Blade of Infamy",
      stats: {
          Agi: 28,
          MAP: 56,
          RAP: 56
      },
      Location: "Mount Hyjal",
      type: 2,
      speed: 2.6,
      mindmg: 182,
      maxdmg: 339,
      hand: "One",
      Phase: 3,
      icon: "inv_sword_85"
  },
  30901: {
      name: "Boundless Agony",
      stats: {
          Crit: 24,
          ArP: 210
      },
      Location: "Mount Hyjal",
      type: 1,
      speed: 1.8,
      mindmg: 144,
      maxdmg: 217,
      hand: "One",
      Phase: 3,
      icon: "inv_weapon_shortblade_59"
  },
  30902: {
      name: "Cataclysm's Edge",
      stats: {
          Str: 75,
          Stam: 49,
          ArP: 335
      },
      Location: "Hyjal",
      type: 2,
      speed: 3.5,
      mindmg: 386,
      maxdmg: 580,
      hand: "Two",
      Phase: 3,
      icon: "inv_sword_68"
  },
  30999: {
      name: "Ashtongue Blade",
      stats: {
          Agi: 11,
          Stam: 10,
          MAP: 40,
          RAP: 40
      },
      Location: "Quest Reward",
      type: 1,
      speed: 1.4,
      mindmg: 65,
      maxdmg: 122,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_29"
  },
  31073: {
      name: "Borak's Reminder",
      stats: {
          Agi: 11,
          MAP: 40,
          RAP: 40,
          Hit: 7
      },
      Location: "Quest Reward",
      type: 1,
      speed: 1.8,
      mindmg: 84,
      maxdmg: 157,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_14"
  },
  31291: {
      name: "Crystalforged War Axe",
      stats: {
          Stam: 50,
          MAP: 80,
          RAP: 80,
          Crit: 27
      },
      Location: "World Drop",
      type: 3,
      speed: 3.5,
      mindmg: 253,
      maxdmg: 380,
      hand: "Two",
      Phase: 1,
      icon: "inv_axe_40"
  },
  31305: {
      name: "Ced's Carver",
      stats: {
          Stam: 13,
          MAP: 30,
          RAP: 30,
          Crit: 16
      },
      Location: "World Drop",
      type: 3,
      speed: 1.8,
      mindmg: 103,
      maxdmg: 155,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_03"
  },
  31422: {
      name: "Heartrazor",
      stats: {
          Agi: 18,
          Stam: 25
      },
      Location: "The Eye",
      type: 1,
      speed: 1.8,
      mindmg: 121,
      maxdmg: 226,
      hand: "One",
      Phase: 2,
      icon: "inv_weapon_shortblade_03"
  },
  31476: {
      name: "Slow Death Dirk",
      stats: {
          Agi: 17,
          MAP: 14,
          RAP: 14
      },
      Location: "Quest Reward",
      type: 1,
      speed: 1.8,
      mindmg: 70,
      maxdmg: 131,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_16"
  },
  31492: {
      name: "Claw of the Netherwing Flight",
      stats: {
          Agi: 15,
          MAP: 30,
          RAP: 30,
          Hit: 15
      },
      Location: "Quest Reward",
      type: 1,
      speed: 1.8,
      mindmg: 83,
      maxdmg: 156,
      hand: "One",
      Phase: 3,
      icon: "inv_weapon_shortblade_38"
  },
  31541: {
      name: "Whistling Sword",
      stats: {
          Stam: 11,
          MAP: 22,
          RAP: 22,
          Crit: 11
      },
      Location: "Quest Reward",
      type: 2,
      speed: 1.6,
      mindmg: 64,
      maxdmg: 120,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_33"
  },
  31542: {
      name: "Fanged Axe",
      stats: {
          Stam: 39,
          MAP: 52,
          RAP: 52,
          Crit: 26
      },
      Location: "Quest Reward",
      type: 3,
      speed: 3.2,
      mindmg: 192,
      maxdmg: 289,
      hand: "Two",
      Phase: 1,
      icon: "inv_axe_44"
  },
  31701: {
      name: "Saboteur's Axe",
      stats: {
          Str: 37,
          Stam: 22,
          MAP: 72,
          RAP: 72,
          Crit: 21,
          MP5: 7
      },
      Location: "Quest Reward",
      type: 3,
      speed: 3.3,
      mindmg: 198,
      maxdmg: 298,
      hand: "Two",
      Phase: 1,
      icon: "inv_axe_18"
  },
  31703: {
      name: "Netherbane",
      stats: {
          Agi: 25,
          Stam: 21,
          MAP: 40,
          RAP: 40
      },
      Location: "The Eye",
      type: 3,
      speed: 2.6,
      mindmg: 175,
      maxdmg: 327,
      hand: "One",
      Phase: 2,
      icon: "inv_weapon_shortblade_12"
  },
  31723: {
      name: "Madman's Blade",
      stats: {
          Agi: 6,
          MAP: 34,
          RAP: 34
      },
      Location: "Quest Reward",
      type: 1,
      speed: 1.4,
      mindmg: 48,
      maxdmg: 91,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_15"
  },
  31733: {
      name: "Akuno's Blade",
      stats: {
          MAP: 14,
          RAP: 14,
          Crit: 8,
          Hit: 7
      },
      Location: "Quest Reward",
      type: 1,
      speed: 1.9,
      mindmg: 69,
      maxdmg: 128,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_05"
  },
  31756: {
      name: "Dib'Muad's Crysknife",
      stats: {
          MAP: 18,
          RAP: 18,
          Crit: 19
      },
      Location: "Quest Reward",
      type: 1,
      speed: 1.4,
      mindmg: 55,
      maxdmg: 103,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_15"
  },
  31759: {
      name: "Shani's Crysknife",
      stats: {
          Agi: 9,
          MAP: 38,
          RAP: 38
      },
      Location: "Quest Reward",
      type: 1,
      speed: 1.8,
      mindmg: 71,
      maxdmg: 133,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_15"
  },
  31965: {
      name: "Merciless Gladiator's Cleaver",
      stats: {
          Stam: 27,
          MAP: 30,
          RAP: 30,
          Crit: 19,
          Hit: 10,
          Resil: 12
      },
      Location: "Arena Reward",
      type: 3,
      speed: 2.6,
      mindmg: 177,
      maxdmg: 330,
      hand: "One",
      Phase: 2,
      icon: "inv_axe_54"
  },
  31966: {
      name: "Merciless Gladiator's Decapitator",
      stats: {
          Stam: 55,
          MAP: 84,
          RAP: 84,
          Crit: 42,
          Hit: 18,
          Resil: 33
      },
      Location: "Arena Reward",
      type: 3,
      speed: 3.6,
      mindmg: 365,
      maxdmg: 549,
      hand: "Two",
      Phase: 2,
      icon: "inv_axe_68"
  },
  31985: {
      name: "Merciless Gladiator's Hacker",
      stats: {
          Stam: 27,
          MAP: 30,
          RAP: 30,
          Crit: 19,
          Hit: 10,
          Resil: 12
      },
      Location: "Arena Reward",
      type: 3,
      speed: 1.5,
      mindmg: 102,
      maxdmg: 191,
      hand: "Off",
      Phase: 2,
      icon: "inv_axe_54"
  },
  32003: {
      name: "Merciless Gladiator's Left Ripper",
      stats: {
          Stam: 27,
          MAP: 30,
          RAP: 30,
          Crit: 19,
          Hit: 10,
          Resil: 12
      },
      Location: "Arena Reward",
      type: 5,
      speed: 1.5,
      mindmg: 102,
      maxdmg: 191,
      hand: "Off",
      Phase: 2,
      icon: "inv_weapon_hand_13"
  },
  32025: {
      name: "Merciless Gladiator's Painsaw",
      stats: {
          Stam: 55,
          MAP: 82,
          RAP: 82,
          Crit: 42,
          Resil: 42
      },
      Location: "Arena Reward",
      type: 4,
      speed: 2.2,
      mindmg: 223,
      maxdmg: 335,
      hand: "Two",
      Phase: 2,
      icon: "inv_weapon_halberd15"
  },
  32027: {
      name: "Merciless Gladiator's Quickblade",
      stats: {
          Stam: 27,
          MAP: 30,
          RAP: 30,
          Crit: 19,
          Hit: 10,
          Resil: 12
      },
      Location: "Arena Reward",
      type: 2,
      speed: 1.5,
      mindmg: 102,
      maxdmg: 191,
      hand: "Off",
      Phase: 2,
      icon: "inv_sword_71"
  },
  32028: {
      name: "Merciless Gladiator's Right Ripper",
      stats: {
          Stam: 27,
          MAP: 30,
          RAP: 30,
          Crit: 19,
          Hit: 10,
          Resil: 12
      },
      Location: "Arena Reward",
      type: 5,
      speed: 2.6,
      mindmg: 177,
      maxdmg: 330,
      hand: "Main",
      Phase: 2,
      icon: "inv_weapon_hand_13"
  },
  32044: {
      name: "Merciless Gladiator's Shanker",
      stats: {
          Stam: 27,
          MAP: 30,
          RAP: 30,
          Crit: 19,
          Hit: 10,
          Resil: 12
      },
      Location: "Arena Reward",
      type: 1,
      speed: 1.8,
      mindmg: 140,
      maxdmg: 211,
      hand: "One",
      Phase: 2,
      icon: "inv_weapon_shortblade_45"
  },
  32046: {
      name: "Merciless Gladiator's Shiv",
      stats: {
          Stam: 27,
          MAP: 30,
          RAP: 30,
          Crit: 19,
          Hit: 10,
          Resil: 12
      },
      Location: "Arena Reward",
      type: 1,
      speed: 1.4,
      mindmg: 95,
      maxdmg: 175,
      hand: "Off",
      Phase: 2,
      icon: "inv_weapon_shortblade_45"
  },
  32052: {
      name: "Merciless Gladiator's Slicer",
      stats: {
          Stam: 27,
          MAP: 30,
          RAP: 30,
          Crit: 19,
          Hit: 10,
          Resil: 12
      },
      Location: "Arena Reward",
      type: 2,
      speed: 2.6,
      mindmg: 203,
      maxdmg: 305,
      hand: "One",
      Phase: 2,
      icon: "inv_sword_71"
  },
  32236: {
      name: "Rising Tide",
      stats: {
          Stam: 33,
          MAP: 44,
          RAP: 44,
          Hit: 21
      },
      Location: "Black Temple",
      type: 3,
      speed: 2.6,
      mindmg: 208,
      maxdmg: 313,
      hand: "One",
      Phase: 3,
      icon: "inv_axe_56"
  },
  32248: {
      name: "Halberd of Desolation",
      stats: {
          Agi: 51,
          Stam: 57,
          MAP: 100,
          RAP: 100,
          Hit: 30
      },
      Location: "Black Temple",
      type: 4,
      speed: 3.5,
      mindmg: 365,
      maxdmg: 548,
      hand: "Two",
      Phase: 3,
      icon: "inv_weapon_halberd_20"
  },
  32269: {
      name: "Messenger of Fate",
      stats: {
          Agi: 22,
          Stam: 31,
          MAP: 44,
          RAP: 44
      },
      Location: "Black Temple",
      type: 1,
      speed: 1.4,
      mindmg: 112,
      maxdmg: 169,
      hand: "One",
      Phase: 3,
      icon: "inv_weapon_shortblade_63"
  },
  32369: {
      name: "Blade of Infamy",
      stats: {
          Agi: 28,
          MAP: 56,
          RAP: 56
      },
      Location: "Mount Hyjal",
      type: 2,
      speed: 2.6,
      mindmg: 182,
      maxdmg: 339,
      hand: "One",
      Phase: 3,
      icon: "inv_sword_87"
  },
  32781: {
      name: "Talon of Anzu",
      stats: {
          Agi: 10,
          MAP: 36,
          RAP: 36
      },
      Location: "Dungeon",
      sockets: [
          "Red"
      ],
      socketBonus: {
          Stam: 3
      },
      type: 1,
      speed: 1.5,
      mindmg: 75,
      maxdmg: 140,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_16"
  },
  32829: {
      name: "Windcharger's Lance",
      stats: {
          Stam: 60,
          MAP: 80,
          RAP: 80
      },
      Location: "Quest Reward",
      type: 4,
      speed: 3.4,
      mindmg: 237,
      maxdmg: 357,
      hand: "Two",
      Phase: 1,
      icon: "inv_spear_05"
  },
  32944: {
      name: "Talon of the Phoenix",
      stats: {
          MAP: 52,
          RAP: 52,
          Crit: 19,
          Hit: 15
      },
      Location: "The Eye",
      type: 5,
      speed: 2.7,
      mindmg: 182,
      maxdmg: 339,
      hand: "Main",
      Phase: 2,
      icon: "inv_weapon_hand_12"
  },
  32945: {
      name: "Fist of Molten Fury",
      stats: {
          Agi: 20,
          Stam: 28,
          MAP: 38,
          RAP: 38
      },
      Location: "Mount Hyjal",
      type: 5,
      speed: 1.5,
      mindmg: 120,
      maxdmg: 181,
      hand: "Off",
      Phase: 3,
      icon: "inv_weapon_hand_14"
  },
  32946: {
      name: "Claw of Molten Fury",
      stats: {
          Agi: 20,
          Stam: 28,
          MAP: 38,
          RAP: 38
      },
      Location: "Mount Hyjal",
      type: 5,
      speed: 2.7,
      mindmg: 216,
      maxdmg: 325,
      hand: "Main",
      Phase: 3,
      icon: "inv_weapon_hand_14"
  },
  33214: {
      name: "Akil'zon's Talonblade",
      stats: {
          Stam: 25,
          MAP: 52,
          RAP: 52,
          Haste: 18
      },
      Location: "Zul'Aman",
      type: 2,
      speed: 1.5,
      mindmg: 100,
      maxdmg: 187,
      hand: "One",
      Phase: 4,
      icon: "inv_sword_108"
  },
  33298: {
      name: "Prowler's Strikeblade",
      stats: {
          Stam: 30,
          MAP: 42,
          RAP: 42,
          ArP: 140
      },
      Location: "Zul'Aman",
      type: 1,
      speed: 1.5,
      mindmg: 100,
      maxdmg: 187,
      hand: "One",
      Phase: 4,
      icon: "inv_weapon_shortblade_65"
  },
  33388: {
      name: "Hardened Stone Shard",
      stats: {
          Stam: 16,
          MAP: 22,
          RAP: 22,
          Hit: 12
      },
      Location: "Reputation Reward",
      type: 1,
      speed: 1.8,
      mindmg: 79,
      maxdmg: 120,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_107"
  },
  33389: {
      name: "Dagger of Bad Mojo",
      stats: {
          Agi: 21,
          MAP: 40,
          RAP: 40,
          ArP: 140
      },
      Location: "Zul'Aman",
      type: 1,
      speed: 1.8,
      mindmg: 137,
      maxdmg: 207,
      hand: "One",
      Phase: 4,
      icon: "inv_weapon_shortblade_60"
  },
  33478: {
      name: "\"Jin'rohk",
      stats: {
          Str: null,
          Int: 49,
          RAP: 120,
          Crit: 120
      },
      Location: 45,
      sockets: [
          "Zul'Aman"
      ],
      socketBonus: {},
      speed: 2,
      mindmg: 3.7,
      maxdmg: 380,
      hand: 570,
      Phase: "Two",
      icon: "inv_sword_108"
  },
  33492: {
      name: "Trollbane",
      stats: {
          Agi: 39,
          Stam: 58,
          MAP: 94,
          RAP: 94
      },
      Location: "Zul'Aman",
      sockets: [
          "Red",
          "Blue"
      ],
      socketBonus: {
          MAP: 6,
          RAP: 6
      },
      type: 3,
      speed: 3.6,
      mindmg: 358,
      maxdmg: 537,
      hand: "Two",
      Phase: 4,
      icon: "inv_axe_85"
  },
  33493: {
      name: "Umbral Shiv",
      stats: {
          Agi: 12,
          Stam: 30,
          Hit: 13
      },
      Location: "Zul'Aman",
      sockets: [
          "Red",
          "Yellow"
      ],
      socketBonus: {
          MAP: 6,
          RAP: 6
      },
      type: 1,
      speed: 1.8,
      mindmg: 137,
      maxdmg: 207,
      hand: "One",
      Phase: 4,
      icon: "inv_weapon_shortblade_66"
  },
  33495: {
      name: "Rage",
      stats: {
          Agi: 20,
          Stam: 18,
          Crit: 13
      },
      Location: "Zul'Aman",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          MAP: 4,
          RAP: 4
      },
      type: 5,
      speed: 2.6,
      mindmg: 174,
      maxdmg: 323,
      hand: "Main",
      Phase: 4,
      icon: "inv_weapon_hand_15"
  },
  33640: {
      name: "Fury",
      stats: {
          Stam: 20,
          MAP: 26,
          RAP: 26,
          Hit: 20
      },
      Location: "Zul'Aman",
      sockets: [
          "Red"
      ],
      socketBonus: {
          MAP: 4,
          RAP: 4
      },
      type: 5,
      speed: 2.6,
      mindmg: 174,
      maxdmg: 323,
      hand: "Off",
      Phase: 4,
      icon: "inv_weapon_hand_15"
  },
  33669: {
      name: "Vengeful Gladiator's Cleaver",
      stats: {
          Stam: 30,
          MAP: 34,
          RAP: 34,
          Crit: 21,
          Hit: 8,
          Resil: 12,
          ArP: 49
      },
      Location: "Arena Reward",
      type: 3,
      speed: 2.6,
      mindmg: 187,
      maxdmg: 349,
      hand: "One",
      Phase: 3,
      icon: "inv_axe_84"
  },
  33670: {
      name: "Vengeful Gladiator's Decapitator",
      stats: {
          Stam: 62,
          MAP: 92,
          RAP: 92,
          Crit: 47,
          Resil: 42
      },
      Location: "Arena Reward",
      type: 3,
      speed: 3.6,
      mindmg: 386,
      maxdmg: 580,
      hand: "Two",
      Phase: 3,
      icon: "inv_axe_60"
  },
  33688: {
      name: "Vengeful Gladiator's Greatsword",
      stats: {
          Stam: 62,
          MAP: 92,
          RAP: 92,
          Crit: 47,
          Resil: 42
      },
      Location: "Arena Reward",
      type: 2,
      speed: 3.6,
      mindmg: 386,
      maxdmg: 580,
      hand: "Two",
      Phase: 3,
      icon: "inv_sword_108"
  },
  33689: {
      name: "Vengeful Gladiator's Hacker",
      stats: {
          Stam: 30,
          MAP: 34,
          RAP: 34,
          Crit: 21,
          Hit: 8,
          Resil: 12,
          ArP: 49
      },
      Location: "Arena Reward",
      type: 3,
      speed: 1.5,
      mindmg: 108,
      maxdmg: 201,
      hand: "Off",
      Phase: 3,
      icon: "inv_axe_84"
  },
  33705: {
      name: "Vengeful Gladiator's Left Ripper",
      stats: {
          Stam: 30,
          MAP: 34,
          RAP: 34,
          Crit: 21,
          Hit: 8,
          Resil: 12,
          ArP: 49
      },
      Location: "Arena Reward",
      type: 5,
      speed: 1.5,
      mindmg: 108,
      maxdmg: 201,
      hand: "Off",
      Phase: 3,
      icon: "inv_weapon_hand_13"
  },
  33727: {
      name: "Vengeful Gladiator's Painsaw",
      stats: {
          Stam: 62,
          MAP: 92,
          RAP: 92,
          Crit: 47,
          Resil: 42
      },
      Location: "Arena Reward",
      type: 4,
      speed: 2.2,
      mindmg: 236,
      maxdmg: 354,
      hand: "Two",
      Phase: 3,
      icon: "inv_weapon_halberd15"
  },
  33734: {
      name: "Vengeful Gladiator's Quickblade",
      stats: {
          Stam: 30,
          MAP: 34,
          RAP: 34,
          Crit: 21,
          Hit: 8,
          Resil: 12,
          ArP: 49
      },
      Location: "Arena Reward",
      type: 2,
      speed: 1.5,
      mindmg: 108,
      maxdmg: 201,
      hand: "Off",
      Phase: 3,
      icon: "inv_sword_89"
  },
  33737: {
      name: "Vengeful Gladiator's Right Ripper",
      stats: {
          Stam: 30,
          MAP: 34,
          RAP: 34,
          Crit: 21,
          Hit: 8,
          Resil: 12,
          ArP: 49
      },
      Location: "Arena Reward",
      type: 5,
      speed: 2.6,
      mindmg: 187,
      maxdmg: 349,
      hand: "Main",
      Phase: 3,
      icon: "inv_weapon_hand_13"
  },
  33754: {
      name: "Vengeful Gladiator's Shanker",
      stats: {
          Stam: 30,
          MAP: 34,
          RAP: 34,
          Crit: 21,
          Hit: 8,
          Resil: 12,
          ArP: 49
      },
      Location: "Arena Reward",
      type: 1,
      speed: 1.8,
      mindmg: 148,
      maxdmg: 223,
      hand: "One",
      Phase: 3,
      icon: "inv_weapon_shortblade_62"
  },
  33756: {
      name: "Vengeful Gladiator's Shiv",
      stats: {
          Stam: 30,
          MAP: 34,
          RAP: 34,
          Crit: 21,
          Hit: 8,
          Resil: 12,
          ArP: 49
      },
      Location: "Arena Reward",
      type: 1,
      speed: 1.4,
      mindmg: 101,
      maxdmg: 188,
      hand: "Off",
      Phase: 3,
      icon: "inv_weapon_shortblade_62"
  },
  33762: {
      name: "Vengeful Gladiator's Slicer",
      stats: {
          Stam: 30,
          MAP: 34,
          RAP: 34,
          Crit: 21,
          Hit: 8,
          Resil: 12,
          ArP: 49
      },
      Location: "Arena Reward",
      type: 2,
      speed: 2.6,
      mindmg: 214,
      maxdmg: 322,
      hand: "One",
      Phase: 3,
      icon: "inv_sword_89"
  },
  33801: {
      name: "Vengeful Gladiator's Mutilator",
      stats: {
          Stam: 30,
          MAP: 34,
          RAP: 34,
          Crit: 21,
          Hit: 8,
          Resil: 12,
          ArP: 49
      },
      Location: "Arena Reward",
      type: 1,
      speed: 1.8,
      mindmg: 130,
      maxdmg: 241,
      hand: "Off",
      Phase: 3,
      icon: "inv_weapon_shortblade_62"
  },
  34014: {
      name: "Vengeful Gladiator's Waraxe",
      stats: {
          Stam: 62,
          MAP: 92,
          RAP: 92,
          Crit: 46,
          Hit: 15,
          Resil: 33,
          ArP: 98
      },
      Location: "Arena Reward",
      type: 3,
      speed: 3,
      mindmg: 321,
      maxdmg: 483,
      hand: "Two",
      Phase: 3,
      icon: "inv_axe_61"
  },
  34015: {
      name: "Vengeful Gladiator's Chopper",
      stats: {
          Stam: 30,
          MAP: 34,
          RAP: 34,
          Crit: 21,
          Hit: 8,
          Resil: 12,
          ArP: 49
      },
      Location: "Arena Reward",
      type: 3,
      speed: 2.6,
      mindmg: 187,
      maxdmg: 349,
      hand: "Off",
      Phase: 3,
      icon: "inv_axe_84"
  },
  34016: {
      name: "Vengeful Gladiator's Left Render",
      stats: {
          Stam: 30,
          MAP: 34,
          RAP: 34,
          Crit: 21,
          Hit: 8,
          Resil: 12,
          ArP: 49
      },
      Location: "Arena Reward",
      type: 5,
      speed: 2.6,
      mindmg: 187,
      maxdmg: 349,
      hand: "Off",
      Phase: 3,
      icon: "inv_weapon_hand_13"
  },
  34165: {
      name: "Fang of Kalecgos",
      stats: {
          Agi: 25,
          MAP: 48,
          RAP: 48,
          Haste: 25
      },
      Location: "Sunwell",
      type: 1,
      speed: 1.5,
      mindmg: 113,
      maxdmg: 211,
      hand: "One",
      Phase: 5,
      icon: "inv_weapon_shortblade_74"
  },
  34183: {
      name: "Shivering Felspine",
      stats: {
          Agi: 52,
          MAP: 120,
          RAP: 120,
          Haste: 53
      },
      Location: "Sunwell",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          MAP: 4,
          RAP: 4
      },
      type: 4,
      speed: 3.5,
      mindmg: 393,
      maxdmg: 590,
      hand: "Two",
      Phase: 5,
      icon: "inv_weapon_halberd_20"
  },
  34197: {
      name: "Shiv of Exsanguination",
      stats: {
          Agi: 25,
          MAP: 42,
          RAP: 42,
          ArP: 196
      },
      Location: "Sunwell",
      type: 1,
      speed: 1.8,
      mindmg: 136,
      maxdmg: 253,
      hand: "One",
      Phase: 5,
      icon: "inv_weapon_shortblade_75"
  },
  34214: {
      name: "Muramasa",
      stats: {
          Stam: 27,
          Hit: 17,
          Haste: 35
      },
      Location: "Sunwell",
      type: 2,
      speed: 2.6,
      mindmg: 196,
      maxdmg: 365,
      hand: "One",
      Phase: 5,
      icon: "inv_sword_114"
  },
  34329: {
      name: "Crux of the Apocalypse",
      stats: {
          Agi: 18,
          Stam: 15,
          MAP: 56,
          RAP: 56,
          Haste: 27
      },
      Location: "Sunwell",
      sockets: [
          "Red"
      ],
      socketBonus: {
          MAP: 4,
          RAP: 4
      },
      type: 1,
      speed: 1.8,
      mindmg: 164,
      maxdmg: 247,
      hand: "One",
      Phase: 5,
      icon: "inv_weapon_shortblade_75"
  },
  34331: {
      name: "Hand of the Deceiver",
      stats: {
          Stam: 28,
          MAP: 54,
          RAP: 54,
          ArP: 196
      },
      Location: "Sunwell",
      sockets: [
          "Yellow",
          "Yellow"
      ],
      socketBonus: {
          MAP: 6,
          RAP: 6
      },
      type: 5,
      speed: 2.6,
      mindmg: 238,
      maxdmg: 357,
      hand: "Main",
      Phase: 5,
      icon: "inv_weapon_hand_15"
  },
  34346: {
      name: "Mounting Vengeance",
      stats: {
          Stam: 22,
          MAP: 46,
          RAP: 46,
          ArP: 140
      },
      Location: "Sunwell",
      sockets: [
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          Str: 3
      },
      type: 5,
      speed: 2.6,
      mindmg: 196,
      maxdmg: 365,
      hand: "Off",
      Phase: 5,
      icon: "inv_weapon_hand_13"
  },
  34606: {
      name: "Edge of Oppression",
      stats: {
          Stam: 25,
          MAP: 36,
          RAP: 36,
          Haste: 17
      },
      Location: "Dungeon",
      type: 1,
      speed: 1.3,
      mindmg: 79,
      maxdmg: 148,
      hand: "One",
      Phase: 1,
      icon: "inv_knife_1h_stratholme_d_03"
  },
  34616: {
      name: "Breeching Comet",
      stats: {
          Agi: 18,
          Stam: 15,
          MAP: 40,
          RAP: 40
      },
      Location: "Dungeon",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          MAP: 4,
          RAP: 4
      },
      type: 3,
      speed: 2.6,
      mindmg: 167,
      maxdmg: 312,
      hand: "One",
      Phase: 5,
      icon: "inv_axe_62"
  },
  34665: {
      name: "Bombardier's Blade",
      stats: {
          Agi: 14,
          Stam: 12,
          MAP: 26,
          RAP: 26,
          Hit: 11
      },
      Location: "Reputation Reward",
      type: 1,
      speed: 1.8,
      mindmg: 90,
      maxdmg: 168,
      hand: "One",
      Phase: 1,
      icon: "inv_weapon_shortblade_14"
  },
  34666: {
      name: "The Sunbreaker",
      stats: {
          Agi: 14,
          Stam: 12,
          MAP: 26,
          RAP: 26,
          Hit: 11
      },
      Location: "Reputation Reward",
      type: 2,
      speed: 2.7,
      mindmg: 155,
      maxdmg: 233,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_91"
  },
  34699: {
      name: "Sun-forged Cleaver",
      stats: {
          MAP: 28,
          RAP: 28,
          Crit: 13,
          Haste: 15
      },
      Location: "Dungeon",
      type: 3,
      speed: 2.6,
      mindmg: 130,
      maxdmg: 243,
      hand: "One",
      Phase: 1,
      icon: "inv_axe_02"
  },
  34703: {
      name: "Latro's Dancing Blade",
      stats: {
          Stam: 21,
          MAP: 28,
          RAP: 28,
          ArP: 98
      },
      Location: "Dungeon",
      type: 2,
      speed: 2.6,
      mindmg: 130,
      maxdmg: 243,
      hand: "One",
      Phase: 1,
      icon: "inv_sword_76"
  },
  34891: {
      name: "The Blade of Harbingers",
      stats: {
          MAP: 108,
          RAP: 108,
          Crit: 55,
          Haste: 53
      },
      Location: "Badge Reward",
      type: 2,
      speed: 3.5,
      mindmg: 375,
      maxdmg: 563,
      hand: "Two",
      Phase: 3,
      icon: "inv_axe_04"
  },
  34893: {
      name: "Vanir's Right Fist of Brutality",
      stats: {
          Agi: 23,
          MAP: 44,
          RAP: 44,
          Haste: 21
      },
      Location: "Badge Reward",
      type: 5,
      speed: 2.5,
      mindmg: 180,
      maxdmg: 335,
      hand: "Main",
      Phase: 4,
      icon: "inv_weapon_hand_16"
  },
  34894: {
      name: "Blade of Savagery",
      stats: {
          Stam: 19,
          MAP: 44,
          RAP: 44,
          Crit: 22,
          Hit: 15
      },
      Location: "Black Temple",
      type: 2,
      speed: 1.4,
      mindmg: 98,
      maxdmg: 183,
      hand: "One",
      Phase: 3,
      icon: "inv_weapon_shortblade_78"
  },
  34949: {
      name: "Swift Blade of Uncertainty",
      stats: {
          Stam: 30,
          MAP: 44,
          RAP: 44,
          Hit: 24
      },
      Location: "Badge Reward",
      type: 1,
      speed: 1.5,
      mindmg: 108,
      maxdmg: 201,
      hand: "Off",
      Phase: 3,
      icon: "inv_weapon_shortblade_78"
  },
  34950: {
      name: "Vanir's Left Fist of Savagery",
      stats: {
          MAP: 44,
          RAP: 44,
          Hit: 21,
          Haste: 23
      },
      Location: "Badge Reward",
      type: 5,
      speed: 1.5,
      mindmg: 108,
      maxdmg: 201,
      hand: "Off",
      Phase: 5,
      icon: "inv_weapon_hand_16"
  },
  34951: {
      name: "Vanir's Left Fist of Brutality",
      stats: {
          MAP: 44,
          RAP: 44,
          Hit: 21,
          Haste: 23
      },
      Location: "Badge Reward",
      type: 5,
      speed: 2.5,
      mindmg: 180,
      maxdmg: 335,
      hand: "Off",
      Phase: 5,
      icon: "inv_weapon_hand_16"
  },
  34952: {
      name: "The Mutilator",
      stats: {
          Stam: 30,
          MAP: 44,
          RAP: 44,
          Hit: 24
      },
      Location: "Badge Reward",
      type: 1,
      speed: 1.8,
      mindmg: 130,
      maxdmg: 241,
      hand: "Off",
      Phase: 3,
      icon: "inv_weapon_shortblade_78"
  }
}

const NECKS = {
  24073: {
      name: "Garrote-String Necklace",
      stats: {
          Stam: 16,
          MAP: 36,
          RAP: 36,
          Crit: 14
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_jewelry_necklace_22"
  },
  24106: {
      name: "Thick Felsteel Necklace",
      stats: {
          Stam: 36,
          Resil: 23
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_jewelry_necklace_17"
  },
  24114: {
      name: "Braided Eternium Chain",
      stats: {
          Crit: 28,
          Hit: 21
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_jewelry_necklace_07"
  },
  25487: {
      name: "Wind Dancer's Pendant",
      stats: {
          Agi: 12,
          Stam: 18,
          MAP: 26,
          RAP: 26
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_jewelry_necklace_22"
  },
  25562: {
      name: "Earthen Mark of Razing",
      stats: {
          Agi: 23,
          MAP: 20,
          RAP: 20,
          Hit: 13
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_jewelry_necklace_06"
  },
  25993: {
      name: "Finely Wrought Chain",
      stats: {
          MAP: 28,
          RAP: 28,
          Hit: 15
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_jewelry_necklace_11"
  },
  27546: {
      name: "Traitor's Noose",
      stats: {
          Stam: 18,
          MAP: 38,
          RAP: 38,
          Crit: 18,
          Hit: 12
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_misc_noose_01"
  },
  27779: {
      name: "Bone Chain Necklace",
      stats: {
          Agi: 19,
          Stam: 18,
          MAP: 36,
          RAP: 36,
          Hit: 13
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_jewelry_necklace_04"
  },
  28168: {
      name: "Insignia of the Mag'hari Hero",
      stats: {
          Stam: 21,
          MAP: 30,
          RAP: 30,
          Crit: 15,
          Hit: 14
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_jewelry_necklace_34"
  },
  28217: {
      name: "Tarren Mill Vitality Locket",
      stats: {
          Stam: 35,
          Resil: 24
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_trinket_honorhold"
  },
  28244: {
      name: "Pendant of Triumph",
      stats: {
          Stam: 28,
          MAP: 36,
          RAP: 36,
          Crit: 10,
          Resil: 17
      },
      Location: "Honor Reward",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          Hit: 2
      },
      Phase: 1,
      icon: "inv_jewelry_necklace_36"
  },
  28343: {
      name: "Jagged Bark Pendant",
      stats: {
          Agi: 26,
          Stam: 15,
          MAP: 30,
          RAP: 30
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_jewelry_necklace_17"
  },
  28509: {
      name: "Worgen Claw Necklace",
      stats: {
          Agi: 20,
          Stam: 21,
          MAP: 42,
          RAP: 42,
          Hit: 17
      },
      Location: "Karazhan",
      Phase: 1,
      icon: "inv_jewelry_necklace_22"
  },
  28674: {
      name: "Saberclaw Talisman",
      stats: {
          Agi: 21,
          Stam: 33,
          MAP: 46,
          RAP: 46
      },
      Location: "Karazhan",
      Phase: 1,
      icon: "inv_jewelry_necklace_34"
  },
  29119: {
      name: "Haramad's Bargain",
      stats: {
          Str: 25,
          Agi: 24
      },
      Location: "Reputation Reward",
      Phase: 1,
      icon: "inv_jewelry_necklace_29naxxramas"
  },
  29335: {
      name: "Talon Lord's Collar",
      stats: {
          Stam: 19,
          MAP: 38,
          RAP: 38,
          Hit: 21
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_jewelry_necklace_04"
  },
  29349: {
      name: "Adamantine Chain of the Unbroken",
      stats: {
          Stam: 19,
          MAP: 34,
          RAP: 34,
          Crit: 30
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_jewelry_necklace_06"
  },
  29381: {
      name: "Choker of Vile Intent",
      stats: {
          Agi: 20,
          Stam: 18,
          MAP: 42,
          RAP: 42,
          Hit: 18
      },
      Location: "Badge Reward",
      Phase: 1,
      icon: "inv_jewelry_necklace_04"
  },
  29815: {
      name: "Chain of Glowing Tendrils",
      stats: {
          Str: 18,
          Agi: 17,
          Stam: 25
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_jewelry_necklace_04"
  },
  30017: {
      name: "Telonicus's Pendant of Mayhem",
      stats: {
          Agi: 27,
          Stam: 26,
          MAP: 70,
          RAP: 70
      },
      Location: "The Eye",
      Phase: 2,
      icon: "inv_jewelry_necklace_30naxxramas"
  },
  30059: {
      name: "Choker of Animalistic Fury",
      stats: {
          Stam: 24,
          MAP: 64,
          RAP: 64,
          Crit: 23
      },
      Location: "Serpentshrine Cavern",
      Phase: 2,
      icon: "inv_jewelry_necklace_ahnqiraj_03"
  },
  30981: {
      name: "Grom'tor's Pendant of Conquest",
      stats: {
          Agi: 16,
          Stam: 22,
          MAP: 32,
          RAP: 32
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_jewelry_necklace_29naxxramas"
  },
  31147: {
      name: "Pendant of Cunning",
      stats: {
          Agi: 20,
          MAP: 40,
          RAP: 40
      },
      Location: "World Drop",
      Phase: 1,
      icon: "inv_jewelry_necklace_06"
  },
  31275: {
      name: "Necklace of Trophies",
      stats: {
          Str: 22,
          Agi: 15
      },
      Location: "World Drop",
      Phase: 1,
      icon: "inv_jewelry_necklace_19"
  },
  31695: {
      name: "Natasha's Choker",
      stats: {
          MAP: 50,
          RAP: 50,
          Crit: 15,
          Hit: 10
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_jewelry_necklace_34"
  },
  31727: {
      name: "Choker of Bloodied Feathers",
      stats: {
          Agi: 15,
          Stam: 24,
          MAP: 32,
          RAP: 32
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_jewelry_necklace_20"
  },
  31748: {
      name: "Shattrath Choker of Power",
      stats: {
          MAP: 46,
          RAP: 46,
          Resil: 24
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_jewelry_necklace_12"
  },
  31790: {
      name: "Expedition Pendant",
      stats: {
          Agi: 11,
          Stam: 12,
          MAP: 42,
          RAP: 42
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_jewelry_necklace_01"
  },
  32260: {
      name: "Choker of Endless Nightmares",
      stats: {
          MAP: 72,
          RAP: 72,
          Crit: 27,
          Hit: 21
      },
      Location: "Black Temple",
      Phase: 3,
      icon: "inv_jewelry_necklace_35"
  },
  32508: {
      name: "Necklace of the Deep",
      stats: {
          Agi: 21,
          Stam: 20
      },
      Location: "Crafting",
      sockets: [
          "Red",
          "Red"
      ],
      socketBonus: {
          Hit: 3
      },
      Phase: 2,
      icon: "inv_jewelry_necklace_03"
  },
  32591: {
      name: "Choker of Serrated Blades",
      stats: {
          Stam: 37,
          MAP: 70,
          RAP: 70,
          ArP: 175
      },
      Location: "MH/BT",
      Phase: 3,
      icon: "inv_jewelry_necklace_34"
  },
  33066: {
      name: "Veteran's Pendant of Triumph",
      stats: {
          Stam: 31,
          MAP: 42,
          RAP: 42,
          Crit: 18,
          Resil: 18
      },
      Location: "Honor Reward",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          Stam: 3
      },
      Phase: 2,
      icon: "inv_jewelry_necklace_36"
  },
  33297: {
      name: "The Savage's Choker",
      stats: {
          Stam: 37,
          MAP: 50,
          RAP: 50,
          Haste: 25
      },
      Location: "Zul'Aman",
      Phase: 4,
      icon: "inv_jewelry_necklace_19"
  },
  33923: {
      name: "Vindicator's Pendant of Triumph",
      stats: {
          Stam: 35,
          MAP: 50,
          RAP: 50,
          Crit: 22,
          Resil: 18
      },
      Location: "Honor Reward",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          Stam: 3
      },
      Phase: 3,
      icon: "inv_jewelry_necklace_36"
  },
  34177: {
      name: "Clutch of Demise",
      stats: {
          Agi: 25,
          Stam: 33,
          MAP: 64,
          RAP: 64,
          Haste: 30
      },
      Location: "Sunwell",
      Phase: 5,
      icon: "inv_jewelry_necklace_43"
  },
  34358: {
      name: "Hard Khorium Choker",
      stats: {
          Stam: 42,
          MAP: 58,
          RAP: 58,
          ArP: 150,
          Haste: 29
      },
      Location: "Crafting",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          MAP: 4,
          RAP: 4
      },
      Phase: 5,
      icon: "inv_jewelry_necklace_35"
  },
  34679: {
      name: "Shattered Sun Pendant of Might",
      stats: {
          Agi: 18,
          Stam: 19,
          MAP: 64,
          RAP: 64
      },
      Location: "Reputation Reward",
      Phase: 5,
      icon: "inv_jewelry_necklace_38"
  },
  35292: {
      name: "Sin'dorei Pendant of Triumph",
      stats: {
          Stam: 18,
          MAP: 58,
          RAP: 58,
          Crit: 28,
          Resil: 19
      },
      Location: "Sunwell",
      sockets: [
          "Blue"
      ],
      socketBonus: {
          MAP: 4,
          RAP: 4
      },
      Phase: 5,
      icon: "inv_jewelry_necklace_36"
  }
}

const QUIVERS = {
  18714: {
      name: "Ancient Sinew Wrapped Lamina",
      Location: "Petrified Leaf MC Quest and Blue Sinew",
      icon: "inv_misc_quiver_03"
  },
  19319: {
      name: "Knothide Quiver",
      Location: "Crafted - LW",
      icon: "inv_misc_quiver_06"
  },
  19320: {
      name: "Harpy Hide Quiver",
      Location: "Honor Reward",
      icon: "inv_misc_ammo_bullet_01"
  },
  29118: {
      name: "Netherscale Ammo Pouch",
      Location: "Crafted - LW",
      icon: "inv_misc_bag_10_black"
  },
  29143: {
      name: "Clefthoof Hide Quiver",
      Location: "The Mag'har - Honored",
      icon: "inv_misc_quiver_08"
  },
  29144: {
      name: "Smuggler's Ammo Pouch",
      Location: "Reputation Reward",
      icon: "inv_misc_quiver_06"
  },
  34099: {
      name: "Quiver of a Thousand Feathers",
      Location: "Crafted - LW",
      icon: "inv_misc_bag_09"
  },
  34100: {
      name: "Worg Hide Quiver",
      Location: "Reputation Reward",
      icon: "inv_misc_quiver_06"
  },
  34105: {
      name: "Knothide Ammo Pouch",
      Location: "Crafted - LW",
      icon: "classic_inv_misc_quiver_05"
  },
  34106: {
      name: "Gnoll Skin Bandolier",
      Location: "Honor Reward",
      icon: "inv_misc_bag_21"
  }
}

const RANGED_WEAPONS = {
  12651: {
      name: "Blackcrow",
      stats: {
          Agi: 3,
          Hit: 10
      },
      type: "Xbow",
      mindmg: 99,
      maxdmg: 149,
      speed: 3.2,
      Phase: 1,
      icon: "inv_weapon_crossbow_04"
  },
  15808: {
      name: "Fine Light Crossbow",
      type: "Xbow",
      mindmg: 29,
      maxdmg: 29,
      speed: 2.7,
      Phase: 1,
      icon: "inv_weapon_crossbow_02"
  },
  17072: {
      name: "Blastershot Launcher",
      stats: {
          Stam: 6,
          Crit: 14
      },
      type: "Gun",
      mindmg: 89,
      maxdmg: 167,
      speed: 2.6,
      Phase: 1,
      icon: "inv_weapon_rifle_09"
  },
  18713: {
      name: "\"Rhok'delar",
      stats: {
          Str: null,
          Crit: 17,
          Hit: 14
      },
      sockets: [
          "Bow"
      ],
      socketBonus: {},
      maxdmg: 108,
      speed: 201,
      Phase: 2.9,
      icon: "inv_weapon_bow_01"
  },
  18729: {
      name: "Screeching Bow",
      stats: {
          Stam: 3
      },
      type: "Bow",
      mindmg: 90,
      maxdmg: 90,
      speed: 2.3,
      Phase: 1,
      icon: "inv_weapon_bow_12"
  },
  19350: {
      name: "Heartstriker",
      stats: {
          MAP: 24,
          RAP: 24
      },
      type: "Bow",
      mindmg: 97,
      maxdmg: 180,
      speed: 2.6,
      Phase: 1,
      icon: "inv_weapon_bow_09"
  },
  19361: {
      name: "\"Ashjre'thul",
      stats: {
          Str: null,
          Int: 7,
          Crit: 36
      },
      sockets: [
          "Xbow"
      ],
      socketBonus: {},
      maxdmg: 149,
      speed: 225,
      Phase: 3.4,
      icon: "inv_weapon_crossbow_09"
  },
  20437: {
      name: "Outrider's Bow",
      stats: {
          Agi: 4,
          Stam: 10
      },
      type: "Bow",
      mindmg: 68,
      maxdmg: 128,
      speed: 2.4,
      Phase: 1,
      icon: "inv_weapon_bow_06"
  },
  20599: {
      name: "Polished Ironwood Crossbow",
      stats: {
          Stam: 5,
          MAP: 24,
          RAP: 24
      },
      type: "Xbow",
      mindmg: 124,
      maxdmg: 186,
      speed: 3.1,
      Phase: 1,
      icon: "inv_weapon_crossbow_11"
  },
  21272: {
      name: "Blessed Qiraji Musket",
      stats: {
          Stam: 10,
          RAP: 31
      },
      type: "Gun",
      mindmg: 103,
      maxdmg: 192,
      speed: 2.6,
      Phase: 1,
      icon: "inv_weapon_rifle_11"
  },
  21459: {
      name: "Crossbow of Imminent Doom",
      stats: {
          Str: 5,
          Agi: 7,
          Stam: 5,
          Hit: 10
      },
      type: "Xbow",
      mindmg: 126,
      maxdmg: 189,
      speed: 3.1,
      Phase: 1,
      icon: "inv_weapon_crossbow_06"
  },
  22318: {
      name: "Malgen's Long Bow",
      stats: {
          Stam: 4,
          MAP: 20,
          RAP: 20
      },
      type: "Bow",
      mindmg: 80,
      maxdmg: 150,
      speed: 2.9,
      Phase: 1,
      icon: "inv_weapon_bow_12"
  },
  22812: {
      name: "Nerubian Slavemaker",
      stats: {
          MAP: 24,
          RAP: 24,
          Crit: 14
      },
      type: "Xbow",
      mindmg: 151,
      maxdmg: 281,
      speed: 3.2,
      Phase: 1,
      icon: "inv_weapon_crossbow_12"
  },
  23746: {
      name: "Adamantite Rifle",
      stats: {
          Agi: 12,
          MAP: 22,
          RAP: 22
      },
      type: "Gun",
      mindmg: 126,
      maxdmg: 234,
      speed: 3,
      Phase: 1,
      icon: "inv_weapon_rifle_04"
  },
  23747: {
      name: "Felsteel Boomstick",
      stats: {
          Stam: 12,
          Crit: 13
      },
      type: "Gun",
      mindmg: 104,
      maxdmg: 194,
      speed: 2.4,
      Phase: 1,
      icon: "inv_weapon_rifle_04"
  },
  23748: {
      name: "Ornate Khorium Rifle",
      stats: {
          Agi: 14,
          Hit: 13
      },
      type: "Gun",
      mindmg: 144,
      maxdmg: 268,
      speed: 3.1,
      Phase: 1,
      icon: "inv_weapon_rifle_03"
  },
  24381: {
      name: "Coilfang Needler",
      stats: {
          Agi: 12,
          MAP: 24,
          RAP: 24
      },
      type: "Xbow",
      mindmg: 124,
      maxdmg: 187,
      speed: 2.9,
      Phase: 1,
      icon: "inv_weapon_crossbow_11"
  },
  25248: {
      name: "Talbuk Hunting Bow",
      type: "Bow",
      mindmg: 102,
      maxdmg: 190,
      speed: 2.7,
      Phase: 1,
      icon: "inv_weapon_bow_16"
  },
  25249: {
      name: "Ranger's Recurved Bow",
      type: "Bow",
      mindmg: 104,
      maxdmg: 195,
      speed: 2.7,
      Phase: 1,
      icon: "inv_weapon_bow_05"
  },
  25260: {
      name: "Archer's Crossbow",
      type: "Xbow",
      mindmg: 96,
      maxdmg: 179,
      speed: 2.7,
      Phase: 1,
      icon: "inv_weapon_crossbow_02"
  },
  25262: {
      name: "Battle Damaged Crossbow",
      type: "Xbow",
      mindmg: 102,
      maxdmg: 190,
      speed: 2.7,
      Phase: 1,
      icon: "inv_weapon_crossbow_02"
  },
  25263: {
      name: "Assassins' Silent Crossbow",
      type: "Xbow",
      mindmg: 104,
      maxdmg: 195,
      speed: 2.7,
      Phase: 1,
      icon: "inv_weapon_crossbow_02"
  },
  25267: {
      name: "Rampant Crossbow",
      type: "Xbow",
      mindmg: 115,
      maxdmg: 215,
      speed: 2.7,
      Phase: 1,
      icon: "inv_weapon_crossbow_02"
  },
  25278: {
      name: "Nessingwary Longrifle",
      type: "Gun",
      mindmg: 107,
      maxdmg: 200,
      speed: 2.7,
      Phase: 1,
      icon: "inv_weapon_rifle_03"
  },
  25639: {
      name: "Hemet's Elekk Gun",
      stats: {
          MAP: 24,
          RAP: 24,
          Crit: 12
      },
      type: "Gun",
      mindmg: 103,
      maxdmg: 193,
      speed: 2.5,
      Phase: 1,
      icon: "inv_weapon_rifle_05"
  },
  25953: {
      name: "Ethereal Warp-Bow",
      stats: {
          Stam: 13,
          Crit: 14
      },
      type: "Bow",
      mindmg: 120,
      maxdmg: 181,
      speed: 2.7,
      Phase: 1,
      icon: "inv_weapon_bow_20"
  },
  27507: {
      name: "Adamantine Repeater",
      stats: {
          Agi: 15,
          Hit: 10
      },
      type: "Xbow",
      mindmg: 159,
      maxdmg: 239,
      speed: 3,
      Phase: 1,
      icon: "inv_weapon_crossbow_15"
  },
  27526: {
      name: "Skyfire Hawk-Bow",
      stats: {
          MAP: 26,
          RAP: 26,
          Hit: 14
      },
      type: "Bow",
      mindmg: 108,
      maxdmg: 202,
      speed: 2.4,
      Phase: 1,
      icon: "inv_weapon_bow_17"
  },
  27794: {
      name: "Recoilless Rocket Ripper X-54",
      stats: {
          Stam: 13,
          Crit: 16
      },
      type: "Gun",
      mindmg: 131,
      maxdmg: 244,
      speed: 2.9,
      Phase: 1,
      icon: "inv_weapon_rifle_19"
  },
  27817: {
      name: "Starbolt Longbow",
      stats: {
          Stam: 19,
          Crit: 15
      },
      type: "Bow",
      mindmg: 130,
      maxdmg: 242,
      speed: 2.8,
      Phase: 1,
      icon: "inv_weapon_bow_06"
  },
  27898: {
      name: "Wrathfire Hand-Cannon",
      stats: {
          MAP: 30,
          RAP: 30,
          Crit: 10
      },
      type: "Gun",
      mindmg: 90,
      maxdmg: 168,
      speed: 2,
      Phase: 1,
      icon: "inv_weapon_rifle_20"
  },
  27931: {
      name: "Splintermark",
      stats: {
          Stam: 7,
          MAP: 16,
          RAP: 16,
          Crit: 12
      },
      type: "Bow",
      mindmg: 93,
      maxdmg: 175,
      speed: 2.5,
      Phase: 1,
      icon: "inv_weapon_bow_04"
  },
  27987: {
      name: "Melmorta's Twilight Longbow",
      stats: {
          Stam: 15,
          MAP: 30,
          RAP: 30
      },
      type: "Bow",
      mindmg: 135,
      maxdmg: 252,
      speed: 3,
      Phase: 1,
      icon: "inv_weapon_bow_19"
  },
  28286: {
      name: "Telescopic Sharprifle",
      stats: {
          Agi: 13,
          MAP: 28,
          RAP: 28
      },
      type: "Gun",
      mindmg: 139,
      maxdmg: 259,
      speed: 3,
      Phase: 1,
      icon: "inv_weapon_rifle_22"
  },
  28294: {
      name: "Gladiator's Heavy Crossbow",
      stats: {
          Stam: 15,
          RAP: 26,
          Crit: 12,
          Resil: 12
      },
      type: "Xbow",
      mindmg: 204,
      maxdmg: 307,
      speed: 3.1,
      Phase: 1,
      icon: "inv_weapon_crossbow_10"
  },
  28397: {
      name: "Emberhawk Crossbow",
      stats: {
          MAP: 14,
          RAP: 14,
          Crit: 18
      },
      type: "Xbow",
      mindmg: 159,
      maxdmg: 239,
      speed: 3,
      Phase: 1,
      icon: "inv_weapon_crossbow_17"
  },
  28504: {
      name: "Steelhawk Crossbow",
      stats: {
          MAP: 30,
          RAP: 30,
          Hit: 16
      },
      type: "Xbow",
      mindmg: 155,
      maxdmg: 288,
      speed: 2.8,
      Phase: 1,
      icon: "inv_weapon_crossbow_18"
  },
  28581: {
      name: "Wolfslayer Sniper Rifle",
      stats: {
          Agi: 15,
          MAP: 32,
          RAP: 32
      },
      type: "Gun",
      mindmg: 149,
      maxdmg: 278,
      speed: 2.7,
      Phase: 1,
      icon: "inv_weapon_rifle_23"
  },
  28772: {
      name: "Sunfury Bow of the Phoenix",
      stats: {
          Agi: 19,
          MAP: 34,
          RAP: 34
      },
      type: "Bow",
      mindmg: 169,
      maxdmg: 314,
      speed: 2.9,
      Phase: 1,
      icon: "inv_weapon_bow_18"
  },
  29115: {
      name: "Consortium Blaster",
      stats: {
          Stam: 15,
          MAP: 28,
          RAP: 28,
          Crit: 7
      },
      type: "Gun",
      mindmg: 111,
      maxdmg: 207,
      speed: 2.4,
      Phase: 1,
      icon: "inv_weapon_rifle_07"
  },
  29151: {
      name: "Veteran's Musket",
      stats: {
          Agi: 12,
          MAP: 22,
          RAP: 22,
          Hit: 11
      },
      type: "Gun",
      mindmg: 139,
      maxdmg: 259,
      speed: 2.7,
      Phase: 1,
      icon: "inv_weapon_rifle_02"
  },
  29152: {
      name: "Marksman's Bow",
      stats: {
          Agi: 12,
          MAP: 22,
          RAP: 22,
          Hit: 11
      },
      type: "Bow",
      mindmg: 144,
      maxdmg: 269,
      speed: 2.8,
      Phase: 1,
      icon: "inv_weapon_bow_08"
  },
  29351: {
      name: "Wrathtide Longbow",
      stats: {
          Agi: 14,
          MAP: 28,
          RAP: 28
      },
      type: "Bow",
      mindmg: 158,
      maxdmg: 295,
      speed: 3,
      Phase: 1,
      icon: "inv_weapon_crossbow_16"
  },
  29949: {
      name: "Arcanite Steam-Pistol",
      stats: {
          Agi: 20,
          Hit: 19
      },
      type: "Gun",
      mindmg: 177,
      maxdmg: 329,
      speed: 2.9,
      Phase: 2,
      icon: "inv_weapon_rifle_18"
  },
  30105: {
      name: "Serpent Spine Longbow",
      stats: {
          Stam: 17,
          MAP: 38,
          RAP: 38,
          Crit: 16
      },
      type: "Bow",
      mindmg: 217,
      maxdmg: 327,
      speed: 3,
      Phase: 2,
      icon: "inv_weapon_bow_08"
  },
  30226: {
      name: "Alley's Recurve",
      stats: {
          Agi: 7,
          Stam: 10,
          MAP: 14,
          RAP: 14,
          Hit: 7
      },
      type: "Bow",
      mindmg: 97,
      maxdmg: 181,
      speed: 2.5,
      Phase: 1,
      icon: "inv_weapon_bow_03"
  },
  30279: {
      name: "Mama's Insurance",
      stats: {
          Agi: 10,
          MAP: 32,
          RAP: 32,
          Crit: 6
      },
      type: "Gun",
      mindmg: 87,
      maxdmg: 163,
      speed: 2.2,
      Phase: 1,
      icon: "inv_weapon_rifle_06"
  },
  30397: {
      name: "Spymaster's Crossbow",
      stats: {
          Agi: 7,
          Int: 5,
          MAP: 24,
          RAP: 24
      },
      type: "Xbow",
      mindmg: 104,
      maxdmg: 195,
      speed: 2.7,
      Phase: 1,
      icon: "inv_weapon_crossbow_14"
  },
  30724: {
      name: "Barrel-Blade Longrifle",
      stats: {
          Agi: 16
      },
      type: "Gun",
      sockets: [
          "Red",
          "Red"
      ],
      socketBonus: {
          Crit: 3
      },
      mindmg: 147,
      maxdmg: 275,
      speed: 2.6,
      Phase: 1,
      icon: "inv_weapon_rifle_22"
  },
  30906: {
      name: "Bristleblitz Striker",
      stats: {
          Stam: 28,
          Crit: 25
      },
      type: "Bow",
      mindmg: 201,
      maxdmg: 374,
      speed: 3,
      Phase: 3,
      icon: "inv_weapon_bow_30"
  },
  31000: {
      name: "Bloodwarder's Rifle",
      stats: {
          Agi: 8,
          Stam: 7,
          MAP: 30,
          RAP: 30
      },
      type: "Gun",
      mindmg: 114,
      maxdmg: 213,
      speed: 2.6,
      Phase: 1,
      icon: "inv_weapon_rifle_07"
  },
  31072: {
      name: "\"Lohn'goron",
      stats: {
          Str: null,
          Stam: 12,
          RAP: 26,
          Crit: 26
      },
      sockets: [
          "Bow"
      ],
      socketBonus: {},
      maxdmg: 114,
      speed: 213,
      Phase: 2.6,
      icon: "inv_weapon_bow_16"
  },
  31204: {
      name: "The Gunblade",
      stats: {
          MAP: 36,
          RAP: 36
      },
      type: "Gun",
      mindmg: 112,
      maxdmg: 210,
      speed: 2.8,
      Phase: 1,
      icon: "inv_weapon_rifle_07"
  },
  31303: {
      name: "Valanos' Longbow",
      stats: {
          Int: 10,
          MAP: 22,
          RAP: 22,
          Crit: 10
      },
      type: "Bow",
      mindmg: 130,
      maxdmg: 242,
      speed: 2.8,
      Phase: 1,
      icon: "inv_weapon_bow_04"
  },
  31323: {
      name: "Don Santos' Famous Hunting Rifle",
      type: "Gun",
      mindmg: 139,
      maxdmg: 259,
      speed: 2.7,
      Phase: 1,
      icon: "inv_weapon_rifle_21"
  },
  31416: {
      name: "Scorch Wood Bow",
      stats: {
          Agi: 7,
          Int: 5,
          MAP: 24,
          RAP: 24
      },
      type: "Bow",
      mindmg: 85,
      maxdmg: 159,
      speed: 2.2,
      Phase: 1,
      icon: "inv_weapon_bow_08"
  },
  31986: {
      name: "Merciless Gladiator's Crossbow of the Phoenix",
      stats: {
          Stam: 21,
          RAP: 26,
          Crit: 15,
          Resil: 13
      },
      type: "Xbow",
      mindmg: 211,
      maxdmg: 318,
      speed: 3,
      Phase: 2,
      icon: "inv_weapon_crossbow_10"
  },
  32253: {
      name: "Legionkiller",
      stats: {
          Agi: 21,
          Stam: 30
      },
      type: "Xbow",
      mindmg: 184,
      maxdmg: 342,
      speed: 2.9,
      Phase: 3,
      icon: "inv_weapon_crossbow_20"
  },
  32325: {
      name: "Rifle of the Stoic Guardian",
      stats: {
          Stam: 31
      },
      type: "Gun",
      mindmg: 120,
      maxdmg: 224,
      speed: 1.9,
      Phase: 3,
      icon: "inv_weapon_rifle_21"
  },
  32336: {
      name: "Black Bow of the Betrayer",
      stats: {
          MAP: 26,
          RAP: 26
      },
      type: "Bow",
      mindmg: 201,
      maxdmg: 374,
      speed: 3,
      Phase: 3,
      icon: "inv_weapon_bow_31"
  },
  32645: {
      name: "Crystalline Crossbow",
      stats: {
          Agi: 12,
          Stam: 16,
          Hit: 11
      },
      type: "Xbow",
      mindmg: 144,
      maxdmg: 269,
      speed: 2.8,
      Phase: 3,
      icon: "inv_weapon_crossbow_14"
  },
  32756: {
      name: "Gyro-Balanced Khorium Destroyer",
      stats: {
          Stam: 27
      },
      type: "Gun",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          Stam: 3
      },
      mindmg: 148,
      maxdmg: 275,
      speed: 2.8,
      Phase: 3,
      icon: "inv_weapon_rifle_13"
  },
  33006: {
      name: "Vengeful Gladiator's Heavy Crossbow",
      stats: {
          Stam: 24,
          RAP: 34,
          Crit: 16,
          Resil: 13
      },
      type: "Xbow",
      mindmg: 223,
      maxdmg: 336,
      speed: 3,
      Phase: 3,
      icon: "inv_weapon_crossbow_19"
  },
  33474: {
      name: "Ancient Amani Longbow",
      stats: {
          MAP: 38,
          RAP: 38,
          ArP: 126
      },
      type: "Bow",
      mindmg: 181,
      maxdmg: 337,
      speed: 3,
      Phase: 4,
      icon: "inv_weapon_bow_32"
  },
  33491: {
      name: "Tuskbreaker",
      stats: {
          MAP: 38,
          RAP: 38,
          Haste: 18
      },
      type: "Gun",
      mindmg: 175,
      maxdmg: 326,
      speed: 2.9,
      Phase: 4,
      icon: "inv_weapon_rifle_24"
  },
  34196: {
      name: "Golden Bow of Quel'Thalas",
      stats: {
          Agi: 18,
          MAP: 34,
          RAP: 34,
          ArP: 175
      },
      type: "Bow",
      mindmg: 204,
      maxdmg: 380,
      speed: 3,
      Phase: 5,
      icon: "inv_weapon_bow_38"
  },
  34334: {
      name: "\"Thori'dal",
      stats: {
          Str: null,
          Stam: 17,
          RAP: 34,
          Crit: 34,
          Hit: 16,
          Haste: 112
      },
      sockets: [
          "Bow"
      ],
      socketBonus: {},
      maxdmg: 356,
      speed: 524,
      Phase: 2.7,
      icon: "inv_weapon_bow_39"
  },
  34529: {
      name: "Vengeful Gladiator's Longbow",
      stats: {
          Stam: 24,
          RAP: 34,
          Crit: 16,
          Resil: 13
      },
      type: "Bow",
      mindmg: 223,
      maxdmg: 336,
      speed: 3,
      Phase: 3,
      icon: "inv_weapon_bow_20"
  },
  34530: {
      name: "Vengeful Gladiator's Rifle",
      stats: {
          Stam: 24,
          RAP: 34,
          Crit: 16,
          Resil: 13
      },
      type: "Gun",
      mindmg: 223,
      maxdmg: 336,
      speed: 3,
      Phase: 3,
      icon: "inv_weapon_rifle_15"
  },
  34674: {
      name: "Truestrike Crossbow",
      stats: {
          Agi: 10,
          Stam: 12,
          Int: 6,
          MAP: 20,
          RAP: 20
      },
      type: "Bow",
      mindmg: 138,
      maxdmg: 207,
      speed: 2.6,
      Phase: 1,
      icon: "inv_weapon_crossbow_14"
  },
  34892: {
      name: "Crossbow of Relentless Strikes",
      stats: {
          MAP: 32,
          RAP: 32,
          Crit: 18,
          Hit: 14
      },
      type: "Xbow",
      mindmg: 182,
      maxdmg: 339,
      speed: 2.8,
      Phase: 5,
      icon: "inv_weapon_crossbow_26"
  }
}

const RINGS = {
  22961: {
      name: "Band of Reanimation",
      stats: {
          Agi: 22,
          MAP: 46,
          RAP: 46
      },
      Location: "Naxx",
      Phase: 1,
      icon: "inv_jewelry_ring_49naxxramas"
  },
  23067: {
      name: "Ring of the Cryptstalker",
      set: 530,
      stats: {
          Agi: 20,
          MAP: 40,
          RAP: 40,
          MP5: 6
      },
      Location: "Naxx",
      Phase: 1,
      icon: "inv_jewelry_ring_51naxxramas"
  },
  24074: {
      name: "Fel Iron Blood Ring",
      stats: {
          MAP: 48,
          RAP: 48
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_jewelry_ring_39"
  },
  24088: {
      name: "Delicate Eternium Ring",
      stats: {
          Agi: 25,
          Stam: 15
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_jewelry_ring_65"
  },
  24089: {
      name: "Blazing Eternium Band",
      stats: {
          Stam: 27,
          Int: 18,
          MP5: 8
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_jewelry_ring_55"
  },
  24151: {
      name: "Mok'Nathal Clan Ring",
      stats: {
          Stam: 16,
          Resil: 14
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_jewelry_ring_17"
  },
  25499: {
      name: "Felblood Band",
      stats: {
          Agi: 12,
          Stam: 18,
          MAP: 26,
          RAP: 26
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_jewelry_ring_04"
  },
  25779: {
      name: "Warmaul Slayer's Band",
      stats: {
          Agi: 14,
          MAP: 28,
          RAP: 28,
          Crit: 14
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_jewelry_ring_19"
  },
  25804: {
      name: "Naliko's Revenge",
      stats: {
          Stam: 27,
          MAP: 34,
          RAP: 34,
          Crit: 18
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_jewelry_ring_16"
  },
  25962: {
      name: "Longstrider's Loop",
      stats: {
          Agi: 16,
          Stam: 15,
          MAP: 32,
          RAP: 32,
          Hit: 11
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_jewelry_ring_44"
  },
  27413: {
      name: "Ring of the Exarchs",
      stats: {
          Agi: 17,
          Stam: 24,
          MAP: 34,
          RAP: 34
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_jewelry_ring_34"
  },
  27453: {
      name: "Averinn's Ring of Slaying",
      stats: {
          Agi: 22,
          Stam: 18,
          MAP: 38,
          RAP: 38
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_jewelry_ring_38"
  },
  27733: {
      name: "Warden's Ring of Precision",
      stats: {
          Agi: 12,
          MAP: 26,
          RAP: 26,
          Hit: 12
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_jewelry_ring_43"
  },
  27761: {
      name: "Ring of the Shadow Deeps",
      stats: {
          Stam: 15,
          MAP: 24,
          RAP: 24,
          Crit: 21,
          Hit: 13
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_jewelry_ring_ahnqiraj_01"
  },
  27833: {
      name: "Band of the Victor",
      stats: {
          Stam: 25,
          Crit: 13
      },
      Location: "Reputation",
      sockets: [
          "Red"
      ],
      socketBonus: {
          MAP: 4,
          RAP: 4
      },
      Phase: 1,
      icon: "inv_jewelry_ring_36"
  },
  27869: {
      name: "Soulpriest's Ring of Resolve",
      stats: {
          Stam: 34,
          Resil: 24
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_jewelry_ring_38"
  },
  27925: {
      name: "Ravenclaw Band",
      stats: {
          Agi: 20,
          Stam: 15,
          MAP: 30,
          RAP: 30,
          Hit: 13
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_jewelry_ring_16"
  },
  28246: {
      name: "Band of Triumph",
      stats: {
          Stam: 21,
          MAP: 32,
          RAP: 32,
          Crit: 16,
          Resil: 16
      },
      Location: "Honor Reward",
      Phase: 1,
      icon: "inv_jewelry_ring_60"
  },
  28323: {
      name: "Ring of Umbral Doom",
      stats: {
          Stam: 18,
          MAP: 40,
          RAP: 40,
          Crit: 20
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_jewelry_ring_16"
  },
  28553: {
      name: "Band of the Exorcist",
      stats: {
          Stam: 24,
          MAP: 34,
          RAP: 34,
          Crit: 16,
          Hit: 10,
          Resil: 11
      },
      Location: "Reputation",
      Phase: 1,
      icon: "inv_jewelry_ring_60"
  },
  28649: {
      name: "Garona's Signet Ring",
      stats: {
          Agi: 20,
          Stam: 25,
          MAP: 40,
          RAP: 40,
          Hit: 18
      },
      Location: "Karazhan",
      Phase: 1,
      icon: "inv_jewelry_ring_47"
  },
  28757: {
      name: "Ring of a Thousand Marks",
      stats: {
          Stam: 21,
          MAP: 44,
          RAP: 44,
          Crit: 23,
          Hit: 19
      },
      Location: "Karazhan",
      Phase: 1,
      icon: "inv_jewelry_ring_ahnqiraj_05"
  },
  28791: {
      name: "Ring of the Recalcitrant",
      stats: {
          Agi: 24,
          Stam: 27,
          MAP: 54,
          RAP: 54
      },
      Location: "Magtheridon",
      Phase: 1,
      icon: "inv_jewelry_ring_71"
  },
  29128: {
      name: "Lightwarden's Band",
      stats: {
          Agi: 18,
          Stam: 27,
          MAP: 38,
          RAP: 38
      },
      Location: "Reputation",
      Phase: 1,
      icon: "inv_jewelry_ring_48naxxramas"
  },
  29280: {
      name: "Violet Signet - Friendly",
      stats: {
          Stam: 19,
          MAP: 42,
          RAP: 42,
          Hit: 18
      },
      Location: "Karazhan",
      Phase: 1,
      icon: "inv_jewelry_ring_62"
  },
  29281: {
      name: "Violet Signet - Honored",
      stats: {
          Stam: 24,
          MAP: 50,
          RAP: 50,
          Hit: 22
      },
      Location: "Karazhan",
      Phase: 1,
      icon: "inv_jewelry_ring_62"
  },
  29282: {
      name: "Violet Signet - Revered",
      stats: {
          Stam: 27,
          MAP: 52,
          RAP: 52,
          Hit: 24
      },
      Location: "Karazhan",
      Phase: 1,
      icon: "inv_jewelry_ring_62"
  },
  29283: {
      name: "Violet Signet of the Master Assassin",
      stats: {
          Stam: 28,
          MAP: 56,
          RAP: 56,
          Hit: 25
      },
      Location: "Karazhan",
      Phase: 1,
      icon: "inv_jewelry_ring_62"
  },
  29298: {
      name: "Band of Eternity - Friendly",
      stats: {
          Agi: 25,
          Stam: 37,
          MAP: 50,
          RAP: 50
      },
      Location: "Mount Hyjal",
      Phase: 2,
      icon: "inv_jewelry_ring_54"
  },
  29299: {
      name: "Band of Eternity - Honored",
      stats: {
          Agi: 27,
          Stam: 40,
          MAP: 56,
          RAP: 56
      },
      Location: "Mount Hyjal",
      Phase: 3,
      icon: "inv_jewelry_ring_54"
  },
  29300: {
      name: "Band of Eternity - Revered",
      stats: {
          Agi: 29,
          Stam: 43,
          MAP: 60,
          RAP: 60
      },
      Location: "Mount Hyjal",
      Phase: 3,
      icon: "inv_jewelry_ring_54"
  },
  29301: {
      name: "Band of the Eternal Champion",
      stats: {
          Agi: 29,
          Stam: 43,
          MAP: 60,
          RAP: 60
      },
      Location: "Mount Hyjal",
      Phase: 3,
      icon: "inv_jewelry_ring_55"
  },
  29379: {
      name: "Ring of Arathi Warlords",
      stats: {
          Stam: 24,
          MAP: 46,
          RAP: 46,
          Crit: 23
      },
      Location: "Badge Reward",
      Phase: 1,
      icon: "inv_jewelry_ring_ahnqiraj_01"
  },
  29997: {
      name: "Band of the Ranger-General",
      stats: {
          Stam: 27,
          MAP: 56,
          RAP: 56,
          Crit: 28,
          Hit: 18
      },
      Location: "The Eye",
      Phase: 2,
      icon: "inv_jewelry_ring_55"
  },
  30052: {
      name: "Ring of Lethality",
      stats: {
          Agi: 24,
          Stam: 19,
          MAP: 50,
          RAP: 50,
          Hit: 19
      },
      Location: "Serpentshrine Cavern",
      Phase: 2,
      icon: "inv_jewelry_ring_51naxxramas"
  },
  30339: {
      name: "Protectorate Assassin's Ring",
      stats: {
          Str: 16,
          Agi: 15,
          Stam: 13,
          Hit: 12
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_jewelry_ring_03"
  },
  30738: {
      name: "Ring of Reciprocity",
      stats: {
          RAP: 62,
          Crit: 19,
          Hit: 15
      },
      Location: "Outdoor Boss",
      Phase: 1,
      icon: "inv_jewelry_ring_04"
  },
  30860: {
      name: "Kaylaan's Signet",
      stats: {
          Agi: 15,
          MAP: 50,
          RAP: 50,
          Hit: 10
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_jewelry_ring_34"
  },
  30973: {
      name: "Band of Anguish",
      stats: {
          Agi: 13,
          MAP: 50,
          RAP: 50,
          Hit: 10
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_jewelry_ring_44"
  },
  31077: {
      name: "Slayer's Mark of the Redemption",
      stats: {
          Agi: 15,
          MAP: 50,
          RAP: 50,
          Hit: 10
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_jewelry_ring_39"
  },
  31277: {
      name: "Pathfinder's Band",
      stats: {
          Agi: 25,
          MAP: 34,
          RAP: 34
      },
      Location: "World Drop",
      Phase: 1,
      icon: "inv_jewelry_ring_ahnqiraj_01"
  },
  31326: {
      name: "Truestrike Ring",
      stats: {
          Agi: 21,
          MAP: 40,
          RAP: 40,
          MP5: 7
      },
      Location: "World Drop",
      Phase: 1,
      icon: "inv_jewelry_ring_58"
  },
  31381: {
      name: "Aggressor's Mark of the Sha'tar",
      stats: {
          MAP: 24,
          RAP: 24,
          Crit: 29
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_jewelry_ring_65"
  },
  31527: {
      name: "Leafbeard Ring",
      stats: {
          Agi: 12,
          MAP: 38,
          RAP: 38,
          Hit: 12
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_jewelry_ring_37"
  },
  31729: {
      name: "Heirloom Signet of Valor",
      stats: {
          Agi: 11,
          Stam: 10,
          MAP: 40,
          RAP: 40
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_jewelry_ring_10"
  },
  31920: {
      name: "Shaffar's Band of Brutality",
      stats: {
          MAP: 40,
          RAP: 40,
          Crit: 20,
          Hit: 19
      },
      Location: "Dungeon",
      Phase: 3,
      icon: "inv_jewelry_ring_51naxxramas"
  },
  32081: {
      name: "Eye of the Stalker",
      stats: {
          Stam: 31,
          MAP: 60,
          RAP: 60
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_jewelry_ring_45"
  },
  32266: {
      name: "Ring of Deceitful Intent",
      stats: {
          Agi: 21,
          Stam: 42,
          MAP: 58,
          RAP: 58,
          Hit: 19
      },
      Location: "Black Temple",
      Phase: 3,
      icon: "inv_jewelry_ring_68"
  },
  32497: {
      name: "Stormrage Signet Ring",
      stats: {
          Stam: 33,
          MAP: 66,
          RAP: 66,
          Hit: 30,
          ArP: 126
      },
      Location: "Black Temple",
      Phase: 3,
      icon: "inv_jewelry_ring_67"
  },
  32526: {
      name: "Band of Devastation",
      stats: {
          Stam: 44,
          MAP: 66,
          RAP: 66,
          Haste: 31
      },
      Location: "Black Temple",
      Phase: 3,
      icon: "inv_jewelry_ring_35"
  },
  32942: {
      name: "Ring of the Overseer",
      stats: {
          Agi: 16,
          MAP: 56,
          RAP: 56,
          Hit: 12
      },
      Location: "Outdoor Boss",
      Phase: 1,
      icon: "inv_jewelry_ring_22"
  },
  33055: {
      name: "Band of Vile Aggression",
      stats: {
          Stam: 37,
          MAP: 50,
          RAP: 50,
          Resil: 25
      },
      Location: "Serpentshrine Cavern",
      Phase: 2,
      icon: "inv_jewelry_ring_71"
  },
  33057: {
      name: "Veteran's Band of Triumph",
      stats: {
          Stam: 30,
          MAP: 42,
          RAP: 42,
          Crit: 22,
          Resil: 22
      },
      Location: "Honor Reward",
      Phase: 1,
      icon: "inv_jewelry_ring_60"
  },
  33496: {
      name: "Signet of Primal Wrath",
      stats: {
          Agi: 28,
          Stam: 30,
          MAP: 58,
          RAP: 58,
          ArP: 126
      },
      Location: "Zul'Aman",
      Phase: 4,
      icon: "inv_jewelry_ring_44"
  },
  33500: {
      name: "Signet of Eternal Life",
      stats: {
          Stam: 54,
          Resil: 37
      },
      Location: "Zul'Aman",
      Phase: 4,
      icon: "inv_jewelry_ring_61"
  },
  33919: {
      name: "Vindicator's Band of Triumph",
      stats: {
          Stam: 34,
          MAP: 44,
          RAP: 44,
          Crit: 26,
          Resil: 22,
          ArP: 56
      },
      Location: "Honor Reward",
      Phase: 2,
      icon: "inv_jewelry_ring_60"
  },
  34075: {
      name: "Ring of Ghoulish Delight",
      stats: {
          Stam: 31,
          MAP: 60,
          RAP: 60
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_misc_bag_28_halloween"
  },
  34189: {
      name: "Band of Ruinous Delight",
      stats: {
          Stam: 30,
          MAP: 66,
          RAP: 66,
          Crit: 32,
          ArP: 161
      },
      Location: "Sunwell",
      Phase: 5,
      icon: "inv_jewelry_ring_36"
  },
  34361: {
      name: "Hard Khorium Band",
      stats: {
          Agi: 30,
          Stam: 42,
          MAP: 58,
          RAP: 58,
          Haste: 28
      },
      Location: "Crafting",
      Phase: 5,
      icon: "inv_jewelry_ring_55"
  },
  34798: {
      name: "Band of Celerity",
      stats: {
          Stam: 25,
          MAP: 40,
          RAP: 40,
          Haste: 18
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_jewelry_ring_16"
  },
  34887: {
      name: "Angelista's Revenge",
      stats: {
          Agi: 29,
          Stam: 28,
          MAP: 58,
          RAP: 58,
          ArP: 126
      },
      Location: "Badge Reward",
      Phase: 5,
      icon: "inv_jewelry_ring_79"
  }
}

const SHOULDERS = {
  22439: {
      name: "Cryptstalker Spaulders",
      set: 530,
      stats: {
          Agi: 20,
          Stam: 23,
          Int: 10,
          MAP: 38,
          RAP: 38,
          Crit: 14
      },
      Location: "Naxx",
      Phase: 1,
      icon: "inv_shoulder_14"
  },
  24366: {
      name: "Scorpid-Sting Mantle",
      stats: {
          Agi: 21,
          Stam: 12,
          MAP: 30,
          RAP: 30,
          MP5: 6
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Blue"
      ],
      socketBonus: {
          Int: 3
      },
      Phase: 1,
      icon: "inv_shoulder_03"
  },
  24398: {
      name: "Mantle of the Dusk-Dweller",
      stats: {
          Agi: 20,
          Stam: 21,
          MAP: 40,
          RAP: 40,
          Hit: 13
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_shoulder_12"
  },
  25560: {
      name: "Lo'ap's Muck Diving Pads",
      stats: {
          Agi: 13,
          Stam: 18,
          Int: 11,
          MAP: 24,
          RAP: 24
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_shoulder_07"
  },
  27434: {
      name: "Mantle of Perenolde",
      stats: {
          Stam: 24,
          MAP: 20,
          RAP: 20,
          Crit: 23,
          Hit: 23
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Red"
      ],
      socketBonus: {},
      Phase: 1,
      icon: "inv_shoulder_35"
  },
  27713: {
      name: "Pauldrons of Desolation",
      set: 660,
      stats: {
          Agi: 23,
          Stam: 16,
          Int: 19,
          Hit: 17
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Red"
      ],
      socketBonus: {
          Hit: 3
      },
      Phase: 1,
      icon: "inv_shoulder_20"
  },
  27776: {
      name: "Shoulderpads of Assassination",
      stats: {
          Agi: 25,
          Stam: 25,
          MAP: 42,
          RAP: 42
      },
      Location: "Dungeon",
      sockets: [
          "Yellow",
          "Yellow"
      ],
      socketBonus: {
          Stam: 4
      },
      Phase: 1,
      icon: "inv_shoulder_24"
  },
  27797: {
      name: "Wastewalker Shoulderpads",
      set: 659,
      stats: {
          Agi: 25,
          Stam: 13,
          MAP: 34,
          RAP: 34,
          Hit: 16
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Blue"
      ],
      socketBonus: {
          Crit: 3
      },
      Phase: 1,
      icon: "inv_shoulder_15"
  },
  27801: {
      name: "Beast Lord Mantle",
      set: 650,
      stats: {
          Agi: 25,
          Int: 12,
          MAP: 34,
          RAP: 34,
          MP5: 5
      },
      Location: "Dungeon",
      sockets: [
          "Yellow",
          "Red"
      ],
      socketBonus: {
          Stam: 4
      },
      Phase: 1,
      icon: "inv_shoulder_23"
  },
  27995: {
      name: "Sun-Gilded Shouldercaps",
      stats: {
          Agi: 25,
          Stam: 26,
          MAP: 48,
          RAP: 48,
          Hit: 15
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_shoulder_08"
  },
  28306: {
      name: "Towering Mantle of the Hunt",
      stats: {
          Stam: 21,
          Int: 23,
          MAP: 48,
          RAP: 48,
          Crit: 21
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_shoulder_11"
  },
  28333: {
      name: "Gladiator's Chain Spaulders",
      set: 586,
      stats: {
          Agi: 27,
          Stam: 39,
          Int: 8,
          MAP: 18,
          RAP: 18,
          Crit: 11,
          Resil: 18
      },
      Location: "Honor Reward",
      sockets: [
          "Red",
          "Yellow"
      ],
      socketBonus: {
          Resil: 3
      },
      Phase: 1,
      icon: "inv_shoulder_29"
  },
  28344: {
      name: "Wyrmfury Pauldrons",
      stats: {
          Agi: 25,
          Stam: 18,
          Int: 20,
          MAP: 50,
          RAP: 50
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_shoulder_18"
  },
  28589: {
      name: "Beast-tamer's Shoulders",
      stats: {
          Agi: 39,
          Stam: 38,
          MAP: 78,
          RAP: 78
      },
      Location: "Mount Hyjal",
      Phase: 3,
      icon: "inv_shoulder_36"
  },
  28755: {
      name: "Bladed Shoulderpads of the Merciless",
      stats: {
          Stam: 30,
          MAP: 58,
          RAP: 58,
          Crit: 21,
          Hit: 13
      },
      Location: "Karazhan",
      sockets: [
          "Yellow",
          "Yellow"
      ],
      socketBonus: {
          Hit: 3
      },
      Phase: 1,
      icon: "inv_shoulder_29"
  },
  29084: {
      name: "Demon Stalker Shoulderguards",
      set: 651,
      stats: {
          Stam: 23,
          Int: 23,
          MAP: 44,
          RAP: 44,
          Crit: 19,
          MP5: 5
      },
      Location: "Gruul's Lair",
      sockets: [
          "Red",
          "Yellow"
      ],
      socketBonus: {
          Int: 3
      },
      Phase: 1,
      icon: "inv_shoulder_14"
  },
  29147: {
      name: "Talbuk Hide Spaulders",
      stats: {
          Agi: 20,
          MAP: 70,
          RAP: 70,
          Hit: 15
      },
      Location: "Reputation Reward",
      Phase: 1,
      icon: "inv_shoulder_07"
  },
  29148: {
      name: "Blackened Leather Spaulders",
      stats: {
          Agi: 20,
          MAP: 70,
          RAP: 70,
          Hit: 15
      },
      Location: "Reputation Reward",
      Phase: 1,
      icon: "inv_shoulder_25"
  },
  29326: {
      name: "Consortium Mantle of Phasing",
      stats: {
          MAP: 46,
          RAP: 46,
          Crit: 21,
          MP5: 9
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_shoulder_03"
  },
  30055: {
      name: "Shoulderpads of the Stranger",
      stats: {
          Agi: 33,
          Stam: 28,
          MAP: 60,
          RAP: 60,
          Crit: 16
      },
      Location: "Serpentshrine Cavern",
      sockets: [
          "Red"
      ],
      socketBonus: {
          Agi: 2
      },
      Phase: 2,
      icon: "inv_shoulder_23"
  },
  30085: {
      name: "Mantle of the Tireless Tracker",
      stats: {
          Agi: 22,
          Int: 23,
          MAP: 64,
          RAP: 64,
          Crit: 33
      },
      Location: "Serpentshrine Cavern",
      Phase: 2,
      icon: "inv_shoulder_27"
  },
  30143: {
      name: "Rift Stalker Mantle",
      set: 652,
      stats: {
          Agi: 26,
          Stam: 26,
          Int: 24,
          MAP: 52,
          RAP: 52,
          Hit: 13
      },
      Location: "The Eye",
      sockets: [
          "Red",
          "Red"
      ],
      socketBonus: {
          Stam: 4
      },
      Phase: 2,
      icon: "inv_shoulder_14"
  },
  30295: {
      name: "Exotic Spiked Shoulders",
      stats: {
          Agi: 28,
          Stam: 16,
          MAP: 32,
          RAP: 32
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_shoulder_18"
  },
  30333: {
      name: "Spaulders of the Protectorate",
      stats: {
          Stam: 15,
          Int: 14,
          MAP: 28,
          RAP: 28,
          MP5: 5
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_shoulder_18"
  },
  30892: {
      name: "Beastmaw Pauldrons",
      stats: {
          Agi: 24,
          Stam: 22,
          Int: 23,
          MAP: 46,
          RAP: 46,
          MP5: 8
      },
      Location: "Karazhan",
      Phase: 1,
      icon: "inv_shoulder_59"
  },
  30917: {
      name: "Razorfury Mantle",
      stats: {
          Agi: 28,
          Stam: 55,
          MAP: 76,
          RAP: 76,
          Crit: 23
      },
      Location: "Mount Hyjal",
      Phase: 3,
      icon: "inv_shoulder_67"
  },
  30952: {
      name: "Earthmender's Crimson Spaulders",
      stats: {
          Agi: 16,
          Stam: 12,
          Int: 8,
          MAP: 60,
          RAP: 60
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_shoulder_23"
  },
  31006: {
      name: "Gronnstalker's Spaulders",
      set: 669,
      stats: {
          Agi: 34,
          Stam: 39,
          Int: 17,
          MAP: 68,
          RAP: 68,
          ArP: 126
      },
      Location: "Black Temple",
      sockets: [
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          Crit: 3
      },
      Phase: 3,
      icon: "inv_shoulder_59"
  },
  31427: {
      name: "Sylvanaar Defender's Pauldrons",
      stats: {
          MAP: 52,
          RAP: 52,
          Crit: 15,
          MP5: 4
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_shoulder_24"
  },
  31786: {
      name: "Blacksting Shoulders",
      stats: {
          Agi: 16,
          Int: 16,
          MAP: 32,
          RAP: 32
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_shoulder_25"
  },
  31817: {
      name: "Dragonbone Shoulders",
      stats: {
          Stam: 15,
          MAP: 38,
          RAP: 38,
          Crit: 19,
          MP5: 4
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_shoulder_04"
  },
  31964: {
      name: "Merciless Gladiator's Chain Spaulders",
      set: 706,
      stats: {
          Agi: 32,
          Stam: 45,
          Int: 10,
          MAP: 24,
          RAP: 24,
          Crit: 14,
          Resil: 21
      },
      Location: "Arena Reward",
      sockets: [
          "Red",
          "Yellow"
      ],
      socketBonus: {
          Resil: 3
      },
      Phase: 2,
      icon: "inv_shoulder_29"
  },
  32080: {
      name: "Mantle of Shadowy Embrace",
      stats: {
          Agi: 39,
          Stam: 33,
          MAP: 34,
          RAP: 34
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_shoulder_25"
  },
  32264: {
      name: "Shoulders of the Hidden Predator",
      stats: {
          Agi: 38,
          Stam: 37,
          MAP: 76,
          RAP: 76,
          Crit: 26
      },
      Location: "Black Temple",
      Phase: 3,
      icon: "inv_shoulder_59"
  },
  32377: {
      name: "Mantle of Darkness",
      stats: {
          Stam: 34,
          MAP: 94,
          RAP: 94,
          Crit: 33,
          Hit: 22
      },
      Location: "Black Temple",
      Phase: 3,
      icon: "inv_shoulder_67"
  },
  32575: {
      name: "Shoulders of Lightning Reflexes",
      stats: {
          Agi: 27,
          Stam: 19,
          Int: 21,
          MAP: 74,
          RAP: 74,
          Haste: 37
      },
      Location: "Crafting",
      Phase: 3,
      icon: "inv_shoulder_66"
  },
  32581: {
      name: "Swiftstrike Shoulders",
      stats: {
          Agi: 29,
          Stam: 34,
          MAP: 74,
          RAP: 74,
          Haste: 38
      },
      Location: "Crafting",
      Phase: 3,
      icon: "inv_shoulder_23"
  },
  33206: {
      name: "Pauldrons of Primal Fury",
      stats: {
          Agi: 28,
          Stam: 30,
          MAP: 58,
          RAP: 58,
          Hit: 20
      },
      Location: "Zul'Aman",
      sockets: [
          "Yellow",
          "Red"
      ],
      socketBonus: {
          Stam: 4
      },
      Phase: 4,
      icon: "inv_shoulder_85"
  },
  33300: {
      name: "Shoulderpads of Dancing Blades",
      stats: {
          Agi: 33,
          Stam: 39,
          MAP: 68,
          RAP: 68,
          Hit: 16
      },
      Location: "Zul'Aman",
      Phase: 4,
      icon: "inv_shoulder_24"
  },
  33668: {
      name: "Vengeful Gladiator's Chain Spaulders",
      set: 723,
      stats: {
          Agi: 35,
          Stam: 49,
          Int: 12,
          MAP: 30,
          RAP: 30,
          Crit: 16,
          Resil: 21
      },
      Location: "Arena Reward",
      sockets: [
          "Red",
          "Yellow"
      ],
      socketBonus: {
          Resil: 3
      },
      Phase: 3,
      icon: "inv_shoulder_59"
  },
  34194: {
      name: "Mantle of the Golden Forest",
      stats: {
          Agi: 40,
          Stam: 40,
          MAP: 90,
          RAP: 90,
          ArP: 154
      },
      Location: "Sunwell",
      sockets: [
          "Red",
          "Red"
      ],
      socketBonus: {
          Agi: 3
      },
      Phase: 5,
      icon: "inv_shoulder_90"
  },
  34195: {
      name: "Shoulderpads of Vehemence",
      stats: {
          Agi: 33,
          Stam: 45,
          MAP: 90,
          RAP: 90,
          Hit: 26,
          Haste: 30
      },
      Location: "Sunwell",
      Phase: 5,
      icon: "inv_shoulder_88"
  },
  34613: {
      name: "Shoulderpads of the Silvermoon Retainer",
      stats: {
          Agi: 35,
          Stam: 32,
          MAP: 62,
          RAP: 62,
          Hit: 23
      },
      Location: "Dungeon",
      Phase: 5,
      icon: "inv_shoulder_07"
  },
  34994: {
      name: "Brutal Gladiator's Chain Spaulders",
      set: '-7',
      stats: {
          Agi: 39,
          Stam: 53,
          Int: 16,
          MAP: 38,
          RAP: 38,
          Crit: 20,
          Resil: 21
      },
      Location: "Arena Reward",
      sockets: [
          "Red",
          "Yellow"
      ],
      socketBonus: {
          Resil: 3
      },
      Phase: 5,
      icon: "inv_shoulder_90"
  },
  35380: {
      name: "Stalker's Chain Spaulders",
      set: 749,
      stats: {
          Agi: 14,
          Stam: 31,
          Int: 4,
          MAP: 22,
          RAP: 22,
          Crit: 17,
          Resil: 16
      },
      Location: "Reputation Reward",
      sockets: [
          "Red",
          "Yellow"
      ],
      socketBonus: {
          Resil: 3
      },
      Phase: 1,
      icon: "inv_shoulder_29"
  }
}

const TRINKETS = {
  13503: {
      name: "Alchemist's Stone",
      stats: {
          Str: 15,
          Agi: 15,
          Stam: 15,
          Int: 15
      },
      Location: "Crafting",
      Phase: 1,
      icon: "spell_holy_pureofheart"
  },
  18846: {
      name: "Insignia of the Horde",
      stats: {
          Resil: 20
      },
      Location: "Honor Reward",
      Phase: 1,
      icon: "inv_jewelry_trinketpvp_02"
  },
  21670: {
      name: "Badge of the Swarmguard",
      Location: "Vanilla",
      aura: {
          duration: 30,
          cd: 180,
          PPM: 12,
          proc_type: 2
      },
      Phase: 1,
      icon: "inv_misc_ahnqirajtrinket_04"
  },
  21789: {
      name: "Figurine - Dark Iron Scorpid",
      stats: {
          Agi: 9
      },
      Location: "Crafting",
      Phase: 1,
      icon: "ability_hunter_pet_crab"
  },
  23041: {
      name: "Slayer's Crest",
      stats: {
          MAP: 64,
          RAP: 64
      },
      Location: "Naxx",
      aura: {
          stats: {
              MAP: 260,
              RAP: 260
          },
          duration: 20,
          cd: 120
      },
      Phase: 1,
      icon: "inv_trinket_naxxramas03"
  },
  23206: {
      name: "Mark of the Champion",
      Location: "Naxx",
      Phase: 1,
      icon: "inv_misc_token_argentdawn2"
  },
  23835: {
      name: "Gnomish Poultryizer",
      stats: {
          Stam: 45
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_misc_enggizmos_06"
  },
  23836: {
      name: "Goblin Rocket Launcher",
      stats: {
          Stam: 45
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_gizmo_rocketlauncher"
  },
  24124: {
      name: "Figurine - Felsteel Boar",
      stats: {
          MAP: 68,
          RAP: 68
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_jewelcrafting_truesilverboar"
  },
  24128: {
      name: "Figurine - Nightseye Panther",
      stats: {
          MAP: 54,
          RAP: 54
      },
      Location: "Crafting",
      aura: {
          stats: {
              MAP: 320,
              RAP: 320
          },
          duration: 12,
          cd: 180
      },
      Phase: 1,
      icon: "inv_jewelcrafting_blackpearlpanther"
  },
  25628: {
      name: "Ogre Mauler's Badge",
      stats: {
          MAP: 48,
          RAP: 48
      },
      Location: "Quest Reward",
      aura: {
          stats: {
              MAP: 185,
              RAP: 185
          },
          duration: 15,
          cd: 120
      },
      Phase: 1,
      icon: "inv_jewelry_talisman_04"
  },
  25633: {
      name: "Uniting Charm",
      stats: {
          MAP: 48,
          RAP: 48
      },
      Location: "Quest Reward",
      aura: {
          stats: {
              MAP: 185,
              RAP: 185
          },
          duration: 15,
          cd: 90
      },
      Phase: 1,
      icon: "inv_jewelry_talisman_04"
  },
  25937: {
      name: "Terokkar Tablet of Precision",
      stats: {
          Hit: 22
      },
      Location: "Quest Reward",
      aura: {
          stats: {
              MAP: 140,
              RAP: 140
          },
          duration: 15,
          cd: 90
      },
      Phase: 1,
      icon: "inv_misc_stonetablet_11"
  },
  27416: {
      name: "Fetish of the Fallen",
      stats: {
          MAP: 56,
          RAP: 56
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_helmet_45"
  },
  27921: {
      name: "Mark of Conquest",
      stats: {
          MAP: 54,
          RAP: 54
      },
      Location: "PvP Reward",
      aura: {
          is_proc: "Yes",
          proc_chance: 0.13,
          proc_type: 2
      },
      Phase: 1,
      icon: "inv_misc_armorkit_12"
  },
  28034: {
      name: "Hourglass of the Unraveller",
      stats: {
          Crit: 32
      },
      Location: "Dungeon",
      aura: {
          is_proc: "Yes",
          stats: {
              MAP: 300,
              RAP: 300
          },
          duration: 10,
          cd: 50,
          proc_chance: 0.1,
          proc_type: 1
      },
      Phase: 1,
      icon: "inv_gizmo_khoriumpowercore"
  },
  28041: {
      name: "Bladefist's Breadth",
      stats: {
          Crit: 26
      },
      Location: "Quest Reward",
      aura: {
          stats: {
              MAP: 200,
              RAP: 200
          },
          duration: 15,
          cd: 90
      },
      Phase: 1,
      icon: "inv_datacrystal06"
  },
  28121: {
      name: "Icon of Unyielding Courage",
      stats: {
          Hit: 30
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_brd_banner"
  },
  28237: {
      name: "Medallion of the Alliance",
      stats: {
          Resil: 20
      },
      Location: "Honor Reward",
      Phase: 1,
      icon: "inv_jewelry_trinketpvp_01"
  },
  28243: {
      name: "Medallion of the Horde",
      stats: {
          Resil: 20
      },
      Location: "Honor Reward",
      Phase: 1,
      icon: "inv_jewelry_trinketpvp_02"
  },
  28288: {
      name: "Abacus of Violent Odds",
      stats: {
          MAP: 64,
          RAP: 64
      },
      Location: "Dungeon",
      aura: {
          stats: {
              Haste: 260
          },
          duration: 10,
          cd: 120
      },
      Phase: 1,
      icon: "inv_misc_enggizmos_18"
  },
  28579: {
      name: "Romulo's Poison Vial",
      stats: {
          Hit: 35
      },
      Location: "Karazhan",
      aura: {
          is_proc: "Yes",
          PPM: 1,
          proc_type: 2
      },
      Phase: 1,
      icon: "inv_poison_mindnumbing"
  },
  28830: {
      name: "Dragonspine Trophy",
      stats: {
          MAP: 40,
          RAP: 40
      },
      Location: "Gruul's Lair",
      aura: {
          is_proc: "Yes",
          stats: {
              Haste: 325
          },
          duration: 10,
          cd: 20,
          PPM: 1,
          proc_type: 2
      },
      Phase: 1,
      icon: "inv_misc_bone_03"
  },
  29181: {
      name: "Timelapse Shard",
      stats: {
          Stam: 27,
          Resil: 24
      },
      Location: "Reputation Reward",
      Phase: 1,
      icon: "inv_datacrystal02"
  },
  29383: {
      name: "Bloodlust Brooch",
      stats: {
          MAP: 72,
          RAP: 72
      },
      Location: "Badge Reward",
      aura: {
          stats: {
              MAP: 278,
              RAP: 278
          },
          duration: 20,
          cd: 120
      },
      Phase: 1,
      icon: "inv_misc_monsterscales_15"
  },
  29776: {
      name: "Core of Ar'kelos",
      stats: {
          MAP: 52,
          RAP: 52
      },
      Location: "Quest Reward",
      aura: {
          stats: {
              MAP: 200,
              RAP: 200
          },
          duration: 20,
          cd: 120
      },
      Phase: 1,
      icon: "spell_nature_abolishmagic"
  },
  30448: {
      name: "Talon of Al'ar",
      Location: "The Eye",
      aura: {
          is_proc: "Yes"
      },
      Phase: 2,
      icon: "spell_fire_soulburn"
  },
  30620: {
      name: "Spyglass of the Hidden Fleet",
      stats: {
          Stam: 40
      },
      Location: "Serpentshrine Cavern",
      Phase: 2,
      icon: "inv_misc_spyglass_02"
  },
  30627: {
      name: "Tsunami Talisman",
      stats: {
          Crit: 38,
          Hit: 10
      },
      Location: "Serpentshrine Cavern",
      aura: {
          is_proc: "Yes",
          stats: {
              MAP: 340,
              RAP: 340
          },
          duration: 10,
          cd: 45,
          proc_chance: 0.1,
          proc_type: 1
      },
      Phase: 2,
      icon: "spell_nature_unrelentingstorm"
  },
  31113: {
      name: "Violet Badge",
      stats: {
          Stam: 36
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "spell_holy_mindsooth"
  },
  31617: {
      name: "Ancient Draenei War Talisman",
      stats: {
          Crit: 21
      },
      Location: "Quest Reward",
      aura: {
          stats: {
              MAP: 200,
              RAP: 200
          },
          duration: 15,
          cd: 90
      },
      Phase: 1,
      icon: "inv_jewelry_talisman_14"
  },
  31856: {
      name: "Darkmoon Card: Crusade",
      Location: "World Drop",
      aura: {
          is_proc: "Yes",
          duration: 10,
          proc_type: 2
      },
      Phase: 1,
      icon: "inv_misc_ticket_tarot_crusade"
  },
  31857: {
      name: "Darkmoon Card: Wrath",
      Location: "World Drop",
      aura: {
          is_proc: "Yes"
      },
      Phase: 1,
      icon: "inv_misc_ticket_tarot_wrath"
  },
  31858: {
      name: "Darkmoon Card: Vengeance",
      stats: {
          Stam: 51
      },
      Location: "World Drop",
      aura: {
          is_proc: "Yes"
      },
      Phase: 1,
      icon: "inv_misc_ticket_tarot_vengeance"
  },
  31859: {
      name: "Darkmoon Card: Madness",
      stats: {
          Stam: 51
      },
      Location: "World Drop",
      aura: {
          is_proc: "Yes"
      },
      Phase: 1,
      icon: "inv_misc_ticket_tarot_madness"
  },
  32487: {
      name: "Ashtongue Talisman of Swiftness",
      Location: "Black Temple",
      aura: {
          is_proc: "Yes",
          stats: {
              MAP: 275,
              RAP: 275
          },
          duration: 8,
          proc_chance: 0.15,
          proc_type: 3
      },
      Phase: 3,
      icon: "inv_jewelry_talisman_09"
  },
  32505: {
      name: "Madness of the Betrayer",
      stats: {
          MAP: 84,
          RAP: 84,
          Hit: 20
      },
      Location: "Black Temple",
      aura: {
          is_proc: "Yes",
          duration: 10,
          PPM: 1,
          proc_type: 2
      },
      Phase: 3,
      icon: "spell_shadow_charm"
  },
  32654: {
      name: "Crystalforged Trinket",
      Location: "Reputation Reward",
      aura: {
          stats: {
              MAP: 216,
              RAP: 216
          },
          duration: 10,
          cd: 60
      },
      Phase: 1,
      icon: "inv_datacrystal01"
  },
  32658: {
      name: "Badge of Tenacity",
      Location: "World Drop",
      aura: {
          duration: 20,
          cd: 120
      },
      Phase: 1,
      icon: "inv_misc_armorkit_12"
  },
  32770: {
      name: "Skyguard Silver Cross",
      stats: {
          Crit: 34
      },
      Location: "Reputation Reward",
      Phase: 1,
      icon: "inv_jewelry_talisman_06"
  },
  32864: {
      name: "Commander's Badge",
      stats: {
          Stam: 45
      },
      Location: "Reputation Reward",
      Phase: 1,
      icon: "inv_misc_gem_sapphire_01"
  },
  33831: {
      name: "Berserker's Call",
      stats: {
          MAP: 90,
          RAP: 90
      },
      Location: "Zul'Aman",
      aura: {
          stats: {
              MAP: 360,
              RAP: 360
          },
          duration: 20,
          cd: 120
      },
      Phase: 4,
      icon: "racial_troll_berserk"
  },
  33832: {
      name: "Battlemaster's Determination",
      stats: {
          MAP: 80,
          RAP: 80
      },
      Location: "Honor Reward",
      Phase: 2,
      icon: "ability_warrior_endlessrage"
  },
  34163: {
      name: "Battlemaster's Cruelty",
      stats: {
          Crit: 40
      },
      Location: "Honor Reward",
      Phase: 1,
      icon: "ability_warrior_focusedrage"
  },
  34427: {
      name: "Blackened Naaru Sliver",
      stats: {
          Haste: 54
      },
      Location: "Sunwell",
      aura: {
          is_proc: "Yes",
          duration: 20,
          cd: 45,
          proc_chance: 0.1,
          proc_type: 2
      },
      Phase: 5,
      icon: "inv_jewelry_talisman_16"
  },
  35694: {
      name: "Figurine - Khorium Boar",
      stats: {
          MAP: 84,
          RAP: 84
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_jewelcrafting_truesilverboar"
  },
  35702: {
      name: "Figurine - Shadowsong Panther",
      stats: {
          MAP: 80,
          RAP: 80
      },
      Location: "Crafting",
      aura: {
          stats: {
              MAP: 320,
              RAP: 320
          },
          duration: 15,
          cd: 90
      },
      Phase: 5,
      icon: "inv_jewelcrafting_blackpearlpanther"
  },
  35751: {
      name: "Assassin's Alchemist Stone",
      stats: {
          MAP: 108,
          RAP: 108
      },
      Location: "Crafting",
      Phase: 5,
      icon: "classic_spell_nature_healingway"
  },
  38287: {
      name: "Empty Mug of Direbrew",
      stats: {
          MAP: 72,
          RAP: 72
      },
      Location: "Brewfest",
      aura: {
          stats: {
              MAP: 278,
              RAP: 278
          },
          duration: 20,
          cd: 120
      },
      Phase: 1,
      icon: "inv_drink_03"
  }
}

const WAISTS = {
  22442: {
      name: "Cryptstalker Girdle",
      set: 530,
      stats: {
          Agi: 16,
          Stam: 22,
          Int: 12,
          MAP: 30,
          RAP: 30,
          Crit: 14,
          Hit: 10,
          MP5: 3
      },
      Location: "Naxx",
      Phase: 1,
      icon: "inv_belt_22"
  },
  24360: {
      name: "Tracker's Belt",
      stats: {
          Stam: 21,
          MAP: 42,
          RAP: 42,
          Crit: 21,
          Hit: 14
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_belt_11"
  },
  25534: {
      name: "Marsh Survivalist's Belt",
      stats: {
          Agi: 18,
          Stam: 25,
          MAP: 34,
          RAP: 34
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_belt_16"
  },
  25695: {
      name: "Felstalker Belt",
      set: 575,
      stats: {
          Agi: 18,
          Int: 17,
          MAP: 50,
          RAP: 50
      },
      Location: "Crafting",
      sockets: [
          "Red",
          "Blue"
      ],
      socketBonus: {
          Stam: 4
      },
      Phase: 1,
      icon: "inv_belt_13"
  },
  25789: {
      name: "Rune-Engraved Belt",
      stats: {
          Agi: 25,
          MAP: 50,
          RAP: 50,
          Hit: 24
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_belt_35"
  },
  25983: {
      name: "Heavy Miner's Belt",
      stats: {
          Agi: 16,
          Stam: 22,
          MAP: 32,
          RAP: 32
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_belt_35"
  },
  27478: {
      name: "Girdle of the Blasted Reaches",
      stats: {
          Agi: 16,
          Stam: 22,
          Int: 20,
          MAP: 30,
          RAP: 30
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Red"
      ],
      socketBonus: {
          Int: 3
      },
      Phase: 1,
      icon: "inv_belt_09"
  },
  27521: {
      name: "Telaari Hunting Girdle",
      stats: {
          Agi: 24,
          Int: 17,
          MAP: 50,
          RAP: 50,
          MP5: 6
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_belt_09"
  },
  27541: {
      name: "Archery Belt of the Broken",
      stats: {
          Stam: 24,
          Int: 19,
          MAP: 58,
          RAP: 58,
          Crit: 18
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_belt_25"
  },
  27637: {
      name: "Shadow-walker's Cord",
      stats: {
          Agi: 27,
          Stam: 38,
          MAP: 76,
          RAP: 76,
          Haste: 37
      },
      Location: "Black Temple",
      Phase: 3,
      icon: "inv_belt_15"
  },
  27646: {
      name: "Marksman's Belt",
      stats: {
          Agi: 19,
          Stam: 28,
          Int: 12,
          MAP: 20,
          RAP: 20,
          Crit: 9,
          Resil: 13
      },
      Location: "PvP Reward",
      Phase: 1,
      icon: "inv_belt_20"
  },
  27726: {
      name: "Hearty Cenarion Cincture",
      stats: {
          Agi: 14,
          Stam: 21,
          Int: 14,
          MAP: 28,
          RAP: 28
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_belt_26"
  },
  27760: {
      name: "Dunewind Sash",
      stats: {
          Agi: 21,
          Stam: 16,
          MAP: 50,
          RAP: 50
      },
      Location: "Dungeon",
      sockets: [
          "Red",
          "Blue"
      ],
      socketBonus: {
          Agi: 3
      },
      Phase: 1,
      icon: "inv_belt_24"
  },
  28656: {
      name: "Girdle of the Prowler",
      stats: {
          Agi: 25,
          Stam: 21,
          Int: 22,
          MAP: 48,
          RAP: 48,
          Hit: 17,
          MP5: 6
      },
      Location: "Karazhan",
      Phase: 1,
      icon: "inv_belt_22"
  },
  28750: {
      name: "Girdle of Treachery",
      stats: {
          Agi: 18,
          Stam: 37,
          MAP: 58,
          RAP: 58
      },
      Location: "Karazhan",
      sockets: [
          "Red",
          "Red"
      ],
      socketBonus: {
          Agi: 3
      },
      Phase: 1,
      icon: "inv_belt_26"
  },
  28778: {
      name: "Terror Pit Girdle",
      stats: {
          Stam: 18,
          Int: 22,
          MAP: 44,
          RAP: 44,
          Crit: 21,
          MP5: 8
      },
      Location: "Magtheridon's Lair",
      sockets: [
          "Blue",
          "Red"
      ],
      socketBonus: {
          Stam: 4
      },
      Phase: 1,
      icon: "inv_belt_20"
  },
  34549: {
      name: "Gronnstalker's Belt",
      set: 669,
      stats: {
          Agi: 29,
          Stam: 21,
          Int: 17,
          MAP: 86,
          RAP: 86,
          Crit: 19,
          Hit: 24,
          ArP: 140
      },
      Location: "Sunwell",
      sockets: [
          "Red"
      ],
      socketBonus: {
          Crit: 2
      },
      Phase: 5,
      icon: "inv_belt_26"
  },
  29180: {
      name: "Blessed Scale Girdle",
      stats: {
          Agi: 20,
          Int: 15,
          MAP: 70,
          RAP: 70
      },
      Location: "Reputation Reward",
      Phase: 1,
      icon: "inv_belt_08"
  },
  29247: {
      name: "Girdle of the Deathdealer",
      stats: {
          Agi: 28,
          Stam: 28,
          MAP: 56,
          RAP: 56,
          Hit: 20
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_belt_26"
  },
  29261: {
      name: "Girdle of Ferocity",
      stats: {
          Agi: 28,
          Stam: 21,
          Int: 22,
          MAP: 44,
          RAP: 44,
          Hit: 14
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_belt_30"
  },
  29516: {
      name: "Ebon Netherscale Belt",
      set: 616,
      stats: {
          Stam: 21,
          Int: 14,
          MAP: 48,
          RAP: 48,
          Crit: 22,
          MP5: 8
      },
      Location: "Crafting",
      sockets: [
          "Blue",
          "Yellow"
      ],
      socketBonus: {
          Agi: 3
      },
      Phase: 1,
      icon: "inv_belt_29"
  },
  29526: {
      name: "Primalstrike Belt",
      set: 619,
      stats: {
          Agi: 20,
          Stam: 32,
          MAP: 84,
          RAP: 84
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_belt_03"
  },
  30001: {
      name: "Doc's Belt",
      stats: {
          Stam: 12,
          Int: 16,
          MAP: 56,
          RAP: 56,
          MP5: 3
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_belt_03"
  },
  30040: {
      name: "Belt of Deep Shadow",
      stats: {
          Agi: 32,
          Stam: 14,
          MAP: 66,
          RAP: 66,
          Hit: 18
      },
      Location: "Crafting",
      sockets: [
          "Blue",
          "Blue"
      ],
      socketBonus: {
          Agi: 3
      },
      Phase: 2,
      icon: "inv_belt_29"
  },
  30046: {
      name: "Belt of the Black Eagle",
      stats: {
          Agi: 17,
          Stam: 20,
          Int: 23,
          MAP: 66,
          RAP: 66,
          Crit: 17
      },
      Location: "Crafting",
      sockets: [
          "Blue",
          "Yellow"
      ],
      socketBonus: {
          Agi: 3
      },
      Phase: 2,
      icon: "inv_belt_03"
  },
  30106: {
      name: "Belt of One-Hundred Deaths",
      stats: {
          Agi: 29,
          Stam: 25,
          MAP: 74,
          RAP: 74
      },
      Location: "Serpentshrine Cavern",
      sockets: [
          "Red",
          "Blue"
      ],
      socketBonus: {
          Agi: 3
      },
      Phase: 2,
      icon: "inv_belt_26"
  },
  30643: {
      name: "Belt of the Tracker",
      stats: {
          Int: 15,
          MAP: 42,
          RAP: 42,
          MP5: 15
      },
      Location: "Karazhan",
      Phase: 1,
      icon: "inv_belt_22"
  },
  30879: {
      name: "Don Alejandro's Money Belt",
      stats: {
          Agi: 29,
          Stam: 37,
          MAP: 76,
          RAP: 76,
          Crit: 19
      },
      Location: "Mount Hyjal",
      sockets: [
          "Red",
          "Yellow"
      ],
      socketBonus: {
          Stam: 4
      },
      Phase: 3,
      icon: "inv_belt_26"
  },
  30919: {
      name: "Valestalker Girdle",
      stats: {
          Agi: 27,
          Stam: 25,
          Int: 18,
          MAP: 76,
          RAP: 76,
          Haste: 36
      },
      Location: "Mount Hyjal",
      Phase: 3,
      icon: "inv_belt_22"
  },
  30950: {
      name: "Darkhunter's Cinch",
      stats: {
          Agi: 10,
          Stam: 15,
          Int: 10,
          MAP: 56,
          RAP: 56,
          MP5: 4
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_belt_13"
  },
  31293: {
      name: "Girdle of Gale Force",
      stats: {
          Agi: 32,
          Int: 20,
          MAP: 28,
          RAP: 28,
          MP5: 6
      },
      Location: "World Drop",
      Phase: 1,
      icon: "inv_belt_31"
  },
  31440: {
      name: "Devolved Drake Girdle",
      stats: {
          Agi: 27,
          MAP: 30,
          RAP: 30,
          MP5: 4
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_belt_13"
  },
  31462: {
      name: "Shattrath's Champion Belt",
      stats: {
          Int: 22,
          MAP: 50,
          RAP: 50,
          Crit: 21,
          Hit: 15
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_belt_11"
  },
  31472: {
      name: "Hexxer's Belt",
      stats: {
          Agi: 26,
          MAP: 30,
          RAP: 30,
          MP5: 4
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_belt_23"
  },
  32265: {
      name: "Shadowstalker's Sash",
      stats: {
          Agi: 17,
          Stam: 24,
          MAP: 26,
          RAP: 26,
          Crit: 13,
          Resil: 16
      },
      Location: "PvP Reward",
      Phase: 1,
      icon: "inv_belt_26"
  },
  32346: {
      name: "Boneweave Girdle",
      stats: {
          Agi: 38,
          Int: 26,
          MAP: 76,
          RAP: 76,
          Crit: 24,
          Hit: 17
      },
      Location: "Black Temple",
      Phase: 3,
      icon: "inv_belt_14"
  },
  32797: {
      name: "Veteran's Chain Girdle",
      stats: {
          Agi: 30,
          Stam: 45,
          Int: 20,
          MAP: 32,
          RAP: 32,
          Crit: 16,
          Resil: 21
      },
      Location: "Honor Reward",
      Phase: 1,
      icon: "inv_belt_20"
  },
  32802: {
      name: "Veteran's Leather Belt",
      stats: {
          Agi: 30,
          Stam: 45,
          MAP: 34,
          RAP: 34,
          Crit: 16,
          Resil: 30
      },
      Location: "Honor Reward",
      Phase: 1,
      icon: "inv_belt_17"
  },
  33211: {
      name: "Bladeangel's Money Belt",
      stats: {
          Agi: 25,
          Stam: 27,
          MAP: 58,
          RAP: 58,
          Crit: 21,
          ArP: 77
      },
      Location: "Zul'Aman",
      sockets: [
          "Blue"
      ],
      socketBonus: {
          MAP: 4,
          RAP: 4
      },
      Phase: 4,
      icon: "inv_belt_14"
  },
  33280: {
      name: "War-Feathered Loop",
      stats: {
          Agi: 29,
          Stam: 36,
          Int: 28,
          MAP: 56,
          RAP: 56,
          ArP: 70
      },
      Location: "Badge Reward",
      Phase: 3,
      icon: "inv_belt_22"
  },
  33877: {
      name: "Vindicator's Chain Girdle",
      stats: {
          Agi: 33,
          Stam: 48,
          Int: 23,
          MAP: 38,
          RAP: 38,
          Crit: 18,
          Resil: 21
      },
      Location: "Honor Reward",
      Phase: 3,
      icon: "inv_belt_20"
  },
  28828: {
      name: "Gronn-Stitched Girdle",
      stats: {
          Stam: 27,
          MAP: 72,
          RAP: 72,
          Crit: 25
      },
      Location: "Gruul's Lair",
      sockets: [
          "Blue",
          "Yellow"
      ],
      socketBonus: {
          Crit: 3
      },
      Phase: 1,
      icon: "inv_belt_14"
  },
  34929: {
      name: "Belt of the Silent Path",
      stats: {
          Agi: 34,
          Stam: 33,
          MAP: 78,
          RAP: 78,
          Hit: 23
      },
      Location: "Badge Reward",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          Agi: 2
      },
      Phase: 3,
      icon: "inv_belt_03"
  }
}

const WRISTS = {
  22443: {
      name: "Cryptstalker Wristguards",
      set: 530,
      stats: {
          Agi: 18,
          Stam: 16,
          MAP: 34,
          RAP: 34,
          Hit: 10
      },
      Location: "Naxx",
      Phase: 1,
      icon: "inv_bracer_02"
  },
  23494: {
      name: "Fel Iron Chain Bracers",
      set: 561,
      stats: {
          Agi: 13,
          Stam: 19,
          MAP: 26,
          RAP: 26
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_bracer_13"
  },
  24451: {
      name: "Lykul Bloodbands",
      stats: {
          Agi: 18,
          Stam: 18,
          MAP: 30,
          RAP: 30
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_jewelry_ring_ahnqiraj_01"
  },
  25598: {
      name: "Fen Strider's Bracer",
      stats: {
          Agi: 12,
          Int: 12,
          MAP: 24,
          RAP: 24
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_bracer_06"
  },
  25601: {
      name: "Murk-Darkened Bracers",
      stats: {
          Agi: 12,
          Int: 12,
          MAP: 24,
          RAP: 24
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_bracer_06"
  },
  25697: {
      name: "Felstalker Bracers",
      set: 575,
      stats: {
          Agi: 18,
          Int: 11,
          MAP: 38,
          RAP: 38
      },
      Location: "Crafting",
      sockets: [
          "Blue"
      ],
      socketBonus: {
          Stam: 3
      },
      Phase: 1,
      icon: "inv_bracer_14"
  },
  25959: {
      name: "Feathered Armbands",
      stats: {
          Agi: 13,
          Stam: 19,
          MAP: 26,
          RAP: 26
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_bracer_16"
  },
  27494: {
      name: "Emerald Eye Bracer",
      stats: {
          Int: 12,
          MAP: 46,
          RAP: 46,
          Crit: 13,
          MP5: 5
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_bracer_16"
  },
  27865: {
      name: "Bracers of Shirrak",
      stats: {
          Stam: 17,
          Int: 14,
          MAP: 48,
          RAP: 48,
          MP5: 5
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_bracer_16"
  },
  28170: {
      name: "Auchenai Bracers",
      stats: {
          Int: 15,
          MAP: 36,
          RAP: 36,
          MP5: 4
      },
      Location: "Quest Reward",
      sockets: [
          "Red"
      ],
      socketBonus: {
          MP5: 1
      },
      Phase: 1,
      icon: "inv_bracer_16"
  },
  28454: {
      name: "Stalker's War Bands",
      stats: {
          Agi: 21,
          Stam: 18,
          Int: 17,
          MAP: 44,
          RAP: 44
      },
      Location: "Karazhan",
      Phase: 1,
      icon: "inv_bracer_02"
  },
  28514: {
      name: "Bracers of Maliciousness",
      stats: {
          Stam: 25,
          MAP: 50,
          RAP: 50,
          Crit: 22
      },
      Location: "Karazhan",
      Phase: 1,
      icon: "inv_bracer_15"
  },
  29246: {
      name: "Nightfall Wristguards",
      stats: {
          Agi: 24,
          Stam: 22,
          MAP: 46,
          RAP: 46
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_bracer_15"
  },
  29259: {
      name: "Bracers of the Hunt",
      stats: {
          Agi: 19,
          Stam: 16,
          Int: 17,
          MAP: 36,
          RAP: 36,
          MP5: 4
      },
      Location: "Dungeon",
      Phase: 1,
      icon: "inv_bracer_02"
  },
  29517: {
      name: "Ebon Netherscale Bracers",
      set: 616,
      stats: {
          Stam: 25,
          Int: 8,
          MAP: 38,
          RAP: 38,
          Crit: 17,
          MP5: 5
      },
      Location: "Crafting",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          Agi: 2
      },
      Phase: 1,
      icon: "inv_bracer_19"
  },
  29527: {
      name: "Primalstrike Bracers",
      set: 619,
      stats: {
          Agi: 15,
          Stam: 21,
          MAP: 64,
          RAP: 64
      },
      Location: "Crafting",
      Phase: 1,
      icon: "inv_bracer_07"
  },
  29785: {
      name: "Crimson Mail Bracers",
      stats: {
          Stam: 18,
          Int: 13,
          MAP: 26,
          RAP: 26,
          MP5: 5
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_bracer_10"
  },
  29811: {
      name: "Goldenlink Bracers",
      stats: {
          Int: 12,
          MAP: 38,
          RAP: 38,
          Crit: 16,
          MP5: 7
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_bracer_19"
  },
  29966: {
      name: "Vambraces of Ending",
      stats: {
          Agi: 24,
          Stam: 24,
          MAP: 52,
          RAP: 52
      },
      Location: "The Eye",
      sockets: [
          "Blue"
      ],
      socketBonus: {
          MAP: 4,
          RAP: 4
      },
      Phase: 2,
      icon: "inv_bracer_15"
  },
  30026: {
      name: "Bands of the Celestial Archer",
      stats: {
          Agi: 17,
          Int: 24,
          MAP: 48,
          RAP: 48,
          Crit: 17
      },
      Location: "The Eye",
      Phase: 2,
      icon: "inv_bracer_17"
  },
  30091: {
      name: "True-Aim Stalker Bands",
      stats: {
          Stam: 18,
          Int: 12,
          MAP: 50,
          RAP: 50,
          Crit: 24
      },
      Location: "Serpentshrine Cavern",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          Stam: 3
      },
      Phase: 2,
      icon: "inv_bracer_15"
  },
  30863: {
      name: "Deadly Cuffs",
      stats: {
          Stam: 28,
          MAP: 58,
          RAP: 58,
          Crit: 28,
          Hit: 12
      },
      Location: "Mount Hyjal",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          Stam: 3
      },
      Phase: 3,
      icon: "inv_bracer_09"
  },
  30864: {
      name: "Bracers of the Pathfinder",
      stats: {
          Agi: 25,
          Stam: 24,
          Int: 24,
          MAP: 48,
          RAP: 48
      },
      Location: "Mount Hyjal",
      sockets: [
          "Blue"
      ],
      socketBonus: {
          Crit: 2
      },
      Phase: 3,
      icon: "inv_bracer_02"
  },
  30956: {
      name: "Oronok's Old Bracers",
      stats: {
          Agi: 11,
          Stam: 16,
          Int: 12,
          MAP: 24,
          RAP: 24,
          MP5: 5
      },
      Location: "Quest Reward",
      Phase: 1,
      icon: "inv_bracer_18"
  },
  32251: {
      name: "Wraps of Precise Flight",
      stats: {
          Agi: 18,
          Stam: 28,
          Int: 20,
          MAP: 58,
          RAP: 58,
          Crit: 19
      },
      Location: "Black Temple",
      Phase: 3,
      icon: "inv_bracer_06"
  },
  32324: {
      name: "Insidious Bands",
      stats: {
          Agi: 28,
          Stam: 28,
          MAP: 58,
          RAP: 58,
          Hit: 12
      },
      Location: "Black Temple",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          Agi: 2
      },
      Phase: 3,
      icon: "inv_bracer_04"
  },
  32574: {
      name: "Bindings of Lightning Reflexes",
      stats: {
          Agi: 21,
          Stam: 15,
          Int: 16,
          MAP: 56,
          RAP: 56,
          Haste: 27
      },
      Location: "Crafting",
      Phase: 3,
      icon: "inv_bracer_02"
  },
  32580: {
      name: "Swiftstrike Bracers",
      stats: {
          Agi: 20,
          Stam: 34,
          MAP: 50,
          RAP: 50,
          Haste: 27
      },
      Location: "Crafting",
      Phase: 3,
      icon: "inv_bracer_15"
  },
  32647: {
      name: "Shard-bound Bracers",
      stats: {
          Agi: 20,
          Stam: 18,
          MAP: 42,
          RAP: 42
      },
      Location: "Reputation Reward",
      sockets: [
          "Blue"
      ],
      socketBonus: {
          MAP: 4,
          RAP: 4
      },
      Phase: 3,
      icon: "inv_bracer_13"
  },
  32809: {
      name: "Veteran's Chain Bracers",
      stats: {
          Agi: 20,
          Stam: 29,
          Int: 10,
          MAP: 18,
          RAP: 18,
          Crit: 8,
          Resil: 13
      },
      Location: "Honor Reward",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          Resil: 2
      },
      Phase: 1,
      icon: "inv_bracer_16"
  },
  32814: {
      name: "Veteran's Leather Bracers",
      stats: {
          Agi: 21,
          Stam: 29,
          MAP: 20,
          RAP: 20,
          Crit: 9,
          Resil: 15
      },
      Location: "Honor Reward",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          Resil: 2
      },
      Phase: 1,
      icon: "inv_bracer_07"
  },
  33529: {
      name: "Steadying Bracers",
      stats: {
          Agi: 18,
          Stam: 21,
          Int: 19,
          MAP: 50,
          RAP: 50,
          ArP: 105
      },
      Location: "Badge Reward",
      Phase: 3,
      icon: "inv_bracer_02"
  },
  33540: {
      name: "Master Assassin Wristwraps",
      stats: {
          Agi: 17,
          Stam: 22,
          MAP: 50,
          RAP: 50,
          Crit: 18
      },
      Location: "Badge Reward",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          Crit: 2
      },
      Phase: 3,
      icon: "inv_bracer_07"
  },
  33876: {
      name: "Vindicator's Chain Bracers",
      stats: {
          Agi: 23,
          Stam: 33,
          Int: 13,
          MAP: 24,
          RAP: 24,
          Crit: 11,
          Resil: 13
      },
      Location: "Honor Reward",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          Resil: 2
      },
      Phase: 1,
      icon: "inv_bracer_16"
  },
  34443: {
      name: "Gronnstalker's Bracers",
      set: 669,
      stats: {
          Agi: 23,
          Stam: 16,
          Int: 16,
          MAP: 64,
          RAP: 64,
          Crit: 17,
          ArP: 112
      },
      Location: "Sunwell",
      sockets: [
          "Red"
      ],
      socketBonus: {
          Agi: 2
      },
      Phase: 5,
      icon: "inv_bracer_02"
  },
  34698: {
      name: "Bracers of the Forest Stalker",
      stats: {
          Agi: 16,
          Stam: 10,
          Int: 10,
          MAP: 32,
          RAP: 32,
          ArP: 70
      },
      Location: "Dungeon",
      sockets: [
          "Blue"
      ],
      socketBonus: {
          MAP: 4,
          RAP: 4
      },
      Phase: 5,
      icon: "inv_bracer_16"
  }
}

const GEAR_MAP = {
  ammo: AMMOS,
  back: BACKS,
  chest: CHESTS,
  feet: FEET,
  hand: HANDS,
  head: HEADS,
  leg: LEGS,
  mainhand: MELEE_WEAPONS,
  neck: NECKS,
  offhand: MELEE_WEAPONS,
  quiver: QUIVERS,
  range: RANGED_WEAPONS,
  ring1: RINGS,
  ring2: RINGS,
  shoulder: SHOULDERS,
  trinket1: TRINKETS,
  trinket2: TRINKETS,
  waist: WAISTS,
  wrist: WRISTS
};
