let _combatCritChance = 0;

//calculates the estimated haste at +t seconds into the future
function getHasteRanged(t) {
   haste = 1;
   rangespeed = BaseRangeSpeed;
   let hasterating = HasteRating;
   
   hasterating += (auras.drums.timer > t && (auras.drums.type === 'battle')) ? 80 : 0; // battle drums
   hasterating += ((auras.potion.timer > t) && (auras.potion.used === 'Haste')) ? 400 : 0; // haste potion
   hasterating += (auras.dragonspine.timer > t) ? 325 : 0; // trinket dst haste
   hasterating += (auras.abacus.timer > t) ? 264 : 0; // trinket abacus haste

   let berserkspeed = 1 + (30 - (BerserkStartHP - 40) / 3) / 100;    // troll berserking (10-30% in tbc)
   haste = (auras.berserk.timer > t) ? haste * berserkspeed : haste;  // troll berserking (10-30% in tbc)
   haste = (auras.lust.timer > t) ? haste * 1.3 : haste; // lust

   let hasteRatingSpeed = (hasterating / HasteRatingRatio / 100) + 1;
   haste *= hasteRatingSpeed;

   // ranged only
   rangespeed = (auras.rapid.timer > t) ? rangespeed / 1.4 : rangespeed; // rapid fire
   rangespeed = (auras.imphawk.timer > t) ? rangespeed / talents.imp_hawk : rangespeed; // quick shots

   rangespeed = rangespeed / haste;

   return rangespeed;
}

function getHasteMelee(t) {
   haste = 1;
   meleespeed = BaseMeleeSpeed;
   let hasterating = HasteRating;
   
   hasterating += (auras.drums.timer > t && (auras.drums.type === 'battle')) ? 80 : 0; // battle drums
   hasterating += ((auras.potion.timer > t) && (auras.potion.used === 'Haste')) ? 400 : 0; // haste potion
   hasterating += (auras.dragonspine.timer > t) ? 325 : 0; // trinket dst haste
   hasterating += (auras.abacus.timer > t) ? 264 : 0; // trinket abacus haste

   let berserkspeed = 1 + (30 - (BerserkStartHP - 40) / 3) / 100;    // troll berserking (10-30% in tbc)
   haste = (auras.berserk.timer > t) ? haste * berserkspeed : haste;  // troll berserking (10-30% in tbc)
   haste = (auras.lust.timer > t) ? haste * 1.3 : haste; // lust

   let hasteRatingSpeed = (hasterating / HasteRatingRatio / 100) + 1;
   haste *= hasteRatingSpeed;

   // melee only
   meleespeed = (auras.mongoose.timer > t) ? meleespeed / 1.02 : meleespeed; // mongoose

   meleespeed = meleespeed / haste;

   return meleespeed;
}

// handling for dmg mod changes from auras
function exp_updateDamageMod() {
   combatdmgmod = 1;
   physdmgmod = 1;
   if(auras.beastwithin.timer > 0) { combatdmgmod *= 1.1;} // beast within
   if(pet.ferocious.timer > 0) { combatdmgmod *= talents.ferocious_insp; } // ferocious insp pet buff
   if(debuffs.bloodfrenzy.timer > 0 && !debuffs.bloodfrenzy.inactive) { physdmgmod *= 1.04; } // blood frenzy
   // special mods for non-physical dmg

   return;
}


function exp_dmgMod_Melee() {
   let remainder = 100;
   let ff_hit = (debuffs.faeriefire.timer > 0 && debuffs.faeriefire.improved) ? 3 : 0;
   
   let meleemiss = Math.max(MeleeMissChance - ff_hit,0);
   remainder -= meleemiss;
   
   let meleedodge = Math.min(remainder, DodgeChance);
   remainder -= meleedodge;
   
   let meleeglance = Math.min(remainder, GlanceChance);
   remainder -= meleeglance;
   
   let meleecrit = Math.min(remainder, MeleeCritChance);
   remainder -= meleecrit;

   let meleehit = remainder;
   
   return mainhand_wep.basedmgmod*0.01*physdmgmod*(MeleeCritDamage*meleecrit + meleehit + GlanceDmgReduction*meleeglance);
}

function exp_dmgMod_MeleeRaptor() {
   let remainder = 100;
   let ff_hit = (debuffs.faeriefire.timer > 0 && debuffs.faeriefire.improved) ? 3 : 0;
   
   let meleemiss = Math.max(MeleeMissChance - ff_hit,0);
   remainder -= meleemiss;
   
   let meleedodge = Math.min(remainder, DodgeChance);
   remainder -= meleedodge;
   
   let meleecrit = Math.min(remainder, MeleeCritChance + talents.savage_strikes*10);
   remainder -= meleecrit;

   let meleehit = remainder;

   return mainhand_wep.basedmgmod*0.01*physdmgmod*(MeleeCritDamage*meleecrit + meleehit);
}


function exp_dmgMod_Physical(critbonus) {

   let ff_hit = (debuffs.faeriefire.timer > 0 && debuffs.faeriefire.improved && !debuffs.faeriefire.inactive) ? 3 : 0;
   let rangemiss = Math.max(RangeMissChance - ff_hit,0)*0.01;
   let rangehit = 1 - rangemiss;
   let rangecrit = (_combatCritChance + critbonus)*0.01;
   
   return range_wep.basedmgmod*physdmgmod*combatdmgmod*rangehit*((RangeCritDamage-1)*rangecrit + 1);
}

function exp_dmgMod_Arcane() {

   let ff_hit = (debuffs.faeriefire.timer > 0 && debuffs.faeriefire.improved && !debuffs.faeriefire.inactive) ? 3 : 0;
   let rangemiss = Math.max(RangeMissChance - ff_hit,0)*0.01;
   let rangehit = 1 - rangemiss;
   let rangecrit = _combatCritChance*0.01;
   
   return range_wep.basedmgmod*magdmgmod*combatdmgmod*rangehit*((RangeCritDamage-1)*rangecrit + 1);
}

function exp_update(){
   updateAgi();
   updateAP();
   exp_updateDamageMod();
   _combatCritChance = updateCritChance();
	
}

function exp_dmg_AutoShot(range_wep, combatRAP){

	let dmg = (range_wep.mindmg + range_wep.maxdmg)*0.5; // avg damage
    let shotDmg = (range_wep.ammodps * range_wep.speed + combatRAP * range_wep.speed / 14 + dmg + range_wep.flatdmg) * exp_dmgMod_Physical(0);
    return shotDmg;
}
function exp_dmg_SteadyShot(range_wep, combatRAP) {

	let dmg = (range_wep.mindmg + range_wep.maxdmg)*0.5; // avg damage
    let gronnstalkermod = currentgear.special.gronnstalker_4p_steady_shot_dmg_ratio;
    let shotDmg = (combatRAP * 0.2 + dmg * 2.8 / range_wep.speed + SPELLS.steadyshot.rankdmg) * exp_dmgMod_Physical(currentgear.special.rift_stalker_4p_ss_crit) * gronnstalkermod;
    return shotDmg;
}

function exp_dmg_MultiShot(range_wep, combatRAP) {

	let dmg = (range_wep.mindmg + range_wep.maxdmg)*0.5; // avg damage
    let multimod = currentgear.special.multishot_dmg_inc_ratio * talents.barrage;
    let shotDmg = (range_wep.ammodps * range_wep.speed + combatRAP * 0.2 + dmg + range_wep.flatdmg + SPELLS.multishot.rankdmg) * exp_dmgMod_Physical(talents.imp_barrage*4) * multimod;
    return shotDmg;
}

function exp_dmg_ArcaneShot(range_wep, combatRAP) {

    let shotDmg = (combatRAP * 0.15 + SPELLS.arcaneshot.rankdmg) * exp_dmgMod_Arcane();
    return shotDmg;
}

function exp_dmg_RaptorStrike(mainhand_wep, combatMAP) {

	let dmg = (mainhand_wep.mindmg + mainhand_wep.maxdmg)*0.5; // avg damage
    return (dmg + mainhand_wep.flatdmg + SPELLS.raptorstrike.rankdmg + combatMAP*mainhand_wep.speed) * combatdmgmod * exp_dmgMod_MeleeRaptor(); 
}

function exp_dmg_MeleeSwing(mainhand_wep, combatMAP) {

	let dmg = (mainhand_wep.mindmg + mainhand_wep.maxdmg)*0.5; // avg damage
    return (dmg + mainhand_wep.flatdmg + combatMAP*mainhand_wep.speed) * combatdmgmod * exp_dmgMod_Melee(); 
}
