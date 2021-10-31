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
var rangedmgmod = 1;

var CarefulAimTalent = 1;



// gear and buff objects to sum out of combat gear and buff stats
var GearStats = {Str:0, Agi:0, Stam:0, Int:0, Spi:0, RAP:0, MAP:0, Crit:0, Hit:0, MP5:0, Resil:0, ArP:0, Haste:0}; 
var BuffStats = {Str:0, Agi:0, Stam:0, Int:0, Spi:0, RAP:0, MAP:0, Crit:0, Hit:0, MP5:0, Resil:0, ArP:0, Haste:0};

// test function for initializing base stats
function calcBaseStats() {
  
  Str = Math.floor((GearStats.Str + BuffStats.Str + races[selectedRace].str) * strmod);
  Agi = Math.floor((GearStats.Agi + BuffStats.Agi + races[selectedRace].agi) * agimod);
  Stam = Math.floor((GearStats.Stam + BuffStats.Stam + races[selectedRace].stam) * stammod);
  Int = Math.floor((GearStats.Int + BuffStats.Int + races[selectedRace].int) * intmod);
  Spi = Math.floor((GearStats.Spi + BuffStats.Spi + races[selectedRace].spi) * spimod);
  
  BaseMeleeAP = (GearStats.MAP + BuffStats.MAP + Str + races[selectedRace].mAP) * mapmod;
  BaseRangedAP = (GearStats.RAP + BuffStats.RAP + Agi + races[selectedRace].rAP + Int * (CarefulAimTalent)) * rapmod;
}
