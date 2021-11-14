/*****************************************************************************/
/* this script contains relevant calculations for stats and damage of player */
/*****************************************************************************/
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
const GlanceChance = 24;
const QuiverSpeed = 1.15;
const BaseRegen = 0.009327;

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
var Mana = 0;
var MeleeCritDamage = 2;
var RangeCritDamage = 2;
var fiveSecRulemp5 = 0;

var currentMana = 0;
var BerserkStartHP = 100;
var rangespeed = 3.0;
var meleespeed = 3.0;

var recentcast = false;
var BaseRangeSpeed = 3.0;
var BaseMeleeSpeed = 3.0;
var PPM = 0;
var GoAtimer = 0;
var combatAgi = 0;
var haste = 1;

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
var relentless_crit_mod = 1;

// temp settings to test with
var selectedRace = 3; // 0 for night elf, 1 for dwarf, 2 for draenei, 3 for orc, 4 for troll, 5 for tauren, 6 for blood elf
var offhandDisabled = false;
var totaldmgdone = 0;

var range_wep = {};
var mainhand_wep = {};
var consumestats = {};
var target = {};
var currentgear = {auras:{0:{}}, stats:{},special:{}};

// initial variables for itemid's (like a profile)
var gear = {
   //head: { id: 30141, gems: [28362, 32409], enchant: 35452 },
   //neck: { id: 30017 },
   //shoulder: { id: 30143, gems: [24028, 24028], enchant: 35417 },
   //back: { id: 29994, enchant: 34004 },
   //chest: { id: 30139, gems: [30549, 28363, 28119], enchant: 27960 },
   //wrist: { id: 29966, gems: [24028], enchant: 34002 },
   mainhand: { id: 32944, enchant: 23800 },
   //offhand: { id: 29948, enchant: 23800 },
   //hand: { id: 30140, enchant: 25080 },
   //waist: { id: 30040, gems: [24028, 24028] },
   //leg: { id: 29995, enchant: 35490 },
   //feet: { id: 30104, gems: [24055, 24028], enchant: 27951 },
   //ring1: { id: 29997 },
   //ring2: { id: 28791 },
   trinket1: { id: 28034 },
   trinket2: { id: 34427 },
   range: { id: 15808, enchant: 30260 },
   ammo: { id: 33803 },
   //quiver: { id: 18714 },
};
//var ammo = {33803: {name: "Adamantite Stinger",dps: 43.0,location: "Crafted",phase: 3,}}
// initialize variables for use - temp
var selectedbuffs = {
   stats: { MAP:0, RAP:0 },
   special: { impSancAura: 1, kingsMod: 1, windfury: false }
};
var talents = {
   imp_hawk: 1.15,
   end_training: 1.01,
   focused_fire: 2,
   imp_monkey: 0,
   thick_hide: 0,
   imp_ress_pet: 2,
   pathfinding: 0,
   bestial_swift: 0,
   unleash_fury: 1.2,
   imp_mend_pet: 2,
   ferocity: 10,
   spirit_bond: 0,
   intimidation: 1,
   bestial_disc: 2,
   animal_handler: 4,
   frenzy: 4,
   ferocious_insp: 1.03,
   bestial_wrath: 1,
   catlike_reflex: 0,
   serp_swift: 1.2,
   beast_within: 1,
   imp_conc_shot: 0,
   lethal_shots: 5,
   imp_hunter_mark: 0,
   efficiency: 0.9,
   GftT: 50,
   imp_arc_shot: 0,
   aimed_shot: 1,
   rapid_killing: 2,
   imp_stings: 1,
   mortal_shots: 1.3,
   conc_barrage: 0,
   scatter_shot: 0,
   barrage: 1,
   combat_exp: 0,
   ranged_weap_spec: 1,
   careful_aim: 0,
   trueshot_aura: 0,
   imp_barrage: 0,
   master_marksman: 1,
   silencing_shot: 0,
   monster_slaying: 1,
   humanoid_slaying: 1,
   hawk_eye: 0,
   savage_strikes: 0,
   entrapment: 0,
   deflection: 0,
   imp_wing_clip: 0,
   clever_traps: 1,
   survivalist: 1,
   deterrence: 0,
   trap_mastery: 0,
   surefooted: 0,
   imp_fd: 0,
   surv_instincts: 1,
   killer_instinct: 0,
   counterattack: 0,
   resourcefulness: 0,
   light_reflexes: 1,
   TotH: 0,
   wyvern_sting: 0,
   exp_weakness: 0,
   master_tac: 0,
   readiness: 0
 }

// adding in test range list
//const range = {15808:  {name: 'Fine Light Crossbow',mindmg: 29,maxdmg: 29,speed: 2.7,type: 'crossbow',itemid: 15808,}};
// adding in test mainhand list
//const mainhand = {28587:  {name: 'Legacy',Agi: 40,Stam: 46,MAP: 80,RAP: 80,MP5: 8,mindmg: 319,maxdmg: 479,speed: 3.5,itemid: 28587,type: 'axe',hand: 'two',}};

/********************/
/* Start functions  */
/********************/
function checkWeaponType(){
   let equippedRangeType = RANGED_WEAPONS[gear.range.id].type; 
   let equippedMHType = MELEE_WEAPONS[gear.mainhand.id].type;
   // check for gun and dwarf, or bow and troll
   if ((equippedRangeType === 'gun' && selectedRace === 1) || (equippedRangeType === 'bow' && selectedRace === 4)) {
      races[selectedRace].critchance = 1;
   } else {
      races[selectedRace].critchance = 0;
   }
   // check for axe and orc
   if (equippedMHType === 'axe' && selectedRace === 3) {
      races[selectedRace].expertise = 5;
   } else {
      races[selectedRace].expertise = 0;
   }
   // disable offhand if two hand selected
   offhandDisabled = (MELEE_WEAPONS[gear.mainhand.id].hand === 'two') ? true:false; 
}
      
// gear, buff, talent objects to sum out of combat gear and buff stats
const GearStats = {Str:0, Agi:0, Stam:0, Int:0, Spi:0, RAP:0, MAP:0, Crit:0, Hit:0, MP5:0, Resil:0, ArP:0, Haste:0,Exp:0,dmgbonus:0, rangedmgbonus:0}; 

function addGear(){
      for(let prop in GearStats) {
        GearStats[prop] = currentgear.stats[prop] || 0; 
      }
}

const BuffStats = {Str:0, Agi:0, Stam:0, Int:0, Spi:0, RAP:0, MAP:0, Crit:0, CritChance:0, Hit:0, HitChance:0, MP5:0, Resil:0, ArP:0, Haste:0};
function addBuffs(){
   let stats = selectedbuffs.stats;
   for(let prop in BuffStats) {
         BuffStats[prop] = (stats[prop] || 0) + (consumestats[prop] || 0);

   }
}

// var TalentStats = {CritChance:0, RangeCritChance:0, HitChance:0, agimod:1, mapmod:1, rapmod:1, intmod:1, dmgmod:1, rangedmgmod:1};
const EnchantStats = {Str:0, Agi:0, Stam:0, Int:0, Spi:0, RAP:0, MAP:0, Crit:0, RangeCrit:0, Hit:0, RangeHit:0, MP5:0, Resil:0, ArP:0, Haste:0, dmgbonus:0, rangedmgbonus:0}; 

// initialize base stats - called when talents, gear/enchants, static buffs/consumes, race are changed
function calcBaseStats() {
   // todo add slaying
  dmgmod = (1 + talents.focused_fire / 100) * selectedbuffs.special.impSancAura;
  rangedmgmod = dmgmod * (talents.ranged_weap_spec);

  strmod = selectedbuffs.special.kingsMod;
  agimod = selectedbuffs.special.kingsMod * (1 + talents.combat_exp) * talents.light_reflexes;
  stammod = selectedbuffs.special.kingsMod;
  intmod = selectedbuffs.special.kingsMod * (1 + talents.combat_exp * 3);
  spimod = selectedbuffs.special.kingsMod;

  // Main Stats
  Str  = Math.floor((GearStats.Str + BuffStats.Str + EnchantStats.Str + races[selectedRace].str) * strmod);
  Agi  = Math.floor((GearStats.Agi + BuffStats.Agi + EnchantStats.Agi + races[selectedRace].agi) * agimod);
  Stam = Math.floor((GearStats.Stam + BuffStats.Stam + EnchantStats.Stam + races[selectedRace].sta) * stammod);
  Int  = Math.floor((GearStats.Int + BuffStats.Int + EnchantStats.Int + races[selectedRace].int) * intmod);
  Spi  = Math.floor((GearStats.Spi + BuffStats.Spi + EnchantStats.Spi + races[selectedRace].spi) * spimod);

  // Attack Power
  BaseMAP = (GearStats.MAP + BuffStats.MAP + EnchantStats.MAP + Agi + Str + races[selectedRace].mAP) * mapmod;
  BaseRAP = (GearStats.RAP + BuffStats.RAP + EnchantStats.RAP + Agi + races[selectedRace].rAP + Int * talents.careful_aim) * rapmod;
   
  // Crit rating and crit chance
   let critrating = GearStats.Crit + BuffStats.Crit + EnchantStats.Crit;
  MeleeCritRating = critrating;
  RangeCritRating = critrating + currentgear.stats.RangeCrit;
   let crit = BaseCritChance + Agi / AgiToCrit + BuffStats.CritChance + talents.killer_instinct;
  MeleeCritChance = crit + MeleeCritRating / CritRatingRatio;
  RangeCritChance = crit + RangeCritRating / CritRatingRatio + talents.lethal_shots + races[selectedRace].critchance;
  // todo add slaying
  MeleeCritDamage = 2 * (relentless_crit_mod * 1);
  RangeCritDamage = 1 + (talents.mortal_shots) * (2 * 1 * relentless_crit_mod - 1);
  // Hit rating and hit chance - split between ranged and melee because of hit scope and crit scope and racial
   let hitrating = GearStats.Hit + BuffStats.Hit + EnchantStats.Hit;
  MeleeHitRating = hitrating;
  RangeHitRating = hitrating + EnchantStats.RangeHit;
   let hit = BaseHitChance + talents.surefooted + BuffStats.HitChance;
  MeleeHitChance = hit + MeleeHitRating / HitRatingRatio; // need dual wield condition
  RangeHitChance = hit + RangeHitRating / HitRatingRatio;
   let penalty = (MeleeHitChance >= 1) ? HitPenalty:0; // include penalty here? assumes lvl 73 target
  MeleeMissChance = 8 - MeleeHitChance - penalty;
  RangeMissChance = 8 - RangeHitChance - penalty;

  // Expertise and Dodge - every 3.9 rating is 1 expertise, 1 expertise = 0.25% reduction rounded down to nearest integer
  Expertise = Math.floor(GearStats.Exp / ExpertiseRatio + races[selectedRace].expertise);
  DodgeChance = 6.5 - Expertise * 0.25;

  // to do armorpen, mp5, haste, speed, base damage, mana, hp, spirit mp5
  ArmorPen = GearStats.ArP;
  ManaPer5 = Math.floor(BuffStats.MP5 + GearStats.MP5 + EnchantStats.MP5);
  fiveSecRulemp5 = Math.floor(5 * (Math.sqrt(Int) * Spi * BaseRegen));

  // base of 3253 always then add int
  Mana = 3253 + (Int - 10) * 15;
  // initialize current Mana to Max mana
  currentMana = 2000;
  
  HasteRating = BuffStats.Haste + GearStats.Haste + EnchantStats.Haste;
  
  BaseRangeSpeed = RANGED_WEAPONS[gear.range.id].speed / QuiverSpeed / talents.serp_swift;
  BaseMeleeSpeed = MELEE_WEAPONS[gear.mainhand.id].speed;
  
}


var auras = {
   // actives
   drums: {enable:true, timer:0, cooldown:0, duration:30}, // coded buff but no activation
   potion: {enable:true, timer:0, cooldown:0, duration:15}, // coded buff but no activation
   abacus: {enable:true, timer:0, cooldown:0, duration:10}, // coded buff but no activation
   lust: {enable:true, timer:0, cooldown:0, duration:40}, // coded buff but no activation
   rapid: {enable:true, timer:0, cooldown:0, duration:15}, // coded buff but no activation
   berserk: {enable:true, timer:0, cooldown:0, duration:10}, // coded buff but no activation
   unyieldingcourage: {enable:true, timer:0, cooldown:0, duration:20}, // coded buff but no activation
   bloodfury: {enable:true, timer:0, cooldown:0, duration: 15}, // coded buff but no activation
   swarmguard: {enable:false, timer:0, cooldown:0, ppm:12, duration:30, stacks:0}, // coded
   beastwithin: {enable:true, timer:0, cooldown:0, duration: 18}, // 
   tenacity: {enable:false, timer: 0, cooldown:0, duration: 15}, // coded buff but no activation
   trinket1: {}, // coded
   trinket2: {}, // coded
   // procs
   dragonspine: {enable:true, timer:0, cooldown:0, ppm:1, duration:10}, // coded
   imphawk: {enable:true, timer:0, duration:12}, // coded
   beastlord: {enable:true, timer:0, duration:15}, 
   executioner: {enable:false, timer:0, ppm:1, duration:15}, // coded
   mongoose: {enable:false, timer:0, ppm:1, duration:15}, // coded
   madness: {enable:false, timer:0, ppm:1,duration: 10}, // coded
   tsunami: {enable:false, timer:0, cooldown:0, procchance:10, duration: 10}, // coded
   hourglass: {enable:false, timer:0, cooldown:0, procchance:10, duration: 10}, // coded
   naarusliver: {enable:false, timer:0, cooldown:0, procchance:10, duration: 20, stacks: 0}, // coded
   eternalchamp: {enable:false, timer:0, cooldown:0, ppm:2, duration: 10}, // coded
   donsantos: {enable:false, timer:0, ppm:1, duration: 10}, // coded
   mastertact: {timer:0, procchance:6, duration: 8}, // coded
   ashtongue: {enable:false, timer:0, procchance:15, duration: 8}, // coded
   dmccrusade: {enable:true, timer:0, cooldown:0, duration: 10}, 

}

function initialize(){
   checkWeaponType();
   currentgear = getStatsFromGear(gear);
   addGear();
   console.log("current gear: ");
   console.log(currentgear);
   addBuffs();
   calcBaseStats();
   initializeWeps();
   initializeAuras();
}
// call above functions
initialize();

function initializeWeps() {
   // initialize range_wep obj
   range_wep.speed = RANGED_WEAPONS[gear.range.id].speed;
   range_wep.mindmg = RANGED_WEAPONS[gear.range.id].mindmg;
   range_wep.maxdmg = RANGED_WEAPONS[gear.range.id].maxdmg;
   range_wep.ammodps = AMMOS[gear.ammo.id].ammo_dps;
   range_wep.flatdmg = currentgear.stats.dmgbonus || 0 + currentgear.stats.rangedmgbonus || 0;
   range_wep.basedmgmod = rangedmgmod;
   // initialize mainhand_wep obj

   mainhand_wep.speed = MELEE_WEAPONS[gear.mainhand.id].speed;
   mainhand_wep.mindmg = MELEE_WEAPONS[gear.mainhand.id].mindmg;
   mainhand_wep.maxdmg = MELEE_WEAPONS[gear.mainhand.id].maxdmg;
   mainhand_wep.flatdmg = currentgear.stats.dmgbonus || 0;
   //console.log(currentgear.stats.dmgbonus);
   mainhand_wep.basedmgmod = dmgmod;
   
}
// setup auras
function initializeAuras() {
   // set up on use AP trinkets diff from the rest of auras
   let trinket1 = currentgear.auras[gear.trinket1.id];
   let trinket2 = currentgear.auras[gear.trinket2.id];
   trinket1rap = (trinket1.hasOwnProperty('stats.RAP')) ? trinket1.stats.RAP : 0;
   trinket2rap = (trinket2.hasOwnProperty('stats.RAP')) ? trinket2.stats.RAP : 0;
   auras.trinket1 = {timer:0,cooldown:0, duration:trinket1.duration, basecd:trinket1.cd,AP:trinket1rap};
   auras.trinket1.onuseAP = (trinket1.is_proc == true) ? false : true;
   auras.trinket2 = {timer:0,cooldown:0, duration:trinket2.duration, basecd:trinket2.cd,AP:trinket2rap};
   auras.trinket2.onuseAP = (trinket2.is_proc == true) ? false : true;

   // proc trinket enables
   auras.dragonspine.enable = ((gear.trinket1.id === 28830) || (gear.trinket2.id === 28830)) ? true : false; // enable dragonspine
   auras.naarusliver.enable = ((gear.trinket1.id === 34427) || (gear.trinket2.id === 34427)) ? true : false; 
   auras.madness.enable = ((gear.trinket1.id === 32505) || (gear.trinket2.id === 32505)) ? true : false; 
   auras.tsunami.enable = ((gear.trinket1.id === 30627) || (gear.trinket2.id === 30627)) ? true : false; 
   auras.hourglass.enable = ((gear.trinket1.id === 28034) || (gear.trinket2.id === 28034)) ? true : false; 
   auras.ashtongue.enable = ((gear.trinket1.id === 32487) || (gear.trinket2.id === 32487)) ? true : false; 
   auras.tenacity.enable = ((gear.trinket1.id === 32658) || (gear.trinket2.id === 32658)) ? true : false; 
   auras.swarmguard.enable = ((gear.trinket1.id === 21670) || (gear.trinket2.id === 21670)) ? true : false; 
   auras.abacus.enable = ((gear.trinket1.id === 28288) || (gear.trinket2.id === 28288)) ? true : false; 
   auras.unyieldingcourage.enable = ((gear.trinket1.id === 28121) || (gear.trinket2.id === 28121)) ? true : false; 
   auras.dmccrusade.enable = ((gear.trinket1.id === 28121) || (gear.trinket2.id === 28121)) ? true : false;
   //console.log(auras);
}

function update() {
   // updateAuras();
   // updateMana();
   // updateAgi();
   // updateMAP();
   // updateRAP();
   // updateCritChance();
   updateHaste();
   // updateDamageMod();
   updateArmorReduction();
   // updateBonusDamage();
}
// handling for auras
function updateAuras(steptime) {
   // set timer of on use AP trinkets
   
   if(auras.trinket1.onuseAP) {
      auras.trinket1.timer = (auras.trinket1.cooldown === 0) ? auras.trinket1.duration : auras.trinket1.timer;
      auras.trinket1.cooldown = (auras.trinket1.timer === auras.trinket1.duration) ? auras.trinket1.basecd: auras.trinket1.cooldown;
   }
   if(auras.trinket2.onuseAP) {
   auras.trinket2.timer = (auras.trinket2.cooldown === 0) ? auras.trinket2.duration : auras.trinket2.timer;
   auras.trinket2.cooldown = (auras.trinket2.timer === auras.trinket2.duration) ? auras.trinket2.basecd: auras.trinket2.cooldown;
   }
   
   stepauras(steptime);

   // proc cooldowns
   if(auras.tsunami.cooldown > 0)            { auras.tsunami.cooldown = Math.max(auras.tsunami.cooldown - steptime,0); 
      console.log("tsunami cd: " + (Math.round(auras.tsunami.cooldown * 100) / 100)); } 
   if(auras.hourglass.cooldown > 0)          { auras.hourglass.cooldown = Math.max(auras.hourglass.cooldown - steptime,0);
      /*console.log("hourglass cd: " + (Math.round(auras.hourglass.cooldown * 100) / 100));*/ }
   if(auras.dragonspine.cooldown > 0)        { auras.dragonspine.cooldown = Math.max(auras.dragonspine.cooldown - steptime,0);
      console.log("dragonspine cd: " + (Math.round(auras.dragonspine.cooldown * 100) / 100)); }
   if(auras.naarusliver.cooldown > 0)        { auras.naarusliver.cooldown = Math.max(auras.naarusliver.cooldown - steptime,0); 
      /*console.log("naaru sliver cd: " + (Math.round(auras.naarusliver.cooldown * 100) / 100));*/ } 
   if(auras.eternalchamp.cooldown > 0)       { auras.eternalchamp.cooldown = Math.max(auras.eternalchamp.cooldown - steptime,0);
      console.log("eternalchamp cd: " + (Math.round(auras.eternalchamp.cooldown * 100) / 100)); }
   if(auras.dmccrusade.cooldown > 0)         { auras.dmccrusade.cooldown = Math.max(auras.dmccrusade.cooldown - steptime,0);
      console.log("dmccrusade cd: " + (Math.round(auras.dmccrusade.cooldown * 100) / 100)); }
   // active cooldowns
   if(auras.drums.cooldown > 0)              { auras.drums.cooldown = Math.max(auras.drums.cooldown - steptime,0);
      console.log("drums cd: " + (Math.round(auras.drums.cooldown * 100) / 100)); }
   if(auras.lust.cooldown > 0)               { auras.lust.cooldown = Math.max(auras.lust.cooldown - steptime,0);
      console.log("lust cd: " + (Math.round(auras.lust.cooldown * 100) / 100)); }
   if(auras.potion.cooldown > 0)             { auras.potion.cooldown = Math.max(auras.potion.cooldown - steptime,0);
      console.log("potion cd: " + (Math.round(auras.potion.cooldown * 100) / 100)); }
   if(auras.abacus.cooldown > 0)             { auras.abacus.cooldown = Math.max(auras.abacus.cooldown - steptime,0);
      console.log("abacus cd: " + (Math.round(auras.abacus.cooldown * 100) / 100)); }
   if(auras.bloodfury.cooldown > 0)          { auras.bloodfury.cooldown = Math.max(auras.bloodfury.cooldown - steptime,0);
      console.log("bloodfury cd: " + (Math.round(auras.bloodfury.cooldown * 100) / 100)); }
   if(auras.berserk.cooldown > 0)            { auras.berserk.cooldown = Math.max(auras.berserk.cooldown - steptime,0);
      console.log("berserk cd: " + (Math.round(auras.berserk.cooldown * 100) / 100)); }
   if(auras.rapid.cooldown > 0)              { auras.rapid.cooldown = Math.max(auras.rapid.cooldown - steptime,0);
      console.log("rapid cd: " + (Math.round(auras.rapid.cooldown * 100) / 100)); }
   if(auras.swarmguard.cooldown > 0)         { auras.swarmguard.cooldown = Math.max(auras.swarmguard.cooldown - steptime,0);
      console.log("swarmguard cd: " + (Math.round(auras.swarmguard.cooldown * 100) / 100)); }
   if(auras.unyieldingcourage.cooldown > 0)  { auras.unyieldingcourage.cooldown = Math.max(auras.unyieldingcourage.cooldown - steptime,0);
      console.log("unyielding cd: " + (Math.round(auras.unyieldingcourage.cooldown * 100) / 100)); }
   if(auras.beastwithin.cooldown > 0)  { auras.beastwithin.cooldown = Math.max(auras.beastwithin.cooldown - steptime,0);
      console.log("beastwithin cd: " + (Math.round(auras.beastwithin.cooldown * 100) / 100)); }
   if(auras.trinket1.onuseAP && (auras.trinket1.cooldown > 0))  { auras.trinket1.cooldown = Math.max(auras.trinket1.cooldown - steptime,0);
      console.log("trinket1 cd: " + (Math.round(auras.trinket1.cooldown * 100) / 100)); }
   if(auras.trinket2.onuseAP && (auras.trinket2.cooldown > 0))  { auras.trinket2.cooldown = Math.max(auras.trinket2.cooldown - steptime,0);
      console.log("trinket2 cd: " + (Math.round(auras.trinket2.cooldown * 100) / 100)); }
   if(auras.tenacity.onuseAP && (auras.tenacity.cooldown > 0))  { auras.tenacity.cooldown = Math.max(auras.tenacity.cooldown - steptime,0);
      console.log("tenacity cd: " + (Math.round(auras.tenacity.cooldown * 100) / 100)); }
   
}
var jowproccount = 0;
// handling for mana changes per gain/loss
function updateMana(result) {
   // judgement of wisdom gain
   if ((result === RESULT.CRIT) || (result === RESULT.HIT) || (result === RESULT.GLANCE)) {
      let tmp = 5000; // 50% chance
      let roll = rng10k();
      if (tmp < roll) {
         currentMana += 75;
         //jowproccount++;
      }
      //console.log("jow: " + jowproccount);
   }

   currentMana = Math.min(currentMana,Mana);
   // spell cost spent with % reduction from beast within
   // spirit tick gain (if no casting condition)
   let spiregen = 0;
   if ((totalduration > 5 * Math.ceil(prevtimeend / 5)) && recentcast === false) {
      spiregen = fiveSecRulemp5; 
   } 
   else { spiregen = 0; 
   }

   // mp5 tick gain
   if (totalduration > 5 * Math.ceil(prevtimeend / 5)) {
      currentMana += ManaPer5 + spiregen;
   }
   //console.log("mana "+ currentMana);
   // mana pot usage
   // runes usage
   // thrill of the hunt
}
// handling for dynamic armor reduction 
function updateArmorReduction() {
   let arp = ArmorPen;
   arp += (auras.beastlord.timer > 0) ? 600 : 0; // beast lord proc
   arp += (auras.swarmguard.timer > 0) ? auras.swarmguard.stacks * 200 : 0; // badge of swarmguard
   arp += (auras.executioner.timer > 0) ? 840 : 0; // executioner
   arp += (auras.madness.timer > 0) ? 300 : 0; // trinket arp - madness
   arp += (auras.unyieldingcourage.timer > 0) ? 600 : 0; // trinket arp - icon of unyielding courage
   // armor debuffs
   let remainingArmor = Math.max(0,target.armor - arp); // subtract sum of the above
   // target armor reduction calculation
   armorReduction = remainingArmor / (remainingArmor + 400 + 85 * ((5.5 * 70) - 265.5));
   //console.log("reduction " + armorReduction);
}

// handling for RAP changes from auras - remember target specific AP needs to be separate for pet calcs
function updateRAP() {
   // AP trinkets
   let combatRAP = BaseRAP;
   if(auras.tsunami.timer > 0) { combatRAP +=  340; } // tsunami
   if(auras.hourglass.timer > 0) { combatRAP +=  300; } // hourglass
   if(auras.bloodfury.timer > 0) { combatRAP += 282; } // bloodfury
   // if(auras.drums.timer > 0) { combatRAP += 60; }// war drums - check decision making for 2 types of drums
   if(auras.eternalchamp.timer > 0) {combatRAP += 160; } // band of eternal champions
   if(auras.donsantos.timer > 0) {combatRAP += 250; } // don santo's rifle
   if(auras.naarusliver.timer > 0) {combatRAP += 44 * auras.naarusliver.stacks; } // blackened naaru sliver
   if(auras.ashtongue.timer > 0) {combatRAP += 275; } // ashtongue talisman

   if(auras.trinket1.onuseAP && (auras.trinket1.AP > 0) && (auras.trinket1.timer > 0)) { combatRAP += auras.trinket1.AP; }
   if(auras.trinket2.onuseAP && (auras.trinket2.AP > 0) && (auras.trinket2.timer > 0)) { combatRAP += auras.trinket2.AP; }
   
   // AP from combat agi
   combatRAP += combatAgi;
   // target AP - expose weakness, mark of the champion, demonslaying, hunters mark
   //console.log("rap: " + combatRAP);
   return combatRAP;
}
// handling for MAP changes from auras
function updateMAP() {
   // AP trinkets
   // blood fury
   // battle drums
   // band of eternal champions
   // don santo's rifle
   // AP from combat agi
   // target AP - expose weakness, mark of the champion, demonslaying, hunters mark (imp only)
}
// handling for Agi changes
function updateAgi(steptime) {
   let graceenabled = (buffslist[4].id > 0) ? true : false;
   let windfuryenabled = (buffslist[11].id > 0) ? true : false;
   combatAgi = 0;
   //steptime = totalduration - previousduration;

   // check if grace/windfury then grace up every 8.5s~
   GoAtimer += steptime;
   if(GoAtimer > 10) {
      GoAtimer -= 10;
   } 
   if((windfuryenabled && (GoAtimer <= 8.5) || !windfuryenabled) && graceenabled) {
      bonusagi = (buffslist[4].talented) ? 1.15 : 1;
      combatAgi += 77 * bonusagi;
   }
   
   if(auras.mongoose.timer > 0) { combatAgi += 120; } // mongoose proc
   if(auras.tenacity.timer > 0) {combatAgi += 150; } // badge of tenacity

   combatAgi = Math.floor(combatAgi * agimod);
   // console.log("agi bonus: " + combatAgi);
   // updating crit and AP from the gained agi - in AP and crit funct
}
// handling for updating speed
function updateHaste() {
   haste = 1;
   rangespeed = BaseRangeSpeed;
   meleespeed = BaseMeleeSpeed;
   let hasterating = HasteRating;
   
   hasterating += (auras.drums.timer > 0) ? 80 : 0; // drums
   hasterating += (auras.potion.timer > 0) ? 400 : 0; // haste potion
   hasterating += (auras.dragonspine.timer > 0) ? 325 : 0; // trinket dst haste
   hasterating += (auras.abacus.timer > 0) ? 264 : 0; // trinket abacus haste

   let berserkspeed = 1 + (30 - (BerserkStartHP - 40) / 3) / 100;    // troll berserking (10-30% in tbc)
   haste = (auras.berserk.timer > 0) ? haste * berserkspeed : haste;  // troll berserking (10-30% in tbc)
   haste = (auras.lust.timer > 0) ? haste * 1.3 : haste; // lust

   let hasteRatingSpeed = (hasterating / HasteRatingRatio / 100) + 1;
   haste *= hasteRatingSpeed;

   // ranged only
   rangespeed = (auras.rapid.timer > 0) ? rangespeed / 1.4 : rangespeed; // rapid fire
   rangespeed = (auras.imphawk.timer > 0) ? rangespeed / talents.imp_hawk : rangespeed; // quick shots
   // melee only
   meleespeed = (auras.mongoose.timer > 0) ? meleespeed / 1.02 : meleespeed; // mongoose

   rangespeed = rangespeed / haste;
   meleespeed = meleespeed / haste;
   //console.log("haste rating: " + hasterating);
   //console.log("range spd: " + (Math.round(rangespeed * 100) / 100));
   //console.log("melee spd: " + (Math.round(meleespeed * 100) / 100));
}
// handling for dmg mod changes from auras
function updateDamageMod() {
   
   if(auras.beastwithin.timer > 0) { combatdmgmod *= 1.1;} // bestial wrath

   // ferocious inspiration
   // blood frenzy
   // special mods for non-physical dmg
}
// maybe not bother with for TBC, just keep in mind due to ZHC for classic
function updateBonusDamage() {
}
// handling for crit changes
function updateCritChance() {
   let combatCritChance = RangeCritChance;
   if(auras.mastertact.timer > 0) { combatCritChance += talents.master_tac; } // master tactician
   
   // from agi changes
   combatCritChance += combatAgi / AgiToCrit;
   // imp crusader debuff

   return combatCritChance;
}
// check warrior sim for how it's implemented - looks like simple timer reduction each call
function steptimer() {
}
// related to above
function stepitemtimer() {
}
// related to above - specifically timing of auras
function stepauras(steptime) {
      // actives
      if(auras.lust.timer > 0)               { auras.lust.timer = Math.max(auras.lust.timer - steptime,0); }
      if(auras.berserk.timer > 0)            { auras.berserk.timer = Math.max(auras.berserk.timer - steptime,0); }
      if(auras.bloodfury.timer > 0)          { auras.bloodfury.timer = Math.max(auras.bloodfury.timer - steptime,0); }
      if(auras.abacus.timer > 0)             { auras.abacus.timer = Math.max(auras.abacus.timer - steptime,0); }
      if(auras.drums.timer > 0)              { auras.drums.timer = Math.max(auras.drums.timer - steptime,0); }
      if(auras.potion.timer > 0)             { auras.potion.timer = Math.max(auras.potion.timer - steptime,0); }
      if(auras.rapid.timer > 0)              { auras.rapid.timer = Math.max(auras.rapid.timer - steptime,0); }
      if(auras.swarmguard.timer > 0)         { auras.swarmguard.timer = Math.max(auras.swarmguard.timer - steptime,0); }
      if(auras.unyieldingcourage.timer > 0)  { auras.unyieldingcourage.timer = Math.max(auras.unyieldingcourage.timer - steptime,0); }
      if(auras.beastwithin.timer > 0)        { auras.beastwithin.timer = Math.max(auras.beastwithin.timer - steptime,0); }
      if(auras.trinket1.timer > 0)           { auras.trinket1.timer = Math.max(auras.trinket1.timer - steptime,0); }
      if(auras.trinket2.timer > 0)           { auras.trinket2.timer = Math.max(auras.trinket2.timer - steptime,0); }
      // procs
      if(auras.tsunami.timer > 0)            { auras.tsunami.timer = Math.max(auras.tsunami.timer - steptime,0); }
      if(auras.hourglass.timer > 0)          { auras.hourglass.timer = Math.max(auras.hourglass.timer - steptime,0); }
      if(auras.imphawk.timer > 0)            { auras.imphawk.timer = Math.max(auras.imphawk.timer - steptime,0); }
      if(auras.beastlord.timer > 0)          { auras.beastlord.timer = Math.max(auras.beastlord.timer - steptime,0); }
      if(auras.madness.timer > 0)            { auras.madness.timer = Math.max(auras.madness.timer - steptime,0); }
      if(auras.executioner.timer > 0)        { auras.executioner.timer = Math.max(auras.executioner.timer - steptime,0); }
      if(auras.mongoose.timer > 0)           { auras.mongoose.timer = Math.max(auras.mongoose.timer - steptime,0); }
      if(auras.dragonspine.timer > 0)        { auras.dragonspine.timer = Math.max(auras.dragonspine.timer - steptime,0); }
      if(auras.naarusliver.timer > 0)        { auras.naarusliver.timer = Math.max(auras.naarusliver.timer - steptime,0); }
      if(auras.eternalchamp.timer > 0)       { auras.eternalchamp.timer = Math.max(auras.eternalchamp.timer - steptime,0); }
      if(auras.donsantos.timer > 0)          { auras.donsantos.timer = Math.max(auras.donsantos.timer - steptime,0); }
      if(auras.mastertact.timer > 0)         { auras.mastertact.timer = Math.max(auras.mastertact.timer - steptime,0); }
      if(auras.ashtongue.timer > 0)          { auras.ashtongue.timer = Math.max(auras.ashtongue.timer - steptime,0); }
      if(auras.dmccrusade.timer > 0)         { auras.dmccrusade.timer = Math.max(auras.dmccrusade.timer - steptime,0); }
   
      // reset swarmguard stacks
      if(auras.swarmguard.timer === 0){ auras.swarmguard.stacks = 0;}
}

// ending auras for uptime %
function endauras() {

}
function uptimecalc() {

}
// hit table calc for mainhand
function rollMainhandWep() {
      let tmp = 0;
      let roll = rng10k();
      tmp += MeleeMissChance * 100;
      if (roll < tmp) return RESULT.MISS;
      tmp += DodgeChance * 100;
      if (roll < tmp) return RESULT.DODGE;
      tmp += GlanceChance * 100;
      if (roll < tmp) return RESULT.GLANCE;
      tmp += MeleeCritChance * 100;
      if (roll < tmp) return RESULT.CRIT;
      return RESULT.HIT;

}
// hit table calc for ranged
function rollRangeWep() {
   let tmp = 0;
   let roll = rng10k();
   tmp += RangeMissChance * 100;
   if (roll < tmp) return RESULT.MISS;
   tmp += (100 - RangeMissChance) * combatCritChance; // 2 roll
   if (roll < tmp) return RESULT.CRIT;
   return RESULT.HIT;
   
}
// hit table for spells - need condition for dodge for melee yellow only 2 roll for all
function rollSpell(spell) {
}
// attack with mainhand calc
function attackMainhand(mainhand_wep) {
}

// attack with auto shot calc
function attackRange(steptimeend) {

   let attack = "ranged";
   //updateAuras(steptime);
   updateArmorReduction();
   updateAgi(steptimeend);
   combatRAP = updateRAP();
   combatCritChance = updateCritChance();
   //updateDamageMod();
   let dmg = 0;
   let result = rollRangeWep(combatCritChance); // check attack table
   
   if (result == RESULT.HIT) {
         dmg = autoShotCalc(range_wep,combatRAP); // calc damage
   }
   else if (result == RESULT.CRIT) {
         dmg = autoShotCalc(range_wep,combatRAP);
         dmg *= RangeCritDamage;
         proccrit();
   }

   done = dealdamage(dmg,result,range_wep);
   
   totaldmgdone += done;
   procauto();
   procattack(attack);
   updateHaste();
   updateMana(result); // expensiveish
   //console.log("auto shot " + RESULTARRAY[result] + " for " + done);
   autocount++;
}
// cast spell (possibly add individual spells)
function cast(spell) {
   recentcast = true;
   let hastemod =  range_wep.speed / rangespeed;

   if(spell === 'autoshot'){
      SPELLS.autoshot.cast = 0.5 / hastemod;
      SPELLS.autoshot.cd = rangespeed - SPELLS.autoshot.cast;
      //console.log("after auto: "+(Math.round(steptimestart * 100) / 100));
      steptimeend = SPELLS.autoshot.cast + steptimestart;
      //console.log("cast auto shot");
      //console.log("hawk " + auras.imphawk.timer);
      attackRange(steptimeend);
      //console.log("done");
      //console.log(auras);
      //return steptime = autoshot.cd;
   }

}
autocount = 0;
// final damage calculation after rolls
function dealdamage(dmg, result, weapon, spell) {
   if (result != RESULT.MISS && result != RESULT.DODGE) {
      // randomizes the result to be always ±1 damage as in-game results show even with fine light crossbow
      let mindmg = Math.floor(dmg * (1 - armorReduction));
      let maxdmg = Math.ceil(dmg * (1 - armorReduction));
      dmg = rng(mindmg,maxdmg);
      
      //console.log("autos: " + autocount);
      return dmg;
   }
   else {
      return 0;
   }
}
var killcommand = {enable:false, timeremaining:0, cooldown:5};
// handling for procs by crits
function proccrit() {
   // kill command
   //killcommand.enable = true;
   //killcommand.timeremaining = totalduration + 5;

   let roll = 0;
   // tsunami talisman
   if (auras.tsunami.enable && auras.tsunami.cooldown === 0){ 
      roll = rng10k(); 
      auras.tsunami.timer = (roll <= auras.tsunami.procchance * 100) ? auras.tsunami.duration : 0;
      if(auras.tsunami.timer > 0) { auras.tsunami.cooldown = 45;
         //console.log("tsunami proc");
      }
   } 
   
   // hourglass of the unraveler
   if (auras.hourglass.enable && auras.hourglass.cooldown === 0){ 
      roll = rng10k();
      auras.hourglass.timer = (roll <= auras.hourglass.procchance * 100) ? auras.hourglass.duration : 0;
      if(auras.hourglass.timer > 0) { auras.hourglass.cooldown = 50;
         //console.log("hourglass proc");
      }
   } 
}
// handling for procs by autos (quick shots only)
function procauto() {
   if (talents.imp_hawk > 1) {
      let x = rng10k();
      auras.imphawk.timer = (x <= 1000) ? 12 : auras.imphawk.timer; // proc check
      if(auras.imphawk.timer === 12) { /*console.log("quick shots proc");*/ }
   }
}
// handling for procs by steady only
function procsteady() {
      // madness of the betrayer
   if (auras.ashtongue.enable){
      roll = rng10k(); 
      auras.ashtongue.timer = (roll <= auras.ashtongue.procchance * 100) ? auras.ashtongue.duration : auras.ashtongue.timer;
      //if(auras.ashtongue.timer === auras.ashtongue.duration) { console.log("ashtongue proc"); }
   }
}
// handling for procs by normal hits - melee or ranegd
function procattack(attack) {
   let roll = 0;
   PPM = 0;
   let meleehit = (attack === "melee") ? true:false;
   let rangehit = (attack === "ranged") ? true:false;

   // dragonspine trophy
   if (auras.dragonspine.enable && auras.dragonspine.cooldown === 0){
      roll = rng10k(); 
      if(rangehit) {PPM = 1/60 * RANGED_WEAPONS[gear.range.id].speed * 100; }
      if(meleehit) {PPM = BaseMeleeSpeed / 60 * 100; }
      let procchance = auras.dragonspine.ppm * PPM;
      auras.dragonspine.timer = (roll <= procchance * 100) ? auras.dragonspine.duration : 0;
      if(auras.dragonspine.timer > 0) { auras.dragonspine.cooldown = 20; /*console.log("dragonspine proc");*/}
   }  
   // madness of the betrayer
   if (auras.madness.enable){
      roll = rng10k(); 
      if(rangehit) {PPM = 1/60 * RANGED_WEAPONS[gear.range.id].speed * 100; }
      if(meleehit) {PPM = BaseMeleeSpeed / 60 * 100; }
      let procchance = auras.madness.ppm * PPM;
      auras.madness.timer = (roll <= procchance * 100) ? auras.madness.duration : auras.madness.timer;
      //if(auras.madness.timer === auras.madness.duration) { console.log("madness proc"); }
   }
   // executioner enchant
   if (meleehit && auras.executioner.enable){
      roll = rng10k(); 
      PPM = BaseMeleeSpeed / 60 * 100;
      let procchance = auras.mongoose.ppm * PPM;
      auras.executioner.timer = (roll <= procchance * 100) ? auras.executioner.duration : auras.executioner.timer;
      //if(auras.executioner.timer === auras.executioner.duration) { console.log("executioner proc"); }
   } 
   // mongoose enchant
   if (meleehit && auras.mongoose.enable){
      roll = rng10k(); 
      PPM = BaseMeleeSpeed / 60 * 100;
      let procchance = auras.mongoose.ppm * PPM;
      auras.mongoose.timer = (roll <= procchance * 100) ? auras.mongoose.duration : auras.mongoose.timer;
      //if(auras.mongoose.timer === auras.mongoose.duration) { console.log("mongoose proc"); }
   }
   // blackened naaru sliver - roll to buff
   if (auras.naarusliver.enable && auras.naarusliver.cooldown === 0){
      roll = rng10k(); 
      auras.naarusliver.timer = (roll <= auras.naarusliver.procchance * 100) ? auras.naarusliver.duration : 0;
      if(auras.naarusliver.timer === auras.naarusliver.duration) { auras.naarusliver.cooldown = 45; auras.naarusliver.stacks = 0;  }
   }
      // add stacks
   if (auras.naarusliver.enable && auras.naarusliver.timer > 0) {
      auras.naarusliver.stacks = Math.min(auras.naarusliver.stacks + 1, 10);
      //console.log("naaru stacks: " + auras.naarusliver.stacks);
   }
   // swarmguard stack handling
   if (auras.swarmguard.enable && auras.swarmguard.timer > 0) {
      roll = rng10k();
      if(rangehit) {PPM = 1/60 * RANGED_WEAPONS[gear.range.id].speed * 100; console.log(PPM);}
      if(meleehit) {PPM = BaseMeleeSpeed / 60 * 100;console.log(PPM); }
      let procchance = auras.swarmguard.ppm * PPM;
      auras.swarmguard.stacks = (roll <= procchance * 100) ? Math.min(auras.swarmguard.stacks + 1,6) : auras.swarmguard.stacks;
      //console.log("swarmguard stacks: " + auras.swarmguard.stacks);
   }

   // don santos hunting rifle (only ranged attacks)
   if (rangehit && auras.donsantos.enable){
      roll = rng10k(); 
      PPM = 1/60 * RANGED_WEAPONS[gear.range.id].speed * 100;
      let procchance = auras.swarmguard.ppm * PPM;
      auras.donsantos.timer = (roll <= procchance * 100) ? auras.donsantos.duration : auras.donsantos.timer;
      //if(auras.donsantos.timer === auras.donsantos.duration) { console.log("donsantos proc"); }
   }  
   // master tactician (only successful ranged attacks)
   if (talents.master_tac > 0){
      roll = rng10k(); 
      auras.mastertact.timer = (roll <= auras.mastertact.procchance * 100) ? auras.mastertact.duration : auras.mastertact.timer;
      //if(auras.mastertact.timer === auras.mastertact.duration) { console.log("mastertac proc"); }
   }
   // band of eternal champion
   if (auras.eternalchamp.enable && auras.eternalchamp.cooldown === 0){
      roll = rng10k(); 
      auras.eternalchamp.timer = (roll <= auras.eternalchamp.procchance * 100) ? auras.eternalchamp.duration : 0;
      if(auras.eternalchamp.timer > 0) { auras.eternalchamp.cooldown = 60; /*console.log("eternalchamp proc");*/}
   }  
}
// handling for magic dmg procs from trinkets (think rumulo's)
function magicproc() {
}
// handling for physical dmg procs from trinkets (if any?)
function physproc() {
}

// weapon rng based on dmg range
function rng(min, max) {
   return ~~(Math.random() * (max - min + 1) + min);
}
// rng roll 0 to 10000
function rng10k() {
   return ~~(Math.random() * 10000);
}
