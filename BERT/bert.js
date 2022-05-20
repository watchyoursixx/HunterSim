
var base_weapon_speed = 2.9
var melee_weapon_speed = 3.4
var weave_time = .4
var haste = 1.15
var talents = {
    imp_arc_shot: 0
}
var automulti_cast_time = .5 / haste;
var steady_cast_time = 1.5 / haste;
var cast_sequence = ["auto", "steady", "multi", "auto", "steady", "auto", "steady", "arcane", "auto", "steady", "auto", "steady", "auto", "steady"]
var sixx_sequence = ['auto', 'steady', 'raptor', 'multi', 'auto', 'steady', 'auto', 'steady', 'melee', 'arcane', 'auto', 'steady', 'auto', 'steady']
let range_speed = base_weapon_speed / haste;
let melee_speed = melee_weapon_speed / haste;

var actions = {

    "auto":   { dmg: 1400, cast: automulti_cast_time, activecd: 0, cd: (base_weapon_speed - .5) / haste, depends_on: "None"},
    "steady": { dmg: 1500, cast: steady_cast_time,  activecd: 0, cd:  0, depends_on: "GCD"},
    "multi":  { dmg: 1600, cast: automulti_cast_time,  activecd: 0, cd:   10, depends_on: "GCD"},
    "arcane": { dmg: 800,  cast: 0, activecd: 0, cd: 6, depends_on: "GCD"},
    "melee":  { dmg: 1200, cast: weave_time, activecd: 0, cd: melee_weapon_speed, depends_on: "None"},
    "raptor": { dmg: 2000, cast: weave_time, activecd: 0, cd: 6, depends_on: "melee"},
    "GCD":    { dmg: 0,    cast: 0, activecd: 0, cd: 1.5, depends_on: "None"},

}

function spell_cds(spell,step) {
    actions.auto.activecd = (spell === 'auto') ? (range_speed - actions.auto.cast) : Math.max(actions.auto.activecd - step, 0);
    actions.steady.activecd = (spell === 'steady') ? (1.5 - actions.steady.cast) : Math.max(actions.steady.activecd - step, 0);
    actions.multi.activecd = (spell === 'multi') ? 10 : Math.max(actions.multi.activecd - step, 0);
    actions.arcane.activecd = (spell === 'arcane') ? (6 - talents.imp_arc_shot) : Math.max(actions.arcane.activecd - step, 0);
	if(spell === 'raptor'){
		actions.melee.activecd = melee_weapon_speed;
		actions.raptor.activecd = 6;
	}
	else if(spell === 'melee'){
		actions.melee.activecd = melee_weapon_speed;
		actions.raptor.activecd = Math.max(actions.melee.activecd, actions.raptor.activecd);
	}
	else{
		actions.melee.activecd = Math.max(actions.melee.activecd - step, 0);
		actions.raptor.activecd = Math.max(actions.raptor.activecd - step, 0);
	}

    actions.GCD.activecd = Math.max(actions.GCD.activecd - step, 0);
    //console.log(spell + " " + step)
    //console.log(actions.auto);
    //console.log(actions.steady);
    //console.log("*******************")
}

function RotationCalc(array){
    let rotation = {
        time: 0,
        damage: 0,
        cast_log: [],
        first_cast: {},
        delay: 0
    }

    solveRotation(array,rotation);
    rotation.delay = delay_to_repeat(rotation); 
    rotation.time = rotation.time + rotation.delay;
    let dmgresult = dps(rotation);
    console.log("Input Array");
    console.log(array);
    console.log("Total Time => "+rotation.time);
    console.log("Delay to repeat => "+rotation.delay);
    console.log("DPS => " + dmgresult)
    console.log("***************");
}

function dps(rotation) {
    return rotation.damage / (rotation.time)
}

function solveRotation(cast_array,rotation) {
    let i = 0;
    let length = cast_array.length;
    let spellcast = '';
    //let newrotation = {};
    for (i=0; i < length; i++) {
        spellcast = cast_array[i];
        stepRotation(spellcast, rotation);
        //newrotation = JSON.parse(JSON.stringify(rotation));
        //console.log(newrotation);
    }
}

function stepRotation(spellcast, rotation) {
    rotation.damage += actions[spellcast].dmg

    let step = actions[spellcast].activecd;
    if (actions[spellcast].depends_on != "None") {
        step = Math.max(step, actions[actions[spellcast].depends_on].activecd)
    }

    rotation.time += step
    rotation.cast_log.push([rotation.time, spellcast + "_started"])
    spell_cds('', step)

    if (rotation.first_cast[spellcast] == null) {
        rotation.first_cast[spellcast] = rotation.time
    }
    if (actions[spellcast].depends_on != "None") {
        if (rotation.first_cast[actions[spellcast].depends_on] == null) {
            rotation.first_cast[actions[spellcast].depends_on] = rotation.time
        }
        actions[actions[spellcast].depends_on].activecd = actions[actions[spellcast].depends_on].cd
    }
    rotation.time += actions[spellcast].cast
    let stepend = actions[spellcast].cast
    rotation.cast_log.push([rotation.time, spellcast + "_finished"])
    spell_cds(spellcast,stepend)

}

function delay_to_repeat(rotation) {
       let delay = 0;
       let delay_obj = {}; 
       
       for (spellcast in rotation.first_cast) {
            delay_obj[spellcast] = Math.max(actions[spellcast].activecd - rotation.first_cast[spellcast], 0)
            delay = Math.max(delay, delay_obj[spellcast])
       }

    return delay;
}
