
function autoShotCalc(range_wep, combatRAP) {

    let dmg = rng(range_wep.mindmg,range_wep.maxdmg);
    let autoShotDmg = (range_wep.ammodps * range_wep.speed + combatRAP * range_wep.speed / 14 + dmg + range_wep.flatdmg) * range_wep.basedmgmod;

    return autoShotDmg;
}