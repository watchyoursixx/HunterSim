const GEMS = {
  22459: {
      name: "Void Sphere (+4 Resist)",
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
      name: "Delicate Blood Garnet (+6 Agi)",
      colors: [
          "red"
      ],
      stats: {
          Agi: 6
      },
      Phase: 1,
      quality: "Uncommon",
      icon: "inv_misc_gem_bloodgem_02"
  },
  23100: {
      name: "Glinting Flame Spessarite (+3 Agi +3 Hit)",
      colors: [
          "red",
          "yellow"
      ],
      stats: {
          Agi: 3,
          Hit: 3
      },
      Phase: 1,
      quality: "Uncommon",
      icon: "inv_misc_gem_flamespessarite_02"
  },
  23104: {
      name: "Jagged Deep Peridot (+4 Stam +3 Crit)",
      colors: [
          "yellow",
          "blue"
      ],
      stats: {
          Stam: 4,
          Crit: 3
      },
      Phase: 1,
      quality: "Uncommon",
      icon: "inv_misc_gem_deepperidot_02"
  },
  23106: {
      name: "Dazzling Deep Peridot (+3 Int +1 Mp5)",
      colors: [
          "yellow",
          "blue"
      ],
      stats: {
          Int: 3,
          MP5: 1
      },
      Phase: 1,
      quality: "Uncommon",
      icon: "inv_misc_gem_deepperidot_02"
  },
  23110: {
      name: "Shifting Shadow Draenite (+3 Agi +4 Stam)",
      colors: [
          "red",
          "blue"
      ],
      stats: {
          Agi: 3,
          Stam: 4
      },
      Phase: 1,
      quality: "Uncommon",
      icon: "inv_misc_gem_ebondraenite_02"
  },
  23113: {
      name: "Brilliant Golden Draenite (+6 Int)",
      colors: [
          "yellow"
      ],
      stats: {
          Int: 6
      },
      Phase: 1,
      quality: "Uncommon",
      icon: "inv_misc_gem_goldendraenite_02"
  },
  23116: {
      name: "Rigid Golden Draenite (+6 Hit)",
      colors: [
          "yellow"
      ],
      stats: {
          Hit: 6
      },
      Phase: 1,
      quality: "Uncommon",
      icon: "inv_misc_gem_goldendraenite_02"
  },
  23118: {
      name: "Solid Azure Moonstone (+9 Stam)",
      colors: [
          "blue"
      ],
      stats: {
          Stam: 9
      },
      Phase: 1,
      quality: "Uncommon",
      icon: "inv_misc_gem_azuredraenite_02"
  },
  23121: {
      name: "Lustrous Azure Moonstone (+2 Mp5)",
      colors: [
          "blue"
      ],
      stats: {
          MP5: 2
      },
      Phase: 1,
      quality: "Uncommon",
      icon: "inv_misc_gem_azuredraenite_02"
  },
  24028: {
      name: "Delicate Living Ruby (+8 Agi)",
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
      name: "Bright Living Ruby (+16 AP)",
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
      name: "Solid Star of Elune (+12 Stam)",
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
      name: "Lustrous Star of Elune (+3 Mp5)",
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
      name: "Brilliant Dawnstone (+8 Int)",
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
      name: "Smooth Dawnstone (+8 Crit)",
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
      name: "Rigid Dawnstone (+8 Hit)",
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
      name: "Mystic Dawnstone (+8 Resil)",
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
      name: "Shifting Nightseye (+4 Agi +6 Stam)",
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
      name: "Glinting Noble Topaz (+4 Agi +4 Hit)",
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
      name: "Dazzling Talasite (+4 Int +2 Mp5)",
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
      name: "Jagged Talasite (+6 Stam +4 Crit)",
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
      name: "Swift Skyfire Diamond (+24 AP +8% Speed)",
      meta: "Y",
      activation: gemsUsed => {
        const bonus = { swift_metagem_run_speed_increase: 1.00 }
        var active = false;

        if (gemsUsed.yellow >= 2 && gemsUsed.red >= 1) {
            bonus.stats = { MAP: 24, RAP: 24 }
            bonus.swift_metagem_run_speed_increase = 1.08
            active = true;
        }

        return { bonus, active }
      },
      Phase: 1,
      quality: "Rare",
      icon: "inv_misc_gem_diamond_07",
      desc: "1 Red, 2 Yellow"
  },
  25895: {
      name: "Enigmatic Skyfire Diamond (+12 Crit)",
      meta: "Y",
      activation: gemsUsed => {
        const bonus = {}
        var active = false;
        if (gemsUsed.red > gemsUsed.yellow) {
            bonus.stats = { Crit: 12 }
            active = true;
        }
        return { bonus, active }
      },
      Phase: 1,
      quality: "Rare",
      icon: "inv_misc_gem_diamond_07",
      desc: "More Red than Yellow"
  },
  25896: {
      name: "Powerful Earthstorm Diamond (+18 Stam)",
      meta: "Y",
      activation: gemsUsed => {
        const bonus = {}
        var active = false;
        if (gemsUsed.blue >= 3) {
            bonus.stats = { Stam: 18 }
            active = true;
        }
        return { bonus, active }
      },
      Phase: 1,
      quality: "Rare",
      icon: "inv_misc_gem_diamond_06",
      desc: "3 Blue"
  },
  25901: {
      name: "Insightful Earthstorm Diamond (+12 Int)",
      meta: "Y",
      activation: gemsUsed => {
        const bonus = {}
        var active = false;
        if (gemsUsed.red >= 2 && gemsUsed.yellow >= 2 && gemsUsed.blue >= 2) {
            bonus.stats = { Int: 12 }
            active = true;
        }
        return { bonus, active }
      },
      Phase: 1,
      quality: "Rare",
      icon: "inv_misc_gem_diamond_06",
      desc: "2 Red, 2 Yellow, 2 Blue"
  },
  27679: {
      name: "Sublime Mystic Dawnstone (+10 Resil)",
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
      name: "Barbed Deep Peridot (+3 Stam +4 Crit)",
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
      name: "Smooth Golden Draenite (+6 Crit)",
      colors: [
          "yellow"
      ],
      stats: {
          Crit: 6
      },
      Phase: 1,
      quality: "Uncommon",
      icon: "inv_misc_gem_goldendraenite_02"
  },
  28361: {
      name: "Mighty Blood Garnet (+14 AP)",
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
  28556: {
      name: "Swift Windfire Diamond (+20 AP)",
      meta: "Y",
      activation: gemsUsed => {
        const bonus = { swift_metagem_run_speed_increase: 1.00 }
        var active = false;
        if (gemsUsed.yellow >= 2 && gemsUsed.red >= 1) {
            bonus.stats = { MAP: 20, RAP: 20 }
            bonus.swift_metagem_run_speed_increase = 1.08
            active = true;
        }

        return { bonus, active }
      },
      Phase: 1,
      quality: "Rare",
      icon: "inv_misc_gem_diamond_07",
      desc: "2 Yellow, 1 Red"
  },
  28595: {
      name: "Bright Blood Garnet (+12 AP)",
      colors: [
          "red"
      ],
      stats: {
          MAP: 12,
          RAP: 12
      },
      Phase: 1,
      quality: "Uncommon",
      icon: "inv_misc_gem_bloodgem_02"
  },
  30549: {
      name: "Shifting Tanzanite (+5 Agi +6 Stam)",
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
      name: "Sundered Chrysoprase (+5 Crit +2 Mp5)",
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
      name: "Pristine Fire Opal (+10 AP +4 Hit)",
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
      name: "Glinting Fire Opal (+5 Agi +4 Hit)",
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
      name: "Brutal Tanzanite (+6 Stam +10 AP)",
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
      name: "Deadly Fire Opal (+8 AP +5 Crit)",
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
      name: "Timeless Chrysoprase (+6 Stam +5 Int)",
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
      name: "Dazzling Chrysoprase (+5 Int +2 Mp5)",
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
      name: "Empowered Fire Opal (+8 AP +5 Resil)",
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
      name: "Steady Chrysoprase (+6 Stam +5 Resil)",
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
      name: "Jagged Chrysoprase (+6 Stam +5 Crit)",
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
      name: "Pulsing Amethyst (+6 Stam +10 AP)",
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
      name: "Balanced Shadow Draenite (+4 Stam +6 AP)",
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
      quality: "Uncommon",
      icon: "inv_misc_gem_ebondraenite_02"
  },
  31863: {
      name: "Balanced Nightseye (+6 Stam +8 AP)",
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
      name: "Infused Shadow Draenite (+6 AP +1 Mp5)",
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
      quality: "Uncommon",
      icon: "inv_misc_gem_ebondraenite_02"
  },
  31865: {
      name: "Infused Nightseye (+8 AP +2 Mp5)",
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
      name: "Wicked Noble Topaz (+8 AP +4 Crit)",
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
      name: "Wicked Flame Spessarite (+6 AP +3 Crit)",
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
      quality: "Uncommon",
      icon: "inv_misc_gem_flamespessarite_02"
  },
  32194: {
      name: "Delicate Crimson Spinel (+10 Agi)",
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
      name: "Solid Empyrean Sapphire (+15 Stam)",
      colors: [
          "blue"
      ],
      stats: {
          Stam: 15
      },
      Phase: 3,
      quality: "Epic",
      icon: "inv_jewelcrafting_empyreansapphire_02"
  },
  32202: {
      name: "Lustrous Empyrean Sapphire (+4 Mp5)",
      colors: [
          "blue"
      ],
      stats: {
          MP5: 4
      },
      Phase: 3,
      quality: "Epic",
      icon: "inv_jewelcrafting_empyreansapphire_02"
  },
  32204: {
      name: "Brilliant Lionseye (+10 Int)",
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
      name: "Smooth Lionseye (+10 Crit)",
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
      name: "Rigid Lionseye (+10 Hit)",
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
      name: "Mystic Lionseye (+10 Resil)",
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
      name: "Shifting Shadowsong Amethyst (+5 Agi +7 Stam)",
      colors: [
          "red",
          "blue"
      ],
      stats: {
          Agi: 5,
          Stam: 7
      },
      Phase: 3,
      quality: "Epic",
      icon: "inv_jewelcrafting_shadowsongamethyst_02"
  },
  32213: {
      name: "Balanced Shadowsong Amethyst (+7 Stam +10 AP)",
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
      quality: "Epic",
      icon: "inv_jewelcrafting_shadowsongamethyst_02"
  },
  32214: {
      name: "Infused Shadowsong Amethyst (+10 AP +2 Mp5)",
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
      quality: "Epic",
      icon: "inv_jewelcrafting_shadowsongamethyst_02"
  },
  32220: {
      name: "Glinting Pyrestone (+5 Agi +5 Hit)",
      colors: [
          "red",
          "yellow"
      ],
      stats: {
          Agi: 5,
          Hit: 5
      },
      Phase: 3,
      quality: "Epic",
      icon: "inv_jewelcrafting_pyrestone_02"
  },
  32222: {
      name: "Wicked Pyrestone (+10 AP +5 Crit)",
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
      quality: "Epic",
      icon: "inv_jewelcrafting_pyrestone_02"
  },
  32225: {
      name: "Dazzling Seaspray Emerald (+5 Int +2 Mp5)",
      colors: [
          "yellow",
          "blue"
      ],
      stats: {
          Int: 5,
          MP5: 2
      },
      Phase: 3,
      quality: "Epic",
      icon: "inv_jewelcrafting_seasprayemerald_02"
  },
  32226: {
      name: "Jagged Seaspray Emerald (+7 Stam +5 Crit)",
      colors: [
          "yellow",
          "blue"
      ],
      stats: {
          Stam: 7,
          Crit: 5
      },
      Phase: 3,
      quality: "Epic",
      icon: "inv_jewelcrafting_seasprayemerald_02"
  },
  32409: {
      name: "Relentless Earthstorm Diamond (+12 Crit +3% Crit Dmg)",
      meta: "Y",
      activation: gemsUsed => {
        const bonus = { relentless_metagem_crit_dmg_inc: 1.00 }
        var active = false;
        if (gemsUsed.red >= 2 && gemsUsed.yellow >= 2 && gemsUsed.blue >= 2) {
            bonus.stats = { Agi: 12 }
            bonus.relentless_metagem_crit_dmg_inc = 1.03
            active = true;
        }

        return { bonus, active }
      },
      Phase: 1,
      quality: "Rare",
      icon: "inv_misc_gem_diamond_06",
      desc: "2 Red, 2 Yellow, 2 Blue"
  },
  32410: {
      name: "Thundering Skyfire Diamond (+240 Haste Proc)",
      meta: "Y",
      activation: gemsUsed => {
        const bonus = {}
        var active = false;
        if (gemsUsed.red >= 2 && gemsUsed.yellow >= 2 && gemsUsed.blue >= 2) {
            bonus.aura = {
                stats: { Haste: 240 },
                is_proc: 'Y',
                cd: 40,
                PPM: 1,
                proc_type: 2,
                duration: 6,
            }
            active = true;
        }
        return { bonus, active }
      },
      Phase: 1,
      quality: "Rare",
      icon: "inv_misc_gem_diamond_07",
      desc: "2 Red, 2 Yellow, 2 Blue"
  },
  32634: {
      name: "Unstable Amethyst (+6 Stam +8 AP)",
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
      name: "Unstable Peridot (+6 Stam +4 Int)",
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
      name: "Unstable Citrine (+8 AP +4 Crit)",
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
      name: "Potent Unstable Diamond (+24 AP)",
      meta: "Y",
      activation: gemsUsed => {
        const bonus = {}
        var active = false;
        if (gemsUsed.blue > gemsUsed.yellow) {

            bonus.stats = { MAP: 24, RAP: 24 }
            active = true;
        }
        
        return { bonus, active }
      },
      Phase: 1,
      quality: "Rare",
      icon: "inv_misc_gem_diamond_07",
      desc: "More Blue than Yellow"
  },
  33131: {
      name: "Crimson Sun (+32 AP)",
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
      name: "Falling Star (+18 Stam)",
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
  33143: {
      name: "Stone of Blades (+12 Crit)",
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
      name: "Steady Talasite (+6 Stam +4 Resil)",
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
      name: "Charmed Amani Jewel (+15 Stam)",
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
  32197: {
    name: "Bright Crimson Spinel (+20 AP)",
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
  35487: {
      name: "Bright Crimson Spinel (+20 AP)",
      colors: [
          "red"
      ],
      stats: {
          MAP: 20,
          RAP: 20
      },
      Phase: 5,
      quality: "Epic",
      icon: "inv_jewelcrafting_crimsonspinel_02"
  },
  28362: {
      name: "Bold Ornate Ruby (+20 AP)",
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
      name: "Inscribed Ornate Topaz (+10 AP +5 Crit)",
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
      name: "Smooth Ornate Dawnstone (+10 Crit)",
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
  },
  30565: {
      name: "Assassin's Fire Opal (+6 Crit +5 Dodge)",
      colors: [
          "red",
          "yellow"
      ],
      stats: {
          Crit: 6
      },
      Phase: 1,
      quality: "Epic",
      unique: true,
      icon: "inv_jewelcrafting_nobletopaz_03"
  }
};
