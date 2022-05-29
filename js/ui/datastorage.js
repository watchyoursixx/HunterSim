// stores the variables and settings below
// for the user
/******************************************/

function storeData(){

    // gear
    localStorage.setItem('gear',JSON.stringify(gear));
    // buffs
    localStorage.setItem('buffs',JSON.stringify(buffslist));
    // player consumes
    localStorage.setItem('pla_consumes',JSON.stringify(playerconsumes));
    // pet consumes
    localStorage.setItem('pet_consumes',JSON.stringify(petconsumes));
    // debuffs
    localStorage.setItem('debuffs',JSON.stringify(debuffs));
    // partybuffs
    localStorage.setItem('partybuffs',JSON.stringify(partybuffs));
    // statweights
    localStorage.setItem('statweights', JSON.stringify(statweights));
    // consumes
    localStorage.setItem('flask',document.getElementById("flask").value);
    localStorage.setItem('battle',document.getElementById("battle").value);
    localStorage.setItem('guardian',document.getElementById("guardian").value);
    localStorage.setItem('scrollagi',document.getElementById("scrollagi").value);
    localStorage.setItem('scrollstr',document.getElementById("scrollstr").value);
    localStorage.setItem('food',document.getElementById("food").value);
    localStorage.setItem('petscrollagi',document.getElementById("petscrollagi").value);
    localStorage.setItem('petscrollstr',document.getElementById("petscrollstr").value);
    localStorage.setItem('petfood',document.getElementById("petfood").value);
    // saves each value below as a string - fight settings
    localStorage.setItem('iterations',iterations);
    localStorage.setItem('minfight',minfighttimer);
    localStorage.setItem('maxfight',maxfighttimer);
    localStorage.setItem('latency',JSON.stringify(latency));
    localStorage.setItem('playeruptime',playeruptime);
    localStorage.setItem('petuptime',petuptime);
    localStorage.setItem('weavetime',JSON.stringify(weavetime));
    localStorage.setItem('huntraid',huntersinraid);
    localStorage.setItem('berserkhp',BerserkStartHP);
    localStorage.setItem('petselect',selectedPet);
    localStorage.setItem('raceselect',selectedRace);
    localStorage.setItem('target',JSON.stringify(target));
    // talents
    localStorage.setItem('talentindex',talentindex);
    localStorage.setItem('talents',JSON.stringify(talents));
    localStorage.setItem('whtalentlink',whtalentlink);
    // spell enables
    localStorage.setItem("rapidcheck", document.getElementById("rapidcheck").checked);
    localStorage.setItem("beastcheck", document.getElementById("beastcheck").checked);
    localStorage.setItem("racialcheck", document.getElementById("racialcheck").checked);
    localStorage.setItem("lustcheck", document.getElementById("lustcheck").checked);
    localStorage.setItem("drumcheck", document.getElementById("drumcheck").checked);
    localStorage.setItem("hastecheck", document.getElementById("hastecheck").checked);
    localStorage.setItem("secpotcheck", document.getElementById("secpotcheck").checked);
    localStorage.setItem("runecheck", document.getElementById("runecheck").checked);
    localStorage.setItem("multicheck", document.getElementById("multicheck").checked);
    localStorage.setItem("arcanecheck", document.getElementById("arcanecheck").checked);
    localStorage.setItem("raptorcheck", document.getElementById("raptorcheck").checked);
    localStorage.setItem("meleecheck", document.getElementById("meleecheck").checked);
    // spell offsets
    localStorage.setItem("rapidoffset", document.getElementById("rapidoffset").value);
    localStorage.setItem("beastoffset", document.getElementById("beastoffset").value);
    localStorage.setItem("racialoffset", document.getElementById("racialoffset").value);
    localStorage.setItem("lustoffset", document.getElementById("lustoffset").value);
    localStorage.setItem("drumoffset", document.getElementById("drumoffset").value);
    localStorage.setItem("trink1offset", document.getElementById("trink1offset").value);
    localStorage.setItem("trink2offset", document.getElementById("trink2offset").value);
    localStorage.setItem("startpotoffset", document.getElementById("startpotoffset").value);
    //localStorage.setItem("runeoffset", document.getElementById("runeoffset").value);
    // spell options
    localStorage.setItem("lustoption", document.getElementById("lustoption").value);
    localStorage.setItem("drumoption", document.getElementById("drumoption").value);
    localStorage.setItem("spellcdoption", document.getElementById("spellcdoption").value);
    localStorage.setItem("secpotoption", document.getElementById("secpotoption").value);
    // settings for gear filters
    localStorage.setItem("phasecheck", document.getElementById("phasecheck").value);
    localStorage.setItem("raidcheck", document.getElementById("raidcheck").checked);
    localStorage.setItem("pvpcheck", document.getElementById("pvpcheck").checked);
    localStorage.setItem("boecheck", document.getElementById("boecheck").checked);
    localStorage.setItem("craftcheck", document.getElementById("craftcheck").checked);
    localStorage.setItem("bosscheck", document.getElementById("bosscheck").checked);
    localStorage.setItem("greencheck", document.getElementById("greencheck").checked);
    localStorage.setItem("repcheck", document.getElementById("repcheck").checked);
    localStorage.setItem("leathercheck", document.getElementById("leathercheck").checked);
    // saved gear sets
    localStorage.setItem("sets", JSON.stringify(SavedSets));
    // checks if saved before
    localStorage.setItem('savecheck','true');
}

function fetchData(){

    // gear
    gear = (localStorage.getItem('gear') != null) ? JSON.parse(localStorage.getItem('gear')) : gear;
    // buffs
    buffslist = (localStorage.getItem('buffs') != null) ? JSON.parse(localStorage.getItem('buffs')) : buffslist;
    // player consumes
    playerconsumes = (localStorage.getItem('pla_consumes') != null) ? JSON.parse(localStorage.getItem('pla_consumes')):playerconsumes;
    // pet consumes
    petconsumes = (localStorage.getItem('pet_consumes') != null) ? JSON.parse(localStorage.getItem('pet_consumes')):petconsumes;
    // debuffs
    debuffs = (localStorage.getItem('debuffs') != null) ? JSON.parse(localStorage.getItem('debuffs')):debuffs;
    partybuffs = (localStorage.getItem('partybuffs') != null) ? JSON.parse(localStorage.getItem('partybuffs')):partybuffs;
    // statweights
    statweights = (localStorage.getItem('statweights') != null) ? JSON.parse(localStorage.getItem('statweights')):statweights;
    displayStatWeights();

    // saves each value below as a string - fight settings
    iterations = (localStorage.getItem('iterations') != null) ? parseInt(localStorage.getItem('iterations')) : iterations;
    minfighttimer = (localStorage.getItem('minfight') != null) ? parseInt(localStorage.getItem('minfight')) : minfighttimer;
    maxfighttimer = (localStorage.getItem('maxfight') != null) ? parseInt(localStorage.getItem('maxfight')) : maxfighttimer;
    latency = (localStorage.getItem('latency') != null) ? JSON.parse(localStorage.getItem('latency')):latency;
    playeruptime = (localStorage.getItem('playeruptime') != null) ? parseInt(localStorage.getItem('playeruptime')):playeruptime;
    petuptime = (localStorage.getItem('petuptime') != null) ? parseInt(localStorage.getItem('petuptime')):petuptime;
    weavetime = (localStorage.getItem('weavetime') != null) ? JSON.parse(localStorage.getItem('weavetime')):weavetime;
    huntersinraid = (localStorage.getItem('huntraid') != null) ? parseInt(localStorage.getItem('huntraid')): huntersinraid;
    BerserkStartHP = (localStorage.getItem('berserkhp') != null) ? parseInt(localStorage.getItem('berserkhp')):BerserkStartHP;
    selectedPet = (localStorage.getItem('petselect') != null) ? parseInt(localStorage.getItem('petselect')):selectedPet;
    selectedRace = (localStorage.getItem('raceselect') != null) ? parseInt(localStorage.getItem('raceselect')):selectedRace;

    target = (localStorage.getItem('target') != null) ? JSON.parse(localStorage.getItem('target')):target;
    // talents
    talentindex = (localStorage.getItem('talentindex') != null) ? localStorage.getItem('talentindex'):talentindex;
    whtalentlink = (localStorage.getItem('whtalentlink') != null) ? localStorage.getItem('whtalentlink'):whtalentlink;
    talents = (localStorage.getItem('talents') != null) ? JSON.parse(localStorage.getItem('talents')):talents;
    // spell enables
    auras.rapid.enable = (localStorage.getItem('rapidcheck') != null) ? JSON.parse(localStorage.getItem('rapidcheck')):auras.rapid.enable;
    beastenable = (localStorage.getItem('beastcheck') != null) ? JSON.parse(localStorage.getItem('beastcheck')):beastenable;
    racialenable = (localStorage.getItem('racialcheck') != null) ? JSON.parse(localStorage.getItem('racialcheck')):racialenable;
    auras.lust.enable = (localStorage.getItem('lustcheck') != null) ? JSON.parse(localStorage.getItem('lustcheck')):auras.lust.enable;

    auras.drums.enable = (localStorage.getItem('drumcheck') != null) ? JSON.parse(localStorage.getItem('drumcheck')):auras.drums.enable;
    auras.potion.primary = (localStorage.getItem('hastecheck') != null) ? JSON.parse(localStorage.getItem('hastecheck')):auras.potion.primary;
    auras.potion.secondary = (localStorage.getItem('secpotcheck') != null) ? JSON.parse(localStorage.getItem('secpotcheck')):auras.potion.secondary;

    auras.rune.enable = (localStorage.getItem('runecheck') != null) ? JSON.parse(localStorage.getItem('runecheck')):auras.rune.enable;
    SPELLS.multishot.enable = (localStorage.getItem('multicheck') != null) ? JSON.parse(localStorage.getItem('multicheck')):SPELLS.multishot.enable;
    SPELLS.arcaneshot.enable = (localStorage.getItem('arcanecheck') != null) ? JSON.parse(localStorage.getItem('arcanecheck')):SPELLS.arcaneshot.enable;
    SPELLS.raptorstrike.enable = (localStorage.getItem('raptorcheck') != null) ? JSON.parse(localStorage.getItem('raptorcheck')):SPELLS.raptorstrike.enable;
    SPELLS.melee.enable = (localStorage.getItem('meleecheck') != null) ? JSON.parse(localStorage.getItem('meleecheck')):SPELLS.melee.enable;

    // spell offsets
    auras.rapid.offset = (localStorage.getItem('rapidoffset') != null) ? parseInt(localStorage.getItem('rapidoffset')) : auras.rapid.offset;
    auras.beastwithin.offset = (localStorage.getItem('beastoffset') != null) ? parseInt(localStorage.getItem('beastoffset')):auras.beastwithin.offset;
    if (localStorage.getItem('racialoffset') != null) {
        auras.berserk.offset = parseInt(localStorage.getItem('racialoffset'));
        auras.bloodfury.offset = parseInt(localStorage.getItem('racialoffset'));
    }
    auras.lust.offset = (localStorage.getItem('lustoffset') != null) ? parseInt(localStorage.getItem('lustoffset')):auras.lust.offset;
    auras.drums.offset = (localStorage.getItem('drumoffset') != null) ? parseInt(localStorage.getItem('drumoffset')):auras.drums.offset;
    auras.aptrink1.offset = (localStorage.getItem('trink1offset') != null) ? parseInt(localStorage.getItem('trink1offset')):auras.aptrink1.offset;
    auras.aptrink2.offset = (localStorage.getItem('trink2offset') != null) ? parseInt(localStorage.getItem('trink2offset')):auras.aptrink2.offset;
    auras.potion.offset = (localStorage.getItem('startpotoffset') != null) ? parseInt(localStorage.getItem('startpotoffset')):auras.potion.offset;

    // spell option
    let lustoption = '';
    if (localStorage.getItem('lustoption') != null) {
        lustoption = localStorage.getItem('lustoption');
        switch (lustoption) {
            case "1":   auras.lust.duration = 40;
            break;
            case "2":   auras.lust.duration = 80;
            break;
            case "3":   auras.lust.duration = 120;
            break;
            case "4":   auras.lust.duration = 160;
            break;
        }
    } else lustoption = "1";
    auras.drums.type = (localStorage.getItem('drumoption') != null) ? localStorage.getItem('drumoption'):auras.drums.type;
    let spellcdoption = '';
    if (localStorage.getItem('spellcdoption') != null) {
        spellcdoption = localStorage.getItem('spellcdoption');
        switch (spellcdoption) {
            case "2min":
                two_min_cds = 180;
                three_min_cds = 180;
                setSpellCDs();
            break;
            case "3min":
                two_min_cds = 120;
                three_min_cds = 240;
                setSpellCDs();
            break;
            case "CD":
                two_min_cds = 120;
                three_min_cds = 180;
                setSpellCDs();
            break;
        }
    } else { spellcdoption = "CD"; }
    secondaryPotion = (localStorage.getItem('secpotoption') != null) ? localStorage.getItem('secpotoption') : secondaryPotion;
    phase = (localStorage.getItem("phasecheck") != null) ? parseInt(localStorage.getItem("phasecheck")) : phase;
    raidcheck = (localStorage.getItem("raidcheck") != null) ? JSON.parse(localStorage.getItem("raidcheck")) : raidcheck;
    pvpcheck = (localStorage.getItem("pvpcheck") != null) ? JSON.parse(localStorage.getItem("pvpcheck")) : pvpcheck;
    greencheck = (localStorage.getItem("greencheck") != null) ? JSON.parse(localStorage.getItem("greencheck")):greencheck;
    boecheck = (localStorage.getItem("boecheck") != null) ? JSON.parse(localStorage.getItem("boecheck")) : boecheck;
    leathercheck = (localStorage.getItem("leathercheck") != null) ? JSON.parse(localStorage.getItem("leathercheck")) : leathercheck;
    repcheck = (localStorage.getItem("repcheck") != null) ? JSON.parse(localStorage.getItem("repcheck")) : repcheck;
    bosscheck = (localStorage.getItem("bosscheck") != null) ? JSON.parse(localStorage.getItem("bosscheck")) : bosscheck;
    craftcheck = (localStorage.getItem("craftcheck") != null) ? JSON.parse(localStorage.getItem("craftcheck")) : craftcheck;
    
    /* Display initialization for fetched values */
    // fight settings initialization
    document.getElementById("simulations").value = iterations;
    document.getElementById("minfight").value = minfighttimer;
    document.getElementById("maxfight").value = maxfighttimer;
    document.getElementById("latency").value = latency * 1000;
    document.getElementById("playeruptime").value = playeruptime;
    document.getElementById("petuptime").value = petuptime;
    document.getElementById("weavetime").value = weavetime.toFixed(1);
    document.getElementById("huntersinraid").value = huntersinraid;
    document.getElementById("berserkinghp").value = BerserkStartHP;
    document.getElementById("pet").value = selectedPet;
    document.getElementById("race").value = selectedRace;
    document.getElementById("racedisplay").innerHTML = races[selectedRace].name;
    let targets = targetData.getNameKeyTargetPairs();
    let findtarget = targets.find(key => key.name == target.name);
    document.getElementById("targetSelect").value = findtarget.id;
    document.getElementById("armor").value = target.armor;
    document.getElementById("typeSelect").value = target.type;
    document.getElementById("level").value = target.level;

    document.getElementById("flask").value = (localStorage.getItem("flask") != null) ?  localStorage.getItem('flask') : document.getElementById("flask").value;
    document.getElementById("battle").value = (localStorage.getItem("battle") != null) ?  localStorage.getItem('battle') : document.getElementById("battle").value;
    document.getElementById("guardian").value = (localStorage.getItem("guardian") != null) ?  localStorage.getItem('guardian') : document.getElementById("guardian").value;
    document.getElementById("scrollagi").value = (localStorage.getItem("scrollagi") != null) ?  localStorage.getItem('scrollagi') : document.getElementById("scrollagi").value;
    document.getElementById("scrollstr").value = (localStorage.getItem("scrollstr") != null) ?  localStorage.getItem('scrollstr') : document.getElementById("scrollstr").value;
    document.getElementById("food").value = (localStorage.getItem("food") != null) ?  localStorage.getItem('food') : document.getElementById("food").value;
    document.getElementById("petscrollagi").value = (localStorage.getItem("petscrollagi") != null) ?  localStorage.getItem('petscrollagi') : document.getElementById("petscrollagi").value;
    document.getElementById("petscrollstr").value = (localStorage.getItem("petscrollstr") != null) ?  localStorage.getItem('petscrollstr') : document.getElementById("petscrollstr").value;
    document.getElementById("petfood").value = (localStorage.getItem("petfood") != null) ?  localStorage.getItem('petfood') : document.getElementById("petfood").value;

    // buffs visual initialization
    document.getElementById("kings").checked = (buffslist[0] == 25898) ? true : false;
    document.getElementById("might").checked = (buffslist[1].id == 27141) ? true : false;
    document.getElementById("mightmod").selected = (buffslist[1].talented) ? true : false;
    document.getElementById("wisdom").checked = (buffslist[2].id == 27143) ? true : false;
    document.getElementById("wisdommod").selected = (buffslist[2].talented) ? true : false;
    document.getElementById("lotp").checked = (buffslist[3] == 17007) ? true : false;
    document.getElementById("lotpidol").selected = (buffslist[17] == 39926) ? true : false;
    document.getElementById("goa").checked = (buffslist[4].id == 25359) ? true : false;
    document.getElementById("soe").checked = (buffslist[5].id == 25528) ? true : false;
    document.getElementById("imptotem").selected = (buffslist[4].talented) ? true : false;
    document.getElementById("manaspring").checked = (buffslist[6] == 25570) ? true : false;
    document.getElementById("ai").checked = (buffslist[7] == 27127) ? true : false;
    document.getElementById("gotw").checked = (buffslist[8].id == 26991) ? true : false;
    document.getElementById("gotwmod").selected = (buffslist[8].talented) ? true : false;
    document.getElementById("fort").checked = (buffslist[9].id == 25392) ? true : false;
    document.getElementById("fortmod").selected = (buffslist[9].talented) ? true : false;
    document.getElementById("pact").checked = (buffslist[10].id == 27268) ? true : false;
    document.getElementById("pactmod").selected = (buffslist[10].talented) ? true : false;
    document.getElementById("windfury").checked = (buffslist[11].id == 25587) ? true : false;
    document.getElementById("windfurymod").selected = (buffslist[11].talented) ? true : false;
    document.getElementById("heroicpres").checked = (buffslist[12] == 6562) ? true : false;
    document.getElementById("shout").checked = (buffslist[13].id == 2048) ? true : false;
    document.getElementById("shoutmod").selected = (buffslist[13].talented) ? true : false;
    document.getElementById("tsa").checked = (buffslist[14] == 27066) ? true : false;
    document.getElementById("braided").checked = (buffslist[15] == 31025) ? true : false;
    document.getElementById("sanct").checked = (buffslist[16] == 31870) ? true : false;
    document.getElementById("talentselect").value = talentindex;
    document.getElementById("customtalent").value = whtalentlink;
    selectTalents(talentindex);

    // initialize saved debuffs visuals
    document.getElementById("hmuptime").value = debuffs.hm.uptime_g;
    document.getElementById("hmbonus").selected = debuffs.hm.improved ? true : false;
    document.getElementById("ewuptime").value = debuffs.exposeweakness.uptime_g;
    document.getElementById("ewagil").value = debuffs.exposeweakness.agi;
    document.getElementById("jowuptime").value = debuffs.judgewisdom.uptime_g;
    document.getElementById("jocuptime").value = debuffs.judgecrusader.uptime_g;
    document.getElementById("coruptime").value = debuffs.curseofreck.uptime_g;
    document.getElementById("ffuptime").value = debuffs.faeriefire.uptime_g;
    document.getElementById("ffbonus").selected = debuffs.faeriefire.improved ? true : false;
    document.getElementById("sauptime").value = debuffs.sunder.uptime_g;
    document.getElementById("sunderapp").value = debuffs.sunder.stacktime;
    document.getElementById("ieuptime").value = debuffs.impexpose.uptime_g;
    document.getElementById("bfuptime").value = debuffs.bloodfrenzy.uptime_g;
    document.getElementById("misuptime").value = debuffs.misery.uptime_g;
    document.getElementById("coeuptime").value = debuffs.curseofele.uptime_g;
    document.getElementById("coebonus").selected = debuffs.curseofele.improved ? true : false;
    document.getElementById("unlrageuptime").value = partybuffs.unleashedrage.uptime_g;
    document.getElementById("ferocuptime").value = partybuffs.ferociousinsp.uptime_g;
    document.getElementById("ferocstacks").value = partybuffs.ferociousinsp.stacks;

    // spell enables
    document.getElementById("rapidcheck").checked = auras.rapid.enable;
    document.getElementById("beastcheck").checked = beastenable;
    document.getElementById("racialcheck").checked = racialenable;
    document.getElementById("lustcheck").checked = auras.lust.enable;
    document.getElementById("drumcheck").checked = auras.drums.enable;
    document.getElementById("hastecheck").checked = auras.potion.primary;
    document.getElementById("secpotcheck").checked = auras.potion.secondary;
    document.getElementById("runecheck").checked = auras.rune.enable;
    document.getElementById("multicheck").checked = SPELLS.multishot.enable;
    document.getElementById("arcanecheck").checked = SPELLS.arcaneshot.enable;
    document.getElementById("raptorcheck").checked = SPELLS.raptorstrike.enable;
    document.getElementById("meleecheck").checked = SPELLS.melee.enable;
    // spell offsets
    document.getElementById("rapidoffset").value = auras.rapid.offset;
    document.getElementById("beastoffset").value = auras.beastwithin.offset;
    document.getElementById("racialoffset").value = (auras.berserk.enable) ? auras.berserk.offset: auras.bloodfury.offset;
    document.getElementById("lustoffset").value = auras.lust.offset;
    document.getElementById("drumoffset").value = auras.drums.offset;
    document.getElementById("trink1offset").value = auras.aptrink1.offset;
    document.getElementById("trink2offset").value = auras.aptrink2.offset;
    document.getElementById("startpotoffset").value = auras.potion.offset;
    // spell options
    document.getElementById("lustoption").value = lustoption;
    document.getElementById("drumoption").value = auras.drums.type;
    document.getElementById("spellcdoption").value = spellcdoption;
    document.getElementById("secpotoption").value = secondaryPotion;

    document.getElementById("phasecheck").value = phase;
    document.getElementById("raidcheck").checked = raidcheck;
    document.getElementById("pvpcheck").checked = pvpcheck;
    document.getElementById("boecheck").checked = boecheck;
    document.getElementById("greencheck").checked = greencheck;
    document.getElementById("bosscheck").checked = bosscheck;
    document.getElementById("leathercheck").checked = leathercheck;
    document.getElementById("craftcheck").checked = craftcheck;
    document.getElementById("repcheck").checked = repcheck;

    SavedSets = (localStorage.getItem('sets') != null) ? JSON.parse(localStorage.getItem('sets')) : SavedSets;

    // initialize the settings after loading
    selectedOptionsResults();
}

function clearSettingsCache(){
    localStorage.clear();
}
