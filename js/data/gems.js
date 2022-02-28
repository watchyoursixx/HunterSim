const GEMS = {
  22459: {
      name: "Void Sphere",
      colors: [
          "red",
          "yellow",
          "blue"
      ],
      stats: {},
      Phase: 1,
      quality: "Rare",
      icon: "inv_enchant_voidsphere"
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
      quality: "Common",
      icon: "inv_misc_gem_bloodgem_02"
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
      quality: "Common",
      icon: "inv_misc_gem_flamespessarite_02"
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
      quality: "Common",
      icon: "inv_misc_gem_deepperidot_02"
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
      quality: "Common",
      icon: "inv_misc_gem_deepperidot_02"
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
      quality: "Common",
      icon: "inv_misc_gem_ebondraenite_02"
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
      quality: "Common",
      icon: "inv_misc_gem_goldendraenite_02"
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
      quality: "Common",
      icon: "inv_misc_gem_goldendraenite_02"
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
      quality: "Common",
      icon: "inv_misc_gem_azuredraenite_02"
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
      quality: "Common",
      icon: "inv_misc_gem_azuredraenite_02"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_livingruby_03"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_livingruby_03"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_starofelune_03"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_starofelune_03"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_dawnstone_03"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_dawnstone_03"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_dawnstone_03"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_dawnstone_03"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_nightseye_03"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_nobletopaz_03"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_talasite_03"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_talasite_03"
  },
  25894: {
      name: "Swift Skyfire Diamond",
      meta: "Y",
      activation: gemsUsed => {
        const bonus = { swift_metagem_run_speed_increase: 1.00 }

        if (gemsUsed.yellow >= 2 && gemsUsed.red >= 1) {
            bonus.stats = { MAP: 24, RAP: 24 }
            bonus.swift_metagem_run_speed_increase = 1.08
        }

        return bonus
      },
      Phase: 1,
      quality: "Rare",
      icon: "inv_misc_gem_diamond_07"
  },
  25895: {
      name: "Enigmatic Skyfire Diamond",
      meta: "Y",
      activation: gemsUsed => {
        const bonus = {}

        if (gemsUsed.red > gemsUsed.yellow)
            bonus.stats = { Crit: 12 }

        return bonus
      },
      Phase: 1,
      quality: "Rare",
      icon: "inv_misc_gem_diamond_07"
  },
  25896: {
      name: "Powerful Earthstorm Diamond",
      meta: "Y",
      activation: gemsUsed => {
        const bonus = {}

        if (gemsUsed.blue >= 3)
            bonus.stats = { Stam: 18 }

        return bonus
      },
      Phase: 1,
      quality: "Rare",
      icon: "inv_misc_gem_diamond_06"
  },
  25901: {
      name: "Insightful Earthstorm Diamond",
      meta: "Y",
      activation: gemsUsed => {
        const bonus = {}

        if (gemsUsed.red >= 2 && gemsUsed.yellow >= 2 && gemsUsed.blue >= 2)
            bonus.stats = { Int: 12 }

        return bonus
      },
      Phase: 1,
      quality: "Rare",
      icon: "inv_misc_gem_diamond_06"
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
      quality: "Epic",
      unique: true,
      icon: "inv_misc_gem_topaz_01"
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
      quality: "Rare",
      unique: true,
      icon: "inv_misc_gem_deepperidot_01"
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
      quality: "Common",
      icon: "inv_misc_gem_goldendraenite_02"
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
      quality: "Rare",
      unique: true,
      icon: "inv_misc_gem_bloodstone_02"
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
      quality: "Common",
      icon: "inv_misc_gem_ruby_03"
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
      quality: "Common",
      icon: "inv_misc_gem_ruby_03"
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
      quality: "Common",
      icon: "inv_misc_gem_crystal_03"
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
      quality: "Common",
      icon: "inv_misc_gem_crystal_03"
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
      quality: "Common",
      icon: "inv_misc_gem_topaz_03"
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
      quality: "Common",
      icon: "inv_misc_gem_topaz_03"
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
      quality: "Common",
      icon: "inv_misc_gem_topaz_03"
  },
  28556: {
      name: "Swift Windfire Diamond",
      meta: "Y",
      activation: gemsUsed => {
        const bonus = { swift_metagem_run_speed_increase: 1.00 }

        if (gemsUsed.yellow >= 2 && gemsUsed.red >= 1) {
            bonus.stats = { MAP: 20, RAP: 20 }
            bonus.swift_metagem_run_speed_increase = 1.08
        }

        return bonus
      },
      Phase: 1,
      quality: "Rare",
      icon: "inv_misc_gem_diamond_07"
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
      quality: "Common",
      icon: "inv_misc_gem_bloodgem_02"
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
      quality: "Epic",
      unique: true,
      icon: "inv_jewelcrafting_nightseye_03"
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
      quality: "Epic",
      unique: true,
      icon: "inv_jewelcrafting_talasite_03"
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
      quality: "Epic",
      unique: true,
      icon: "inv_jewelcrafting_nobletopaz_03"
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
      quality: "Epic",
      unique: true,
      icon: "inv_jewelcrafting_nobletopaz_03"
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
      quality: "Epic",
      unique: true,
      icon: "inv_jewelcrafting_nightseye_03"
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
      quality: "Epic",
      unique: true,
      icon: "inv_jewelcrafting_nobletopaz_03"
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
      quality: "Epic",
      unique: true,
      icon: "inv_jewelcrafting_talasite_03"
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
      quality: "Epic",
      unique: true,
      icon: "inv_jewelcrafting_talasite_03"
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
      quality: "Epic",
      unique: true,
      icon: "inv_jewelcrafting_nobletopaz_03"
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
      quality: "Epic",
      unique: true,
      icon: "inv_jewelcrafting_talasite_03"
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
      quality: "Epic",
      unique: true,
      icon: "inv_jewelcrafting_talasite_03"
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
      Phase: 1,
      quality: "Epic",
      unique: true,
      icon: "inv_jewelcrafting_nightseye_03"
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
      quality: "Common",
      icon: "inv_misc_gem_ebondraenite_02"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_nightseye_03"
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
      quality: "Common",
      icon: "inv_misc_gem_ebondraenite_02"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_nightseye_03"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_nobletopaz_03"
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
      quality: "Common",
      icon: "inv_misc_gem_flamespessarite_02"
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
      quality: "Epic",
      icon: "inv_jewelcrafting_crimsonspinel_02"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_empyreansapphire_02"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_empyreansapphire_02"
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
      quality: "Epic",
      icon: "inv_jewelcrafting_lionseye_02"
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
      quality: "Epic",
      icon: "inv_jewelcrafting_lionseye_02"
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
      quality: "Epic",
      icon: "inv_jewelcrafting_lionseye_02"
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
      quality: "Epic",
      icon: "inv_jewelcrafting_lionseye_02"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_shadowsongamethyst_02"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_shadowsongamethyst_02"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_shadowsongamethyst_02"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_pyrestone_02"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_pyrestone_02"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_seasprayemerald_02"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_seasprayemerald_02"
  },
  32409: {
      name: "Relentless Earthstorm Diamond",
      meta: "Y",
      activation: gemsUsed => {
        const bonus = { relentless_metagem_crit_dmg_inc: 1.00 }

        if (gemsUsed.red >= 2 && gemsUsed.yellow >= 2 && gemsUsed.blue >= 2) {
            bonus.stats = { Agi: 12 }
            bonus.relentless_metagem_crit_dmg_inc = 1.03
        }

        return bonus
      },
      Phase: 1,
      quality: "Rare",
      icon: "inv_misc_gem_diamond_06"
  },
  32410: {
      name: "Thundering Skyfire Diamond",
      meta: "Y",
      activation: gemsUsed => {
        const bonus = {}

        if (gemsUsed.red >= 2 && gemsUsed.yellow >= 2 && gemsUsed.blue >= 2) {
            bonus.aura = {
                stats: { Haste: 240 },
                is_proc: 'Y',
                cd: 40,
                PPM: 1,
                proc_type: 2,
                duration: 6,
            }
        }

        return bonus
      },
      Phase: 1,
      quality: "Rare",
      icon: "inv_misc_gem_diamond_07"
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
      Phase: 2,
      quality: "Rare",
      unique: true,
      icon: "inv_jewelcrafting_shadowsongamethyst_01"
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
      Phase: 2,
      quality: "Rare",
      unique: true,
      icon: "inv_misc_gem_deepperidot_03"
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
      Phase: 2,
      quality: "Rare",
      unique: true,
      icon: "inv_misc_gem_opal_01"
  },
  32640: {
      name: "Potent Unstable Diamond",
      meta: "Y",
      activation: gemsUsed => {
        const bonus = {}
        if (gemsUsed.blue > gemsUsed.yellow) bonus.stats = { MAP: 24, RAP: 24 }

        return bonus
      },
      Phase: 1,
      quality: "Rare",
      icon: "inv_misc_gem_diamond_07"
  },
  33131: {
      name: "Crimson Sun",
      colors: [
          "red"
      ],
      stats: {
          MAP: 32,
          RAP: 32
      },
      Phase: 1,
      quality: "Epic",
      unique: true,
      icon: "inv_jewelcrafting_crimsonspinel_02"
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
      quality: "Epic",
      unique: true,
      icon: "inv_jewelcrafting_empyreansapphire_02"
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
      quality: "Epic",
      unique: true,
      icon: "inv_jewelcrafting_lionseye_02"
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
      quality: "Epic",
      unique: true,
      icon: "inv_jewelcrafting_lionseye_02"
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
      quality: "Rare",
      icon: "inv_jewelcrafting_talasite_03"
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
      quality: "Epic",
      unique: true,
      icon: "inv_misc_gem_pearl_07"
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
      quality: "Epic",
      icon: "inv_jewelcrafting_crimsonspinel_02"
  },
  28362: {
      name: "Bold Ornate Ruby",
      colors: [
          "red"
      ],
      stats: {
          MAP: 20,
          RAP: 20
      },
      Phase: 1,
      quality: "Epic",
      unique: true,
      icon: "inv_misc_gem_ruby_02"
  },
  28363: {
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
      quality: "Epic",
      unique: true,
      icon: "inv_misc_gem_opal_01"
  },
  28119: {
      name: "Smooth Ornate Dawnstone",
      colors: [
          "yellow"
      ],
      stats: {
          Crit: 10
      },
      Phase: 1,
      quality: "Epic",
      unique: true,
      icon: "inv_misc_gem_topaz_01"
  }
};
