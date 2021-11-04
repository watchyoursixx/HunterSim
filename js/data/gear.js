const SETS = {
  652: {
    name: 'Rift Stalker Armor',
    abrv: 't5',
    bonuses: {
      2: { pet_heal_ratio: 0.15 },
      4: { ss_crit: 5 }
    }
  },
  650: {
    name: 'Beast Lord Armor',
    abrv: 'bl',
    bonuses: {
      2: { trap_cdr: -4 },
      4: { kc_arp: 600 }
    }
  },
  530: {
    name: 'Cryptstalker Armor',
    abrv: 't3',
    bonuses: {
      2: { rf_duration: 4 },
      4: { ap_increase: 50 },
      6: { crit_mana_return: 50 },
      8: { reduced_mana_cost: 20 },
    }
  },
  669: {
    name: "Gronnstalker's Armor",
    abrv: 't6',
    bonuses: {
      2: { base: 1, viper_mana_gain: 0.05 },
      4: { base: 1, steady_shot_dmg: 0.1 }
    }
  }
}

const AMMOS = {
    10513: {
        name: "Mysterious Shell",
        ammo_dps: 46.5,
        Location: "Reputation Reward",
        Phase: 2
    },
    11285: {
        name: "Timeless Shell",
        ammo_dps: 53,
        Location: "Reputation Reward",
        Phase: 3
    },
    12654: {
        name: "Warden's Arrow",
        ammo_dps: 37,
        Location: "Cenarion Expedition - Revered",
        Phase: 1
    },
    15997: {
        name: "Ironbite Shell",
        ammo_dps: 32,
        Location: "Vendor",
        Phase: 1
    },
    18042: {
        name: "Halaani Grimshot",
        ammo_dps: 34,
        Location: "Vendor",
        Phase: 1
    },
    19316: {
        name: "Thorium Headed Arrow",
        ammo_dps: 17.5,
        Location: "Crafted - Eng",
        Phase: 1
    },
    19317: {
        name: "Ice Threaded Arrow",
        ammo_dps: 16.5,
        Location: "Honor Reward",
        Phase: 1
    },
    23772: {
        name: "Halaani Razorshaft",
        ammo_dps: 34,
        Location: "Halaa Vendor (if faction controlled)",
        Phase: 1
    },
    23773: {
        name: "Timeless Arrow",
        ammo_dps: 53,
        Location: "The Scale of the Sands - Honored",
        Phase: 3
    },
    24417: {
        name: "Hellfire Shot",
        ammo_dps: 37,
        Location: "Reputation Reward",
        Phase: 1
    },
    28053: {
        name: "Mithril Gyro-Shot",
        ammo_dps: 15,
        Location: "Crafted - Eng",
        Phase: 1
    },
    28056: {
        name: "Adamantite Stinger",
        ammo_dps: 43,
        Location: "Crafted - Eng",
        Phase: 3
    },
    28061: {
        name: "Jagged Arrow",
        ammo_dps: 15,
        Location: "Vendor",
        Phase: 1
    },
    30611: {
        name: "Wicked Arrow",
        ammo_dps: 22,
        Location: "Vendor",
        Phase: 1
    },
    30612: {
        name: "Scout's Arrow",
        ammo_dps: 26,
        Location: "Cenarion Expedition - Friendly",
        Phase: 1
    },
    31735: {
        name: "Thorium Shells",
        ammo_dps: 17.5,
        Location: "Crafted - Eng",
        Phase: 1
    },
    31737: {
        name: "Fel Iron Shells",
        ammo_dps: 26,
        Location: "Crafted - Eng",
        Phase: 1
    },
    31949: {
        name: "Ice Threaded Bullet",
        ammo_dps: 16.5,
        Location: "Honor Reward",
        Phase: 1
    },
    32882: {
        name: "Doomshot",
        ammo_dps: 20,
        Location: "Dungeon",
        Phase: 1
    },
    32883: {
        name: "Blackflight Arrow",
        ammo_dps: 32,
        Location: "Vendor",
        Phase: 1
    },
    33803: {
        name: "Mysterious Arrow",
        ammo_dps: 46.5,
        Location: "The Violet Eye - Revered",
        Phase: 2
    },
    34581: {
        name: "Adamantite Shells",
        ammo_dps: 43,
        Location: "Crafted - Eng",
        Phase: 3
    },
    34582: {
        name: "Felbane Slugs",
        ammo_dps: 37,
        Location: "Reputation Reward",
        Phase: 1
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
      Phase: 1
  },
  24258: {
      name: "Resolute Cape",
      stats: {
          Stam: 30,
          Resil: 21
      },
      Location: "Crafting",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  28764: {
      name: "Farstrider Wildercloak",
      stats: {
          Stam: 36,
          MAP: 70,
          RAP: 70
      },
      Location: "Karazhan",
      Phase: 1
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
      Phase: 1
  },
  29139: {
      name: "Ceremonial Cover",
      stats: {
          Stam: 15,
          Int: 26,
          MP5: 6
      },
      Location: "Reputation Reward",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 2
  },
  30729: {
      name: "Black-Iron Battlecloak",
      stats: {
          MAP: 60,
          RAP: 60,
          Crit: 30
      },
      Location: "World Boss",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 3
  },
  32539: {
      name: "Skyguard's Drape",
      stats: {
          Agi: 15,
          MAP: 52,
          RAP: 52
      },
      Location: "Reputation Reward",
      Phase: 1
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
      Phase: 1
  },
  32665: {
      name: "Crystalweave Cape",
      stats: {
          Agi: 15,
          Stam: 15,
          Haste: 26
      },
      Location: "World Drop",
      Phase: 1
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
      Phase: 3
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
      Phase: 4
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
      Phase: 5
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
      Phase: 5
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
      Phase: 1
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
      Phase: 1
  },
  23490: {
      name: "Fel Iron Chain Tunic",
      stats: {
          Stam: 36,
          Int: 24,
          MAP: 48,
          RAP: 48
      },
      Location: "Crafting",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  25657: {
      name: "Felscale Breastplate",
      stats: {
          Agi: 30,
          MAP: 72,
          RAP: 72
      },
      Location: "Crafting",
      Phase: 1
  },
  25696: {
      name: "Felstalker Breastplate",
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  28264: {
      name: "Wastewalker Tunic",
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
      Phase: 1
  },
  28334: {
      name: "Gladiator's Chain Armor",
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
      Phase: 1
  },
  28401: {
      name: "Hauberk of Desolation",
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  29082: {
      name: "Demon Stalker Harness",
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  29515: {
      name: "Ebon Netherscale Breastplate",
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
      Phase: 1
  },
  29525: {
      name: "Primalstrike Vest",
      stats: {
          Agi: 38,
          Stam: 39,
          MAP: 108,
          RAP: 108,
          Hit: 12
      },
      Location: "Crafting",
      Phase: 1
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
      Phase: 1
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
      Phase: 2
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
      Phase: 1
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
      Phase: 2
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
      Phase: 2
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 3
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
      Phase: 3
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
      Phase: 1
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
      Phase: 3
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  31960: {
      name: "Merciless Gladiator's Chain Armor",
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
      Phase: 2
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
      Phase: 3
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
      Phase: 3
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
      Phase: 4
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
      Phase: 4
  },
  33664: {
      name: "Vengeful Gladiator's Chain Armor",
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
      Phase: 3
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
      Phase: 5
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
      Phase: 5
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
      Phase: 5
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
      Phase: 5
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
      Phase: 5
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
      Phase: 1
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
      Phase: 3
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
      Phase: 3
  },
  34990: {
      name: "Brutal Gladiator's Chain Armor",
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
      Phase: 5
  },
  35376: {
      name: "Stalker's Chain Armor",
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  25655: {
      name: "Felscale Boots",
      stats: {
          Agi: 20,
          MAP: 44,
          RAP: 44
      },
      Location: "Crafting",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 2
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
      Phase: 2
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
      Phase: 2
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
      Phase: 2
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
      Phase: 2
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
      Phase: 1
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
      Phase: 1
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
      Phase: 3
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
      Phase: 3
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 3
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
      Phase: 3
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
      Phase: 1
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
      Phase: 1
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
      Phase: 3
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
      Phase: 4
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
      Phase: 2
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
      Phase: 5
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
      Phase: 4
  }
}

const GEMS = {
  22459: {
      name: "Void Sphere",
      colors: [
          "red",
          "yellow",
          "blue"
      ],
      Phase: 1,
      quality: "Rare"
  },
  23097: {
      name: "Delicate Blood Garnet",
      colors: [
          "red"
      ],
      stats: {
          Agi: 6
      },
      Phase: 1,
      quality: "Common"
  },
  23100: {
      name: "Glinting Flame Spessarite",
      colors: [
          "red",
          "yellow"
      ],
      stats: {
          Agi: 3,
          Hit: 3
      },
      Phase: 1,
      quality: "Common"
  },
  23104: {
      name: "Jagged Deep Peridot",
      colors: [
          "yellow",
          "blue"
      ],
      stats: {
          Stam: 4,
          Crit: 3
      },
      Phase: 1,
      quality: "Common"
  },
  23106: {
      name: "Dazzling Deep Peridot",
      colors: [
          "yellow",
          "blue"
      ],
      stats: {
          Int: 3,
          MP5: 1
      },
      Phase: 1,
      quality: "Common"
  },
  23110: {
      name: "Shifting Shadow Draenite",
      colors: [
          "red",
          "blue"
      ],
      stats: {
          Agi: 3,
          Stam: 4
      },
      Phase: 1,
      quality: "Common"
  },
  23113: {
      name: "Brilliant Golden Draenite",
      colors: [
          "yellow"
      ],
      stats: {
          Int: 6
      },
      Phase: 1,
      quality: "Common"
  },
  23116: {
      name: "Rigid Golden Draenite",
      colors: [
          "yellow"
      ],
      stats: {
          Hit: 6
      },
      Phase: 1,
      quality: "Common"
  },
  23118: {
      name: "Solid Azure Moonstone",
      colors: [
          "blue"
      ],
      stats: {
          Stam: 9
      },
      Phase: 1,
      quality: "Common"
  },
  23121: {
      name: "Lustrous Azure Moonstone",
      colors: [
          "blue"
      ],
      stats: {
          MP5: 2
      },
      Phase: 1,
      quality: "Common"
  },
  24028: {
      name: "Delicate Living Ruby",
      colors: [
          "red"
      ],
      stats: {
          Agi: 8
      },
      Phase: 1,
      quality: "Rare"
  },
  24031: {
      name: "Bright Living Ruby",
      colors: [
          "red"
      ],
      stats: {
          MAP: 16,
          RAP: 16
      },
      Phase: 1,
      quality: "Rare"
  },
  24033: {
      name: "Solid Star of Elune",
      colors: [
          "blue"
      ],
      stats: {
          Stam: 12
      },
      Phase: 1,
      quality: "Rare"
  },
  24037: {
      name: "Lustrous Star of Elune",
      colors: [
          "blue"
      ],
      stats: {
          MP5: 3
      },
      Phase: 1,
      quality: "Rare"
  },
  24047: {
      name: "Brilliant Dawnstone",
      colors: [
          "yellow"
      ],
      stats: {
          Int: 8
      },
      Phase: 1,
      quality: "Rare"
  },
  24048: {
      name: "Smooth Dawnstone",
      colors: [
          "yellow"
      ],
      stats: {
          Crit: 8
      },
      Phase: 1,
      quality: "Rare"
  },
  24051: {
      name: "Rigid Dawnstone",
      colors: [
          "yellow"
      ],
      stats: {
          Hit: 8
      },
      Phase: 1,
      quality: "Rare"
  },
  24053: {
      name: "Mystic Dawnstone",
      colors: [
          "yellow"
      ],
      stats: {
          Resil: 8
      },
      Phase: 1,
      quality: "Rare"
  },
  24055: {
      name: "Shifting Nightseye",
      colors: [
          "red",
          "blue"
      ],
      stats: {
          Agi: 4,
          Stam: 6
      },
      Phase: 1,
      quality: "Rare"
  },
  24061: {
      name: "Glinting Noble Topaz",
      colors: [
          "red",
          "yellow"
      ],
      stats: {
          Agi: 4,
          Hit: 4
      },
      Phase: 1,
      quality: "Rare"
  },
  24065: {
      name: "Dazzling Talasite",
      colors: [
          "yellow",
          "blue"
      ],
      stats: {
          Int: 4,
          MP5: 2
      },
      Phase: 1,
      quality: "Rare"
  },
  24067: {
      name: "Jagged Talasite",
      colors: [
          "yellow",
          "blue"
      ],
      stats: {
          Stam: 6,
          Crit: 4
      },
      Phase: 1,
      quality: "Rare"
  },
  25894: {
      name: "Swift Skyfire Diamond",
      meta: "Y",
      stats: {
          MAP: 24,
          RAP: 24
      },
      meta_red_req: 1,
      meta_yellow_req: 2,
      Phase: 1,
      quality: "Rare"
  },
  25895: {
      name: "Enigmatic Skyfire Diamond",
      meta: "Y",
      stats: {
          Crit: 12
      },
      meta_more_color_req: "Red",
      meta_less_color_req: "Yellow",
      Phase: 1,
      quality: "Rare"
  },
  25896: {
      name: "Powerful Earthstorm Diamond",
      meta: "Y",
      stats: {
          Stam: 18
      },
      meta_blue_req: 3,
      Phase: 1,
      quality: "Rare"
  },
  25901: {
      name: "Insightful Earthstorm Diamond",
      meta: "Y",
      stats: {
          Int: 12
      },
      meta_red_req: 2,
      meta_blue_req: 2,
      meta_yellow_req: 2,
      Phase: 1,
      quality: "Rare"
  },
  27679: {
      name: "Sublime Mystic Dawnstone",
      colors: [
          "yellow"
      ],
      stats: {
          Resil: 10
      },
      Phase: 1,
      quality: "Rare"
  },
  27809: {
      name: "Barbed Deep Peridot",
      colors: [
          "yellow",
          "blue"
      ],
      stats: {
          Stam: 3,
          Crit: 4
      },
      Phase: 1,
      quality: "Common"
  },
  28290: {
      name: "Smooth Golden Draenite",
      colors: [
          "yellow"
      ],
      stats: {
          Crit: 6
      },
      Phase: 1,
      quality: "Common"
  },
  28361: {
      name: "Mighty Blood Garnet",
      colors: [
          "red"
      ],
      stats: {
          MAP: 14,
          RAP: 14
      },
      Phase: 1,
      quality: "Common"
  },
  28459: {
      name: "Delicate Tourmaline",
      colors: [
          "red"
      ],
      stats: {
          Agi: 4
      },
      Phase: 1,
      quality: "Common"
  },
  28462: {
      name: "Bright Tourmaline",
      colors: [
          "red"
      ],
      stats: {
          MAP: 8,
          RAP: 8
      },
      Phase: 1,
      quality: "Common"
  },
  28463: {
      name: "Solid Zircon",
      colors: [
          "blue"
      ],
      stats: {
          Stam: 6
      },
      Phase: 1,
      quality: "Common"
  },
  28465: {
      name: "Lustrous Zircon",
      colors: [
          "blue"
      ],
      stats: {
          MP5: 1
      },
      Phase: 1,
      quality: "Common"
  },
  28466: {
      name: "Brilliant Amber",
      colors: [
          "yellow"
      ],
      stats: {
          Int: 4
      },
      Phase: 1,
      quality: "Common"
  },
  28467: {
      name: "Smooth Amber",
      colors: [
          "yellow"
      ],
      stats: {
          Crit: 4
      },
      Phase: 1,
      quality: "Common"
  },
  28468: {
      name: "Rigid Amber",
      colors: [
          "yellow"
      ],
      stats: {
          Hit: 4
      },
      Phase: 1,
      quality: "Common"
  },
  28556: {
      name: "Swift Windfire Diamond",
      meta: "Y",
      stats: {
          MAP: 20,
          RAP: 20
      },
      meta_red_req: 1,
      meta_yellow_req: 2,
      Phase: 1,
      quality: "Rare"
  },
  28595: {
      name: "Bright Blood Garnet",
      colors: [
          "red"
      ],
      stats: {
          MAP: 12,
          RAP: 12
      },
      Phase: 1,
      quality: "Common"
  },
  30549: {
      name: "Shifting Tanzanite",
      colors: [
          "red",
          "blue"
      ],
      stats: {
          Agi: 5,
          Stam: 6
      },
      Phase: 1,
      quality: "Rare"
  },
  30550: {
      name: "Sundered Chrysoprase",
      colors: [
          "yellow",
          "blue"
      ],
      stats: {
          Crit: 5,
          MP5: 2
      },
      Phase: 1,
      quality: "Rare"
  },
  30553: {
      name: "Pristine Fire Opal",
      colors: [
          "red",
          "yellow"
      ],
      stats: {
          MAP: 10,
          RAP: 10,
          Hit: 4
      },
      Phase: 1,
      quality: "Rare"
  },
  30556: {
      name: "Glinting Fire Opal",
      colors: [
          "red",
          "yellow"
      ],
      stats: {
          Agi: 5,
          Hit: 4
      },
      Phase: 1,
      quality: "Rare"
  },
  30574: {
      name: "Brutal Tanzanite",
      colors: [
          "red",
          "blue"
      ],
      stats: {
          Stam: 6,
          MAP: 10,
          RAP: 10
      },
      Phase: 1,
      quality: "Rare"
  },
  30582: {
      name: "Deadly Fire Opal",
      colors: [
          "red",
          "yellow"
      ],
      stats: {
          MAP: 8,
          RAP: 8,
          Crit: 5
      },
      Phase: 1,
      quality: "Rare"
  },
  30583: {
      name: "Timeless Chrysoprase",
      colors: [
          "yellow",
          "blue"
      ],
      stats: {
          Stam: 6,
          Int: 5
      },
      Phase: 1,
      quality: "Rare"
  },
  30589: {
      name: "Dazzling Chrysoprase",
      colors: [
          "yellow",
          "blue"
      ],
      stats: {
          Int: 5,
          MP5: 2
      },
      Phase: 1,
      quality: "Rare"
  },
  30591: {
      name: "Empowered Fire Opal",
      colors: [
          "red",
          "yellow"
      ],
      stats: {
          MAP: 8,
          RAP: 8,
          Resil: 5
      },
      Phase: 1,
      quality: "Rare"
  },
  30592: {
      name: "Steady Chrysoprase",
      colors: [
          "yellow",
          "blue"
      ],
      stats: {
          Stam: 6,
          Resil: 5
      },
      Phase: 1,
      quality: "Rare"
  },
  30602: {
      name: "Jagged Chrysoprase",
      colors: [
          "yellow",
          "blue"
      ],
      stats: {
          Stam: 6,
          Crit: 5
      },
      Phase: 1,
      quality: "Rare"
  },
  31118: {
      name: "Pulsing Amethyst",
      colors: [
          "red",
          "blue"
      ],
      stats: {
          Stam: 6,
          MAP: 10,
          RAP: 10
      },
      Phase: 3,
      quality: "Rare"
  },
  31862: {
      name: "Balanced Shadow Draenite",
      colors: [
          "red",
          "blue"
      ],
      stats: {
          Stam: 4,
          MAP: 6,
          RAP: 6
      },
      Phase: 1,
      quality: "Common"
  },
  31863: {
      name: "Balanced Nightseye",
      colors: [
          "red",
          "blue"
      ],
      stats: {
          Stam: 6,
          MAP: 8,
          RAP: 8
      },
      Phase: 1,
      quality: "Rare"
  },
  31864: {
      name: "Infused Shadow Draenite",
      colors: [
          "red",
          "blue"
      ],
      stats: {
          MAP: 6,
          RAP: 6,
          MP5: 1
      },
      Phase: 1,
      quality: "Common"
  },
  31865: {
      name: "Infused Nightseye",
      colors: [
          "red",
          "blue"
      ],
      stats: {
          MAP: 8,
          RAP: 8,
          MP5: 2
      },
      Phase: 1,
      quality: "Rare"
  },
  31868: {
      name: "Wicked Noble Topaz",
      colors: [
          "red",
          "yellow"
      ],
      stats: {
          MAP: 8,
          RAP: 8,
          Crit: 4
      },
      Phase: 1,
      quality: "Rare"
  },
  31869: {
      name: "Wicked Flame Spessarite",
      colors: [
          "red",
          "yellow"
      ],
      stats: {
          MAP: 6,
          RAP: 6,
          Crit: 3
      },
      Phase: 1,
      quality: "Common"
  },
  32194: {
      name: "Delicate Crimson Spinel",
      colors: [
          "red"
      ],
      stats: {
          Agi: 10
      },
      Phase: 3,
      quality: "Rare"
  },
  32200: {
      name: "Solid Empyrean Sapphire",
      colors: [
          "blue"
      ],
      stats: {
          Stam: 15
      },
      Phase: 3,
      quality: "Rare"
  },
  32202: {
      name: "Lustrous Empyrean Sapphire",
      colors: [
          "blue"
      ],
      stats: {
          MP5: 4
      },
      Phase: 3,
      quality: "Rare"
  },
  32204: {
      name: "Brilliant Lionseye",
      colors: [
          "yellow"
      ],
      stats: {
          Int: 10
      },
      Phase: 3,
      quality: "Rare"
  },
  32205: {
      name: "Smooth Lionseye",
      colors: [
          "yellow"
      ],
      stats: {
          Crit: 10
      },
      Phase: 3,
      quality: "Rare"
  },
  32206: {
      name: "Rigid Lionseye",
      colors: [
          "yellow"
      ],
      stats: {
          Hit: 10
      },
      Phase: 3,
      quality: "Rare"
  },
  32209: {
      name: "Mystic Lionseye",
      colors: [
          "yellow"
      ],
      stats: {
          Resil: 10
      },
      Phase: 3,
      quality: "Rare"
  },
  32212: {
      name: "Shifting Shadowsong Amethyst",
      colors: [
          "red",
          "blue"
      ],
      stats: {
          Agi: 5,
          Stam: 7
      },
      Phase: 3,
      quality: "Rare"
  },
  32213: {
      name: "Balanced Shadowsong Amethyst",
      colors: [
          "red",
          "blue"
      ],
      stats: {
          Stam: 7,
          MAP: 10,
          RAP: 10
      },
      Phase: 3,
      quality: "Rare"
  },
  32214: {
      name: "Infused Shadowsong Amethyst",
      colors: [
          "red",
          "blue"
      ],
      stats: {
          MAP: 10,
          RAP: 10,
          MP5: 2
      },
      Phase: 3,
      quality: "Rare"
  },
  32220: {
      name: "Glinting Pyrestone",
      colors: [
          "red",
          "yellow"
      ],
      stats: {
          Agi: 5,
          Hit: 5
      },
      Phase: 3,
      quality: "Rare"
  },
  32222: {
      name: "Wicked Pyrestone",
      colors: [
          "red",
          "yellow"
      ],
      stats: {
          MAP: 10,
          RAP: 10,
          Crit: 5
      },
      Phase: 3,
      quality: "Rare"
  },
  32225: {
      name: "Dazzling Seaspray Emerald",
      colors: [
          "yellow",
          "blue"
      ],
      stats: {
          Int: 5,
          MP5: 2
      },
      Phase: 3,
      quality: "Rare"
  },
  32226: {
      name: "Jagged Seaspray Emerald",
      colors: [
          "yellow",
          "blue"
      ],
      stats: {
          Stam: 7,
          Crit: 5
      },
      Phase: 3,
      quality: "Rare"
  },
  32409: {
      name: "Relentless Earthstorm Diamond",
      meta: "Y",
      stats: {
          Agi: 12
      },
      meta_red_req: 2,
      meta_blue_req: 2,
      meta_yellow_req: 2,
      Phase: 1,
      quality: "Rare"
  },
  32410: {
      name: "Thundering Skyfire Diamond",
      meta: "Y",
      meta_red_req: 2,
      meta_blue_req: 2,
      meta_yellow_req: 2,
      Phase: 1,
      quality: "Rare"
  },
  32634: {
      name: "Unstable Amethyst",
      colors: [
          "red",
          "blue"
      ],
      stats: {
          Stam: 6,
          MAP: 8,
          RAP: 8
      },
      Phase: 1,
      quality: "Rare"
  },
  32635: {
      name: "Unstable Peridot",
      colors: [
          "yellow",
          "blue"
      ],
      stats: {
          Stam: 6,
          Int: 4
      },
      Phase: 1,
      quality: "Rare"
  },
  32637: {
      name: "Unstable Citrine",
      colors: [
          "red",
          "yellow"
      ],
      stats: {
          MAP: 8,
          RAP: 8,
          Crit: 4
      },
      Phase: 1,
      quality: "Rare"
  },
  32640: {
      name: "Potent Unstable Diamond",
      meta: "Y",
      stats: {
          MAP: 24,
          RAP: 24
      },
      meta_more_color_req: "Blue",
      meta_less_color_req: "Yellow",
      Phase: 1,
      quality: "Rare"
  },
  33131: {
      name: "Crimson Sun",
      colors: [
          "red"
      ],
      stats: {
          MAP: 24,
          RAP: 24
      },
      Phase: 1,
      quality: "Rare"
  },
  33135: {
      name: "Falling Star",
      colors: [
          "blue"
      ],
      stats: {
          Stam: 18
      },
      Phase: 1,
      quality: "Rare"
  },
  33138: {
      name: "Mystic Bladestone",
      colors: [
          "yellow"
      ],
      stats: {
          Resil: 12
      },
      Phase: 3,
      quality: "Rare"
  },
  33143: {
      name: "Stone of Blades",
      colors: [
          "yellow"
      ],
      stats: {
          Crit: 12
      },
      Phase: 1,
      quality: "Rare"
  },
  33782: {
      name: "Steady Talasite",
      colors: [
          "yellow",
          "blue"
      ],
      stats: {
          Stam: 6,
          Resil: 4
      },
      Phase: 1,
      quality: "Rare"
  },
  34256: {
      name: "Charmed Amani Jewel",
      colors: [
          "blue"
      ],
      stats: {
          Stam: 15
      },
      Phase: 4,
      quality: "Rare"
  },
  35487: {
      name: "Bright Crimson Spinel",
      colors: [
          "red"
      ],
      stats: {
          MAP: 20,
          RAP: 20
      },
      Phase: 3,
      quality: "Rare"
  },
  38545: {
      name: "Bold Ornate Ruby",
      colors: [
          "red"
      ],
      stats: {
          MAP: 20,
          RAP: 20
      },
      Phase: 1,
      quality: "Rare"
  },
  38547: {
      name: "Inscribed Ornate Topaz",
      colors: [
          "red",
          "yellow"
      ],
      stats: {
          MAP: 10,
          RAP: 10,
          Crit: 5
      },
      Phase: 1,
      quality: "Rare"
  },
  38550: {
      name: "Smooth Ornate Dawnstone",
      colors: [
          "yellow"
      ],
      stats: {
          Crit: 10
      },
      Phase: 1,
      quality: "Rare"
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
      Phase: 1
  },
  23491: {
      name: "Fel Iron Chain Gloves",
      stats: {
          Stam: 24,
          Int: 17,
          MAP: 34,
          RAP: 34
      },
      Location: "Crafting",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  25654: {
      name: "Felscale Gloves",
      stats: {
          Agi: 19,
          MAP: 40,
          RAP: 40
      },
      Location: "Crafting",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 3
  },
  27528: {
      name: "Gauntlets of Desolation",
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
      Phase: 1
  },
  27531: {
      name: "Wastewalker Gloves",
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  28335: {
      name: "Gladiator's Chain Gauntlets",
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  29085: {
      name: "Demon Stalker Gauntlets",
      stats: {
          Agi: 28,
          Stam: 24,
          Int: 24,
          MAP: 58,
          RAP: 58,
          MP5: 6
      },
      Location: "Karazhan",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 2
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 3
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
      Phase: 1
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
      Phase: 5
  },
  31961: {
      name: "Merciless Gladiator's Chain Gauntlets",
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
      Phase: 2
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
      Phase: 1
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
      Phase: 3
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
      Phase: 3
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
      Phase: 1
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
      Phase: 3
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
      Phase: 3
  },
  33665: {
      name: "Vengeful Gladiator's Chain Gauntlets",
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
      Phase: 3
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
      Phase: 1
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
      Phase: 5
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
      Phase: 5
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
      Phase: 5
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
      Phase: 3
  },
  34991: {
      name: "Brutal Gladiator's Chain Gauntlets",
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
      Phase: 5
  },
  35475: {
      name: "Stalker's Chain Gauntlets",
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
      Phase: 1
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
      Phase: 1
  },
  23493: {
      name: "Fel Iron Chain Coif",
      stats: {
          Stam: 33,
          Int: 21,
          MAP: 42,
          RAP: 42
      },
      Location: "Crafting",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  25683: {
      name: "Stylin' Crimson Hat",
      stats: {
          Int: 30,
          MAP: 96,
          RAP: 96
      },
      Location: "Crafting",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
          "Meta",
          "Red"
      ],
      socketBonus: {
          Agi: 4
      },
      Phase: 1
  },
  28192: {
      name: "Helm of Desolation",
      stats: {
          Stam: 21,
          Int: 25,
          MAP: 66,
          RAP: 66,
          Crit: 14
      },
      Location: "Dungeon",
      sockets: [
          "Meta",
          "Yellow"
      ],
      socketBonus: {
          Hit: 4
      },
      Phase: 1
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
      Phase: 1
  },
  28224: {
      name: "Wastewalker Helm",
      stats: {
          Stam: 30,
          MAP: 56,
          RAP: 56,
          Crit: 22,
          Hit: 18
      },
      Location: "Dungeon",
      sockets: [
          "Meta",
          "Blue"
      ],
      socketBonus: {
          MAP: 8,
          RAP: 8
      },
      Phase: 1
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
          "Meta",
          "Red"
      ],
      socketBonus: {
          MP5: 2
      },
      Phase: 1
  },
  28331: {
      name: "Gladiator's Chain Helm",
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
      Phase: 1
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
          "Meta",
          "Yellow"
      ],
      socketBonus: {},
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  29081: {
      name: "Demon Stalker Greathelm",
      stats: {
          Agi: 35,
          Stam: 28,
          Int: 27,
          MAP: 66,
          RAP: 66
      },
      Location: "Karazhan",
      sockets: [
          "Meta",
          "Yellow"
      ],
      socketBonus: {
          Agi: 4
      },
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
          "Meta",
          "Yellow"
      ],
      socketBonus: {
          Stam: 6
      },
      Phase: 2
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
      Phase: 1
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
      Phase: 1
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
          "Meta",
          "Red"
      ],
      socketBonus: {
          Crit: 4
      },
      Phase: 3
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  31962: {
      name: "Merciless Gladiator's Chain Helm",
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
      Phase: 2
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
          "Meta",
          "Red"
      ],
      socketBonus: {},
      Phase: 3
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
          "Meta",
          "Yellow"
      ],
      socketBonus: {},
      Phase: 1
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
      Phase: 3
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
          "Meta",
          "Red"
      ],
      socketBonus: {
          MP5: 2
      },
      Phase: 3
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
      Phase: 2
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
      Phase: 4
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
      Phase: 4
  },
  33666: {
      name: "Vengeful Gladiator's Chain Helm",
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
      Phase: 3
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
      Phase: 5
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
          "Meta",
          "Red"
      ],
      socketBonus: {
          Agi: 4
      },
      Phase: 5
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
      Phase: 5
  },
  34992: {
      name: "Brutal Gladiator's Chain Helm",
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
      Phase: 5
  },
  35378: {
      name: "Stalker's Chain Helm",
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  25656: {
      name: "Felscale Pants",
      stats: {
          Agi: 31,
          MAP: 60,
          RAP: 60
      },
      Location: "Crafting",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  27837: {
      name: "Wastewalker Leggings",
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  27936: {
      name: "Greaves of Desolation",
      stats: {
          Stam: 24,
          Int: 33,
          MAP: 66,
          RAP: 66,
          Crit: 22,
          Hit: 12
      },
      Location: "Dungeon",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  28332: {
      name: "Gladiator's Chain Leggings",
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  29083: {
      name: "Demon Stalker Greaves",
      stats: {
          Agi: 40,
          Stam: 30,
          Int: 30,
          MAP: 82,
          RAP: 82,
          Hit: 15
      },
      Location: "Gruul's Lair",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 2
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
      Phase: 2
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
      Phase: 2
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 3
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
      Phase: 3
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
      Phase: 1
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
      Phase: 3
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
      Phase: 1
  },
  31328: {
      name: "Leggings of Beast Mastery",
      stats: {
          Agi: 30,
          Stam: 45
      },
      Location: "World Drop",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  31963: {
      name: "Merciless Gladiator's Chain Leggings",
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
      Phase: 2
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
      Phase: 3
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
      Phase: 4
  },
  33667: {
      name: "Vengeful Gladiator's Chain Leggings",
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
      Phase: 3
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
      Phase: 5
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
      Phase: 5
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
      Phase: 5
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
      Phase: 3
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
      Phase: 5
  },
  34993: {
      name: "Brutal Gladiator's Chain Leggings",
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
      Phase: 5
  },
  35379: {
      name: "Stalker's Chain Leggings",
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
      Phase: 1
  }
}

const MAIN_HANDS = {
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  25823: {
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  27754: {
      name: "Keen Marshfang Slicer",
      stats: {
          Agi: 9,
          MAP: 18,
          RAP: 18,
          Hit: 10
      },
      Location: "Quest Reward",
      type: 2,
      speed: 2.6,
      mindmg: 89,
      maxdmg: 165,
      hand: "One",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  28295: {
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  28312: {
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  28416: {
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 3
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 3
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
      Phase: 1
  },
  28572: {
      name: "Blade of the Unrequited",
      stats: {
          Stam: 13,
          MAP: 18,
          RAP: 18,
          Crit: 9
      },
      Location: "Karazhan",
      sockets: [
          "Red",
          "Yellow",
          "Blue"
      ],
      socketBonus: {
          MAP: 8,
          RAP: 8
      },
      type: 1,
      speed: 1.6,
      mindmg: 112,
      maxdmg: 168,
      hand: "One",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  29121: {
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  29150: {
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  29924: {
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
      Phase: 2
  },
  29962: {
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
      Phase: 2
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
      Phase: 2
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
      Phase: 1
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
      Phase: 1
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
      Phase: 2
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
      Phase: 1
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
      Phase: 1
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
      Phase: 2
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
      Phase: 1
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
      Phase: 1
  },
  30733: {
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
      Phase: 1
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
      Phase: 1
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  31422: {
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
      Phase: 1
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
      Phase: 1
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
      Phase: 3
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  31703: {
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 2
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
      Phase: 2
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
      Phase: 2
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
      Phase: 2
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
      Phase: 2
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
      Phase: 2
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
  },
  32369: {
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
      Phase: 3
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
      Phase: 1
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
      Phase: 1
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
      Phase: 2
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
      Phase: 3
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
      Phase: 4
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
      Phase: 4
  },
  33388: {
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
      Phase: 4
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
      Phase: 4
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
      Phase: "Two"
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
      Phase: 4
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
      Phase: 4
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
      Phase: 4
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 5
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
      Phase: 5
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
      Phase: 5
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
      Phase: 5
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
      Phase: 5
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
      Phase: 5
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
      Phase: 5
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
      Phase: 5
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
      Phase: 5
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
      Phase: 5
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
      Phase: 1
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
      Phase: 1
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
      Phase: 3
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
      Phase: 4
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
      Phase: 3
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
      Phase: 1
  },
  24106: {
      name: "Thick Felsteel Necklace",
      stats: {
          Stam: 36,
          Resil: 23
      },
      Location: "Crafting",
      Phase: 1
  },
  24114: {
      name: "Braided Eternium Chain",
      stats: {
          Crit: 28,
          Hit: 21
      },
      Location: "Crafting",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  25993: {
      name: "Finely Wrought Chain",
      stats: {
          MAP: 28,
          RAP: 28,
          Hit: 15
      },
      Location: "Quest Reward",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  28217: {
      name: "Tarren Mill Vitality Locket",
      stats: {
          Stam: 35,
          Resil: 24
      },
      Location: "Dungeon",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  29119: {
      name: "Haramad's Bargain",
      stats: {
          Str: 25,
          Agi: 24
      },
      Location: "Reputation Reward",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  29815: {
      name: "Chain of Glowing Tendrils",
      stats: {
          Str: 18,
          Agi: 17,
          Stam: 25
      },
      Location: "Quest Reward",
      Phase: 1
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
      Phase: 2
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
      Phase: 2
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
      Phase: 1
  },
  31147: {
      name: "Pendant of Cunning",
      stats: {
          Agi: 20,
          MAP: 40,
          RAP: 40
      },
      Location: "World Drop",
      Phase: 1
  },
  31275: {
      name: "Necklace of Trophies",
      stats: {
          Str: 22,
          Agi: 15
      },
      Location: "World Drop",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  31748: {
      name: "Shattrath Choker of Power",
      stats: {
          MAP: 46,
          RAP: 46,
          Resil: 24
      },
      Location: "Quest Reward",
      Phase: 1
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
      Phase: 1
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
      Phase: 3
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
      Phase: 2
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
      Phase: 3
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
      Phase: 2
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
      Phase: 4
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
      Phase: 3
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
      Phase: 5
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
      Phase: 5
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
      Phase: 5
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
      Phase: 5
  }
}

const OFF_HANDS = {
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  28572: {
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
      Phase: 5
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 2
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
      Phase: 4
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
      Phase: 1
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
      Phase: 1
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
      Phase: 2
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
      Phase: 2
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 2
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
      Phase: 1
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
      Phase: 3
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
      Phase: 1
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
      Phase: 2
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 2
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
      Phase: 2
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
      Phase: 2
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
      Phase: 2
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
      Phase: 2
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
      Phase: 2
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
      Phase: 2
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 1
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
      Phase: 3
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
      Phase: 4
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
      Phase: 4
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
      Phase: 1
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
      Phase: 4
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
      Phase: 4
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
      Phase: 4
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 5
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
      Phase: 5
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
      Phase: 5
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
      Phase: 5
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
      Phase: 5
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
      Phase: 1
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
      Phase: 5
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 3
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
      Phase: 3
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
      Phase: 5
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
      Phase: 5
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
      Phase: 3
  }
}

const QUIVERS = {
  18714: {
      name: "Ancient Sinew Wrapped Lamina",
      Location: "Petrified Leaf MC Quest and Blue Sinew"
  },
  19319: {
      name: "Knothide Quiver",
      Location: "Crafted - LW"
  },
  19320: {
      name: "Harpy Hide Quiver",
      Location: "Honor Reward"
  },
  29118: {
      name: "Netherscale Ammo Pouch",
      Location: "Crafted - LW"
  },
  29143: {
      name: "Clefthoof Hide Quiver",
      Location: "The Mag'har - Honored"
  },
  29144: {
      name: "Smuggler's Ammo Pouch",
      Location: "Reputation Reward"
  },
  34099: {
      name: "Quiver of a Thousand Feathers",
      Location: "Crafted - LW"
  },
  34100: {
      name: "Worg Hide Quiver",
      Location: "Reputation Reward"
  },
  34105: {
      name: "Knothide Ammo Pouch",
      Location: "Crafted - LW"
  },
  34106: {
      name: "Gnoll Skin Bandolier",
      Location: "Honor Reward"
  }
}

const RANGED_WEAPONS = {
  12651: {
      name: "Blackcrow",
      stats: {
          Agi: 3,
          Hit: 10
      },
      Location: "Xbow",
      mindmg: 99,
      maxdmg: 149,
      speed: 3.2,
      Phase: 1
  },
  15808: {
      name: "Fine Light Crossbow",
      Location: "Xbow",
      mindmg: 29,
      maxdmg: 29,
      speed: 2.7,
      Phase: 1
  },
  17072: {
      name: "Blastershot Launcher",
      stats: {
          Stam: 6,
          Crit: 14
      },
      Location: "Gun",
      mindmg: 89,
      maxdmg: 167,
      speed: 2.6,
      Phase: 1
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
      Phase: 2.9
  },
  18729: {
      name: "Screeching Bow",
      stats: {
          Stam: 3
      },
      Location: "Bow",
      mindmg: 90,
      maxdmg: 90,
      speed: 2.3,
      Phase: 1
  },
  19350: {
      name: "Heartstriker",
      stats: {
          MAP: 24,
          RAP: 24
      },
      Location: "Bow",
      mindmg: 97,
      maxdmg: 180,
      speed: 2.6,
      Phase: 1
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
      Phase: 3.4
  },
  20437: {
      name: "Outrider's Bow",
      stats: {
          Agi: 4,
          Stam: 10
      },
      Location: "Bow",
      mindmg: 68,
      maxdmg: 128,
      speed: 2.4,
      Phase: 1
  },
  20599: {
      name: "Polished Ironwood Crossbow",
      stats: {
          Stam: 5,
          MAP: 24,
          RAP: 24
      },
      Location: "Xbow",
      mindmg: 124,
      maxdmg: 186,
      speed: 3.1,
      Phase: 1
  },
  21272: {
      name: "Blessed Qiraji Musket",
      stats: {
          Stam: 10,
          RAP: 31
      },
      Location: "Gun",
      mindmg: 103,
      maxdmg: 192,
      speed: 2.6,
      Phase: 1
  },
  21459: {
      name: "Crossbow of Imminent Doom",
      stats: {
          Str: 5,
          Agi: 7,
          Stam: 5,
          Hit: 10
      },
      Location: "Xbow",
      mindmg: 126,
      maxdmg: 189,
      speed: 3.1,
      Phase: 1
  },
  22318: {
      name: "Malgen's Long Bow",
      stats: {
          Stam: 4,
          MAP: 20,
          RAP: 20
      },
      Location: "Bow",
      mindmg: 80,
      maxdmg: 150,
      speed: 2.9,
      Phase: 1
  },
  22812: {
      name: "Nerubian Slavemaker",
      stats: {
          MAP: 24,
          RAP: 24,
          Crit: 14
      },
      Location: "Xbow",
      mindmg: 151,
      maxdmg: 281,
      speed: 3.2,
      Phase: 1
  },
  23746: {
      name: "Adamantite Rifle",
      stats: {
          Agi: 12,
          MAP: 22,
          RAP: 22
      },
      Location: "Gun",
      mindmg: 126,
      maxdmg: 234,
      speed: 3,
      Phase: 1
  },
  23747: {
      name: "Felsteel Boomstick",
      stats: {
          Stam: 12,
          Crit: 13
      },
      Location: "Gun",
      mindmg: 104,
      maxdmg: 194,
      speed: 2.4,
      Phase: 1
  },
  23748: {
      name: "Ornate Khorium Rifle",
      stats: {
          Agi: 14,
          Hit: 13
      },
      Location: "Gun",
      mindmg: 144,
      maxdmg: 268,
      speed: 3.1,
      Phase: 1
  },
  24381: {
      name: "Coilfang Needler",
      stats: {
          Agi: 12,
          MAP: 24,
          RAP: 24
      },
      Location: "Xbow",
      mindmg: 124,
      maxdmg: 187,
      speed: 2.9,
      Phase: 1
  },
  25248: {
      name: "Talbuk Hunting Bow",
      Location: "Bow",
      mindmg: 102,
      maxdmg: 190,
      speed: 2.7,
      Phase: 1
  },
  25249: {
      name: "Ranger's Recurved Bow",
      Location: "Bow",
      mindmg: 104,
      maxdmg: 195,
      speed: 2.7,
      Phase: 1
  },
  25260: {
      name: "Archer's Crossbow",
      Location: "Xbow",
      mindmg: 96,
      maxdmg: 179,
      speed: 2.7,
      Phase: 1
  },
  25262: {
      name: "Battle Damaged Crossbow",
      Location: "Xbow",
      mindmg: 102,
      maxdmg: 190,
      speed: 2.7,
      Phase: 1
  },
  25263: {
      name: "Assassins' Silent Crossbow",
      Location: "Xbow",
      mindmg: 104,
      maxdmg: 195,
      speed: 2.7,
      Phase: 1
  },
  25267: {
      name: "Rampant Crossbow",
      Location: "Xbow",
      mindmg: 115,
      maxdmg: 215,
      speed: 2.7,
      Phase: 1
  },
  25278: {
      name: "Nessingwary Longrifle",
      Location: "Gun",
      mindmg: 107,
      maxdmg: 200,
      speed: 2.7,
      Phase: 1
  },
  25639: {
      name: "Hemet's Elekk Gun",
      stats: {
          MAP: 24,
          RAP: 24,
          Crit: 12
      },
      Location: "Gun",
      mindmg: 103,
      maxdmg: 193,
      speed: 2.5,
      Phase: 1
  },
  25953: {
      name: "Ethereal Warp-Bow",
      stats: {
          Stam: 13,
          Crit: 14
      },
      Location: "Bow",
      mindmg: 120,
      maxdmg: 181,
      speed: 2.7,
      Phase: 1
  },
  27507: {
      name: "Adamantine Repeater",
      stats: {
          Agi: 15,
          Hit: 10
      },
      Location: "Xbow",
      mindmg: 159,
      maxdmg: 239,
      speed: 3,
      Phase: 1
  },
  27526: {
      name: "Skyfire Hawk-Bow",
      stats: {
          MAP: 26,
          RAP: 26,
          Hit: 14
      },
      Location: "Bow",
      mindmg: 108,
      maxdmg: 202,
      speed: 2.4,
      Phase: 1
  },
  27794: {
      name: "Recoilless Rocket Ripper X-54",
      stats: {
          Stam: 13,
          Crit: 16
      },
      Location: "Gun",
      mindmg: 131,
      maxdmg: 244,
      speed: 2.9,
      Phase: 1
  },
  27817: {
      name: "Starbolt Longbow",
      stats: {
          Stam: 19,
          Crit: 15
      },
      Location: "Bow",
      mindmg: 130,
      maxdmg: 242,
      speed: 2.8,
      Phase: 1
  },
  27898: {
      name: "Wrathfire Hand-Cannon",
      stats: {
          MAP: 30,
          RAP: 30,
          Crit: 10
      },
      Location: "Gun",
      mindmg: 90,
      maxdmg: 168,
      speed: 2,
      Phase: 1
  },
  27931: {
      name: "Splintermark",
      stats: {
          Stam: 7,
          MAP: 16,
          RAP: 16,
          Crit: 12
      },
      Location: "Bow",
      mindmg: 93,
      maxdmg: 175,
      speed: 2.5,
      Phase: 1
  },
  27987: {
      name: "Melmorta's Twilight Longbow",
      stats: {
          Stam: 15,
          MAP: 30,
          RAP: 30
      },
      Location: "Bow",
      mindmg: 135,
      maxdmg: 252,
      speed: 3,
      Phase: 1
  },
  28286: {
      name: "Telescopic Sharprifle",
      stats: {
          Agi: 13,
          MAP: 28,
          RAP: 28
      },
      Location: "Gun",
      mindmg: 139,
      maxdmg: 259,
      speed: 3,
      Phase: 1
  },
  28294: {
      name: "Gladiator's Heavy Crossbow",
      stats: {
          Stam: 15,
          RAP: 26,
          Crit: 12,
          Resil: 12
      },
      Location: "Xbow",
      mindmg: 204,
      maxdmg: 307,
      speed: 3.1,
      Phase: 1
  },
  28397: {
      name: "Emberhawk Crossbow",
      stats: {
          MAP: 14,
          RAP: 14,
          Crit: 18
      },
      Location: "Xbow",
      mindmg: 159,
      maxdmg: 239,
      speed: 3,
      Phase: 1
  },
  28504: {
      name: "Steelhawk Crossbow",
      stats: {
          MAP: 30,
          RAP: 30,
          Hit: 16
      },
      Location: "Xbow",
      mindmg: 155,
      maxdmg: 288,
      speed: 2.8,
      Phase: 1
  },
  28581: {
      name: "Wolfslayer Sniper Rifle",
      stats: {
          Agi: 15,
          MAP: 32,
          RAP: 32
      },
      Location: "Gun",
      mindmg: 149,
      maxdmg: 278,
      speed: 2.7,
      Phase: 1
  },
  28772: {
      name: "Sunfury Bow of the Phoenix",
      stats: {
          Agi: 19,
          MAP: 34,
          RAP: 34
      },
      Location: "Bow",
      mindmg: 169,
      maxdmg: 314,
      speed: 2.9,
      Phase: 1
  },
  29115: {
      name: "Consortium Blaster",
      stats: {
          Stam: 15,
          MAP: 28,
          RAP: 28,
          Crit: 7
      },
      Location: "Gun",
      mindmg: 111,
      maxdmg: 207,
      speed: 2.4,
      Phase: 1
  },
  29151: {
      name: "Veteran's Musket",
      stats: {
          Agi: 12,
          MAP: 22,
          RAP: 22,
          Hit: 11
      },
      Location: "Gun",
      mindmg: 139,
      maxdmg: 259,
      speed: 2.7,
      Phase: 1
  },
  29152: {
      name: "Marksman's Bow",
      stats: {
          Agi: 12,
          MAP: 22,
          RAP: 22,
          Hit: 11
      },
      Location: "Bow",
      mindmg: 144,
      maxdmg: 269,
      speed: 2.8,
      Phase: 1
  },
  29351: {
      name: "Wrathtide Longbow",
      stats: {
          Agi: 14,
          MAP: 28,
          RAP: 28
      },
      Location: "Bow",
      mindmg: 158,
      maxdmg: 295,
      speed: 3,
      Phase: 1
  },
  29949: {
      name: "Arcanite Steam-Pistol",
      stats: {
          Agi: 20,
          Hit: 19
      },
      Location: "Gun",
      mindmg: 177,
      maxdmg: 329,
      speed: 2.9,
      Phase: 2
  },
  30105: {
      name: "Serpent Spine Longbow",
      stats: {
          Stam: 17,
          MAP: 38,
          RAP: 38,
          Crit: 16
      },
      Location: "Bow",
      mindmg: 217,
      maxdmg: 327,
      speed: 3,
      Phase: 2
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
      Location: "Bow",
      mindmg: 97,
      maxdmg: 181,
      speed: 2.5,
      Phase: 1
  },
  30279: {
      name: "Mama's Insurance",
      stats: {
          Agi: 10,
          MAP: 32,
          RAP: 32,
          Crit: 6
      },
      Location: "Gun",
      mindmg: 87,
      maxdmg: 163,
      speed: 2.2,
      Phase: 1
  },
  30397: {
      name: "Spymaster's Crossbow",
      stats: {
          Agi: 7,
          Int: 5,
          MAP: 24,
          RAP: 24
      },
      Location: "Xbow",
      mindmg: 104,
      maxdmg: 195,
      speed: 2.7,
      Phase: 1
  },
  30724: {
      name: "Barrel-Blade Longrifle",
      stats: {
          Agi: 16
      },
      Location: "Gun",
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
      Phase: 1
  },
  30906: {
      name: "Bristleblitz Striker",
      stats: {
          Stam: 28,
          Crit: 25
      },
      Location: "Bow",
      mindmg: 201,
      maxdmg: 374,
      speed: 3,
      Phase: 3
  },
  31000: {
      name: "Bloodwarder's Rifle",
      stats: {
          Agi: 8,
          Stam: 7,
          MAP: 30,
          RAP: 30
      },
      Location: "Gun",
      mindmg: 114,
      maxdmg: 213,
      speed: 2.6,
      Phase: 1
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
      Phase: 2.6
  },
  31204: {
      name: "The Gunblade",
      stats: {
          MAP: 36,
          RAP: 36
      },
      Location: "Gun",
      mindmg: 112,
      maxdmg: 210,
      speed: 2.8,
      Phase: 1
  },
  31303: {
      name: "Valanos' Longbow",
      stats: {
          Int: 10,
          MAP: 22,
          RAP: 22,
          Crit: 10
      },
      Location: "Bow",
      mindmg: 130,
      maxdmg: 242,
      speed: 2.8,
      Phase: 1
  },
  31323: {
      name: "Don Santos' Famous Hunting Rifle",
      Location: "Gun",
      mindmg: 139,
      maxdmg: 259,
      speed: 2.7,
      Phase: 1
  },
  31416: {
      name: "Scorch Wood Bow",
      stats: {
          Agi: 7,
          Int: 5,
          MAP: 24,
          RAP: 24
      },
      Location: "Bow",
      mindmg: 85,
      maxdmg: 159,
      speed: 2.2,
      Phase: 1
  },
  31986: {
      name: "Merciless Gladiator's Crossbow of the Phoenix",
      stats: {
          Stam: 21,
          RAP: 26,
          Crit: 15,
          Resil: 13
      },
      Location: "Xbow",
      mindmg: 211,
      maxdmg: 318,
      speed: 3,
      Phase: 2
  },
  32253: {
      name: "Legionkiller",
      stats: {
          Agi: 21,
          Stam: 30
      },
      Location: "Xbow",
      mindmg: 184,
      maxdmg: 342,
      speed: 2.9,
      Phase: 3
  },
  32325: {
      name: "Rifle of the Stoic Guardian",
      stats: {
          Stam: 31
      },
      Location: "Gun",
      mindmg: 120,
      maxdmg: 224,
      speed: 1.9,
      Phase: 3
  },
  32336: {
      name: "Black Bow of the Betrayer",
      stats: {
          MAP: 26,
          RAP: 26
      },
      Location: "Bow",
      mindmg: 201,
      maxdmg: 374,
      speed: 3,
      Phase: 3
  },
  32645: {
      name: "Crystalline Crossbow",
      stats: {
          Agi: 12,
          Stam: 16,
          Hit: 11
      },
      Location: "Xbow",
      mindmg: 144,
      maxdmg: 269,
      speed: 2.8,
      Phase: 3
  },
  32756: {
      name: "Gyro-Balanced Khorium Destroyer",
      stats: {
          Stam: 27
      },
      Location: "Gun",
      sockets: [
          "Yellow"
      ],
      socketBonus: {
          Stam: 3
      },
      mindmg: 148,
      maxdmg: 275,
      speed: 2.8,
      Phase: 3
  },
  33006: {
      name: "Vengeful Gladiator's Heavy Crossbow",
      stats: {
          Stam: 24,
          RAP: 34,
          Crit: 16,
          Resil: 13
      },
      Location: "Xbow",
      mindmg: 223,
      maxdmg: 336,
      speed: 3,
      Phase: 3
  },
  33474: {
      name: "Ancient Amani Longbow",
      stats: {
          MAP: 38,
          RAP: 38,
          ArP: 126
      },
      Location: "Bow",
      mindmg: 181,
      maxdmg: 337,
      speed: 3,
      Phase: 4
  },
  33491: {
      name: "Tuskbreaker",
      stats: {
          MAP: 38,
          RAP: 38,
          Haste: 18
      },
      Location: "Gun",
      mindmg: 175,
      maxdmg: 326,
      speed: 2.9,
      Phase: 4
  },
  34196: {
      name: "Golden Bow of Quel'Thalas",
      stats: {
          Agi: 18,
          MAP: 34,
          RAP: 34,
          ArP: 175
      },
      Location: "Bow",
      mindmg: 204,
      maxdmg: 380,
      speed: 3,
      Phase: 5
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
      Phase: 2.7
  },
  34529: {
      name: "Vengeful Gladiator's Longbow",
      stats: {
          Stam: 24,
          RAP: 34,
          Crit: 16,
          Resil: 13
      },
      Location: "Bow",
      mindmg: 223,
      maxdmg: 336,
      speed: 3,
      Phase: 3
  },
  34530: {
      name: "Vengeful Gladiator's Rifle",
      stats: {
          Stam: 24,
          RAP: 34,
          Crit: 16,
          Resil: 13
      },
      Location: "Gun",
      mindmg: 223,
      maxdmg: 336,
      speed: 3,
      Phase: 3
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
      Location: "Bow",
      mindmg: 138,
      maxdmg: 207,
      speed: 2.6,
      Phase: 1
  },
  34892: {
      name: "Crossbow of Relentless Strikes",
      stats: {
          MAP: 32,
          RAP: 32,
          Crit: 18,
          Hit: 14
      },
      Location: "Xbow",
      mindmg: 182,
      maxdmg: 339,
      speed: 2.8,
      Phase: 5
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
      Phase: 1
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
      Phase: 1
  },
  24074: {
      name: "Fel Iron Blood Ring",
      stats: {
          MAP: 48,
          RAP: 48
      },
      Location: "Crafting",
      Phase: 1
  },
  24088: {
      name: "Delicate Eternium Ring",
      stats: {
          Agi: 25,
          Stam: 15
      },
      Location: "Crafting",
      Phase: 1
  },
  24089: {
      name: "Blazing Eternium Band",
      stats: {
          Stam: 27,
          Int: 18,
          MP5: 8
      },
      Location: "Crafting",
      Phase: 1
  },
  24151: {
      name: "Mok'Nathal Clan Ring",
      stats: {
          Stam: 16,
          Resil: 14
      },
      Location: "Dungeon",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  27869: {
      name: "Soulpriest's Ring of Resolve",
      stats: {
          Stam: 34,
          Resil: 24
      },
      Location: "Dungeon",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 2
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 1
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
      Phase: 2
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
      Phase: 2
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
      Phase: 1
  },
  30738: {
      name: "Ring of Reciprocity",
      stats: {
          RAP: 62,
          Crit: 19,
          Hit: 15
      },
      Location: "Outdoor Boss",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  31277: {
      name: "Pathfinder's Band",
      stats: {
          Agi: 25,
          MAP: 34,
          RAP: 34
      },
      Location: "World Drop",
      Phase: 1
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
      Phase: 1
  },
  31381: {
      name: "Aggressor's Mark of the Sha'tar",
      stats: {
          MAP: 24,
          RAP: 24,
          Crit: 29
      },
      Location: "Quest Reward",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 3
  },
  32081: {
      name: "Eye of the Stalker",
      stats: {
          Stam: 31,
          MAP: 60,
          RAP: 60
      },
      Location: "Dungeon",
      Phase: 1
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 1
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
      Phase: 2
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
      Phase: 1
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
      Phase: 4
  },
  33500: {
      name: "Signet of Eternal Life",
      stats: {
          Stam: 54,
          Resil: 37
      },
      Location: "Zul'Aman",
      Phase: 4
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
      Phase: 2
  },
  34075: {
      name: "Ring of Ghoulish Delight",
      stats: {
          Stam: 31,
          MAP: 60,
          RAP: 60
      },
      Location: "Dungeon",
      Phase: 1
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
      Phase: 5
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
      Phase: 5
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
      Phase: 1
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
      Phase: 5
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  27713: {
      name: "Pauldrons of Desolation",
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
      Phase: 1
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
      Phase: 1
  },
  27797: {
      name: "Wastewalker Shoulderpads",
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  28333: {
      name: "Gladiator's Chain Spaulders",
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
      Phase: 1
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
      Phase: 1
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
      Phase: 3
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
      Phase: 1
  },
  29084: {
      name: "Demon Stalker Shoulderguards",
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 2
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
      Phase: 2
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
      Phase: 2
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 3
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
      Phase: 1
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
      Phase: 3
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  31964: {
      name: "Merciless Gladiator's Chain Spaulders",
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
      Phase: 2
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
      Phase: 1
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 4
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
      Phase: 4
  },
  33668: {
      name: "Vengeful Gladiator's Chain Spaulders",
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
      Phase: 3
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
      Phase: 5
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
      Phase: 5
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
      Phase: 5
  },
  34994: {
      name: "Brutal Gladiator's Chain Spaulders",
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
      Phase: 5
  },
  35380: {
      name: "Stalker's Chain Spaulders",
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
      Phase: 1
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
      Phase: 1
  },
  18846: {
      name: "Insignia of the Horde",
      stats: {
          Resil: 20
      },
      Location: "Honor Reward",
      Phase: 1
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
      Phase: 1
  },
  21789: {
      name: "Figurine - Dark Iron Scorpid",
      stats: {
          Agi: 9
      },
      Location: "Crafting",
      Phase: 1
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
      Phase: 1
  },
  23206: {
      name: "Mark of the Champion",
      Location: "Naxx",
      Phase: 1
  },
  23835: {
      name: "Gnomish Poultryizer",
      stats: {
          Stam: 45
      },
      Location: "Crafting",
      Phase: 1
  },
  23836: {
      name: "Goblin Rocket Launcher",
      stats: {
          Stam: 45
      },
      Location: "Crafting",
      Phase: 1
  },
  24124: {
      name: "Figurine - Felsteel Boar",
      stats: {
          MAP: 68,
          RAP: 68
      },
      Location: "Crafting",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  27416: {
      name: "Fetish of the Fallen",
      stats: {
          MAP: 56,
          RAP: 56
      },
      Location: "Dungeon",
      Phase: 1
  },
  27921: {
      name: "Mark of Conquest",
      stats: {
          MAP: 54,
          RAP: 54
      },
      Location: "PvP Reward",
      is_proc: "Yes",
      proc_chance: "13.0%",
      aura: {
          proc_type: 2
      },
      Phase: 1
  },
  28034: {
      name: "Hourglass of the Unraveller",
      stats: {
          Crit: 32
      },
      Location: "Dungeon",
      is_proc: "Yes",
      aura: {
          stats: {
              MAP: 300,
              RAP: 300
          },
          duration: 10,
          cd: 50,
          proc_type: 1
      },
      proc_chance: 0.1,
      Phase: 1
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
      Phase: 1
  },
  28121: {
      name: "Icon of Unyielding Courage",
      stats: {
          Hit: 30
      },
      Location: "Dungeon",
      Phase: 1
  },
  28237: {
      name: "Medallion of the Alliance",
      stats: {
          Resil: 20
      },
      Location: "Honor Reward",
      Phase: 1
  },
  28243: {
      name: "Medallion of the Horde",
      stats: {
          Resil: 20
      },
      Location: "Honor Reward",
      Phase: 1
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
      Phase: 1
  },
  28579: {
      name: "Romulo's Poison Vial",
      stats: {
          Hit: 35
      },
      Location: "Karazhan",
      is_proc: "Yes",
      aura: {
          PPM: 1,
          proc_type: 2
      },
      Phase: 1
  },
  28830: {
      name: "Dragonspine Trophy",
      stats: {
          MAP: 40,
          RAP: 40
      },
      Location: "Gruul's Lair",
      is_proc: "Yes",
      aura: {
          stats: {
              Haste: 325
          },
          duration: 10,
          cd: 20,
          PPM: 1,
          proc_type: 2
      },
      Phase: 1
  },
  29181: {
      name: "Timelapse Shard",
      stats: {
          Stam: 27,
          Resil: 24
      },
      Location: "Reputation Reward",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  30448: {
      name: "Talon of Al'ar",
      Location: "The Eye",
      is_proc: "Yes",
      Phase: 2
  },
  30620: {
      name: "Spyglass of the Hidden Fleet",
      stats: {
          Stam: 40
      },
      Location: "Serpentshrine Cavern",
      Phase: 2
  },
  30627: {
      name: "Tsunami Talisman",
      stats: {
          Crit: 38,
          Hit: 10
      },
      Location: "Serpentshrine Cavern",
      is_proc: "Yes",
      aura: {
          stats: {
              MAP: 340,
              RAP: 340
          },
          duration: 10,
          cd: 45,
          proc_type: 1
      },
      proc_chance: 0.1,
      Phase: 2
  },
  31113: {
      name: "Violet Badge",
      stats: {
          Stam: 36
      },
      Location: "Quest Reward",
      Phase: 1
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
      Phase: 1
  },
  31856: {
      name: "Darkmoon Card: Crusade",
      Location: "World Drop",
      is_proc: "Yes",
      aura: {
          duration: 10,
          proc_type: 2
      },
      Phase: 1
  },
  31857: {
      name: "Darkmoon Card: Wrath",
      Location: "World Drop",
      is_proc: "Yes",
      Phase: 1
  },
  31858: {
      name: "Darkmoon Card: Vengeance",
      stats: {
          Stam: 51
      },
      Location: "World Drop",
      is_proc: "Yes",
      Phase: 1
  },
  31859: {
      name: "Darkmoon Card: Madness",
      stats: {
          Stam: 51
      },
      Location: "World Drop",
      is_proc: "Yes",
      Phase: 1
  },
  32487: {
      name: "Ashtongue Talisman of Swiftness",
      Location: "Black Temple",
      is_proc: "Yes",
      aura: {
          stats: {
              MAP: 275,
              RAP: 275
          },
          duration: 8,
          proc_type: 3
      },
      proc_chance: 0.15,
      Phase: 3
  },
  32505: {
      name: "Madness of the Betrayer",
      stats: {
          MAP: 84,
          RAP: 84,
          Hit: 20
      },
      Location: "Black Temple",
      is_proc: "Yes",
      aura: {
          duration: 10,
          PPM: 1,
          proc_type: 2
      },
      Phase: 3
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
      Phase: 1
  },
  32658: {
      name: "Badge of Tenacity",
      Location: "World Drop",
      aura: {
          duration: 20,
          cd: 120
      },
      Phase: 1
  },
  32770: {
      name: "Skyguard Silver Cross",
      stats: {
          Crit: 34
      },
      Location: "Reputation Reward",
      Phase: 1
  },
  32864: {
      name: "Commander's Badge",
      stats: {
          Stam: 45
      },
      Location: "Reputation Reward",
      Phase: 1
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
      Phase: 4
  },
  33832: {
      name: "Battlemaster's Determination",
      stats: {
          MAP: 80,
          RAP: 80
      },
      Location: "Honor Reward",
      Phase: 2
  },
  34163: {
      name: "Battlemaster's Cruelty",
      stats: {
          Crit: 40
      },
      Location: "Honor Reward",
      Phase: 1
  },
  34427: {
      name: "Blackened Naaru Sliver",
      stats: {
          Haste: 54
      },
      Location: "Sunwell",
      is_proc: "Yes",
      aura: {
          duration: 20,
          cd: 45,
          proc_type: 2
      },
      proc_chance: "10.0%",
      Phase: 5
  },
  35694: {
      name: "Figurine - Khorium Boar",
      stats: {
          MAP: 84,
          RAP: 84
      },
      Location: "Crafting",
      Phase: 1
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
      Phase: 5
  },
  35751: {
      name: "Assassin's Alchemist Stone",
      stats: {
          MAP: 108,
          RAP: 108
      },
      Location: "Crafting",
      Phase: 5
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  25695: {
      name: "Felstalker Belt",
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 3
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  28828: {
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
      Phase: 5
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  29516: {
      name: "Ebon Netherscale Belt",
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
      Phase: 1
  },
  29526: {
      name: "Primalstrike Belt",
      stats: {
          Agi: 20,
          Stam: 32,
          MAP: 84,
          RAP: 84
      },
      Location: "Crafting",
      Phase: 1
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
      Phase: 1
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
      Phase: 2
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
      Phase: 2
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
      Phase: 2
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
      Phase: 1
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
      Phase: 3
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
      Phase: 3
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 3
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
      Phase: 1
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
      Phase: 1
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
      Phase: 4
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
      Phase: 3
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
      Phase: 3
  },
  34549: {
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
      Phase: 1
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
      Phase: 3
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
      Phase: 1
  },
  23494: {
      name: "Fel Iron Chain Bracers",
      stats: {
          Agi: 13,
          Stam: 19,
          MAP: 26,
          RAP: 26
      },
      Location: "Crafting",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  25697: {
      name: "Felstalker Bracers",
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 1
  },
  29517: {
      name: "Ebon Netherscale Bracers",
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
      Phase: 1
  },
  29527: {
      name: "Primalstrike Bracers",
      stats: {
          Agi: 15,
          Stam: 21,
          MAP: 64,
          RAP: 64
      },
      Location: "Crafting",
      Phase: 1
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
      Phase: 1
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
      Phase: 1
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
      Phase: 2
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
      Phase: 2
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
      Phase: 2
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
      Phase: 3
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
      Phase: 3
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
      Phase: 1
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 3
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
      Phase: 1
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
      Phase: 1
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
      Phase: 3
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
      Phase: 3
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
      Phase: 1
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
      Phase: 5
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
      Phase: 5
  }
}

const GEAR_MAP = {
  ammo: AMMOS,
  back: BACKS,
  chest: CHESTS,
  feet: FEET,
  gem: GEMS,
  hands: HANDS,
  head: HEADS,
  legs: LEGS,
  main_hand: MAIN_HANDS,
  neck: NECKS,
  off_hand: OFF_HANDS,
  quiver: QUIVERS,
  ranged_weapon: RANGED_WEAPONS,
  ring1: RINGS,
  ring2: RINGS,
  shoulders: SHOULDERS,
  trinket1: TRINKETS,
  trinket2: TRINKETS,
  waist: WAISTS,
  wrists: WRISTS
}

const ALLOWED_IN_MAIN_HAND = ['Two', 'Main', 'One']
const ALLOWED_IN_OFF_HAND = ['Off', 'One']

function getStatsFromGear(gear) {
  const setPieces = {}

  const result =  Object.entries(gear).reduce(({ stats, auras }, [type, id]) => {
    if (!GEAR_MAP[type]) throw Error(`Detected invalid gear type "${type}"`)
    if (!GEAR_MAP[type][id]) throw Error(`Detected invalid gear piece of type "${type}" with id "${id}"`)
    const gearPiece = GEAR_MAP[type][id]

    if (type === 'main_hand') {
      if (!ALLOWED_IN_MAIN_HAND.includes(gearPiece.hand)) throw new Error(`Tried to use "${gearPiece.name}" in ${type} but its not allowed.`)
      if (gearPiece.hand === 'Two' && gear.off_hand) throw new Error(`Can't use a two-handed weapon and an offhand weapon!`)
    } else if (type === 'off_hand' && !ALLOWED_IN_OFF_HAND.includes(gearPiece.hand))
      throw new Error(`Tried to use "${gearPiece.name}" in ${type} but its not allowed.`)

    Object.entries(gearPiece.stats).forEach(([stat, amount]) => stats[stat] = (stats[stat] || 0) + amount) // Accumulate gear piece stats on the general stats
    if (gearPiece.aura) auras[id] = gearPiece.aura    // If gear piece has an aura, add it to the general auras object
    if (gearPiece.set) { // If gear belongs to a set, add to the sum of pieces of that set
      if (!SETS[gearPiece.set]) throw Error(`Gear piece "${gearPiece.name}" is linked to set with id ${gearPiece.set}, but no related set could be found.`)
      setPieces[gearPiece.set] = (setPieces[gearPiece.set] || 0) + 1
    }

    return { stats, auras }
  }, { stats: {}, auras: {} })

  // Add bonus sets, based on amount of pieces of each set.
  result.set_bonuses = Object.entries(SETS).reduce((bonuses, [setId, setData]) => {
    const pieces = setPieces[setId] || 0

    Object.entries(setData.bonuses).forEach(([requiredPieces, bonus]) => {
      const base = bonus.base || 0
      Object.entries(bonus).forEach(([name, val]) => {
        if (name === 'base') return
        bonuses[`${setData.abrv}_${requiredPieces}p_${name}`] = base + (pieces >= requiredPieces ? val : 0)
      })
    })

    return bonuses
  }, {})

  return result
}

const DST_BB_COMBO = {
  trinket1: 29383,
  trinket2: 28830,
}

// BM GEAR SETS
const PRERAID_BM_GEAR = {
  head: 28275,
  neck: 29381,
  shoulders: 27801,
  back: 24259,
  chest: 28228,
  wrists: 29246,
  main_hand: 27903,
  hands: 27474,
  waist: 29247,
  legs: 30538,
  feet: 25686,
  ring1: 30860,
  ring2: 31077,
  trinket1: 29383,
  trinket2: 28288,
  ranged_weapon: 29351,
}

const P1_BM_GEAR = {
  head: 28275,
  shoulders: 27801,
  chest: 28228,
  wrists: 29246,
  hands: 27474,
  waist: 28828,
  legs: 28741,
  feet: 28545,
  ring1: 28757,
  ...DST_BB_COMBO,
  ranged_weapon: 30105
}

const P1_BM_6HIT_1H_GEAR = {
  ...P1_BM_GEAR,
  neck: 29381,
  back: 24259,
  main_hand: 27846,
  off_hand: 28572,
  ring2: 28791,
}

const P1_BM_9HIT_1H_GEAR = {
  ...P1_BM_GEAR,
  neck: 28509,
  back: 28672,
  main_hand: 27846,
  off_hand: 28572,
  ring2: 28649,
}

const P1_BM_6HIT_MW_GEAR = {
  ...P1_BM_GEAR,
  neck: 29381,
  back: 24259,
  main_hand: 28435,
  ring2: 28791,
}

const P1_BM_9HIT_MW_GEAR = {
  ...P1_BM_GEAR,
  neck: 28509,
  back: 28672,
  main_hand: 28435,
  ring2: 28649,
}

const P2_BM_GEAR = {
  head: 30141,
  neck: 30017,
  shoulders: 30143,
  back: 29994,
  chest: 30139,
  wrists: 29966,
  hands: 30140,
  waist: 30040,
  legs: 29995,
  feet: 30104,
  ring1: 29997,
  ...DST_BB_COMBO,
  ranged_weapon: 30105
}

const P2_BM_6HIT_1H_GEAR = {
  ...P2_BM_GEAR,
  main_hand: 32944,
  off_hand: 29948,
  ring2: 28791,
}

const P2_BM_6HIT_MW_GEAR = {
  ...P2_BM_GEAR,
  main_hand: 29993,
  ring2: 28791,
}

const P2_BM_9HIT_1H_GEAR = {
  ...P2_BM_GEAR,
  main_hand: 32944,
  off_hand: 29948,
  ring2: 30052,
}

const P3_BM_6HIT_1H_GEAR = {
  head: 32235,
  neck: 32591,
  shoulders: 31006,
  back: 29994,
  chest: 31004,
  wrists: 32324,
  main_hand: 30901,
  off_hand: 30881,
  hands: 31001,
  waist: 30879,
  legs: 31005,
  feet: 32366,
  ring1: 29301,
  ring2: 32497,
  trinket1: 28830,
  trinket2: 32505,
  ranged_weapon: 30906
}

// SV GEAR SETS
const P1_SV_DMG_GEAR = {
  head: 28275,
  shoulders: 27801,
  chest: 28228,
  wrists: 25697,
  hands: 27474,
  waist: 28750,
  legs: 28741,
  feet: 28545,
  ring1: 28791,
  ring2: 31277,
  ...DST_BB_COMBO,
  ranged_weapon: 30105
}

const P1_SV_DMG_3HIT_1H_GEAR = {
  ...P1_SV_DMG_GEAR,
  neck: 28343,
  back: 29382,
  main_hand: 27846,
  off_hand: 28572,
}

const P1_SV_DMG_6HIT_1H_GEAR = {
  ...P1_SV_DMG_GEAR,
  neck: 25562,
  back: 28672,
  main_hand: 27846,
  off_hand: 28572,
}

const P1_SV_DMG_3HIT_MW_GEAR = {
  ...P1_SV_DMG_GEAR,
  neck: 28343,
  back: 29382,
  main_hand: 28587,
}

const P1_SV_DMG_6HIT_MW_GEAR = {
  ...P1_SV_DMG_GEAR,
  neck: 29381,
  back: 28672,
  main_hand: 28587,
}

const P1_SV_AGI_GEAR = {
  head: 29081,
  neck: 28343,
  shoulders: 27776,
  back: 29382,
  chest: 25838,
  wrists:  25697,
  hands: 28506,
  waist: 28750,
  legs: 28741,
  feet: 28545,
  ring1: 28791,
  ring2: 31277,
  ...DST_BB_COMBO,
  ranged_weapon: 28772
}

const P1_SV_AGI_1H_GEAR = {
  ...P1_SV_AGI_GEAR,
  main_hand: 27846,
  off_hand: 28572,
}

const P1_SV_AGI_MW_GEAR = {
  ...P1_SV_AGI_GEAR,
  main_hand: 28587,
}

const P2_SV_GEAR = {
  head: 30141,
  neck: 30017,
  shoulders: 30143,
  back: 29994,
  chest: 30139,
  wrists: 29966,
  hands: 28506,
  waist: 30040,
  legs: 30142,
  feet: 30104,
  ring1: 28791,
  ring2: 29298,
  ...DST_BB_COMBO,
  ranged_weapon: 30105
}

const P2_SV_1H_GEAR = {
  ...P2_SV_GEAR,
  main_hand: 29924,
  off_hand: 29948,
}

const P2_SV_MW_GEAR = {
  ...P2_SV_GEAR,
  off_hand: 29993,
}

const P3_SV_1H_GEAR = {
  head: 31003,
  neck: 30017,
  shoulders: 31006,
  back: 29994,
  chest: 31004,
  wrists: 32324,
  main_hand: 30881,
  off_hand: 30881,
  hands: 31001,
  waist: 30040,
  legs: 30900,
  feet: 32366,
  ring1: 29301,
  ring2: 30052,
  ...DST_BB_COMBO,
  ranged_weapon: 30906
}

const DEFAULT_GEAR_SETS = [
  { description: 'Preraid BM BIS', data: PRERAID_BM_GEAR },
  { description: 'P1 BM, with 6% hit and no melee weaving', data: P1_BM_6HIT_1H_GEAR },
  { description: 'P1 BM, with 9% hit and melee weaving', data: P1_BM_6HIT_MW_GEAR },
  { description: 'P1 BM, with 6% hit and no melee weaving', data: P1_BM_9HIT_1H_GEAR },
  { description: 'P1 BM, with 9% hit and melee weaving', data: P1_BM_9HIT_MW_GEAR },
  { description: 'P2 BM, with 6% hit and no melee weaving', data: P2_BM_6HIT_1H_GEAR },
  { description: 'P2 BM, with 6% hit and melee weaving', data: P2_BM_6HIT_MW_GEAR },
  { description: 'P2 BM, with 9% hit and no melee weaving', data: P2_BM_9HIT_1H_GEAR },
  { description: 'P3 BM, with 6% hit and no melee weaving', data: P3_BM_6HIT_1H_GEAR },
  { description: 'P1 SV damage oriented BIS, with 3% and no melee weaving', data: P1_SV_DMG_3HIT_1H_GEAR },
  { description: 'P1 SV damage oriented BIS, with 6% and no melee weaving', data: P1_SV_DMG_6HIT_1H_GEAR },
  { description: 'P1 SV damage oriented BIS, with 3% and melee weaving', data: P1_SV_DMG_3HIT_MW_GEAR },
  { description: 'P1 SV damage oriented BIS, with 6% and melee weaving', data: P1_SV_DMG_6HIT_MW_GEAR },
  { description: 'P1 SV agi oriented BIS, with no melee weaving', data: P1_SV_AGI_1H_GEAR },
  { description: 'P1 SV agi oriented BIS, with melee weaving', data: P1_SV_AGI_MW_GEAR },
  { description: 'P2 SV damage oriented BIS, with no melee weaving', data: P2_SV_1H_GEAR },
  { description: 'P2 SV damage oriented BIS, with melee weaving', data: P2_SV_MW_GEAR },
  { description: 'P3 SV preview, with no melee weaving', data: P3_SV_1H_GEAR },
]

DEFAULT_GEAR_SETS.forEach(set => {
  console.log('--------------------------------------------------------------')
  console.log(`Data for set: ${set.description}`)
  console.log('--------------------------------------------------------------')
  console.log(getStatsFromGear(set.data))
})
