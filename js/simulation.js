var iterations = 10000;
var minfighttimer = 69;
var maxfighttimer = 70;
var DPS = 0;
var mindps = 99999;
var maxdps = 0;
var totalduration = 0;
var totaldmgdone = 0;
var prevtimeend = 0;
var executecodetime = 0.000;
var latency = 0.05;
var currentgcd = 0;
var autodmg = 0;
var steadydmg = 0;
var sharedtrinketcd = 0;

var RESULT = {
    HIT: 0,
    MISS: 1,
    DODGE: 2,
    CRIT: 3,
    GLANCE: 4
};

var spread = [];
var countruns = 0;
var err = 0;
var avgDPS = 0;
var sumdmg = 0;
var sumduration = 0;
var steptime = 0;
var steptimestart = 0;
var steptimeend = 0;
var autoarray = [];
var autocount = 0;

const RESULTARRAY = ["Hit","Miss","Dodge","Crit","Glance"]; // debugging

function startSync() {
    performancecheck1 = performance.now(); // test debug time check
    spread = [];
    countruns = 0;
    err = 0;
    mindps = 99999;
    maxdps = 0;
    sumdmg = 0;
    sumduration = 0;
    autocount = 0;
    steadycount = 0;
    autodmg = 0;
    steadydmg = 0;
    for (iteration = 1; iteration <= iterations; ++iteration) {
        runSim();
        sumdmg += totaldmgdone;
        sumduration += totalduration;
    }
    avgDPS = sumdmg / sumduration;
    console.log("steadys => "+ steadycount/iterations);
    console.log("steady avg => "+steadydmg/(steadycount));
    console.log("autos => " + autocount/iterations);
    console.log("auto avg => "+autodmg/(autocount));
    console.log("total damage: " + sumdmg/iterations);
    console.log("duration: " + (Math.round(sumduration/iterations * 100) / 100));

    /*const standardDeviation = (arr, usePopulation = false) => {
        const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
        return Math.sqrt(
          arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /
            (arr.length - (usePopulation ? 0 : 1))
        );
    };*/
    //console.time();
    //err = standardDeviation(spread);
    //console.timeEnd();
    performancecheck2 = performance.now();
    executecodetime = (performancecheck2 - performancecheck1) / 1000; // milliseconds convert to sec
    displayDPSResults();
    //console.log(autoarray);
    //console.log(donearray);
    //console.log(RAParray);
    //console.log(auras.naarusliver);
    //console.log(auras.hourglass);
    //console.log("autos: " + autocount);
    console.log("*****************")
}

function runSim() {
    maxsteps = rng(minfighttimer * 1000, maxfighttimer * 1000);
    fightduration = maxsteps / 1000;
    step = 0;
    totaldmgdone = 0;
    totalduration = 0;
    steptime = 0;
    steptimestart = 0;
    steptimeend = 0;
    prevtimeend = 0;
    DPS = 0;
    currentgcd = 0;
    currentMana = Mana;
    initializeAuras();

    while (totalduration < fightduration){

    // choices
        if(auras.drums.enable && auras.drums.cooldown === 0){
            auras.drums.timer = (auras.drums.cooldown === 0) ? auras.drums.duration : auras.drums.timer; // set timer
            auras.drums.cooldown = (auras.drums.timer === auras.drums.duration) ? auras.drums.basecd: auras.drums.cooldown; // set cd
            //console.log("drums used");
        }
        //else if(auras.potion.enable && auras.potion.cooldown === 0) {potionHandling(); console.log("potion used");}
        if(auras.lust.enable && auras.lust.cooldown === 0){
            auras.lust.timer = (auras.lust.cooldown === 0) ? auras.lust.duration : auras.lust.timer; // set timer
            auras.lust.cooldown = (auras.lust.timer === auras.lust.duration) ? auras.lust.basecd: auras.lust.cooldown; // set cd
            //console.log("lust used");
        }
        if(auras.rapid.enable && auras.rapid.cooldown === 0){
            auras.rapid.timer = (auras.rapid.cooldown === 0) ? auras.rapid.duration : auras.rapid.timer; // set timer
            auras.rapid.cooldown = (auras.rapid.timer === auras.rapid.duration) ? auras.rapid.basecd: auras.rapid.cooldown; // set cd
            //console.log("rapid used");
        }
        if(auras.berserk.enable && auras.berserk.cooldown === 0){
            auras.berserk.timer = (auras.berserk.cooldown === 0) ? auras.berserk.duration : auras.berserk.timer; // set timer
            auras.berserk.cooldown = (auras.berserk.timer === auras.berserk.duration) ? auras.berserk.basecd: auras.berserk.cooldown; // set cd
            //console.log("berserk used");
        }
        if(auras.bloodfury.enable && auras.bloodfury.cooldown === 0){
            auras.bloodfury.timer = (auras.bloodfury.cooldown === 0) ? auras.bloodfury.duration : auras.bloodfury.timer; // set timer
            auras.bloodfury.cooldown = (auras.bloodfury.timer === auras.bloodfury.duration) ? auras.bloodfury.basecd: auras.bloodfury.cooldown; // set cd
            //console.log("bloodfury used");
        }
        if(auras.beastwithin.enable && auras.beastwithin.cooldown === 0){
            auras.beastwithin.timer = (auras.beastwithin.cooldown === 0) ? auras.beastwithin.duration : auras.beastwithin.timer; // set timer
            auras.beastwithin.cooldown = (auras.beastwithin.timer === auras.beastwithin.duration) ? auras.beastwithin.basecd: auras.beastwithin.cooldown; // set cd
            //console.log("beastwithin used");
        }

        if(auras.swarmguard.enable && auras.swarmguard.cooldown === 0){
            auras.swarmguard.timer = (auras.swarmguard.cooldown === 0) ? auras.swarmguard.duration : auras.swarmguard.timer; // set timer
            auras.swarmguard.cooldown = (auras.swarmguard.timer === auras.swarmguard.duration) ? auras.swarmguard.basecd: auras.swarmguard.cooldown; // set cd
            //console.log("swarmguard used");
        }
        if(auras.abacus.enable && (auras.abacus.cooldown === 0) && (sharedtrinketcd === 0)){
            auras.abacus.timer = (auras.abacus.cooldown === 0) ? auras.abacus.duration : auras.abacus.timer; // set timer
            auras.abacus.cooldown = (auras.abacus.timer === auras.abacus.duration) ? auras.abacus.basecd: auras.abacus.cooldown; // set cd
            sharedtrinketcd = auras.abacus.duration;
            //console.log("abacus used");
        }
        else if(auras.unyieldingcourage.enable && (auras.unyieldingcourage.cooldown === 0) && (sharedtrinketcd === 0)){
            auras.unyieldingcourage.timer = (auras.unyieldingcourage.cooldown === 0) ? auras.unyieldingcourage.duration : auras.unyieldingcourage.timer; // set timer
            auras.unyieldingcourage.cooldown = (auras.unyieldingcourage.timer === auras.unyieldingcourage.duration) ? auras.unyieldingcourage.basecd: auras.unyieldingcourage.cooldown; // set cd
            sharedtrinketcd = auras.unyieldingcourage.duration;
            //console.log("unyieldingcourage used");
        }
        else if(auras.aptrink1.enable && (auras.aptrink1.cooldown === 0) && (sharedtrinketcd === 0)) {
            auras.aptrink1.timer = (auras.aptrink1.cooldown === 0) ? auras.aptrink1.duration : auras.aptrink1.timer; // set timer
            auras.aptrink1.cooldown = (auras.aptrink1.timer === auras.aptrink1.duration) ? auras.aptrink1.basecd: auras.aptrink1.cooldown; // set cd
            sharedtrinketcd = auras.aptrink1.duration;
            //console.log("aptrink1 used");
        }
        else if(auras.aptrink2.enable && (auras.aptrink2.cooldown === 0) && (sharedtrinketcd === 0)) {
            auras.aptrink2.timer = (auras.aptrink2.cooldown === 0) ? auras.aptrink2.duration : auras.aptrink2.timer; // set timer
            auras.aptrink2.cooldown = (auras.aptrink2.timer === auras.aptrink2.duration) ? auras.aptrink2.basecd: auras.aptrink2.cooldown; // set cd
            sharedtrinketcd = auras.aptrink2.duration;            
            //console.log("aptrink2 used");        
        }
        else if(auras.tenacity.enable && (auras.tenacity.cooldown === 0) && (sharedtrinketcd === 0)){
            auras.tenacity.timer = (auras.tenacity.cooldown === 0) ? auras.tenacity.duration : auras.tenacity.timer; // set timer
            auras.tenacity.cooldown = (auras.tenacity.timer === auras.tenacity.duration) ? auras.tenacity.basecd: auras.tenacity.cooldown; // set cd
            sharedtrinketcd = auras.tenacity.duration;
            //console.log("tenacity used");
        }

        updateAuras(steptime);

        /******* decide spell selection ******/
        // steady
        if (SPELLS.autoshot.cd > 1.1) {
            (SPELLS.steadyshot.cost <= currentMana) ? spell = "steadyshot" : spell = "autoshot";
                    
        } else if ((rangespeed < 1.8) && (SPELLS.autoshot.cd > 0.4) && (SPELLS.steadyshot.cd < 0.6)) {
            (SPELLS.steadyshot.cost <= currentMana) ? spell = "steadyshot" : spell = "autoshot";
        } else { spell = "autoshot"; }

        /*auto:
        aimed:
        arcane:
        multi:
        raptor:
        melee:
        readiness:
        traps:
        stings:
        rune:
        */
        
        /******* do stuff with spell    ******/
        startTime(spell);
        cast(spell);

        steptime = steptimeend - prevtimeend;
        prevtimeend = steptimeend;
        totalduration = steptimeend;
        //console.log("total damage: " + totaldmgdone);
        //console.log("duration: " + (Math.round(totalduration * 100) / 100));
    }

    DPS = totaldmgdone / totalduration;
    if (DPS < mindps) { mindps = DPS; }
    if (DPS > maxdps) { maxdps = DPS; }
    spread[countruns] = DPS;
    countruns++;
}
// for debugging 1 fight
function startStepOnly(){
    performancecheck1 = performance.now(); // test debug time check
    //initializeAuras();
    if(auras.drums.enable && auras.drums.cooldown === 0){
        auras.drums.timer = (auras.drums.cooldown === 0) ? auras.drums.duration : auras.drums.timer; // set timer
        auras.drums.cooldown = (auras.drums.timer === auras.drums.duration) ? auras.drums.basecd: auras.drums.cooldown; // set cd
        //console.log("drums used");
    }
    //else if(auras.potion.enable && auras.potion.cooldown === 0) {potionHandling(); console.log("potion used");}
    if(auras.lust.enable && auras.lust.cooldown === 0){
        auras.lust.timer = (auras.lust.cooldown === 0) ? auras.lust.duration : auras.lust.timer; // set timer
        auras.lust.cooldown = (auras.lust.timer === auras.lust.duration) ? auras.lust.basecd: auras.lust.cooldown; // set cd
        //console.log("lust used");
    }
    if(auras.rapid.enable && auras.rapid.cooldown === 0){
        auras.rapid.timer = (auras.rapid.cooldown === 0) ? auras.rapid.duration : auras.rapid.timer; // set timer
        auras.rapid.cooldown = (auras.rapid.timer === auras.rapid.duration) ? auras.rapid.basecd: auras.rapid.cooldown; // set cd
        //console.log("rapid used");
    }
    if(auras.berserk.enable && auras.berserk.cooldown === 0){
        auras.berserk.timer = (auras.berserk.cooldown === 0) ? auras.berserk.duration : auras.berserk.timer; // set timer
        auras.berserk.cooldown = (auras.berserk.timer === auras.berserk.duration) ? auras.berserk.basecd: auras.berserk.cooldown; // set cd
        //console.log("berserk used");
    }
    if(auras.bloodfury.enable && auras.bloodfury.cooldown === 0){
        auras.bloodfury.timer = (auras.bloodfury.cooldown === 0) ? auras.bloodfury.duration : auras.bloodfury.timer; // set timer
        auras.bloodfury.cooldown = (auras.bloodfury.timer === auras.bloodfury.duration) ? auras.bloodfury.basecd: auras.bloodfury.cooldown; // set cd
        //console.log("bloodfury used");
    }
    if(auras.beastwithin.enable && auras.beastwithin.cooldown === 0){
        auras.beastwithin.timer = (auras.beastwithin.cooldown === 0) ? auras.beastwithin.duration : auras.beastwithin.timer; // set timer
        auras.beastwithin.cooldown = (auras.beastwithin.timer === auras.beastwithin.duration) ? auras.beastwithin.basecd: auras.beastwithin.cooldown; // set cd
        //console.log("beastwithin used");
    }

    if(auras.swarmguard.enable && auras.swarmguard.cooldown === 0){
        auras.swarmguard.timer = (auras.swarmguard.cooldown === 0) ? auras.swarmguard.duration : auras.swarmguard.timer; // set timer
        auras.swarmguard.cooldown = (auras.swarmguard.timer === auras.swarmguard.duration) ? auras.swarmguard.basecd: auras.swarmguard.cooldown; // set cd
        //console.log("swarmguard used");
    }
    if(auras.abacus.enable && (auras.abacus.cooldown === 0) && (sharedtrinketcd === 0)){
        auras.abacus.timer = (auras.abacus.cooldown === 0) ? auras.abacus.duration : auras.abacus.timer; // set timer
        auras.abacus.cooldown = (auras.abacus.timer === auras.abacus.duration) ? auras.abacus.basecd: auras.abacus.cooldown; // set cd
        sharedtrinketcd = auras.abacus.duration;
        //console.log("abacus used");
    }
    else if(auras.unyieldingcourage.enable && (auras.unyieldingcourage.cooldown === 0) && (sharedtrinketcd === 0)){
        auras.unyieldingcourage.timer = (auras.unyieldingcourage.cooldown === 0) ? auras.unyieldingcourage.duration : auras.unyieldingcourage.timer; // set timer
        auras.unyieldingcourage.cooldown = (auras.unyieldingcourage.timer === auras.unyieldingcourage.duration) ? auras.unyieldingcourage.basecd: auras.unyieldingcourage.cooldown; // set cd
        sharedtrinketcd = auras.unyieldingcourage.duration;
        //console.log("unyieldingcourage used");
    }
    else if(auras.aptrink1.enable && (auras.aptrink1.cooldown === 0) && (sharedtrinketcd === 0)) {
        auras.aptrink1.timer = (auras.aptrink1.cooldown === 0) ? auras.aptrink1.duration : auras.aptrink1.timer; // set timer
        auras.aptrink1.cooldown = (auras.aptrink1.timer === auras.aptrink1.duration) ? auras.aptrink1.basecd: auras.aptrink1.cooldown; // set cd
        sharedtrinketcd = auras.aptrink1.duration;
        //console.log("aptrink1 used");
    }
    else if(auras.aptrink2.enable && (auras.aptrink2.cooldown === 0) && (sharedtrinketcd === 0)) {
        auras.aptrink2.timer = (auras.aptrink2.cooldown === 0) ? auras.aptrink2.duration : auras.aptrink2.timer; // set timer
        auras.aptrink2.cooldown = (auras.aptrink2.timer === auras.aptrink2.duration) ? auras.aptrink2.basecd: auras.aptrink2.cooldown; // set cd
        sharedtrinketcd = auras.aptrink2.duration;            
        //console.log("aptrink2 used");        
    }
    else if(auras.tenacity.enable && (auras.tenacity.cooldown === 0) && (sharedtrinketcd === 0)){
        auras.tenacity.timer = (auras.tenacity.cooldown === 0) ? auras.tenacity.duration : auras.tenacity.timer; // set timer
        auras.tenacity.cooldown = (auras.tenacity.timer === auras.tenacity.duration) ? auras.tenacity.basecd: auras.tenacity.cooldown; // set cd
        sharedtrinketcd = auras.tenacity.duration;
        //console.log("tenacity used");
    }
    updateAuras(steptime);
    //steptime = steptimeend - steptimestart;

    /******* decide spell selection ******/
    if (SPELLS.autoshot.cd > 0.6) {
        (SPELLS.steadyshot.cost <= currentMana) ? spell = "steadyshot" : spell = "autoshot";
        
    } else { spell = "autoshot"; }
    /******* do stuff with spell    ******/
    startTime(spell);
    cast(spell);

    steptime = steptimeend - prevtimeend;
    //console.log("step "+ steptime);
    prevtimeend = steptimeend;
    totalduration = Math.min(maxfighttimer, steptimeend);
    avgDPS = totaldmgdone / totalduration;
    console.log("steadys => "+ steadycount);
    console.log("autos => " + autocount);
    console.log("total damage: " + totaldmgdone);
    console.log("duration: " + (Math.round(totalduration * 1000) / 1000));
    performancecheck2 = performance.now();
    executecodetime = (performancecheck2 - performancecheck1) / 1000; // milliseconds convert to sec
    displayDPSResults();
}
function startTime(spell){

    steptimestart = steptimeend;
    steptimestart += (spell === "autoshot") ? Math.max(SPELLS.autoshot.cd,0) : 0;
    steptimestart += (spell === "steadyshot") ? Math.max(SPELLS.steadyshot.cd,0) + latency : 0;
    steptimestart += (spell === "multishot") ? Math.max(SPELLS.multishot.cd,0) + latency : 0;
    steptimestart += (spell === "arcaneshot") ? Math.max(SPELLS.arcaneshot.cd,0) + latency : 0;
    steptimestart += (spell === "raptorstrike") ? Math.max(SPELLS.raptorstrike.cd,0) + latency : 0;
    steptimestart += (spell === "aimedshot") ? Math.max(SPELLS.aimedshot.cd,0) + latency : 0;
    //console.log("time start => "+(Math.round(steptimestart * 1000) / 1000));
    return steptimestart;
}
