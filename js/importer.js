const GEAR_MAPPER = {
  HEAD: 'head',
  NECK: 'neck',
  SHOULDERS: 'shoulder',
  BACK: 'back',
  CHEST: 'chest',
  WRISTS: 'wrist',
  MAIN_HAND: 'mainhand',
  OFF_HAND: 'offhand',
  HANDS: 'hand',
  WAIST: 'waist',
  LEGS: 'leg',
  FEET: 'feet',
  FINGER_1: 'ring1',
  FINGER_2: 'ring2',
  TRINKET_1: 'trinket1',
  TRINKET_2: 'trinket2',
  RANGED: 'range'
}

function findEnchantByEffectId(pieceName, effectId) {
  let enchantId = Object.keys(ENCHANT_MAP[pieceName]).find(id => ENCHANT_MAP[pieceName][id].effectId === effectId)

  if (!enchantId) throw new Error(`Unknown enchant with effect id ${effectId}`)
  return Number(enchantId)
}

const INITIAL_GEAR = { ammo: { id: 33803 }, quiver: { id: 18714 }}

function importGearFrom70U(items) {
  const gear = { ...INITIAL_GEAR }

  items.forEach(item => {
    const gearPiece = {}
    const pieceName = GEAR_MAPPER[item.slot]
    if (!pieceName) return

    gearPiece.id = item.id
    if (item.gems) gearPiece.gems = item.gems.map(gem => gem.id)
    if (item.enchant?.id) gearPiece.enchant = findEnchantByEffectId(pieceName, item.enchant.id)

    gear[pieceName] = gearPiece
  })

  validateImportedGear(gear)
  return gear
}

const FLATTENED_TALENTS = TALENT_TREES.flat()
function importTalentsFrom70U(data) {
  const talents = {}
  data.forEach(talentData => {
    const talent = FLATTENED_TALENTS.find(t => t.name === talentData.name)
    loadTalent(talents, talent, talentData.rank)
  })

  return talents
}

function importFrom70U(data) {
  const { items = [], talents = [] } = data

  return {
    gear: importGearFrom70U(items),
    talents: importTalentsFrom70U(talents)
  }
}

const GEAR_ORDER = ['ammo', 'head', 'neck', 'shoulder', 'shirt', 'chest', 'waist', 'leg', 'feet', 'wrist', 'hand', 'ring1', 'ring2', 'trinket1', 'trinket2', 'back', 'mainhand', 'offhand', 'range', 'tabard']
const TO_SKIP = [0, 4, 19]

function importFromWA(data) {
  const gear = { ...INITIAL_GEAR }
  if (data[0] !== '{' || data[data.length - 1] !== '}') throw new Error('ImportFromWA received invalid input')

  data.slice(1, -1).split(',').forEach((line, i) => {
    if (!line) return

    const [idx,,id, enchant, gem1, gem2, gem3] = line.split(':')
    if (TO_SKIP.includes(Number(idx))) return
    if (idx !== i.toString()) throw new Error('ImportFromWA received invalid input')

    if (id) {
      const piece = { id: Number(id) }
      const pieceName = GEAR_ORDER[idx]

      if (enchant) piece.enchant = findEnchantByEffectId(pieceName, Number(enchant))
      if (gem1 || gem2 || gem3) piece.gems = []
      if (gem1) piece.gems[0] = Number(gem1)
      if (gem2) piece.gems[1] = Number(gem2)
      if (gem3) piece.gems[2] = Number(gem3)

      gear[pieceName] = piece
    }
  })

  validateImportedGear(gear)
  return gear
}

function validateImportedGear(gear) {
  const errors = []

  Object.entries(gear).forEach(([slot, {id, enchant, gems = []}]) => {
    if (enchant && !ENCHANT_MAP[slot]?.[enchant]) {
      errors.push(`Unknown enchant with id ${enchant} on ${slot} slot.`)
      gear[slot][enchant] = undefined
    }

    for (let i = 0; i < gems.length; ++i) {
      const gem = gems[i]
      if (gem && !GEMS[gem]) {
        errors.push(`Unknown gem #${i + 1} with id ${gem} on ${slot} slot.`)
        gear[slot].gems[i] = undefined
      }
    }

    if (!GEAR_MAP[slot][id]) {
      errors.push(`Unknown piece with id ${id} on ${slot} slot.`)
      gear[slot] = undefined
    }
  })

  if (errors.length) {
     gear.errors = errors
  }
}