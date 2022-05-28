var dpsresult = document.getElementById("dpsresult");
var dpsmin = document.getElementById("dpsmin");
var dpsmax = document.getElementById("dpsmax");
var dpserr = document.getElementById("dpserr");
var executetime = document.getElementById("executetime");
var dpscompare = document.getElementById("dpscompare");

/** Display stats on main tab */
function displayStats(){
    let bonusagi = (buffslist[4].talented && (buffslist[4].id > 0)) ? 1.15 * 77 * agimod : 77 * agimod;
    document.getElementById("str").innerHTML = Str;
    document.getElementById("agi").innerHTML = Agi + " (" + (Agi + bonusagi).toFixed(0)+ ")";
    document.getElementById("stam").innerHTML = Stam;
    document.getElementById("int").innerHTML = Int;
    document.getElementById("spi").innerHTML = Spi;
    document.getElementById("rap").innerHTML = Math.floor(BaseRAP);
    document.getElementById("rangehit").innerHTML = RangeHitRating + " ("+RangeHitChance.toFixed(2)+"%)";
    document.getElementById("rangecrit").innerHTML = RangeCritRating + " ("+RangeCritChance.toFixed(2)+"%)";
    document.getElementById("haste").innerHTML = HasteRating + " (" + (HasteRating / HasteRatingRatio).toFixed(2)+"%)";
    document.getElementById("arp").innerHTML = ArmorPen;
    document.getElementById("map").innerHTML = Math.floor(BaseMAP);
    document.getElementById("meleehit").innerHTML = MeleeHitRating + " ("+MeleeHitChance.toFixed(2)+"%)";
    document.getElementById("meleecrit").innerHTML = MeleeCritRating + " ("+MeleeCritChance.toFixed(2)+"%)";
    document.getElementById("exp").innerHTML = Expertise;
    document.getElementById("mp5").innerHTML = ManaPer5;
}
/** Update DPS results display */
function displayDPSResults(){
    let dpsrounding = (avgDPS > 1000) ? 1 : 2;
    let errrounding = (err > 10) ? 1 : 2;
    dpsresult.innerHTML = avgDPS.toFixed(dpsrounding);
    dpsmin.innerHTML = mindps.toFixed(2) + " min";
    dpsmax.innerHTML = maxdps.toFixed(2) + " max";
    dpserr.innerHTML = "DPS ​± " + err.toFixed(errrounding);
    executetime.innerHTML = Math.round(executecodetime * 10000) / 10000 + " s";
    if (prevDPS > 0 && combatlogRun) {
        dpscompare.innerHTML = (avgDPS - prevDPS).toFixed(2) + " - Compared to last Sim";
        if (avgDPS - prevDPS >= 0) { 
            dpscompare.classList.add("positive-result");
            dpscompare.classList.remove("negative-result");
        }
        else if (avgDPS - prevDPS < 0) {
            dpscompare.classList.add("negative-result");
            dpscompare.classList.remove("positive-result");
        }
    }
}
/** Update stat weights display */
function displayStatWeights(){
    document.getElementsByClassName('weight-name')[0].innerHTML = statweights.Str.toFixed(3);
    document.getElementsByClassName('weight-name')[1].innerHTML = statweights.Agi.toFixed(3);
    document.getElementsByClassName('weight-name')[2].innerHTML = statweights.Int.toFixed(3);
    document.getElementsByClassName('weight-name')[3].innerHTML = statweights.MP5.toFixed(3);
    document.getElementsByClassName('weight-name')[4].innerHTML = statweights.RAP.toFixed(3);
    document.getElementsByClassName('weight-name')[5].innerHTML = statweights.RangeHit.toFixed(3);
    document.getElementsByClassName('weight-name')[6].innerHTML = statweights.RangeCrit.toFixed(3);
    document.getElementsByClassName('weight-name')[7].innerHTML = statweights.Haste.toFixed(3);
    document.getElementsByClassName('weight-name')[8].innerHTML = statweights.ArP.toFixed(3);
    document.getElementsByClassName('weight-name')[9].innerHTML = statweights.MAP.toFixed(3);
    document.getElementsByClassName('weight-name')[10].innerHTML = statweights.MeleeHit.toFixed(3);
    document.getElementsByClassName('weight-name')[11].innerHTML = statweights.MeleeCrit.toFixed(3);
    document.getElementsByClassName('weight-name')[12].innerHTML = statweights.Expertise.toFixed(3);
}
// initialize stats display
displayStats();
displayStatWeights();

/** Initialize the popup windows for gear, settings, import/export and combat log */
function initializeModals(){
    // Get the modal
    let settingmodal = document.getElementById("settingsmodal");
    // Get the button that opens the modal
    let settingbtn = document.getElementById("settingsbtn");
    // Get the <span> element that closes the modal
    let settingspan = document.getElementsByClassName("close")[0];
    // When the user clicks the button, open the modal 
    settingbtn.onclick = function() {
        settingmodal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    settingspan.onclick = function() {
        settingmodal.style.display = "none";
    }
    let gearmodal = document.getElementById("gearmodal");
    // Get the <span> element that closes the modal
    let gearspan = document.getElementsByClassName("close")[2];
    // When the user clicks on <span> (x), close the modal
    gearspan.onclick = function() {
        gearmodal.style.display = "none";
    }
    // Get the modal
    let importmodal = document.getElementById("importmodal");
    // Get the button that opens the modal
    let importbtn = document.getElementById("importbtn");
    // Get the <span> element that closes the modal
    let importspan = document.getElementsByClassName("close")[3];
    // When the user clicks the button, open the modal 
    importbtn.onclick = function() {
        importmodal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    importspan.onclick = function() {
        importmodal.style.display = "none";
    }

    let exportbtn = document.getElementById("exportbtn");
    exportbtn.onclick = function() {
        exportDataToFile();
    }

    let logmodal = document.getElementById("logmodal");
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == settingmodal) {
            settingmodal.style.display = "none";
        }
        if (event.target == logmodal) {
            logmodal.style.display = "none";
        }
        if (event.target == gearmodal) {
            gearmodal.style.display = "none";
        }
        if (event.target == importmodal) {
            importmodal.style.display = "none";
        }
    }
}

initializeModals();
/** Initialize combat log display and update HTML when changed */
function combatLogDisplay(){
    let logmodal = document.getElementById("logmodal");
    // Get the <span> element that closes the modal
    let logspan = document.getElementsByClassName("close")[1];
    // When the user clicks on <span> (x), close the modal

    logspan.onclick = function() {
        logmodal.style.display = "none";
    }

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

function filterCombatLog(){
    filteredcombatlogarray = combatlogarray.filter(key => key.includes("Player") && !key.includes("Mana"));
    let combatlog = "";
            for (i=0; i < filteredcombatlogarray.length; i++) {
                combatlog += "<p>" + filteredcombatlogarray[i] + "</p>";
            }   
            document.getElementById("combatlog").innerHTML = combatlog;
}

combatLogDisplay();

function submitImportData(type) {

    let importedgear = document.getElementById("importdata").value;
    let newgear = {};
    let attach = 0;

    if (type == '70U') {
        newgear = importFrom70U(JSON.parse(importedgear));
    } else if (type == 'WA') {
        newgear = importFromWA(importedgear);
    }

    try {
        if (type == '70U') {
            newgear = importFrom70U(JSON.parse(importedgear));
            newgear.gear.ammo.id = gear.ammo.id;

            gear = newgear.gear;
        } else if (type == 'WA') {
            newgear = importFromWA(importedgear);
            newgear.ammo.id = gear.ammo.id;

            gear = newgear;
        }
        // update imported gear to include attachments by default
        if (!gear.mainhand.attachment) {
            attach = updateAttachments(gear.mainhand.id, 28421);
            gear.mainhand.attachment = attach;
        }
        if (!!gear.offhand && !gear.offhand.attachment) {
            attach = updateAttachments(gear.offhand.id, 28421);
            gear.offhand.attachment = attach;
        }

        document.getElementById("importdata").value = '';
        document.getElementById("confirmimport").innerHTML = "Successfully Imported!";
        selectedOptionsResults();
    }
    catch(err){
        if (type == '70U') {
            throw new Error("Failed to import: " + newgear.gear.errors)
        } else if (type == 'WA') {
            throw new Error("Failed to import: " + newgear.errors)
        }
    }
    
}

async function exportDataToFile() {
    let opts = {
        suggestedName: "HunterSim.json"
    };
    var success = false;
    var handle;
    try {
        handle = await showSaveFilePicker(opts);
        success = true;
    } catch (e) {
        success = false;
    }
    if(success) {
        const writable = await handle.createWritable();
        await writable.write( exportSavedDataStorage() );
        writable.close();
    }
    
}

async function importDataFromFile() {
    let opts = {
        types: [
            {
                accept: {
                    'json/*': ['.json']
                },
                excludeAcceptAllOption: true,
                multiple: false
            }
        ]
    };
    [handle] = await showOpenFilePicker(opts);
    const file = await handle.getFile();
    const contents = await file.text();
    let newstorage = JSON.parse(contents);
    for (let key in newstorage) {
        localStorage[key] = newstorage[key];
    }
    fetchData();
    selectedOptionsResults();
}

function exportSavedDataStorage() {
    return JSON.stringify(localStorage)
}

function importSavedDataStorage() {

    let importeddata = document.getElementById("importdata").value;
    let newstorage = JSON.parse(importeddata);
    try {
        if (newstorage.savecheck) {
            for (let key in newstorage) {
                localStorage[key] = newstorage[key];
            }
    
            document.getElementById("importdata").value = '';
            document.getElementById("confirmimport").innerHTML = "Successfully Imported!";
            fetchData();
            selectedOptionsResults();
        } else {
            document.getElementById("confirmimport").innerHTML = "Failed to import.. Missing Data.";
        }
    }
    catch(err){
        throw new Error("Failed to import: " + err);
    }
}

function loadSet() {

    let val = parseInt(document.getElementById("savedset").value);
    let activeset = SavedSets[val];
    try {
        let newgear = JSON.parse(JSON.stringify(activeset.data));
        gear = newgear;
        selectedOptionsResults();
    }
    catch(err){
        console.log(err);
    }
}

function removeSet() {
    
    let currset = parseInt(document.getElementById("savedset").value);
    let setname = document.getElementById("savedset").selectedOptions[0].text;
    let remove = confirm("This will delete the set: '"+ setname + "' \nContinue?");
    if (remove) {
        SavedSets.splice(currset,1);
        initializeSavedSets();
    }
}

function saveSet() {

    let currset = parseInt(document.getElementById("savedset").value);
    let setname = document.getElementById("savedset").selectedOptions[0].text;
    let save = confirm("This will overwrite the current set: '"+ setname + "' \nContinue?");
    if (save) {
        let currgear = JSON.parse(JSON.stringify(gear));
        SavedSets[currset].data = currgear;
        let test = JSON.stringify(SavedSets);
        console.log(test.length)
        storeData();
    }
}

function addSet() {

    let setName = document.getElementById("setNameText").value;
    let currgear = JSON.parse(JSON.stringify(gear));
    let newset = { setname: setName, data: currgear }
    SavedSets.push(newset); 
    let val = SavedSets.length;
    initializeSavedSets(val - 1);

    document.getElementById("setNameText").value = "";
    storeData();
}

function initializeSavedSets(setnum) {
    let value = (!!setnum) ? setnum : 0;
    let sets = SavedSets;
    let length = SavedSets.length;
    var setOptions = "";
    let i = 0;

    if (length == 0) {
        document.getElementById("saveprofbtn").style.pointerEvents = 'none';

    } else {
        document.getElementById("saveprofbtn").style.pointerEvents = 'auto';
        
        for (i=0; i < length; i++) {
            setOptions += "<option value="+i+" >" + sets[i].setname + "</option>";
        }
    }
    document.getElementById("savedset").innerHTML = setOptions;
    document.getElementById("savedset").value = value;
}

function initializeTargetDropdown() {
    let initialId = 0;
    let targets = targetData.getNameKeyTargetPairs();

    if (localStorage.getItem('target') !== null){
        let savedtarget = JSON.parse(localStorage.getItem('target'));
        let findtarget = targets.find(key => key.name == savedtarget.name);
        initialId = findtarget.id;
    } else {
        initialId = 19044;
    }
    
    var targetsOptions = "";
    for (const target of targets) {
        targetsOptions += "<option value= "+target.id+" >" + target.name + "</option>";
      }   
    document.getElementById("targetSelect").innerHTML = targetsOptions;
    document.getElementById('targetSelect').value = initialId;
    document.getElementById("armor").disabled = true;
    document.getElementById("typeSelect").disabled = true;
    document.getElementById("level").disabled = true;
    selectTarget(initialId);
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
    calcBaseStats();
    update();
}

function initializeImportSets(){

    let imports = DEFAULT_GEAR_SETS;
    let length = DEFAULT_GEAR_SETS.length;
    var importOptions = "";
    let i = 0;
    for (i=0; i <= 9; i++) {
        importOptions += "<option value= "+i+" >" + imports[i].description + "</option>";
    }
    //console.log(importOptions);
    document.getElementById("gearprofile").innerHTML = importOptions;
    document.getElementById("gearprofile").value = 4;

}

function selectGearlist() {

    let gearindex = document.getElementById("gearprofile").value;
    let gearobj = DEFAULT_GEAR_SETS[gearindex];
    gear = gearobj.data;
    selectedOptionsResults();
}

initializeTargetDropdown();
gearSlotsDisplay();
fetchData();
selectedOptionsResults();
initializeImportSets();
initializeSavedSets();