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
    localStorage.setItem("runeoffset", document.getElementById("runeoffset").value);
    // spell options
    localStorage.setItem("lustoption", document.getElementById("lustoption").value);
    localStorage.setItem("drumoption", document.getElementById("drumoption").value);
    localStorage.setItem("spellcdoption", document.getElementById("spellcdoption").value);
    localStorage.setItem("secpotoption", document.getElementById("secpotoption").value);

    localStorage.setItem('savecheck','true');
}

function fetchData(){

    // gear
    let savedgear = JSON.parse(localStorage.getItem('gear'));
    gear = savedgear;
    // buffs
    let savedbuffs = JSON.parse(localStorage.getItem('buffs'));
    buffslist = savedbuffs;
    // player consumes
    let savedplayercons = JSON.parse(localStorage.getItem('pla_consumes'));
    playerconsumes = savedplayercons;
    // pet consumes
    let savedpetcons = JSON.parse(localStorage.getItem('pet_consumes'));
    petconsumes = savedpetcons;
    // debuffs
    debuffs = JSON.parse(localStorage.getItem('debuffs'));
    // saves each value below as a string - fight settings
    let savediters = parseInt(localStorage.getItem('iterations'));
    iterations = savediters;
    let savedminfight = parseInt(localStorage.getItem('minfight'));
    minfighttimer = savedminfight;
    let savedmaxfight = parseInt(localStorage.getItem('maxfight'));
    maxfighttimer = savedmaxfight;
    let savedlatency = JSON.parse(localStorage.getItem('latency'));
    latency = savedlatency;
    let savedplayuptime = parseInt(localStorage.getItem('playeruptime'));
    playeruptime = savedplayuptime;
    let savedpetuptime = parseInt(localStorage.getItem('petuptime'));
    petuptime = savedpetuptime;
    let savedweavetime = JSON.parse(localStorage.getItem('weavetime'));
    weavetime = savedweavetime;
    let savedhunters = parseInt(localStorage.getItem('huntraid'));
    huntersinraid = savedhunters;
    let savedberserkhp = parseInt(localStorage.getItem('berserkhp'));
    BerserkStartHP = savedberserkhp;
    let savedpet = parseInt(localStorage.getItem('petselect'));
    selectedPet = savedpet;
    let savedrace = parseInt(localStorage.getItem('raceselect'));
    selectedRace = savedrace;
    let savedtarget = JSON.parse(localStorage.getItem('target'));
    target = savedtarget;
    // talents
    let savedtalentindex = localStorage.getItem('talentindex');
    talentindex = savedtalentindex;
    let savedwhlink = localStorage.getItem('whtalentlink');
    whtalentlink = savedwhlink;
    let savedtalents = JSON.parse(localStorage.getItem('talents'));
    talents = savedtalents;
    // spell enables
    let rapidcheck = JSON.parse(localStorage.getItem('rapidcheck'));
    auras.rapid.enable = rapidcheck;
    let beastcheck = JSON.parse(localStorage.getItem('beastcheck'));
    beastenable = beastcheck;
    let racialcheck = JSON.parse(localStorage.getItem('racialcheck'));
    racialenable = racialcheck;
    let lustcheck = JSON.parse(localStorage.getItem('lustcheck'));
    auras.lust.enable = lustcheck;
    let drumcheck = JSON.parse(localStorage.getItem('drumcheck'));
    auras.drums.enable = drumcheck;
    let hastecheck = JSON.parse(localStorage.getItem('hastecheck'));
    auras.potion.primary = hastecheck;
    let secpotcheck = JSON.parse(localStorage.getItem('secpotcheck'));
    auras.potion.secondary = secpotcheck;
    let runecheck = JSON.parse(localStorage.getItem('runecheck'));
    auras.rune.enable = runecheck;
    let multicheck = JSON.parse(localStorage.getItem('multicheck'));
    SPELLS.multishot.enable = multicheck;
    let arcanecheck = JSON.parse(localStorage.getItem('arcanecheck'));
    SPELLS.arcaneshot.enable = arcanecheck;
    let raptorcheck = JSON.parse(localStorage.getItem('raptorcheck'));
    SPELLS.raptorstrike.enable = raptorcheck;
    let meleecheck = JSON.parse(localStorage.getItem('meleecheck'));
    SPELLS.melee.enable = meleecheck;

    // spell offsets
    let rapidoffset = localStorage.getItem('rapidoffset');
    auras.rapid.offset = parseInt(rapidoffset);
    let beastoffset = localStorage.getItem('beastoffset');
    auras.beastwithin.offset = parseInt(beastoffset);
    let racialoffset = localStorage.getItem('racialoffset');
    auras.berserk.offset = parseInt(racialoffset);
    auras.bloodfury.offset = parseInt(racialoffset);
    let lustoffset = localStorage.getItem('lustoffset');
    auras.lust.offset = parseInt(lustoffset);
    let drumoffset = localStorage.getItem('drumoffset');
    auras.drums.offset = parseInt(drumoffset);
    let trink1offset = localStorage.getItem('trink1offset');
    auras.aptrink1.offset = parseInt(trink1offset);
    let trink2offset = localStorage.getItem('trink2offset');
    auras.aptrink2.offset = parseInt(trink2offset);
    let startpotoffset = localStorage.getItem('startpotoffset');
    auras.potion.offset = parseInt(startpotoffset);
    let runeoffset = localStorage.getItem('runeoffset');
    auras.rune.offset = parseInt(runeoffset);
    // spell option
    let lustoption = localStorage.getItem('lustoption');
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
    auras.drums.type = localStorage.getItem('drumoption');
    let spellcdoption = localStorage.getItem('spellcdoption');
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
    secondaryPotion = localStorage.getItem('secpotoption');
    /* Display initialization for fetched values */
    // fight settings initialization
    document.getElementById("simulations").value = iterations;
    document.getElementById("minfight").value = minfighttimer;
    document.getElementById("maxfight").value = maxfighttimer;
    document.getElementById("latency").value = latency * 1000;
    document.getElementById("playeruptime").value = playeruptime;
    document.getElementById("petuptime").value = petuptime;
    document.getElementById("weavetime").value = weavetime.toFixed(1);
    document.getElementById("huntersraid").value = huntersinraid;
    document.getElementById("berserkinghp").value = BerserkStartHP;
    document.getElementById("pet").value = selectedPet;
    document.getElementById("race").value = selectedRace;
    let targets = targetData.getNameKeyTargetPairs();
    let findtarget = targets.find(key => key.name == target.name);
    document.getElementById("targetSelect").value = findtarget.id;
    document.getElementById("armor").value = target.armor;
    document.getElementById("typeSelect").value = target.type;
    document.getElementById("level").value = target.level;

    document.getElementById("flask").value = localStorage.getItem('flask');
    document.getElementById("battle").value = localStorage.getItem('battle');
    document.getElementById("guardian").value = localStorage.getItem('guardian');
    document.getElementById("scrollagi").value = localStorage.getItem('scrollagi');
    document.getElementById("scrollstr").value = localStorage.getItem('scrollstr');
    document.getElementById("food").value = localStorage.getItem('food');
    document.getElementById("petscrollagi").value = localStorage.getItem('petscrollagi');
    document.getElementById("petscrollstr").value = localStorage.getItem('petscrollstr');
    document.getElementById("petfood").value = localStorage.getItem('petfood');

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
    //document.getElementById("runeoffset").value = auras.rune.offset;
    // spell options
    document.getElementById("lustoption").value = lustoption;
    document.getElementById("drumoption").value = auras.drums.type;
    document.getElementById("spellcdoption").value = spellcdoption;
    document.getElementById("secpotoption").value = secondaryPotion;

    // initialize the settings after loading
    selectedOptionsResults();
}

function clearSettingsCache(){
    localStorage.clear();
}