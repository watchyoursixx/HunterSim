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
    0, // WF
    0, // heroic presence
    { id: 0, talented: false }, // BS
    0, // tsa
    0, // braided eternium
    0 // imp sanctity
];
var filteredbuffs = [];
var playerconsumes = {};

// show the stats on the HTML
function displayStats(){
    document.getElementById("str").innerHTML = Str;
    document.getElementById("agi").innerHTML = Agi;
    document.getElementById("stam").innerHTML = Stam;
    document.getElementById("int").innerHTML = Int;
    document.getElementById("spi").innerHTML = Spi;
    document.getElementById("rap").innerHTML = Math.floor(BaseRAP);
    let rangehit = Math.round(RangeHitChance * 100) / 100;
    document.getElementById("rangehit").innerHTML = rangehit + " %";
    let rangecrit = Math.round(RangeCritChance * 100) / 100;
    document.getElementById("rangecrit").innerHTML = rangecrit + " %";
    document.getElementById("haste").innerHTML = HasteRating;
    document.getElementById("arp").innerHTML = ArmorPen;
    document.getElementById("map").innerHTML = Math.floor(BaseMAP);
    let meleehit = Math.round(MeleeHitChance * 100) / 100;
    document.getElementById("meleehit").innerHTML = meleehit + " %";
    let meleecrit = Math.round(MeleeCritChance * 100) / 100;
    document.getElementById("meleecrit").innerHTML = meleecrit + " %";
    document.getElementById("exp").innerHTML = Expertise;
    document.getElementById("mp5").innerHTML = ManaPer5;
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
    initialize();
    displayStats();
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
    console.log(playerconsumes);
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
    console.log(playerconsumes);
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
    console.log(playerconsumes);
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
    console.log(playerconsumes);
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
    console.log(playerconsumes);
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
    console.log(playerconsumes);
}
function petscrollagiSelection() {

}
function petscrollstrSelection() {

}
function petfoodSelection() {

}