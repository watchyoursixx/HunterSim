
const PetBaseDodge = 6.5;
const PetBaseCrit  = 1.1515;
const PetBaseSpeed = 2;
const PetMinDmg = 42;
const PetMaxDmg = 68;
const PetBaseAgi = 127;
const PetBaseStr = 162;
const PetHappiness = 1.25;
const CobraReflexesPenalty = 0.85;
const BaseFocusRegen = 25;
// initial pet object - trying something different from how I did player 1 global object instead of a bunch of variables
var pet = {
    agi: 0,
    ap: 0,
    combatap: 0,
    crit: 0,
    combatcrit:0,
    dmgmod: 1,
    hit: 0,
    miss: 0,
    combatmiss:0,
    speed: 2,
    combatspeed:0,
    str: 0,
    focusregen:0,
    focus: 100,
    frenzy: {
        timer:0, uptime:0,
    },
    ferocious: {
        timer:0,uptime:0,
    },
    primarycost: 25,
};
var petconsumestats = {};
var petdmgdone = 0;
var petautodmg = 0;
var petduration = 0;
var petsteptime = 0;
var spellindex = 0;

var PETS = [
    { 
        name: 'Ravager',
        dmgmod: 1.1,
        primary: 'gore',
        secondary: 'gore',
    },
    { 
        name: 'Cat',
        dmgmod: 1.1,
        primary: 'claw',
        secondary: 'claw',
    },
    { 
        name: 'Raptor',
        dmgmod: 1.1,
        primary: 'claw',
        secondary: 'claw',
    },
    { 
        name: 'Owl',
        dmgmod: 1.07,
        primary: 'screech',
        secondary: 'screech',
    },
    { 
        name: 'Bat',
        dmgmod: 1.07,
        primary: 'screech',
        secondary: 'screech',
    },
    { 
        name: 'Wind Serpent',
        dmgmod: 1.07,
        primary: 'lightning breath',
        secondary: 'lightning breath',
    },
];
var killcommand = {ready:false, timeremaining:0, basecd:5, cooldown:0};
var selectedPet = 0;

function petStatsCalc(){

    let racialmod = (selectedRace === 3) ? 1.05 : 1; // 5% pet dmg if orc
    pet.dmgmod = PetHappiness * talents.unleash_fury * PETS[selectedPet].dmgmod * racialmod;

    pet.str = Math.floor((PetBaseStr + (selectedbuffs.stats.Str || 0) + (petconsumestats.Str || 0)) * selectedbuffs.special.kingsMod);
    pet.agi = Math.floor((PetBaseAgi + (selectedbuffs.stats.Agi || 0) + (petconsumestats.Agi || 0)) * selectedbuffs.special.kingsMod);

    //ap
    let petAPfromplayer = BaseRAP * 0.22;
    pet.ap = (pet.str - 10) * 2 + (selectedbuffs.stats.MAP || 0) + petAPfromplayer;
    //crit
    pet.crit = PetBaseCrit + pet.agi / 33 + talents.ferocity + (selectedbuffs.stats.CritChance || 0); // need to add special gear items w/ pet crit
    //hit
    pet.hit = talents.animal_handler ; // need to add heroic presence
    let penalty = (RangeHitChance >= 1) ? HitPenalty : 0; // include penalty here? assumes lvl 73 target
    pet.miss = Math.max(8 - pet.hit - penalty,0);
    //speed
    pet.speed = PetBaseSpeed / talents.serp_swift / 1.3; // 1.3 for cobra reflexes
    // spell selection by pet
    let primary = PETS[selectedPet].primary;
    switch (primary){
        case 'bite': spellindex = 0; break;
        case 'screech': spellindex = 1; break;
        case 'claw': spellindex = 2; break;
        case 'gore': spellindex = 3; break;
        case 'lightning breath': spellindex = 4; break;
        case 'thunerstomp': spellindex = 5; break;
        case 'fire breath': spellindex = 6; break;
        case 'poison spit': spellindex = 7; break;
        case 'scorpid poison': spellindex = 8; break;
    }
    pet.primarycost = PET_SPELLS[spellindex].cost;
}

function petUpdateDmgMod(){
    pet.combatdmgmod = 1;
    if(auras.beastwithin.timer > 0) { pet.combatdmgmod *= 1.5; } // bestial wrath
    if(pet.ferocious.timer > 0) { pet.combatdmgmod *= talents.ferocious_insp; } // ferocious insp pet buff
    //if(auras.ferocious.timer > 0) { pet.combatdmgmod *= 1.03 * BMHuntersInGroup; } // ferocious insp from others
    if(debuffs.bloodfrenzy.timer > 0 && !debuffs.bloodfrenzy.inactive) { pet.combatdmgmod *= 1.04;} // blood frenzy debuff
    return;
}

function petUpdateHaste(){
    pet.combatspeed = pet.speed;
    pet.combatspeed = (pet.frenzy.timer > 0) ? pet.combatspeed / 1.3 : pet.combatspeed; // frenzy
    pet.combatspeed = (auras.lust.timer > 0) ? pet.combatspeed / 1.3 : pet.combatspeed; // lust
    return;
}

function petUpdateStats(){

    pet.combatcrit = pet.crit;
    pet.combatspellcrit = talents.ferocity;
    pet.combatmiss = pet.miss;
    // hunter AP
    let bonusAP = updateAP();
    let HM_map = 0;
    if (debuffs.hm.timer > 0 && debuffs.hm.improved && !debuffs.hm.inactive) {
        if(talents.imp_hunter_mark > 0) {
           HM_map = 110 * talents.imp_hunter_mark;
        }
        else {
           HM_map = 110 * 1;
        }
    }
    pet.combatap = bonusAP * 0.22 + pet.ap + HM_map;
    if (talents.exp_weakness > 0) {
        pet.combatap += (debuffs.exposeweakness.timer > 0) ? (Agi + combatAgi) / 4 : 0;
    }
    else if (debuffs.exposeweakness.timer > 0 && !debuffs.exposeweakness.inactive) {
        pet.combatap += debuffs.exposeweakness.agi / 4;
    }
    pet.combatcrit += combatAgi / 33;
    // pet crit imp crusader
    if(debuffs.judgecrusader.timer > 0 && !debuffs.judgecrusader.inactive) { 
        pet.combatcrit += debuffs.judgecrusader.crit;
        pet.combatspellcrit += debuffs.judgecrusader.crit;
    } // imp crusader debuff
    // pet miss imp faerie
    if(debuffs.faeriefire.timer > 0 && debuffs.faeriefire.improved && !debuffs.faeriefire.inactive) { pet.combatmiss -= 3; }
}

function petUpdateFocus(playercrit){
    // bestial discipline
    pet.focusregen = BaseFocusRegen * (1 + talents.bestial_disc * 0.5);
    // go for the throat
    if(playercrit === true) {
        pet.focus += talents.GftT;
        if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Pet gains " + talents.GftT + " Focus from Go for the Throat";
            combatlogindex++;
        }
    }
    // focus regen per 5s
    if (steptimeend > 5 * Math.ceil(prevtimeend / 5)) {
        pet.focus += pet.focusregen;    
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Pet regens " + pet.focusregen + " Focus";
            combatlogindex++;
        }
    }
    // cap focus at 100, reset crit flag
    pet.focus = Math.min(100, pet.focus);
    return playercrit = false;
}

function petAuras(steptime){
    // update uptime
    if(pet.ferocious.timer > 0) { pet.ferocious.uptime += Math.min(pet.ferocious.timer,steptime); }// ferocious insp
    if(pet.frenzy.timer > 0) { pet.frenzy.uptime += Math.min(pet.frenzy.timer,steptime); }// frenzy
    // update timer
    if(pet.ferocious.timer > 0) { pet.ferocious.timer = Math.max(pet.ferocious.timer - steptime,0); }// ferocious insp
    if(pet.frenzy.timer > 0) { pet.frenzy.timer = Math.max(pet.frenzy.timer - steptime,0); }// frenzy
    
    // kill command cooldown update
    if(killcommand.cooldown > 0) { killcommand.cooldown = Math.max(killcommand.cooldown - steptime,0); 
    } // kill command time since last crit update
    if(killcommand.timeremaining > 0) { killcommand.timeremaining = Math.max(killcommand.timeremaining - steptime,0); 
    } else if(killcommand.timeremaining === 0) { killcommand.ready = false;} // if time since last kc fades before use, ready is false

}

function petRollAttack(){
    let tmp = 0;
    let roll = rng10k();
    tmp += pet.combatmiss * 100;
    if (roll < tmp) return RESULT.MISS;
    tmp += PetBaseDodge * 100;
    if (roll < tmp) return RESULT.DODGE;
    tmp += GlanceChance * 100;
    if (roll < tmp) return RESULT.GLANCE;
    tmp += pet.combatcrit * 100;
    if (roll < tmp) return RESULT.CRIT; // 1 roll
    return RESULT.HIT;
}

function petRollSpell(specialcrit){
    let tmp = 0;
    let roll = rng10k();
    let crit = pet.combatcrit + specialcrit;
    tmp += pet.combatmiss * 100;
    if (roll < tmp) return RESULT.MISS;
    tmp += PetBaseDodge * 100;
    if (roll < tmp) return RESULT.DODGE;
    tmp += (100 - pet.combatmiss) * crit; // pseudo 2 roll
    if (roll < tmp) return RESULT.CRIT;
    return RESULT.HIT;
    
}

function petRollMagicSpell(){
    let tmp = 0;
    let roll = rng10k();
    let hit = (17 - talents.animal_handler);
    tmp += hit * 100;
    if (roll < tmp) return RESULT.MISS;
    tmp += 14.5 * 100; // partial resist rate approx. 14.5% based on log data at 0 resistance
    if (roll < tmp) return RESULT.PARTIAL;
    tmp += (100 - hit) * pet.combatspellcrit; // pseudo 2 roll
    if (roll < tmp) return RESULT.CRIT;
    return RESULT.HIT;
}
petdmg = {
    kcdmg:0,
    attackdmg:0,
    primarydmg:0,
}
function petAttack(){

    petUpdateStats();
    petUpdateDmgMod();
    
    let dmg = 0;
    let result = petRollAttack(); // check attack table
    if (result === RESULT.HIT) {
          dmg = petAutoCalc(); // calc damage
    }
    else if (result === RESULT.GLANCE) {
        dmg = petAutoCalc();
        dmg *= GlanceDmgReduction;
    }
    else if (result === RESULT.CRIT) {
          dmg = petAutoCalc();
          dmg *= 2;
          petCrit();
    }
    let spelltype = "phys";
    let done = petdealdamage(dmg,result,spelltype);
    petdmgdone += done;
    petautodmg += done;
    petUpdateHaste();
    petsteptime = nextpetattack;
    nextpetattack += pet.combatspeed;
    petautocount++;
    petdmg.attackdmg += dmg;
    if(combatlogRun) {
        combatlogarray[combatlogindex] = petsteptime.toFixed(3) + " - Pet Auto " + RESULTARRAY[result] + " for " + done;
        combatlogindex++;
    }
    return petsteptime;
}

function petSpell(petspell){

    petUpdateStats();
    petUpdateDmgMod();
    let dmg = 0;
    result = 0;
    let specialcrit = 0;
    let spelltype = "";
    // kill command use
    if(petspell === 'kill command'){
        specialcrit = talents.focused_fire * 10;
        result = petRollSpell(specialcrit); // check attack table
        if (result === RESULT.HIT) {
            dmg = petKillCommCalc(); // calc damage
        }
        else if (result === RESULT.CRIT) {
            dmg = petKillCommCalc();
            dmg *= 2;
            petCrit();
        }
        petkccount++;
        spelltype = "phys";
        petdmg.kcdmg += dmg;
        
    } // primary spell use determined by which pet selected
    else if(petspell === 'primary') {

        if(nextpetattack < nextpetspell){ nextpetspell = nextpetattack; }

        if(spellindex <= 3){

            result = petRollSpell(specialcrit); // check attack table
            if (result === RESULT.HIT) {
                dmg = spellPetCalc(spellindex); // calc damage
                Result_Primary.Hit++;
            }
            else if (result === RESULT.CRIT) {
                dmg = spellPetCalc(spellindex);
                dmg *= 2;
                petCrit();
                Result_Primary.Crit++;
            }
            else if (result === RESULT.MISS) {
                Result_Primary.Miss++;
            }
            spelltype = "phys";
        } 
        else if(spellindex <= 5 && spellindex > 3){

            result = petRollMagicSpell(); // check attack table
            if (result === RESULT.HIT) {
                dmg = spellPetCalc(spellindex); // calc damage
                Result_Primary.Hit++;
            }
            else if (result === RESULT.CRIT) {
                dmg = spellPetCalc(spellindex);
                dmg *= 1.5; // spell crits are 150%
                petCrit();
                Result_Primary.Crit++;
            }
            else if (result === RESULT.PARTIAL) {
                dmg = spellPetCalc(spellindex);
                dmg *= 0.65; // average reduction of 35% on partial resists
                Result_Primary.Partial++;
            }
            else if (result === RESULT.MISS) {
                Result_Primary.Miss++;
            }
            spelltype = "magic";
        }
        
        petsteptime = nextpetspell; // since pet steps don't change time (all instants) set time to current time
        nextpetspell = nextpetspell + 1.5; // set next available spell time by 1.5
        petprimarycount++;
        petdmg.primarydmg += dmg;
    }
    let done = petdealdamage(dmg,result,spelltype); // need special case for magic spells pet or player
    petdmgdone += done;
    petUpdateHaste();
    
    if(combatlogRun && petspell === 'kill command') {
        combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Pet " + petspell + " " + RESULTARRAY[result] + " for " + done;
        combatlogindex++;
    } else if(combatlogRun){
        combatlogarray[combatlogindex] = petsteptime.toFixed(3) + " - Pet " + PET_SPELLS[spellindex].name + " " + RESULTARRAY[result] + " for " + done;
        combatlogindex++;
    }
    return petsteptime;
}
/** final damage calculation after rolls */
function petdealdamage(dmg, result, spelltype) {
    if (result != RESULT.MISS && result != RESULT.DODGE && spelltype === "phys") {
       // randomizes the result to be always ±1 damage as in-game results show even with fine light crossbow
        let mindmg = Math.floor(dmg * (1 - PetArmorReduc));
        let maxdmg = Math.ceil(dmg * (1 - PetArmorReduc));
        dmg = rng(mindmg,maxdmg);
       
        return dmg;
    }
    else if (result != RESULT.MISS && spelltype === "magic"){
        let mindmg = Math.floor(dmg);
        let maxdmg = Math.ceil(dmg);
        dmg = rng(mindmg,maxdmg);
        
        return dmg;
    }
    else {
       return 0;
    }
}

function petCrit(){
    let roll = 0;
    //frenzy
    if (talents.frenzy > 0) {
        roll = rng10k();
        let frenzychance = talents.frenzy * 2000;
        pet.frenzy.timer = (roll <= frenzychance) ? 8 : pet.frenzy.timer; // proc check
        if(pet.frenzy.timer === 8) { 
            if(combatlogRun && petspell === 'kill command') {
                combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Pet gains Frenzy";
                    combatlogindex++;
            } 
            else if(combatlogRun && nextpetspell >= nextpetattack) {
                    combatlogarray[combatlogindex] = nextpetattack.toFixed(3) + " - Pet gains Frenzy";
                    combatlogindex++;
            } 
            else if (combatlogRun){
                combatlogarray[combatlogindex] = nextpetspell.toFixed(3) + " - Pet gains Frenzy";
                combatlogindex++;
            }
        }
    }
    //ferocious insp
    if (talents.ferocious_insp > 1) {
        pet.ferocious.timer = 10;
        if(combatlogRun && petspell === 'kill command') {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Pet gains Ferocious Inspiration";
                combatlogindex++;
        } 
        else if(combatlogRun && nextpetspell >= nextpetattack) {
            combatlogarray[combatlogindex] = nextpetattack.toFixed(3) + " - Pet gains Ferocious Inspiration";
            combatlogindex++;
        } 
        else if (combatlogRun){
            combatlogarray[combatlogindex] = nextpetspell.toFixed(3) + " - Pet gains Ferocious Inspiration";
            combatlogindex++;
        }
    }
}