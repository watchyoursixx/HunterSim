var rapidcd = 300;
var lustcd = 600;
var sunderstart = 0;
var racialenable = true;
var beastenable = true;
var temp_oil = false;
var sharedtrinketcd = 0;
var readiness = {enable:false, cooldown: 0, basecd: 300};
var queueReadiness = false;
var two_min_cds = 120;
var three_min_cds = 180;

var auras = {
    // actives
    drums: {enable:true, timer:0, cooldown:0,basecd:120, duration:30, uptime:0, type:'battle', offset:0},// coded
    potion: {enable:true, timer:0, cooldown:0,basecd:120, duration:15, uptime:0, primary:true, secondary:false, used:"", ticks: 0, offset:0},// coded
    rune: {enable:true, cooldown:0,basecd:120, offset:0},
    abacus: {enable:false, timer:0, cooldown:0,basecd:120, duration:10, uptime:0},// coded
    lust: {enable:true, timer:0, cooldown:0,basecd:lustcd, duration:40, uptime:0, offset:0},// coded
    rapid: {enable:true, timer:0, cooldown:0,basecd:rapidcd, duration:15, uptime:0, offset:0},// coded
    berserk: {enable:false, timer:0, cooldown:0,basecd:180, duration:10, uptime:0, offset:0},// coded
    unyieldingcourage: {enable:false, timer:0,basecd:120, cooldown:0, duration:20, uptime:0},// coded
    bloodfury: {enable:false, timer:0, cooldown:0,basecd:120, duration: 15, uptime:0, offset:0},// coded
    swarmguard: {enable:false, timer:0, cooldown:0,basecd:180, ppm:12, duration:30, stacks:0, uptime:0},// coded
    beastwithin: {enable:true, timer:0, cooldown:0,basecd:120, duration: 18, uptime:0, offset:0},// coded
    tenacity: {enable:false, timer: 0, cooldown:0,basecd:120, duration: 15, uptime:0},// coded
    aptrink1: {enable:false, uptime:0, offset:0, basecd:120},// coded
    aptrink2: {enable:false, uptime:0, offset:0, basecd:120},// coded
    // procs
    dragonspine: {enable:false, timer:0, cooldown:0, ppm:1, duration:10, uptime:0},// coded
    imphawk: {enable:false,timer:0, duration:12, uptime:0},// coded
    beastlord: {enable:false, timer:0, duration:15, uptime:0}, // coded
    executioner: {enable:false, timer:0, ppm:1, duration:15, uptime:0},// coded
    mongoose: {enable:false, timer:0, ppm:1, duration:15, uptime:0},// coded
    madness: {enable:false, timer:0, ppm:1,duration: 10, uptime:0},// coded
    tsunami: {enable:false, timer:0, cooldown:0, procchance:10, duration: 10, uptime:0},// coded
    hourglass: {enable:false, timer:0, cooldown:0, procchance:10, duration: 10, uptime:0},// coded
    naarusliver: {enable:false, timer:0, cooldown:0, procchance:10, duration: 20, stacks: 0, uptime:0},// coded
    eternalchamp: {enable:false, timer:0, cooldown:0, ppm:2, duration: 10, uptime:0},// coded
    donsantos: {enable:false, timer:0, ppm:1, duration: 10, uptime:0},// coded
    mastertact: {enable:false, timer:0, procchance:6, duration: 8, uptime:0},// coded
    ashtongue: {enable:false, timer:0, procchance:15, duration: 8, uptime:0},// coded
    dmccrusade: {enable:false, timer:0, duration: 10, stacks:0, uptime:0}, // coded
    righteous: {enable:false, timer:0, ppm:1, cooldown:0, duration: 10, uptime:0},
    shattered: {enable:false, type:'aldor', timer:0, procchance:15, cooldown:0, duration: 10, uptime: 0},
 
 }

 var partybuffs = {
    unleashedrage: {uptime_g:0, timer:0, duration:10, uptime:0},
    ferociousinsp: {uptime_g:98, timer:0, duration:10, stacks: 1, uptime:0}
 }

 var debuffs = {
    hm: {uptime_g:100, timer:0, duration:120, improved:true, stacks:0, rap:110, map:0, uptime:0},
    exposeweakness: {uptime_g:94, timer:0, duration:7, agi:1000, uptime:0},
    judgewisdom: {uptime_g:98, timer:0, duration:30, uptime:0},
    judgecrusader: {uptime_g:98, timer:0, duration:30, crit:3, uptime:0},
    sunder: {uptime_g:98, timer:0, duration:30, stacktime:5, stacks:1, arp:520, uptime:0},
    faeriefire: {uptime_g:98, timer:0, duration:45, improved:true, hit:0, arp:610, uptime:0},
    impexpose: {uptime_g:90, timer:0, duration:30, arp:3075, uptime:0},
    curseofreck: {uptime_g:98, timer:0, duration:120, arp:800, uptime:0},
    bloodfrenzy: {uptime_g:98, timer:0, duration:12, dmgbonus:1.04, uptime:0},
    curseofele: {uptime_g:98, timer:0, duration:120, improved:true, dmgbonus:1.1, uptime:0},
    misery: {uptime_g:95, timer:0, duration:18, dmgbonus:1.05, uptime:0}
 
 }

 var buff_uptimes = {
    drums: 0,
    potion: 0,
    abacus: 0,
    lust: 0,
    rapid: 0,
    berserk: 0,
    unyieldingcourage: 0,
    bloodfury: 0,
    swarmguard: 0,
    beastwithin: 0,
    tenacity: 0,
    aptrink1: 0,
    aptrink2: 0,
    dragonspine: 0,
    imphawk: 0,
    beastlord: 0,
    executioner: 0,
    mongoose: 0,
    madness: 0,
    tsunami: 0,
    hourglass: 0,
    naarusliver: 0,
    eternalchamp: 0,
    donsantos: 0,
    mastertact: 0,
    ashtongue: 0,
    dmccrusade: 0,
    righteous: 0,
    shattered: 0
}
var debuff_uptimes = {
    hm: 0,
    exposeweakness: 0,
    judgewisdom: 0,
    judgecrusader: 0,
    sunder: 0,
    faeriefire: 0,
    impexpose: 0,
    curseofreck: 0,
    bloodfrenzy: 0,
    curseofele: 0,
    misery: 0
}

var partybuff_uptimes = {
    unleashedrage: 0,
    ferociousinsp: 0
}

/** Initializes auras for procs and actives, ran once per sim */
function initializeAuras() {
    // set up on use AP trinkets diff from the rest of auras
    let aptrink1 = currentgear.auras[gear.trinket1.id] || {};
    let aptrink2 = currentgear.auras[gear.trinket2.id] || {};
    let aptrink1rap = (aptrink1.hasOwnProperty('stats')) ? aptrink1.stats.RAP : 0;
    let aptrink2rap = (aptrink2.hasOwnProperty('stats')) ? aptrink2.stats.RAP : 0;
 
    auras.aptrink1.duration = aptrink1.duration;
    auras.aptrink1.basecd = aptrink1.cd;
    auras.aptrink1.AP = aptrink1rap;
    auras.aptrink1.enable = (!aptrink1.is_proc && auras.aptrink1.AP > 0) ? true : false;
    auras.aptrink1.name = TRINKETS[gear.trinket1.id].name;
    AURA_MAPPER.aptrink1 = auras.aptrink1.name;

    auras.aptrink2.duration = aptrink2.duration;
    auras.aptrink2.basecd = aptrink2.cd;
    auras.aptrink2.AP = aptrink2rap;
    auras.aptrink2.enable = (!aptrink2.is_proc && auras.aptrink2.AP > 0) ? true : false;
    auras.aptrink2.name = TRINKETS[gear.trinket2.id].name;
    AURA_MAPPER.aptrink2 = auras.aptrink2.name;
    
    // proc trinket enables
    auras.dragonspine.enable = ((gear.trinket1.id === 28830) || (gear.trinket2.id === 28830)) ? true : false; // enable dragonspine
    auras.naarusliver.enable = ((gear.trinket1.id === 34427) || (gear.trinket2.id === 34427)) ? true : false; 
    auras.madness.enable = ((gear.trinket1.id === 32505) || (gear.trinket2.id === 32505)) ? true : false; 
    auras.tsunami.enable = ((gear.trinket1.id === 30627) || (gear.trinket2.id === 30627)) ? true : false; 
    auras.hourglass.enable = ((gear.trinket1.id === 28034) || (gear.trinket2.id === 28034)) ? true : false; 
    auras.ashtongue.enable = ((gear.trinket1.id === 32487) || (gear.trinket2.id === 32487)) ? true : false; 
    auras.tenacity.enable = ((gear.trinket1.id === 32658) || (gear.trinket2.id === 32658)) ? true : false; 
    auras.swarmguard.enable = ((gear.trinket1.id === 21670) || (gear.trinket2.id === 21670)) ? true : false; 
    auras.abacus.enable = ((gear.trinket1.id === 28288) || (gear.trinket2.id === 28288)) ? true : false; 
    auras.unyieldingcourage.enable = ((gear.trinket1.id === 28121) || (gear.trinket2.id === 28121)) ? true : false; 
    auras.dmccrusade.enable = ((gear.trinket1.id === 31856) || (gear.trinket2.id === 31856)) ? true : false;
    auras.shattered.enable = (gear.neck.id === 34679) ? true : false;
 
    auras.beastlord.enable = (currentgear.special.beast_lord_4p_kc_arp > 0) ? true : false;
    auras.beastwithin.enable = ((talents.beast_within > 0) && beastenable) ? true : false;
    auras.mastertact.enable = (talents.master_tac > 0) ? true : false;
    auras.donsantos.enable = (gear.range.id === 31323) ? true : false;
    auras.eternalchamp.enable = ((gear.ring1.id === 29301) || (gear.ring2.id === 29301)) ? true : false;
    auras.imphawk.enable = (talents.imp_hawk > 1) ? true : false;
    auras.potion.enable = (auras.potion.primary) ? true : false;

    // check for attachments on mainhand or offhand to apply righteousness or not
    let mainhandcheck = (gear.mainhand.attachment !== undefined) && (gear.mainhand.attachment > 1);
    let offhandcheck = (gear.offhand != undefined) && (gear.offhand.attachment != undefined) && (gear.offhand.attachment > 1);
    if ((gear.offhand === undefined) && (gear.mainhand.attachment > 1)) {
        auras.righteous.enable = (gear.mainhand.attachment === 34539) ? true : false;
    } 
    else if(mainhandcheck && offhandcheck){
        auras.righteous.enable = ((gear.mainhand.attachment === 34539) || (gear.offhand.attachment === 34539)) ? true : false;
    } else {
        auras.righteous.enable = false;
    }

    auras.mongoose.enable = (gear.mainhand.enchant === 27984) ? true : false;
    auras.executioner.enable = (gear.mainhand.enchant === 42974) ? true : false;

    for(let prop in auras){
        auras[prop].uptime = 0;
    }
    
    for(let prop in debuffs){
        debuffs[prop].uptime = 0;
    }

    for(let prop in partybuffs){
        partybuffs[prop].uptime = 0;
    }
 
    if (selectedRace == 3) { // orc
       auras.bloodfury.enable = true;
       auras.berserk.enable = false;
    } else if (selectedRace == 4){ // troll
       auras.berserk.enable = true;
       auras.bloodfury.enable = false;
    } else {
       auras.berserk.enable = false;
       auras.bloodfury.enable = false;
    }
    rapidcd = 300 - talents.rapid_killing * 60;
    auras.rapid.basecd = rapidcd;

    readiness.enable = (talents.readiness > 0) ? true : false;

    return;
 }

 /** resets cds and timers to 0 or an offset if chosen, ran every iteration */
 function ResetAuras(){
    killcommand.cooldown = 0;
    pet.ferocious.timer = 0;
    pet.frenzy.timer = 0;
    
    auras.lust.timer = 0;
    auras.berserk.timer = 0;
    auras.bloodfury.timer = 0;
    auras.abacus.timer = 0;
    auras.drums.timer = 0;
    auras.potion.timer = 0;
    auras.rapid.timer = 0;
    auras.swarmguard.timer = 0;
    auras.unyieldingcourage.timer = 0;
    auras.beastwithin.timer = 0;
    auras.aptrink1.timer = 0;
    auras.aptrink2.timer = 0;
    auras.tenacity.timer = 0;
    auras.tsunami.timer = 0;
    auras.hourglass.timer = 0;
    auras.imphawk.timer = 0;
    auras.beastlord.timer = 0;
    auras.madness.timer = 0;
    auras.executioner.timer = 0;
    auras.mongoose.timer = 0;
    auras.dragonspine.timer = 0;
    auras.naarusliver.timer = 0;
    auras.eternalchamp.timer = 0;
    auras.donsantos.timer = 0;
    auras.mastertact.timer = 0;
    auras.ashtongue.timer = 0;
    auras.dmccrusade.timer = 0;
    auras.righteous.timer = 0;
    auras.shattered.timer = 0;

    auras.lust.cooldown = auras.lust.offset;
    auras.berserk.cooldown = auras.berserk.offset;
    auras.bloodfury.cooldown = auras.bloodfury.offset;
    auras.abacus.cooldown = 0;
    auras.drums.cooldown = auras.drums.offset;
    auras.potion.cooldown = (auras.potion.primary) ? auras.potion.offset : 0;
    auras.rune.cooldown = auras.rune.offset;
    auras.rapid.cooldown = auras.rapid.offset;
    auras.swarmguard.cooldown = 0;
    auras.unyieldingcourage.cooldown = 0;
    auras.beastwithin.cooldown = auras.beastwithin.offset;
    auras.aptrink1.cooldown = auras.aptrink1.offset;
    auras.aptrink2.cooldown = auras.aptrink2.offset;
    auras.tenacity.cooldown = 0;
    auras.tsunami.cooldown = 0;
    auras.hourglass.cooldown = 0;
    auras.dragonspine.cooldown = 0;
    auras.naarusliver.cooldown = 0;
    auras.eternalchamp.cooldown = 0;
    auras.ashtongue.cooldown = 0;
    auras.righteous.cooldown = 0;
    auras.shattered.cooldown = 0;

    debuffs.hm.timer = 0;
    debuffs.exposeweakness.timer = 0;
    debuffs.judgewisdom.timer = 0;
    debuffs.judgecrusader.timer = 0;
    debuffs.sunder.timer = 0;
    debuffs.impexpose.timer = 0;
    debuffs.faeriefire.timer = 0;
    debuffs.curseofreck.timer = 0;
    debuffs.bloodfrenzy.timer = 0;
    debuffs.curseofele.timer = 0;
    debuffs.misery.timer = 0;

    partybuffs.unleashedrage.timer = 0;
    partybuffs.ferociousinsp.timer = 0;

    sharedtrinketcd = 0;
    readiness.cooldown = 0;

    return;
 }

/** Sets cooldowns for certain auras based on spell CD behaviour setting from settings. */
function setSpellCDs(){
    auras.rapid.basecd = (rapidcd === 180) ? three_min_cds : rapidcd;
    auras.swarmguard.basecd = three_min_cds;
    auras.berserk.basecd = three_min_cds;

    auras.bloodfury.basecd = two_min_cds;
    auras.aptrink1.basecd = two_min_cds;
    auras.aptrink2.basecd = two_min_cds;
    auras.tenacity.basecd = two_min_cds;
    auras.drums.basecd = two_min_cds;
    auras.potion.basecd = two_min_cds;
    auras.beastwithin.basecd = two_min_cds;
    auras.unyieldingcourage.basecd = two_min_cds;
    auras.abacus.basecd = two_min_cds;

    return;
}

/** Executes functions related to stepping time values for auras.
 * @param steptime Takes the time for the current step to modify auras and cooldowns.
 */
function updateAuras(steptime) {
    // set timer of on use AP trinkets

    IntervalAuraHandler();
    stepauras(steptime);
    uptimeCalc();

    // proc cooldowns
    if(auras.tsunami.cooldown > 0)            { auras.tsunami.cooldown = Math.max(auras.tsunami.cooldown - steptime,0); } 
    if(auras.hourglass.cooldown > 0)          { auras.hourglass.cooldown = Math.max(auras.hourglass.cooldown - steptime,0); }
    if(auras.dragonspine.cooldown > 0)        { auras.dragonspine.cooldown = Math.max(auras.dragonspine.cooldown - steptime,0); }
    if(auras.naarusliver.cooldown > 0)        { auras.naarusliver.cooldown = Math.max(auras.naarusliver.cooldown - steptime,0); } 
    if(auras.eternalchamp.cooldown > 0)       { auras.eternalchamp.cooldown = Math.max(auras.eternalchamp.cooldown - steptime,0); }
    // active cooldowns
    if(auras.drums.cooldown > 0)              { auras.drums.cooldown = Math.max(auras.drums.cooldown - steptime,0); }
    if(auras.lust.cooldown > 0)               { auras.lust.cooldown = Math.max(auras.lust.cooldown - steptime,0); }
    if(auras.potion.cooldown > 0)             { auras.potion.cooldown = Math.max(auras.potion.cooldown - steptime,0); }
    if(auras.rune.cooldown > 0)               { auras.rune.cooldown = Math.max(auras.rune.cooldown - steptime,0); }
    if(auras.abacus.cooldown > 0)             { auras.abacus.cooldown = Math.max(auras.abacus.cooldown - steptime,0); }
    if(auras.bloodfury.cooldown > 0)          { auras.bloodfury.cooldown = Math.max(auras.bloodfury.cooldown - steptime,0); }
    if(auras.berserk.cooldown > 0)            { auras.berserk.cooldown = Math.max(auras.berserk.cooldown - steptime,0); }
    if(auras.rapid.cooldown > 0)              { auras.rapid.cooldown = Math.max(auras.rapid.cooldown - steptime,0); }
    if(auras.swarmguard.cooldown > 0)         { auras.swarmguard.cooldown = Math.max(auras.swarmguard.cooldown - steptime,0); }
    if(auras.unyieldingcourage.cooldown > 0)  { auras.unyieldingcourage.cooldown = Math.max(auras.unyieldingcourage.cooldown - steptime,0); }
    if(auras.beastwithin.cooldown > 0)        { auras.beastwithin.cooldown = Math.max(auras.beastwithin.cooldown - steptime,0); }
    if(auras.aptrink1.enable && (auras.aptrink1.cooldown > 0))  { auras.aptrink1.cooldown = Math.max(auras.aptrink1.cooldown - steptime,0); }
    if(auras.aptrink2.enable && (auras.aptrink2.cooldown > 0))  { auras.aptrink2.cooldown = Math.max(auras.aptrink2.cooldown - steptime,0); }
    if(auras.tenacity.cooldown > 0)           { auras.tenacity.cooldown = Math.max(auras.tenacity.cooldown - steptime,0); }
    if(auras.righteous.cooldown > 0)          { auras.righteous.cooldown = Math.max(auras.righteous.cooldown - steptime,0); }
    if(auras.shattered.cooldown > 0)          { auras.shattered.cooldown = Math.max(auras.shattered.cooldown - steptime,0); }
    if(readiness.cooldown > 0)                { readiness.cooldown = Math.max(readiness.cooldown - steptime,0); }
    
    return;   
 }

/** Executes steps each aura timer down by steptime.
 * @param steptime Takes the time for the current step to modify auras and cooldowns.
 */
function stepauras(steptime) {
    // actives
    if(auras.lust.timer > 0)               { auras.lust.timer = Math.max(auras.lust.timer - steptime,0); }
    if(auras.berserk.timer > 0)            { auras.berserk.timer = Math.max(auras.berserk.timer - steptime,0); }
    if(auras.bloodfury.timer > 0)          { auras.bloodfury.timer = Math.max(auras.bloodfury.timer - steptime,0); }
    if(auras.abacus.timer > 0)             { auras.abacus.timer = Math.max(auras.abacus.timer - steptime,0); }
    if(auras.drums.timer > 0)              { auras.drums.timer = Math.max(auras.drums.timer - steptime,0); }
    if(auras.potion.timer > 0)             { auras.potion.timer = Math.max(auras.potion.timer - steptime,0); }
    if(auras.rapid.timer > 0)              { auras.rapid.timer = Math.max(auras.rapid.timer - steptime,0); }
    if(auras.swarmguard.timer > 0)         { auras.swarmguard.timer = Math.max(auras.swarmguard.timer - steptime,0); }
    if(auras.unyieldingcourage.timer > 0)  { auras.unyieldingcourage.timer = Math.max(auras.unyieldingcourage.timer - steptime,0); }
    if(auras.beastwithin.timer > 0)        { auras.beastwithin.timer = Math.max(auras.beastwithin.timer - steptime,0); }
    if(auras.aptrink1.timer > 0)           { auras.aptrink1.timer = Math.max(auras.aptrink1.timer - steptime,0); }
    if(auras.aptrink2.timer > 0)           { auras.aptrink2.timer = Math.max(auras.aptrink2.timer - steptime,0); }
    if(auras.tenacity.timer > 0)           { auras.tenacity.timer = Math.max(auras.tenacity.timer - steptime,0); }
    // procs
    if(auras.tsunami.timer > 0)            { auras.tsunami.timer = Math.max(auras.tsunami.timer - steptime,0); }
    if(auras.hourglass.timer > 0)          { auras.hourglass.timer = Math.max(auras.hourglass.timer - steptime,0); }
    if(auras.imphawk.timer > 0)            { auras.imphawk.timer = Math.max(auras.imphawk.timer - steptime,0); }
    if(auras.beastlord.timer > 0)          { auras.beastlord.timer = Math.max(auras.beastlord.timer - steptime,0); }
    if(auras.madness.timer > 0)            { auras.madness.timer = Math.max(auras.madness.timer - steptime,0); }
    if(auras.executioner.timer > 0)        { auras.executioner.timer = Math.max(auras.executioner.timer - steptime,0); }
    if(auras.mongoose.timer > 0)           { auras.mongoose.timer = Math.max(auras.mongoose.timer - steptime,0); }
    if(auras.dragonspine.timer > 0)        { auras.dragonspine.timer = Math.max(auras.dragonspine.timer - steptime,0); }
    if(auras.naarusliver.timer > 0)        { auras.naarusliver.timer = Math.max(auras.naarusliver.timer - steptime,0); }
    if(auras.eternalchamp.timer > 0)       { auras.eternalchamp.timer = Math.max(auras.eternalchamp.timer - steptime,0); }
    if(auras.donsantos.timer > 0)          { auras.donsantos.timer = Math.max(auras.donsantos.timer - steptime,0); }
    if(auras.mastertact.timer > 0)         { auras.mastertact.timer = Math.max(auras.mastertact.timer - steptime,0); }
    if(auras.ashtongue.timer > 0)          { auras.ashtongue.timer = Math.max(auras.ashtongue.timer - steptime,0); }
    if(auras.righteous.timer > 0)          { auras.righteous.timer = Math.max(auras.righteous.timer - steptime,0); }
    if(auras.shattered.timer > 0)          { auras.shattered.timer = Math.max(auras.shattered.timer - steptime,0); }
    // if talented, expose treated like a proc
    if(debuffs.exposeweakness.timer > 0 && talents.exp_weakness > 0)   { debuffs.exposeweakness.timer = Math.max(debuffs.exposeweakness.timer - steptime,0); }
    // the following can go negative so that when it switches from active to inactive the time between steps is kept
    if(debuffs.hm.timer > 0)               { debuffs.hm.timer = debuffs.hm.timer - steptime; }
    if(debuffs.exposeweakness.timer > 0 && talents.exp_weakness === 0)   { debuffs.exposeweakness.timer = debuffs.exposeweakness.timer - steptime; }
    if(debuffs.judgewisdom.timer > 0)      { debuffs.judgewisdom.timer = debuffs.judgewisdom.timer - steptime; }
    if(debuffs.judgecrusader.timer > 0)    { debuffs.judgecrusader.timer = debuffs.judgecrusader.timer - steptime; }
    if(debuffs.sunder.timer > 0)           { debuffs.sunder.timer = debuffs.sunder.timer - steptime; }
    if(debuffs.impexpose.timer > 0)        { debuffs.impexpose.timer = debuffs.impexpose.timer - steptime; }
    if(debuffs.faeriefire.timer > 0)       { debuffs.faeriefire.timer = debuffs.faeriefire.timer - steptime; }
    if(debuffs.curseofreck.timer > 0)      { debuffs.curseofreck.timer = debuffs.curseofreck.timer - steptime; }
    if(debuffs.bloodfrenzy.timer > 0)      { debuffs.bloodfrenzy.timer = debuffs.bloodfrenzy.timer - steptime; }
    if(debuffs.curseofele.timer > 0)      { debuffs.curseofele.timer = debuffs.curseofele.timer - steptime; }
    if(debuffs.misery.timer > 0)      { debuffs.misery.timer = debuffs.misery.timer - steptime; }

    if(partybuffs.unleashedrage.timer > 0)      { partybuffs.unleashedrage.timer = partybuffs.unleashedrage.timer - steptime; }
    if(partybuffs.ferociousinsp.timer > 0)      { partybuffs.ferociousinsp.timer = partybuffs.ferociousinsp.timer - steptime; }
    
    // count down the timer on shared CDs for trinkets
    if(sharedtrinketcd > 0) { sharedtrinketcd = Math.max(sharedtrinketcd - steptime,0); }

    // reset stacks
    if(auras.swarmguard.timer === 0){ auras.swarmguard.stacks = 0;}
    if(auras.naarusliver.timer === 0){ auras.naarusliver.stacks = 0;}
    if(auras.dmccrusade.timer === 0){ auras.dmccrusade.stacks = 0;}

    return;
}

/** totals the uptime in seconds of the buffs to be later extracted for % uptimes */
function uptimeCalc() {
    // actives
    if(auras.lust.timer > 0)               { auras.lust.uptime += Math.min(auras.lust.timer,steptime); }
    if(auras.berserk.timer > 0)            { auras.berserk.uptime += Math.min(auras.berserk.timer,steptime); }
    if(auras.bloodfury.timer > 0)          { auras.bloodfury.uptime += Math.min(auras.bloodfury.timer,steptime); }
    if(auras.abacus.timer > 0)             { auras.abacus.uptime += Math.min(auras.abacus.timer,steptime); }
    if(auras.drums.timer > 0)              { auras.drums.uptime += Math.min(auras.drums.timer,steptime); }
    if(auras.potion.timer > 0)             { auras.potion.uptime += Math.min(auras.potion.timer,steptime); }
    if(auras.rapid.timer > 0)              { auras.rapid.uptime += Math.min(auras.rapid.timer,steptime); }
    if(auras.swarmguard.timer > 0)         { auras.swarmguard.uptime += Math.min(auras.swarmguard.timer,steptime); }
    if(auras.unyieldingcourage.timer > 0)  { auras.unyieldingcourage.uptime += Math.min(auras.unyieldingcourage.timer,steptime); }
    if(auras.beastwithin.timer > 0)        { auras.beastwithin.uptime += Math.min(auras.beastwithin.timer,steptime); }
    if(auras.aptrink1.timer > 0)           { auras.aptrink1.uptime += Math.min(auras.aptrink1.timer,steptime); }
    if(auras.aptrink2.timer > 0)           { auras.aptrink2.uptime += Math.min(auras.aptrink2.timer,steptime); }
    // procs
    if(auras.tsunami.timer > 0)            { auras.tsunami.uptime += Math.min(auras.tsunami.timer,steptime); }
    if(auras.hourglass.timer > 0)          { auras.hourglass.uptime += Math.min(auras.hourglass.timer,steptime); }
    if(auras.imphawk.timer > 0)            { auras.imphawk.uptime += Math.min(auras.imphawk.timer,steptime); }
    if(auras.beastlord.timer > 0)          { auras.beastlord.uptime += Math.min(auras.beastlord.timer,steptime); }
    if(auras.madness.timer > 0)            { auras.madness.uptime += Math.min(auras.madness.timer,steptime); }
    if(auras.executioner.timer > 0)        { auras.executioner.uptime += Math.min(auras.executioner.timer,steptime); }
    if(auras.mongoose.timer > 0)           { auras.mongoose.uptime += Math.min(auras.mongoose.timer,steptime); }
    if(auras.dragonspine.timer > 0)        { auras.dragonspine.uptime += Math.min(auras.dragonspine.timer,steptime); }
    if(auras.naarusliver.timer > 0)        { auras.naarusliver.uptime += Math.min(auras.naarusliver.timer,steptime); }
    if(auras.eternalchamp.timer > 0)       { auras.eternalchamp.uptime += Math.min(auras.eternalchamp.timer,steptime); }
    if(auras.donsantos.timer > 0)          { auras.donsantos.uptime += Math.min(auras.donsantos.timer,steptime); }
    if(auras.mastertact.timer > 0)         { auras.mastertact.uptime += Math.min(auras.mastertact.timer,steptime); }
    if(auras.ashtongue.timer > 0)          { auras.ashtongue.uptime += Math.min(auras.ashtongue.timer,steptime); }
    if(auras.dmccrusade.timer > 0)         { auras.dmccrusade.uptime += Math.min(auras.dmccrusade.timer,steptime); }
    if(auras.righteous.timer > 0)          { auras.righteous.uptime += Math.min(auras.righteous.timer,steptime); }
    if(auras.shattered.timer > 0)         { auras.shattered.uptime += Math.min(auras.shattered.timer,steptime); }

    if(debuffs.exposeweakness.timer > 0 && talents.exp_weakness > 0) { debuffs.exposeweakness.uptime += Math.min(debuffs.exposeweakness.timer,steptime); }
    // for debugging debuffs - tracking actual uptime
    if(debuffs.exposeweakness.timer > 0 && !debuffs.exposeweakness.inactive && talents.exp_weakness === 0) { debuffs.exposeweakness.uptime += steptime; }
    else if(debuffs.exposeweakness.timer < 0) {
       debuffs.exposeweakness.uptime += steptime;
    }
    if(debuffs.hm.timer > 0 && !debuffs.hm.inactive) { debuffs.hm.uptime += steptime; }
    else if(debuffs.hm.timer < 0) {
       debuffs.hm.uptime += steptime;
    }
    if(debuffs.judgewisdom.timer > 0 && !debuffs.judgewisdom.inactive) { debuffs.judgewisdom.uptime += steptime; }
    else if(debuffs.judgewisdom.timer < 0) {
       debuffs.judgewisdom.uptime += steptime;
    }
    if(debuffs.judgecrusader.timer > 0 && !debuffs.judgecrusader.inactive) { debuffs.judgecrusader.uptime += steptime; }
    else if(debuffs.judgecrusader.timer < 0) {
       debuffs.judgecrusader.uptime += steptime;
    }
    if(debuffs.sunder.timer > 0 && !debuffs.sunder.inactive) { debuffs.sunder.uptime += steptime; }
    else if(debuffs.sunder.timer < 0) {
       debuffs.sunder.uptime += steptime;
    }
    if(debuffs.impexpose.timer > 0 && !debuffs.impexpose.inactive) { debuffs.impexpose.uptime += steptime; }
    else if(debuffs.impexpose.timer < 0) {
       debuffs.impexpose.uptime += steptime;
    }
    if(debuffs.faeriefire.timer > 0 && !debuffs.faeriefire.inactive) { debuffs.faeriefire.uptime += steptime; }
    else if(debuffs.faeriefire.timer < 0) {
       debuffs.faeriefire.uptime += steptime;
    }
    if(debuffs.curseofreck.timer > 0 && !debuffs.curseofreck.inactive) { debuffs.curseofreck.uptime += steptime; }
    else if(debuffs.curseofreck.timer < 0) {
       debuffs.curseofreck.uptime += steptime;
    }
    if(debuffs.bloodfrenzy.timer > 0 && !debuffs.bloodfrenzy.inactive) { debuffs.bloodfrenzy.uptime += steptime; }
    else if(debuffs.bloodfrenzy.timer < 0) {
       debuffs.bloodfrenzy.uptime += steptime;
    }
    if(debuffs.curseofele.timer > 0 && !debuffs.curseofele.inactive) { debuffs.curseofele.uptime += steptime; }
    else if(debuffs.curseofele.timer < 0) {
       debuffs.curseofele.uptime += steptime;
    }
    if(debuffs.misery.timer > 0 && !debuffs.misery.inactive) { debuffs.misery.uptime += steptime; }
    else if(debuffs.misery.timer < 0) {
       debuffs.misery.uptime += steptime;
    }

    if(partybuffs.unleashedrage.timer > 0 && !partybuffs.unleashedrage.inactive) { partybuffs.unleashedrage.uptime += steptime; }
    else if(partybuffs.unleashedrage.timer < 0) {
       partybuffs.unleashedrage.uptime += steptime;
    }
    if(partybuffs.ferociousinsp.timer > 0 && !partybuffs.ferociousinsp.inactive) { partybuffs.ferociousinsp.uptime += steptime; }
    else if(partybuffs.ferociousinsp.timer < 0) {
       partybuffs.ferociousinsp.uptime += steptime;
    }
    return;
}

/** Initializes auras that are triggered on a fixed interval. Sets the refresh rate 
  * and interval for a given fight length. */
function intervalAuraInitializer(){

    // hunters mark
    if(debuffs.hm.uptime_g > 0){
        let hm_total_time = (debuffs.hm.uptime_g === 100) ? fightduration : (fightduration * debuffs.hm.uptime_g) / 100;
        let hm_refresh_int = Math.ceil(hm_total_time / debuffs.hm.duration);
        let hm_refresh_dec = (hm_total_time / debuffs.hm.duration) - Math.floor(hm_total_time / debuffs.hm.duration);
        debuffs.hm.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.hm.inactive = false; // flag for debuff being active or not
        debuffs.hm.interval = (fightduration - hm_total_time) / (hm_refresh_int);; // interval of inactive
        debuffs.hm.full_refresh = hm_refresh_int; // # of applications as whole integer
        debuffs.hm.part_refresh_dur = hm_refresh_dec * debuffs.hm.duration; // duration of a partial refresh to end the fight
    }

    // expose weakness
    if(talents.exp_weakness === 0 && debuffs.exposeweakness.uptime_g > 0) {
        let exposeweakness_total_time = (debuffs.exposeweakness.uptime_g === 100) ? fightduration : (fightduration * debuffs.exposeweakness.uptime_g) / 100;
        let exposeweakness_refresh_int = Math.ceil(exposeweakness_total_time / debuffs.exposeweakness.duration);
        let exposeweakness_refresh_dec = (exposeweakness_total_time / debuffs.exposeweakness.duration) - Math.floor(exposeweakness_total_time / debuffs.exposeweakness.duration);
        debuffs.exposeweakness.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.exposeweakness.inactive = false; // flag for debuff being active or not
        debuffs.exposeweakness.interval = (fightduration - exposeweakness_total_time) / (exposeweakness_refresh_int); // interval of inactive
        debuffs.exposeweakness.full_refresh = exposeweakness_refresh_int; // # of applications as whole integer
        debuffs.exposeweakness.part_refresh_dur = exposeweakness_refresh_dec * debuffs.exposeweakness.duration; // duration of a partial refresh to end the fight
    }

    // wisdom
    if(debuffs.judgewisdom.uptime_g > 0){
        let judgewisdom_total_time = (debuffs.judgewisdom.uptime_g === 100) ? fightduration : (fightduration * debuffs.judgewisdom.uptime_g) / 100;
        let judgewisdom_refresh_int = Math.ceil(judgewisdom_total_time / debuffs.judgewisdom.duration);
        let judgewisdom_refresh_dec = (judgewisdom_total_time / debuffs.judgewisdom.duration) - Math.floor(judgewisdom_total_time / debuffs.judgewisdom.duration);
        let judgewisdom_refresh_partial = judgewisdom_refresh_dec * debuffs.judgewisdom.duration;
        let judgewisdom_remaining_dur_interval = (fightduration - judgewisdom_total_time) / (judgewisdom_refresh_int);
        debuffs.judgewisdom.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.judgewisdom.inactive = false; // flag for debuff being active or not
        debuffs.judgewisdom.interval = judgewisdom_remaining_dur_interval; // interval of inactive
        debuffs.judgewisdom.full_refresh = judgewisdom_refresh_int; // # of applications as whole integer
        debuffs.judgewisdom.part_refresh_dur = judgewisdom_refresh_partial; // duration of a partial refresh to end the fight
    }

    // crusader
    if(debuffs.judgecrusader.uptime_g > 0){
        let judgecrusader_total_time = (debuffs.judgecrusader.uptime_g === 100) ? fightduration : (fightduration * debuffs.judgecrusader.uptime_g) / 100;
        let judgecrusader_refresh_int = Math.ceil(judgecrusader_total_time / debuffs.judgecrusader.duration);
        let judgecrusader_refresh_dec = (judgecrusader_total_time / debuffs.judgecrusader.duration) - Math.floor(judgecrusader_total_time / debuffs.judgecrusader.duration);
        debuffs.judgecrusader.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.judgecrusader.inactive = false; // flag for debuff being active or not
        debuffs.judgecrusader.interval = (fightduration - judgecrusader_total_time) / (judgecrusader_refresh_int); // interval of inactive
        debuffs.judgecrusader.full_refresh = judgecrusader_refresh_int; // # of applications as whole integer
        debuffs.judgecrusader.part_refresh_dur = judgecrusader_refresh_dec * debuffs.judgecrusader.duration; // duration of a partial refresh to end the fight
    }

    // sunder
    if(debuffs.sunder.uptime_g > 0){
        let sunder_total_time = (debuffs.sunder.uptime_g === 100) ? fightduration : (fightduration * debuffs.sunder.uptime_g) / 100;
        let sunder_refresh_int = Math.ceil(sunder_total_time / debuffs.sunder.duration);
        let sunder_refresh_dec = (sunder_total_time / debuffs.sunder.duration) - Math.floor(sunder_total_time / debuffs.sunder.duration);
        debuffs.sunder.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.sunder.inactive = false; // flag for debuff being active or not
        debuffs.sunder.interval = (fightduration - sunder_total_time) / (sunder_refresh_int); // interval of inactive
        debuffs.sunder.full_refresh = sunder_refresh_int; // # of applications as whole integer
        debuffs.sunder.part_refresh_dur = sunder_refresh_dec * debuffs.sunder.duration; // duration of a partial refresh to end the fight
    }
    // faerie fire
    if(debuffs.faeriefire.uptime_g > 0){
        let faeriefire_total_time = (debuffs.faeriefire.uptime_g === 100) ? fightduration : (fightduration * debuffs.faeriefire.uptime_g) / 100;
        let faeriefire_refresh_int = Math.ceil(faeriefire_total_time / debuffs.faeriefire.duration);
        let faeriefire_refresh_dec = (faeriefire_total_time / debuffs.faeriefire.duration) - Math.floor(faeriefire_total_time / debuffs.faeriefire.duration);
        debuffs.faeriefire.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.faeriefire.inactive = false; // flag for debuff being active or not
        debuffs.faeriefire.interval = (fightduration - faeriefire_total_time) / (faeriefire_refresh_int); // interval of inactive
        debuffs.faeriefire.full_refresh = faeriefire_refresh_int; // # of applications as whole integer
        debuffs.faeriefire.part_refresh_dur = faeriefire_refresh_dec * debuffs.faeriefire.duration; // duration of a partial refresh to end the fight
    }

    // impexpose
    if(debuffs.impexpose.uptime_g > 0){
        let impexpose_total_time = (debuffs.impexpose.uptime_g === 100) ? fightduration : (fightduration * debuffs.impexpose.uptime_g) / 100;
        let impexpose_refresh_int = Math.ceil(impexpose_total_time / debuffs.impexpose.duration);
        let impexpose_refresh_dec = (impexpose_total_time / debuffs.impexpose.duration) - Math.floor(impexpose_total_time / debuffs.impexpose.duration);
        debuffs.impexpose.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.impexpose.inactive = false; // flag for debuff being active or not
        debuffs.impexpose.interval = (fightduration - impexpose_total_time) / (impexpose_refresh_int); // interval of inactive
        debuffs.impexpose.full_refresh = impexpose_refresh_int; // # of applications as whole integer
        debuffs.impexpose.part_refresh_dur = impexpose_refresh_dec * debuffs.impexpose.duration; // duration of a partial refresh to end the fight
    }

    // curse of reck
    if(debuffs.curseofreck.uptime_g > 0){
        let curseofreck_total_time = (debuffs.curseofreck.uptime_g === 100) ? fightduration : (fightduration * debuffs.curseofreck.uptime_g) / 100;
        let curseofreck_refresh_int = Math.ceil(curseofreck_total_time / debuffs.curseofreck.duration);
        let curseofreck_refresh_dec = (curseofreck_total_time / debuffs.curseofreck.duration) - Math.floor(curseofreck_total_time / debuffs.curseofreck.duration);
        debuffs.curseofreck.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.curseofreck.inactive = false; // flag for debuff being active or not
        debuffs.curseofreck.interval = (fightduration - curseofreck_total_time) / (curseofreck_refresh_int); // interval of inactive
        debuffs.curseofreck.full_refresh = curseofreck_refresh_int; // # of applications as whole integer
        debuffs.curseofreck.part_refresh_dur = curseofreck_refresh_dec * debuffs.curseofreck.duration; // duration of a partial refresh to end the fight
    }
    // blood frenzy
    if(debuffs.bloodfrenzy.uptime_g > 0){
        let bloodfrenzy_total_time = (debuffs.bloodfrenzy.uptime_g === 100) ? fightduration : (fightduration * debuffs.bloodfrenzy.uptime_g) / 100;
        let bloodfrenzy_refresh_int = Math.ceil(bloodfrenzy_total_time / debuffs.bloodfrenzy.duration);
        let bloodfrenzy_refresh_dec = (bloodfrenzy_total_time / debuffs.bloodfrenzy.duration) - Math.floor(bloodfrenzy_total_time / debuffs.bloodfrenzy.duration);
        debuffs.bloodfrenzy.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.bloodfrenzy.inactive = false; // flag for debuff being active or not
        debuffs.bloodfrenzy.interval = (fightduration - bloodfrenzy_total_time) / (bloodfrenzy_refresh_int); // interval of inactive
        debuffs.bloodfrenzy.full_refresh = bloodfrenzy_refresh_int; // # of applications as whole integer
        debuffs.bloodfrenzy.part_refresh_dur = bloodfrenzy_refresh_dec * debuffs.bloodfrenzy.duration; // duration of a partial refresh to end the fight
    }
    // curse of elements
    if(debuffs.curseofele.uptime_g > 0){
        let curseofele_total_time = (debuffs.curseofele.uptime_g === 100) ? fightduration : (fightduration * debuffs.curseofele.uptime_g) / 100;
        let curseofele_refresh_int = Math.ceil(curseofele_total_time / debuffs.curseofele.duration);
        let curseofele_refresh_dec = (curseofele_total_time / debuffs.curseofele.duration) - Math.floor(curseofele_total_time / debuffs.curseofele.duration);     
        debuffs.curseofele.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.curseofele.inactive = false; // flag for debuff being active or not
        debuffs.curseofele.interval = (fightduration - curseofele_total_time) / (curseofele_refresh_int); // interval of inactive
        debuffs.curseofele.full_refresh = curseofele_refresh_int; // # of applications as whole integer
        debuffs.curseofele.part_refresh_dur = curseofele_refresh_dec * debuffs.curseofele.duration; // duration of a partial refresh to end the fight
    }
    // misery
    if(debuffs.misery.uptime_g > 0){
        let misery_total_time = (debuffs.misery.uptime_g === 100) ? fightduration : (fightduration * debuffs.misery.uptime_g) / 100;
        let misery_refresh_int = Math.ceil(misery_total_time / debuffs.misery.duration);
        let misery_refresh_dec = (misery_total_time / debuffs.misery.duration) - Math.floor(misery_total_time / debuffs.misery.duration);
        debuffs.misery.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.misery.inactive = false; // flag for debuff being active or not
        debuffs.misery.interval = (fightduration - misery_total_time) / (misery_refresh_int); // interval of inactive
        debuffs.misery.full_refresh = misery_refresh_int; // # of applications as whole integer
        debuffs.misery.part_refresh_dur = misery_refresh_dec * debuffs.misery.duration; // duration of a partial refresh to end the fight
    }

    //***************************************************************/
    // party auras handled on an interval
    // unleashed rage
    if(partybuffs.unleashedrage.uptime_g > 0){
        let unleashedrage_total_time = (partybuffs.unleashedrage.uptime_g === 100) ? fightduration : (fightduration * partybuffs.unleashedrage.uptime_g) / 100;
        let unleashedrage_refresh_int = Math.ceil(unleashedrage_total_time / partybuffs.unleashedrage.duration);
        let unleashedrage_refresh_dec = (unleashedrage_total_time / partybuffs.unleashedrage.duration) - Math.floor(unleashedrage_total_time / partybuffs.unleashedrage.duration);
        partybuffs.unleashedrage.refresh_ct = 0; // incrementing count of refreshes and applications
        partybuffs.unleashedrage.inactive = false; // flag for debuff being active or not
        partybuffs.unleashedrage.interval = (fightduration - unleashedrage_total_time) / (unleashedrage_refresh_int); // interval of inactive
        partybuffs.unleashedrage.full_refresh = unleashedrage_refresh_int; // # of applications as whole integer
        partybuffs.unleashedrage.part_refresh_dur = unleashedrage_refresh_dec * partybuffs.unleashedrage.duration; // duration of a partial refresh to end the fight
    }
    // unleashed rage
    if(partybuffs.ferociousinsp.uptime_g > 0){
        let ferociousinsp_total_time = (partybuffs.ferociousinsp.uptime_g === 100) ? fightduration : (fightduration * partybuffs.ferociousinsp.uptime_g) / 100;
        let ferociousinsp_refresh_int = Math.ceil(ferociousinsp_total_time / partybuffs.ferociousinsp.duration);
        let ferociousinsp_refresh_dec = (ferociousinsp_total_time / partybuffs.ferociousinsp.duration) - Math.floor(ferociousinsp_total_time / partybuffs.ferociousinsp.duration);
        partybuffs.ferociousinsp.refresh_ct = 0; // incrementing count of refreshes and applications
        partybuffs.ferociousinsp.inactive = false; // flag for debuff being active or not
        partybuffs.ferociousinsp.interval = (fightduration - ferociousinsp_total_time) / (ferociousinsp_refresh_int); // interval of inactive
        partybuffs.ferociousinsp.full_refresh = ferociousinsp_refresh_int; // # of applications as whole integer
        partybuffs.ferociousinsp.part_refresh_dur = ferociousinsp_refresh_dec * partybuffs.ferociousinsp.duration; // duration of a partial refresh to end the fight
    }

}

/**Handles the debuff timers and stacks. Adds the timer value from IntervalAuraSetTime and prev timer to keep any
 * negative values and carry it over. For example, if a timer ends in 0.2s, but the next step is 0.3,
 * it would start the next timer at "time + (-0.1)" because the debuffs are independent of the player
 * steps and are applied potentially during a step. A timer of 30 would start at 29.9 on the next step.
 */
function IntervalAuraHandler(){
    if(debuffs.hm.timer <= 0 || debuffs.hm.inactive && (debuffs.hm.uptime_g < 98)) {debuffs.hm.stacks = 0;} // sets stacks to 0 when inactive
    if((debuffs.hm.timer <= 0) && (debuffs.hm.uptime_g > 0)) { debuffs.hm.timer += IntervalAuraSetTime("hm","debuff"); } // sets the timer to inactive or active
    
    if((debuffs.exposeweakness.timer <= 0) && (talents.exp_weakness === 0 && debuffs.exposeweakness.uptime_g > 0)) { 
        debuffs.exposeweakness.timer = IntervalAuraSetTime("exposeweakness","debuff"); } // sets the timer to inactive or active

    if((debuffs.judgewisdom.timer <= 0) && (debuffs.judgewisdom.uptime_g > 0)) { 
        debuffs.judgewisdom.timer += IntervalAuraSetTime("judgewisdom","debuff"); } // sets the timer to inactive or active

    if((debuffs.judgecrusader.timer <= 0) && (debuffs.judgecrusader.uptime_g > 0)) { 
        debuffs.judgecrusader.timer += IntervalAuraSetTime("judgecrusader","debuff"); } // sets the timer to inactive or active
    
    if((debuffs.sunder.timer <= 0) && (debuffs.sunder.uptime_g > 0)) { 
        debuffs.sunder.timer += IntervalAuraSetTime("sunder","debuff"); } // sets the timer to inactive or active
    let timeforstack = debuffs.sunder.stacktime / 4;
    if ((debuffs.sunder.timer > 0) && (!debuffs.sunder.inactive) && (debuffs.sunder.stacks < 5)) {
        sunderstart = (sunderstart === 0 || ((sunderstart + 30) < steptimeend)) ? steptimeend : sunderstart;
        if ((sunderstart + timeforstack * debuffs.sunder.stacks) < steptimeend) {
            debuffs.sunder.stacks = (debuffs.sunder.stacks < 5) ? debuffs.sunder.stacks + 1 : 5;
        }
    }
    
    if((debuffs.faeriefire.timer <= 0) && (debuffs.faeriefire.uptime_g > 0)) { 
        debuffs.faeriefire.timer += IntervalAuraSetTime("faeriefire","debuff"); } // sets the timer to inactive or active
    
    if((debuffs.impexpose.timer <= 0) && (debuffs.impexpose.uptime_g > 0)) { 
        debuffs.impexpose.timer += IntervalAuraSetTime("impexpose","debuff"); } // sets the timer to inactive or active
    
    if((debuffs.curseofreck.timer <= 0) && (debuffs.curseofreck.uptime_g > 0)) { 
        debuffs.curseofreck.timer += IntervalAuraSetTime("curseofreck","debuff"); } // sets the timer to inactive or active
    
    if((debuffs.bloodfrenzy.timer <= 0) && (debuffs.bloodfrenzy.uptime_g > 0)) { 
        debuffs.bloodfrenzy.timer += IntervalAuraSetTime("bloodfrenzy","debuff"); } // sets the timer to inactive or active
    
    if((debuffs.curseofele.timer <= 0) && (debuffs.curseofele.uptime_g > 0)) { 
        debuffs.curseofele.timer += IntervalAuraSetTime("curseofele","debuff"); } // sets the timer to inactive or active
    
    if((debuffs.misery.timer <= 0) && (debuffs.misery.uptime_g > 0)) { 
        debuffs.misery.timer += IntervalAuraSetTime("misery","debuff"); } // sets the timer to inactive or active
    // *************** party buffs ******************
    if((partybuffs.unleashedrage.timer <= 0) && (partybuffs.unleashedrage.uptime_g > 0)) { 
        partybuffs.unleashedrage.timer += IntervalAuraSetTime("unleashedrage","partybuff"); } // sets the timer to inactive or active
            
    if((partybuffs.ferociousinsp.timer <= 0) && (partybuffs.ferociousinsp.uptime_g > 0)) { 
        partybuffs.ferociousinsp.timer += IntervalAuraSetTime("ferociousinsp","partybuff"); } // sets the timer to inactive or active
}

/** runs when timer is <= 0 for whichever debuff. Initializes timer as inactive for a set duration
 * given in the debuffInitialize() function and sets that timer to the initial inactive interval. 
 * Once this is called again, the function iterates the refresh count and flags it as active.
 * The active duration timer finishes and called again the timer goes back to inactive, repeating until all
 * full active durations have been used. Final duration is based on the % of remaining time for a full duration.
 * @param name debuff name
 */
function IntervalAuraSetTime(name,type){

    if (type == 'partybuff') {
        if(partybuffs[name].uptime_g === 100){
            partybuffs[name].inactive = true;
        }
        if(partybuffs[name].inactive){partybuffs[name].refresh_ct++;}
        if(partybuffs[name].refresh_ct === partybuffs[name].full_refresh && partybuffs[name].inactive){ 
            partybuffs[name].refresh_ct++; 
        }
        if ((partybuffs[name].refresh_ct <= partybuffs[name].full_refresh) && (!partybuffs[name].inactive)) {
            timer = partybuffs[name].interval;
            partybuffs[name].inactive = true;
            if(partybuffs[name].refresh_ct === partybuffs[name].full_refresh){partybuffs[name].refresh_ct++;}
            //console.log(timer);
        }
        else if ((partybuffs[name].refresh_ct < partybuffs[name].full_refresh) && (partybuffs[name].inactive)){
            timer = partybuffs[name].duration;
            partybuffs[name].inactive = false;
            //console.log(timer);
        }
        else if (partybuffs[name].refresh_ct > partybuffs[name].full_refresh){
            timer = (partybuffs[name].part_refresh_dur == 0) ? partybuffs[name].duration : partybuffs[name].part_refresh_dur;
            partybuffs[name].inactive = false;
            //console.log(timer);
        }
    } else {
        if(debuffs[name].uptime_g === 100){
            debuffs[name].inactive = true;
            //console.log(name)
        }
        if(debuffs[name].inactive){debuffs[name].refresh_ct++;}
        if(debuffs[name].refresh_ct === debuffs[name].full_refresh && debuffs[name].inactive){ 
            debuffs[name].refresh_ct++; 
        }
        if ((debuffs[name].refresh_ct <= debuffs[name].full_refresh) && (!debuffs[name].inactive)) {
            timer = debuffs[name].interval;
            //console.log(name)
            debuffs[name].inactive = true;
            if(debuffs[name].refresh_ct === debuffs[name].full_refresh){debuffs[name].refresh_ct++;}
            //console.log(timer);
        }
        else if ((debuffs[name].refresh_ct < debuffs[name].full_refresh) && (debuffs[name].inactive)){
            timer = debuffs[name].duration;
            debuffs[name].inactive = false;
            //console.log(timer);
        }
        else if (debuffs[name].refresh_ct > debuffs[name].full_refresh){
            timer = (debuffs[name].part_refresh_dur == 0) ? debuffs[name].duration : debuffs[name].part_refresh_dur;
            debuffs[name].inactive = false;
            //console.log(timer);
        }
    }
    return timer;
}

/**Check for on use spells ready and usable, if ready and usable, set the duration and cooldown timers. */
function onUseSpellCheck(){
    let beastwithinreduc = (auras.beastwithin.timer > 0) ? 0.8 : 1;

    if(auras.drums.enable && auras.drums.cooldown === 0){
        auras.drums.timer = (auras.drums.cooldown === 0) ? auras.drums.duration : auras.drums.timer; // set timer
        auras.drums.cooldown = (auras.drums.timer === auras.drums.duration) ? auras.drums.basecd: auras.drums.cooldown; // set cd
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains Drums";
            combatlogindex++;
        }
    }
    if((auras.potion.primary || auras.potion.secondary) && auras.potion.cooldown === 0 && potionHandling()) {
        if(combatlogRun && (secondaryPotion === 'Fel' || auras.potion.used === 'Haste')) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player used " + auras.potion.used + " Potion";
            combatlogindex++;
        }
    }
    if(auras.rune.enable && auras.rune.cooldown === 0 && runeHandling()) {}
    
    if(auras.lust.enable && auras.lust.cooldown === 0){
        auras.lust.timer = (auras.lust.cooldown === 0) ? auras.lust.duration : auras.lust.timer; // set timer
        auras.lust.cooldown = (auras.lust.timer === auras.lust.duration) ? auras.lust.basecd: auras.lust.cooldown; // set cd
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains Blood Lust";
            combatlogindex++;
        }
    }
    let rapidcost = Math.floor(100 * beastwithinreduc);
    if(auras.rapid.enable && auras.rapid.cooldown === 0 && (currentMana >= rapidcost) && auras.rapid.timer == 0){
        auras.rapid.timer = (auras.rapid.cooldown === 0) ? auras.rapid.duration : auras.rapid.timer; // set timer
        auras.rapid.cooldown = (auras.rapid.timer === auras.rapid.duration) ? auras.rapid.basecd: auras.rapid.cooldown; // set cd
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains Rapid Fire";
            combatlogindex++;
        }
    }
    if(racialenable) {
        let berserkcost = (auras.berserk.enable) ? Math.floor(0.06 * BaseMana * beastwithinreduc) : 0;
        if(auras.berserk.enable && auras.berserk.cooldown === 0 && currentMana >= berserkcost){
            auras.berserk.timer = (auras.berserk.cooldown === 0) ? auras.berserk.duration : auras.berserk.timer; // set timer
            auras.berserk.cooldown = (auras.berserk.timer === auras.berserk.duration) ? auras.berserk.basecd: auras.berserk.cooldown; // set cd
            if(combatlogRun) {
                combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains Berserking";
                combatlogindex++;
            }
        }
        else if(auras.bloodfury.enable && auras.bloodfury.cooldown === 0){
            auras.bloodfury.timer = (auras.bloodfury.cooldown === 0) ? auras.bloodfury.duration : auras.bloodfury.timer; // set timer
            auras.bloodfury.cooldown = (auras.bloodfury.timer === auras.bloodfury.duration) ? auras.bloodfury.basecd: auras.bloodfury.cooldown; // set cd
            if(combatlogRun) {
                combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains Blood Fury";
                combatlogindex++;
            }
        }
    }
    if(auras.beastwithin.enable && auras.beastwithin.cooldown === 0){
        auras.beastwithin.timer = (auras.beastwithin.cooldown === 0) ? auras.beastwithin.duration : auras.beastwithin.timer; // set timer
        auras.beastwithin.cooldown = (auras.beastwithin.timer === auras.beastwithin.duration) ? auras.beastwithin.basecd: auras.beastwithin.cooldown; // set cd
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains The Beast Within";
            combatlogindex++;
        }
    }
// trinkets on use, if's for non-shared CDs, if-else if's for shared CDs
    if(auras.swarmguard.enable && auras.swarmguard.cooldown === 0){
        auras.swarmguard.timer = (auras.swarmguard.cooldown === 0) ? auras.swarmguard.duration : auras.swarmguard.timer; // set timer
        auras.swarmguard.cooldown = (auras.swarmguard.timer === auras.swarmguard.duration) ? auras.swarmguard.basecd: auras.swarmguard.cooldown; // set cd
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains Badge of the Swarmguard";
            combatlogindex++;
        }
    }
    if(auras.abacus.enable && (auras.abacus.cooldown === 0) && (sharedtrinketcd === 0)){
        auras.abacus.timer = (auras.abacus.cooldown === 0) ? auras.abacus.duration : auras.abacus.timer; // set timer
        auras.abacus.cooldown = (auras.abacus.timer === auras.abacus.duration) ? auras.abacus.basecd: auras.abacus.cooldown; // set cd
        sharedtrinketcd = auras.abacus.duration;
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains Haste (Abacus Used)";
            combatlogindex++;
        }
    }
    else if(auras.unyieldingcourage.enable && (auras.unyieldingcourage.cooldown === 0) && (sharedtrinketcd === 0)){
        auras.unyieldingcourage.timer = (auras.unyieldingcourage.cooldown === 0) ? auras.unyieldingcourage.duration : auras.unyieldingcourage.timer; // set timer
        auras.unyieldingcourage.cooldown = (auras.unyieldingcourage.timer === auras.unyieldingcourage.duration) ? auras.unyieldingcourage.basecd: auras.unyieldingcourage.cooldown; // set cd
        sharedtrinketcd = auras.unyieldingcourage.duration;
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains Unyielding Courage";
            combatlogindex++;
        }
    }
    else if(auras.aptrink1.enable && (auras.aptrink1.cooldown === 0) && (sharedtrinketcd === 0)) {
        auras.aptrink1.timer = (auras.aptrink1.cooldown === 0) ? auras.aptrink1.duration : auras.aptrink1.timer; // set timer
        auras.aptrink1.cooldown = (auras.aptrink1.timer === auras.aptrink1.duration) ? auras.aptrink1.basecd: auras.aptrink1.cooldown; // set cd
        sharedtrinketcd = auras.aptrink1.duration;
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + auras.aptrink1.name;
            combatlogindex++;
        }
    }
    else if(auras.aptrink2.enable && (auras.aptrink2.cooldown === 0) && (sharedtrinketcd === 0)) {
        auras.aptrink2.timer = (auras.aptrink2.cooldown === 0) ? auras.aptrink2.duration : auras.aptrink2.timer; // set timer
        auras.aptrink2.cooldown = (auras.aptrink2.timer === auras.aptrink2.duration) ? auras.aptrink2.basecd: auras.aptrink2.cooldown; // set cd
        sharedtrinketcd = auras.aptrink2.duration;            
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + auras.aptrink2.name;
            combatlogindex++;
        }      
    }
    else if(auras.tenacity.enable && (auras.tenacity.cooldown === 0) && (sharedtrinketcd === 0)){
        auras.tenacity.timer = (auras.tenacity.cooldown === 0) ? auras.tenacity.duration : auras.tenacity.timer; // set timer
        auras.tenacity.cooldown = (auras.tenacity.timer === auras.tenacity.duration) ? auras.tenacity.basecd: auras.tenacity.cooldown; // set cd
        sharedtrinketcd = auras.tenacity.duration;
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains Tenacity";
            combatlogindex++;
        }
    }

    if (readiness.enable && (readiness.cooldown == 0) && auras.rapid.cooldown > 0) {
        if (SPELLS.multishot.enable && SPELLS.multishot.cd > 5) {
            queueReadiness = true;
            
        }
        else if (!SPELLS.multishot.enable && SPELLS.steadyshot.cd > 0) {
            queueReadiness = true;
            
        }
        else { queueReadiness = false;
        }
    }
}
