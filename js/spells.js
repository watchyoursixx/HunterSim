var SPELLS = {

    autoshot: {cast:0.5, cd:0, dmg:0, cost:0, duration:0, gcd:false},
    steadyshot: {enable:true, cast:1.5, cd:0, dmg:0, cost:110, duration:0, rankdmg:150, gcd:true},
    multishot: {enable:false, cast:0.5, cd:0, dmg:0, cost:275, duration:0, rankdmg:205, gcd:true},
    arcaneshot: {enable:false, cast:0.0001, cd:0, dmg:0, cost:230, duration:0, rankdmg:273, gcd:true},
    aimedshot: {enable:false, cast:3, cd: 0, dmg:0, cost:370, duration:0, rankdmg:870, gcd:true},
    raptorstrike: {enable:false, cast:0.0, cd: 0, dmg:0, cost:120, rankdmg:170,gcd:false},
    melee: {enable:false, cast:0.0, cd:0, dmg:0, gcd:false},

};

SPELL_MAPPER = {
    autoshot: "Auto Shot",
    steadyshot: 'Steady Shot',
    multishot: 'Multi Shot',
    arcaneshot: 'Arcane Shot',
    aimedshot: 'Aimed Shot',
    raptorstrike: 'Raptor Strike',
    melee: 'Melee'
}

const PET_SPELLS = [
    {
        name:'Bite',
        mindmg: 108,
        maxdmg: 132,
        cd:0,
        cost:35,
    },
    {
        name:'Screech',
        mindmg: 33,
        maxdmg: 61,
        cost: 20,
    },
    {
        name:'Claw',
        mindmg: 54,
        maxdmg: 76,
        cost: 25,
    },
    {
        name:'Gore',
        mindmg: 37,
        maxdmg: 61,
        cost: 25,
    },
    {
        name:'Lightning Breath',
        mindmg: 99,
        maxdmg: 113,
        sp_coeff: 0.05,
        cost: 50,
    },
    {
        name:'Thunderstomp',
        mindmg: 115,
        maxdmg: 133,
        sp_coeff: 0.05,
        cost: 60,
    },
    {
        name:'Fire Breath',
        tick: 37,
        sp_coeff: 0.05,
        cost: 50,
    },
    {
        name:'Poison Spit',
        tick: 24,
        cost: 35,
    },
    {
        name:'Scorpid Poison',
        tick: 11,
        sp_coeff: 0.026,
        cost: 30,
    },
];

function initializeSpells(){
    // set spell CDs to 0
    SPELLS.autoshot.cd = 0;
    SPELLS.steadyshot.cd = 0;
    SPELLS.multishot.cd = 0.5;
    SPELLS.arcaneshot.cd = 0.5;
    SPELLS.raptorstrike.cd = 4; // set to 4 for initial delay for melee
    SPELLS.melee.cd = 4; // set to 4 for initial delay for melee
    //SPELLS.aimedshot.cd = 0;
    // set pet spell CDs to 0
    PET_SPELLS[0].cd = 0;

    
}

function updateSpellCDs(spell,petspell) {
    SPELLS.autoshot.cd = (spell === 'autoshot') ? (rangespeed - SPELLS.autoshot.cast) : Math.max(SPELLS.autoshot.cd - steptime, 0);
    SPELLS.steadyshot.cd = (spell === 'steadyshot') ? (1.5 - SPELLS.steadyshot.cast) : Math.max(SPELLS.steadyshot.cd - steptime, 0);
    PET_SPELLS[0].cd = ((petspell === 'primary') && (spellindex === 0)) ? 10 : Math.max(PET_SPELLS[0].cd - steptime, 0);
    SPELLS.multishot.cd = (spell === 'multishot') ? 10 : Math.max(SPELLS.multishot.cd - steptime, 0);
    SPELLS.arcaneshot.cd = (spell === 'arcaneshot') ? (6 - talents.imp_arc_shot) : Math.max(SPELLS.arcaneshot.cd - steptime, 0);
    //SPELLS.aimedshot.cd = Math.max(SPELLS.aimedshot.cd - steptime, 0);

	if(spell === 'raptorstrike'){
		SPELLS.melee.cd = meleespeed;
		SPELLS.raptorstrike.cd = 6;
	}
	else if(spell === 'melee'){
		SPELLS.melee.cd = meleespeed;
		SPELLS.raptorstrike.cd = Math.max(SPELLS.melee.cd, SPELLS.raptorstrike.cd);
	}
	else{
		SPELLS.melee.cd = Math.max(SPELLS.melee.cd - steptime, 0);
		SPELLS.raptorstrike.cd = Math.max(SPELLS.raptorstrike.cd - steptime, 0);
	}

    if (currentgcd > playertimeend && spell != undefined) {
        let remaininggcd = currentgcd - playertimeend;
        //console.log("remaining gcd: " + remaininggcd);
        SPELLS.steadyshot.cd = (remaininggcd > SPELLS.steadyshot.cd) ? (currentgcd - playertimeend) : SPELLS.steadyshot.cd;
        SPELLS.multishot.cd = (remaininggcd > SPELLS.multishot.cd) ? (currentgcd - playertimeend) : SPELLS.multishot.cd;
        SPELLS.arcaneshot.cd = (remaininggcd > SPELLS.arcaneshot.cd) ? (currentgcd - playertimeend) : SPELLS.arcaneshot.cd;
        //console.log("update timers w/ gcd");
    }
    //console.log("speed: " + rangespeed);
    //console.log("auto cd: "+SPELLS.autoshot.cd);
    //console.log("steady cd: "+SPELLS.steadyshot.cd);
    //console.log("multi cd: "+SPELLS.multishot.cd);
    //console.log("arcane cd: "+SPELLS.arcaneshot.cd);
}

/*************************************************************************/
/* All formulas below are tested and confirmed in-game as of patch 2.5.3 */
/*************************************************************************/

function autoShotCalc(range_wep, combatRAP) {

    let dmg = (useAverages) ? (range_wep.mindmg + range_wep.maxdmg) * 0.5 : rng(range_wep.mindmg,range_wep.maxdmg);
    let shotDmg = (range_wep.ammodps * range_wep.speed + combatRAP * range_wep.speed / 14 + dmg + range_wep.flatdmg) * range_wep.basedmgmod * combatdmgmod * physdmgmod;
    return shotDmg;
}

function steadyShotCalc(range_wep, combatRAP) {

    let dmg = (useAverages) ? (range_wep.mindmg + range_wep.maxdmg) * 0.5 : rng(range_wep.mindmg,range_wep.maxdmg);
    let gronnstalkermod = currentgear.special.gronnstalker_4p_steady_shot_dmg_ratio;
    let shotDmg = (combatRAP * 0.2 + dmg * 2.8 / range_wep.speed + SPELLS.steadyshot.rankdmg) * range_wep.basedmgmod * gronnstalkermod * combatdmgmod * physdmgmod;
    return shotDmg;
}

function multiShotCalc(range_wep, combatRAP) {

    let dmg = (useAverages) ? (range_wep.mindmg + range_wep.maxdmg) * 0.5 : rng(range_wep.mindmg,range_wep.maxdmg);
    let multimod = (!!currentgear.special.multishot_dmg_inc_ratio) ? currentgear.special.multishot_dmg_inc_ratio * talents.barrage : talents.barrage;
    let shotDmg = (range_wep.ammodps * range_wep.speed + combatRAP * 0.2 + dmg + range_wep.flatdmg + SPELLS.multishot.rankdmg) * range_wep.basedmgmod * multimod * combatdmgmod * physdmgmod;
    return shotDmg;
}

function arcaneShotCalc(range_wep, combatRAP) {

    let shotDmg = (combatRAP * 0.15 + SPELLS.arcaneshot.rankdmg) * range_wep.basedmgmod * combatdmgmod * magdmgmod;
    return shotDmg;
}

function aimedShotCalc(range_wep, combatRAP) {

    let dmg = (useAverages) ? (range_wep.mindmg + range_wep.maxdmg) * 0.5 : rng(range_wep.mindmg,range_wep.maxdmg);
    let shotDmg = (range_wep.ammodps * range_wep.speed + combatRAP * 0.2 + dmg + range_wep.flatdmg + SPELLS.aimedshot.rankdmg) * range_wep.basedmgmod * combatdmgmod * physdmgmod;
    return shotDmg;
}

function raptorStrikeCalc(mainhand_wep, combatMAP) {

    let dmg = (useAverages) ? (mainhand_wep.mindmg + mainhand_wep.maxdmg) * 0.5 : rng(mainhand_wep.mindmg,mainhand_wep.maxdmg);
    let outDmg = (combatMAP * mainhand_wep.speed / 14 + dmg + mainhand_wep.flatdmg + SPELLS.raptorstrike.rankdmg) * mainhand_wep.basedmgmod * combatdmgmod * physdmgmod;
    return outDmg;
}

function meleeStrikeCalc(mainhand_wep, combatMAP) {

    let dmg = (useAverages) ? (mainhand_wep.mindmg + mainhand_wep.maxdmg) * 0.5 : rng(mainhand_wep.mindmg,mainhand_wep.maxdmg);
    let outDmg = (combatMAP * mainhand_wep.speed / 14 + dmg + mainhand_wep.flatdmg) * mainhand_wep.basedmgmod * combatdmgmod * physdmgmod;
    return outDmg;
}

function petAutoCalc(){
    let dmg = (useAverages) ? (PetMinDmg + PetMaxDmg) * 0.5 : rng(PetMinDmg,PetMaxDmg);
    let autoDmg = (dmg + pet.combatap * 2 / 14) * pet.dmgmod * pet.combatdmgmod * CobraReflexesPenalty;
    return autoDmg;
}

function petKillCommCalc(){
    let dmg = (useAverages) ? (PetMinDmg + PetMaxDmg) * 0.5 : rng(PetMinDmg,PetMaxDmg);
    let kcDmg = (dmg + pet.combatap * 2 / 14 + 127) * pet.dmgmod * pet.combatdmgmod;
    return kcDmg;
}

function spellPetCalc(spellindex){
    let mindmg = 0;
    let maxdmg = 0;
    let dmg = 0;
    let spelldmg = 0;
    let spellpwr = (pet.combatap - pet.ap) * 0.581818 + BaseRAP * 0.128; // spell power from hunter 12.8% - 58% of AP gained from combat
    let basedmgmod = pet.dmgmod * pet.combatdmgmod / PETS[selectedPet].dmgmod;
    if(spellindex <= 3){ // phys spells
        mindmg = PET_SPELLS[spellindex].mindmg; // min dmg of phys spell selected
        maxdmg = PET_SPELLS[spellindex].maxdmg; 
        dmg = (useAverages) ? (mindmg + maxdmg) * 0.5 : rng(mindmg,maxdmg);
        spelldmg = dmg * basedmgmod;
    } 
    else if (spellindex <= 5 && spellindex > 3){ // lightning breath/stomp
        mindmg = PET_SPELLS[spellindex].mindmg; // min dmg of phys spell selected
        maxdmg = PET_SPELLS[spellindex].maxdmg; 
        dmg = (useAverages) ? (mindmg + maxdmg) * 0.5 : rng(mindmg,maxdmg);
        spelldmg = (dmg + spellpwr * PET_SPELLS[spellindex].sp_coeff) * basedmgmod * naturedmgmod;
    } 
    else if (spellindex === 6) { // fire breath
        dmg = PET_SPELLS[spellindex].tick;
        spelldmg = (dmg + spellpwr * PET_SPELLS[spellindex].sp_coeff) * basedmgmod * 3 * magdmgmod; // 3 ticks over 3 sec, just doing x3
    } 
    else if (spellindex === 7) { // poison spit
        dmg = PET_SPELLS[spellindex].tick;
        spelldmg = dmg * basedmgmod * 4 * naturedmgmod; // 4 ticks over 8 sec, just doing x4
    }
    else if (spellindex === 8) { // scorpid poison
        dmg = PET_SPELLS[spellindex].tick;
        // add stacking logic up to 5
        //spelldmg = (dmg + spellpwr * PET_SPELLS[spellindex].sp_coeff) * basedmgmod * basecombatdmgmod * 3; // 3 ticks over 3 sec, just doing x3
    } 

    // gore bonus dmg
    if(spellindex === 3) {
        let roll = 0;
        if (!useAverages) { 
            roll = rng10k();
            if(roll < 5000) {
                spelldmg *= 2;
            }
        }
        else { spelldmg *= 1.5; } // use 150% damage instead of rolling 50% double dmg
    }
    return spelldmg;
}