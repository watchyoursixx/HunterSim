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

function importGearFrom70U(items) {
  const gear = { ammo: { id: 33803 }, quiver: { id: 18714 }}

  items.forEach(item => {
    const gearPiece = {}
    const pieceName = GEAR_MAPPER[item.slot]
    if (!pieceName) return

    gearPiece.id = item.id
    if (item.gems) gearPiece.gems = item.gems.map(gem => gem.id)
    if (item.enchant?.id) {
      let enchantId = Object.keys(ENCHANT_MAP[pieceName]).find(id => ENCHANT_MAP[pieceName][id].effectId === item.enchant.id)
      if (enchantId > 0) gearPiece.enchant = Number(enchantId)
      else throw new Error(`Unknown enchant with effect id ${item.enchant.id}`)
    }

    gear[pieceName] = gearPiece
  })

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