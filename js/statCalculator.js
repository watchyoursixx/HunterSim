/* -----------------------------------
  AUXILIAR FUNCTIONS
  ------------------------------------ */
function sumStats(src, dst, statModifier = st => st) {
  Object.entries(src).forEach(([stat, amount]) => dst[stat] = (dst[stat] || 0) + statModifier(amount))
}

function addSpecial(src, dst) {
  Object.entries(src).forEach(([k,v])=> dst[k] = v)
}

function addAuras(src, dst) {
  Object.entries(src).forEach(([k,v]) => {
    if (dst[k]) throw new Error(`An aura with id ${k} already exists!`)
    dst[k] = v
  })
}

function mergeResults(src, dst) {
  if (src.stats) sumStats(src.stats, dst.stats)
  if (src.special) addSpecial(src.special, dst.special)
  if (src.auras) addAuras(src.auras, dst.auras)
}

/* -----------------------------------
  BUFFS
  ------------------------------------ */
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

/* -----------------------------------
  CONSUMABLES
  ------------------------------------ */
function getStatsFromConsumes(consumables, source) {
  return Object.entries(consumables).reduce((stats, [type, id]) => {
    if (!source[type]) throw Error(`Detected invalid consumable of type "${type}"`)
    if (!source[type][id]) throw Error(`Detected invalid consume id ${id}`)

    sumStats(source[type][id].stats, stats)
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

/* -----------------------------------
  GEAR
  ------------------------------------ */
const ALLOWED_IN_MAINHAND = ['Two', 'Main', 'One']
const ALLOWED_IN_OFFHAND = ['Off', 'One']

function getMetagemBonuses(usedMeta, gemsUsed) {
  const result = { stats: {}, auras: {}, special: {} }

  Object.entries(GEMS).filter(([, gemData]) => gemData.meta === 'Y').forEach(([gemId, gemData]) => {
    const metaBonus = gemData.activation(Number(gemId) === usedMeta ? gemsUsed : { yellow: 0, red: 0, blue: 0 })
    Object.entries(metaBonus).forEach(([bonus, val]) => {
      if (bonus === 'aura') result.auras[gemId] = val
      else if (bonus === 'stats') sumStats(val, result.stats)
      else result.special[bonus] = val
    })
  })

  return result
}

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

function getStatsFromGear(gear) {
  const setPieces = {}

  const result =  Object.entries(gear).reduce(({ stats, auras, special }, [type, gearData]) => {
    const { id, enchant: enchantId } = gearData

    if (id === 0) return
    if (!GEAR_MAP[type]) throw Error(`Detected invalid gear type "${type}"`)
    if (!GEAR_MAP[type][id]) throw Error(`Detected invalid gear piece of type "${type}" with id "${id}"`)

    const gearPiece = GEAR_MAP[type][id]

    if (enchantId) {
      if (!ENCHANT_MAP[type]) throw Error(`Detected enchant for piece of type "${type}", which can't be enchanted`)
      if (!ENCHANT_MAP[type][enchantId]) throw Error(`Detected invalid enchant with id "${enchantId}" for piece of type "${type}"`)

      const enchant = ENCHANT_MAP[type][enchantId]
      if (enchant.for_two_handed && gearPiece.hand !== 'Two') throw new Error(`Can't use a two-handed weapon enchant on this weapon.`)

      if (enchant.stats) sumStats(enchant.stats, stats)
      if (enchant.aura) auras[enchantId] = enchant.aura
      if (enchant.special) special = { ...special, ...enchant.special }
    }

    if (type === 'mainhand') {
      if (!ALLOWED_IN_MAINHAND.includes(gearPiece.hand)) throw new Error(`Tried to use "${gearPiece.name}" in ${type} but its not allowed.`)
      if (gearPiece.hand === 'Two' && gear.offhand) throw new Error(`Can't use a two-handed weapon and an offhand weapon!`)
    } else if (type === 'offhand' && !ALLOWED_IN_OFFHAND.includes(gearPiece.hand)) throw new Error(`Tried to use "${gearPiece.name}" in ${type} but its not allowed.`)
    else if (type === 'ammo') {
      if (gearPiece.type === 'arrow' && gearPiece.range?.type === 'Gun') throw new Error(`Tried to use arrows on a gun`)
      else if (gearPiece.type === 'bullet' && gearPiece.range?.type !== 'Gun') throw new Error(`Tried to use bullets on a bow/x-bow`)
    }

    if (gearPiece.stats) sumStats(gearPiece.stats, stats)
    if (gearPiece.aura) auras[id] = gearPiece.aura    // If gear piece has an aura, add it to the general auras object
    if (gearPiece.special) special = { ...special, ...gearPiece.special } // If gear piece has an special, put it in the special object
    if (gearPiece.set) { // If gear belongs to a set, add to the sum of pieces of that set
      if (!SETS[gearPiece.set]) throw Error(`Gear piece "${gearPiece.name}" is linked to set with id ${gearPiece.set}, but no related set could be found.`)
      setPieces[gearPiece.set] = (setPieces[gearPiece.set] || 0) + 1
    }

    return { stats, auras, special }
  }, { stats: {}, auras: {}, special: { multishot_dmg_inc_ratio: 1 } } )

  mergeResults(getStatsFromGems(gear), result)

  // Add bonus sets, based on amount of pieces of each set.
  result.set_bonuses = Object.entries(SETS).reduce((bonuses, [setId, setData]) => {
    const pieces = setPieces[setId] || 0

    Object.entries(setData.bonuses).forEach(([requiredPieces, bonus]) => {
      Object.entries(bonus).forEach(([name, val]) => {
        if (name === 'stats' && pieces >= requiredPieces) sumStats(val, result.stats)
        else if (name === 'aura' && pieces >= requiredPieces) result.auras[setId] = val
        else {
          const base = name.match(/_ratio$/) ? 1 : 0
          bonuses[`${setData.abrv}_${requiredPieces}p_${name}`] = base + (pieces >= requiredPieces ? val : 0)
        }
      })
    })

    return bonuses
  }, {})

  return result
}
