var activeslot = '';

var gearmodal = document.getElementById("gearmodal");
// Get the <span> element that closes the modal
var headdiv = document.getElementById("gearhead");
var gearspan = document.getElementsByClassName("close")[2];
// When the user clicks on <span> (x), close the modal
gearspan.onclick = function() {
    gearmodal.style.display = "none";
}

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

function selectItem(itemid) {
    switch (activeslot){
        case 'head':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: 0 };
        break;
        case 'neck':            
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [] };
        break;
        case 'shoulder':            
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: 0 };
        break;
        case 'back':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: 0 };
        break;
        case 'chest':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: 0 };
        break;
        case 'wrist':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: 0 };
        break;
        case 'mainhand':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: 0 };
            checkWeaponType();
            if(offhandDisabled) {
                delete gear.offhand;
            }
        break;
        case 'offhand':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: 0 };
        break;
        case 'range':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: 0 };
        break;
        case 'hand':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: 0 };
        break;
        case 'waist':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: []};
        break;
        case 'leg':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: 0 };
        break;
        case 'feet':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: 0 };
        break;
        case 'ring1':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: 0 };
        break;
        case 'ring2':
            console.log("you selected "+ itemid);
            gear[activeslot] = { id: parseInt(itemid), gems: [], enchant: 0 };
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
    selectedOptionsResults();
}
function selectFirstGem(itemid){
    console.log("you selected "+ itemid);
    gear[activeslot].gems[0] = parseInt(itemid);
    gearSlotsDisplay();
    selectedOptionsResults();
}
function selectSecondGem(itemid){
    console.log("you selected "+ itemid);
    gear[activeslot].gems[1] = parseInt(itemid);
    gearSlotsDisplay();
    selectedOptionsResults();
}
function selectThirdGem(itemid){
    console.log("you selected "+ itemid);
    gear[activeslot].gems[2] = parseInt(itemid);
    gearSlotsDisplay();
    selectedOptionsResults();
}
function selectEnchant(itemid){
    console.log("you selected "+ itemid);
    gear[activeslot].enchant = parseInt(itemid);
    gearSlotsDisplay();
    selectedOptionsResults();
}

function generateGearOptionsList(array){

    let listlength = Object.keys(array).length;
    let list = Object.keys(array).map(Number);
    let index = 0;
    let selectOptions = '';
    let i = 0;

    for (i=0; i < listlength; i++) {
        index = list[i];
        selectOptions += "<option value= "+list[i]+" >" + array[index].name + "</option>";
    }

    return selectOptions;
}
function itemSelectorDisplay(slotarray){
    if (activeslot === 'offhand' && offhandDisabled) {
        return;
    }
    let itemselectOptions = generateGearOptionsList(slotarray);
    document.getElementById("itemselect").innerHTML = itemselectOptions;
    document.getElementById("itemselect").value = gear[activeslot].id;
}
function enchSelectorDisplay(slotarray){
    if (activeslot === 'offhand' && offhandDisabled) {
        return;
    }
    let enchselectOptions = generateGearOptionsList(slotarray);
    document.getElementById("enchseldiv").style.display = "block";
    document.getElementById("enchselect").innerHTML = enchselectOptions;
    document.getElementById("enchselect").value = gear[activeslot].enchant;
}
function gemSelectorDisplay(slotarray){
    if (activeslot === 'offhand' && offhandDisabled) {
        return;
    }
    let gem1 = 0;
    let gem2 = 0;
    let gem3 = 0;
    let gemselectOptions = '';
    let metaselectOptions = '';
    Object.filter = (obj, predicate) => 
    Object.fromEntries(Object.entries(obj).filter(predicate));

    let skt = (slotarray[gear[activeslot].id].hasOwnProperty('sockets')) ? slotarray[gear[activeslot].id].sockets : [];
        if (skt.length > 0){
            gem1 = gear[activeslot].gems[0] || 0;
            gem2 = gear[activeslot].gems[1] || 0;
            gem3 = gear[activeslot].gems[2] || 0;

            if (activeslot === 'head') { 

                
                let META = Object.filter(GEMS, ([key, obj]) => obj.meta === 'Y');
                metaselectOptions = generateGearOptionsList(META);
            }
            let NO_META = Object.filter(GEMS, ([key, obj]) => obj.meta !== 'Y');
            gemselectOptions = generateGearOptionsList(NO_META);
            if(skt.length < 1){
                document.getElementById("gem1seldiv").style.display = "none"; 
            } else {
                document.getElementById("gem1seldiv").style.display = "block";
                if (skt[0] === 'Meta') {
                    document.getElementById("gem1select").innerHTML = metaselectOptions;
                } else {document.getElementById("gem1select").innerHTML = gemselectOptions; 
                }
                document.getElementById("gem1select").value = gem1;
                console.log(gem1);
            }
            if(skt.length < 2){
                document.getElementById("gem2seldiv").style.display = "none"; 
            } else {
                document.getElementById("gem2seldiv").style.display = "block";
                if (skt[1] === 'Meta') {
                    document.getElementById("gem2select").innerHTML = metaselectOptions;
                } else {document.getElementById("gem2select").innerHTML = gemselectOptions;
                }
                document.getElementById("gem2select").value = gem2;
            }
           if(skt.length < 3){
                document.getElementById("gem3seldiv").style.display = "none";
            } else {
                document.getElementById("gem3seldiv").style.display = "block";
                if (skt[2] === 'Meta') {
                    document.getElementById("gem3select").innerHTML = metaselectOptions;
                } else {document.getElementById("gem3select").innerHTML = gemselectOptions;
                }
                document.getElementById("gem3select").value = gem3;
            }
        } 
        else {
            document.getElementById("gem1seldiv").style.display = "none"; 
            document.getElementById("gem2seldiv").style.display = "none"; 
            document.getElementById("gem3seldiv").style.display = "none"; 
        }
}

function gearModalDisplay(slot){
    activeslot = slot;
    gearmodal.style.display = "block";

    console.log(slot);
    if (slot === 'head') {
        itemSelectorDisplay(HEADS);
        enchSelectorDisplay(HEAD_ENCHANTS);
        gemSelectorDisplay(HEADS);
    }
    else if (slot === 'neck') {
        itemSelectorDisplay(NECKS);
        gemSelectorDisplay(NECKS);
        document.getElementById("enchseldiv").style.display = "none";
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
    }
    if (slot === 'offhand') {
        itemSelectorDisplay(MELEE_WEAPONS);
        enchSelectorDisplay(MELEE_ENCHANTS);
        gemSelectorDisplay(MELEE_WEAPONS);
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
        document.getElementById("enchseldiv").style.display = "none";
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
        document.getElementById("enchseldiv").style.display = "none";
    }
    if (slot === 'trinket2') {
        itemSelectorDisplay(TRINKETS);
        gemSelectorDisplay(TRINKETS);
        document.getElementById("enchseldiv").style.display = "none";
    }
    if (slot === 'ammo') {        
        itemSelectorDisplay(AMMOS);
        gemSelectorDisplay(AMMOS);
        document.getElementById("enchseldiv").style.display = "none";
    }
}

function textColorDisplay(slot,array){
    let slotname = slot + 'slot';
    let color = array[gear[slot].id].quality;

    document.getElementById(slotname).removeAttribute("class");
    if(color === "Common"){
        document.getElementById(slotname).classList.add("common-text");
    } else if(color === "Uncommon") {
        document.getElementById(slotname).classList.add("uncommon-text");
    } else if(color === "Rare") {
        document.getElementById(slotname).classList.add("rare-text");
    } else if(color === "Epic") {
        document.getElementById(slotname).classList.add("epic-text");
    } else if(color === "Legendary") {
        document.getElementById(slotname).classList.add("legendary-text");
    } else { new Error("No color selected")}
}

function reduceGearArray(){
    let newbackArray = Object.keys(BACKS).map(key => ({id:key,Name:BACKS[key].name,DPS:'','Δ +/-':'',Location:BACKS[key].Location}));
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
    let headpcslist = "&pcs="+headitem+":"+shoulderitem+":"+chestitem+":"+wristitem+":"+handitem+":"+legitem+":"+waistitem+":"+feetitem;
    let headdata = headitem + headencheffect + headgemlist+ headpcslist;

    document.getElementById("headslot").href = "https://tbc.wowhead.com/item="+ headdata;
    document.getElementById("headslot").innerHTML = HEADS[gear.head.id].name;
    document.getElementById("headench").href = (headench > 0) ? "https://tbc.wowhead.com/spell="+ headench : "";
    document.getElementById("headench").innerHTML = (headench > 0) ? HEAD_ENCHANTS[gear.head.enchant].name: "No Enchant";
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
    document.getElementById("shoulderench").innerHTML = (shoulderench > 0) ? SHOULDER_ENCHANTS[gear.shoulder.enchant].name: "No Enchant";
    
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
    document.getElementById("backench").innerHTML = (backench > 0) ? BACK_ENCHANTS[gear.back.enchant].name: "No Enchant";
    
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
    document.getElementById("chestench").innerHTML = (chestench > 0) ? CHEST_ENCHANTS[gear.chest.enchant].name: "No Enchant";
    
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
    let wristpcslist = "&pcs="+headitem+":"+shoulderitem+":"+chestitem+":"+handitem+":"+legitem;
    let wristdata = wristitem + wristencheffect + wristgemlist+ wristpcslist;

    document.getElementById("wristslot").href = "https://tbc.wowhead.com/item="+ wristdata;
    document.getElementById("wristslot").innerHTML = WRISTS[gear.wrist.id].name;
    document.getElementById("wristench").href = (wristench > 0) ? "https://tbc.wowhead.com/spell="+ wristench:""; 
    document.getElementById("wristench").innerHTML = (wristench > 0) ? WRIST_ENCHANTS[gear.wrist.enchant].name: "No Enchant";
    
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
        document.getElementById("offhandslot").href = "https://tbc.wowhead.com/item="+ offhanddata;
        document.getElementById("offhandslot").innerHTML = MELEE_WEAPONS[gear.offhand.id].name;
        document.getElementById("offhandench").href = (offhandench > 0) ? "https://tbc.wowhead.com/spell="+ offhandench : ""; 
        document.getElementById("offhandench").innerHTML = (offhandench > 0) ? MELEE_ENCHANTS[gear.offhand.enchant].name: "No Enchant";
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
    document.getElementById("rangeench").innerHTML = (rangeench > 0) ? RANGE_ENCHANTS[gear.range.enchant].name: "No Enchant";
    
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
    document.getElementById("handench").innerHTML = (handench > 0) ? HAND_ENCHANTS[gear.hand.enchant].name: "No Enchant";
    
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
    document.getElementById("legench").innerHTML = (legench > 0) ? LEG_ENCHANTS[gear.leg.enchant].name: "No Enchant";
    
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
    document.getElementById("feetench").innerHTML = (feetench > 0) ? FEET_ENCHANTS[gear.feet.enchant].name: "No Enchant";

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
    document.getElementById("ring1ench").innerHTML = (ring1ench > 0) ? RING_ENCHANTS[gear.ring1.enchant].name: "No Enchant";
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
    document.getElementById("ring2ench").innerHTML = (ring2ench > 0) ? RING_ENCHANTS[gear.ring2.enchant].name: "No Enchant";

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