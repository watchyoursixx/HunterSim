const HitRatingRatio = 15.77;
const CritRatingRatio = 22.08;
const HasteRatingRatio = 15.77;
const AgiToCrit = 1/40;
const BaseCritChance = -1.53;

// initialize base stats
var BaseRAP = 0;
var RangedCritRating = 0;
var Str = 0;
var Agi = 0;
var Stam = 0;
var Int = 0;
var BaseMAP = 0;
var MeleeCritRating = 0;
var ManaPer5 = 0;
var Resilience = 0;
var ArmorPen = 0;
var HasteRating = 0;
var RangedHitRating = 0;
var MeleeHitRating = 0;
var Expertise = 0;
var ExpertiseRating = 0;
var Spi = 0;

// stat modifiers
var strmod = 1;
var agimod = 1;
var stammod = 1;
var intmod = 1;
var spimod = 1;
var mapmod = 1;
var rapmod = 1;
var dmgmod = 1;
var rangedmgmod = 1;

// temp settings to test with
var CarefulAimTalent = (0 * 0.15);
var selectedRace = 3; // 0 for night elf, 1 for dwarf, 2 for draenei, 3 for orc, 4 for troll, 5 for tauren, 6 for blood elf -- temp?
var equippedRangeType = 1; // 0 for gun, 1 for bow, 2 for crossbow
// included here to test usage from same file
var races = [
   {
      name: 'Night Elf',
      str: 61,
      agi: 156,
      sta: 107,
      int: 77,
      spi: 83,
      mAP: 120,
      rAP: 130,
      critchance: 0,
   },{
      name: 'Dwarf',
      str: 66,
      agi: 147,
      sta: 111,
      int: 76,
      spi: 82,
      mAP: 120,
      rAP: 130,
      critchance: 0,
   },{
      name: 'Draenei',
      str: 65,
      agi: 148,
      sta: 107,
      int: 78,
      spi: 85,
      mAP: 120,
      rAP: 130,
      critchance: 0,
   },{
      name: 'Orc',
      str: 67,
      agi: 148,
      sta: 110,
      int: 74,
      spi: 86,
      mAP: 120,
      rAP: 130,
      critchance: 0,
   },{
      name: 'Troll',
      str: 65,
      agi: 153,
      sta: 109,
      int: 73,
      spi: 84,
      mAP: 120,
      rAP: 130,
      critchance: 0,
   },{
      name: 'Tauren',
      str: 69,
      agi: 146,
      sta: 110,
      int: 72,
      spi: 85,
      mAP: 120,
      rAP: 130,
      critchance: 0,
   },{
      name: 'Blood Elf',
      str: 61,
      agi: 153,
      sta: 106,
      int: 81,
      spi: 82,
      mAP: 120,
      rAP: 130,
      critchance: 0,
   },
];
function checkWeaponType(){
   // check for gun and dwarf, or bow and troll
   if ((equippedRangeType === 0 && selectedRace === 1) || (equippedRangeType === 1 && selectedRace === 4)) {
      races[selectedRace].critchance = 1;
   } else {
      races[selectedRace].critchance = 0;
   }
}
      
// gear, buff, talent objects to sum out of combat gear and buff stats
var GearStats = {Str:0, Agi:0, Stam:0, Int:0, Spi:0, RAP:0, MAP:0, Crit:0, Hit:0, MP5:0, Resil:0, ArP:0, Haste:0}; 
var BuffStats = {Str:0, Agi:0, Stam:0, Int:0, Spi:0, RAP:155, MAP:0, Crit:0, CritChance:0, Hit:0, HitChance:0, MP5:0, Resil:0, ArP:0, Haste:0}; // added 155 for hawk for now
var TalentStats = {CritChance:0, RangeCritChance:0, HitChance:0, agimod:1, mapmod:1, rapmod:1, intmod:1, dmgmod:1, rangedmgmod:1};

// test function for initializing base stats
function calcBaseStats() {
  // Main Stats
  Str = Math.floor((GearStats.Str + BuffStats.Str + races[selectedRace].str) * strmod);
  Agi = Math.floor((GearStats.Agi + BuffStats.Agi + races[selectedRace].agi) * agimod);
  Stam = Math.floor((GearStats.Stam + BuffStats.Stam + races[selectedRace].stam) * stammod);
  Int = Math.floor((GearStats.Int + BuffStats.Int + races[selectedRace].int) * intmod);
  Spi = Math.floor((GearStats.Spi + BuffStats.Spi + races[selectedRace].spi) * spimod);
  // Attack Power
  BaseMAP = (GearStats.MAP + BuffStats.MAP + Agi + Str + races[selectedRace].mAP) * mapmod;
  BaseRAP = (GearStats.RAP + BuffStats.RAP + Agi + races[selectedRace].rAP + Int * (CarefulAimTalent)) * rapmod;
  // Crit rating and crit chance
  MeleeCritRating = GearStats.Crit + BuffStats.Crit;
  RangeCritRating = GearStats.Crit + BuffStats.Crit;
  MeleeCritChance = BaseCritChance + Agi / AgiToCrit + MeleeCritRating / CritRatingRatio + BuffStats.CritChance;
  RangeCritChance = BaseCritChance + Agi / AgiToCrit + RangeCritRating / CritRatingRatio + BuffStats.CritChance + TalentStats.RangedCritChance;
}
