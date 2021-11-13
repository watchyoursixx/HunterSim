var iterations = 10000;
var minfighttimer = 244;
var maxfighttimer = 245;
var DPS = 0;
var mindps = 99999;
var maxdps = 0;
var totalduration = 0;
var previousduration = 0;
var executecodetime = 0.000;
var RESULT = {HIT: 0,MISS: 1,DODGE: 2,CRIT: 3,GLANCE: 4};
var spread = [];
var countruns = 0;
var err = 0;
const RESULTARRAY = ["Hit","Miss","Dodge","Crit","Glance"]; // debugging

function startSync() {
    performancecheck1 = performance.now(); // test debug time check
    spread = [];
    countruns = 0;
    err = 0;
    mindps = 99999;
    maxdps = 0;
    for (iteration = 1; iteration <= iterations; ++iteration) {
        runSim();
    }

    console.log("total damage: " + totaldmgdone);
    console.log("duration: " + (Math.round(totalduration * 100) / 100));

    const standardDeviation = (arr, usePopulation = false) => {
        const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
        return Math.sqrt(
          arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /
            (arr.length - (usePopulation ? 0 : 1))
        );
    };

    err = standardDeviation(spread);
    performancecheck2 = performance.now();
    executecodetime = (performancecheck2 - performancecheck1) / 1000; // milliseconds convert to sec
    displayDPSResults();
    //console.log("autos: " + autocount);
}

function runSim() {
    maxsteps = rng(minfighttimer * 1000, maxfighttimer * 1000);
    fightduration = maxsteps / 1000;
    step = 0;
    totaldmgdone = 0;
    totalduration = 0;
    autocount = 0;
    previousduration = 0;
    initializeAuras();

    while (totalduration < fightduration){
        steptime = totalduration - previousduration;
        auras.trinket1.timer = (auras.trinket1.cooldown === 0) ? auras.trinket1.duration : 0;
        auras.trinket1.cooldown = (auras.trinket1.timer === auras.trinket1.duration) ? auras.trinket1.basecd: auras.trinket1.cooldown;
        auras.trinket2.timer = (auras.trinket2.cooldown === 0) ? auras.trinket2.duration : 0;
        auras.trinket2.cooldown = (auras.trinket2.timer === auras.trinket2.duration) ? auras.trinket2.basecd: auras.trinket2.cooldown;
    // review timing of CD above
        attackRange(steptime);
        
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
        previousduration = totalduration;
        totalduration = Math.min(maxfighttimer, totalduration + rangespeed);
        //console.log(totalduration);
    }
    //console.log("fight end");
    DPS = totaldmgdone / totalduration;
    if (DPS < mindps) { mindps = DPS; }
    if (DPS > maxdps) { maxdps = DPS; }
    //spread[countruns] = DPS;
    //countruns++;
}

