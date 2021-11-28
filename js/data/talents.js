const MAX_TALENT_POINTS = 61

const BM_TREE = [
  [
    {
      name: 'Improved Aspect of the Hawk',
      abrv: 'imp_hawk',
      max: 5,
      is_modifier: true,
      per_point: 3 / 100
    },
    {
      name: 'Endurance Training',
      abrv: 'end_training',
      max: 5,
      is_modifier: true,
      per_point: 1 / 100
    }
  ],
  [
    {
      name: 'Focused Fire',
      abrv: 'focused_fire',
      max: 2,
    },
    {
      name: 'Improved Aspect of the Monkey',
      abrv: 'imp_monkey',
      max: 3,
      per_point: 2
    },
    {
      name: 'Thick Hide',
      abrv: 'thick_hide',
      max: 3,
    },
    {
      name: 'Improved Revive Pet',
      abrv: 'imp_ress_pet',
      max: 2,
    }
  ],
  [
    {
      name: 'Pathfinding',
      abrv: 'pathfinding',
      max: 2,
      per_point: 4 / 100
    },
    {
      name: 'Bestial Swiftness',
      abrv: 'bestial_swift',
      max: 1,
      per_point: 30 / 100
    },
    {
      name: 'Unleashed Fury',
      abrv: 'unleash_fury',
      max: 5,
      is_modifier: true,
      per_point: 4/100
    }
  ],
  [
    {
      name: 'Improved Mend Pet',
      abrv: 'imp_mend_pet',
      max: 2,
    },
    {
      name: 'Ferocity',
      abrv: 'ferocity',
      max: 5,
      per_point: 2
    }
  ],
  [
    {
      name: 'Spirit Bond',
      abrv: 'spirit_bond',
      max: 2,
      per_point: 1 / 100
    },
    {
      name: 'Intimidation',
      abrv: 'intimidation',
      max: 1,
    },
    {
      name: 'Bestial Discipline',
      abrv: 'bestial_disc',
      max: 2,
      is_modifier: true,
      per_point: 50 / 100
    }
  ],
  [
    {
      name: 'Animal Handler',
      abrv: 'animal_handler',
      max: 2,
      per_point: 2
    },
    {
      name: 'Frenzy',
      abrv: 'frenzy',
      max: 5,
    }
  ],
  [
    {
      name: 'Ferocious Inspiration',
      abrv: 'ferocious_insp',
      max: 3,
      is_modifier: true,
      per_point: 1 / 100
    },
    {
      name: 'Bestial Wrath',
      abrv: 'bestial_wrath',
      max: 1,
    },
    {
      name: 'Catlike Reflexes',
      abrv: 'catlike_reflex',
      max: 3,
    }
  ],
  [
    {
      name: "Serpent's Switfness",
      abrv: 'serp_swift',
      max: 5,
      is_modifier: true,
      per_point: 4 / 100
    }
  ],
  [
    {
      name: 'The Beast Within',
      abrv: 'beast_within',
      max: 1,
    }
  ]
]

const MM_TREE = [
  [
    {
      name: 'Improved Concussive Shot',
      abrv: 'imp_conc_shot',
      max: 5,
    },
    {
      name: 'Lethal Shots',
      abrv: 'lethal_shots',
      max: 5,
    }
  ],
  [
    {
      name: "Improved Hunter's Mark",
      abrv: 'imp_hunter_mark',
      max: 5,
      per_point: 20 / 100
    },
    {
      name: 'Efficiency',
      abrv: 'efficiency',
      max: 5,
      is_modifier: true,
      per_point: -2 / 100
    }
  ],
  [
    {
      name: 'Go for the Throat',
      abrv: 'GftT',
      max: 5,
      per_point: 25
    },
    {
      name: 'Improved Arcane Shot',
      abrv: 'imp_arc_shot',
      max: 5,
      per_point: 0.2
    },
    {
      name: 'Aimed Shot',
      abrv: 'aimed_shot',
      max: 1,
    },
    {
      name: 'Rapid Killing',
      abrv: 'rapid_killing',
      max: 2,
    }
  ],
  [
    {
      name: 'Improved Stings',
      abrv: 'imp_stings',
      max: 5,
      is_modifier: true,
      per_point: 6 / 100
    },
    {
      name: 'Mortal Shots',
      abrv: 'mortal_shots',
      max: 5,
      is_modifier: true,
      per_point: 6 / 100
    }
  ],
  [
    {
      name: 'Concussive Barrage',
      abrv: 'conc_barrage',
      max: 3,
    },
    {
      name: 'Scatter Shot',
      abrv: 'scatter_shot',
      max: 1,
    },
    {
      name: 'Barrage',
      abrv: 'barrage',
      max: 3,
      is_modifier: true,
      per_point: 4 / 100
    }
  ],
  [
    {
      name: 'Combat Experience',
      abrv: 'combat_exp',
      max: 2,
    },
    {
      name: 'Ranged Weapon Specialization',
      abrv: 'ranged_weap_spec',
      max: 5,
      is_modifier: true,
      per_point: 1 / 100
    }
  ],
  [
    {
      name: 'Careful Aim',
      abrv: 'careful_aim',
      max: 3,
      per_point: 15 / 100
    },
    {
      name: 'Trueshot Aura',
      abrv: 'trueshot_aura',
      max: 1
    },
    {
      name: 'Improved Barrage',
      abrv: 'imp_barrage',
      max: 3,
      per_point: 4
    }
  ],
  [
    {
      name: 'Master Marksman',
      abrv: 'master_marksman',
      max: 5,
      is_modifier: true,
      per_point: 2 / 100
    }
  ],
  [
    {
      name: 'Silencing Shot',
      abrv: 'silencing_shot',
      max: 1
    }
  ]
]

const SV_TREE = [
  [
    {
      name: 'Monster Slaying',
      abrv: 'monster_slaying',
      max: 3,
      is_modifier: true,
      per_point: 1 / 100
    },
    {
      name: 'Humanoid Slaying',
      abrv: 'humanoid_slaying',
      max: 3,
      is_modifier: true,
      per_point: 1 / 100
    },
    {
      name: 'Hawk Eye',
      abrv: 'hawk_eye',
      max: 3,
      per_point: 2
    },
    {
      name: 'Savage Strikes',
      abrv: 'savage_strikes',
      max: 2,
      per_point: 10
    }
  ],
  [
    {
      name: 'Entrapment',
      abrv: 'entrapment',
      max: 3
    },
    {
      name: 'Deflection',
      abrv: 'deflection',
      max: 5,
    },
    {
      name: 'Improved Wing Clip',
      abrv: 'imp_wing_clip',
      max: 3,
    }
  ],
  [
    {
      name: 'Clever Traps',
      abrv: 'clever_traps',
      max: 2,
      is_modifier: true,
      per_point: 15 / 100
    },
    {
      name: 'Survivalist',
      abrv: 'survivalist',
      max: 5,
      is_modifier: true,
      per_point: 2 / 100
    },
    {
      name: 'Deterrence',
      abrv: 'deterrence',
      max: 1
    }
  ],
  [
    {
      name: 'Trap Mastery',
      abrv: 'trap_mastery',
      max: 2,
      per_point: 5 / 100
    },
    {
      name: 'Surefooted',
      abrv: 'surefooted',
      max: 3,
      per_point: 1
    },
    {
      name: 'Improved Feign Death',
      abrv: 'imp_fd',
      max: 2,
      per_point: 2 / 100
    }
  ],
  [
    {
      name: 'Survival Instincts',
      abrv: 'surv_instincts',
      max: 2,
      is_modifier: true,
      per_point: 2 / 100
    },
    {
      name: 'Killer Instinct',
      abrv: 'killer_instinct',
      max: 3,
      per_point: 1
    },
    {
      name: 'Counterattack',
      abrv: 'counterattack',
      max: 1
    }
  ],
  [
    {
      name: 'Resourcefulness',
      abrv: 'resourcefulness',
      max: 3
    },
    {
      name: 'Lightning Reflexes',
      abrv: 'light_reflexes',
      max: 5,
      is_modifier: true,
      per_point: 3 / 100
    }
  ],
  [
    {
      name: 'Thrill of the Hunt',
      abrv: 'TotH',
      max: 3,
    },
    {
      name: 'Wyvern Sting',
      abrv: 'wyvern_sting',
      max: 1
    },
    {
      name: 'Expose Weakness',
      abrv: 'exp_weakness',
      max: 3,
    }
  ],
  [
    {
      name: 'Master Tactician',
      abrv: 'master_tac',
      max: 5
    }
  ],
  [
    {
      name: 'Readiness',
      abrv: 'readiness',
      max: 1
    }
  ]
]

const TALENT_TREES = [BM_TREE.flat(), MM_TREE.flat(), SV_TREE.flat()]

function loadTalent(obj, talent, points) {
  if (points < 0 || points > talent.max) throw Error(`Tried to put ${points} points in talent "${talent.name}". Must be between 0 and ${talent.max}.`)
  const val = talent.per_point ? points * talent.per_point : points
  obj[talent.abrv] = (talent.is_modifier ? 1 : 0) + val
}

function parseTalents(talentString) {
  const talents = {}
  let treeIdx = 0
  let talentIdx = 0
  let total_points = 0

  // Load all talents with 0 points
  TALENT_TREES.flat().forEach(talent => loadTalent(talents, talent, 0));

  [...talentString].forEach(char => {
    if (char === '-') { // Jump to next talent tree
      ++treeIdx
      talentIdx = 0
    } else { // Load single talent with specified points
      const points = Number(char)
      if (Number.isNaN(points))
        throw new TypeError(`Received invalid character ${char} in the talent string`)

      loadTalent(talents, TALENT_TREES[treeIdx][talentIdx++], points)
      total_points += points
      if (total_points > MAX_TALENT_POINTS) throw new Error(`Too many talent points used! Max is ${MAX_TALENT_POINTS}`)
    }
  })

  return talents
}

const T_41_20_0 = parseTalents('512002005250122431051-0505201205')
const T_0_20_41 = parseTalents('-0550201205-33320002200322300520351')
const T_7_20_34 = parseTalents('502-0550201205-333200022003223005103')
const T_5_20_36 = parseTalents('5-0550201205-333200022003223005303')
const T_0_27_34 = parseTalents('-055220120500302-333200022003223005103')
const T_17_44_0 = parseTalents('51200200502-0551201205013253135');
