// default buffs for settings go here
var buffslist = [
    0, // bok
    { id: 0, talented: false }, // bom
    { id: 0, talented: false }, // bow
    0, // lotp
    { id: 0, talented: false }, // GoA
    { id: 0, talented: false }, // SoE
    0, // MsTot
    0, // AI
    { id: 0, talented: false }, // GotW
    { id: 0, talented: false }, // PW:F
    { id: 0, talented: false }, // BP
    { id: 0, talented: false }, // WF
    0, // heroic presence
    { id: 0, talented: false }, // BS
    0, // tsa
    0, // braided eternium
    0 // imp sanctity
];
var filteredbuffs = [];
var playerconsumes = {};
var petconsumes = {};
var talentindex = '6';
var whtalentlink = '';

// show the stats on the HTML
function displayStats(){
    document.getElementById("str").innerHTML = Str;
    document.getElementById("agi").innerHTML = Agi;
    document.getElementById("stam").innerHTML = Stam;
    document.getElementById("int").innerHTML = Int;
    document.getElementById("spi").innerHTML = Spi;
    document.getElementById("rap").innerHTML = Math.floor(BaseRAP);
    document.getElementById("rangehit").innerHTML = RangeHitChance.toFixed(2) + " %";
    document.getElementById("rangecrit").innerHTML = RangeCritChance.toFixed(2) + " %";
    document.getElementById("haste").innerHTML = HasteRating;
    document.getElementById("arp").innerHTML = ArmorPen;
    document.getElementById("map").innerHTML = Math.floor(BaseMAP);
    document.getElementById("meleehit").innerHTML = MeleeHitChance.toFixed(2) + " %";
    document.getElementById("meleecrit").innerHTML = MeleeCritChance.toFixed(2) + " %";
    document.getElementById("exp").innerHTML = Expertise;
    document.getElementById("mp5").innerHTML = ManaPer5;
}

function displayDPSResults(){
    let dpsrounding = (avgDPS > 1000) ? 1 : 2;
    let errrounding = (err > 10) ? 1 : 2;
    document.getElementById("dpsresult").innerHTML = avgDPS.toFixed(dpsrounding);
    document.getElementById("dpsmin").innerHTML = mindps.toFixed(2) + " min";
    document.getElementById("dpsmax").innerHTML = maxdps.toFixed(2) + " max";
    document.getElementById("dpserr").innerHTML = "DPS ​± " + err.toFixed(errrounding);
    document.getElementById("executetime").innerHTML = Math.round(executecodetime * 10000) / 10000 + " s";
}
// initialize stats display
displayStats();
// Get the modal
var modal = document.getElementById("settingsmodal");

// Get the button that opens the modal
var btn = document.getElementById("settingsbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
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

function initializeTargetDropdown() {
    const GruulId = 19044;
    let targets = targetData.getNameKeyTargetPairs();
    var targetsOptions = "";
    for (const target of targets) {
        targetsOptions += "<option value= "+target.id+" >" + target.name + "</option>";
      }   
    document.getElementById("targetSelect").innerHTML = targetsOptions;
    document.getElementById('targetSelect').value = GruulId;
    document.getElementById("armor").disabled = true;
    document.getElementById("typeSelect").disabled = true;
    document.getElementById("level").disabled = true;
    selectTarget(GruulId);
}

function selectTarget(id) {

    target = targetData.selectTarget(id);
    if(id === "0") {
        document.getElementById("armor").disabled = false;
        document.getElementById("typeSelect").disabled = false;
        document.getElementById("level").disabled = false;
        target.armor = parseInt(document.getElementById("armor").value);
    }
    else { 
        document.getElementById("armor").disabled = true;
        document.getElementById("typeSelect").disabled = true;
        document.getElementById("level").disabled = true;
        document.getElementById("armor").value = target.armor;
    }
    document.getElementById("typeSelect").value = target.type;
    document.getElementById("level").value = target.level;
    update();
}
initializeTargetDropdown();

function initializeImportSets(){

    let imports = DEFAULT_GEAR_SETS;
    var importOptions = "";
    let i = 0;
    for (i=0; i <= 7; i++) {
        importOptions += "<option value= "+i+" >" + imports[i].description + "</option>";
    }
    //console.log(importOptions);
    document.getElementById("gearprofile").innerHTML = importOptions;
    document.getElementById("gearprofile").value = 4;
    selectGearlist();
}
function selectGearlist() {

    let gearindex = document.getElementById("gearprofile").value;
    let gearobj = DEFAULT_GEAR_SETS[gearindex];
    gear = gearobj.data;
    console.log(gear);
    selectedOptionsResults();
}

function fightSettings(){
    let simulations = document.getElementById("simulations").value;
    let minfight = document.getElementById("minfight").value;
    let maxfight = document.getElementById("maxfight").value;
    let msdelay = document.getElementById("latency").value;
    let playerup = document.getElementById("playeruptime").value;
    let petup = document.getElementById("petuptime").value;
    let weave = document.getElementById("weavetime").value;
    let huntinraid = document.getElementById("huntersraid").value;
    let berserkhp = document.getElementById("berserkinghp").value;
    iterations = parseInt(simulations);
    minfighttimer = parseInt(minfight);
    maxfighttimer = parseInt(maxfight);
    latency = parseInt(msdelay)/1000;
    playeruptime = parseInt(playerup);
    petuptime = parseInt(petup);
    weavetime = JSON.parse(weave);
    huntersraid = parseInt(huntinraid);
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
    selectedRace = document.getElementById("race").value;
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
        break;
        case "5":
            talents = T_0_20_41;
        break;
        case "4":
            talents = T_7_20_34;
        break;
        case "3":
            talents = T_5_20_36;
        break;
        case "2":
            talents = T_0_27_34;
        break;
        case "1":
            talents = T_17_44_0;
        break;
        case "0":
            if (customtalentlink !== "") {
                talents = parseTalents(customtalents);
            }
        break;
    }
    whtalentlink = customtalentlink;
    talentindex = talent;
    selectedOptionsResults();
}

function gearSlotsDisplay(){
    
    let headitem = gear.head.id;
    let neckitem = gear.neck.id;
    let shoulderitem = gear.shoulder.id;
    let backitem = gear.back.id;
    let chestitem = gear.chest.id;
    let wristitem = gear.wrist.id;
    let handitem = gear.hand.id;
    let waistitem = gear.waist.id;
    let legitem = gear.leg.id;
    let feetitem = gear.feet.id;
    let ring1item = gear.ring1.id;
    let ring2item = gear.ring2.id;
    let trink1item = gear.trinket1.id;
    let trink2item = gear.trinket2.id;
    let mainhanditem = gear.mainhand.id;
    let offhanditem = (offhandDisabled === false) ? gear.offhand.id : 0;
    let rangeitem = gear.range.id;
    //let ammoitem = gear.ammo.id;
    
    // head
    let headicon = "https://wow.zamimg.com/images/wow/icons/large/"+HEADS[gear.head.id].icon+".jpg";
    document.getElementById("headicon").src = headicon;
    let headgem1 = 0;
    let headgem2 = 0;
    let headgem3 = 0;
    if(gear.head.hasOwnProperty('gems')){
        headgem1 = gear.head.gems[0] || 0;
        headgem2 = gear.head.gems[1] || 0;
        headgem3 = gear.head.gems[2] || 0;
    }
    let headench = gear.head.enchant || 0;
    let headencheffect = (headench > 0) ? "&ench="+HEAD_ENCHANTS[gear.head.enchant].effectId : 0;
    let headgemlist = "&gems="+headgem1+":"+headgem2+":"+headgem3;
    let headpcslist = "&pcs="+headitem+":"+shoulderitem+":"+chestitem+":"+handitem+":"+legitem;
    let headdata = headitem + headencheffect + headgemlist+ headpcslist;

    document.getElementById("headslot").href = "https://tbc.wowhead.com/item="+ headdata;
    document.getElementById("headslot").innerHTML = HEADS[gear.head.id].name;
    document.getElementById("headench").href = (headench > 0) ? "https://tbc.wowhead.com/spell="+ headench : "";
    document.getElementById("headench").innerHTML = (headench > 0) ? HEAD_ENCHANTS[gear.head.enchant].name: "No Enchant";
    // neck
    let neckicon = "https://wow.zamimg.com/images/wow/icons/large/"+NECKS[gear.neck.id].icon+".jpg";
    document.getElementById("neckicon").src = neckicon;
    let neckgem1 = 0;
    let neckgem2 = 0;
    if(gear.neck.hasOwnProperty('gems')){
        neckgem1 = gear.neck.gems[0] || 0;
        neckgem2 = gear.neck.gems[1] || 0;
    }
    let neckgemlist = "&gems="+neckgem1+":"+neckgem2;
    neckdata = neckitem + neckgemlist;

    document.getElementById("neckslot").href = "https://tbc.wowhead.com/item="+ neckdata;
    document.getElementById("neckslot").innerHTML = NECKS[gear.neck.id].name;

    // shoulder
    let shouldericon = "https://wow.zamimg.com/images/wow/icons/large/"+SHOULDERS[gear.shoulder.id].icon+".jpg";
    document.getElementById("shouldericon").src = shouldericon;
    let shouldergem1 = 0;
    let shouldergem2 = 0;
    if(gear.shoulder.hasOwnProperty('gems')){
        shouldergem1 = gear.shoulder.gems[0] || 0;
        shouldergem2 = gear.shoulder.gems[1] || 0;
    }
    let shoulderench = gear.shoulder.enchant || 0;
    let shoulderencheffect = (shoulderench > 0) ? "&ench="+SHOULDER_ENCHANTS[gear.shoulder.enchant].effectId : 0;
    let shouldergemlist = "&gems="+shouldergem1+":"+shouldergem2;
    let shoulderpcslist = "&pcs="+headitem+":"+shoulderitem+":"+chestitem+":"+handitem+":"+legitem;
    shoulderdata = shoulderitem + shoulderencheffect + shouldergemlist+ shoulderpcslist;
    
    document.getElementById("shoulderslot").href = "https://tbc.wowhead.com/item="+ shoulderdata;
    document.getElementById("shoulderslot").innerHTML = SHOULDERS[gear.shoulder.id].name;
    document.getElementById("shoulderench").href = (headench > 0) ? "https://tbc.wowhead.com/spell="+ shoulderench : "";
    document.getElementById("shoulderench").innerHTML = (headench > 0) ? SHOULDER_ENCHANTS[gear.shoulder.enchant].name: "No Enchant";
    
    // back
    let backicon = "https://wow.zamimg.com/images/wow/icons/large/"+BACKS[gear.back.id].icon+".jpg";
    document.getElementById("backicon").src = backicon;
    let backgem1 = 0;
    if(gear.back.hasOwnProperty('gems')){
        backgem1 = gear.back.gems[0] || 0;
    }
    let backench = gear.back.enchant || 0;
    let backencheffect = (backench > 0) ? "&ench="+BACK_ENCHANTS[gear.back.enchant].effectId : 0;
    let backgemlist = "&gems="+backgem1;
    backdata = backitem + backencheffect + backgemlist;

    document.getElementById("backslot").href = "https://tbc.wowhead.com/item="+ backdata;
    document.getElementById("backslot").innerHTML = BACKS[gear.back.id].name;
    document.getElementById("backench").href = (backench > 0) ? "https://tbc.wowhead.com/spell="+ backench : "";
    document.getElementById("backench").innerHTML = (backench > 0) ? BACK_ENCHANTS[gear.back.enchant].name: "No Enchant";
    
    // chest
    let chesticon = "https://wow.zamimg.com/images/wow/icons/large/"+CHESTS[gear.chest.id].icon+".jpg";
    document.getElementById("chesticon").src = chesticon;
    let chestgem1 = 0;
    let chestgem2 = 0;
    let chestgem3 = 0;
    if(gear.chest.hasOwnProperty('gems')){
        chestgem1 = gear.chest.gems[0] || 0;
        chestgem2 = gear.chest.gems[1] || 0;
        chestgem3 = gear.chest.gems[2] || 0;
    }
    let chestench = gear.chest.enchant || 0;
    let chestencheffect = (chestench > 0) ? "&ench="+CHEST_ENCHANTS[gear.chest.enchant].effectId : 0;
    let chestgemlist = "&gems="+chestgem1+":"+chestgem2+":"+chestgem3;
    let chestpcslist = "&pcs="+headitem+":"+shoulderitem+":"+chestitem+":"+handitem+":"+legitem;
    chestdata = chestitem + chestencheffect + chestgemlist+ chestpcslist;0

    document.getElementById("chestslot").href = "https://tbc.wowhead.com/item="+ chestdata;
    document.getElementById("chestslot").innerHTML = CHESTS[gear.chest.id].name;
    document.getElementById("chestench").href = (chestench > 0) ? "https://tbc.wowhead.com/spell="+ chestench : "";
    document.getElementById("chestench").innerHTML = (chestench > 0) ? CHEST_ENCHANTS[gear.chest.enchant].name: "No Enchant";
    
    // wrist
    let wristicon = "https://wow.zamimg.com/images/wow/icons/large/"+WRISTS[gear.wrist.id].icon+".jpg";
    document.getElementById("wristicon").src = wristicon;
    let wristgem1 = 0;
    if(gear.wrist.hasOwnProperty('gems')){
        wristgem1 = gear.wrist.gems[0] || 0;
    }
    let wristench = gear.wrist.enchant || 0;
    let wristencheffect = (wristench > 0) ? "&ench="+WRIST_ENCHANTS[gear.wrist.enchant].effectId : 0;
    let wristgemlist = "&gems="+wristgem1;
    let wristpcslist = "&pcs="+headitem+":"+shoulderitem+":"+chestitem+":"+handitem+":"+legitem;
    wristdata = wristitem + wristencheffect + wristgemlist+ wristpcslist;

    document.getElementById("wristslot").href = "https://tbc.wowhead.com/item="+ wristdata;
    document.getElementById("wristslot").innerHTML = WRISTS[gear.wrist.id].name;
    document.getElementById("wristench").href = (wristench > 0) ? "https://tbc.wowhead.com/spell="+ wristench:""; 
    document.getElementById("wristench").innerHTML = (wristench > 0) ? WRIST_ENCHANTS[gear.wrist.enchant].name: "No Enchant";
    
    // mainhand
    let mainhandicon = "https://wow.zamimg.com/images/wow/icons/large/"+MELEE_WEAPONS[gear.mainhand.id].icon+".jpg";
    document.getElementById("mainhandicon").src = mainhandicon;
    let mainhandgem1 = 0;
    let mainhandgem2 = 0;
    let mainhandgem3 = 0;
    if(gear.mainhand.hasOwnProperty('gems')){
        mainhandgem1 = gear.mainhand.gems[0] || 0;
        mainhandgem2 = gear.mainhand.gems[1] || 0;
        mainhandgem3 = gear.mainhand.gems[2] || 0;
    }
    let mainhandench = gear.mainhand.enchant || 0;
    
    let mainhandencheffect = (mainhandench > 0) ? "&ench="+MELEE_ENCHANTS[gear.mainhand.enchant].effectId : 0;
    let mainhandgemlist = "&gems="+mainhandgem1+":"+mainhandgem2+":"+mainhandgem3;
    mainhanddata = mainhanditem + mainhandencheffect + mainhandgemlist;

    document.getElementById("mainhandslot").href = "https://tbc.wowhead.com/item="+ mainhanddata;
    document.getElementById("mainhandslot").innerHTML = MELEE_WEAPONS[gear.mainhand.id].name;
    document.getElementById("mainhandench").href = (mainhandench > 0) ? "https://tbc.wowhead.com/spell="+ mainhandench :"";  
    document.getElementById("mainhandench").innerHTML = (mainhandench > 0) ? MELEE_ENCHANTS[gear.mainhand.enchant].name: "No Enchant";
    if(offhanditem == 0){
        document.getElementById("offhandslot").href = "#";
        document.getElementById("offhandslot").innerHTML = "Off Hand";
        document.getElementById("offhandench").href = "#"; 
        document.getElementById("offhandench").innerHTML = "No Enchant";
        let offhandicon = "images/OffHand.jpg";
        document.getElementById("offhandicon").src = offhandicon;
    }
    // offhand
    if(offhanditem !== 0){
        let offhandicon = "https://wow.zamimg.com/images/wow/icons/large/"+MELEE_WEAPONS[gear.offhand.id].icon+".jpg";
        document.getElementById("offhandicon").src = offhandicon;
        let offhandgem1 = 0;
        let offhandgem2 = 0;
        let offhandgem3 = 0;
        if(gear.offhand.hasOwnProperty('gems')){
            offhandgem1 = gear.offhand.gems[0] || 0;
            offhandgem2 = gear.offhand.gems[1] || 0;
            offhandgem3 = gear.offhand.gems[2] || 0;
        }
        let offhandench = gear.offhand.enchant || 0;
        let offhandencheffect = (offhandench > 0) ? "&ench="+MELEE_ENCHANTS[gear.offhand.enchant].effectId : 0;
        let offhandgemlist = "&gems="+offhandgem1+":"+offhandgem2+":"+offhandgem3;
        offhanddata = offhanditem + offhandencheffect + offhandgemlist;
        document.getElementById("offhandslot").href = "https://tbc.wowhead.com/item="+ offhanddata;
        document.getElementById("offhandslot").innerHTML = MELEE_WEAPONS[gear.offhand.id].name;
        document.getElementById("offhandench").href = (offhandench > 0) ? "https://tbc.wowhead.com/spell="+ offhandench : ""; 
        document.getElementById("offhandench").innerHTML = (offhandench > 0) ? MELEE_ENCHANTS[gear.offhand.enchant].name: "No Enchant";
    }

    // ranged
    let rangeicon = "https://wow.zamimg.com/images/wow/icons/large/"+RANGED_WEAPONS[gear.range.id].icon+".jpg";
    document.getElementById("rangeicon").src = rangeicon;
    let rangegem1 = 0;
    let rangegem2 = 0;
    if(gear.range.hasOwnProperty('gems')){
        rangegem1 = gear.range.gems[0] || 0;
        rangegem2 = gear.range.gems[1] || 0;
    }
    let rangeench = gear.range.enchant || 0;
    let rangeencheffect = (rangeench > 0) ? "&ench="+RANGE_ENCHANTS[gear.range.enchant].effectId : 0;
    let rangegemlist = "&gems="+rangegem1+":"+rangegem2;
    rangedata = rangeitem + rangeencheffect + rangegemlist;

    document.getElementById("rangeslot").href = "https://tbc.wowhead.com/item="+ rangedata;
    document.getElementById("rangeslot").innerHTML = RANGED_WEAPONS[gear.range.id].name;
    document.getElementById("rangeench").href = (rangeench > 0) ? "https://tbc.wowhead.com/spell="+ rangeench : "";
    document.getElementById("rangeench").innerHTML = (rangeench > 0) ? RANGE_ENCHANTS[gear.range.enchant].name: "No Enchant";
    // hand
    let handicon = "https://wow.zamimg.com/images/wow/icons/large/"+HANDS[gear.hand.id].icon+".jpg";
    document.getElementById("handicon").src = handicon;
    let handgem1 = 0;
    let handgem2 = 0;
    if(gear.hand.hasOwnProperty('gems')){
        handgem1 = gear.hand.gems[0] || 0;
        handgem2 = gear.hand.gems[1] || 0;
    }
    let handench = gear.hand.enchant || 0;
    let handencheffect = (handench > 0) ? "&ench="+HAND_ENCHANTS[gear.hand.enchant].effectId : 0;
    let handgemlist = "&gems="+handgem1+":"+handgem2;
    let handpcslist = "&pcs="+headitem+":"+shoulderitem+":"+chestitem+":"+handitem+":"+legitem;
    handdata = handitem + handencheffect + handgemlist+ handpcslist;

    document.getElementById("handslot").href = "https://tbc.wowhead.com/item="+ handdata;
    document.getElementById("handslot").innerHTML = HANDS[gear.hand.id].name;
    document.getElementById("handench").href = (handench > 0) ? "https://tbc.wowhead.com/spell="+ handench : "";
    document.getElementById("handench").innerHTML = (handench > 0) ? HAND_ENCHANTS[gear.hand.enchant].name: "No Enchant";
    // waist
    let waisticon = "https://wow.zamimg.com/images/wow/icons/large/"+WAISTS[gear.waist.id].icon+".jpg";
    document.getElementById("waisticon").src = waisticon;
    let waistgem1 = 0;
    let waistgem2 = 0;
    if(gear.waist.hasOwnProperty('gems')){
        waistgem1 = gear.waist.gems[0] || 0;
        waistgem2 = gear.waist.gems[1] || 0;
    }
    let waistgemlist = "&gems="+waistgem1+":"+waistgem2;
    waistdata = waistitem + waistgemlist;

    document.getElementById("waistslot").href = "https://tbc.wowhead.com/item="+ waistdata;
    document.getElementById("waistslot").innerHTML = WAISTS[gear.waist.id].name;

    // leg
    let legicon = "https://wow.zamimg.com/images/wow/icons/large/"+LEGS[gear.leg.id].icon+".jpg";
    document.getElementById("legicon").src = legicon;
    let leggem1 = 0;
    let leggem2 = 0;
    let leggem3 = 0;
    if(gear.leg.hasOwnProperty('gems')){
        leggem1 = gear.leg.gems[0] || 0;
        leggem2 = gear.leg.gems[1] || 0;
        leggem3 = gear.leg.gems[2] || 0;
    }
    let legench = gear.leg.enchant || 0;
    let legencheffect = (legench > 0) ? "&ench="+LEG_ENCHANTS[gear.leg.enchant].effectId : 0;
    let leggemlist = "&gems="+leggem1+":"+leggem2+":"+leggem3;
    let legpcslist = "&pcs="+headitem+":"+shoulderitem+":"+chestitem+":"+handitem+":"+legitem;
    legdata = legitem + legencheffect + leggemlist+ legpcslist;

    document.getElementById("legslot").href = "https://tbc.wowhead.com/item="+ legdata;
    document.getElementById("legslot").innerHTML = LEGS[gear.leg.id].name;
    document.getElementById("legench").href = (legench > 0) ? "https://tbc.wowhead.com/spell="+ legench : "";
    document.getElementById("legench").innerHTML = (legench > 0) ? LEG_ENCHANTS[gear.leg.enchant].name: "No Enchant";
    // feet
    let feeticon = "https://wow.zamimg.com/images/wow/icons/large/"+FEET[gear.feet.id].icon+".jpg";
    document.getElementById("feeticon").src = feeticon;
    let feetgem1 = gear.feet.gems[0] || 0;
    let feetgem2 = gear.feet.gems[1] || 0;
    let feetench = gear.feet.enchant || 0;
    let feetencheffect = (feetench > 0) ? "&ench="+FEET_ENCHANTS[gear.feet.enchant].effectId : 0;
    let feetgemlist = "&gems="+feetgem1+":"+feetgem2;
    let feetpcslist = "&pcs="+handitem+":"+shoulderitem+":"+chestitem+":"+handitem+":"+legitem;
    feetdata = feetitem + feetencheffect + feetgemlist+ feetpcslist;

    document.getElementById("feetslot").href = "https://tbc.wowhead.com/item="+ feetdata;
    document.getElementById("feetslot").innerHTML = FEET[gear.feet.id].name;
    document.getElementById("feetench").href = (feetench > 0) ? "https://tbc.wowhead.com/spell="+ feetench : "";
    document.getElementById("feetench").innerHTML = (feetench > 0) ? FEET_ENCHANTS[gear.feet.enchant].name: "No Enchant";

    // ring1
    let ring1icon = "https://wow.zamimg.com/images/wow/icons/large/"+RINGS[gear.ring1.id].icon+".jpg";
    document.getElementById("ring1icon").src = ring1icon;
    let ring1gem1 = 0;
    if(gear.ring1.hasOwnProperty('gems')){
        ring1gem1 = gear.ring1.gems[0] || 0;
    }
    let ring1ench = gear.ring1.enchant || 0;
    let ring1encheffect = (ring1ench > 0) ? "&ench="+RING_ENCHANTS[gear.ring1.enchant].effectId : 0;
    let ring1gemlist = "&gems="+ring1gem1;
    let ring1pcslist = "&pcs="+headitem+":"+shoulderitem+":"+chestitem+":"+wristitem+":"+handitem+":"+waistitem+":"+feetitem+":"+ring1item+":"+ring2item+":"+legitem;
    ring1data = ring1item + ring1encheffect + ring1gemlist+ ring1pcslist;

    document.getElementById("ring1slot").href = "https://tbc.wowhead.com/item="+ ring1data;
    document.getElementById("ring1slot").innerHTML = RINGS[gear.ring1.id].name;
    document.getElementById("ring1ench").href = (ring1ench > 0) ? "https://tbc.wowhead.com/spell="+ ring1ench : "";
    document.getElementById("ring1ench").innerHTML = (ring1ench > 0) ? RING_ENCHANTS[gear.ring1.enchant].name: "No Enchant";
    // ring2
    let ring2icon = "https://wow.zamimg.com/images/wow/icons/large/"+RINGS[gear.ring2.id].icon+".jpg";
    document.getElementById("ring2icon").src = ring2icon;
    let ring2gem1 = 0;
    if(gear.ring2.hasOwnProperty('gems')){
        ring2gem1 = gear.ring2.gems[0] || 0;
    }
    let ring2ench = gear.ring2.enchant || 0;
    let ring2encheffect = (ring2ench > 0) ? "&ench="+RING_ENCHANTS[gear.ring2.enchant].effectId : 0;
    let ring2gemlist = "&gems="+ring2gem1;
    let ring2pcslist = "&pcs="+headitem+":"+shoulderitem+":"+chestitem+":"+wristitem+":"+handitem+":"+waistitem+":"+feetitem+":"+ring1item+":"+ring2item+":"+legitem;
    ring2data = ring2item + ring2encheffect + ring2gemlist+ ring2pcslist;

    document.getElementById("ring2slot").href = "https://tbc.wowhead.com/item="+ ring2data;
    document.getElementById("ring2slot").innerHTML = RINGS[gear.ring2.id].name;
    document.getElementById("ring2ench").href = (ring2ench > 0) ? "https://tbc.wowhead.com/spell="+ ring2ench : "";
    document.getElementById("ring2ench").innerHTML = (ring2ench > 0) ? RING_ENCHANTS[gear.ring2.enchant].name: "No Enchant";

    // trinket1
    let trinket1icon = "https://wow.zamimg.com/images/wow/icons/large/"+TRINKETS[gear.trinket1.id].icon+".jpg";
    document.getElementById("trinket1icon").src = trinket1icon;
    document.getElementById("trink1slot").href = "https://tbc.wowhead.com/item="+ trink1item;
    document.getElementById("trink1slot").innerHTML = TRINKETS[gear.trinket1.id].name;

    // trinket2
    let trinket2icon = "https://wow.zamimg.com/images/wow/icons/large/"+TRINKETS[gear.trinket2.id].icon+".jpg";
    document.getElementById("trinket2icon").src = trinket2icon;
    document.getElementById("trink2slot").href = "https://tbc.wowhead.com/item="+ trink2item;
    document.getElementById("trink2slot").innerHTML = TRINKETS[gear.trinket2.id].name;

}

gearSlotsDisplay();
// attempt at loading animation
function startLoading() {
    let btns = $('.u-btn-3');
    btns.addClass('loading');
    btns.append('<span class="spinner"><span class="bounce1"></span><span class="bounce2"></span><span class="bounce3"></span></span>');
    $('.u-section-1').addClass('loading');
}

function endLoading() {
    let btns = $('.u-btn-3');
    btns.removeClass('loading');
    btns.find('.spinner').remove();
    $('.u-section-1').removeClass('loading');
}
// checks if saved before, if so - load saved data
if(localStorage.getItem('savecheck') == 'true'){
    fetchData();
}
initializeImportSets();