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
const BaseMana = 3383;

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
var RaptorMissChance = 0;
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
var useAverages = false;

var range_wep = {};
var mainhand_wep = {};
var consumestats = {};
var target = {};
var currentgear = {auras:{0:{}}, stats:{},special:{}};
var custom = {
   str: 0,
   agi: 0,
   int: 0,
   RAP: 0,
   rangehit: 0,
   rangecrit: 0,
   haste: 0,
   arp: 0,
   MAP: 0,
   meleehit: 0,
   meleecrit: 0,
   expertise: 0,
   mp5: 0
};

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
   mainhand: { id: 32944, enchant: 42620 },
   offhand: { id: 29948, enchant: 42620 },
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

// initialize variables for use
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
   serp_swift: 1.2, //
   beast_within: 1,//
   imp_conc_shot: 0, // -
   lethal_shots: 5, //
   imp_hunter_mark: 0, //
   efficiency: 0.9, // 
   GftT: 50, //
   imp_arc_shot: 0, //
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
   monster_slaying: 1, //
   humanoid_slaying: 1, //
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
   resourcefulness: 0, //
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
   if ((equippedRangeType === 'Gun' && selectedRace === 1) || (equippedRangeType === 'Bow' && selectedRace === 4)) {
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

  let slaying = 1;
  let racialmod = 1;
  if (target.type === 'Beast'){
      slaying = talents.monster_slaying;
      racialmod = (selectedRace === 4) ? 1.05 : 1;
  } else if(target.type === 'Giant' || target.type === 'Dragonkin'){
      slaying = talents.monster_slaying;
  } else if(target.type === 'Humanoid') {
      slaying = talents.humanoid_slaying;
  }

  dmgmod = (1 + talents.focused_fire / 100) * selectedbuffs.special.impSancAura * slaying * racialmod;
  rangedmgmod = dmgmod * (talents.ranged_weap_spec);

  strmod = selectedbuffs.special.kingsMod;
  agimod = selectedbuffs.special.kingsMod * (1 + talents.combat_exp / 100) * talents.light_reflexes;
  stammod = selectedbuffs.special.kingsMod;
  intmod = selectedbuffs.special.kingsMod * (1 + talents.combat_exp * 3 / 100);
  spimod = selectedbuffs.special.kingsMod;

  mapmod = talents.surv_instincts * 1;
  rapmod = talents.master_marksman * talents.surv_instincts * 1;
  // Main Stats
  Str  = Math.floor((GearStats.Str + BuffStats.Str + EnchantStats.Str + races[selectedRace].str + custom.str) * strmod);
  Agi  = Math.floor((GearStats.Agi + BuffStats.Agi + EnchantStats.Agi + races[selectedRace].agi + custom.agi) * agimod);
  Stam = Math.floor((GearStats.Stam + BuffStats.Stam + EnchantStats.Stam + races[selectedRace].sta) * stammod);
  Int  = Math.floor((GearStats.Int + BuffStats.Int + EnchantStats.Int + races[selectedRace].int + custom.int) * intmod);
  Spi  = Math.floor((GearStats.Spi + BuffStats.Spi + EnchantStats.Spi + races[selectedRace].spi) * spimod);

  // Attack Power
  let tsa_ap = (talents.trueshot_aura > 0) ? 125 : 0;
  BaseMAP = (GearStats.MAP + BuffStats.MAP + EnchantStats.MAP + Agi + Str + races[selectedRace].mAP + tsa_ap + custom.MAP) * mapmod;
  // flat 155 added for Aspect of the Hawk - need to change later
  BaseRAP = (155 + GearStats.RAP + BuffStats.RAP + EnchantStats.RAP + Agi + races[selectedRace].rAP + Int * talents.careful_aim + tsa_ap + custom.RAP) * rapmod;
  
  // Crit rating and crit chance
   let critrating = GearStats.Crit + BuffStats.Crit + EnchantStats.Crit;
  MeleeCritRating = critrating + (currentgear.stats.MeleeCrit || 0) + custom.meleecrit;
  RangeCritRating = critrating + (currentgear.stats.RangeCrit || 0) + custom.rangecrit;
   let crit = BaseCritChance + Agi / AgiToCrit + BuffStats.CritChance + talents.killer_instinct;
  MeleeCritChance = crit + MeleeCritRating / CritRatingRatio;
  RangeCritChance = crit + RangeCritRating / CritRatingRatio + talents.lethal_shots + races[selectedRace].critchance;
  
  MeleeCritDamage = 2 * (currentgear.special.relentless_metagem_crit_dmg_inc * 1);
  RangeCritDamage = 1 + (talents.mortal_shots) * (2 * slaying * currentgear.special.relentless_metagem_crit_dmg_inc - 1);
  // Hit rating and hit chance - split between ranged and melee because of hit scope and crit scope and racial
   let hitrating = GearStats.Hit + BuffStats.Hit + EnchantStats.Hit;
  MeleeHitRating = hitrating + custom.meleehit;

  RangeHitRating = hitrating + (currentgear.stats.RangeHit || 0) + custom.rangehit;
   let racialhit = (selectedRace == 2) ? 1 : 0;
   let hit = BaseHitChance + talents.surefooted + BuffStats.HitChance + racialhit;
  MeleeHitChance = hit + MeleeHitRating / HitRatingRatio; // need dual wield condition
  RangeHitChance = hit + RangeHitRating / HitRatingRatio;

   let penalty = (RangeHitChance >= 1) ? HitPenalty:0; // include penalty here? assumes lvl 73 target
   let dw_penalty = 0;
   if (!offhandDisabled && (gear.offhand !== undefined)) {
      dw_penalty = (gear.offhand.id > 0) ? -19:0; // offhand penalty for dual wielding 
   } else { dw_penalty = 0; }
  MeleeMissChance = Math.max(8 - MeleeHitChance - penalty - dw_penalty,0);
  RaptorMissChance = Math.max(8 - MeleeHitChance - penalty,0);
  RangeMissChance = Math.max(8 - RangeHitChance - penalty,0);

  // Expertise and Dodge - every 3.9 rating is 1 expertise, 1 expertise = 0.25% reduction rounded down to nearest integer
  Expertise = Math.floor(GearStats.Exp / ExpertiseRatio + races[selectedRace].expertise + custom.expertise);
  DodgeChance = 6.5 - Expertise * 0.25;

  ArmorPen = GearStats.ArP + custom.arp;
  ManaPer5 = Math.floor(BuffStats.MP5 + GearStats.MP5 + EnchantStats.MP5 + custom.mp5);
  // formula for spirit regen -> (5 * sqrt(intellect) * spirit * 0.009327) for hunters
  fiveSecRulemp5 = Math.floor(5 * (Math.sqrt(Int) * Spi * BaseRegen));

  // base of 3383 always then add int
  Mana = BaseMana + (Int - 20) * 15 + 20;
  // initialize current Mana to Max mana
  currentMana = Mana;
  
  HasteRating = BuffStats.Haste + GearStats.Haste + EnchantStats.Haste + custom.haste;
  
  BaseRangeSpeed = RANGED_WEAPONS[gear.range.id].speed / QuiverSpeed / talents.serp_swift;
  BaseMeleeSpeed = MELEE_WEAPONS[gear.mainhand.id].speed;
  
}

function initialize(){
   checkWeaponType();
   currentgear = getStatsFromGear(gear);
   addGear();
   //console.log("current gear: ");
   //console.log(currentgear);
   addBuffs();
   calcBaseStats();
   petStatsCalc();
   initializeWeps();
   initializeAuras();
   getHitData(); // used for gear display, simple formula to set hit cap goal
}

function initializeWeps() {
   // initialize range_wep obj
   range_wep.speed = RANGED_WEAPONS[gear.range.id].speed;
   range_wep.mindmg = RANGED_WEAPONS[gear.range.id].mindmg;
   range_wep.maxdmg = RANGED_WEAPONS[gear.range.id].maxdmg;
   range_wep.ammodps = (gear.range.id === 34334) ? 0: AMMOS[gear.ammo.id].ammo_dps;
   range_wep.flatdmg = currentgear.special.dmgbonus || 0 + currentgear.special.rangedmgbonus || 0;
   range_wep.basedmgmod = rangedmgmod;
   // initialize mainhand_wep obj

   mainhand_wep.speed = MELEE_WEAPONS[gear.mainhand.id].speed;
   mainhand_wep.mindmg = MELEE_WEAPONS[gear.mainhand.id].mindmg;
   mainhand_wep.maxdmg = MELEE_WEAPONS[gear.mainhand.id].maxdmg;
   mainhand_wep.flatdmg = currentgear.special.dmgbonus || 0;
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
         if (!useAverages) {
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
         else { // adds 37 every time instead of 74 and rolls it when average is selected
            currentMana += 37;
            if(combatlogRun) {
               combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player gains " + 37 + " Mana from Judgement of Wisdom";
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
   if(auras.dmccrusade.timer > 0) {bonusAP += 6 * auras.dmccrusade.stacks; } // darkmoon card crusade
   if(auras.righteous.timer > 0) {bonusAP += 300; } // righteous weapon coating
   if(auras.shattered.timer > 0) {bonusAP += 200; } // aldor neck AP proc

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

   let unleashMAP = (partybuffs.unleashedrage.timer > 0 && !partybuffs.unleashedrage.inactive) ? 1.1 : 1;
   // totals AP - HM and targetAP do not buff pet
   combatRAP += (bonusAP + targetAP + HM_rap) * rapmod;
   combatMAP += (bonusAP + targetAP + HM_map) * mapmod * unleashMAP;

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
      let bonusagi = (buffslist[4].talented) ? 1.15 : 1;
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
function updateDmgMod() {
   combatdmgmod = 1;
   physdmgmod = 1;
   magdmgmod = 1;

   if(auras.beastwithin.timer > 0) { combatdmgmod *= 1.1;} // beast within
   if(pet.ferocious.timer > 0) { combatdmgmod *= talents.ferocious_insp; } // ferocious insp pet buff
   if((partybuffs.ferociousinsp.timer > 0) && !partybuffs.ferociousinsp.inactive) { combatdmgmod *= Math.pow(1.03, partybuffs.ferociousinsp.stacks); } // ferocious insp from others
   if((debuffs.bloodfrenzy.timer > 0) && !debuffs.bloodfrenzy.inactive) { physdmgmod *= 1.04; } // blood frenzy
   // special mods for non-physical dmg
   if((debuffs.curseofele.timer > 0) && !debuffs.curseofele.inactive) { magdmgmod *= (debuffs.curseofele.improved) ? 1.13 : 1.1; } // curse of ele
   if((debuffs.misery.timer > 0) && !debuffs.misery.inactive) { magdmgmod *= 1.05; } // misery
   return;
}

// handling for crit changes
function updateCritChance(attack) {
   let critsuppression = CritPenalty + CritAuraPenalty;
   let attackcrit = (attack === 'melee') ? MeleeCritChance : RangeCritChance; 
   let combatCrit = attackcrit + critsuppression;
   if(auras.mastertact.timer > 0) { combatCrit += talents.master_tac; } // master tactician
   
   // from agi changes
   combatCrit += combatAgi / AgiToCrit;
   if(debuffs.judgecrusader.timer > 0 && !debuffs.judgecrusader.inactive) { combatCrit += debuffs.judgecrusader.crit; } // imp crusader debuff
   // TODO darkmoon card wrath

   return combatCrit;
}

// hit table calc for mainhand
function rollMainhandWep(combatCrit) {
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
   tmp += combatCrit * 100;
   if (roll < tmp) return RESULT.CRIT; // 1 roll
   return RESULT.HIT;

}
// hit table calc for ranged
function rollRangeWep(combatCrit) {
   let tmp = 0;
   let roll = rng10k();
   let ff_hit = (debuffs.faeriefire.timer > 0 && debuffs.faeriefire.improved && !debuffs.faeriefire.inactive) ? 3 : 0;
   let rangemiss = Math.max(RangeMissChance - ff_hit,0);
   tmp += rangemiss * 100;
   if (roll < tmp) return RESULT.MISS;
   tmp += (100 - rangemiss) * combatCrit; // pseudo 2 roll
   if (roll < tmp) return RESULT.CRIT;
   return RESULT.HIT;
   
}
/** hit table for spells 2 roll for all */
function rollSpell(attack,combatCrit,specialcrit) {
   let tmp = 0;
   let roll = rng10k();
   let ff_hit = (debuffs.faeriefire.timer > 0 && debuffs.faeriefire.improved && !debuffs.faeriefire.inactive) ? 3 : 0;
   let meleemiss = Math.max(RaptorMissChance - ff_hit,0);
   let rangemiss = Math.max(RangeMissChance - ff_hit,0);
   let crit = specialcrit + combatCrit;

   if (attack === 'melee'){
      tmp += meleemiss * 100;
      if (roll < tmp) return RESULT.MISS;
      tmp += DodgeChance * 100;
      if (roll < tmp) return RESULT.DODGE;
      tmp += (100 - meleemiss - DodgeChance) * crit; // pseudo 2 roll
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
function rollMagicSpell(){
   let tmp = 0;
   let roll = rng10k();
   let miss = 17;
   let crit = 3.6 + (Int/80);
   tmp += miss * 100;
   if (roll < tmp) return RESULT.MISS;
   tmp += 14.5 * 100; // partial resist rate approx. 14.5% based on log data at 0 resistance
   if (roll < tmp) return RESULT.PARTIAL;
   tmp += (100 - miss - 14.5) * crit; // pseudo 2 roll
   if (roll < tmp) return RESULT.CRIT;
   return RESULT.HIT;
}
/** attack with mainhand */
function attackMainhand(meleeAP, extraAttack) {

   let attack = 'melee';
   let dmg = 0;
   let combatCrit = updateCritChance(attack);
   let result = rollMainhandWep(combatCrit); // check attack table
   spellResultSum(result, 'melee');
   if (result === RESULT.HIT) {
      dmg = meleeStrikeCalc(mainhand_wep, meleeAP); // calc damage
   }
   else if (result === RESULT.CRIT) {
      dmg = meleeStrikeCalc(mainhand_wep, meleeAP); // calc damage
      dmg *= MeleeCritDamage;
      proccrit(0, attack);
   }
   else if (result === RESULT.GLANCE) {
      dmg = meleeStrikeCalc(mainhand_wep, meleeAP); // calc damage
      dmg *= GlanceDmgReduction;
   }

   let done = dealdamage(dmg,result);
   
   totaldmgdone += done;
   meleedmg += done;
   procattack(attack,result);
   procMana(attack,result); // expensiveish
   magicproc(attack);

   if(combatlogRun) {
      combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player Melee " + RESULTARRAY[result] + " for " + done;
      combatlogindex++;
   }
   meleecount++;
   if (!extraAttack) {
      procExtraAttacks(attack);
   }
   return;
}

/** attack with auto shot */
function attackRange() {

   let attack = 'ranged';
   let combatCrit = updateCritChance(attack);

   let dmg = 0;
   let result = rollRangeWep(combatCrit); // check attack table
   spellResultSum(result, 'autoshot');
   if (result === RESULT.HIT) {
         dmg = autoShotCalc(range_wep,combatRAP); // calc damage
         debuffs.hm.stacks = (debuffs.hm.stacks < 30) ? Math.min(huntersinraid + debuffs.hm.stacks,30) : debuffs.hm.stacks;
   }
   else if (result === RESULT.CRIT) {
         dmg = autoShotCalc(range_wep,combatRAP);
         dmg *= RangeCritDamage;
         proccrit(0, attack);
         debuffs.hm.stacks = (debuffs.hm.stacks < 30) ? Math.min(huntersinraid + debuffs.hm.stacks,30) : debuffs.hm.stacks;
   }

   let done = dealdamage(dmg,result);
   
   totaldmgdone += done;
   autodmg += done;
   procauto();
   procattack(attack,result);
   procMana(attack,result); // expensiveish
   magicproc(attack);

   if(combatlogRun) {
      combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player Auto Shot " + RESULTARRAY[result] + " for " + done + ". RAP => " + combatRAP;
      combatlogindex++;
   }
   autocount++;
   return;
}
/** attack with a spell (yellow) roll for dmg, deal dmg, and trigger any procs */
function attackSpell(spell,spellcost) {

   let combatCrit = 0;
   let dmg = 0;
   let result = 0;
   let attack = "";
   let specialcrit = 0;
   let beastwithinreduc = (auras.beastwithin.timer > 0) ? 0.8 : 1;
   let cost = 0;

   if (spell === 'steadyshot'){
      attack = 'ranged';
      cost = Math.floor(spellcost * talents.efficiency * beastwithinreduc);
      currentMana -= cost;

      combatCrit = updateCritChance(attack);
      specialcrit = currentgear.special.rift_stalker_4p_ss_crit;
      result = rollSpell(attack, combatCrit, specialcrit); // check attack table
      spellResultSum(result, spell);
      if (result === RESULT.HIT) {
         dmg = steadyShotCalc(range_wep,combatRAP); // calc damage
         debuffs.hm.stacks = (debuffs.hm.stacks < 30) ? Math.min(huntersinraid + debuffs.hm.stacks,30) : debuffs.hm.stacks;
      }
      else if (result === RESULT.CRIT) {
         dmg = steadyShotCalc(range_wep,combatRAP);
         dmg *= RangeCritDamage;
         proccrit(cost, attack);   
         debuffs.hm.stacks = (debuffs.hm.stacks < 30) ? Math.min(huntersinraid + debuffs.hm.stacks,30) : debuffs.hm.stacks;
      }
      procsteady();
      steadycount++;
   } 
   else if (spell === 'multishot') {
      attack = 'ranged';
      cost = Math.floor(spellcost * talents.efficiency * beastwithinreduc);
      currentMana -= cost;

      combatCrit = updateCritChance(attack);
      specialcrit = talents.imp_barrage;
      result = rollSpell(attack, combatCrit, specialcrit); // check attack table
      spellResultSum(result, spell);
      if (result === RESULT.HIT) {
         dmg = multiShotCalc(range_wep,combatRAP); // calc damage
         debuffs.hm.stacks = (debuffs.hm.stacks < 30) ? Math.min(huntersinraid + debuffs.hm.stacks,30) : debuffs.hm.stacks;
      }
      else if (result === RESULT.CRIT) {
         dmg = multiShotCalc(range_wep,combatRAP);
         dmg *= RangeCritDamage;
         proccrit(cost, attack);
         debuffs.hm.stacks = (debuffs.hm.stacks < 30) ? Math.min(huntersinraid + debuffs.hm.stacks,30) : debuffs.hm.stacks;
      }

      multicount++;
   }
   else if (spell === 'arcaneshot') {
      attack = 'ranged';
      cost = Math.floor(spellcost * talents.efficiency * beastwithinreduc);
      currentMana -= cost;

      combatCrit = updateCritChance(attack);
      result = rollSpell(attack, combatCrit, specialcrit); // check attack table
      spellResultSum(result, spell);
      if (result === RESULT.HIT) {
         dmg = arcaneShotCalc(range_wep,combatRAP); // calc damage
         debuffs.hm.stacks = (debuffs.hm.stacks < 30) ? Math.min(huntersinraid + debuffs.hm.stacks,30) : debuffs.hm.stacks;
      }
      else if (result === RESULT.CRIT) {
         dmg = arcaneShotCalc(range_wep,combatRAP);
         dmg *= RangeCritDamage;
         proccrit(cost, attack);
         debuffs.hm.stacks = (debuffs.hm.stacks < 30) ? Math.min(huntersinraid + debuffs.hm.stacks,30) : debuffs.hm.stacks;
      }

      arcanecount++;
   }
   else if (spell === 'raptorstrike') {
      attack = 'melee';
      cost = Math.floor(spellcost * (1 - talents.resourcefulness * 0.2) * beastwithinreduc);
      currentMana -= cost;

      combatCrit = updateCritChance(attack);
	   specialcrit = talents.savage_strikes;
      result = rollSpell(attack, combatCrit, specialcrit); // check attack table
      spellResultSum(result, spell);
      if (result === RESULT.HIT) {
         dmg = raptorStrikeCalc(mainhand_wep,combatMAP); // calc damage
      }
      else if (result === RESULT.CRIT) {
         dmg = raptorStrikeCalc(mainhand_wep,combatMAP); // calc damage
         dmg *= MeleeCritDamage;
         proccrit(cost, attack);
      }
      procExtraAttacks(attack);
      raptorcount++;
   }

   let done = dealdamage(dmg,result,spell);
   totaldmgdone += done;
   if (spell === 'steadyshot') {
      steadydmg += done;
   } else if (spell === 'multishot'){
      multidmg += done;
   } else if (spell === 'arcaneshot'){
      arcanedmg += done;
   } else if (spell === 'raptorstrike'){
      raptordmg += done;
   } else if (spell === 'melee'){
      meleedmg += done;
   }
   procattack(attack,result);
   procMana(attack,result); // expensiveish
   magicproc(attack);

   if(combatlogRun) {
      combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player " + SPELL_MAPPER[spell] + " " + RESULTARRAY[result] + " for " + done + ". RAP => " + combatRAP;
      combatlogindex++;
   }
   return;
}
/** cast spell (possibly add individual spells) */
function cast(spell) {

   let spellcost = 0;
   updateAgi();
   updateAP();
   updateDmgMod();

   if(spell === 'autoshot'){
      attackRange();
   }
   else if (spell === 'steadyshot'){
      spellcost = SPELLS.steadyshot.cost;
      attackSpell(spell,spellcost);
      recentcast = true;
      //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
   }
   else if (spell === 'multishot'){
      spellcost = SPELLS.multishot.cost;
      attackSpell(spell,spellcost);
      recentcast = true;
      //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
   }
   else if (spell === 'arcaneshot'){
      spellcost = SPELLS.arcaneshot.cost;
      attackSpell(spell,spellcost);
      recentcast = true;
      //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
   }
   else if (spell === 'raptorstrike'){
      spellcost = SPELLS.raptorstrike.cost;
      attackSpell(spell,spellcost);
   }
   else if (spell === 'melee'){
      attackMainhand(combatMAP);
   }
return;
}

/** final damage calculation after rolls */
function dealdamage(dmg, result, spell) {
   if (result != RESULT.MISS && result != RESULT.DODGE && spell !== 'arcaneshot' && spell !== 'magic') {
      // randomizes the result to be always ±1 damage as in-game results show even with fine light crossbow
      let mindmg = Math.floor(dmg * (1 - PlyrArmorReduc));
      let maxdmg = Math.ceil(dmg * (1 - PlyrArmorReduc));
      dmg = rng(mindmg,maxdmg);
      
      return dmg;
   } 
   else if (spell === 'arcaneshot' || spell === 'magic') {
      let mindmg = Math.floor(dmg);
      let maxdmg = Math.ceil(dmg);
      dmg = rng(mindmg,maxdmg);

      return dmg;
   }
   else {
      return 0;
   }
}
/** handling for procs by extra attacks */
function procExtraAttacks(attack){
   let windfuryenabled = (buffslist[11].id > 0) ? true : false;
   if (attack === 'melee' && windfuryenabled) {
      let roll = rng10k();
      let tmp = 2000; // 20% chance to proc
      if (roll < tmp) {
         let ap = (buffslist[11].talented) ? 1.3 * 445 + combatMAP : 445 + combatMAP;
         let extraAttack = true;
         if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player gains extra attacks.";
            combatlogindex++;
         }
         attackMainhand(ap, extraAttack);
      }
   }
   return;
}
/** handling for procs by crits */
function proccrit(cost, attack) {
   // kill command
   killcommand.ready = true;
   killcommand.timeremaining = 5;

   let roll = 0;
   // thrill of the hunt
   if (talents.TotH > 0 && cost > 0 && attack === 'ranged'){
      roll = rng10k();
      let prevmana = currentMana;
      if (roll <= talents.TotH * 3333) { currentMana += Math.floor(cost * 0.4); 
         if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player gains " + (currentMana - prevmana) + " Mana from Thrill of the Hunt.";
            combatlogindex++;
         }
      }
   }
   if (talents.exp_weakness > 0 && attack === 'ranged') {
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
   if(talents.GftT > 0 && attack === 'ranged'){
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
      procchance = auras.naarusliver.procchance;
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
   // darkmoon card crusade
   let success = (result === RESULT.HIT) || (result === RESULT.CRIT) || (result === RESULT.GLANCE);
   if (auras.dmccrusade.enable && success){
      auras.dmccrusade.stacks = Math.min(auras.dmccrusade.stacks + 1, 20);
      auras.dmccrusade.timer = 10;
      if(auras.dmccrusade.stacks < 20) {
         if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player gains Aura of the Crusade (DMC) (" + (auras.dmccrusade.stacks + 1) + ")";
            combatlogindex++;
         }
      }
   }  
   // shattered sun pendant - aldor proc
   if (auras.shattered.enable && (auras.shattered.type === 'aldor') && (auras.shattered.cooldown === 0)){
      roll = rng10k(); 
      procchance = auras.shattered.procchance;
      auras.shattered.timer = (roll <= procchance * 100) ? auras.shattered.duration : 0;
      if(auras.shattered.timer === auras.shattered.duration) { 
         auras.shattered.cooldown = 45; 
         auras.shattered.stacks = 0;  
         if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player gains Light's Strength";
            combatlogindex++;
         }
      }
   }
   // righteous weapon coating
   if (auras.righteous.enable && auras.righteous.cooldown === 0){
      roll = rng10k(); 
      if(rangehit) {PPM = 1/60 * RANGED_WEAPONS[gear.range.id].speed * 100; }
      if(meleehit) {PPM = BaseMeleeSpeed / 60 * 100; }
      procchance = auras.righteous.ppm * PPM;
      auras.righteous.timer = (roll <= procchance * 100) ? auras.righteous.duration : 0;
      if(auras.righteous.timer > 0) { 
         auras.righteous.cooldown = 45; 
         if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player gains Righteousness";
            combatlogindex++;
         }
      }
   } 
   return;
}
var romulos = 0;
// handling for magic dmg procs from items (think rumulo's)
function magicproc(attack) {

   let dmg = 0;
   let result = 0;
   let procchance = 0;
   let roll = 0;
   PPM = 0;
   let meleehit = (attack === "melee") ? true:false;
   let rangehit = (attack === "ranged") ? true:false;
   // romulo's proc
   if ((gear.trinket1.id === 28579) || (gear.trinket2.id === 28579)){
      roll = rng10k(); 
      if(rangehit) {PPM = 1/60 * RANGED_WEAPONS[gear.range.id].speed * 100; }
      if(meleehit) {PPM = BaseMeleeSpeed / 60 * 100; }
      procchance = 1 * PPM;
      if (roll <= procchance * 100) {
         
         result = rollMagicSpell();
         if (result === RESULT.HIT) {
            dmg = rng(222,322); 
         }
         else if (result === RESULT.CRIT) {
            dmg = rng(222,322);
            dmg *= 1.5; // spell crits are 150%
         }
         else if (result === RESULT.PARTIAL) {
            dmg = rng(222,322);
            dmg *= 0.65; // average reduction of 35% on partial resists
         }
         let done = dealdamage(dmg,result,'magic');
         romulos += done;
         totaldmgdone += done;
         if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player Romulo's Poison " + RESULTARRAY[result] + " for " + done;
            combatlogindex++;
         }
      }
   }
   // scryer neck proc
   if (auras.shattered.enable && (auras.shattered.type === 'scryer') && (auras.shattered.cooldown === 0)){
      roll = rng10k(); 
      procchance = auras.shattered.procchance;
      if (roll <= procchance * 100) {
         auras.shattered.cooldown = 45;
         
         result = rollSpell('melee');
         if (result === RESULT.HIT) {
            dmg = rng(333,367) * physdmgmod;
         }
         else if (result === RESULT.CRIT) {
            dmg = rng(333,367) * physdmgmod;
            dmg *= MeleeCritDamage;
         }
         let done = dealdamage(dmg,result,'magic');
         totaldmgdone += done;

         if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Player Arcane Strike " + RESULTARRAY[result] + " for " + done;
            combatlogindex++;
         }
      }
   }
}
// handling for physical dmg procs from items (if any?)
function physproc() {
}
function runeHandling() {
   let runemana = 0;
   let prev_mana = 0;
   let gain = 0;
   let over = 0;
   if (Mana - currentMana >= 1500) {

      runemana = rng(900,1500);
      prev_mana = currentMana;
      currentMana = Math.min(currentMana + runemana, Mana);
      gain = currentMana - prev_mana;
      over = runemana - gain;
      auras.rune.cooldown = 120;
      if(combatlogRun) {
         combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player used rune for " + gain + " Mana (O: " + over + ")";
         combatlogindex++;
      }

   } else {
      return false;
   }
   return true;
}
function potionHandling() {

   let primary = auras.potion.primary;
   let secondary = auras.potion.secondary;
   // use secondary if no primary or if mana below 4k
   if ((secondary && (Mana - currentMana >= 3000))) {
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
   else {
      return false;
   }
   auras.potion.cooldown = 120;
   return true;
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
