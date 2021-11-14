var iterations = 1000;
var minfighttimer = 244;
var maxfighttimer = 245;
var DPS = 0;
var mindps = 99999;
var maxdps = 0;
var totalduration = 0;
var totaldmgdone = 0;
var prevtimeend = 0;
var executecodetime = 0.000;

var RESULT = {
    HIT: 0,
    MISS: 1,
    DODGE: 2,
    CRIT: 3,
    GLANCE: 4
};

var SPELLS = {
    autoshot: {cast:0.5, cd:0, dmg:0, cost:0, duration:0, gcd:false},
    steadyshot: {cast:1.5, cd:0, dmg:0, cost:110, duration:0, gcd:true},

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
    for (iteration = 1; iteration <= iterations; ++iteration) {
        runSim();
        sumdmg += totaldmgdone;
        sumduration += totalduration;
    }
    avgDPS = sumdmg / sumduration;
    console.log("total damage: " + totaldmgdone);
    console.log("duration: " + (Math.round(totalduration * 100) / 100));

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
    console.log(spread);
    console.log("autos: " + autocount);
    console.log("*****************")
}

function runSim() {
    maxsteps = rng(minfighttimer * 1000, maxfighttimer * 1000);
    fightduration = maxsteps / 1000;
    step = 0;
    totaldmgdone = 0;
    totalduration = 0;
    autocount = 0;
    steptime = 0;
    steptimestart = 0;
    steptimeend = 0;
    initializeAuras();

    while (totalduration < fightduration){
        updateAuras(steptime);
        /******* decide spell selection ******/
        spell = "autoshot";

    // choices
    /*
    drums:
    potion:
    lust:
    rapid:
    berserk:
    bloodfury:
    swarmguard:
    beastwithin:
    trinket1:
    trinket2:
    auto:
    aimed:
    steady:
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
        totalduration = Math.min(maxsteps, steptimeend);
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
    updateAuras(steptime);
    //steptime = steptimeend - steptimestart;
    /******* decide spell selection ******/
    spell = "autoshot";
    /******* do stuff with spell    ******/
    startTime(spell);
    cast(spell);
    steptime = steptimeend - prevtimeend;

    console.log("step "+ steptime);
    prevtimeend = steptimeend;
    totalduration = Math.min(maxfighttimer, steptimeend);
    avgDPS = totaldmgdone / totalduration;

    console.log("total damage: " + totaldmgdone);
    console.log("duration: " + (Math.round(totalduration * 100) / 100));
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
    //console.log("after cd: "+(Math.round(steptimestart * 100) / 100));
    return steptimestart;
}

function stopTime(spell){

}