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
var combatRAP = 0;
var combatMAP = 0;
var combatdmgmod = 1;
var physdmgmod = 1;
var magdmgmod = 1;
var naturedmgmod = 1;
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

var selectedRace = 3; // 0 for night elf, 1 for dwarf, 2 for draenei, 3 for orc, 4 for troll, 5 for tauren, 6 for blood elf
var offhandDisabled = false;
var totaldmgdone = 0;
var secondaryPotion = 'Super';
var two_min_cds = 120;
var three_min_cds = 180;

var range_wep = {};
var mainhand_wep = {};
var consumestats = {};
var target = {};
var currentgear = {auras:{0:{}}, stats:{},special:{}};

const GearStats = {Str:0, Agi:0, Stam:0, Int:0, Spi:0, RAP:0, MAP:0, Crit:0, Hit:0, MP5:0, Resil:0, ArP:0, Haste:0,Exp:0,dmgbonus:0, rangedmgbonus:0}; 
const BuffStats = {Str:0, Agi:0, Stam:0, Int:0, Spi:0, RAP:0, MAP:0, Crit:0, CritChance:0, Hit:0, HitChance:0, MP5:0, Resil:0, ArP:0, Haste:0};
const EnchantStats = {Str:0, Agi:0, Stam:0, Int:0, Spi:0, RAP:0, MAP:0, Crit:0, RangeCrit:0, Hit:0, RangeHit:0, MP5:0, Resil:0, ArP:0, Haste:0, dmgbonus:0, rangedmgbonus:0}; 

// initial variables for itemid's (like a profile)
var gear = {
   head: { id: 30141, gems: [28362, 32409], enchant: 35452 },
   neck: { id: 30017 },
   shoulder: { id: 30143, gems: [24028, 24028], enchant: 35417 },
   back: { id: 29994, enchant: 34004 },
   chest: { id: 30139, gems: [30549, 28363, 28119], enchant: 27960 },
   wrist: { id: 29966, gems: [24028], enchant: 34002 },
   mainhand: { id: 32944, enchant: 23800 },
   offhand: { id: 29948, enchant: 23800 },
   hand: { id: 30140, enchant: 25080 },
   waist: { id: 30040, gems: [24028, 24028] },
   leg: { id: 29995, enchant: 35490 },
   feet: { id: 30104, gems: [24055, 24028], enchant: 27951 },
   ring1: { id: 29997 },
   ring2: { id: 28791 },
   trinket1: { id: 29383 },
   trinket2: { id: 28830 },
   range: { id: 30105, enchant: 30260 },// 15808 = fine light crossbow for testing
   ammo: { id: 33803 },
   quiver: { id: 18714 },
};

// initialize variables for use - temp
var selectedbuffs = {
   stats: { MAP:0, RAP:0, Str:0, Agi:0 },
   special: { impSancAura: 1, kingsMod: 1, windfury: false }
};
var talents = {
   imp_hawk: 1.15, // 
   end_training: 1.01, // -
   focused_fire: 2,//
   imp_monkey: 0, // -
   thick_hide: 0, // -
   imp_ress_pet: 2, // -
   pathfinding: 0, // -
   bestial_swift: 0, // -
   unleash_fury: 1.2, //
   imp_mend_pet: 2, // -
   ferocity: 10, //
   spirit_bond: 0, // 
   intimidation: 1, //
   bestial_disc: 2, //
   animal_handler: 4, //
   frenzy: 4,//
   ferocious_insp: 1.03,//
   bestial_wrath: 1,//
   catlike_reflex: 0,// -
   serp_swift: 1.2, // -
   beast_within: 1,//
   imp_conc_shot: 0, // -
   lethal_shots: 5, //
   imp_hunter_mark: 0, //
   efficiency: 0.9, // 
   GftT: 50, //
   imp_arc_shot: 0,
   aimed_shot: 1,
   rapid_killing: 2, //
   imp_stings: 1, 
   mortal_shots: 1.3, //
   conc_barrage: 0, // -
   scatter_shot: 0,
   barrage: 1, //
   combat_exp: 0, // 
   ranged_weap_spec: 1, //
   careful_aim: 0, //
   trueshot_aura: 0, //
   imp_barrage: 0, // 
   master_marksman: 1, //
   silencing_shot: 0, 
   monster_slaying: 1, 
   humanoid_slaying: 1, 
   hawk_eye: 0, // -
   savage_strikes: 0, 
   entrapment: 0, // -
   deflection: 0, // -
   imp_wing_clip: 0, // -
   clever_traps: 1, 
   survivalist: 1, // -
   deterrence: 0, // -
   trap_mastery: 0, 
   surefooted: 0, //
   imp_fd: 0, // -
   surv_instincts: 1, //
   killer_instinct: 0, //
   counterattack: 0, //
   resourcefulness: 0, 
   light_reflexes: 1, //
   TotH: 0, //
   wyvern_sting: 0,
   exp_weakness: 0, //
   master_tac: 0, //
   readiness: 0
 }

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
   offhandDisabled = (MELEE_WEAPONS[gear.mainhand.id].hand === 'Two') ? true:false; 
   
}
      
// totals stats for gear and buffs - for each property that matches it equals the value. Else if not found it's 0
function addGear(){
      for(let prop in GearStats) {
        GearStats[prop] = currentgear.stats[prop] || 0; 
      }
}
function addBuffs(){
   let stats = selectedbuffs.stats;
   for(let prop in BuffStats) {
         BuffStats[prop] = (stats[prop] || 0) + (consumestats[prop] || 0);

   }
}

// initialize base stats - called when talents, gear/enchants, static buffs/consumes, race are changed
function calcBaseStats() {
   // TODO add slaying
  dmgmod = (1 + talents.focused_fire / 100) * selectedbuffs.special.impSancAura;
  rangedmgmod = dmgmod * (talents.ranged_weap_spec);

  strmod = selectedbuffs.special.kingsMod;
  agimod = selectedbuffs.special.kingsMod * (1 + talents.combat_exp / 100) * talents.light_reflexes;
  stammod = selectedbuffs.special.kingsMod;
  intmod = selectedbuffs.special.kingsMod * (1 + talents.combat_exp * 3 / 100);
  spimod = selectedbuffs.special.kingsMod;

  mapmod = talents.surv_instincts * 1;
  rapmod = talents.master_marksman * talents.surv_instincts * 1;
  // Main Stats
  Str  = Math.floor((GearStats.Str + BuffStats.Str + EnchantStats.Str + races[selectedRace].str) * strmod);
  Agi  = Math.floor((GearStats.Agi + BuffStats.Agi + EnchantStats.Agi + races[selectedRace].agi) * agimod);
  Stam = Math.floor((GearStats.Stam + BuffStats.Stam + EnchantStats.Stam + races[selectedRace].sta) * stammod);
  Int  = Math.floor((GearStats.Int + BuffStats.Int + EnchantStats.Int + races[selectedRace].int) * intmod);
  Spi  = Math.floor((GearStats.Spi + BuffStats.Spi + EnchantStats.Spi + races[selectedRace].spi) * spimod);

  // Attack Power
  let tsa_ap = (talents.trueshot_aura > 0) ? 125 : 0;
  BaseMAP = (GearStats.MAP + BuffStats.MAP + EnchantStats.MAP + Agi + Str + races[selectedRace].mAP + tsa_ap) * mapmod;
  // flat 155 added for Aspect of the Hawk - need to change later
  BaseRAP = (155 + GearStats.RAP + BuffStats.RAP + EnchantStats.RAP + Agi + races[selectedRace].rAP + Int * talents.careful_aim + tsa_ap) * rapmod;
   
  // Crit rating and crit chance
   let critrating = GearStats.Crit + BuffStats.Crit + EnchantStats.Crit;
  MeleeCritRating = critrating;
  RangeCritRating = critrating + currentgear.stats.RangeCrit;
   let crit = BaseCritChance + Agi / AgiToCrit + BuffStats.CritChance + talents.killer_instinct;
  MeleeCritChance = crit + MeleeCritRating / CritRatingRatio;
  RangeCritChance = crit + RangeCritRating / CritRatingRatio + talents.lethal_shots + races[selectedRace].critchance;
  // TODO add slaying
  MeleeCritDamage = 2 * (currentgear.special.relentless_metagem_crit_dmg_inc * 1);
  RangeCritDamage = 1 + (talents.mortal_shots) * (2 * 1 * currentgear.special.relentless_metagem_crit_dmg_inc - 1);
  // Hit rating and hit chance - split between ranged and melee because of hit scope and crit scope and racial
   let hitrating = GearStats.Hit + BuffStats.Hit + EnchantStats.Hit;
  MeleeHitRating = hitrating;
  RangeHitRating = hitrating + EnchantStats.RangeHit;
   let hit = BaseHitChance + talents.surefooted + BuffStats.HitChance;
  MeleeHitChance = hit + MeleeHitRating / HitRatingRatio; // need dual wield condition
  RangeHitChance = hit + RangeHitRating / HitRatingRatio;
   let penalty = (RangeHitChance >= 1) ? HitPenalty:0; // include penalty here? assumes lvl 73 target
  MeleeMissChance = Math.max(8 - MeleeHitChance - penalty,0);
  RangeMissChance = Math.max(8 - RangeHitChance - penalty,0);

  // Expertise and Dodge - every 3.9 rating is 1 expertise, 1 expertise = 0.25% reduction rounded down to nearest integer
  Expertise = Math.floor(GearStats.Exp / ExpertiseRatio + races[selectedRace].expertise);
  DodgeChance = 6.5 - Expertise * 0.25;

  ArmorPen = GearStats.ArP;
  ManaPer5 = Math.floor(BuffStats.MP5 + GearStats.MP5 + EnchantStats.MP5);
  // formula for spirit regen -> (5 * sqrt(intellect) * spirit * 0.009327) for hunters
  fiveSecRulemp5 = Math.floor(5 * (Math.sqrt(Int) * Spi * BaseRegen));

  // base of 3253 always then add int
  Mana = 3253 + (Int - 10) * 15;
  // initialize current Mana to Max mana
  currentMana = Mana;
  
  HasteRating = BuffStats.Haste + GearStats.Haste + EnchantStats.Haste;
  
  BaseRangeSpeed = RANGED_WEAPONS[gear.range.id].speed / QuiverSpeed / talents.serp_swift;
  BaseMeleeSpeed = MELEE_WEAPONS[gear.mainhand.id].speed;
  
}

function initialize(){
   checkWeaponType();
   currentgear = getStatsFromGear(gear);
   addGear();
   console.log("current gear: ");
   console.log(currentgear);
   addBuffs();
   calcBaseStats();
   petStatsCalc();
   initializeWeps();
   initializeAuras();
   
}

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
   mainhand_wep.basedmgmod = dmgmod;
   
}

function update() {

   updateHaste();
   updateArmorReduction();
   return;
}

// handling for mana changes per gain/loss
function procMana(attack,result){
   let tmp = 0;
   let roll = 0;
   // judgement of wisdom gain if active
   if(debuffs.judgewisdom.timer > 0 && !debuffs.judgewisdom.inactive) {
      if ((result === RESULT.CRIT) || (result === RESULT.HIT) || (result === RESULT.GLANCE)) {
         tmp = 5000; // 50% chance
         roll = rng10k();
         if (tmp < roll) {
            currentMana += 74;
            if(combatlogRun) {
               combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player gains " + 74 + " Mana from Judgement of Wisdom";
               combatlogindex++;
            }
         }
      }
   }
   // Mark of conquest
   if (gear.trinket1.id === 27921 || gear.trinket2.id === 27921) {
      tmp = 500; // 5% chance to proc
      roll = rng10k();
      if (tmp < roll) {
         let gain = rng(128,172);
         currentMana += gain;
         if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player gains " + gain + " Mana from Mark of Conquest";
            combatlogindex++;
         }
      }
   }
   // black bow
   if (gear.range.id === 32336 && attack === 'ranged'){
      if ((result === RESULT.CRIT) || (result === RESULT.HIT)) {
         currentMana += 8;
      }
   } // black grasp of the destroyer 
   else if (gear.hand.id === 22194){
      if ((result === RESULT.CRIT) || (result === RESULT.HIT) || (result === RESULT.GLANCE)) {
         currentMana += 8;
      }
   }
   currentMana = Math.min(currentMana,Mana);

   return;
}
function updateMana() {
   // spirit tick gain (if no casting condition)
   let spiregen = 0;
   if ((steptimeend > 5 * Math.ceil(prevtimeend / 5)) && recentcast === false) {
      //spiregen = fiveSecRulemp5; 
   } 
   else { spiregen = 0; 
   }

   // mp5 tick gain
   if (steptimeend > 5 * Math.ceil(prevtimeend / 5)) {
      currentMana += ManaPer5 + spiregen;
      if(combatlogRun) {
         //combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player regens " + (ManaPer5 + spiregen) + " Mana";
         //combatlogindex++;
      }
   }
   // fel mana tick gain
   if ((auras.potion.timer > 0) && auras.potion.used === 'Secondary') {
      let ticktime = Math.ceil(auras.potion.timer / 3);
      if (ticktime === auras.potion.ticks) {

         currentMana += 400;
         if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player regens " + 400 + " Mana from Fel Mana Potion";
            combatlogindex++;
         }
         auras.potion.ticks -= 1;
      }
   }

   currentMana = Math.min(currentMana, Mana);
   currentMana = Math.floor(currentMana);
   //console.log("mana => "+ currentMana);
   return;
}
// handling for dynamic armor reduction 
function updateArmorReduction() {
   let arp = ArmorPen;
   let debuffarp = 0;
   arp += (auras.beastlord.timer > 0) ? 600 : 0; // beast lord proc
   arp += (auras.swarmguard.timer > 0) ? auras.swarmguard.stacks * 200 : 0; // badge of swarmguard
   arp += (auras.executioner.timer > 0) ? 840 : 0; // executioner
   arp += (auras.madness.timer > 0) ? 300 : 0; // trinket arp - madness
   arp += (auras.unyieldingcourage.timer > 0) ? 600 : 0; // trinket arp - icon of unyielding courage
   // armor debuffs
   debuffarp += (debuffs.faeriefire.timer > 0 && !debuffs.faeriefire.inactive) ? debuffs.faeriefire.arp : 0;
   debuffarp += (debuffs.curseofreck.timer > 0 && !debuffs.curseofreck.inactive) ? debuffs.curseofreck.arp : 0;
   if (debuffs.impexpose.timer > 0 && !debuffs.impexpose.inactive) {
      debuffarp += debuffs.impexpose.arp;
   }
   else if (debuffs.sunder.timer > 0 && !debuffs.sunder.inactive) {
      debuffarp += debuffs.sunder.stacks * debuffs.sunder.arp;
   }
   else {debuffs.sunder.stacks = 0;}

   let playerRemainingArmor = Math.max(0,target.armor - arp - debuffarp); // subtract sum of the above
   let petRemainingArmor = Math.max(0,target.armor - debuffarp);
   // target armor reduction calculation
   PlyrArmorReduc = playerRemainingArmor / (playerRemainingArmor + 400 + 85 * ((5.5 * 70) - 265.5));
   PetArmorReduc = petRemainingArmor / (petRemainingArmor + 400 + 85 * ((5.5 * 70) - 265.5));
   //console.log("reduction " + armorReduction);
   return;
}

// handling for AP changes from auras - remember target specific AP needs to be separate for pet calcs
function updateAP() {
   // AP trinkets
   combatRAP = BaseRAP;
   combatMAP = BaseMAP;
   let bonusAP = 0;
   if(auras.tsunami.timer > 0) { bonusAP +=  340; } // tsunami
   if(auras.hourglass.timer > 0) { bonusAP +=  300; } // hourglass
   if(auras.bloodfury.timer > 0) { bonusAP += 282; } // bloodfury
   if(auras.drums.timer > 0 && (auras.drums.type === 'war')) { combatRAP += 60; }// war drums - check decision making for 2 types of drums
   if(auras.eternalchamp.timer > 0) {bonusAP += 160; } // band of eternal champions
   if(auras.donsantos.timer > 0) {bonusAP += 250; } // don santo's rifle
   if(auras.naarusliver.timer > 0) {bonusAP += 44 * auras.naarusliver.stacks; } // blackened naaru sliver
   if(auras.ashtongue.timer > 0) {bonusAP += 275; } // ashtongue talisman
   // TODO darkmoon card crusade
   // TODO righteous weapon oil
   // TODO aldor neck AP proc

   if(auras.aptrink1.enable && (auras.aptrink1.AP > 0) && (auras.aptrink1.timer > 0)) { bonusAP += auras.aptrink1.AP; }
   if(auras.aptrink2.enable && (auras.aptrink2.AP > 0) && (auras.aptrink2.timer > 0)) { bonusAP += auras.aptrink2.AP; }
   // AP from combat agi
   bonusAP += combatAgi;
   // target AP - expose weakness
   let targetAP = 0;
   if (talents.exp_weakness > 0) {
      targetAP += (debuffs.exposeweakness.timer > 0) ? (Agi + combatAgi) / 4 : 0; // expose from player if talented
   }
   else if (debuffs.exposeweakness.timer > 0 && !debuffs.exposeweakness.inactive) { // expose from settings
      targetAP += debuffs.exposeweakness.agi / 4;
   }
   // mark of the champion AP
   if (target.type === 'Undead' || target.type === 'Demon'){
      targetAP += ((gear.trinket1.id === 23206) || (gear.trinket2.id === 23206)) ? 150 : 0;
   }
   // demonslaying AP
   if (target.type === 'Demon'){
      targetAP += (playerconsumes.battle_elixir === 9224) ? 265 : 0;
   }
   // Hunter's mark - RAP 110 + 11 * stacks, up to 30
   let HM_rap = (debuffs.hm.timer > 0 && !debuffs.hm.inactive) ? debuffs.hm.rap + debuffs.hm.stacks * 11 : 0;
   let HM_map = 0;
   // HM - MAP set from talents if talented else if checked in settings
   if (debuffs.hm.timer > 0 && !debuffs.hm.inactive) {
      if(talents.imp_hunter_mark > 0) {
         HM_map = 110 * talents.imp_hunter_mark;
      }
      else if (debuffs.hm.improved) {
         HM_map = 110 * 1;
      }
   }
   // totals AP - HM and targetAP do not buff pet
   combatRAP += (bonusAP + targetAP + HM_rap) * rapmod;
   combatMAP += (bonusAP + targetAP + HM_map) * mapmod;

   //console.log("rap: " + combatRAP);
   // returns AP used in the pet function call
   return bonusAP * rapmod;
}

// handling for Agi changes
function updateAgi() {
   let graceenabled = (buffslist[4].id > 0) ? true : false;
   let windfuryenabled = (buffslist[11].id > 0) ? true : false;
   combatAgi = 0;


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
   //console.log("agi bonus: " + combatAgi);
   // updating crit and AP from the gained agi - in AP and crit funct
   return;
}
// handling for updating speed
function updateHaste() {
   haste = 1;
   rangespeed = BaseRangeSpeed;
   meleespeed = BaseMeleeSpeed;
   let hasterating = HasteRating;
   
   hasterating += (auras.drums.timer > 0 && (auras.drums.type === 'battle')) ? 80 : 0; // battle drums
   hasterating += ((auras.potion.timer > 0) && (auras.potion.used === 'Haste')) ? 400 : 0; // haste potion
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
   return;
}
// handling for dmg mod changes from auras
function updateDamageMod() {
   combatdmgmod = 1;
   physdmgmod = 1;
   if(auras.beastwithin.timer > 0) { combatdmgmod *= 1.1;} // beast within
   if(pet.ferocious.timer > 0) { combatdmgmod *= talents.ferocious_insp; } // ferocious insp pet buff
   if(debuffs.bloodfrenzy.timer > 0 && !debuffs.bloodfrenzy.inactive) { physdmgmod *= 1.04; } // blood frenzy
   // special mods for non-physical dmg

   return;
}

// handling for crit changes
function updateCritChance() {
   let combatCritChance = RangeCritChance;
   if(auras.mastertact.timer > 0) { combatCritChance += talents.master_tac; } // master tactician
   
   // from agi changes
   combatCritChance += combatAgi / AgiToCrit;
   if(debuffs.judgecrusader.timer > 0 && !debuffs.judgecrusader.inactive) { combatCritChance += debuffs.judgecrusader.crit; } // imp crusader debuff
   // TODO darkmoon card wrath

   return combatCritChance;
}

// hit table calc for mainhand
function rollMainhandWep() {
   let tmp = 0;
   let roll = rng10k();
   let ff_hit = (debuffs.faeriefire.timer > 0 && debuffs.faeriefire.improved) ? 3 : 0;
   let meleemiss = Math.max(MeleeMissChance - ff_hit,0);
   tmp += meleemiss * 100;
   if (roll < tmp) return RESULT.MISS;
   tmp += DodgeChance * 100;
   if (roll < tmp) return RESULT.DODGE;
   tmp += GlanceChance * 100;
   if (roll < tmp) return RESULT.GLANCE;
   tmp += MeleeCritChance * 100;
   if (roll < tmp) return RESULT.CRIT; // 1 roll
   return RESULT.HIT;

}
// hit table calc for ranged
function rollRangeWep() {
   let tmp = 0;
   let roll = rng10k();
   let ff_hit = (debuffs.faeriefire.timer > 0 && debuffs.faeriefire.improved && !debuffs.faeriefire.inactive) ? 3 : 0;
   let rangemiss = Math.max(RangeMissChance - ff_hit,0);
   tmp += rangemiss * 100;
   if (roll < tmp) return RESULT.MISS;
   tmp += (100 - rangemiss) * combatCritChance; // pseudo 2 roll
   if (roll < tmp) return RESULT.CRIT;
   return RESULT.HIT;
   
}
/** hit table for spells 2 roll for all */
function rollSpell(attack,specialcrit) {
   let tmp = 0;
   let roll = rng10k();
   let ff_hit = (debuffs.faeriefire.timer > 0 && debuffs.faeriefire.improved && !debuffs.faeriefire.inactive) ? 3 : 0;
   let meleemiss = Math.max(MeleeMissChance - ff_hit,0);
   let rangemiss = Math.max(RangeMissChance - ff_hit,0);
   let crit = specialcrit + combatCritChance;

   if (attack === 'melee'){
      tmp += meleemiss * 100;
      if (roll < tmp) return RESULT.MISS;
      tmp += DodgeChance * 100;
      if (roll < tmp) return RESULT.DODGE;
      tmp += (100 - meleemiss) * crit; // pseudo 2 roll
      if (roll < tmp) return RESULT.CRIT;
      return RESULT.HIT;
   }
   else if (attack === 'ranged'){
      tmp += rangemiss * 100;
      if (roll < tmp) return RESULT.MISS;
      tmp += (100 - rangemiss) * crit; // pseudo 2 roll
      if (roll < tmp) return RESULT.CRIT;
      return RESULT.HIT;
   }
}
/** attack with mainhand */
function attackMainhand(mainhand_wep) {
   // TODO melee swings
}

/** attack with auto shot */
function attackRange() {

   let attack = 'ranged';
   updateAgi();
   updateAP();
   updateDamageMod();
   combatCritChance = updateCritChance();

   let dmg = 0;
   let result = rollRangeWep(); // check attack table
   
   if (result === RESULT.HIT) {
         dmg = autoShotCalc(range_wep,combatRAP); // calc damage
         debuffs.hm.stacks = (debuffs.hm.stacks < 30) ? Math.min(huntersinraid + debuffs.hm.stacks,30) : debuffs.hm.stacks;
         Result_Auto.Hit++;
   }
   else if (result === RESULT.CRIT) {
         dmg = autoShotCalc(range_wep,combatRAP);
         dmg *= RangeCritDamage;
         proccrit();
         debuffs.hm.stacks = (debuffs.hm.stacks < 30) ? Math.min(huntersinraid + debuffs.hm.stacks,30) : debuffs.hm.stacks;
         Result_Auto.Crit++;
   } 
   else if (result === RESULT.MISS) {
         Result_Auto.Miss++;
   }

   let done = dealdamage(dmg,result,range_wep);
   
   totaldmgdone += done;
   autodmg += done;
   procauto();
   procattack(attack);
   procMana(attack,result); // expensiveish

   if(combatlogRun) {
      combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player Auto Shot " + RESULTARRAY[result] + " for " + done;
      combatlogindex++;
   }
   autocount++;
   return;
}
/** attack with a spell (yellow) roll for dmg, deal dmg, and trigger any procs */
function attackSpell(spell,spellcost) {

   updateAgi();
   updateAP();
   updateDamageMod();
   combatCritChance = updateCritChance();
   let dmg = 0;
   let result = 0;
   let attack = "";
   let specialcrit = 0;
   let beastwithinreduc = (auras.beastwithin.timer > 0) ? 0.8 : 1;
   let cost = Math.floor(spellcost * talents.efficiency * beastwithinreduc);
   currentMana -= cost;

   if (spell === 'steadyshot'){
      attack = 'ranged';
      specialcrit = currentgear.special.rift_stalker_4p_ss_crit;
      result = rollSpell(attack,specialcrit); // check attack table
      if (result === RESULT.HIT) {
         dmg = steadyShotCalc(range_wep,combatRAP); // calc damage
         debuffs.hm.stacks = (debuffs.hm.stacks < 30) ? Math.min(huntersinraid + debuffs.hm.stacks,30) : debuffs.hm.stacks;
         Result_Steady.Hit++;
      }
      else if (result === RESULT.CRIT) {
         dmg = steadyShotCalc(range_wep,combatRAP);
         dmg *= RangeCritDamage;
         proccrit(cost);   
         debuffs.hm.stacks = (debuffs.hm.stacks < 30) ? Math.min(huntersinraid + debuffs.hm.stacks,30) : debuffs.hm.stacks;
         Result_Steady.Crit++;
      }
      else if (result === RESULT.MISS) {
         Result_Steady.Miss++;
      }
      procsteady();
      steadycount++;
   } 
   else if (spell === 'multishot') {
      attack = 'ranged';
      specialcrit = talents.imp_barrage;
      result = rollSpell(attack,specialcrit); // check attack table
      if (result === RESULT.HIT) {
         dmg = multiShotCalc(range_wep,combatRAP); // calc damage
         debuffs.hm.stacks = (debuffs.hm.stacks < 30) ? Math.min(huntersinraid + debuffs.hm.stacks,30) : debuffs.hm.stacks;
         Result_Multi.Hit++;
      }
      else if (result === RESULT.CRIT) {
         dmg = multiShotCalc(range_wep,combatRAP);
         dmg *= RangeCritDamage;
         proccrit(cost);
         debuffs.hm.stacks = (debuffs.hm.stacks < 30) ? Math.min(huntersinraid + debuffs.hm.stacks,30) : debuffs.hm.stacks;
         Result_Multi.Crit++;
      }
      else if (result === RESULT.MISS) {
         Result_Multi.Miss++;
      }

      multicount++;
   }
   else if (spell === 'arcaneshot') {
      attack = 'ranged';
      result = rollSpell(attack,specialcrit); // check attack table
      if (result === RESULT.HIT) {
         dmg = arcaneShotCalc(range_wep,combatRAP); // calc damage
         debuffs.hm.stacks = (debuffs.hm.stacks < 30) ? Math.min(huntersinraid + debuffs.hm.stacks,30) : debuffs.hm.stacks;
         Result_Arcane.Hit++;
      }
      else if (result === RESULT.CRIT) {
         dmg = arcaneShotCalc(range_wep,combatRAP);
         dmg *= RangeCritDamage;
         proccrit(cost);
         debuffs.hm.stacks = (debuffs.hm.stacks < 30) ? Math.min(huntersinraid + debuffs.hm.stacks,30) : debuffs.hm.stacks;
         Result_Arcane.Crit++;
      }
      else if (result === RESULT.MISS) {
         Result_Arcane.Miss++;
      }

      arcanecount++;
   }

   let done = dealdamage(dmg,result,range_wep,spell);
   totaldmgdone += done;
   if (spell === 'steadyshot') {
      steadydmg += done;
   } else if (spell === 'multishot'){
      multidmg += done;
   } else if (spell === 'arcaneshot'){
      arcanedmg += done;
   }
   procattack(attack,result);
   procMana(attack,result); // expensiveish

   if(combatlogRun) {
      combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player " + spell + " " + RESULTARRAY[result] + " for " + done;
      combatlogindex++;
   }
   return;
}
/** cast spell (possibly add individual spells) */
function cast(spell) {
   //recentcast = true;
   let spellcost = 0;

   if(spell === 'autoshot'){
      attackRange();
   }
   else if (spell === 'steadyshot'){
      spellcost = SPELLS.steadyshot.cost;
      attackSpell(spell,spellcost);
      //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
   }
   else if (spell === 'multishot'){
      spellcost = SPELLS.multishot.cost;
      attackSpell(spell,spellcost);
      //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
   }
   else if (spell === 'arcaneshot'){
      spellcost = SPELLS.arcaneshot.cost;
      attackSpell(spell,spellcost);
      //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
   }
return;
}

/** final damage calculation after rolls */
function dealdamage(dmg, result, weapon, spell) {
   if (result != RESULT.MISS && result != RESULT.DODGE && spell !== 'arcaneshot') {
      // randomizes the result to be always ±1 damage as in-game results show even with fine light crossbow
      let mindmg = Math.floor(dmg * (1 - PlyrArmorReduc));
      let maxdmg = Math.ceil(dmg * (1 - PlyrArmorReduc));
      dmg = rng(mindmg,maxdmg);
      
      return dmg;
   } 
   else if (spell === 'arcaneshot') {
      let mindmg = Math.floor(dmg);
      let maxdmg = Math.ceil(dmg);
      dmg = rng(mindmg,maxdmg);

      return dmg;
   }
   else {
      return 0;
   }
}
/** handling for procs by crits */
function proccrit(cost) {
   // kill command
   killcommand.ready = true;
   killcommand.timeremaining = 5;

   let roll = 0;
   // thrill of the hunt
   if (talents.TotH > 0 && cost > 0){
      roll = rng10k();
      let prevmana = currentMana;
      if (roll <= talents.TotH * 3333) { currentMana += Math.floor(cost * 0.4); 
         if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player gains " + (currentMana - prevmana) + " Mana from Thrill of the Hunt.";
            combatlogindex++;
         }
      }
   }
   if (talents.exp_weakness > 0) {
      roll = rng10k();
      debuffs.exposeweakness.timer = (roll <= talents.exp_weakness * 3333) ? debuffs.exposeweakness.duration : debuffs.exposeweakness.timer;
      if(debuffs.exposeweakness.timer > 0 && combatlogRun) {
         combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Target is afflicted by Expose Weakness.";
         combatlogindex++;
      }
   }
   // tsunami talisman
   if (auras.tsunami.enable && auras.tsunami.cooldown === 0){ 
      roll = rng10k(); 
      auras.tsunami.timer = (roll <= auras.tsunami.procchance * 100) ? auras.tsunami.duration : 0;
      if(auras.tsunami.timer > 0) { auras.tsunami.cooldown = 45;
         if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player gains Fury of the Crashing Waves (TT Proc)";
            combatlogindex++;
         }
      }
   } 
   // hourglass of the unraveler
   if (auras.hourglass.enable && auras.hourglass.cooldown === 0){ 
      roll = rng10k();
      auras.hourglass.timer = (roll <= auras.hourglass.procchance * 100) ? auras.hourglass.duration : 0;
      if(auras.hourglass.timer > 0) { auras.hourglass.cooldown = 50;
         if(combatlogRun) {   
            combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player gains Rage of the Unraveler (HG Proc)";
            combatlogindex++;
         }
      }
   } 
   // go for the throat proc
   if(talents.GftT > 0){
      let playercrit = true;
      petUpdateFocus(playercrit);
   }
   return;
}
/** handling for procs by autos (quick shots only) */
function procauto() {
   if (auras.imphawk.enable) {
      let x = rng10k();
      auras.imphawk.timer = (x <= 1000) ? 12 : auras.imphawk.timer; // proc check
      if(auras.imphawk.timer === 12 && combatlogRun) {
         combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player gains Quick Shots (Imp Hawk Proc)";
         combatlogindex++;
      }
   }
}
/** handling for procs by steady only */
function procsteady() {
      // madness of the betrayer
   if (auras.ashtongue.enable){
      let roll = rng10k(); 
      auras.ashtongue.timer = (roll <= auras.ashtongue.procchance * 100) ? auras.ashtongue.duration : auras.ashtongue.timer;
      if(auras.ashtongue.timer === auras.ashtongue.duration && combatlogRun) { 

         combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player gains Deadly Aim (Asht. Proc)";
         combatlogindex++;
      }

   }
}
// handling for procs by normal hits - melee or ranegd
function procattack(attack,result) {
   let roll = 0;
   let procchance = 0;
   PPM = 0;
   let meleehit = (attack === "melee") ? true:false;
   let rangehit = (attack === "ranged") ? true:false;

   // dragonspine trophy
   if (auras.dragonspine.enable && auras.dragonspine.cooldown === 0){
      roll = rng10k(); 
      if(rangehit) {PPM = 1/60 * RANGED_WEAPONS[gear.range.id].speed * 100; }
      if(meleehit) {PPM = BaseMeleeSpeed / 60 * 100; }
      procchance = auras.dragonspine.ppm * PPM;
      auras.dragonspine.timer = (roll <= procchance * 100) ? auras.dragonspine.duration : 0;
      if(auras.dragonspine.timer > 0) { 
         auras.dragonspine.cooldown = 20; 

         if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player gains Haste (DST Proc)";
            combatlogindex++;
         }
      }
   }  
   // madness of the betrayer
   if (auras.madness.enable){
      roll = rng10k(); 
      if(rangehit) {PPM = 1/60 * RANGED_WEAPONS[gear.range.id].speed * 100; }
      if(meleehit) {PPM = BaseMeleeSpeed / 60 * 100; }
      procchance = auras.madness.ppm * PPM;
      auras.madness.timer = (roll <= procchance * 100) ? auras.madness.duration : auras.madness.timer;
      if(auras.madness.timer === auras.madness.duration && combatlogRun) { 
         combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player gains Forceful Strike (Madness Proc)";
         combatlogindex++;
   }
   }
   // executioner enchant
   if (meleehit && auras.executioner.enable){
      roll = rng10k(); 
      PPM = BaseMeleeSpeed / 60 * 100;
      procchance = auras.executioner.ppm * PPM;
      auras.executioner.timer = (roll <= procchance * 100) ? auras.executioner.duration : auras.executioner.timer;
      if(auras.executioner.timer === auras.executioner.duration && combatlogRun) { 
         combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player gains Executioner";
         combatlogindex++;
      }
   } 
   // mongoose enchant
   if (meleehit && auras.mongoose.enable){
      roll = rng10k(); 
      PPM = BaseMeleeSpeed / 60 * 100;
      procchance = auras.mongoose.ppm * PPM;
      auras.mongoose.timer = (roll <= procchance * 100) ? auras.mongoose.duration : auras.mongoose.timer;
      if(auras.mongoose.timer === auras.mongoose.duration && combatlogRun) { 
         combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player gains Mongoose";
         combatlogindex++;
      }
   }
   // blackened naaru sliver - roll to buff
   if (auras.naarusliver.enable && auras.naarusliver.cooldown === 0){
      roll = rng10k(); 
      if(rangehit) {PPM = 1/60 * RANGED_WEAPONS[gear.range.id].speed * 100; }
      if(meleehit) {PPM = BaseMeleeSpeed / 60 * 100; }
      procchance = auras.naarusliver.ppm * PPM;
      auras.naarusliver.timer = (roll <= procchance * 100) ? auras.naarusliver.duration : 0;
      if(auras.naarusliver.timer === auras.naarusliver.duration) { 
         auras.naarusliver.cooldown = 45; 
         auras.naarusliver.stacks = 0;  
         if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player gains Battle Trance (BNS Proc)";
            combatlogindex++;
         }
      }
   }
      // add stacks
   if (auras.naarusliver.enable && auras.naarusliver.timer > 0) {
      auras.naarusliver.stacks = Math.min(auras.naarusliver.stacks + 1, 10);
      //console.log("naaru stacks: " + auras.naarusliver.stacks);
   }
   // swarmguard stack handling
   if (auras.swarmguard.enable && auras.swarmguard.timer > 0) {
      roll = rng10k();
      if(rangehit) { PPM = 1/60 * RANGED_WEAPONS[gear.range.id].speed * 100; }
      if(meleehit) { PPM = BaseMeleeSpeed / 60 * 100; }
      procchance = auras.swarmguard.ppm * PPM;
      auras.swarmguard.stacks = (roll <= procchance * 100) ? Math.min(auras.swarmguard.stacks + 1,6) : auras.swarmguard.stacks;
      //console.log("swarmguard stacks: " + auras.swarmguard.stacks);
   }

   // don santos hunting rifle (only ranged attacks)
   if (rangehit && auras.donsantos.enable){
      roll = rng10k(); 
      PPM = 1/60 * RANGED_WEAPONS[gear.range.id].speed * 100;
      procchance = auras.donsantos.ppm * PPM;
      auras.donsantos.timer = (roll <= procchance * 100) ? auras.donsantos.duration : auras.donsantos.timer;
      if(auras.donsantos.timer === auras.donsantos.duration && combatlogRun) { 
         combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player gains Santos' Blessing (DSFHR Proc)";
         combatlogindex++;
      }
   }  
   // master tactician (only successful ranged attacks)
   if (rangehit && ((result === RESULT.HIT) || (result === RESULT.CRIT)) && talents.master_tac > 0){
      roll = rng10k(); 
      auras.mastertact.timer = (roll <= auras.mastertact.procchance * 100) ? auras.mastertact.duration : auras.mastertact.timer;
      if(auras.mastertact.timer === auras.mastertact.duration && combatlogRun) { 
         combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player gains Master Tactician";
         combatlogindex++;
      }
   }
   // band of eternal champion
   if (auras.eternalchamp.enable && auras.eternalchamp.cooldown === 0){
      roll = rng10k(); 
      if(rangehit) {PPM = 1/60 * RANGED_WEAPONS[gear.range.id].speed * 100; }
      if(meleehit) {PPM = BaseMeleeSpeed / 60 * 100; }
      procchance = auras.eternalchamp.ppm * PPM;
      auras.eternalchamp.timer = (roll <= procchance * 100) ? auras.eternalchamp.duration : 0;
      if(auras.eternalchamp.timer > 0) { 
         auras.eternalchamp.cooldown = 60; 
         if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player gains Band of the Eternal Champion";
            combatlogindex++;
         }
      }
   }  
   return;
}
// handling for magic dmg procs from items (think rumulo's)
function magicproc() {

   // TODO rumulos trinket proc
   // TODO scryer neck proc
}
// handling for physical dmg procs from items (if any?)
function physproc() {
}

function potionHandling() {

   let primary = auras.potion.primary;
   let secondary = auras.potion.secondary;
   // use secondary if no primary or if mana below 4k
   if ((secondary && (currentMana <= 4000)) || !primary && secondary) {
         if (secondaryPotion === 'Fel') {
            auras.potion.timer = 24; // add condition for fel mana
            auras.potion.ticks = 7; // 8 total ticks for fel mana, (0-7)

         }
         if (secondaryPotion === 'Super') {
            let supermana = rng(1800, 3000); // super mana amount
            let prev_mana = currentMana;
            currentMana = Math.min(currentMana + supermana, Mana);
            let gain = currentMana - prev_mana;
            let over = supermana - gain;
            if(combatlogRun) {
               combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player used Super Mana Potion for " + gain + " Mana (O: " + over + ")";
               combatlogindex++;
            }
         }
         auras.potion.used = 'Secondary';
   }
   else if (primary) {
      auras.potion.timer = 15;
      auras.potion.used = 'Haste';
      
   }
   auras.potion.cooldown = 120;
}

/** rng function for randomizing an integer from 2 values such as the damage range on weapons.
 * @param min min value to be used
 * @param max max value to be used
*/
function rng(min, max) {
   return ~~(Math.random() * (max - min + 1) + min); // "~~" operator floors to nearest integer
}
/** rng function for randomizing between 1-9999, avoiding decimals and rounded to nearest integer. */
function rng10k() {
   return ~~(Math.random() * 10000);
}
