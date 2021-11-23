var SPELLS = {

    autoshot: {cast:0.5, cd:0, dmg:0, cost:0, duration:0, gcd:false},
    steadyshot: {cast:1.5, cd:0, dmg:0, cost:110, duration:0, rankdmg:150, gcd:true},
    multishot: {cast:0.5, cd:0, dmg:0, cost:275, duration:0, rankdmg:205, gcd:true},
    arcaneshot: {cast:0.0001, cd:0, dmg:0, cost:230, duration:0, rankdmg:273, gcd:true},
    aimedshot: {cast:3, cd: 0, dmg:0, cost:370, duration:0, rankdmg:870, gcd:true},

};

const PET_SPELLS = [
    {
        name:'bite',
        mindmg: 108,
        maxdmg: 132,
        cd:0,
        cost:35,
    },
    {
        name:'screech',
        mindmg: 33,
        maxdmg: 61,
        cost: 20,
    },
    {
        name:'claw',
        mindmg: 54,
        maxdmg: 76,
        cost: 25,
    },
    {
        name:'gore',
        mindmg: 37,
        maxdmg: 61,
        cost: 25,
    },
    {
        name:'lightning breath',
        mindmg: 99,
        maxdmg: 113,
        sp_coeff: 0.05,
        cost: 50,
    },
    {
        name:'thunderstomp',
        mindmg: 115,
        maxdmg: 133,
        sp_coeff: 0.05,
        cost: 60,
    },
    {
        name:'fire breath',
        tick: 37,
        sp_coeff: 0.05,
        cost: 50,
    },
    {
        name:'poison spit',
        tick: 24,
        cost: 35,
    },
    {
        name:'scorpid poison',
        tick: 11,
        sp_coeff: 0.026,
        cost: 30,
    },
];


function updateSpellCDs(spell,petspell) {
    SPELLS.autoshot.cd = (spell === 'autoshot') ? (rangespeed - SPELLS.autoshot.cast) : Math.max(SPELLS.autoshot.cd - steptime, 0);
    SPELLS.steadyshot.cd = (spell === 'steadyshot') ? (1.5 - SPELLS.steadyshot.cast) : Math.max(SPELLS.steadyshot.cd - steptime, 0);
    PET_SPELLS[0].cd = ((petspell === 'primary') && (spellindex === 0)) ? 10 : Math.max(PET_SPELLS[0].cd - steptime, 0);
    //SPELLS.multishot.cd = Math.max(SPELLS.multishot.cd - steptime, 0);
    //SPELLS.arcaneshot.cd = Math.max(SPELLS.arcaneshot.cd - steptime, 0);
    //SPELLS.aimedshot.cd = Math.max(SPELLS.aimedshot.cd - steptime, 0);
    //console.log("auto cd: "+SPELLS.autoshot.cd);
    //console.log("steady cd: "+SPELLS.steadyshot.cd);
}

function autoShotCalc(range_wep, combatRAP) {

    let dmg = rng(range_wep.mindmg,range_wep.maxdmg);
    let shotDmg = (range_wep.ammodps * range_wep.speed + combatRAP * range_wep.speed / 14 + dmg + range_wep.flatdmg) * range_wep.basedmgmod * combatdmgmod;
    return shotDmg;
}

function steadyShotCalc(range_wep, combatRAP) {

    let dmg = rng(range_wep.mindmg,range_wep.maxdmg);
    let gronnstalkermod = currentgear.special.gronnstalker_4p_steady_shot_dmg_ratio;
    let shotDmg = (combatRAP * 0.2 + dmg * 2.8 / range_wep.speed + SPELLS.steadyshot.rankdmg) * range_wep.basedmgmod * gronnstalkermod * combatdmgmod;
    return shotDmg;
}

function multiShotCalc(range_wep, combatRAP) {

    let dmg = rng(range_wep.mindmg,range_wep.maxdmg);
    let multimod = multishot_dmg_inc_ratio * talents.barrage;
    let shotDmg = (range_wep.ammodps * range_wep.speed + combatRAP * 0.2 + dmg + range_wep.flatdmg + SPELLS.multishot.rankdmg) * range_wep.basedmgmod * multimod * combatdmgmod;
    return shotDmg;
}

function arcaneShotCalc(range_wep, combatRAP) {

    let arcanemod = 1;
    let shotDmg = (combatRAP * 0.2 + SPELLS.arcaneshot.rankdmg) * range_wep.basedmgmod * arcanemod;
    return shotDmg;
}

function aimedShotCalc(range_wep, combatRAP) {

    let dmg = rng(range_wep.mindmg,range_wep.maxdmg);
    let shotDmg = (range_wep.ammodps * range_wep.speed + combatRAP * 0.2 + dmg + range_wep.flatdmg + SPELLS.aimedshot.rankdmg) * range_wep.basedmgmod * combatdmgmod;
    return shotDmg;
}

function petAutoCalc(){
    let dmg = rng(PetMinDmg,PetMaxDmg);
    let autoDmg = (dmg + pet.combatap * 2 / 14) * pet.dmgmod * pet.combatdmgmod * CobraReflexesPenalty;
    return autoDmg;
}

function petKillCommCalc(){
    let dmg = rng(PetMinDmg,PetMaxDmg);
    let kcDmg = (dmg + pet.combatap * 2 / 14 + 127) * pet.dmgmod * pet.combatdmgmod;
    return kcDmg;
}

function spellPetCalc(spellindex){
    let mindmg = 0;
    let maxdmg = 0;
    let dmg = 0;
    let spelldmg = 0;
    let spellpwr = (pet.combatap - pet.ap) * 0.581818 + BaseRAP * 0.128; // spell power from hunter 12.8% - 58% of AP gained from combat
    
    if(spellindex <= 3){ // phys spells
        mindmg = PET_SPELLS[spellindex].mindmg; // min dmg of phys spell selected
        maxdmg = PET_SPELLS[spellindex].maxdmg; 
        dmg = rng(mindmg,maxdmg);
        spelldmg = dmg * pet.dmgmod * pet.combatdmgmod;
    } 
    else if (spellindex <= 5 && spellindex > 3){ // lightning breath/stomp
        mindmg = PET_SPELLS[spellindex].mindmg; // min dmg of phys spell selected
        maxdmg = PET_SPELLS[spellindex].maxdmg; 
        dmg = rng(mindmg,maxdmg);
        spelldmg = (dmg + spellpwr * PET_SPELLS[spellindex].sp_coeff) * pet.dmgmod * pet.combatdmgmod;
    } 
    else if (spellindex === 6) { // fire breath
        dmg = PET_SPELLS[spellindex].tick;
        spelldmg = (dmg + spellpwr * PET_SPELLS[spellindex].sp_coeff) * pet.dmgmod * pet.combatdmgmod * 3; // 3 ticks over 3 sec, just doing x3
    } 
    else if (spellindex === 7) { 
        dmg = PET_SPELLS[spellindex].tick;
        spelldmg = dmg * pet.dmgmod * pet.combatdmgmod * 4; // 4 ticks over 8 sec, just doing x4
    }
    else if (spellindex === 8) { // scorpid poison
        dmg = PET_SPELLS[spellindex].tick;
        // add stacking logic up to 5
        //spelldmg = (dmg + spellpwr * PET_SPELLS[spellindex].sp_coeff) * pet.dmgmod * pet.combatdmgmod * 3; // 3 ticks over 3 sec, just doing x3
    } 

    // gore bonus dmg
    if(spellindex === 3) {
        let roll = rng10k();
        if(roll < 5000) {
            spelldmg *= 2;
        }
    }
    return spelldmg;
}