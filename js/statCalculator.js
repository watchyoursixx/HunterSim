
/* --------------------------------------------------------------------------------
  AUXILIAR FUNCTIONS
  --------------------------------------------------------------------------------- */

/** Auxiliar function to sum two stat objects. Accepts a statModifier
   function, to apply a modification to each stat */
function sumStats(src, dst, statModifier = st => st) {
  Object.entries(src).forEach(([stat, amount]) => dst[stat] = (dst[stat] || 0) + statModifier(amount))
}

/** Auxiliar function to add two special objects.*/
function addSpecial(src, dst) {
  console.log(src, dst)

  Object.entries(src).forEach(([k,v])=> {
    if (k === 'incWeapDmg') dst[k] = (dst[k] || 0) + v
    else if (k === 'multishot_dmg_inc_ratio') dst[k] = dst[k] > 1 ? (dst[k] || 1) + v - 1 : v
    else dst[k] = v
  })

  console.log(dst)
}

/** Auxiliar function to add two aura objects. Will throw error if an aura appears in both objects. */
function addAuras(src, dst) {
  Object.entries(src).forEach(([k,v]) => {
    if (dst[k]) throw new Error(`An aura with id ${k} already exists!`)
    dst[k] = v
  })
}

/** Auxiliar function that adds special, auras and stats of two objects */
function mergeResults(src, dst) {
  if (src.stats) sumStats(src.stats, dst.stats)
  if (src.special) addSpecial(src.special, dst.special)
  if (src.auras) addAuras(src.auras, dst.auras)
}

/* --------------------------------------------------------------------------------
  BUFFS
  --------------------------------------------------------------------------------- */

/** Auxiliar function to generate a function that modifies the value of a buff,
   based on a flat improvement and a ratio */
function buildStatModifier(props, buff) {
  let bonus = 0
  let ratio = 1
  Object.entries(props).forEach(([name, value]) => {
    if (!value) return;
    if (buff[name + "_bonus"]) bonus += buff[name + "_bonus"]
    else if (buff[name + "_ratio"]) ratio *= buff[name + "_ratio"]
    else throw Error(`Detected invalid property "${name}" for buff "${buff.name}"`)
  })

  return st => (st + bonus) * ratio
}

/** Given an array of buff objects, it will return an object with stats and special bonuses,
   applying different modifiers to each buff based on the data provided */
function getStatsFromBuffs(buffs) {
  const usedBuffs = {}

  return buffs.reduce(({stats, special}, buffData) => {
    let buffId = buffData
    let props = {}
    if (typeof buffData === 'object') ({ id: buffId, ...props } = buffData)

    if (usedBuffs[buffId]) throw Error(`Buff with ID ${buffId} is being used more than once!`)
    usedBuffs[buffId] = true

    if (!BUFFS[buffId]) throw Error(`Detected invalid buff id ${id}`)
    const buff = BUFFS[buffId]

    if (buff.stats) sumStats(buff.stats, stats, buildStatModifier(props, buff))
    if (buff.special) addSpecial(buff.special, special)

    return { stats, special }
  }, { stats: {}, special: { impSancAura: 1, kingsMod: 1, windfury: false } })
}

/* --------------------------------------------------------------------------------
  CONSUMABLES
  --------------------------------------------------------------------------------- */

/** Given an object of consumables and a consumable map, it will use the map to
   calculate stats and verify proper consumables are used */
function getStatsFromConsumes(consumables, source) {
  return Object.entries(consumables).reduce((stats, [type, id]) => {
    if (!source[type]) throw Error(`Detected invalid consumable of type "${type}"`)
    if (!source[type][id]) throw Error(`Detected invalid consume id ${id}`)

    sumStats(source[type][id].stats, stats)
    return stats
  }, {})
}

/** Given an object of consumables, returns stat increase for players */
function getPlayerStatsFromConsumes(consumables) {
  if (consumables.flask && (consumables.battle_elixir || consumables.guardian_elixir))
    throw Error('Detected flask AND elixir. You must use one OR the other.')

  return getStatsFromConsumes(consumables, PLAYER_CONSUMABLES)
}

/** Given an object of consumables, returns stat increase for pets */
function getPetStatsFromConsumes(consumables) {
  return getStatsFromConsumes(consumables, PET_CONSUMABLES)
}

/* --------------------------------------------------------------------------------
  GEAR
  --------------------------------------------------------------------------------- */

/** Given the used meta and the amount of gems used per color, calculates bonuses provided by metagem,
   It loops over all the metagems so it can provide default multipliers */
function getMetagemBonuses(usedMeta, gemsUsed) {
  const noGems = { yellow: 0, red: 0, blue: 0}
  const result = { stats: {}, auras: {}, special: {} }

  Object.entries(GEMS).filter(([, gemData]) => gemData.meta === 'Y')
    .forEach(([gemId, gemData]) => {
      const metaBonus = gemData.activation(Number(gemId) === usedMeta ? gemsUsed : noGems)
      Object.entries(metaBonus).forEach(([bonus, val]) => {
        if (bonus === 'aura') result.auras[gemId] = val
        else if (bonus === 'stats') sumStats(val, result.stats)
        else result.special[bonus] = val
      })
  })

  return result
}

/** Given the gear object, calculates stats, auras and special values obtained from gems, socket bonuses and meta gem. */
function getStatsFromGems(gear) {
  let usedMeta
  const gemCount = { red: 0, yellow: 0, blue: 0 }
  const usedUniqueGems = []

  const stats = Object.entries(gear).reduce((accStats, [type, gearData]) => {
    if (!gearData.gems) return accStats

    const gearPiece = GEAR_MAP[type][gearData.id]
    const numSockets = gearPiece.sockets?.length || 0
    const numGems = gearData.gems.length
    let isBonusFulfilled = numSockets === numGems
    if (numGems > numSockets)
      throw new Error(`Tried to put ${numGems} gems in "${gearPiece.name}", which only has ${numSockets} sockets.`)

    gearData.gems.forEach((gemId, i) => {
      if (!gemId) {
        isBonusFulfilled = false
        return;
      }

      if (!GEMS[gemId]) throw new Error(`Detected invalid gem with id ${gemId}`)
      const gem = GEMS[gemId]
      const socket = gearPiece.sockets[i]

      if (gem.unique) {
          if (usedUniqueGems.includes(gemId)) throw new Error(`Tried to used unique gem "${gem.name}" more than once.`)
          else usedUniqueGems.push(gemId)
      }

      if (gem.meta === 'Y') {
        if (socket !== 'Meta') throw new Error(`Tried to fit non-meta gem in meta socket`)
        usedMeta = gemId
      } else {
        sumStats(gem.stats, accStats)
        gem.colors.forEach(color => ++gemCount[color])
        if (!gem.colors.includes(socket.toLowerCase())) isBonusFulfilled = false
      }
    })

    if (isBonusFulfilled && gearPiece.socketBonus) sumStats(gearPiece.socketBonus, accStats)
    return accStats
  }, {})

  const result = getMetagemBonuses(usedMeta, gemCount)
  sumStats(stats, result.stats)

  return result
}

/** Given the gear object, calculates stats, auras and special values obtained from enchants */
function getStatsFromEnchants(gear) {
  return Object.entries(gear).reduce((result, [type, gearData]) => {
    const enchantId = gearData.enchant
    const gearPiece = GEAR_MAP[type][gearData.id]

    if (enchantId) {
      if (!ENCHANT_MAP[type]) throw Error(`Detected enchant for piece of type "${type}", which can't be enchanted`)
      if (!ENCHANT_MAP[type][enchantId]) throw Error(`Detected invalid enchant with id "${enchantId}" for piece of type "${type}"`)

      const enchant = ENCHANT_MAP[type][enchantId]
      if (enchant.for_two_handed && gearPiece.hand !== 'Two') throw new Error(`Can't use a two-handed weapon enchant on this weapon.`)

      if (enchant.stats) sumStats(enchant.stats, result.stats)
      if (enchant.aura) result.auras[enchantId] = enchant.aura
      if (enchant.special) addSpecial(enchant.special, result.special)
    }

    return result
  }, { stats: {}, special: { incWeapDmg: 0, moveSpeed: 1 }, auras: {} })
}

/** Given the gear object, calculates stats, auras and special values obtained from enchants */
function getStatsFromAttachments(gear) {
  return Object.entries(gear).reduce((result, [type, gearData]) => {
    const attachmentId = gearData.attachment

    if (attachmentId) {
      if (!ENCHANT_MAP.attachment) throw Error(`Detected attachment for piece of type "${type}", which can't be attached`)
      if (!ENCHANT_MAP.attachment[attachmentId]) throw Error(`Detected invalid attachment with id "${attachmentId}" for piece of type "${type}"`)

      const attachment = ENCHANT_MAP.attachment[attachmentId]

      if (attachment.stats) sumStats(attachment.stats, result.stats)
      if (attachment.aura) result.auras[enchantId] = attachment.aura
      if (attachment.special) addSpecial(attachment.special, result.special)
    }

    return result
  }, { stats: {}, special: { incWeapDmg: 0, moveSpeed: 1 }, auras: {} })
}

/* Given the amount of pieces used for each set, calculates bonuses provided by each set.
   It loops over all the sets so it can provide default values */
function getSetBonuses(setPieces) {
  return Object.entries(SETS).reduce((result, [setId, setData]) => {
    const pieces = setPieces[setId] || 0

    Object.entries(setData.bonuses).forEach(([requiredPieces, bonus]) => {
      Object.entries(bonus).forEach(([name, val]) => {
        if (name === 'stats' && pieces >= requiredPieces) sumStats(val, result.stats)
        else if (name === 'aura' && pieces >= requiredPieces) result.auras[setId] = val
        else {
          const base = name.match(/_ratio$/) ? 1 : 0
          result.special[`${setData.abrv}_${requiredPieces}p_${name}`] = base + (pieces >= requiredPieces ? val : 0)
        }
      })
    })

    return result
  }, { stats: {}, auras: {}, special: {} })
}

const ALLOWED_IN_MAINHAND = ['Two', 'Main', 'One']
const ALLOWED_IN_OFFHAND = ['Off', 'One']

/** Given the gear object, calculates stats, auras and special values obtained from gear pieces */
function getStatsFromGearPieces(gear) {
  const setPieces = {}

  const gearResults =  Object.entries(gear).reduce((acc, [type, gearData]) => {
    const { id } = gearData
    if (id === 0) return acc
    if (!GEAR_MAP[type]) throw Error(`Detected invalid gear type "${type}"`)
    if (!GEAR_MAP[type][id]) throw Error(`Detected invalid gear piece of type "${type}" with id "${id}"`)
    const gearPiece = GEAR_MAP[type][id]

    if (type === 'mainhand') {
      if (!ALLOWED_IN_MAINHAND.includes(gearPiece.hand)) throw new Error(`Tried to use "${gearPiece.name}" in ${type} but its not allowed.`)
      if (gearPiece.hand === 'Two' && gear.offhand) throw new Error(`Can't use a two-handed weapon and an offhand weapon!`)
    } else if (type === 'offhand' && !ALLOWED_IN_OFFHAND.includes(gearPiece.hand)) throw new Error(`Tried to use "${gearPiece.name}" in ${type} but its not allowed.`)
    else if (type === 'ammo') {
      if (gearPiece.type === 'arrow' && gearPiece.range?.type === 'Gun') throw new Error(`Tried to use arrows on a gun`)
      else if (gearPiece.type === 'bullet' && gearPiece.range?.type !== 'Gun') throw new Error(`Tried to use bullets on a bow/x-bow`)
    }


    if (gearPiece.stats) sumStats(gearPiece.stats, acc.stats)
    if (gearPiece.aura) acc.auras[id] = gearPiece.aura
    if (gearPiece.special) addSpecial(gearPiece.special, acc.special)
    if (gearPiece.set) {
      if (!SETS[gearPiece.set]) throw Error(`Gear piece "${gearPiece.name}" is linked to set with id ${gearPiece.set}, but no related set could be found.`)
      setPieces[gearPiece.set] = (setPieces[gearPiece.set] || 0) + 1
    }

    return acc
  }, { stats: {}, auras: {}, special: { multishot_dmg_inc_ratio: 1 } } )

  const result = getSetBonuses(setPieces)
  mergeResults(gearResults, result)

  return result
}

/** Given the gear object, calculates stats, auras and specials obtained from gear pieces, enchants and gems */
function getStatsFromGear(gear) {
  const result = getStatsFromGearPieces(gear)
  mergeResults(getStatsFromGems(gear), result)
  mergeResults(getStatsFromEnchants(gear), result)
  mergeResults(getStatsFromAttachments(gear), result)

  return result
}
