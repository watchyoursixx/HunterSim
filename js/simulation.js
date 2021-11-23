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
    GLANCE: 4
};

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
var spell = '';
var nextpetattack = 1;
var nextpetspell = 1;
var playerattackready = false;
var petautocount = 0;
var petkccount = 0;
var petprimarycount = 0;
var sumpetdmg = 0;


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
    petautocount = 0;
    petkccount = 0;
    petprimarycount = 0;
    sumpetdmg = 0;
    pet.frenzy.uptime = 0;
    pet.ferocious.uptime = 0;

    for (iteration = 1; iteration <= iterations; ++iteration) {
        runSim();
        sumdmg += totaldmgdone;
        sumpetdmg += petdmgdone;
        sumduration += totalduration;
    }
    avgDPS = (sumdmg+sumpetdmg) / sumduration;
    console.log("steadys => "+ steadycount/iterations);
    console.log("steady avg => "+steadydmg/(steadycount));
    console.log("autos => " + autocount/iterations);
    console.log("auto avg => "+autodmg/(autocount));
    console.log("pet autos => "+petautocount / iterations);
    console.log("pet kc => "+ petkccount / iterations);
    console.log("pet spells => "+ petprimarycount / iterations);
    console.log("pet dmg => "+sumpetdmg / iterations);
    console.log("pet frenzy uptime "+pet.frenzy.uptime / sumduration);
    console.log("pet ferocious uptime "+pet.ferocious.uptime / sumduration);
    console.log("total damage: " + sumdmg/iterations);
    console.log("duration: " + (Math.round(sumduration/iterations * 100) / 100));
    console.log(pet);
    console.log(auras);
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
// for debugging 1 fight
function startStepOnly(){
    performancecheck1 = performance.now(); // test debug time check
   
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
    petAuras(steptime);

    //console.log("Auto cd: " + SPELLS.autoshot.cd);
    //console.log("spell => "+spell);
    /******* decide spell selection ******/
    if (spell === '') {

        spell = spell_choice_method_A();
        //spell = spell_choice_method_B();
        startTime(spell);
        
    }
    killCommandCheck();
    //console.log("spell => "+spell);
    nextEvent();

    petUpdateFocus();
    updateMana();
    console.log("step "+ steptime);
    prevtimeend = steptimeend;
    totalduration = Math.min(maxfighttimer, steptimeend);
    avgDPS = totaldmgdone / totalduration;
    //console.log("steadys => "+ steadycount);
    //console.log("autos => " + autocount);
    console.log("pet damage: " + petdmgdone);
    console.log("total damage: " + totaldmgdone);
    console.log("duration: " + (Math.round(totalduration * 1000) / 1000));
    performancecheck2 = performance.now();
    executecodetime = (performancecheck2 - performancecheck1) / 1000; // milliseconds convert to sec
    displayDPSResults();
    //console.log("step time => " + (Math.round(steptime * 1000) / 1000));
    console.log(auras);
    console.log(pet);
    console.log("*****************");
}
function startTime(spell){

    playertimestart = playertimeend;
    playertimestart += (spell === "autoshot") ? Math.max(SPELLS.autoshot.cd,0) : 0;
    playertimestart += (spell === "steadyshot") ? Math.max(SPELLS.steadyshot.cd,0) + latency : 0;
    playertimestart += (spell === "multishot") ? Math.max(SPELLS.multishot.cd,0) + latency : 0;
    playertimestart += (spell === "arcaneshot") ? Math.max(SPELLS.arcaneshot.cd,0) + latency : 0;
    playertimestart += (spell === "raptorstrike") ? Math.max(SPELLS.raptorstrike.cd,0) + latency : 0;
    playertimestart += (spell === "aimedshot") ? Math.max(SPELLS.aimedshot.cd,0) + latency : 0;
    //console.log("time start => "+(Math.round(playertimestart * 1000) / 1000));
    return playertimestart;
}
function killCommandCheck(){
    if((killcommand.cooldown === 0) && killcommand.ready && (currentMana >= 75)) {
        petspell = 'kill command';
        currentMana = (auras.beastwithin.timer > 0) ? currentMana - 0.8 * 75 : currentMana - 75;
        let result = 1;
        updateMana(result);
        petSpell(petspell);
        killcommand.cooldown = 5;
        killcommand.ready = false;
        //console.log("kill command used");
    }
    return;
}
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
            SPELLS.steadyshot.cd = 1.5 - SPELLS.steadyshot.cast;
            currentgcd = playertimestart + 1.5; // gcd
            //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
            playertimeend = SPELLS.steadyshot.cast + playertimestart;
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

function spell_choice_method_A(){
    // steady
    if ((SPELLS.autoshot.cd > 1.1) && (SPELLS.steadyshot.cost <= currentMana)) {
        return "steadyshot";
                
    } else if ((rangespeed < 1.8) && (SPELLS.autoshot.cd > 0.4) && (SPELLS.steadyshot.cd < 0.6) && (SPELLS.steadyshot.cost <= currentMana)) {
        return "steadyshot";
    } 
    else { 
        return "autoshot"; 
}

}

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