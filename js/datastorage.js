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

    // initialize the settings after loading
    selectedOptionsResults();
}

function clearSettingsCache(){
    localStorage.clear();
}