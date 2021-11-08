var targetData = (function() {

  const CUSTOMER_TARGET_ID = 0;

 const Target_Types = Object.freeze({
      HUMANOID: 'Humanoid',
      DEMON: "Demon",
      BEAST: "Beast",
      DRAGONKIN: "Dragonkin",
      ELEMENTAL: "Elemental",
      GIANT: "Giant",
      MECHANICAL: "Mechanical",
      UNDEAD: "Undead",
      UNKNOWN: "Unknown",
      OTHER: "Other"
  });

  const TARGETS = {
      0: {
        name: 'Custom',
        armor: 7700,
        phase: 1,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 73
      },
      18831: {
        name: 'High King Maulgar',
        armor: 7700,
        phase: 1,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 73
      },
      19044: {
        name: 'Gruul the Dragonkiller',
        armor: 7700,
        phase: 1,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 73
      },
      17257: {
        name: 'Magtheridon',
        armor: 7700,
        phase: 1,
        resilience: 0,
        type: Target_Types.DEMON,
        level: 73
      },
      21216: {
        name: 'Hydross the Unstable',
        armor: 7700,
        phase: 2,
        resilience: 0,
        type: Target_Types.ELEMENTAL,
        level: 73
      },
      21217: {
        name: 'The Lurker Below',
        armor: 7700,
        phase: 2,
        resilience: 0,
        type: Target_Types.UNKNOWN,
        level: 73
      },
      21215: {
        name: 'Leotheras the Blind',
        armor: 7700,
        phase: 2,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 73
      },
      21214: {
        name: 'Fathom-Lord Karathress',
        armor: 6200,
        phase: 2,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 73
      },
      21213: {
        name: 'Morogrim Tidewalker',
        armor: 7700,
        phase: 2,
        resilience: 0,
        type: Target_Types.GIANT,
        level: 73
      },
      21212: {
        name: 'Lady Vashj',
        armor: 6200,
        phase: 2,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 73
      },
      19516: {
        name: 'Void Reaver',
        armor: 8800,
        phase: 2,
        resilience: 0,
        type: Target_Types.MECHANICAL,
        level: 73
      },
      18805: {
        name: 'High Astromancer Solarian',
        armor: 6200,
        phase: 2,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 73
      },
      19514: {
        name: 'Al\'ar',
        armor: 7700,
        phase: 2,
        resilience: 0,
        type: Target_Types.ELEMENTAL,
        level: 73
      },
      19622: {
        name: 'Kael\'thas Sunstrider',
        armor: 6200,
        phase: 2,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 73
      },
      17767: {
        name: 'Rage Winterchill',
        armor: 6200,
        phase: 3,
        resilience: 0,
        type: Target_Types.UDEAD,
        level: 73
      },
      17808: {
        name: 'Anetheron',
        armor: 6200,
        phase: 3,
        resilience: 0,
        type: Target_Types.DEMON,
        level: 73
      },
      17888: {
        name: 'Kaz\'rogal',
        armor: 6200,
        phase: 3,
        resilience: 0,
        type: Target_Types.DEMON,
        level: 73
      },
      17842: {
        name: 'Azgalor',
        armor: 6200,
        phase: 3,
        resilience: 0,
        type: Target_Types.DEMON,
        level: 73
      },
      17968: {
        name: 'Archimonde',
        armor: 6200,
        phase: 3,
        resilience: 0,
        type: Target_Types.DEMON,
        level: 73
      },
      22887: {
        name: 'High Warlord Naj\'entus',
        armor: 7700,
        phase: 3,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 73
      },
      22898: {
        name: 'Supremus',
        armor: 7700,
        phase: 3,
        resilience: 0,
        type: Target_Types.DEMON,
        level: 73
      },
      22841: {
        name: 'Shade of Akama',
        armor: 7700,
        phase: 3,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 73
      },
      22871: {
        name: 'Teron Gorefiend',
        armor: 6200,
        phase: 3,
        resilience: 0,
        type: Target_Types.UNDEAD,
        level: 73
      },
      22948: {
        name: 'Gurtogg Bloodboil',
        armor: 7700,
        phase: 3,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 73
      },
      23418: {
        name: 'Essence of Suffering',
        armor: 0,
        phase: 3,
        resilience: 0,
        type: Target_Types.UNKNOWN,
        level: 73
      },
      23419: {
        name: 'Essence of Desire',
        armor: 7700,
        phase: 3,
        resilience: 0,
        type: Target_Types.UNKNOWN,
        level: 73
      },
      23420: {
        name: 'Essence of Anger',
        armor: 7700,
        phase: 3,
        resilience: 0,
        type: Target_Types.UNKNOWN,
        level: 73
      },
      22947: {
        name: 'Mother Shahraz',
        armor: 6200,
        phase: 3,
        resilience: 0,
        type: Target_Types.DEMON,
        level: 73
      },
      22949: {
        name: 'Gathios the Shatterer',
        armor: 6200,
        phase: 3,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 73
      },
      22917: {
        name: 'Illidan Stormrage',
        armor: 7700,
        phase: 3,
        resilience: 0,
        type: Target_Types.DEMON,
        level: 73
      },
      23576: {
        name: 'Nalorakk',
        armor: 7700,
        phase: 4,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 73
      },
      23574: {
        name: 'Akil\'zon',
        armor: 7700,
        phase: 4,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 73
      },
      23578: {
        name: 'Jan\'alai',
        armor: 7700,
        phase: 4,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 73
      },
      23577: {
        name: 'Halazzi',
        armor: 7700,
        phase: 4,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 73
      },
      24239: {
        name: 'Hex Lord Malacrass',
        armor: 6200,
        phase: 4,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 73
      },
      23863: {
        name: 'Zul\'jin',
        armor: 7700,
        phase: 4,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 73
      },
      24850: {
        name: 'Kalecgos',
        armor: 6200,
        phase: 5,
        resilience: 0,
        type: Target_Types.DRAGONKIN,
        level: 73
      },
      24892: {
        name: 'Sathrovarr the Corruptor',
        armor: 6200,
        phase: 5,
        resilience: 0,
        type: Target_Types.DEMON,
        level: 73
      },
      24882: {
        name: 'Brutallus',
        armor: 7700,
        phase: 5,
        resilience: 0,
        type: Target_Types.DEMON,
        level: 73
      },
      25038: {
        name: 'Felmyst',
        armor: 6200,
        phase: 5,
        resilience: 0,
        type: Target_Types.DEMON,
        level: 73
      },
      25166: {
        name: 'Grand Warlock Alythess',
        armor: 6200,
        phase: 5,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 73
      },
      25165: {
        name: 'Lady Sacrolash',
        armor: 6200,
        phase: 5,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 73
      },
      25741: {
        name: 'M\'uru',
        armor: 7700,
        phase: 5,
        resilience: 0,
        type: Target_Types.UNKNOWN,
        level: 73
      },
      25840: {
        name: 'Entropius',
        armor: 7700,
        phase: 5,
        resilience: 0,
        type: Target_Types.DEMON,
        level: 73
      },
      25315: {
        name: 'Kil\'jaeden',
        armor: 6200,
        phase: 5,
        resilience: 0,
        type: Target_Types.DEMON,
        level: 73
      }
  }

  var target = undefined;
  
  function getTarget(targetId) {
    var npc = TARGETS[targetId];
    if(npc === undefined){
      throw Error(`Invalid targetId: "{targetId}"`);
    }
    return Object(npc);
  }

  function selectTarget(targetId, type, armor, level, resilience) {   
    if(targetId === CUSTOMER_TARGET_ID){
      target = Object({
        type: type,
        armor: armor,
        resilience: resilience,
        level: level
      });
    }
    else{
      target = getTarget(targetId);
    }    
    return target;
  }

  function getCurrentTarget() {
    return target;
  }

  function getNameKeyTargetPairs(){
    var nameKeyPair = [];

    for (const [key, value] of Object.entries(TARGETS)) {
      nameKeyPair.push({id: key, name: value.name});
    } 

    return nameKeyPair.sort((a,b) => {
      //Place custom at top of list
      if(b.name.toLowerCase() === "custom"){
        return 1;
      }
      if(a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if(a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }

  return {
    getCurrentTarget: getCurrentTarget,
    selectTarget: selectTarget,
    getNameKeyTargetPairs: getNameKeyTargetPairs,
    Target_Types: Target_Types
  }

})();


//Example usage.
// var target = targetData.selectTarget(0,targetData.Target_Types.BEAST, 123, 10, 400); //Creates a customer target if 0 is passed as the targetId, returns custom target object
// var target = targetData.getCurrentTarget(); //Gets the selected target, if one is set, otherwise empty object
// var target = targetData.selectTarget(25315); //Select target and returns the obejct. Can then refernce armor/level/type like "target.armor;"
// targetData.getNameKeyTargetPairs(); //Could be used to populate a ddl for user selection