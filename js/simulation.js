var iterations = 10000;
var minfighttimer = 243;
var maxfighttimer = 245;
var DPS = 0;
var petDPS = 0;
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
var multidmg = 0;
var arcanedmg = 0;
var sharedtrinketcd = 0;
var playeruptime = 100;
var petuptime = 100;
var weavetime = 0.6;
var huntersinraid = 4;

var RESULT = {
    HIT: 0,
    MISS: 1,
    DODGE: 2,
    CRIT: 3,
    GLANCE: 4,
    PARTIAL: 5
};

var Result_Auto = {
    Hit: 0,
    Miss: 0,
    Crit: 0
}

var Result_Steady = {
    Hit: 0,
    Miss: 0,
    Crit: 0
}

var Result_Multi = {
    Hit: 0,
    Miss: 0,
    Crit: 0
}

var Result_Arcane = {
    Hit: 0,
    Miss: 0,
    Crit: 0
}

var Result_Primary = {
    Hit: 0,
    Miss: 0,
    Crit: 0,
    Partial: 0
}

var spread = [];
var countruns = 0;
var err = 0;
var avgDPS = 0;
var sumdmg = 0;
var sumduration = 0;
var steptime = 0;
var playertimestart = 0;
var steptimeend = 0;
var playertimeend = 0;
var autoarray = [];
var autocount = 0;
var steadycount = 0;
var multicount = 0;
var arcanecount = 0;
var spell = '';
var nextpetattack = 1;
var nextpetspell = 1;
var playerattackready = false;
var petautocount = 0;
var petkccount = 0;
var petprimarycount = 0;
var sumpetdmg = 0;
var fightduration = 0;
var combatlogarray = [];
var combatlogindex = 0;
var filteredcombatlogarray = [];
var combatlogRun = false;

const RESULTARRAY = ["Hit","Miss","Dodge","Crit","Glance", "Partial Resist"]; // debugging
/** Begins sim DPS functionality when ran with "Sim DPS - Loop" button. */
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
    multicount = 0;
    arcanecount = 0;
    autodmg = 0;
    steadydmg = 0;
    multidmg = 0;
    arcanedmg = 0;
    petautocount = 0;
    petkccount = 0;
    petprimarycount = 0;
    sumpetdmg = 0;
    pet.frenzy.uptime = 0;
    pet.ferocious.uptime = 0;
    petdmg.kcdmg = 0;
    petdmg.attackdmg = 0;
    petdmg.primarydmg = 0;

    resultCountInitialize();
    initializeAuras();
    // loop through iterations, run example combat log as the last iteration
    for (iteration = 1; iteration <= iterations; ++iteration) {
        if (iteration === iterations) {
            combatlogRun = true;
        } else {combatlogRun = false;}
        runSim();
        sumdmg += totaldmgdone;
        sumpetdmg += petdmgdone;
        sumduration += totalduration;
    }
    avgDPS = (sumdmg+sumpetdmg) / sumduration;

    // sets uptime to a % instead of seconds
    for (let prop in buff_uptimes) {
        buff_uptimes[prop] = (auras[prop].uptime / sumduration * 100).toFixed(2);
    }
    for (let prop in debuff_uptimes){
        debuff_uptimes[prop] = (debuffs[prop].uptime / sumduration * 100).toFixed(2);
    }

    console.log("steadys => "+ steadycount/iterations);
    console.log("steady miss %: "+ Result_Steady.Miss / steadycount);
    console.log("steady hit %: " + Result_Steady.Hit / steadycount);
    console.log("steady crit %: " + Result_Steady.Crit / steadycount);
    console.log("steady avg => "+steadydmg/(steadycount));
    console.log("autos => " + autocount/iterations);
    console.log("Auto miss %: "+ Result_Auto.Miss / autocount);
    console.log("Auto hit %: " + Result_Auto.Hit / autocount);
    console.log("Auto crit %: " + Result_Auto.Crit / autocount);
    console.log("auto avg => "+autodmg/(autocount));
    console.log("multis => " + multicount/iterations);
    console.log("Multi miss %: "+ Result_Multi.Miss / multicount);
    console.log("Multi hit %: " + Result_Multi.Hit / multicount);
    console.log("Multi crit %: " + Result_Multi.Crit / multicount);
    console.log("multi avg => "+multidmg/(multicount));
    console.log("arcanes => " + arcanecount/iterations);
    console.log("Arcane miss %: "+ Result_Arcane.Miss / arcanecount);
    console.log("Arcane hit %: " + Result_Arcane.Hit / arcanecount);
    console.log("Arcane crit %: " + Result_Arcane.Crit / arcanecount);
    console.log("Arcane avg => "+arcanedmg/(arcanecount));
    console.log("pet autos => "+petautocount / iterations);
    console.log("pet kc => "+ petkccount / iterations);
    console.log("pet spells => "+ petprimarycount / iterations);
    console.log("pet kc dmg => " + petdmg.kcdmg / iterations);
    console.log("pet attack dmg => " + petdmg.attackdmg / iterations);
    console.log("pet primary dmg => " + petdmg.primarydmg / iterations);
    //console.log("pet spell miss %: "+ Result_Primary.Miss / petprimarycount);
    //console.log("pet spell hit %: " + Result_Primary.Hit / petprimarycount);
    //console.log("pet spell crit %: " + Result_Primary.Crit / petprimarycount);
    //console.log("pet spell Partial resist %: " + Result_Primary.Partial / petprimarycount);
    console.log("pet dmg => "+sumpetdmg / iterations);
    let frenzyup = pet.frenzy.uptime / sumduration * 100;
    console.log("pet frenzy uptime => "+ frenzyup.toFixed(2) + " %");
    let ferocup = pet.ferocious.uptime / sumduration * 100;
    console.log("pet ferocious uptime => "+ ferocup.toFixed(2) + " %");
    console.log("total damage: " + sumdmg/iterations);
    console.log("duration: " + (Math.round(sumduration/iterations * 100) / 100));
    //console.log(pet);
    console.log(buff_uptimes);
    console.log(debuff_uptimes);
    console.log(currentMana);
    function standardError(x, u_x) {
        let n = x.length;
        let a = 0;
        x.forEach(
            function (x_i, index) {
                let b = (x_i - u_x);
                a += b * b;
            }
        );
        let stddev = Math.sqrt(a/(n-1));
        return stddev / (Math.sqrt(n));
    }
    //console.time();
    err = standardError(spread,avgDPS);
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
    console.log("*****************");
}
/** Main loop function for simming iterations, ran for each iteration. */
function runSim() {
    maxsteps = rng(minfighttimer * 1000, maxfighttimer * 1000);
    fightduration = maxsteps / 1000;
    step = 0;
    totaldmgdone = 0;
    totalduration = 0;
    steptime = 0;
    playertimestart = 0;
    steptimeend = 0;
    prevtimeend = 0;
    playertimeend = 0;
    sunderstart = 0; // start time for sunder check initialized as 0, then steptime + 30 after first apply
    DPS = 0;
    currentgcd = 0;
    currentMana = Mana;
    petdmgdone = 0;
    spell = '';
    nextpetattack = 1;
    nextpetspell = 1;
    playerattackready = false;
    pet.frenzy.timer = 0;
    pet.ferocious.timer = 0;
    combatlogarray = [];
    combatlogindex = 0;

    initializeSpells();
    ResetAuras();
    debuffInitializer();

    while (totalduration < fightduration){

    // choices
        onUseSpellCheck();

        updateAuras(steptime);
        petAuras(steptime);

        //console.log("Auto cd: " + SPELLS.autoshot.cd);
        //console.log("spell => "+spell);
        /******* decide spell selection ******/
        if (spell === '') {
    
            spell = spell_choice_method_A();
            //spell = spell_choice_method_B();
            startTime(spell);
            
        }
        //console.log("spell => "+spell);
        killCommandCheck();
        nextEvent();
    
        //console.log("step "+ steptime);
        petUpdateFocus();
        updateMana();
        prevtimeend = steptimeend;
        totalduration = steptimeend;
        //console.log("total damage: " + totaldmgdone);
        //console.log("duration: " + (Math.round(totalduration * 100) / 100));
    }
    petDPS = petdmgdone / totalduration;
    DPS = totaldmgdone / totalduration + petDPS;
    if (DPS < mindps) { mindps = DPS; }
    if (DPS > maxdps) { maxdps = DPS; }
    spread[countruns] = DPS;
    countruns++;
}
/** This is used to step through a fight rather than do a while loop. Useful for debugging. */
function startStepOnly(){
    performancecheck1 = performance.now(); // test debug time check
    combatlogRun = true;
    // choices
    onUseSpellCheck();

    updateAuras(steptime);
    petAuras(steptime);

    /******* decide spell selection ******/
    if (spell === '') {

        spell = spell_choice_method_A();
        //spell = spell_choice_method_B();
        startTime(spell);
        
    }
    killCommandCheck();

    nextEvent();
    //console.log("time end => "+(Math.round(steptimeend * 1000) / 1000));
    petUpdateFocus();
    updateMana();
    //console.log("step "+ steptime);
    prevtimeend = steptimeend;
    totalduration = Math.min(maxfighttimer, steptimeend);
    avgDPS = totaldmgdone / totalduration;
    //console.log("steadys => "+ steadycount);
    //console.log("autos => " + autocount);
    //console.log("pet damage: " + petdmgdone);
    console.log("total damage: " + totaldmgdone);
    console.log("duration: " + (Math.round(totalduration * 1000) / 1000));
    performancecheck2 = performance.now();
    executecodetime = (performancecheck2 - performancecheck1) / 1000; // milliseconds convert to sec
    displayDPSResults();
    //console.log("step time => " + (Math.round(steptime * 1000) / 1000));
    //console.log(auras);
    //console.log(pet);
    filteredcombatlogarray = combatlogarray.filter(pet => pet.includes("Player"));
    console.log("*****************");
}
/**Sets the start time for the next player event based on remaining cd's and selected spell. */
function startTime(spell){

    playertimestart = playertimeend;
    playertimestart += (spell === "autoshot") ? Math.max(SPELLS.autoshot.cd,0) : 0;
    playertimestart += (spell === "steadyshot") ? Math.max(SPELLS.steadyshot.cd,0) + latency : 0;
    playertimestart += (spell === "multishot") ? Math.max(SPELLS.multishot.cd,0) + latency : 0;
    playertimestart += (spell === "arcaneshot") ? Math.max(SPELLS.arcaneshot.cd,0) + latency : 0;
    playertimestart += (spell === "raptorstrike") ? Math.max(SPELLS.raptorstrike.cd,0) + latency : 0;
    playertimestart += (spell === "aimedshot") ? Math.max(SPELLS.aimedshot.cd,0) + latency : 0;

    return playertimestart;
}
/**Selection for whether to use kill command or not. */
function killCommandCheck(){
    if((killcommand.cooldown === 0) && killcommand.ready && (currentMana >= 75)) {
        petspell = 'kill command';
        currentMana = (auras.beastwithin.timer > 0) ? currentMana - 0.8 * 75 : currentMana - 75;
        let result = 1;
        updateMana(result);
        petSpell(petspell);
        killcommand.cooldown = 5;
        killcommand.ready = false;
        if(auras.beastlord.enable){
            auras.beastlord.timer = auras.beastlord.duration;
        }
        //console.log("kill command used");
    }
    return;
}
/**This function decides which event to choose next for player or pet, kind of like an event queue. */
function nextEvent(){

    update();
    let rangehastemod =  range_wep.speed / rangespeed;

    if(playerattackready === false){

        if(spell === 'autoshot'){
            SPELLS.autoshot.cast = 0.5 / rangehastemod;
            playertimeend = SPELLS.autoshot.cast + playertimestart;
        }
        else if (spell === 'steadyshot'){
            SPELLS.steadyshot.cast = 1.5 / rangehastemod;
            currentgcd = playertimestart + 1.5; // gcd
            //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
            playertimeend = SPELLS.steadyshot.cast + playertimestart;
        }
        else if (spell === 'multishot'){
            SPELLS.multishot.cast = 0.5 / rangehastemod;
            currentgcd = playertimestart + 1.5; // gcd
            //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
            playertimeend = SPELLS.multishot.cast + playertimestart;
        }
        else if (spell === 'arcaneshot'){
            currentgcd = playertimestart + 1.5; // gcd
            //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
            playertimeend = SPELLS.arcaneshot.cast + playertimestart;
        }
        playerattackready = true;
        //console.log(SPELLS);
    }
    //console.log("next pet "+nextpetattack);
    //console.log("next pet spell "+nextpetspell);
    //console.log("next player "+playertimeend);
    if (nextpetattack < playertimeend && nextpetspell >= nextpetattack) { // check for pet white hit

        let step = petAttack();
        steptimeend = step;
        steptime = steptimeend - prevtimeend;
        updateSpellCDs();
    } 
    else if (nextpetspell < playertimeend){ // check for pet yellows
        if(pet.focus >= pet.primarycost){
            let petspell = 'primary'; // decision pet primary/secondary - random or based on CD?
            pet.focus -= pet.primarycost;
            let step = petSpell(petspell);
            steptimeend = step;
            steptime = steptimeend - prevtimeend;
            updateSpellCDs();
        }
        else if (pet.focus < pet.primarycost) { // else if pet yellow impossible
            nextpetspell += 5;
            //console.log("not enough focus");
        }
    }
    else { // do player hit
        cast(spell);
        steptimeend = playertimeend;
        steptime = steptimeend - prevtimeend;
        updateSpellCDs(spell);
        playerattackready = false;
        spell = '';
    }
}
/** attempt at creating spell choices based on known breakpoints */
function spell_choice_method_A(){
    // steady
    let steadyuse = (SPELLS.steadyshot.cost <= currentMana) && SPELLS.steadyshot.enable; // check if cost is usable or not
    let multiuse = (SPELLS.multishot.cost <= currentMana) && SPELLS.multishot.enable;
    let arcaneuse = (SPELLS.arcaneshot.cost <= currentMana) && SPELLS.arcaneshot.enable;
    if ((SPELLS.multishot.cd < 0.8) && multiuse && (SPELLS.autoshot.cd > 0.2) && (rangespeed < 1.8)){
        return "multishot";
    } else if ((SPELLS.autoshot.cd > 1.3) && steadyuse) {
        return "steadyshot";
    } else if ((SPELLS.multishot.cd < 0.8) && multiuse && (SPELLS.autoshot.cd > 0.2)){
        return "multishot";
    } else if ((SPELLS.arcaneshot.cd < 0.8) && arcaneuse && (SPELLS.autoshot.cd > 0.2) && (rangespeed > 1.9)){
        return "arcaneshot";
    } else if ((rangespeed > 2.2) && (SPELLS.autoshot.cd > 0.6) && steadyuse)  {
        return "steadyshot";
    } else if ((rangespeed < 1.8) && (SPELLS.autoshot.cd > 0.4) && (SPELLS.steadyshot.cd < 0.6) && steadyuse) {
        return "steadyshot";
    } 
    else { 
        return "autoshot"; 
}

}

/** attempt at creating spell choices based on a ratio of speed and damage */
function spell_choice_method_B(){
    let h_ = rangespeed / range_wep.speed;

    let cast_steady = 1.5 * h_;
    let cd_steady = 1.5 - cast_steady;

    let cast_auto = h_ / 2;


    let dmg = (range_wep.mindmg + range_wep.maxdmg)/2;
    let gronnstalkermod = currentgear.special.gronnstalker_4p_steady_shot_dmg_ratio;
    let avgcritmod = RangeHitChance * 0.01 * (1 + RangeCritChance * 0.01 * (RangeCritDamage - 1));
    let dmg_steady = (combatRAP * 0.2 + dmg * 2.8 / range_wep.speed + SPELLS.steadyshot.rankdmg) * range_wep.basedmgmod * gronnstalkermod * combatdmgmod * avgcritmod; 

    let dmg_auto = (range_wep.ammodps * range_wep.speed + combatRAP * range_wep.speed / 14 + dmg + range_wep.flatdmg) * range_wep.basedmgmod * combatdmgmod * avgcritmod; 

    let alpha = 2;

    let t_ready_auto = SPELLS.autoshot.cd;
    let point_of_equilibrium = t_ready_auto - (alpha * cast_steady * dmg_auto - dmg_steady * cast_auto) / (alpha * dmg_auto + dmg_steady);

    let t_ready_steady = SPELLS.steadyshot.cd;

    if ((SPELLS.steadyshot.cost <= currentMana) && (t_ready_steady < point_of_equilibrium)) {
        return "steadyshot";
    } 
    else { 
        return "autoshot"; 
    }
}

/** Resets counts of spells used for stats */
function resultCountInitialize() {
    Result_Auto.Hit = 0;
    Result_Auto.Crit = 0;
    Result_Auto.Miss = 0;
    Result_Steady.Hit = 0;
    Result_Steady.Crit = 0;
    Result_Steady.Miss = 0;
    Result_Multi.Hit = 0;
    Result_Multi.Crit = 0;
    Result_Multi.Miss = 0;
    Result_Arcane.Hit = 0;
    Result_Arcane.Crit = 0;
    Result_Arcane.Miss = 0;
    Result_Primary.Hit = 0;
    Result_Primary.Crit = 0;
    Result_Primary.Miss = 0;
    Result_Primary.Partial = 0;
}