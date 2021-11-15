var SPELLS = {

    autoshot: {cast:0.5, cd:0, dmg:0, cost:0, duration:0, gcd:false},
    steadyshot: {cast:1.5, cd:0, dmg:0, cost:110, duration:0, rankdmg:150, gcd:true},
    multishot: {cast:0.5, cd:0, dmg:0, cost:275, duration:0, rankdmg:205, gcd:true},
    arcaneshot: {cast:0.0001, cd:0, dmg:0, cost:230, duration:0, rankdmg:273, gcd:true},
    aimedshot: {cast:3, cd: 0, dmg:0, cost:370, duration:0, rankdmg:870, gcd:true},

};

function updateSpellCDs(spell) {
    SPELLS.autoshot.cd = (spell === 'autoshot') ? SPELLS.autoshot.cd = rangespeed - SPELLS.autoshot.cast : Math.max(SPELLS.autoshot.cd - (steptimeend - prevtimeend), 0);
    SPELLS.steadyshot.cd = (spell === 'steadyshot') ? SPELLS.steadyshot.cd = 1.5 - SPELLS.steadyshot.cast : Math.max(SPELLS.steadyshot.cd - (steptimeend - prevtimeend), 0);
    //SPELLS.multishot.cd = Math.max(SPELLS.multishot.cd - steptime, 0);
    //SPELLS.arcaneshot.cd = Math.max(SPELLS.arcaneshot.cd - steptime, 0);
    //SPELLS.aimedshot.cd = Math.max(SPELLS.aimedshot.cd - steptime, 0);
    //console.log("auto cd: "+SPELLS.autoshot.cd);
    //console.log("steady cd: "+SPELLS.steadyshot.cd);
}

function autoShotCalc(range_wep, combatRAP) {

    let dmg = rng(range_wep.mindmg,range_wep.maxdmg);
    let shotDmg = (range_wep.ammodps * range_wep.speed + combatRAP * range_wep.speed / 14 + dmg + range_wep.flatdmg) * range_wep.basedmgmod;
    return shotDmg;
}

function steadyShotCalc(range_wep, combatRAP) {

    let dmg = rng(range_wep.mindmg,range_wep.maxdmg);
    let gronnstalkermod = currentgear.special.gronnstalker_4p_steady_shot_dmg_ratio;
    let shotDmg = (combatRAP * 0.2 + dmg * 2.8 / range_wep.speed + SPELLS.steadyshot.rankdmg) * range_wep.basedmgmod * gronnstalkermod;
    return shotDmg;
}

function multiShotCalc(range_wep, combatRAP) {

    let dmg = rng(range_wep.mindmg,range_wep.maxdmg);
    let multimod = multishot_dmg_inc_ratio * talents.barrage;
    let shotDmg = (range_wep.ammodps * range_wep.speed + combatRAP * 0.2 + dmg + range_wep.flatdmg + SPELLS.multishot.rankdmg) * range_wep.basedmgmod * multimod;
    return shotDmg;
}

function arcaneShotCalc(range_wep, combatRAP) {

    let arcanemod = 1;
    let shotDmg = (combatRAP * 0.2 + SPELLS.arcaneshot.rankdmg) * range_wep.basedmgmod * arcanemod;
    return shotDmg;
}

function aimedShotCalc(range_wep, combatRAP) {

    let dmg = rng(range_wep.mindmg,range_wep.maxdmg);
    let shotDmg = (range_wep.ammodps * range_wep.speed + combatRAP * 0.2 + dmg + range_wep.flatdmg + SPELLS.aimedshot.rankdmg) * range_wep.basedmgmod;
    return shotDmg;
}