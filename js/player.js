// initialize constants
const HitRatingRatio = 15.77;
const CritRatingRatio = 22.08;
const HasteRatingRatio = 15.77;
const AgiToCrit = 40;
const BaseCritChance = -1.53;
const BaseHitChance = 0;
const CritPenalty = -3;
const CritAuraPenalty = -1.8;
const HitPenalty = -1;
const ExpertiseRatio = 3.9;
const GlanceDmgReduction = 0.75;
const GlanceChance = 0.24;

// initialize stat variables
var RangeCritRating = 0;
var RangeCritChance = 0;
var Str = 0;
var Agi = 0;
var Stam = 0;
var Int = 0;
var Spi = 0;
var BaseMAP = 0;
var BaseRAP = 0;
var MeleeCritRating = 0;
var MeleeCritChance = 0;
var ManaPer5 = 0;
var Resilience = 0;
var ArmorPen = 0;
var HasteRating = 0;
var RangeHitRating = 0;
var RangeHitChance = 0;
var RangeMissChance = 0;
var MeleeHitRating = 0;
var MeleeHitChance = 0;
var MeleeMissChance = 0;
var Expertise = 0;
var ExpertiseRating = 0;

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
var selectedRace = 0; // 0 for night elf, 1 for dwarf, 2 for draenei, 3 for orc, 4 for troll, 5 for tauren, 6 for blood elf -- temp? 0 for orc now, simplified race for testing
var equippedRanged = 15808;
var equippedMainhand = 28587;
var offhandDisabled = false;

// included here to test usage from same set of code -- will remove later
var races = [
   {
      name: 'Orc',
      str: 67,
      agi: 148,
      stam: 110,
      int: 74,
      spi: 86,
      mAP: 120,
      rAP: 130,
      critchance: 0,
      hitchance: 0,
      expertise: 0,
   },
];
// adding in test rangeweps
var rangeweps = {
    15808:  {
                name: 'Fine Light Crossbow',
                mindmg: 29,
                maxdmg: 29,
                speed: 2.7,
                type: 2,
                itemid: 15808,
    }
};
// adding in test mainhandweps
var mainhandweps = {
    28587:  {
                name: 'Legacy',
                Agi: 40,
                Stam: 46,
                MAP: 80,
                RAP: 80,
                MP5: 8,
                mindmg: 319,
                maxdmg: 479,
                speed: 3.5,
                itemid: 28587,
                type: 3,
                hand: 3,
    }
};

var equippedRangeType = rangeweps[equippedRanged].type; // 0 for gun, 1 for bow, 2 for crossbow
var equippedMHType = mainhandweps[equippedMainhand].type;

function checkWeaponType(){
   // check for gun and dwarf, or bow and troll
   if ((equippedRangeType === 0 && selectedRace === 1) || (equippedRangeType === 1 && selectedRace === 4)) {
      races[selectedRace].critchance = 1;
   } else {
      races[selectedRace].critchance = 0;
   }
   // check for axe and orc
   if (equippedMHType === 3 && selectedRace === 0) {
      races[selectedRace].expertise = 5;
   } else {
      races[selectedRace].expertise = 0;
   }
   // hand options: 0 for main-hand, 1 for one-hand, 2 for off-hand, 3 for two-hand
   offhandDisabled = (mainhandweps[equippedMainhand].hand === 3) ? true:false; 
}
      
// gear, buff, talent objects to sum out of combat gear and buff stats
var GearStats = {Str:0, Agi:0, Stam:0, Int:0, Spi:0, RAP:0, MAP:0, Crit:0, Hit:0, MP5:0, Resil:0, ArP:0, Haste:0, ExpRating:0}; 
function addGear(){
    for(let prop in GearStats) {
        GearStats[prop] += mainhandweps[equippedMainhand][prop] || 0;
    }
}

var BuffStats = {Str:0, Agi:0, Stam:0, Int:0, Spi:0, RAP:155, MAP:0, Crit:0, CritChance:0, Hit:0, HitChance:0, MP5:0, Resil:0, ArP:0, Haste:0}; // added 155 for hawk for now
var TalentStats = {CritChance:0, RangeCritChance:0, HitChance:0, agimod:1, mapmod:1, rapmod:1, intmod:1, dmgmod:1, rangedmgmod:1};
var EnchantStats = {Str:0, Agi:0, Stam:0, Int:0, Spi:0, RAP:0, MAP:0, Crit:0, RangeCrit:0, Hit:0, RangeHit:0, MP5:0, Resil:0, ArP:0, Haste:0, dmgbonus:0, rangedmgbonus:0}; 

// test function for initializing base stats
function calcBaseStats() {
   
  // Main Stats
  Str  = Math.floor((GearStats.Str + BuffStats.Str + EnchantStats.Str + races[selectedRace].str) * strmod);
  Agi  = Math.floor((GearStats.Agi + BuffStats.Agi + EnchantStats.Agi + races[selectedRace].agi) * agimod);
  Stam = Math.floor((GearStats.Stam + BuffStats.Stam + EnchantStats.Stam + races[selectedRace].stam) * stammod);
  Int  = Math.floor((GearStats.Int + BuffStats.Int + EnchantStats.Int + races[selectedRace].int) * intmod);
  Spi  = Math.floor((GearStats.Spi + BuffStats.Spi + EnchantStats.Spi + races[selectedRace].spi) * spimod);
   
  // Attack Power
  BaseMAP = (GearStats.MAP + BuffStats.MAP + EnchantStats.MAP + Agi + Str + races[selectedRace].mAP) * mapmod;
  BaseRAP = (GearStats.RAP + BuffStats.RAP + EnchantStats.RAP + Agi + races[selectedRace].rAP + Int * (CarefulAimTalent)) * rapmod;
   
  // Crit rating and crit chance
   let critrating = GearStats.Crit + BuffStats.Crit + EnchantStats.Crit;
  MeleeCritRating = critrating;
  RangeCritRating = critrating + EnchantStats.RangeCrit;
   let crit = BaseCritChance + Agi / AgiToCrit + races[selectedRace].critchance + BuffStats.CritChance + TalentStats.CritChance;
  MeleeCritChance = crit + MeleeCritRating / CritRatingRatio;
  RangeCritChance = crit + RangeCritRating / CritRatingRatio + TalentStats.RangeCritChance;
   
  // Hit rating and hit chance
   let hitrating = GearStats.Hit + BuffStats.Hit + EnchantStats.Hit;
  MeleeHitRating = hitrating;
  RangeHitRating = hitrating + EnchantStats.RangeHit;
   let hit = BaseHitChance + TalentStats.HitChance;
  MeleeHitChance = hit + MeleeHitRating / HitRatingRatio;
  RangeHitChance = hit + RangeHitRating / HitRatingRatio;
   let penalty = (MeleeHitChance >= 1) ? HitPenalty:0; // include penalty here? assumes lvl 73 target
  MeleeMissChance = 8 - MeleeHitChance - penalty;
  RangeMissChance = 8 - RangeHitChance - penalty;
   
  // Expertise and Dodge - every 3.9 rating is 1 expertise, 1 expertise = 0.25% reduction rounded down to nearest integer
  Expertise = Math.floor(GearStats.ExpRating / ExpertiseRatio + races[selectedRace].expertise);
  DodgeChance = 6.5 - Expertise * 0.25;
  
}
