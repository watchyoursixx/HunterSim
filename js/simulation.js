var iterations = 10000;
var currentiteration = 0;
var weightiteration = 0;
var maxWeightIteration = 0;
var loopcheck = 0;
var minfighttimer = 180;
var maxfighttimer = 182;
var DPS = 0;
var petDPS = 0;
var mindps = 99999;
var maxdps = 0;
var totalduration = 0;
var totaldmgdone = 0;
var prevtimeend = 0;
var executecodetime = 0.000;
var latency = 0.04;
var currentgcd = 0;

var autodmg = 0;
var steadydmg = 0;
var multidmg = 0;
var arcanedmg = 0;
var raptordmg = 0;
var meleedmg = 0;

var playeruptime = 100;
var petuptime = 100;
var weavetime = 0.8;
var simresults = {};
var isStatWeights = false;
var performancecheck1 = 0;
var performancecheck2 = 0;
const RESULT = {
    HIT: 0,
    MISS: 1,
    DODGE: 2,
    CRIT: 3,
    GLANCE: 4,
    PARTIAL: 5
};

var spellresult = {
    autoshot: { Hit: 0, Miss: 0, Crit: 0 },
    steadyshot: { Hit: 0, Miss: 0, Crit: 0 },
    multishot: { Hit: 0, Miss: 0, Crit: 0 },
    arcaneshot: { Hit: 0, Miss: 0, Crit: 0 },
    raptorstrike: { Hit: 0, Miss: 0, Dodge: 0, Crit: 0 },
    melee: { Hit: 0, Miss: 0, Glance: 0, Dodge: 0, Crit: 0 },
    petattack: { Hit: 0, Miss: 0, Crit: 0, Glance: 0, Dodge: 0 },
    killcommand: { Hit: 0, Miss: 0, Crit: 0, Dodge: 0 },
    primary: { Hit: 0, Miss: 0, Crit: 0, Dodge: 0, Partial: 0 }
};

var spread = [];
var countruns = 0;
var err = 0;
var avgDPS = 0;
var prevDPS = 0;
var sumdmg = 0;
var sumduration = 0;
var steptime = 0;
var steptimeend = 0;
var playertimeend = 0;

var autocount = 0;
var steadycount = 0;
var multicount = 0;
var arcanecount = 0;
var raptorcount = 0;
var meleecount = 0;

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
var manalogarray = [];
var manalogindex = 0;
var filteredcombatlogarray = [];
var combatlogRun = false;

var statweights = { // accurate weights with 50k iterations at 7700 boss in default gear, p4 bis
    Agi: 0.9605143836014804,
    ArP: 0.16027539728151396,
    Crit: 0.8845501877480455,
    Expertise: 0.0017802250089289373,
    Haste: 0.6429055024228614,
    Hit: 1.0169360463006343,
    Int: 0.008956822203713273,
    MAP: 0.005536456701213411,
    MP5: 0.001402849113087541,
    MeleeCrit: 0.00013105937968703075,
    MeleeHit: 0.005894374426353958,
    RAP: 0.38799250528608353,
    RangeCrit: 0.8844191283683585,
    RangeHit: 1.0110416718742803,
    Str: 0,
    relentless:20.35, 
    beasttamer: 22.11, 
    dmgbonus: 0.75, 
    rangedmgbonus: 0.75
}

const RESULTARRAY = ["Hit","Miss","Dodge","Crit","Glance", "Partial Resist"];

/** Begins sim DPS functionality when ran with "Sim DPS - Loop" button. */
function startSync() {

    prevDPS = avgDPS;
    loopSim();

}

function loopSim() {
    return new Promise((resolve, reject) => {
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
        raptorcount = 0;
        meleecount = 0;
        autodmg = 0;
        steadydmg = 0;
        multidmg = 0;
        arcanedmg = 0;
        raptordmg = 0;
        meleedmg = 0;
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
        currentiteration = 0;
        loopcheck = 0;
        
        loopSimHelper(resolve, isStatWeights);
    });
}

function loopSimHelper(callback, isStatWeights) {
    currentiteration++;
    if (isStatWeights) { weightiteration++;}
    if (currentiteration === iterations) {
        combatlogRun = true;
    } else {combatlogRun = false;}
    runSim();
    sumdmg += totaldmgdone;
    sumpetdmg += petdmgdone;
    sumduration += totalduration;

    if (currentiteration < iterations) {
        let visualcheck = currentiteration / 100;

        if (visualcheck > loopcheck){
            loopcheck++;
            setTimeout(() => loopSimHelper(callback, isStatWeights), 0);
            if (isStatWeights) {

                let loadweightbar = (weightiteration / maxWeightIteration) * 100;
                document.getElementById("weightloadbar").style.width =  loadweightbar + "%";
            }
            let loadpercent = (currentiteration / iterations) * 100;
            document.getElementById("loadbar").style.width =  loadpercent + "%";
            displayDPSResults();
        }    
        else {
            loopSimHelper(callback, isStatWeights);
        }
    }
    else if (currentiteration === iterations){
        if (weightiteration === maxWeightIteration && isStatWeights) {
            document.getElementById("weightloadbar").style.width =  100 + "%";
        }
        document.getElementById("loadbar").style.width =  100 + "%";
        
        if (!isStatWeights) {
            finalResults();
          }
          callback();
    }
    avgDPS = (sumdmg+sumpetdmg) / sumduration;

}

function finalResults() {
    avgDPS = (sumdmg+sumpetdmg) / sumduration;
    // sets uptime to a % instead of seconds
    for (let prop in buff_uptimes) {
        buff_uptimes[prop] = (auras[prop].uptime / sumduration * 100).toFixed(2);
    }
    for (let prop in debuff_uptimes){
        debuff_uptimes[prop] = (debuffs[prop].uptime / sumduration * 100).toFixed(2);
    }
    for (let prop in partybuff_uptimes){
        partybuff_uptimes[prop] = (partybuffs[prop].uptime / sumduration * 100).toFixed(2);
    }

    damageResults();
    //console.log(pet);
    //console.log(buff_uptimes);
    //console.log(debuff_uptimes);
    //console.log(partybuff_uptimes);
    //console.log(currentMana);

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

    err = standardError(spread,avgDPS);

    performancecheck2 = performance.now();
    executecodetime = (performancecheck2 - performancecheck1) / 1000; // milliseconds convert to sec
    displayDPSResults();

    let newspread = spread.map(function(each_element){
        return Number(Math.floor(each_element / 5) * 5);
    });
    buildBuffUptimes();
    buildManaData();
    buildData(newspread);
    createHistogram();
    //console.log("*****************");
}
/** Main loop function for simming iterations, ran for each iteration. */
function runSim() {
    maxsteps = rng(minfighttimer * 1000, maxfighttimer * 1000);
    fightduration = maxsteps / 1000;
    steptime = 0;
    let playertimestart = 0;
    steptimeend = 0;
    prevtimeend = 0;
    playertimeend = 0;
    totalduration = 0;
    sunderstart = 0; // start time for sunder check initialized as 0, then steptime + 30 after first apply
    totaldmgdone = 0;
    DPS = 0;
    currentgcd = 0;
    currentMana = Mana;
    petdmgdone = 0;
    spell = '';
    nextpetattack = 1;
    nextpetspell = 1;
    playerattackready = false;
    combatlogarray = [];
    combatlogindex = 0;
    manalogarray = [];
    manalogindex = 0;
    killcommand.ready = false;

    initializeSpells();
    ResetAuras();
    intervalAuraInitializer();

    while (totalduration < fightduration){

    // choices
        onUseSpellCheck();

        updateAuras(steptime);
        petAuras(steptime);

        //console.log("Auto cd: " + SPELLS.autoshot.cd);
        //console.log("spell => "+spell);
        /******* decide spell selection ******/
        if (spell === '') {
    
			//spell = spell_choice_method_A();
			if (queueReadiness) {
                spell = 'readiness';
            }
            else { spell = spell_choice_method_B(); }

            playertimestart = startTime(spell);
            
        }
        //console.log("spell => "+spell);
        killCommandCheck();
        
        nextEvent(playertimestart);
    
        //console.log("step "+ steptime);
        petUpdateFocus();
        updateMana();

        if((combatlogRun) && (playertimeend != prevtimeend)) {
            manalogarray[manalogindex] = [playertimeend, currentMana];
            manalogindex++;
        }
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
function startStepInitialize(){
    fightduration = 180;
    initializeAuras();
    initializeSpells();
    intervalAuraInitializer();
}
/** This is used to step through a fight rather than do a while loop. Useful for debugging. */
function startStepOnly(){
    performancecheck1 = performance.now(); // test debug time check
    combatlogRun = true;
    let playertimestart = 0;
    // choices
    onUseSpellCheck();

    updateAuras(steptime);
    petAuras(steptime);

    /******* decide spell selection ******/
    if (spell === '') {

        if (queueReadiness) {
            spell = 'readiness';
        }
        else { spell = spell_choice_method_B(); }

        playertimestart = startTime(spell);
        
    }
    killCommandCheck();

    nextEvent(playertimestart);
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
    filteredcombatlogarray = combatlogarray.filter(key => key.includes("Player"));
    console.log("*****************");
}
/**Sets the start time for the next player event based on remaining cd's and selected spell. */
function startTime(spell){

    playertimestart = playertimeend;
    playertimestart += (spell === "autoshot") ? Math.max(SPELLS.autoshot.cd,0) : 0;
    playertimestart += (spell === "steadyshot") ? Math.max(SPELLS.steadyshot.cd,0) + latency : 0;
    playertimestart += (spell === "multishot") ? Math.max(SPELLS.multishot.cd,0) + latency : 0;
    playertimestart += (spell === "arcaneshot") ? Math.max(SPELLS.arcaneshot.cd,0) + latency : 0;
    playertimestart += (spell === "raptorstrike") ? Math.max(SPELLS.raptorstrike.cd,0) + latency + 0.5 * weavetime: 0;
    playertimestart += (spell === "melee") ? Math.max(SPELLS.melee.cd,0) + latency + 0.5 * weavetime : 0;
    playertimestart += (spell === "aimedshot") ? Math.max(SPELLS.aimedshot.cd,0) + latency: 0;
    playertimestart += (spell === "readiness") ? Math.max(currentgcd - playertimeend,0) : 0;

    return playertimestart;
}
/**Selection for whether to use kill command or not. */
function killCommandCheck(){
    if((killcommand.cooldown === 0) && killcommand.ready && (currentMana >= 75)) {
        petspell = 'kill command';
        currentMana = (auras.beastwithin.timer > 0) ? currentMana - 0.8 * 75 : currentMana - 75;
        let result = 0;
        procMana('',result);
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
function nextEvent(playertimestart){

    update();
    let rangehastemod =  range_wep.speed / rangespeed;

    if(playerattackready === false){

        if(spell === 'autoshot'){
            SPELLS.autoshot.cast = 0.5 / rangehastemod;
            playertimeend = SPELLS.autoshot.cast + playertimestart;
            if(combatlogRun) {
                combatlogarray[combatlogindex] = playertimestart.toFixed(3) + " - Player starts casting Auto Shot (" + SPELLS.autoshot.cast.toFixed(3) + "s cast). eWS => " + rangespeed.toFixed(2);
                combatlogindex++;
            }
        }
        else if (spell === 'steadyshot'){
            SPELLS.steadyshot.cast = 1.5 / rangehastemod;
            currentgcd = playertimestart + 1.5; // gcd
            //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
            playertimeend = SPELLS.steadyshot.cast + playertimestart;
            if(combatlogRun) {
                combatlogarray[combatlogindex] = playertimestart.toFixed(3) + " - Player starts casting Steady Shot (" + SPELLS.steadyshot.cast.toFixed(3) + "s cast). Next GCD => " + (Math.round(currentgcd * 1000) / 1000).toFixed(3) + "s";
                combatlogindex++;
            }
        }
        else if (spell === 'multishot'){
            SPELLS.multishot.cast = 0.5 / rangehastemod;
            currentgcd = playertimestart + 1.5; // gcd
            //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
            playertimeend = SPELLS.multishot.cast + playertimestart;
            if(combatlogRun) {
                combatlogarray[combatlogindex] = playertimestart.toFixed(3) + " - Player starts casting Multi Shot (" + SPELLS.multishot.cast.toFixed(3) + "s cast). Next GCD => " + (Math.round(currentgcd * 1000) / 1000).toFixed(3) + "s";
                combatlogindex++;
            }
        }
        else if (spell === 'arcaneshot'){
            currentgcd = playertimestart + 1.5; // gcd
            //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
            playertimeend = SPELLS.arcaneshot.cast + playertimestart;
            if(combatlogRun) {
                combatlogarray[combatlogindex] = playertimestart.toFixed(3) + " - Player casts Arcane Shot. Next GCD => " + (Math.round(currentgcd * 1000) / 1000).toFixed(3) + "s";
                combatlogindex++;
            }
        }
        else if (spell === 'raptorstrike'){
            playertimeend = playertimestart;
        }
        else if (spell === 'melee'){
            playertimeend = playertimestart;
        }
        else if (spell === 'readiness'){
            currentgcd = playertimestart + 1; // gcd
            //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
            playertimeend = playertimestart;
            if(combatlogRun) {
                combatlogarray[combatlogindex] = playertimestart.toFixed(3) + " - Player casts Readiness. Next GCD => " + (Math.round(currentgcd * 1000) / 1000).toFixed(3) + "s";
                combatlogindex++;
            }
            readiness.cooldown = 300;
            auras.rapid.cooldown = 0;
            queueReadiness = false;
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
		if (spell === 'melee' || spell === 'raptorstrike'){
            playertimeend += 0.5 * weavetime;
			steptimeend = playertimeend;
		}
		else {
			steptimeend = playertimeend;
        }
        steptime = steptimeend - prevtimeend;
        updateSpellCDs(spell);
        playerattackready = false;
        spell = '';
    }
}

/** attempt at creating spell choices based on a ratio of speed and damage */
function spell_choice_method_B(){
/*
problematic cases: raptor + arcane, multi + arcane + raptor
*/
	let t_ready_auto = SPELLS.autoshot.cd;
	let t_ready_steady = SPELLS.steadyshot.cd;
	let t_ready_multi = SPELLS.multishot.cd;
	let t_ready_arcane = SPELLS.arcaneshot.cd;
	let t_ready_raptor = SPELLS.raptorstrike.cd;
	let t_ready_melee = SPELLS.melee.cd;
	
    let steadyuse = (SPELLS.steadyshot.cost <= currentMana) && SPELLS.steadyshot.enable && (t_ready_steady <= t_ready_auto); // check if cost is usable or not
    let multiuse = (SPELLS.multishot.cost <= currentMana) && SPELLS.multishot.enable && (t_ready_multi <= t_ready_auto);
    let arcaneuse = (SPELLS.arcaneshot.cost <= currentMana) && SPELLS.arcaneshot.enable && (t_ready_arcane <= t_ready_auto);
    let raptoruse = (SPELLS.raptorstrike.cost <= currentMana) && SPELLS.raptorstrike.enable && (t_ready_raptor <= t_ready_auto);
    let meleeuse = SPELLS.melee.enable && (t_ready_melee <= t_ready_auto);
	
	let h = rangespeed / range_wep.speed;

	let dmg_auto = exp_dmg_AutoShot(range_wep, combatRAP);
	let dps_auto = dmg_auto/rangespeed;

	let dmg_steady = 0;
	let dps_steady = 0;

	let dmg_multi = 0;
	let dps_multi = 0;

	let dmg_arcane = 0;
	let dps_arcane = 0;
	
	let dmg_raptor = 0;
	let dps_raptor = 0;
	
	let dmg_melee = 0;
	let dps_melee = 0;
	
	if(steadyuse){
		dmg_steady = exp_dmg_SteadyShot(range_wep, combatRAP);
		dps_steady = dmg_steady/1.5;
	}
	if(multiuse){
		dmg_multi = exp_dmg_MultiShot(range_wep, combatRAP);
		dps_multi = dmg_multi/(10 + 0.5*h);
	}
	if(arcaneuse){
		dmg_arcane = exp_dmg_ArcaneShot(range_wep, combatRAP);
		dps_arcane = dmg_arcane/(6 - talents.imp_arc_shot);
	}
	if(raptoruse){
		dmg_raptor = exp_dmg_RaptorStrike(mainhand_wep, combatMAP);
		dps_raptor = dmg_raptor/6;
	}
	if(meleeuse){
		dmg_melee = exp_dmg_MeleeSwing(mainhand_wep, combatMAP);
		dps_melee = dmg_melee/meleespeed;
	}
	
	let melee_window_raptor = Math.max(0, Math.min(t_ready_steady, t_ready_auto) - t_ready_raptor - 0.5 * weavetime);
	let melee_window_melee = Math.max(0, Math.min(t_ready_steady, t_ready_auto) - t_ready_melee - 0.5 * weavetime);
	if(melee_window_raptor > 0.1 && raptoruse){
		return "raptorstrike";
	}
	if(melee_window_melee > 0.1 && meleeuse){
		return "melee";
	}
	
	let t_equi_steady2auto = t_ready_auto + (t_ready_auto + 0.5*h - t_ready_steady) * dps_steady / dps_auto - 1.5*h - latency;
	steadyuse = steadyuse && (t_ready_steady <= t_equi_steady2auto);
 
	if(steadyuse){
		if(t_ready_steady + 1.5*h < t_ready_auto - latency){
			//no clipping of auto via casting steady
			return "steadyshot";
		}
	}
	let clip_multi2auto = Math.max(0, t_ready_multi + 0.5*h + latency - t_ready_auto);
	let clip_steady2auto = Math.max(0, t_ready_steady + 1.5*h + latency - t_ready_auto);
	let dmg_gain_arcane = (arcaneuse) ? dmg_arcane : 0;
	let dmg_gain_multi = (multiuse) ? dmg_multi - clip_multi2auto * dps_auto : 0;
	let dmg_gain_steady = (steadyuse) ? dmg_steady - clip_steady2auto * dps_auto : 0;
	
	if(dmg_gain_steady > dmg_gain_multi && dmg_gain_steady > dmg_gain_arcane){
		return "steadyshot";
	}
	
	if(dmg_gain_steady < dmg_gain_multi &&  dmg_gain_multi > dmg_gain_arcane){
		return "multishot";
	}
	
	if(dmg_gain_steady < dmg_gain_arcane &&  dmg_gain_multi < dmg_gain_arcane){
		return "arcaneshot";
	}

	return "autoshot";
}

function statWeightLoop(){
    isStatWeights = true;
    useAverages = true;

    statweights = { Str: 0, Agi: 0, Int: 0, RAP: 0, RangeHit: 0, RangeCrit: 0, 
        Haste: 0, ArP: 0, MAP: 0, MeleeHit: 0, MeleeCrit: 0, Expertise: 0, MP5: 0, Hit:0, Crit:0,
        relentless:0, beasttamer: 0, dmgbonus: 0, rangedmgbonus: 0
    }
    let basedps = 0;
    let performance1 = performance.now(); // test debug time check
    let olditerations = iterations;
    iterations = 20000;
    weightiteration = 0;
    maxWeightIteration = iterations * 13;

        
    loopSim().then(() => {
        basedps = avgDPS;
        // ************** AGI *******************
        custom = {str: 0,agi: 50,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        iterations = iterations/2;
        return loopSim();       
    }).then(() => {
        // more followup work
        statweights.Agi = (avgDPS - basedps)/50;
        custom = {str: 0,agi: -50,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.Agi = (Math.abs((avgDPS - basedps)/50)+statweights.Agi) / 2;
        // ************** RAP *******************
        custom = {str: 0,agi: 0,int: 0,RAP: 100,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.RAP = Math.max((avgDPS - basedps) / 100, 0);
        custom = {str: 0,agi: 0,int: 0,RAP: -100,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.RAP = (Math.abs((avgDPS - basedps)/100)+statweights.RAP) / 2;
        // ************** RANGECRIT *******************
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 50,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.RangeCrit = Math.max((avgDPS - basedps) / 50, 0);
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: -50,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.RangeCrit = (Math.abs((avgDPS - basedps)/50)+statweights.RangeCrit) / 2;
        // ************** RANGEHIT *******************
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: -30,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.RangeHit = Math.max((basedps - avgDPS) / 30, 0);
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: -30,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => { // save range hit
        // more followup work
        statweights.RangeHit = (Math.abs((avgDPS - basedps)/30)+statweights.RangeHit) / 2;
        // ************** HASTE *******************
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 100,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.Haste = Math.max((avgDPS - basedps) / 100, 0);
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: -100,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.Haste = (Math.abs((avgDPS - basedps)/100)+statweights.Haste) / 2;
        // ************** ArP *******************
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 100,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.ArP = Math.max((avgDPS - basedps) / 100, 0);
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: -100,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.ArP = (Math.abs((avgDPS - basedps)/100)+statweights.ArP) / 2;
        // ************** MAP *******************
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 100,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.MAP = Math.max((avgDPS - basedps) / 100, 0);
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: -100,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.MAP = (Math.abs((avgDPS - basedps)/100)+statweights.MAP) / 2;
        // ************** MELEE HIT *******************
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: -30,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.MeleeHit = Math.max((basedps - avgDPS) / 30, 0);
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: -30,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.MeleeHit = (Math.abs((avgDPS - basedps)/30)+statweights.MeleeHit) / 2;
        // ************** MELEE CRIT *******************
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 50,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.MeleeCrit = Math.max((avgDPS - basedps) / 50, 0);
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: -50,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.MeleeCrit = (Math.abs((avgDPS - basedps)/50)+statweights.MeleeCrit) / 2;
        // ************** EXPERTISE *******************
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 20,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.Expertise = Math.max((avgDPS - basedps) / 20, 0);
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: -20,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.Expertise = (Math.abs((avgDPS - basedps)/20)+statweights.Expertise) / 2;
        // ************** MP5 *******************
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 50};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.MP5 = Math.max((avgDPS - basedps) / 50, 0);
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: -50};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.MP5 = (Math.abs((avgDPS - basedps)/50)+statweights.MP5) / 2;
        // ************** INTELLECT *******************
        custom = {str: 0,agi: 0,int: 50,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.Int = Math.max((avgDPS - basedps) / 50, 0);
        custom = {str: 0,agi: 0,int: -50,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.Int = (Math.abs((avgDPS - basedps)/50)+statweights.Int) / 2;
        // ************* RESET AND DISPLAY ****************
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        console.log(statweights);
        calcBaseStats();
        let performance2 = performance.now(); // test debug time check
        executecodetime = (performance2 - performance1) / 1000; // milliseconds convert to sec
        displayDPSResults();
        displayStatWeights();
        iterations = olditerations;
        useAverages = false;
        isStatWeights = false;
        statweights.Crit = statweights.RangeCrit + statweights.MeleeCrit;
        statweights.Hit = statweights.RangeHit + statweights.MeleeHit;
        storeData();
        console.log("*****************");
    }).catch((e) => {
        alert(`LoopSim error: ${JSON.stringify(e)}`);
    });
}

function trinketSimLoop(){
    isStatWeights = true;
    useAverages = true;

    //let basedps = 0;
    let performance1 = performance.now(); // test debug time check
    let olditerations = iterations;
    iterations = 10000;
    weightiteration = 0;
    maxWeightIteration = iterations * 20;
    let oldtrink1 = gear.trinket1;
    let oldtrink2 = gear.trinket2;

    // initialize trinket baseline
    gear.trinket1 = { id: 23835 };
    gear.trinket2 = { id: 23835 };
    let basedps = 0;
    let DPSdiff = [];
    let loopnum = 0;
    initialize();
    let trinketlist = [
        {id: 21670, name: "Badge of the Swarmguard" },
        {id: 23041, name: "Slayer's Crest" },
        {id: 23206, name: "Mark of the Champion" },
        {id: 24128, name: "Figurine - Nightseye Panther" },
        {id: 28034, name: "Hourglass of the Unraveller" },
        {id: 28121, name: "Icon of Unyielding Courage" },
        {id: 28288, name: "Abacus of Violent Odds" },
        {id: 28579, name: "Romulo's Poison Vial" },
        {id: 28830, name: "Dragonspine Trophy" },
        {id: 29383, name: "Bloodlust Brooch" },
        {id: 30627, name: "Tsunami Talisman" },
        {id: 31856, name: "Darkmoon Card: Crusade" },
        {id: 32487, name: "Ashtongue Talisman of Swiftness" },
        {id: 32505, name: "Madness of the Betrayer" },
        {id: 32654, name: "Crystalforged Trinket" },
        {id: 32658, name: "Badge of Tenacity" },
        {id: 33831, name: "Berserker's Call" },
        {id: 34427, name: "Blackened Naaru Sliver" },
        {id: 35702, name: "Figurine - Shadowsong Panther" }

    ];
    loopSim().then(() => {
        basedps = avgDPS;
        // ************** AGI *******************
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        initialize();
        return loopSim();       
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        initialize();
        return loopSim();
    }).then(() => {
        // more followup work

        // ************** RAP *******************
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        initialize();
        return loopSim();
    }).then(() => {
        // more followup work

        // ************** RANGECRIT *******************
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        initialize();
        return loopSim();
    }).then(() => {
        // more followup work

        // ************** RANGEHIT *******************
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        initialize();
        return loopSim();
    }).then(() => { // save range hit
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        // ************** HASTE *******************

        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        // ************** ArP *******************

        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        // ************** MAP *******************

        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        // ************** MELEE HIT *******************

        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        // ************** MELEE CRIT *******************

        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        // ************** EXPERTISE *******************

        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        // more followup work

        // ************* RESET AND DISPLAY ****************
        gear.trinket1 = oldtrink1;
        gear.trinket2 = oldtrink2;
        initialize();
        let performance2 = performance.now(); // test debug time check
        executecodetime = (performance2 - performance1) / 1000; // milliseconds convert to sec
        displayDPSResults();
        //displayStatWeights();
        console.log(DPSdiff);
        trinketDPS = DPSdiff;
        iterations = olditerations;
        useAverages = false;
        isStatWeights = false;

        console.log("*****************");
    }).catch((e) => {
        alert(`LoopSim2 error: ${JSON.stringify(e)}`);
    });
}