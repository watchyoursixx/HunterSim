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
var settingmodal = document.getElementById("settingsmodal");
// Get the button that opens the modal
var settingbtn = document.getElementById("settingsbtn");
// Get the <span> element that closes the modal
var settingspan = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
settingbtn.onclick = function() {
    settingmodal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
settingspan.onclick = function() {
    settingmodal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == settingmodal) {
    settingmodal.style.display = "none";
  }
  if (event.target == logmodal) {
    logmodal.style.display = "none";
  }
}

var logmodal = document.getElementById("logmodal");
// Get the button that opens the modal
var logbtn = document.getElementById("logbtn");
// Get the <span> element that closes the modal
var logspan = document.getElementsByClassName("close")[1];
// When the user clicks on <span> (x), close the modal
logspan.onclick = function() {
    logmodal.style.display = "none";
}

function combatLogDisplay(){
    let logbtn = document.getElementById("logbtn");
    if(combatlogarray.length === 0){
        
        logbtn.disabled = true;
        logbtn.classList.remove("u-hover-white");
    }
    else {
        logbtn.disabled = false;
        logbtn.classList.add("u-hover-white");
        logbtn.onclick = function() {
            logmodal.style.display = "block";

            let combatlog = "";
            for (i=0; i < combatlogarray.length; i++) {
                combatlog += "<p>" + combatlogarray[i] + "</p>";
            }   
            document.getElementById("combatlog").innerHTML = combatlog;
        }
    }
    
}

combatLogDisplay();
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
        target.type = document.getElementById("typeSelect").value;
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
function debuffSettings(){
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
    let misuptime = document.getElementById("misuptime").value;
    let coeuptime = document.getElementById("coeuptime").value;
    let coebonus = document.getElementById("coebonus").selected;

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
    debuffs.curseofele.uptime_g = parseInt(coeuptime);
    debuffs.curseofele.improved = coebonus ? true : false;
    storeData();
}

function spellSettings(){

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
    let ammoitem = gear.ammo.id;
    
    // head
    let headcolor = HEADS[gear.head.id].quality;
    document.getElementById("headslot").removeAttribute("class");
    if(headcolor === "Common"){
        document.getElementById("headslot").classList.add("common-text");
    } else if(headcolor === "Uncommon") {
        document.getElementById("headslot").classList.add("uncommon-text");
    } else if(headcolor === "Rare") {
        document.getElementById("headslot").classList.add("rare-text");
    } else if(headcolor === "Epic") {
        document.getElementById("headslot").classList.add("epic-text");
    } else if(headcolor === "Legendary") {
        document.getElementById("headslot").classList.add("legendary-text");
    } else { new Error("No color selected")}

    let headicon = "https://wow.zamimg.com/images/wow/icons/large/"+HEADS[gear.head.id].icon+".jpg";
    document.getElementById("headicon").src = headicon;
    let headgem1 = 0;
    let headgem2 = 0;
    let headgem3 = 0;

    let headskt = (HEADS[gear.head.id].hasOwnProperty('sockets')) ? HEADS[gear.head.id].sockets : [];
    if (headskt.length >= 1) { 
        document.getElementsByClassName("itemsocket")[0].style.display = "block";
        document.getElementById("headskt1").src = "images/" + headskt[0] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[0].style.display = "none";}
    if (headskt.length >= 2) { 
        document.getElementsByClassName("itemsocket")[1].style.display = "block";
        document.getElementById("headskt2").src = "images/" + headskt[1] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[1].style.display = "none";}
    if (headskt.length >= 3) { 
        document.getElementsByClassName("itemsocket")[2].style.display = "block";
        document.getElementById("headskt3").src = "images/" + headskt[2] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[2].style.display = "none";}

    if(gear.head.hasOwnProperty('gems')){
        headgem1 = gear.head.gems[0] || 0;
        headgem2 = gear.head.gems[1] || 0;
        headgem3 = gear.head.gems[2] || 0;
    
        if(headgem1 === 0){
            document.getElementsByClassName("gemskt")[0].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[0].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[headgem1].icon+".jpg";
            document.getElementsByClassName("gemskt")[0].style.visibility = "visible";
        }
        
        if(headgem2 === 0){
            document.getElementsByClassName("gemskt")[1].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[1].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[headgem2].icon+".jpg";
            document.getElementsByClassName("gemskt")[1].style.visibility = "visible";
        }
        
        if(headgem3 === 0){
            document.getElementsByClassName("gemskt")[2].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[2].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[headgem3].icon+".jpg";
            document.getElementsByClassName("gemskt")[2].style.visibility = "visible";
        }
        
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
    let neckcolor = NECKS[gear.neck.id].quality;
    document.getElementById("neckslot").removeAttribute("class");
    if(neckcolor === "Common"){
        document.getElementById("neckslot").classList.add("common-text");
    } else if(neckcolor === "Uncommon") {
        document.getElementById("neckslot").classList.add("uncommon-text");
    } else if(neckcolor === "Rare") {
        document.getElementById("neckslot").classList.add("rare-text");
    } else if(neckcolor === "Epic") {
        document.getElementById("neckslot").classList.add("epic-text");
    } else if(neckcolor === "Legendary") {
        document.getElementById("neckslot").classList.add("legendary-text");
    } else { new Error("No color selected")}

    let neckicon = "https://wow.zamimg.com/images/wow/icons/large/"+NECKS[gear.neck.id].icon+".jpg";
    document.getElementById("neckicon").src = neckicon;
    let neckgem1 = 0;
    let neckgem2 = 0;

    let neckskt = (NECKS[gear.neck.id].hasOwnProperty('sockets')) ? NECKS[gear.neck.id].sockets : [];
    if (neckskt.length >= 1) { 
        document.getElementsByClassName("itemsocket")[3].style.display = "block";
        document.getElementById("neckskt1").src = "images/" + neckskt[0] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[3].style.display = "none";}
    if (neckskt.length >= 2) { 
        document.getElementsByClassName("itemsocket")[4].style.display = "block";
        document.getElementById("neckskt2").src = "images/" + neckskt[1] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[4].style.display = "none";}

    if(gear.neck.hasOwnProperty('gems')){
        neckgem1 = gear.neck.gems[0] || 0;
        neckgem2 = gear.neck.gems[1] || 0;

        if(neckgem1 === 0){
            document.getElementsByClassName("gemskt")[3].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[3].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[neckgem1].icon+".jpg";
            document.getElementsByClassName("gemskt")[3].style.visibility = "visible";
        }
        
        if(neckgem2 === 0){
            document.getElementsByClassName("gemskt")[4].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[4].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[neckgem2].icon+".jpg";
            document.getElementsByClassName("gemskt")[4].style.visibility = "visible";
        }
        
    }
    let neckgemlist = "&gems="+neckgem1+":"+neckgem2;
    neckdata = neckitem + neckgemlist;

    document.getElementById("neckslot").href = "https://tbc.wowhead.com/item="+ neckdata;
    document.getElementById("neckslot").innerHTML = NECKS[gear.neck.id].name;

    // shoulder
    let shouldercolor = SHOULDERS[gear.shoulder.id].quality;
    document.getElementById("shoulderslot").removeAttribute("class");
    if(shouldercolor === "Common"){
        document.getElementById("shoulderslot").classList.add("common-text");
    } else if(shouldercolor === "Uncommon") {
        document.getElementById("shoulderslot").classList.add("uncommon-text");
    } else if(shouldercolor === "Rare") {
        document.getElementById("shoulderslot").classList.add("rare-text");
    } else if(shouldercolor === "Epic") {
        document.getElementById("shoulderslot").classList.add("epic-text");
    } else if(shouldercolor === "Legendary") {
        document.getElementById("shoulderslot").classList.add("legendary-text");
    } else { new Error("No color selected")}

    let shouldericon = "https://wow.zamimg.com/images/wow/icons/large/"+SHOULDERS[gear.shoulder.id].icon+".jpg";
    document.getElementById("shouldericon").src = shouldericon;
    let shouldergem1 = 0;
    let shouldergem2 = 0;

    let shoulderskt = (SHOULDERS[gear.shoulder.id].hasOwnProperty('sockets')) ? SHOULDERS[gear.shoulder.id].sockets : [];
    if (shoulderskt.length >= 1) { 
        document.getElementsByClassName("itemsocket")[5].style.display = "block";
        document.getElementById("shoulderskt1").src = "images/" + shoulderskt[0] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[5].style.display = "none";}
    if (shoulderskt.length >= 2) { 
        document.getElementsByClassName("itemsocket")[6].style.display = "block";
        document.getElementById("shoulderskt2").src = "images/" + shoulderskt[1] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[6].style.display = "none";}

    if(gear.shoulder.hasOwnProperty('gems')){
        shouldergem1 = gear.shoulder.gems[0] || 0;
        shouldergem2 = gear.shoulder.gems[1] || 0;

        if(shouldergem1 === 0){
            document.getElementsByClassName("gemskt")[5].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[5].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[shouldergem1].icon+".jpg";
            document.getElementsByClassName("gemskt")[5].style.visibility = "visible";
        }
        
        if(shouldergem2 === 0){
            document.getElementsByClassName("gemskt")[6].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[6].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[shouldergem2].icon+".jpg";
            document.getElementsByClassName("gemskt")[6].style.visibility = "visible";
        }
        
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
    let backcolor = BACKS[gear.back.id].quality;
    document.getElementById("backslot").removeAttribute("class");
    if(backcolor === "Common"){
        document.getElementById("backslot").classList.add("common-text");
    } else if(backcolor === "Uncommon") {
        document.getElementById("backslot").classList.add("uncommon-text");
    } else if(backcolor === "Rare") {
        document.getElementById("backslot").classList.add("rare-text");
    } else if(backcolor === "Epic") {
        document.getElementById("backslot").classList.add("epic-text");
    } else if(backcolor === "Legendary") {
        document.getElementById("backslot").classList.add("legendary-text");
    } else { new Error("No color selected")}

    let backicon = "https://wow.zamimg.com/images/wow/icons/large/"+BACKS[gear.back.id].icon+".jpg";
    document.getElementById("backicon").src = backicon;
    let backgem1 = 0;

    let backskt = (BACKS[gear.back.id].hasOwnProperty('sockets')) ? BACKS[gear.back.id].sockets : [];
    if (backskt.length >= 1) { 
        document.getElementsByClassName("itemsocket")[7].style.display = "block";
        document.getElementById("backskt1").src = "images/" + backskt[0] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[7].style.display = "none";}

    if(gear.back.hasOwnProperty('gems')){
        backgem1 = gear.back.gems[0] || 0;

        if(backgem1 === 0){
            document.getElementsByClassName("gemskt")[7].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[7].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[backgem1].icon+".jpg";
            document.getElementsByClassName("gemskt")[7].style.visibility = "visible";
        }

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
    let chestcolor = CHESTS[gear.chest.id].quality;
    document.getElementById("chestslot").removeAttribute("class");
    if(chestcolor === "Common"){
        document.getElementById("chestslot").classList.add("common-text");
    } else if(chestcolor === "Uncommon") {
        document.getElementById("chestslot").classList.add("uncommon-text");
    } else if(chestcolor === "Rare") {
        document.getElementById("chestslot").classList.add("rare-text");
    } else if(chestcolor === "Epic") {
        document.getElementById("chestslot").classList.add("epic-text");
    } else if(chestcolor === "Legendary") {
        document.getElementById("chestslot").classList.add("legendary-text");
    } else { new Error("No color selected")}

    let chesticon = "https://wow.zamimg.com/images/wow/icons/large/"+CHESTS[gear.chest.id].icon+".jpg";
    document.getElementById("chesticon").src = chesticon;
    let chestgem1 = 0;
    let chestgem2 = 0;
    let chestgem3 = 0;

    let chestskt = (CHESTS[gear.chest.id].hasOwnProperty('sockets')) ? CHESTS[gear.chest.id].sockets : [];
    if (chestskt.length >= 1) { 
        document.getElementsByClassName("itemsocket")[8].style.display = "block";
        document.getElementById("chestskt1").src = "images/" + chestskt[0] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[8].style.display = "none";}
    if (chestskt.length >= 2) { 
        document.getElementsByClassName("itemsocket")[9].style.display = "block";
        document.getElementById("chestskt2").src = "images/" + chestskt[1] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[9].style.display = "none";}
    if (chestskt.length >= 3) { 
        document.getElementsByClassName("itemsocket")[10].style.display = "block";
        document.getElementById("chestskt3").src = "images/" + chestskt[2] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[10].style.display = "none";}

    if(gear.chest.hasOwnProperty('gems')){
        chestgem1 = gear.chest.gems[0] || 0;
        chestgem2 = gear.chest.gems[1] || 0;
        chestgem3 = gear.chest.gems[2] || 0;

        if(chestgem1 === 0){
            document.getElementsByClassName("gemskt")[8].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[8].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[chestgem1].icon+".jpg";
            document.getElementsByClassName("gemskt")[8].style.visibility = "visible";
        }
        
        if(chestgem2 === 0){
            document.getElementsByClassName("gemskt")[9].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[9].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[chestgem2].icon+".jpg";
            document.getElementsByClassName("gemskt")[9].style.visibility = "visible";
        }
        
        if(chestgem3 === 0){
            document.getElementsByClassName("gemskt")[10].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[10].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[chestgem3].icon+".jpg";
            document.getElementsByClassName("gemskt")[10].style.visibility = "visible";
        }
        
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
    let wristcolor = WRISTS[gear.wrist.id].quality;
    document.getElementById("wristslot").removeAttribute("class");
    if(wristcolor === "Common"){
        document.getElementById("wristslot").classList.add("common-text");
    } else if(wristcolor === "Uncommon") {
        document.getElementById("wristslot").classList.add("uncommon-text");
    } else if(wristcolor === "Rare") {
        document.getElementById("wristslot").classList.add("rare-text");
    } else if(wristcolor === "Epic") {
        document.getElementById("wristslot").classList.add("epic-text");
    } else if(wristcolor === "Legendary") {
        document.getElementById("wristslot").classList.add("legendary-text");
    } else { new Error("No color selected")}

    let wristicon = "https://wow.zamimg.com/images/wow/icons/large/"+WRISTS[gear.wrist.id].icon+".jpg";
    document.getElementById("wristicon").src = wristicon;
    let wristgem1 = 0;

    let wristskt = (WRISTS[gear.wrist.id].hasOwnProperty('sockets')) ? WRISTS[gear.wrist.id].sockets : [];
    if (wristskt.length >= 1) { 
        document.getElementsByClassName("itemsocket")[11].style.display = "block";
        document.getElementById("wristskt1").src = "images/" + wristskt[0] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[11].style.display = "none";}

    if(gear.wrist.hasOwnProperty('gems')){
        wristgem1 = gear.wrist.gems[0] || 0;

        if(wristgem1 === 0){
            document.getElementsByClassName("gemskt")[11].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[11].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[wristgem1].icon+".jpg";
            document.getElementsByClassName("gemskt")[11].style.visibility = "visible";
        }

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
    let mainhandcolor = MELEE_WEAPONS[gear.mainhand.id].quality;
    document.getElementById("mainhandslot").removeAttribute("class");
    if(mainhandcolor === "Common"){
        document.getElementById("mainhandslot").classList.add("common-text");
    } else if(mainhandcolor === "Uncommon") {
        document.getElementById("mainhandslot").classList.add("uncommon-text");
    } else if(mainhandcolor === "Rare") {
        document.getElementById("mainhandslot").classList.add("rare-text");
    } else if(mainhandcolor === "Epic") {
        document.getElementById("mainhandslot").classList.add("epic-text");
    } else if(mainhandcolor === "Legendary") {
        document.getElementById("mainhandslot").classList.add("legendary-text");
    } else { new Error("No color selected")}

    let mainhandicon = "https://wow.zamimg.com/images/wow/icons/large/"+MELEE_WEAPONS[gear.mainhand.id].icon+".jpg";
    document.getElementById("mainhandicon").src = mainhandicon;
    let mainhandgem1 = 0;
    let mainhandgem2 = 0;
    let mainhandgem3 = 0;

    let mainhandskt = (MELEE_WEAPONS[gear.mainhand.id].hasOwnProperty('sockets')) ? MELEE_WEAPONS[gear.mainhand.id].sockets : [];
    if (mainhandskt.length >= 1) { 
        document.getElementsByClassName("itemsocket")[12].style.display = "block";
        document.getElementById("mainhandskt1").src = "images/" + mainhandskt[0] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[12].style.display = "none";}
    if (mainhandskt.length >= 2) { 
        document.getElementsByClassName("itemsocket")[13].style.display = "block";
        document.getElementById("mainhandskt2").src = "images/" + mainhandskt[1] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[13].style.display = "none";}
    if (mainhandskt.length >= 3) { 
        document.getElementsByClassName("itemsocket")[14].style.display = "block";
        document.getElementById("mainhandskt3").src = "images/" + mainhandskt[2] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[14].style.display = "none";}

    if(gear.mainhand.hasOwnProperty('gems')){
        mainhandgem1 = gear.mainhand.gems[0] || 0;
        mainhandgem2 = gear.mainhand.gems[1] || 0;
        mainhandgem3 = gear.mainhand.gems[2] || 0;

        if(mainhandgem1 === 0){
            document.getElementsByClassName("gemskt")[12].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[12].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[mainhandgem1].icon+".jpg";
            document.getElementsByClassName("gemskt")[12].style.visibility = "visible";
        }
        
        if(mainhandgem2 === 0){
            document.getElementsByClassName("gemskt")[13].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[13].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[mainhandgem2].icon+".jpg";
            document.getElementsByClassName("gemskt")[13].style.visibility = "visible";
        }
        
        if(mainhandgem3 === 0){
            document.getElementsByClassName("gemskt")[14].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[14].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[mainhandgem3].icon+".jpg";
            document.getElementsByClassName("gemskt")[14].style.visibility = "visible";
        }
        
    }
    let mainhandench = gear.mainhand.enchant || 0;
    
    let mainhandencheffect = (mainhandench > 0) ? "&ench="+MELEE_ENCHANTS[gear.mainhand.enchant].effectId : 0;
    let mainhandgemlist = "&gems="+mainhandgem1+":"+mainhandgem2+":"+mainhandgem3;
    mainhanddata = mainhanditem + mainhandencheffect + mainhandgemlist;

    document.getElementById("mainhandslot").href = "https://tbc.wowhead.com/item="+ mainhanddata;
    document.getElementById("mainhandslot").innerHTML = MELEE_WEAPONS[gear.mainhand.id].name;
    document.getElementById("mainhandench").href = (mainhandench > 0) ? "https://tbc.wowhead.com/spell="+ mainhandench :"";  
    document.getElementById("mainhandench").innerHTML = (mainhandench > 0) ? MELEE_ENCHANTS[gear.mainhand.enchant].name: "No Enchant";
    
    document.getElementById("offhandslot").removeAttribute("class");
    if(offhanditem == 0){
        document.getElementById("offhandslot").href = "#";
        document.getElementById("offhandslot").innerHTML = "Off Hand";
        document.getElementById("offhandench").href = "#"; 
        document.getElementById("offhandench").innerHTML = "No Enchant";
        let offhandicon = "images/OffHand.jpg";
        document.getElementById("offhandicon").src = offhandicon;
        document.getElementsByClassName("itemsocket")[15].style.display = "none";
        document.getElementsByClassName("itemsocket")[16].style.display = "none";
        document.getElementsByClassName("itemsocket")[17].style.display = "none";
        document.getElementById("offhandslot").classList.add("common-text");
    }
    // offhand
    if(offhanditem !== 0){
        let offhandcolor = MELEE_WEAPONS[gear.offhand.id].quality;
        
        if(offhandcolor === "Common"){
            document.getElementById("offhandslot").classList.add("common-text");
        } else if(offhandcolor === "Uncommon") {
            document.getElementById("offhandslot").classList.add("uncommon-text");
        } else if(offhandcolor === "Rare") {
            document.getElementById("offhandslot").classList.add("rare-text");
        } else if(offhandcolor === "Epic") {
            document.getElementById("offhandslot").classList.add("epic-text");
        } else if(offhandcolor === "Legendary") {
            document.getElementById("offhandslot").classList.add("legendary-text");
        } else { new Error("No color selected")}

        let offhandicon = "https://wow.zamimg.com/images/wow/icons/large/"+MELEE_WEAPONS[gear.offhand.id].icon+".jpg";
        document.getElementById("offhandicon").src = offhandicon;
        let offhandgem1 = 0;
        let offhandgem2 = 0;
        let offhandgem3 = 0;

        let offhandskt = (MELEE_WEAPONS[gear.offhand.id].hasOwnProperty('sockets')) ? MELEE_WEAPONS[gear.offhand.id].sockets : [];
        if (offhandskt.length >= 1) { 
            document.getElementsByClassName("itemsocket")[15].style.display = "block";
            document.getElementById("offhandskt1").src = "images/" + offhandskt[0] + "_empty.jfif";
        } else {document.getElementsByClassName("itemsocket")[15].style.display = "none";}
        if (offhandskt.length >= 2) { 
            document.getElementsByClassName("itemsocket")[16].style.display = "block";
            document.getElementById("offhandskt2").src = "images/" + offhandskt[1] + "_empty.jfif";
        } else {document.getElementsByClassName("itemsocket")[16].style.display = "none";}
        if (offhandskt.length >= 3) { 
            document.getElementsByClassName("itemsocket")[17].style.display = "block";
            document.getElementById("offhandskt3").src = "images/" + offhandskt[2] + "_empty.jfif";
        } else {document.getElementsByClassName("itemsocket")[17].style.display = "none";}
    
        if(gear.offhand.hasOwnProperty('gems')){
            offhandgem1 = gear.offhand.gems[0] || 0;
            offhandgem2 = gear.offhand.gems[1] || 0;
            offhandgem3 = gear.offhand.gems[2] || 0;

            if(offhandgem1 === 0){
                document.getElementsByClassName("gemskt")[15].style.visibility = "hidden";
            } else {
                document.getElementsByClassName("gemskt")[15].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[offhandgem1].icon+".jpg";
                document.getElementsByClassName("gemskt")[15].style.visibility = "visible";
            }
            
            if(offhandgem2 === 0){
                document.getElementsByClassName("gemskt")[16].style.visibility = "hidden";
            } else {
                document.getElementsByClassName("gemskt")[16].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[offhandgem2].icon+".jpg";
                document.getElementsByClassName("gemskt")[16].style.visibility = "visible";
            }
            
            if(offhandgem3 === 0){
                document.getElementsByClassName("gemskt")[17].style.visibility = "hidden";
            } else {
                document.getElementsByClassName("gemskt")[17].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[offhandgem3].icon+".jpg";
                document.getElementsByClassName("gemskt")[17].style.visibility = "visible";
            }
            
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
    let rangecolor = RANGED_WEAPONS[gear.range.id].quality;
    document.getElementById("rangeslot").removeAttribute("class");
    if(rangecolor === "Common"){
        document.getElementById("rangeslot").classList.add("common-text");
    } else if(rangecolor === "Uncommon") {
        document.getElementById("rangeslot").classList.add("uncommon-text");
    } else if(rangecolor === "Rare") {
        document.getElementById("rangeslot").classList.add("rare-text");
    } else if(rangecolor === "Epic") {
        document.getElementById("rangeslot").classList.add("epic-text");
    } else if(rangecolor === "Legendary") {
        document.getElementById("rangeslot").classList.add("legendary-text");
    } else { new Error("No color selected")}

    let rangeicon = "https://wow.zamimg.com/images/wow/icons/large/"+RANGED_WEAPONS[gear.range.id].icon+".jpg";
    document.getElementById("rangeicon").src = rangeicon;
    let rangegem1 = 0;
    let rangegem2 = 0;

    let rangeskt = (RANGED_WEAPONS[gear.range.id].hasOwnProperty('sockets')) ? RANGED_WEAPONS[gear.range.id].sockets : [];
    if (rangeskt.length >= 1) { 
        document.getElementsByClassName("itemsocket")[18].style.display = "block";
        document.getElementById("rangeskt1").src = "images/" + rangeskt[0] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[18].style.display = "none";}
    if (rangeskt.length >= 2) { 
        document.getElementsByClassName("itemsocket")[19].style.display = "block";
        document.getElementById("rangeskt2").src = "images/" + rangeskt[1] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[19].style.display = "none";}

    if(gear.range.hasOwnProperty('gems')){
        rangegem1 = gear.range.gems[0] || 0;
        rangegem2 = gear.range.gems[1] || 0;

        if(rangegem1 === 0){
            document.getElementsByClassName("gemskt")[18].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[18].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[rangegem1].icon+".jpg";
            document.getElementsByClassName("gemskt")[18].style.visibility = "visible";
        }
        
        if(rangegem2 === 0){
            document.getElementsByClassName("gemskt")[19].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[19].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[rangegem2].icon+".jpg";
            document.getElementsByClassName("gemskt")[19].style.visibility = "visible";
        }
        
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
    let handcolor = HANDS[gear.hand.id].quality;
    document.getElementById("handslot").removeAttribute("class");
    if(handcolor === "Common"){
        document.getElementById("handslot").classList.add("common-text");
    } else if(handcolor === "Uncommon") {
        document.getElementById("handslot").classList.add("uncommon-text");
    } else if(handcolor === "Rare") {
        document.getElementById("handslot").classList.add("rare-text");
    } else if(handcolor === "Epic") {
        document.getElementById("handslot").classList.add("epic-text");
    } else if(handcolor === "Legendary") {
        document.getElementById("handslot").classList.add("legendary-text");
    } else { new Error("No color selected")}

    let handicon = "https://wow.zamimg.com/images/wow/icons/large/"+HANDS[gear.hand.id].icon+".jpg";
    document.getElementById("handicon").src = handicon;
    let handgem1 = 0;
    let handgem2 = 0;

    let handskt = (HANDS[gear.hand.id].hasOwnProperty('sockets')) ? HANDS[gear.hand.id].sockets : [];
    if (handskt.length >= 1) { 
        document.getElementsByClassName("itemsocket")[20].style.display = "block";
        document.getElementById("handskt1").src = "images/" + handskt[0] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[20].style.display = "none";}
    if (handskt.length >= 2) { 
        document.getElementsByClassName("itemsocket")[21].style.display = "block";
        document.getElementById("handskt2").src = "images/" + handskt[1] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[21].style.display = "none";}

    if(gear.hand.hasOwnProperty('gems')){
        handgem1 = gear.hand.gems[0] || 0;
        handgem2 = gear.hand.gems[1] || 0;

        if(handgem1 === 0){
            document.getElementsByClassName("gemskt")[20].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[20].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[handgem1].icon+".jpg";
            document.getElementsByClassName("gemskt")[20].style.visibility = "visible";
        }
        if(handgem2 === 0){
            document.getElementsByClassName("gemskt")[21].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[21].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[handgem2].icon+".jpg";
            document.getElementsByClassName("gemskt")[21].style.visibility = "visible";
        }
        
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
    let waistcolor = WAISTS[gear.waist.id].quality;
    document.getElementById("waistslot").removeAttribute("class");
    if(waistcolor === "Common"){
        document.getElementById("waistslot").classList.add("common-text");
    } else if(waistcolor === "Uncommon") {
        document.getElementById("waistslot").classList.add("uncommon-text");
    } else if(waistcolor === "Rare") {
        document.getElementById("waistslot").classList.add("rare-text");
    } else if(waistcolor === "Epic") {
        document.getElementById("waistslot").classList.add("epic-text");
    } else if(waistcolor === "Legendary") {
        document.getElementById("waistslot").classList.add("legendary-text");
    } else { new Error("No color selected")}

    let waisticon = "https://wow.zamimg.com/images/wow/icons/large/"+WAISTS[gear.waist.id].icon+".jpg";
    document.getElementById("waisticon").src = waisticon;
    let waistgem1 = 0;
    let waistgem2 = 0;

    let waistskt = (WAISTS[gear.waist.id].hasOwnProperty('sockets')) ? WAISTS[gear.waist.id].sockets : [];
    if (waistskt.length >= 1) { 
        document.getElementsByClassName("itemsocket")[22].style.display = "block";
        document.getElementById("waistskt1").src = "images/" + waistskt[0] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[22].style.display = "none";}
    if (waistskt.length >= 2) { 
        document.getElementsByClassName("itemsocket")[23].style.display = "block";
        document.getElementById("waistskt2").src = "images/" + waistskt[1] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[23].style.display = "none";}

    if(gear.waist.hasOwnProperty('gems')){
        waistgem1 = gear.waist.gems[0] || 0;
        waistgem2 = gear.waist.gems[1] || 0;

        if(waistgem1 === 0){
            document.getElementsByClassName("gemskt")[22].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[22].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[waistgem1].icon+".jpg";
            document.getElementsByClassName("gemskt")[22].style.visibility = "visible";
        }
        if(waistgem2 === 0){
            document.getElementsByClassName("gemskt")[23].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[23].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[waistgem2].icon+".jpg";
            document.getElementsByClassName("gemskt")[23].style.visibility = "visible";
        }
        
    }
    let waistgemlist = "&gems="+waistgem1+":"+waistgem2;
    waistdata = waistitem + waistgemlist;

    document.getElementById("waistslot").href = "https://tbc.wowhead.com/item="+ waistdata;
    document.getElementById("waistslot").innerHTML = WAISTS[gear.waist.id].name;

    // leg
    let legcolor = LEGS[gear.leg.id].quality;
    document.getElementById("legslot").removeAttribute("class");
    if(legcolor === "Common"){
        document.getElementById("legslot").classList.add("common-text");
    } else if(legcolor === "Uncommon") {
        document.getElementById("legslot").classList.add("uncommon-text");
    } else if(legcolor === "Rare") {
        document.getElementById("legslot").classList.add("rare-text");
    } else if(legcolor === "Epic") {
        document.getElementById("legslot").classList.add("epic-text");
    } else if(legcolor === "Legendary") {
        document.getElementById("legslot").classList.add("legendary-text");
    } else { new Error("No color selected")}

    let legicon = "https://wow.zamimg.com/images/wow/icons/large/"+LEGS[gear.leg.id].icon+".jpg";
    document.getElementById("legicon").src = legicon;
    let leggem1 = 0;
    let leggem2 = 0;
    let leggem3 = 0;

    let legskt = (LEGS[gear.leg.id].hasOwnProperty('sockets')) ? LEGS[gear.leg.id].sockets : [];
    if (legskt.length >= 1) { 
        document.getElementsByClassName("itemsocket")[24].style.display = "block";
        document.getElementById("legskt1").src = "images/" + legskt[0] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[24].style.display = "none";}
    if (legskt.length >= 2) { 
        document.getElementsByClassName("itemsocket")[25].style.display = "block";
        document.getElementById("legskt2").src = "images/" + legskt[1] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[25].style.display = "none";}
    if (legskt.length >= 3) { 
        document.getElementsByClassName("itemsocket")[26].style.display = "block";
        document.getElementById("legskt3").src = "images/" + legskt[2] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[26].style.display = "none";}

    if(gear.leg.hasOwnProperty('gems')){
        leggem1 = gear.leg.gems[0] || 0;
        leggem2 = gear.leg.gems[1] || 0;
        leggem3 = gear.leg.gems[2] || 0;

        if(leggem1 === 0){
            document.getElementsByClassName("gemskt")[24].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[24].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[leggem1].icon+".jpg";
            document.getElementsByClassName("gemskt")[24].style.visibility = "visible";
        }
        
        if(leggem2 === 0){
            document.getElementsByClassName("gemskt")[25].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[25].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[leggem2].icon+".jpg";
            document.getElementsByClassName("gemskt")[25].style.visibility = "visible";
        }
        
        if(leggem3 === 0){
            document.getElementsByClassName("gemskt")[26].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[26].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[leggem3].icon+".jpg";
            document.getElementsByClassName("gemskt")[26].style.visibility = "visible";
        }
        
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
    let feetcolor = FEET[gear.feet.id].quality;
    document.getElementById("feetslot").removeAttribute("class");
    if(feetcolor === "Common"){
        document.getElementById("feetslot").classList.add("common-text");
    } else if(feetcolor === "Uncommon") {
        document.getElementById("feetslot").classList.add("uncommon-text");
    } else if(feetcolor === "Rare") {
        document.getElementById("feetslot").classList.add("rare-text");
    } else if(feetcolor === "Epic") {
        document.getElementById("feetslot").classList.add("epic-text");
    } else if(feetcolor === "Legendary") {
        document.getElementById("feetslot").classList.add("legendary-text");
    } else { new Error("No color selected")}
    
    let feeticon = "https://wow.zamimg.com/images/wow/icons/large/"+FEET[gear.feet.id].icon+".jpg";
    document.getElementById("feeticon").src = feeticon;
    let feetgem1 = 0;
    let feetgem2 = 0;

    let feetskt = (FEET[gear.feet.id].hasOwnProperty('sockets')) ? FEET[gear.feet.id].sockets : [];
    if (feetskt.length >= 1) { 
        document.getElementsByClassName("itemsocket")[27].style.display = "block";
        document.getElementById("feetskt1").src = "images/" + feetskt[0] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[27].style.display = "none";}
    if (feetskt.length >= 2) { 
        document.getElementsByClassName("itemsocket")[28].style.display = "block";
        document.getElementById("feetskt2").src = "images/" + feetskt[1] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[28].style.display = "none";}

    if(gear.feet.hasOwnProperty('gems')){
        feetgem1 = gear.feet.gems[0] || 0;
        feetgem2 = gear.feet.gems[1] || 0;

        if(feetgem1 === 0){
            document.getElementsByClassName("gemskt")[27].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[27].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[feetgem1].icon+".jpg";
            document.getElementsByClassName("gemskt")[27].style.visibility = "visible";
        }
        if(feetgem2 === 0){
            document.getElementsByClassName("gemskt")[28].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[28].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[feetgem2].icon+".jpg";
            document.getElementsByClassName("gemskt")[28].style.visibility = "visible";
        }
        
    }
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
    let ring1color = RINGS[gear.ring1.id].quality;
    document.getElementById("ring1slot").removeAttribute("class");
    if(ring1color === "Common"){
        document.getElementById("ring1slot").classList.add("common-text");
    } else if(ring1color === "Uncommon") {
        document.getElementById("ring1slot").classList.add("uncommon-text");
    } else if(ring1color === "Rare") {
        document.getElementById("ring1slot").classList.add("rare-text");
    } else if(ring1color === "Epic") {
        document.getElementById("ring1slot").classList.add("epic-text");
    } else if(ring1color === "Legendary") {
        document.getElementById("ring1slot").classList.add("legendary-text");
    } else { new Error("No color selected")}

    let ring1icon = "https://wow.zamimg.com/images/wow/icons/large/"+RINGS[gear.ring1.id].icon+".jpg";
    document.getElementById("ring1icon").src = ring1icon;
    let ring1gem1 = 0;
    
    let ring1skt = (RINGS[gear.ring1.id].hasOwnProperty('sockets')) ? RINGS[gear.ring1.id].sockets : [];
    if (ring1skt.length >= 1) { 
        document.getElementsByClassName("itemsocket")[29].style.display = "block";
        document.getElementById("ring1skt1").src = "images/" + ring1skt[0] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[29].style.display = "none";}

    if(gear.ring1.hasOwnProperty('gems')){
        ring1gem1 = gear.ring1.gems[0] || 0;

        if(ring1gem1 === 0){
            document.getElementsByClassName("gemskt")[29].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[29].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[ring1gem1].icon+".jpg";
            document.getElementsByClassName("gemskt")[29].style.visibility = "visible";
        }

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
    let ring2color = RINGS[gear.ring2.id].quality;
    document.getElementById("ring2slot").removeAttribute("class");
    if(ring2color === "Common"){
        document.getElementById("ring2slot").classList.add("common-text");
    } else if(ring2color === "Uncommon") {
        document.getElementById("ring2slot").classList.add("uncommon-text");
    } else if(ring2color === "Rare") {
        document.getElementById("ring2slot").classList.add("rare-text");
    } else if(ring2color === "Epic") {
        document.getElementById("ring2slot").classList.add("epic-text");
    } else if(ring2color === "Legendary") {
        document.getElementById("ring2slot").classList.add("legendary-text");
    } else { new Error("No color selected")}

    let ring2icon = "https://wow.zamimg.com/images/wow/icons/large/"+RINGS[gear.ring2.id].icon+".jpg";
    document.getElementById("ring2icon").src = ring2icon;
    let ring2gem1 = 0;

    let ring2skt = (RINGS[gear.ring2.id].hasOwnProperty('sockets')) ? RINGS[gear.ring2.id].sockets : [];
    if (ring2skt.length >= 1) { 
        document.getElementsByClassName("itemsocket")[30].style.display = "block";
        document.getElementById("ring2skt1").src = "images/" + ring2skt[0] + "_empty.jfif";
    } else {document.getElementsByClassName("itemsocket")[30].style.display = "none";}

    if(gear.ring2.hasOwnProperty('gems')){
        ring2gem1 = gear.ring2.gems[0] || 0;

        if(ring2gem1 === 0){
            document.getElementsByClassName("gemskt")[30].style.visibility = "hidden";
        } else {
            document.getElementsByClassName("gemskt")[30].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[ring2gem1].icon+".jpg";
            document.getElementsByClassName("gemskt")[30].style.visibility = "visible";
        }

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
    let trinket1color = TRINKETS[gear.trinket1.id].quality;
    document.getElementById("trink1slot").removeAttribute("class");
    if(trinket1color === "Common"){
        document.getElementById("trink1slot").classList.add("common-text");
    } else if(trinket1color === "Uncommon") {
        document.getElementById("trink1slot").classList.add("uncommon-text");
    } else if(trinket1color === "Rare") {
        document.getElementById("trink1slot").classList.add("rare-text");
    } else if(trinket1color === "Epic") {
        document.getElementById("trink1slot").classList.add("epic-text");
    } else if(trinket1color === "Legendary") {
        document.getElementById("trink1slot").classList.add("legendary-text");
    } else { new Error("No color selected")}

    let trinket1icon = "https://wow.zamimg.com/images/wow/icons/large/"+TRINKETS[gear.trinket1.id].icon+".jpg";
    document.getElementById("trinket1icon").src = trinket1icon;
    document.getElementById("trink1slot").href = "https://tbc.wowhead.com/item="+ trink1item;
    document.getElementById("trink1slot").innerHTML = TRINKETS[gear.trinket1.id].name;

    // trinket2
    let trinket2color = TRINKETS[gear.trinket2.id].quality;
    document.getElementById("trink2slot").removeAttribute("class");
    if(trinket2color === "Common"){
        document.getElementById("trink2slot").classList.add("common-text");
    } else if(trinket2color === "Uncommon") {
        document.getElementById("trink2slot").classList.add("uncommon-text");
    } else if(trinket2color === "Rare") {
        document.getElementById("trink2slot").classList.add("rare-text");
    } else if(trinket2color === "Epic") {
        document.getElementById("trink2slot").classList.add("epic-text");
    } else if(trinket2color === "Legendary") {
        document.getElementById("trink2slot").classList.add("legendary-text");
    } else { new Error("No color selected")}

    let trinket2icon = "https://wow.zamimg.com/images/wow/icons/large/"+TRINKETS[gear.trinket2.id].icon+".jpg";
    document.getElementById("trinket2icon").src = trinket2icon;
    document.getElementById("trink2slot").href = "https://tbc.wowhead.com/item="+ trink2item;
    document.getElementById("trink2slot").innerHTML = TRINKETS[gear.trinket2.id].name;
    
    // ammo
    let ammocolor = AMMOS[gear.ammo.id].quality;
    document.getElementById("ammoslot").removeAttribute("class");
    if(ammocolor === "Common"){
        document.getElementById("ammoslot").classList.add("common-text");
    } else if(ammocolor === "Uncommon") {
        document.getElementById("ammoslot").classList.add("uncommon-text");
    } else if(ammocolor === "Rare") {
        document.getElementById("ammoslot").classList.add("rare-text");
    } else if(ammocolor === "Epic") {
        document.getElementById("ammoslot").classList.add("epic-text");
    } else if(ammocolor === "Legendary") {
        document.getElementById("ammoslot").classList.add("legendary-text");
    } else { new Error("No color selected")}
    
    let ammoicon = "https://wow.zamimg.com/images/wow/icons/large/"+AMMOS[gear.ammo.id].icon+".jpg";
    document.getElementById("ammoicon").src = ammoicon;
    document.getElementById("ammoslot").href = "https://tbc.wowhead.com/item="+ ammoitem;
    document.getElementById("ammoslot").innerHTML = AMMOS[gear.ammo.id].name;

}

gearSlotsDisplay();

// checks if saved before, if so - load saved data
if(localStorage.getItem('savecheck') == 'true'){
    fetchData();
}
initializeImportSets();