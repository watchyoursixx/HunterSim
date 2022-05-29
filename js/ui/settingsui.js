// default buffs for settings go here
var buffslist = [
    25898, // bok
    { id: 27141, talented: true }, // bom
    { id: 27143, talented: false }, // bow
    17007, // lotp
    { id: 25359, talented: true }, // GoA
    { id: 25528, talented: true }, // SoE
    25570, // MsTot
    27127, // AI
    { id: 26991, talented: true }, // GotW
    { id: 25392, talented: true }, // PW:F
    { id: 0, talented: false }, // BP
    { id: 0, talented: false }, // WF
    0, // heroic presence
    { id: 0, talented: false }, // BS
    0, // tsa
    0, // braided eternium
    0, // imp sanctity
    0  // feral crit idol
];
var SavedSets = []; // blank array for saving sets, stored in localstorage?

var filteredbuffs = [];
var playerconsumes = {
    battle_elixir: 22831,
    guardian_elixir: 22840,
    agi_scroll: 27498,
    food: 27664
};
var petconsumes = {
    pet_food:33874,
    str_scroll:27503
};
var talentindex = '6';
var whtalentlink = '';
var huntersinraid = 4;

// disable input for player and pet uptimes
document.getElementById("playeruptime").disabled = true;
document.getElementById("petuptime").disabled = true;
document.getElementById("weavepercent").disabled = true;
document.getElementById("shoutbonus2").disabled = true;

// filters out ids with 0s for the getStatsFromBuffs formula
function removeZeros(){
    
    function filterById(obj) {
      if (Number.isFinite(obj.id) && obj.id !== 0 || obj > 0) 
      {
        return true;
      } 
      return false;
    }
    
    filteredbuffs = buffslist.filter(filterById);
}

// called each time buffs change to filter zeros, get, recalc, and display them
function selectedOptionsResults(){
    removeZeros();
    selectedbuffs = getStatsFromBuffs(filteredbuffs);
    consumestats = getPlayerStatsFromConsumes(playerconsumes);
    petconsumestats = getPetStatsFromConsumes(petconsumes);
    initialize();
    displayStats();
    gearSlotsDisplay();
    storeData();
    //console.log(buffslist);
}

function auraUptimeSettings(){
    let hmuptime = document.getElementById("hmuptime").value;
    let hmbonus = document.getElementById("hmbonus").selected;
    let ewuptime = document.getElementById("ewuptime").value;
    let ewagil = document.getElementById("ewagil").value;
    let jowuptime = document.getElementById("jowuptime").value;
    let jocuptime = document.getElementById("jocuptime").value;
    let coruptime = document.getElementById("coruptime").value;
    let ffuptime = document.getElementById("ffuptime").value;
    let ffbonus = document.getElementById("ffbonus").selected;
    let sauptime = document.getElementById("sauptime").value;
    let sunderapp = document.getElementById("sunderapp").value;
    let ieuptime = document.getElementById("ieuptime").value;
    let bfuptime = document.getElementById("bfuptime").value;
    let misuptime = document.getElementById("misuptime").value;
    let coeuptime = document.getElementById("coeuptime").value;
    let coebonus = document.getElementById("coebonus").selected;
    let unluptime = document.getElementById("unlrageuptime").value;
    let ferocuptime = document.getElementById("ferocuptime").value;
    let ferocstacks = document.getElementById("ferocstacks").value;

    debuffs.hm.uptime_g = parseInt(hmuptime);
    debuffs.hm.improved = hmbonus ? true : false;
    debuffs.exposeweakness.uptime_g = parseInt(ewuptime);
    debuffs.exposeweakness.agi = parseInt(ewagil);
    debuffs.judgewisdom.uptime_g = parseInt(jowuptime);
    debuffs.judgecrusader.uptime_g = parseInt(jocuptime);
    debuffs.curseofreck.uptime_g = parseInt(coruptime);
    debuffs.faeriefire.uptime_g = parseInt(ffuptime);
    debuffs.faeriefire.improved = ffbonus ? true : false;
    debuffs.sunder.uptime_g = parseInt(sauptime);
    debuffs.sunder.stacktime = parseInt(sunderapp);
    debuffs.impexpose.uptime_g = parseInt(ieuptime);
    debuffs.misery.uptime_g = parseInt(misuptime);
    debuffs.bloodfrenzy.uptime_g = parseInt(bfuptime);
    debuffs.curseofele.uptime_g = parseInt(coeuptime);
    debuffs.curseofele.improved = coebonus ? true : false;
    partybuffs.unleashedrage.uptime_g = parseInt(unluptime);
    partybuffs.ferociousinsp.uptime_g = parseInt(ferocuptime);
    partybuffs.ferociousinsp.stacks = parseInt(ferocstacks);

    getStatsCapData();
    storeData();
}

function fightSettings(){
    let simulations = document.getElementById("simulations").value;
    let minfight = document.getElementById("minfight").value;
    let maxfight = document.getElementById("maxfight").value;
    let msdelay = document.getElementById("latency").value;
    let playerup = document.getElementById("playeruptime").value;
    let petup = document.getElementById("petuptime").value;
    let weave = document.getElementById("weavetime").value;
    let huntercount = document.getElementById("huntersinraid").value;
    let berserkhp = document.getElementById("berserkinghp").value;
    iterations = parseInt(simulations);
    minfighttimer = parseInt(minfight);
    maxfighttimer = parseInt(maxfight);
    latency = parseInt(msdelay)/1000;
    playeruptime = parseInt(playerup);
    petuptime = parseInt(petup);
    weavetime = JSON.parse(weave);
    huntersinraid = parseInt(huntercount);
    BerserkStartHP = parseInt(berserkhp);
    storeData();

}
// check for kings toggle
function kingsCheck() {
    let isChecked = document.getElementById("kings").checked;
    buffslist[0] = isChecked ? 25898 : 0;
    selectedOptionsResults();

}
// check for might toggle and modifier
function mightCheck() {
    let isChecked = document.getElementById("might").checked;
    let isTalented = document.getElementById("mightmod").selected;
    buffslist[1].id = isChecked ? 27141 : 0;
    buffslist[1].talented = isTalented ? true : false;
    selectedOptionsResults();

}
// check for wisdom toggle and modifier
function wisdomCheck() {
    let isChecked = document.getElementById("wisdom").checked;
    let isTalented = document.getElementById("wisdommod").selected;
    buffslist[2].id = isChecked ? 27143 : 0;
    buffslist[2].talented = isTalented ? true : false;
    selectedOptionsResults();

}
// check for leader of the pack toggle
function lotpCheck() {
    let isChecked = document.getElementById("lotp").checked; 
    buffslist[3] = isChecked ? 17007 : 0;
    let isImproved = document.getElementById("lotpidol").selected;
    if (isChecked && isImproved) {
        buffslist[17] = 39926;
    } 
    else { buffslist[17] = 0; }
    selectedOptionsResults();

}
// check for grace of air and strength of earth toggle and modifier
function totemCheck() {
    let goaIsChecked = document.getElementById("goa").checked;
    let soeIsChecked = document.getElementById("soe").checked;
    let isTalented = document.getElementById("imptotem").selected;
    buffslist[4].id = goaIsChecked ? 25359 : 0;
    buffslist[4].talented = isTalented ? true : false;
    buffslist[5].id = soeIsChecked ? 25528 : 0;
    buffslist[5].talented = isTalented ? true : false;
    selectedOptionsResults();

}
// check for mana spring toggle
function manaspringCheck() {
    let isChecked = document.getElementById("manaspring").checked; 
    buffslist[6] = isChecked ? 25570 : 0;
    selectedOptionsResults();

}
// check for Arcane Brilliance toggle
function aiCheck() {
    let isChecked = document.getElementById("ai").checked; 
    buffslist[7] = isChecked ? 27127 : 0;
    selectedOptionsResults();

}
// check for Gift of the Wild toggle and modifier
function gotwCheck() {
    let isChecked = document.getElementById("gotw").checked;
    let isTalented = document.getElementById("gotwmod").selected;
    buffslist[8].id = isChecked ? 26991 : 0;
    buffslist[8].talented = isTalented ? true : false;
    selectedOptionsResults();

}
// check for Prayer of Fortitude toggle and modifier
function fortCheck() {
    let isChecked = document.getElementById("fort").checked;
    let isTalented = document.getElementById("fortmod").selected;
    buffslist[9].id = isChecked ? 25392 : 0;
    buffslist[9].talented = isTalented ? true : false;
    selectedOptionsResults();

}
// check for Blood Pact toggle and modifier
function pactCheck() {
    let isChecked = document.getElementById("pact").checked;
    let isTalented = document.getElementById("pactmod").selected;
    buffslist[10].id = isChecked ? 27268 : 0;
    buffslist[10].talented = isTalented ? true : false;
    selectedOptionsResults();

}
// check for Windfury Totem toggle and modifier
function windfuryCheck() {
    let isChecked = document.getElementById("windfury").checked;
    let isTalented = document.getElementById("windfurymod").selected;
    buffslist[11].id = isChecked ? 25587 : 0;
    buffslist[11].talented = isTalented ? true : false;
    selectedOptionsResults();

}
// check for battle shout toggle and modifier
function shoutCheck() {
    let isChecked = document.getElementById("shout").checked;
    let isTalented = document.getElementById("shoutmod").selected;
    buffslist[13].id = isChecked ? 2048 : 0;
    buffslist[13].talented = isTalented ? true : false;
    selectedOptionsResults();

}
// check for Trueshot Aura toggle
function tsaCheck() {
    let isChecked = document.getElementById("tsa").checked; 
    buffslist[14] = isChecked ? 27066 : 0;
    selectedOptionsResults();

}
// check for Braided Eternium Chain toggle
function braidedCheck() {
    let isChecked = document.getElementById("braided").checked; 
    buffslist[15] = isChecked ? 31025 : 0;
    selectedOptionsResults();

}
// check for Heroic Presence toggle
function heroicpresCheck() {
    let isChecked = document.getElementById("heroicpres").checked; 
    buffslist[12] = isChecked ? 6562 : 0;
    selectedOptionsResults();

}
// check for Improved Sanctity Aura toggle
function sanctCheck() {
    let isChecked = document.getElementById("sanct").checked; 
    buffslist[16] = isChecked ? 31870 : 0;
    selectedOptionsResults();

}
// below functions check if selected check the list of items then call the update
function flaskSelection() {
    let isSelected = document.getElementById("flask").value;
    switch (isSelected) {
        case "assault":
            playerconsumes.flask = 22854;
        break;
        case "wisdom":
            playerconsumes.flask = 13511;
        break;
        case "bandit":
            playerconsumes.flask = 32599;
        break;
        case "fortification":
            playerconsumes.flask = 22851;
        break;
        case "titans":
            playerconsumes.flask = 13510;
        break;
        case "restoration":
            playerconsumes.flask = 22853;
        break;
        case "none":
            delete playerconsumes.flask;
        break;
    }
    if ((document.getElementById("battle").value != "none" || document.getElementById("guardian").value != "none") && document.getElementById("flask").value != "none") {
        document.getElementById("battle").value = "none";
        document.getElementById("guardian").value = "none";
        delete playerconsumes.battle_elixir;
        delete playerconsumes.guardian_elixir;
    }
    selectedOptionsResults();
}
function battleSelection() {
    let isSelected = document.getElementById("battle").value;
    switch (isSelected) {
        case "majoragi":
            playerconsumes.battle_elixir = 22831;
        break;
        case "mongoose":
            playerconsumes.battle_elixir = 13452;
        break;
        case "demonslaying":
            playerconsumes.battle_elixir = 9224;
        break;
        case "felstrength":
            playerconsumes.battle_elixir = 31679;
        break;
        case "onslaught":
            playerconsumes.battle_elixir = 28102;
        break;
        case "greatagi":
            playerconsumes.battle_elixir = 9187;
        break;
        case "agility":
            playerconsumes.battle_elixir = 8949;
        break;
        case "mastery":
            playerconsumes.battle_elixir = 28104;
        break;
        case "none":
            delete playerconsumes.battle_elixir;
        break;
    }
    if (document.getElementById("flask").value != "none" && document.getElementById("battle").value != "none") {
        document.getElementById("flask").value = "none";
        delete playerconsumes.flask;
    }
    selectedOptionsResults();
}
function guardSelection() {
    let isSelected = document.getElementById("guardian").value;
    switch (isSelected) {
        case "majormageblood":
            playerconsumes.guardian_elixir = 22840;
        break;
        case "draenicwisdom":
            playerconsumes.guardian_elixir = 32067;
        break;
        case "mageblood":
            playerconsumes.guardian_elixir = 20007;
        break;
        case "intellect":
            playerconsumes.guardian_elixir = 9179;
        break;
        case "fortitude":
            playerconsumes.guardian_elixir = 32062;
        break;
        case "none":
            delete playerconsumes.guardian_elixir;
        break;
    }
    if (document.getElementById("flask").value != "none" && document.getElementById("guardian").value != "none") {
        document.getElementById("flask").value = "none";
        delete playerconsumes.flask;
    }
    selectedOptionsResults();
}
function scrollagiSelection() {
    let isSelected = document.getElementById("scrollagi").value;
    switch (isSelected) {
        case "agi5":
            playerconsumes.agi_scroll = 27498;
        break;
        case "agi4":
            playerconsumes.agi_scroll = 10309;
        break;
        case "agi3":
            playerconsumes.agi_scroll = 4425;
        break;
        case "agi2":
            playerconsumes.agi_scroll = 1477;
        break;
        case "agi1":
            playerconsumes.agi_scroll = 3012;
        break;
        case "none":
            delete playerconsumes.agi_scroll;
        break;
    }
    selectedOptionsResults();
}
function scrollstrSelection() {
    let isSelected = document.getElementById("scrollstr").value;
    switch (isSelected) {
        case "str5":
            playerconsumes.str_scroll = 27503;
        break;
        case "str4":
            playerconsumes.str_scroll = 10310;
        break;
        case "str3":
            playerconsumes.str_scroll = 4426;
        break;
        case "str2":
            playerconsumes.str_scroll = 2289;
        break;
        case "str1":
            playerconsumes.str_scroll = 954;
        break;
        case "none":
            delete playerconsumes.str_scroll;
        break;
    }
    selectedOptionsResults();
}
function foodSelection() {
    let isSelected = document.getElementById("food").value;
    switch (isSelected) {
        case "sporefish":
            playerconsumes.food = 33292;
        break;
        case "mudfish":
            playerconsumes.food = 27664;
        break;
        case "squid":
            playerconsumes.food = 13928;
        break;
        case "ravager":
            playerconsumes.food = 27655;
        break;
        case "crawdad":
            playerconsumes.food = 27677;
        break;
        case "spicytalbuk":
            playerconsumes.food = 33872;
        break;
        case "talbuk":
            playerconsumes.food = 27660;
        break;
        case "warp":
            playerconsumes.food = 27659;
        break;
        case "none":
            delete playerconsumes.food;
        break;
    }
    selectedOptionsResults();
}
function petscrollagiSelection() {
    let isSelected = document.getElementById("petscrollagi").value;
    switch (isSelected) {
        case "agi5":
            petconsumes.agi_scroll = 27498;
        break;
        case "agi4":
            petconsumes.agi_scroll = 10309;
        break;
        case "agi3":
            petconsumes.agi_scroll = 4425;
        break;
        case "agi2":
            petconsumes.agi_scroll = 1477;
        break;
        case "agi1":
            petconsumes.agi_scroll = 3012;
        break;
        case "none":
            delete petconsumes.agi_scroll;
        break;
    }
    selectedOptionsResults();
}
function petscrollstrSelection() {
    let isSelected = document.getElementById("petscrollstr").value;
    switch (isSelected) {
        case "str5":
            petconsumes.str_scroll = 27503;
        break;
        case "str4":
            petconsumes.str_scroll = 10310;
        break;
        case "str3":
            petconsumes.str_scroll = 4426;
        break;
        case "str2":
            petconsumes.str_scroll = 2289;
        break;
        case "str1":
            petconsumes.str_scroll = 954;
        break;
        case "none":
            delete petconsumes.str_scroll;
        break;
    }
    selectedOptionsResults();
}
function petfoodSelection() {
    let isSelected = document.getElementById("petfood").value;
    switch (isSelected) {
        case "kiblers":
            petconsumes.pet_food = 33874;
        break;
        case "sporeling":
            petconsumes.pet_food = 27656;
        break;
        case "none":
            delete petconsumes.pet_food;
        break;
    }
    selectedOptionsResults();
}

// 0 for night elf, 1 for dwarf, 2 for draenei, 3 for orc, 4 for troll, 5 for tauren, 6 for blood elf
function getRace() {
    selectedRace = parseInt(document.getElementById("race").value);
    document.getElementById("racedisplay").innerHTML = races[selectedRace].name;
    selectedOptionsResults();
}

function getPet() {
    selectedPet = parseInt(document.getElementById("pet").value);
    //document.getElementById("petdisplay").innerHTML
    selectedOptionsResults();
}


function selectTalents(talent){

    
    let customtalentlink = document.getElementById("customtalent").value;
    let regioncheck = customtalentlink.substr(0,11);
    let customtalents = "";
    if(regioncheck !== "https://tbc") {
        customtalents = customtalentlink.slice(46);
    }
    else {
        customtalents = customtalentlink.slice(43);
    }
    switch (talent) {
        case "6":
            talents = T_41_20_0;
            document.getElementById("currtalent").innerHTML = "41/20/0";
            document.getElementById("specimg").src = "images/Ability_Hunter_BeastTaming.png";
        break;
        case "5":
            talents = T_0_20_41;
            document.getElementById("currtalent").innerHTML = "0/20/41";
            document.getElementById("specimg").src = "images/Ability_Hunter_Camoflauge.png";
        break;
        case "4":
            talents = T_7_20_34;
            document.getElementById("currtalent").innerHTML = "7/20/34";
            document.getElementById("specimg").src = "images/Ability_Hunter_Camoflauge.png";
        break;
        case "3":
            talents = T_5_20_36;
            document.getElementById("currtalent").innerHTML = "5/20/36";
            document.getElementById("specimg").src = "images/Ability_Hunter_Camoflauge.png";
        break;
        case "2":
            talents = T_0_27_34;
            document.getElementById("currtalent").innerHTML = "0/27/34";
            document.getElementById("specimg").src = "images/Ability_Hunter_Camoflauge.png";
        break;
        case "1":
            talents = T_17_44_0;
            document.getElementById("currtalent").innerHTML = "17/44/0";
            document.getElementById("specimg").src = "images/Ability_Marksmanship.png";
        break;
        case "0":
            if (customtalentlink !== "") {
                talents = parseTalents(customtalents);
                document.getElementById("currtalent").innerHTML = "custom";
                document.getElementById("specimg").src = "images/Ability_Marksmanship.png";
            }
        break;
    }
    whtalentlink = customtalentlink;
    talentindex = talent;
    selectedOptionsResults();
}

function spellEnableCheck(){
    let rapidcheck = document.getElementById("rapidcheck").checked;
    let beastcheck = document.getElementById("beastcheck").checked;
    let racialcheck = document.getElementById("racialcheck").checked;
    let lustcheck = document.getElementById("lustcheck").checked;
    let drumcheck = document.getElementById("drumcheck").checked;
    let hastecheck = document.getElementById("hastecheck").checked;
    let secpotcheck = document.getElementById("secpotcheck").checked;
    let runecheck = document.getElementById("runecheck").checked;
    let multicheck = document.getElementById("multicheck").checked;
    let arcanecheck = document.getElementById("arcanecheck").checked;
    let raptorcheck = document.getElementById("raptorcheck").checked;
    let meleecheck = document.getElementById("meleecheck").checked;

    auras.rapid.enable = rapidcheck;
    beastenable = beastcheck;
    racialenable = racialcheck;
    auras.lust.enable = lustcheck;
    auras.drums.enable = drumcheck;
    auras.potion.primary = hastecheck;
    auras.potion.secondary = secpotcheck;
    auras.rune.enable = runecheck;
    
    SPELLS.multishot.enable = multicheck;
    SPELLS.arcaneshot.enable = arcanecheck;
    SPELLS.raptorstrike.enable = raptorcheck;
    SPELLS.melee.enable = meleecheck;
    storeData();

}

function spellOffsets(){
    let rapidoffset = document.getElementById("rapidoffset").value;
    let beastoffset = document.getElementById("beastoffset").value;
    let racialoffset = document.getElementById("racialoffset").value;
    let lustoffset = document.getElementById("lustoffset").value;
    let drumoffset = document.getElementById("drumoffset").value;
    let trink1offset = document.getElementById("trink1offset").value;
    let trink2offset = document.getElementById("trink2offset").value;
    let startpotoffset = document.getElementById("startpotoffset").value;

    auras.rapid.offset = parseInt(rapidoffset);
    auras.beastwithin.offset = parseInt(beastoffset);
    auras.berserk.offset = parseInt(racialoffset);
    auras.bloodfury.offset = parseInt(racialoffset);
    auras.lust.offset = parseInt(lustoffset);
    auras.drums.offset = parseInt(drumoffset);
    auras.aptrink1.offset = (auras.aptrink1.enable) ? parseInt(trink1offset): 0;
    auras.aptrink2.offset = (auras.aptrink2.enable) ? parseInt(trink2offset): 0;
    auras.potion.offset = parseInt(startpotoffset);
    storeData();
}

function spellOptions(){
    let lustoption = document.getElementById("lustoption").value;
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
    auras.drums.type = document.getElementById("drumoption").value;
    
    let spellcdoption = document.getElementById("spellcdoption").value;
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
    secondaryPotion = document.getElementById("secpotoption").value;
    
    storeData();

}