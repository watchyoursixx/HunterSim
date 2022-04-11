var activeslot = '';
var prevslot = '';
var activetab = '';

var phase = parseInt(document.getElementById('phasecheck').value);
var raidcheck = document.getElementById("raidcheck").checked;
var pvpcheck = document.getElementById("pvpcheck").checked;
var greencheck = document.getElementById("greencheck").checked;
var boecheck = document.getElementById("boecheck").checked;
var leathercheck = document.getElementById("leathercheck").checked;
var repcheck = document.getElementById("repcheck").checked;
var bosscheck = document.getElementById("bosscheck").checked;
var craftcheck = document.getElementById("craftcheck").checked;
var lastoffhand = gear.offhand; // placeholder to prevent an error
document.getElementById("1hfilter").checked = true; // set true on load
document.getElementById("2hfilter").checked = true; // set true on load
var onehandfilter = document.getElementById("1hfilter").checked;
var twohandfilter = document.getElementById("2hfilter").checked;

// used for Estimating DPS by socket
var preferredGems = {
    Red: 24028,
    Blue: 24055,
    Yellow: 31868,
    Meta: 32409
}
var hitCap = 142;
var equippedHit = {
    head: 0,
    neck: 0,
    shoulder: 0,
    back: 0,
    chest: 0,
    wrist: 0,
    mainhand: 0,
    offhand: 0,
    hand: 0,
    waist: 0,
    leg: 0,
    feet: 0,
    ring1: 0,
    ring2: 0,
    trinket1: 0,
    trinket2: 0,
    range: 0
}

var gemsTotalsEquipped = {};
// on click listeners for slots and enchants
document.getElementById("headench").addEventListener("click", function(){gearModalDisplay("head")}, false);
document.getElementById("shoulderench").addEventListener("click", function(){gearModalDisplay("shoulder")}, false);
document.getElementById("backench").addEventListener("click", function(){gearModalDisplay("back")}, false);
document.getElementById("chestench").addEventListener("click", function(){gearModalDisplay("chest")}, false);
document.getElementById("wristench").addEventListener("click", function(){gearModalDisplay("wrist")}, false);
document.getElementById("mainhandench").addEventListener("click", function(){gearModalDisplay("mainhand")}, false);
document.getElementById("offhandench").addEventListener("click", function(){gearModalDisplay("offhand")}, false);
document.getElementById("rangeench").addEventListener("click", function(){gearModalDisplay("range")}, false);
document.getElementById("handench").addEventListener("click", function(){gearModalDisplay("hand")}, false);
document.getElementById("legench").addEventListener("click", function(){gearModalDisplay("leg")}, false);
document.getElementById("feetench").addEventListener("click", function(){gearModalDisplay("feet")}, false);
document.getElementById("ring1ench").addEventListener("click", function(){gearModalDisplay("ring1")}, false);
document.getElementById("ring2ench").addEventListener("click", function(){gearModalDisplay("ring2")}, false);
document.getElementById("mainhandattach").addEventListener("click", function(){gearModalDisplay("mainhand")}, false);
document.getElementById("offhandattach").addEventListener("click", function(){gearModalDisplay("offhand")}, false);

document.getElementById("headslot").addEventListener("click", function(){gearModalDisplay("head")}, false);
document.getElementById("neckslot").addEventListener("click", function(){gearModalDisplay("neck")}, false);
document.getElementById("shoulderslot").addEventListener("click", function(){gearModalDisplay("shoulder")}, false);
document.getElementById("backslot").addEventListener("click", function(){gearModalDisplay("back")}, false);
document.getElementById("chestslot").addEventListener("click", function(){gearModalDisplay("chest")}, false);
document.getElementById("wristslot").addEventListener("click", function(){gearModalDisplay("wrist")}, false);
document.getElementById("mainhandslot").addEventListener("click", function(){gearModalDisplay("mainhand")}, false);
document.getElementById("offhandslot").addEventListener("click", function(){gearModalDisplay("offhand")}, false);
document.getElementById("rangeslot").addEventListener("click", function(){gearModalDisplay("range")}, false);
document.getElementById("handslot").addEventListener("click", function(){gearModalDisplay("hand")}, false);
document.getElementById("waistslot").addEventListener("click", function(){gearModalDisplay("waist")}, false);
document.getElementById("legslot").addEventListener("click", function(){gearModalDisplay("leg")}, false);
document.getElementById("feetslot").addEventListener("click", function(){gearModalDisplay("feet")}, false);
document.getElementById("ring1slot").addEventListener("click", function(){gearModalDisplay("ring1")}, false);
document.getElementById("ring2slot").addEventListener("click", function(){gearModalDisplay("ring2")}, false);
document.getElementById("trinket1slot").addEventListener("click", function(){gearModalDisplay("trinket1")}, false);
document.getElementById("trinket2slot").addEventListener("click", function(){gearModalDisplay("trinket2")}, false);
document.getElementById("ammoslot").addEventListener("click", function(){gearModalDisplay("ammo")}, false);

// select an item based on given itemid input, selected from a clicked row in the gear tbody
function selectItem(itemid) {
    let ench = (!!gear[activeslot].enchant && gear[activeslot].enchant > 0) ? gear[activeslot].enchant : 0;
    let attach = (!!gear[activeslot].attachment && gear[activeslot].attachment > 0) ? gear[activeslot].attachment : 0;

    switch (activeslot){
        case 'head':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: ench };
        break;
        case 'neck':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [] };
        break;
        case 'shoulder':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: ench };
        break;
        case 'back':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: ench };
        break;
        case 'chest':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: ench };
        break;
        case 'wrist':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: ench };
        break;
        case 'mainhand':
            console.log("you selected "+ itemid);
            // check if 2h ench or 20 agi, if so check for 2h, then apply either +35 agi or 20 agi
            if (ench == 27977 || ench == 42620 || ench == 27971 || ench == 27837) {
                ench = (MELEE_WEAPONS[itemid].hand == 'Two') ? 27977 : 42620;
            }
            // if attach is a stone, check if selected is fist then use weightstone, else use sharp stone
            if (attach == 28421 || attach == 23529) {
                attach = ((MELEE_WEAPONS[itemid].type == 'fist') || (MELEE_WEAPONS[itemid].type == 'staff')) ? 28421 : 23529;
            }
            
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: ench, attachment: attach };
            checkWeaponType();
            if(offhandDisabled) {
                lastoffhand = gear.offhand;
                delete gear.offhand;
            }
            else if(!gear.offhand) {
                gear.offhand = lastoffhand;
            }
        break;
        case 'offhand':
            console.log("you selected "+ itemid);

            // if attach is a stone, check if selected is fist then use weightstone, else use sharp stone
            if (attach == 28421 || attach == 23529) {
                attach = ((MELEE_WEAPONS[itemid].type == 'fist')) ? 28421 : 23529;
            }
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: 42620, attachment: attach };
        break;
        case 'range':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: ench };
        break;
        case 'hand':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: ench };
        break;
        case 'waist':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: []};
        break;
        case 'leg':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: ench };
        break;
        case 'feet':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: ench };
        break;
        case 'ring1':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: ench };
        break;
        case 'ring2':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: ench };
        break;
        case 'trinket1':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid)};
        break;
        case 'trinket2':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid)};
        break;
        case 'ammo':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid)};
        break;
    }
    gearModalDisplay(activeslot);
    gearSlotsDisplay();
    displayCurrentGearTabs();
    selectedOptionsResults();

    return false;
}
function selectFirstGem(itemid){
    console.log("you selected "+ itemid);
    gear[activeslot].gems[0] = parseInt(itemid);
    gearModalDisplay(activeslot);
    gearSlotsDisplay();
    displayCurrentGearTabs();
    selectedOptionsResults();
    return false;
}
function selectSecondGem(itemid){
    console.log("you selected "+ itemid);
    gear[activeslot].gems[1] = parseInt(itemid);
    gearModalDisplay(activeslot);
    gearSlotsDisplay();
    displayCurrentGearTabs();
    selectedOptionsResults();
    return false;
}
function selectThirdGem(itemid){
    console.log("you selected "+ itemid);
    gear[activeslot].gems[2] = parseInt(itemid);
    gearModalDisplay(activeslot);
    gearSlotsDisplay();
    displayCurrentGearTabs();
    selectedOptionsResults();
    return false;
}
function selectEnchant(itemid){
    console.log("you selected "+ itemid);
    gear[activeslot].enchant = parseInt(itemid);
    gearModalDisplay(activeslot);
    gearSlotsDisplay();
    displayCurrentGearTabs();
    selectedOptionsResults();
    return false;
}
function selectAttachment(itemid){
    console.log("you selected "+ itemid);
    gear[activeslot].attachment = parseInt(itemid);
    gearModalDisplay(activeslot);
    gearSlotsDisplay();
    displayCurrentGearTabs();
    selectedOptionsResults();
    return false;
}

function filterWeaponLists(array,type){

    Object.filter = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(predicate));
    let twohandcheck = '';
    let attachcheck = '';
    if (activeslot == 'mainhand' && type =='item' && !onehandfilter && twohandfilter) {
        array = Object.filter(MELEE_WEAPONS, ([key, obj]) => obj.hand === 'Two' || key == gear[activeslot].id);
    } else if (activeslot == 'mainhand' && type == 'item' && !twohandfilter && onehandfilter) {
        array = Object.filter(MELEE_WEAPONS, ([key, obj]) => obj.hand === 'One' || obj.hand === 'Main' || key == gear[activeslot].id);
    } else if (activeslot == 'mainhand' && type =='item') {
        array = MELEE_WEAPONS;
    }

    if (activeslot === 'mainhand' && type === 'item') {
        array = Object.filter(array, ([key, obj]) => obj.hand === 'Main' || obj.hand === 'One' || obj.hand === 'Two');
    } 
    else if ( activeslot === 'offhand' && type === 'item') {
        array = Object.filter(array, ([key, obj]) => obj.hand === 'Off' || obj.hand === 'One');
    } 
    else if ( activeslot === 'mainhand' && type === 'enchant') {
        twohandcheck = MELEE_WEAPONS[gear.mainhand.id].hand;
        if (twohandcheck !== 'Two') {
            array = Object.filter(MELEE_ENCHANTS, ([key, obj]) => !obj.for_two_handed);
        }
    }
    else if ( activeslot === 'offhand' && type === 'enchant') {
        twohandcheck = MELEE_WEAPONS[gear.offhand.id].hand;
        if (twohandcheck !== 'Two') {
            array = Object.filter(MELEE_ENCHANTS, ([key, obj]) => !obj.for_two_handed);
        }
    }
    else if ( activeslot === 'mainhand' && type === 'attachment') {
        attachcheck = MELEE_WEAPONS[gear.mainhand.id].type;
        if (attachcheck !== 'fist' && attachcheck !== 'staff') {
            array = Object.filter(ATTACHMENTS, ([key, obj]) => !(obj.type === 'blunt'));
        }
    }
    else if ( activeslot === 'offhand' && type === 'attachment') {
        attachcheck = MELEE_WEAPONS[gear.offhand.id].type;
        if (attachcheck !== 'fist' && attachcheck !== 'staff') {
            array = Object.filter(ATTACHMENTS, ([key, obj]) => !(obj.type === 'blunt'));
        }
    }
    return array;
}

function filterPhasesOptions(array, type){

    let lookup = 0;
    Object.filter = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(predicate));
    phase = parseInt(document.getElementById('phasecheck').value);
    let currgear = gear[activeslot];

    if (type != 'item') {
        if (type == 'gem1') {
            lookup = currgear.gems[0];
        } else if (type == 'gem2') {
            lookup = currgear.gems[1];
        } else if (type == 'gem3') {
            lookup = currgear.gems[2];
        } else if (type == 'enchant') {
            lookup = currgear.enchant;
        } else if (type == 'attachment') {
            lookup = currgear.attachment;
        }
        filteredarray = Object.filter(array, ([key, obj]) => (obj.Phase <= phase) || (key == lookup));

    } else {
        lookup = gear[activeslot].id;
        filteredarray = Object.filter(array, ([key, obj]) => (obj.Phase <= phase) || (key == lookup));
    
        if (!raidcheck) {
            filteredarray = Object.filter(filteredarray, ([key, obj]) => 
            !(obj.Location == 'Karazhan') && !(obj.Location == 'Mount Hyjal') && !(obj.Location == 'Black Temple')
            && !(obj.Location == 'Sunwell') && !(obj.Location == "Gruul's Lair") && !(obj.Location == "Magtheridon's Lair")
            && !(obj.Location == "Zul'Aman") && !(obj.Location == "SerpentShrine Cavern") 
            && !(obj.Location == "The Eye") || (key == gear[activeslot].id));
        }
        if (!pvpcheck) {
            filteredarray = Object.filter(filteredarray, ([key, obj]) => !(obj.Location == 'PvP Reward') 
            && !(obj.Location == 'Arena Reward') && !(obj.Location == 'Honor Reward') || (key == gear[activeslot].id));
        }
        if (!greencheck) {
            filteredarray = Object.filter(filteredarray, ([key, obj]) => !(obj.quality == 'Uncommon') || (key == gear[activeslot].id));
        }
        if (!boecheck) {
            filteredarray = Object.filter(filteredarray, ([key, obj]) => !(obj.Location == 'World Drop')|| (key == gear[activeslot].id));
        }
        if (!leathercheck) {}
        if (!repcheck) {
            filteredarray = Object.filter(filteredarray, ([key, obj]) => !(obj.Location == 'Reputation Reward')|| (key == gear[activeslot].id));
        }
        if (!bosscheck) {
            filteredarray = Object.filter(filteredarray, ([key, obj]) => !(obj.Location == 'World Boss')|| (key == gear[activeslot].id));
        }
        if (!craftcheck) {
            filteredarray = Object.filter(filteredarray, ([key, obj]) => !(obj.Location == 'Crafting')|| (key == gear[activeslot].id));
        }
    }
    return filteredarray;
}

function generateGearOptionsList(obj,type){

    if (activeslot === 'mainhand' || activeslot === 'offhand'){
        obj = filterWeaponLists(obj, type);
    }
    obj = filterPhasesOptions(obj, type);
    
    obj = estimateDpsForObj(obj, statweights, type);
    //let list = Object.keys(obj).map(Number);
    generateGearTable(obj, type);
}

function itemSelectorDisplay(slotarray){
    if (activeslot === 'offhand' && offhandDisabled) {
        return;
    }
    let type = 'item';
    generateGearOptionsList(slotarray, type);

}

function enchSelectorDisplay(slotarray){
    if (activeslot === 'offhand' && (offhandDisabled || gear.offhand === undefined)) {
        return;
    }
    let type = 'enchant';
    generateGearOptionsList(slotarray, type);
    
}

function attachSelectorDisplay(slotarray){
    if (activeslot === 'offhand' && (offhandDisabled || gear.offhand === undefined)) {
        return;
    }
    let type = 'attachment';
    generateGearOptionsList(slotarray, type);

}

function gemSelectorDisplay(slotarray){
    if (activeslot === 'offhand' && (offhandDisabled || gear.offhand === undefined)) {
        return;
    }
    let gem1 = 0;
    let gem2 = 0;
    let gem3 = 0;
    
    Object.filter = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(predicate));

    let skt = (slotarray[gear[activeslot].id].hasOwnProperty('sockets')) ? slotarray[gear[activeslot].id].sockets : [];
    if (skt.length > 0){
        gem1 = gear[activeslot].gems[0] || 0;
        gem2 = gear[activeslot].gems[1] || 0;
        gem3 = gear[activeslot].gems[2] || 0;

        let META = Object.filter(GEMS, ([key, obj]) => obj.meta === 'Y');
        let NO_META = Object.filter(GEMS, ([key, obj]) => obj.meta !== 'Y');
        if(skt.length < 1){
        } else {
            if (skt[0] === 'Meta') {
                metaselectOptions = generateGearOptionsList(META,'gem1');
            } else {
                gemselectOptions = generateGearOptionsList(NO_META,'gem1');
            }
        }
        if(skt.length < 2){
        } else {
            if (skt[1] === 'Meta') {
                metaselectOptions = generateGearOptionsList(META,'gem2');
            } else {
                gemselectOptions = generateGearOptionsList(NO_META,'gem2');
            }
        }
        if(skt.length < 3){
        } else {
            if (skt[2] === 'Meta') {
                metaselectOptions = generateGearOptionsList(META,'gem3');
            } else {
                gemselectOptions = generateGearOptionsList(NO_META,'gem3');
            }
        }
    } 
}

function updateGearLists(){

    phase = parseInt(document.getElementById('phasecheck').value);
    raidcheck = document.getElementById("raidcheck").checked;
    pvpcheck = document.getElementById("pvpcheck").checked;
    greencheck = document.getElementById("greencheck").checked;
    boecheck = document.getElementById("boecheck").checked;
    leathercheck = document.getElementById("leathercheck").checked;
    repcheck = document.getElementById("repcheck").checked;
    bosscheck = document.getElementById("bosscheck").checked;
    craftcheck = document.getElementById("craftcheck").checked;

    onehandfilter = document.getElementById("1hfilter").checked;
    twohandfilter = document.getElementById("2hfilter").checked;
    if (phase >= 3) {
        preferredGems = {
            Red: 32194,
            Blue: 32212,
            Yellow: 32222,
            Meta: 32409
        }
    } else {
        preferredGems = {
            Red: 24028,
            Blue: 24055,
            Yellow: 31868,
            Meta: 32409
        }
    }

    storeData();

    gearModalDisplay(activeslot);
}

function gearModalDisplay(slot){
    
    activeslot = slot;
    displayCurrentGearTabs();
    if (activeslot === 'offhand' && offhandDisabled) {
        return;
    }
    document.getElementById("gearmodal").style.display = "block";
    if (activeslot == 'mainhand') {
        document.getElementById("filterweps").style.display = "block";
    } else {
        document.getElementById("filterweps").style.display = "none";
    }

    if (slot === 'head') {
        itemSelectorDisplay(HEADS);
        enchSelectorDisplay(HEAD_ENCHANTS);
        gemSelectorDisplay(HEADS);
    }
    else if (slot === 'neck') {
        itemSelectorDisplay(NECKS);
        gemSelectorDisplay(NECKS);
    }
    if (slot === 'shoulder') {
        itemSelectorDisplay(SHOULDERS);
        enchSelectorDisplay(SHOULDER_ENCHANTS);
        gemSelectorDisplay(SHOULDERS);
    }
    if (slot === 'back') {
        itemSelectorDisplay(BACKS);
        enchSelectorDisplay(BACK_ENCHANTS);
        gemSelectorDisplay(BACKS);
    }
    if (slot === 'chest') {
        itemSelectorDisplay(CHESTS);
        enchSelectorDisplay(CHEST_ENCHANTS);
        gemSelectorDisplay(CHESTS);
    }
    if (slot === 'wrist') {
        itemSelectorDisplay(WRISTS);
        enchSelectorDisplay(WRIST_ENCHANTS);
        gemSelectorDisplay(WRISTS);
    }
    if (slot === 'mainhand') {
        itemSelectorDisplay(MELEE_WEAPONS);
        enchSelectorDisplay(MELEE_ENCHANTS);
        gemSelectorDisplay(MELEE_WEAPONS);
        attachSelectorDisplay(ATTACHMENTS);
    }
    if (slot === 'offhand') {
        itemSelectorDisplay(MELEE_WEAPONS);
        enchSelectorDisplay(MELEE_ENCHANTS);
        gemSelectorDisplay(MELEE_WEAPONS);
        attachSelectorDisplay(ATTACHMENTS);
    }
    if (slot === 'range') {
        itemSelectorDisplay(RANGED_WEAPONS);
        enchSelectorDisplay(RANGE_ENCHANTS);
        gemSelectorDisplay(RANGED_WEAPONS);
    }
    if (slot === 'hand') {
        itemSelectorDisplay(HANDS);
        enchSelectorDisplay(HAND_ENCHANTS);
        gemSelectorDisplay(HANDS);
    }
    if (slot === 'waist') {
        itemSelectorDisplay(WAISTS);
        gemSelectorDisplay(WAISTS);
    }
    if (slot === 'leg') {
        itemSelectorDisplay(LEGS);
        enchSelectorDisplay(LEG_ENCHANTS);
        gemSelectorDisplay(LEGS);
    }
    if (slot === 'feet') {
        itemSelectorDisplay(FEET);
        enchSelectorDisplay(FEET_ENCHANTS);
        gemSelectorDisplay(FEET);
    }
    if (slot === 'ring1') {
        itemSelectorDisplay(RINGS);
        enchSelectorDisplay(RING_ENCHANTS);
        gemSelectorDisplay(RINGS);
    }
    if (slot === 'ring2') {
        itemSelectorDisplay(RINGS);
        enchSelectorDisplay(RING_ENCHANTS);
        gemSelectorDisplay(RINGS);
    }
    if (slot === 'trinket1') {
        itemSelectorDisplay(TRINKETS);
        gemSelectorDisplay(TRINKETS);
    }
    if (slot === 'trinket2') {
        itemSelectorDisplay(TRINKETS);
        gemSelectorDisplay(TRINKETS);
    }
    if (slot === 'ammo') {        
        itemSelectorDisplay(AMMOS);
        gemSelectorDisplay(AMMOS);
    }
}

function qualityColorCheck(color){
    let quality = '';

    if(color === "Common"){
        quality = "common-text";
    } else if(color === "Uncommon") {
        quality = "uncommon-text";
    } else if(color === "Rare") {
        quality = "rare-text";
    } else if(color === "Epic") {
        quality = "epic-text";
    } else if(color === "Legendary") {
        quality = "legendary-text";
    } else { new Error("No color selected")}

    return quality;
}

function textColorDisplay(slot,array){
    let slotname = slot + 'slot';
    let color = '';
    if (slot === 'offhand' && gear.offhand === undefined) {
        color = "Common";
    } else {
        color = array[gear[slot].id].quality;
    }
    document.getElementById(slotname).removeAttribute("class");
    let quality = qualityColorCheck(color);

    document.getElementById(slotname).classList.add(quality);
    
}

// used for gear lists calculating hit in gear
function getHitData(){
    let ffbonus = document.getElementById("ffbonus").selected;
    if (talents.surefooted > 0 && ffbonus) {
       hitCap = 142 - (HitRatingRatio * talents.surefooted + HitRatingRatio * 3);
    }
    else if (ffbonus) {
       hitCap = 142 - HitRatingRatio * 3;
    }
    else hitCap = 142;

    equippedHit.head = (!!HEADS[gear.head.id].stats.Hit) ? HEADS[gear.head.id].stats.Hit : 0;
    equippedHit.neck = (!!NECKS[gear.neck.id].stats.Hit) ? NECKS[gear.neck.id].stats.Hit : 0;
    equippedHit.shoulder = (!!SHOULDERS[gear.shoulder.id].stats.Hit) ? SHOULDERS[gear.shoulder.id].stats.Hit : 0;
    equippedHit.back = (!!BACKS[gear.back.id].stats.Hit) ? BACKS[gear.back.id].stats.Hit : 0;
    equippedHit.chest = (!!CHESTS[gear.chest.id].stats.Hit) ? CHESTS[gear.chest.id].stats.Hit : 0;
    equippedHit.wrist = (!!WRISTS[gear.wrist.id].stats.Hit) ? WRISTS[gear.wrist.id].stats.Hit : 0;
    equippedHit.mainhand = (!!MELEE_WEAPONS[gear.mainhand.id].stats.Hit) ? MELEE_WEAPONS[gear.mainhand.id].stats.Hit : 0;
    if (!offhandDisabled) {
        equippedHit.offhand = (!!MELEE_WEAPONS[gear.offhand.id].stats.Hit) ? MELEE_WEAPONS[gear.offhand.id].stats.Hit : 0; }
    equippedHit.range = (!!RANGED_WEAPONS[gear.range.id].stats.Hit) ? RANGED_WEAPONS[gear.range.id].stats.Hit : 0;
    equippedHit.hand = (!!HANDS[gear.hand.id].stats.Hit) ? HANDS[gear.hand.id].stats.Hit : 0;
    equippedHit.waist = (!!WAISTS[gear.waist.id].stats.Hit) ? WAISTS[gear.waist.id].stats.Hit : 0;
    equippedHit.leg = (!!LEGS[gear.leg.id].stats.Hit) ? LEGS[gear.leg.id].stats.Hit : 0;
    equippedHit.feet = (!!FEET[gear.feet.id].stats.Hit) ? FEET[gear.feet.id].stats.Hit : 0;
    equippedHit.ring1 = (!!RINGS[gear.ring1.id].stats.Hit) ? RINGS[gear.ring1.id].stats.Hit : 0;
    equippedHit.ring2 = (!!RINGS[gear.ring2.id].stats.Hit) ? RINGS[gear.ring2.id].stats.Hit : 0;
    equippedHit.trinket1 = (!!TRINKETS[gear.trinket1.id].stats.Hit) ? TRINKETS[gear.trinket1.id].stats.Hit : 0;
    equippedHit.trinket2 = (!!TRINKETS[gear.trinket2.id].stats.Hit) ? TRINKETS[gear.trinket2.id].stats.Hit : 0;

}

function estimateDps(item, weights) {
    let dps = 0;
    // check for meta gems
    if (item.name == 'Relentless Earthstorm Diamond') {
        dps += weights.relentless + weights.Agi * 12;
        return dps;
    } else if (item.name == 'Swift Skyfire Diamond' || item.name == 'Potent Unstable Diamond') {
        dps += weights.RAP * 24 + weights.MAP * 24;
        return dps;
    } else if (item.name == 'Swift Windfire Diamond') {
        dps += weights.RAP * 20 + weights.MAP * 20;
        return dps;
    } else if (item.name == 'Enigmatic Skyfire Diamond') {
        dps += weights.Crit * 12;
        return dps;
    } 
    // check for special weight
    else if (item.name == 'Beast-tamer\'s Shoulders') {
        dps += weights.beasttamer;
    }
    else if (item.name == 'Band of the Eternal Champion') {
        dps += 15;
    }
    // check for weightstone/sharp stone for weps
    if ((activeslot == 'mainhand' || activeslot == 'offhand') && !!item.type) {
        if (item.type == 'fist' || item.type == 'staff') {
            dps += weights.rangedmgbonus * 12 + weights.dmgbonus * 12 + weights.RangeCrit * 14 + weights.MeleeCrit * 14;
        } else {
            dps += weights.rangedmgbonus * 12 + weights.dmgbonus * 12 + weights.MeleeCrit * 14;
        }
        if (item.hand == 'Two') {
            dps += weights.Agi * 35;
        } else {
            dps += weights.Agi * 20;
        }
    }
    if (activeslot == 'mainhand' && !!item.type && SPELLS.raptorstrike.enable) {
        dps += item.speed * 30 + ((item.mindmg + item.maxdmg) / 2) / item.speed * 0.46;
    } else if (activeslot == 'range' && !!item.type && item.name == "Thori'dal, the Stars Fury") {
        dps += item.speed * 50 + ((item.mindmg + item.maxdmg) / 2) / item.speed * 5.8 / 1.25;
    } else if (activeslot == 'range' && !!item.type) {
        dps += item.speed * 50 + ((item.mindmg + item.maxdmg) / 2) / item.speed * 5.8;
    }
    // add stats
    if (!!item.stats) {
        dps += Object.entries(item.stats).reduce((acc, [stat, value]) => {
            let usedValue = value
  
            if (stat === "Hit") {
                let currenthit = RangeHitRating - equippedHit[activeslot]
                usedValue = currenthit < hitCap ? Math.min(hitCap - currenthit, value) : 0
            }
            return acc + (weights[stat] || 0) * usedValue
          }, 0)
    } // if no stats, add specials, else return any previous calc'd value
    else if (!!item.special) {
        dps += Object.entries(item.special).reduce((acc, [stat, value]) => acc + (weights[stat] || 0) * value, 0)
    } else { return dps }

    if (item.sockets?.length) {
        var allRed = 0;
        if(activeslot == 'head' && item.sockets.includes('Meta')){
            allRed = ((item.sockets.length - 1) > 0) ? (item.sockets.length - 1) * estimateDps(GEMS[preferredGems.Red], weights) : 0;
            allRed += weights.relentless + weights.Agi * 12;
        } else {
            allRed = item.sockets.length * estimateDps(GEMS[preferredGems.Red], weights);
        }
            
        var matchingSockets = item.sockets.reduce((dps, socket) =>
            dps + estimateDps(GEMS[preferredGems[socket]], weights),
            estimateDps({ stats: item.socketBonus }, weights)
        )
        dps += allRed > matchingSockets ? allRed : matchingSockets
    }
    return dps
}

function estimateDpsForObj(obj, weights, type) {
    let currentDps = 0;
    let currgear = gear[activeslot];

    switch(type) {
        case 'item':
            if(!!currgear.id) { currentDps = estimateDps(obj[currgear.id], weights)}
        break;
        case 'gem1':
            if(!!currgear.gems[0]) { currentDps = estimateDps(obj[currgear.gems[0]], weights)}
        break;
        case 'gem2':
            if(!!currgear.gems[1]) { currentDps = estimateDps(obj[currgear.gems[1]], weights)}
        break;
        case 'gem3':
            if(!!currgear.gems[2]) { currentDps = estimateDps(obj[currgear.gems[2]], weights)}
        break;
        case 'enchant':
            if(!!currgear.enchant) { currentDps = estimateDps(obj[currgear.enchant], weights)}
        break;
        case 'attachment':
            if(!!currgear.attachment) { currentDps = estimateDps(obj[currgear.attachment], weights)}
        break;
    }
    return Object.entries(obj)
      .map(([id, piece]) => {
        const dps = estimateDps(piece, weights)
        return {id, ...piece, DPS: dps, delta: dps - currentDps}
    }).sort((first, second) => second.delta - first.delta)
}

// used to swap tabs on the gear popup
function changeGearTab(evt, type) {
    let i = 0;
    let content = document.getElementsByClassName("geartab-content");
    for (i = 0; i < content.length; i++) {

      content[i].style.display = "none";
    }
    let gearTab = document.getElementsByClassName("item-selector-tab");
    for (i = 0; i < gearTab.length; i++) {

      gearTab[i].className = gearTab[i].className.replace(" active", "");
    }
    if (type != 'gearitem') { 
        document.getElementById("remove").style.display = "block";
    } else {
        document.getElementById("remove").style.display = "none";
    }
    activetab = type;
    document.getElementById(type).style.display = "block";
    evt.currentTarget.className += " active";
}
// initialize dft tab on load
document.getElementById("dftTab").click();

// removes enchants, gems, or attachments upon pressing unequip button
function unequipItemFromGear(){

    if ((activetab == 'geargem1') && (gear[activeslot].gems[0] > 0)) {
        gear[activeslot].gems[0] = 0;
    } else if ((activetab == 'geargem2') && (gear[activeslot].gems[1] > 0)){
        gear[activeslot].gems[1] = 0;
    } else if ((activetab == 'geargem3') && (gear[activeslot].gems[2] > 0)){
        gear[activeslot].gems[2] = 0;
    } else if ((activetab == 'gearench') && (!!gear[activeslot].enchant)) {
        delete gear[activeslot].enchant;
    } else if ((activetab == 'gearattach') && (!!gear[activeslot].attachment)) {
        delete gear[activeslot].attachment;
    }
    gearModalDisplay(activeslot);
}
/** takes a given input and filters a given table based on slot, tab selected. */
function filterField(input , table) {
    var input, filter, table, tr, td, i, txtValue;
    
    input = document.getElementById(input);
    filter = input.value.toUpperCase();

    table = document.getElementById(table);

    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
}

/** Generates the table bodies for displaying sorted gear/gem/enchants */
function generateGearTbodies(array, fnc, idname, lookup, hrefdata, locdata){

    let tbody = document.getElementById(idname);
    let arraylength = array.length;
    let quality = '';
    let src = '';
    let altrow = '';
    let y = 0;
    let id = 0;
    let final = '';
    let highlight = '';
    let imgreformat = '';
    let i = 0;

    tbody.innerHTML = '';
    for (i = 0; i < arraylength; i++) {
        y = (y > 1) ? 0 : y;
        altrow = (y == 0) ? 'altrow' : 'baserow';

        id = parseInt(array[i].id);
        highlight = (id == lookup) ? "class='highlight-border'" : "";
        imgreformat = (id == lookup) ? "highlight-img-td" : "norm-img-td";
        href = "https://tbc.wowhead.com/" + hrefdata + id;
        result = (array[i].delta >= 0) ? 'positive-result' : 'negative-result';
        quality = qualityColorCheck(array[i].quality);

        let tr = "<tr class='" + altrow + "' onclick='return "+fnc+"("+ id + ")'>";

        src = "https://wow.zamimg.com/images/wow/icons/large/" + array[i].icon +".jpg";

        tr += "<td class='"+ imgreformat +"'><a href=" + href + "><img "+highlight+" style='vertical-align: middle;'src=" + src + "></a></td>" +
        "<td style='text-align:left'><a class=" + quality + " href=" + href + ">" + array[i].name + "</a></td>" + 
        "<td class='positive-result' style='text-align:center'>" + (array[i].DPS).toFixed(2) + "</td>" + 
        "<td class=" + result + " style='text-align:center'>" + (array[i].delta).toFixed(2) + "</td>";
        tr += (locdata.length > 0) ? locdata[i] + "</tr>" : "</tr>";
        "</tr>";
        final += tr;
        y++;
    }

        tbody.innerHTML = final;
}

/** Initial function to generate tables for gear/gems/enchants */
function generateGearTable(array, type) {

    //let start = performance.now();
    let arraylength = array.length;
    let currgear = gear[activeslot];
    let i = 0;
    let idname = '';
    let locdata = [];
    let hrefdata = (type == 'enchant') ? "spell=" : "item=";

    if (type == 'item') {
        idname = "itemtbody";
        for (i = 0; i < arraylength; i++) {
            locdata[i] = "<td style='text-align:center'>" + (array[i].Location) + "</td>";
        }
        lookup = currgear.id;
        fnc = "selectItem";

    } else if (type == 'gem1') {
        idname = "gem1tbody";
        lookup = currgear.gems[0];
        fnc = "selectFirstGem";

    } else if (type == 'gem2') {
        idname = "gem2tbody";
        lookup = currgear.gems[1];
        fnc = "selectSecondGem";

    } else if (type == 'gem3') {
        idname = "gem3tbody";
        lookup = currgear.gems[2];
        fnc = "selectThirdGem";

    } else if (type == 'enchant') {
        idname = "enchtbody";
        lookup = currgear.enchant;
        fnc = "selectEnchant";
    } else if (type == 'attachment') {
        idname = "attachtbody";
        lookup = currgear.attachment;
        fnc = "selectAttachment";
    }

    generateGearTbodies(array, fnc, idname, lookup, hrefdata, locdata);

    //let end = performance.now();
    //let execute = (end - start) / 1000; // milliseconds convert to sec
    //console.log("generateGearTable "+execute.toFixed(3));
}

function displayCurrentGearTabs(){

    if (activeslot != prevslot) { document.getElementById("dftTab").click(); }
    let i = 0;
    let currgear = gear[activeslot];
    let gearobj = GEAR_MAP[activeslot];
    let enchobj = ENCHANT_MAP[activeslot];
    let skt = (gearobj[currgear.id].hasOwnProperty('sockets')) ? gearobj[currgear.id].sockets : [];
    let defaultench = "https://wow.zamimg.com/images/wow/icons/large/inv_misc_note_01.jpg"
    let defaultattach = "https://wow.zamimg.com/images/wow/icons/large/inv_stone_weightstone_07.jpg"

    document.getElementById('selectoritem').src = "https://wow.zamimg.com/images/wow/icons/large/" + gearobj[currgear.id].icon +".jpg";
    // check for skt display and show tab option
    for (i=0; i < 3; i++){

        if (skt.length >=(i+1)) { 
            document.getElementsByClassName("selector-skt")[i].style.display = "block";
            document.getElementsByClassName('item-selector-tab')[i+1].style.display = "block";
            document.getElementsByClassName('selector-skt')[i].src = "images/" + skt[i] + "_empty.jfif";
        } else {
            document.getElementsByClassName("selector-skt")[i].style.display = "none";
            document.getElementsByClassName('item-selector-tab')[i+1].style.display = "none";
        }
    }
    // if gems exist, check each one
    if(!!currgear.gems) {

        if(!!currgear.gems[0]) {   
            document.getElementsByClassName('item-selector-tab')[1].style.display = "block";
            document.getElementById('selectorgem1').style.display = "block";
            document.getElementById('selectorgem1').src = "https://wow.zamimg.com/images/wow/icons/large/" + GEMS[currgear.gems[0]].icon +".jpg";
        } else {document.getElementById('selectorgem1').style.display = "none";}
        if(!!currgear.gems[1]) {   
            document.getElementsByClassName('item-selector-tab')[2].style.display = "block";
            document.getElementById('selectorgem2').style.display = "block";
            document.getElementById('selectorgem2').src = "https://wow.zamimg.com/images/wow/icons/large/" + GEMS[currgear.gems[1]].icon +".jpg";
        } else {document.getElementById('selectorgem2').style.display = "none";}
        if(!!currgear.gems[2]) {   
            document.getElementsByClassName('item-selector-tab')[3].style.display = "block";
            document.getElementById('selectorgem3').style.display = "block";
            document.getElementById('selectorgem3').src = "https://wow.zamimg.com/images/wow/icons/large/" + GEMS[currgear.gems[2]].icon +".jpg";
        } else {document.getElementById('selectorgem3').style.display = "none";}
    } else {
        document.getElementsByClassName('item-selector-tab')[1].style.display = "none"; // gem 1
        document.getElementsByClassName('item-selector-tab')[2].style.display = "none"; // gem 2
        document.getElementsByClassName('item-selector-tab')[3].style.display = "none"; // gem 3
    }
    if((activeslot !== 'neck') && (activeslot !== 'trinket1') && (activeslot !== 'trinket2') 
        && (activeslot !== 'waist') && (activeslot !== 'ammo')) {   
        document.getElementsByClassName('item-selector-tab')[4].style.display = "block";
        document.getElementById('selectorenchant').src = (!!currgear.enchant) ? "https://wow.zamimg.com/images/wow/icons/large/" + enchobj[currgear.enchant].icon +".jpg" : defaultench;
    } else {
        document.getElementsByClassName('item-selector-tab')[4].style.display = "none";
    }
    if((activeslot === 'mainhand') || (activeslot === 'offhand')) {
        document.getElementsByClassName('item-selector-tab')[5].style.display = "block";
        document.getElementById('selectorattachment').src = (!!currgear.attachment) ? "https://wow.zamimg.com/images/wow/icons/large/" + ATTACHMENTS[currgear.attachment].icon +".jpg" : defaultattach;
    } else {
        document.getElementsByClassName('item-selector-tab')[5].style.display = "none";
    }
    prevslot = activeslot;
}

/** Changes color and description of meta gem for seeing if it's active */
function setMetaDisplay(metagem) {

    let metadata = GEMS[metagem];
    document.getElementById("metareq").innerHTML = "Meta: " + metadata.desc;

    let metacheck = metadata.activation(gemsTotalsEquipped);
    if (metacheck.active) {
        document.getElementById("metareq").classList.remove("meta-req-fail");
        document.getElementById("metareq").classList.add("meta-req-met");
    }
    else {
        document.getElementById("metareq").classList.remove("meta-req-met");
        document.getElementById("metareq").classList.add("meta-req-fail");
    }
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
    let offhanditem = ((offhandDisabled === false) && (gear.offhand !== undefined)) ? gear.offhand.id : 0;
    let rangeitem = gear.range.id;
    let ammoitem = gear.ammo.id;
    
    // head
    textColorDisplay('head',HEADS);

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
            if (!!GEMS[headgem1].meta) {
                setMetaDisplay(headgem1);
            }
            document.getElementsByClassName("gemskt")[0].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[headgem1].icon+".jpg";
            document.getElementsByClassName("gemskt")[0].style.visibility = "visible";
        }
        
        if(headgem2 === 0){
            document.getElementsByClassName("gemskt")[1].style.visibility = "hidden";
        } else {
            if (!!GEMS[headgem2].meta) {
                setMetaDisplay(headgem2);
            }
            document.getElementsByClassName("gemskt")[1].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[headgem2].icon+".jpg";
            document.getElementsByClassName("gemskt")[1].style.visibility = "visible";
        }
        
        if(headgem3 === 0){
            document.getElementsByClassName("gemskt")[2].style.visibility = "hidden";
        } else {
            if (!!GEMS[headgem3].meta) {
                setMetaDisplay(headgem3);
            }
            document.getElementsByClassName("gemskt")[2].src = "https://wow.zamimg.com/images/wow/icons/large/"+GEMS[headgem3].icon+".jpg";
            document.getElementsByClassName("gemskt")[2].style.visibility = "visible";
        }
        
    }
    let headench = gear.head.enchant || 0;
    let headencheffect = (headench > 0) ? "&ench="+HEAD_ENCHANTS[gear.head.enchant].effectId : 0;
    let headgemlist = "&gems="+headgem1+":"+headgem2+":"+headgem3;
    let headpcslist = "&pcs="+headitem+":"+shoulderitem+":"+chestitem+":"+wristitem+":"+handitem+":"+legitem+":"+waistitem+":"+feetitem;
    let headdata = headitem + headencheffect + headgemlist+ headpcslist;

    document.getElementById("headslot").href = "https://tbc.wowhead.com/item="+ headdata;
    document.getElementById("headslot").innerHTML = HEADS[gear.head.id].name;
    document.getElementById("headench").href = (headench > 0) ? "https://tbc.wowhead.com/spell="+ headench : "";
    document.getElementById("headench").innerHTML = (headench > 0) ? HEAD_ENCHANTS[gear.head.enchant].desc: "No Enchant";
    // neck
    textColorDisplay('neck',NECKS);

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
    let neckdata = neckitem + neckgemlist;

    document.getElementById("neckslot").href = "https://tbc.wowhead.com/item="+ neckdata;
    document.getElementById("neckslot").innerHTML = NECKS[gear.neck.id].name;

    // shoulder
    textColorDisplay('shoulder',SHOULDERS);

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
    let shoulderpcslist = "&pcs="+headitem+":"+shoulderitem+":"+chestitem+":"+wristitem+":"+handitem+":"+legitem+":"+waistitem+":"+feetitem;
    let shoulderdata = shoulderitem + shoulderencheffect + shouldergemlist+ shoulderpcslist;
    
    document.getElementById("shoulderslot").href = "https://tbc.wowhead.com/item="+ shoulderdata;
    document.getElementById("shoulderslot").innerHTML = SHOULDERS[gear.shoulder.id].name;
    document.getElementById("shoulderench").href = (shoulderench > 0) ? "https://tbc.wowhead.com/spell="+ shoulderench : "";
    document.getElementById("shoulderench").innerHTML = (shoulderench > 0) ? SHOULDER_ENCHANTS[gear.shoulder.enchant].desc: "No Enchant";
    
    // back
    textColorDisplay('back',BACKS);

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
    let backdata = backitem + backencheffect + backgemlist;

    document.getElementById("backslot").href = "https://tbc.wowhead.com/item="+ backdata;
    document.getElementById("backslot").innerHTML = BACKS[gear.back.id].name;
    document.getElementById("backench").href = (backench > 0) ? "https://tbc.wowhead.com/spell="+ backench : "";
    document.getElementById("backench").innerHTML = (backench > 0) ? BACK_ENCHANTS[gear.back.enchant].desc: "No Enchant";
    
    // chest
    textColorDisplay('chest',CHESTS);

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
    let chestpcslist = "&pcs="+headitem+":"+shoulderitem+":"+chestitem+":"+wristitem+":"+handitem+":"+legitem+":"+waistitem+":"+feetitem;
    let chestdata = chestitem + chestencheffect + chestgemlist+ chestpcslist;

    document.getElementById("chestslot").href = "https://tbc.wowhead.com/item="+ chestdata;
    document.getElementById("chestslot").innerHTML = CHESTS[gear.chest.id].name;
    document.getElementById("chestench").href = (chestench > 0) ? "https://tbc.wowhead.com/spell="+ chestench : "";
    document.getElementById("chestench").innerHTML = (chestench > 0) ? CHEST_ENCHANTS[gear.chest.enchant].desc: "No Enchant";
    
    // wrist
    textColorDisplay('wrist',WRISTS);

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
    let wristpcslist = "&pcs="+headitem+":"+shoulderitem+":"+chestitem+":"+wristitem+":"+handitem+":"+legitem+":"+waistitem+":"+feetitem;
    let wristdata = wristitem + wristencheffect + wristgemlist+ wristpcslist;

    document.getElementById("wristslot").href = "https://tbc.wowhead.com/item="+ wristdata;
    document.getElementById("wristslot").innerHTML = WRISTS[gear.wrist.id].name;
    document.getElementById("wristench").href = (wristench > 0) ? "https://tbc.wowhead.com/spell="+ wristench:""; 
    document.getElementById("wristench").innerHTML = (wristench > 0) ? WRIST_ENCHANTS[gear.wrist.enchant].desc: "No Enchant";
    
    // mainhand
    textColorDisplay('mainhand',MELEE_WEAPONS);

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
    let mainhanddata = mainhanditem + mainhandencheffect + mainhandgemlist;
    let mainhandattach = gear.mainhand.attachment || 0;

    document.getElementById("mainhandslot").href = "https://tbc.wowhead.com/item="+ mainhanddata;
    document.getElementById("mainhandslot").innerHTML = MELEE_WEAPONS[gear.mainhand.id].name;
    document.getElementById("mainhandench").href = (mainhandench > 0) ? "https://tbc.wowhead.com/spell="+ mainhandench :"";  
    document.getElementById("mainhandench").innerHTML = (mainhandench > 0) ? MELEE_ENCHANTS[gear.mainhand.enchant].desc: "No Enchant";
    document.getElementById("mainhandattach").href = (mainhandattach > 1) ? "https://tbc.wowhead.com/item="+ mainhandattach : "";
    document.getElementById("mainhandattach").innerHTML = (mainhandattach > 1) ? ATTACHMENTS[gear.mainhand.attachment].name: "No Attachment";
    
    document.getElementById("offhandslot").removeAttribute("class");
    if(offhanditem == 0){
        document.getElementById("offhandslot").href = "#";
        document.getElementById("offhandslot").innerHTML = "Off Hand";
        document.getElementById("offhandench").href = "#"; 
        document.getElementById("offhandench").innerHTML = "No Enchant";
        document.getElementById("offhandattach").href = "#"; 
        document.getElementById("offhandattach").innerHTML = "No Attachment";
        let offhandicon = "images/OffHand.jpg";
        document.getElementById("offhandicon").src = offhandicon;
        document.getElementsByClassName("itemsocket")[15].style.display = "none";
        document.getElementsByClassName("itemsocket")[16].style.display = "none";
        document.getElementsByClassName("itemsocket")[17].style.display = "none";
        document.getElementById("offhandslot").classList.add("common-text");
    }
    // offhand
    if(offhanditem !== 0){
        textColorDisplay('offhand',MELEE_WEAPONS);

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
        let offhanddata = offhanditem + offhandencheffect + offhandgemlist;
        let offhandattach = gear.offhand.attachment || 0;

        document.getElementById("offhandslot").href = "https://tbc.wowhead.com/item="+ offhanddata;
        document.getElementById("offhandslot").innerHTML = MELEE_WEAPONS[gear.offhand.id].name;
        document.getElementById("offhandench").href = (offhandench > 0) ? "https://tbc.wowhead.com/spell="+ offhandench : ""; 
        document.getElementById("offhandench").innerHTML = (offhandench > 0) ? MELEE_ENCHANTS[gear.offhand.enchant].desc: "No Enchant";
        document.getElementById("offhandattach").href = (offhandattach > 1) ? "https://tbc.wowhead.com/item="+ offhandattach : "";
        document.getElementById("offhandattach").innerHTML = (offhandattach > 1) ? ATTACHMENTS[gear.offhand.attachment].name: "No Attachment";

    }

    // ranged
    textColorDisplay('range',RANGED_WEAPONS);

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
    let rangedata = rangeitem + rangeencheffect + rangegemlist;

    document.getElementById("rangeslot").href = "https://tbc.wowhead.com/item="+ rangedata;
    document.getElementById("rangeslot").innerHTML = RANGED_WEAPONS[gear.range.id].name;
    document.getElementById("rangeench").href = (rangeench > 0) ? "https://tbc.wowhead.com/spell="+ rangeench : "";
    document.getElementById("rangeench").innerHTML = (rangeench > 0) ? RANGE_ENCHANTS[gear.range.enchant].desc: "No Enchant";
    
    // hand
    textColorDisplay('hand',HANDS);

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
    let handpcslist = "&pcs="+headitem+":"+shoulderitem+":"+chestitem+":"+wristitem+":"+handitem+":"+legitem+":"+waistitem+":"+feetitem;
    let handdata = handitem + handencheffect + handgemlist+ handpcslist;

    document.getElementById("handslot").href = "https://tbc.wowhead.com/item="+ handdata;
    document.getElementById("handslot").innerHTML = HANDS[gear.hand.id].name;
    document.getElementById("handench").href = (handench > 0) ? "https://tbc.wowhead.com/spell="+ handench : "";
    document.getElementById("handench").innerHTML = (handench > 0) ? HAND_ENCHANTS[gear.hand.enchant].desc: "No Enchant";
    
    // waist
    textColorDisplay('waist',WAISTS);

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
    let waistpcslist = "&pcs="+headitem+":"+shoulderitem+":"+chestitem+":"+wristitem+":"+handitem+":"+legitem+":"+waistitem+":"+feetitem;
    let waistdata = waistitem + waistgemlist + waistpcslist;

    document.getElementById("waistslot").href = "https://tbc.wowhead.com/item="+ waistdata;
    document.getElementById("waistslot").innerHTML = WAISTS[gear.waist.id].name;

    // leg
    textColorDisplay('leg',LEGS);

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
    let legpcslist = "&pcs="+headitem+":"+shoulderitem+":"+chestitem+":"+wristitem+":"+handitem+":"+legitem+":"+waistitem+":"+feetitem;
    let legdata = legitem + legencheffect + leggemlist+ legpcslist;

    document.getElementById("legslot").href = "https://tbc.wowhead.com/item="+ legdata;
    document.getElementById("legslot").innerHTML = LEGS[gear.leg.id].name;
    document.getElementById("legench").href = (legench > 0) ? "https://tbc.wowhead.com/spell="+ legench : "";
    document.getElementById("legench").innerHTML = (legench > 0) ? LEG_ENCHANTS[gear.leg.enchant].desc: "No Enchant";
    
    // feet
    textColorDisplay('feet',FEET);
    
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
    let feetpcslist = "&pcs="+headitem+":"+shoulderitem+":"+chestitem+":"+wristitem+":"+handitem+":"+legitem+":"+waistitem+":"+feetitem;
    let feetdata = feetitem + feetencheffect + feetgemlist+ feetpcslist;

    document.getElementById("feetslot").href = "https://tbc.wowhead.com/item="+ feetdata;
    document.getElementById("feetslot").innerHTML = FEET[gear.feet.id].name;
    document.getElementById("feetench").href = (feetench > 0) ? "https://tbc.wowhead.com/spell="+ feetench : "";
    document.getElementById("feetench").innerHTML = (feetench > 0) ? FEET_ENCHANTS[gear.feet.enchant].desc: "No Enchant";

    // ring1
    textColorDisplay('ring1',RINGS);

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
    let ring1data = ring1item + ring1encheffect + ring1gemlist+ ring1pcslist;

    document.getElementById("ring1slot").href = "https://tbc.wowhead.com/item="+ ring1data;
    document.getElementById("ring1slot").innerHTML = RINGS[gear.ring1.id].name;
    document.getElementById("ring1ench").href = (ring1ench > 0) ? "https://tbc.wowhead.com/spell="+ ring1ench : "";
    document.getElementById("ring1ench").innerHTML = (ring1ench > 0) ? RING_ENCHANTS[gear.ring1.enchant].desc: "No Enchant";
    // ring2
    textColorDisplay('ring2',RINGS);

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
    let ring2data = ring2item + ring2encheffect + ring2gemlist+ ring2pcslist;

    document.getElementById("ring2slot").href = "https://tbc.wowhead.com/item="+ ring2data;
    document.getElementById("ring2slot").innerHTML = RINGS[gear.ring2.id].name;
    document.getElementById("ring2ench").href = (ring2ench > 0) ? "https://tbc.wowhead.com/spell="+ ring2ench : "";
    document.getElementById("ring2ench").innerHTML = (ring2ench > 0) ? RING_ENCHANTS[gear.ring2.enchant].desc: "No Enchant";

    // trinket1
    textColorDisplay('trinket1',TRINKETS);

    let trinket1icon = "https://wow.zamimg.com/images/wow/icons/large/"+TRINKETS[gear.trinket1.id].icon+".jpg";
    document.getElementById("trinket1icon").src = trinket1icon;
    document.getElementById("trinket1slot").href = "https://tbc.wowhead.com/item="+ trink1item;
    document.getElementById("trinket1slot").innerHTML = TRINKETS[gear.trinket1.id].name;

    // trinket2
    textColorDisplay('trinket2',TRINKETS);

    let trinket2icon = "https://wow.zamimg.com/images/wow/icons/large/"+TRINKETS[gear.trinket2.id].icon+".jpg";
    document.getElementById("trinket2icon").src = trinket2icon;
    document.getElementById("trinket2slot").href = "https://tbc.wowhead.com/item="+ trink2item;
    document.getElementById("trinket2slot").innerHTML = TRINKETS[gear.trinket2.id].name;
    
    // ammo
    textColorDisplay('ammo',AMMOS);
    
    let ammoicon = "https://wow.zamimg.com/images/wow/icons/large/"+AMMOS[gear.ammo.id].icon+".jpg";
    document.getElementById("ammoicon").src = ammoicon;
    document.getElementById("ammoslot").href = "https://tbc.wowhead.com/item="+ ammoitem;
    document.getElementById("ammoslot").innerHTML = AMMOS[gear.ammo.id].name;

}