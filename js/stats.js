var spreaddata = {
  labels: [
    "0",
    "1",
    "2",
    "3",
    "4"
  ],
  datasets: [{
      data: [
        2820,
        2830,
        2840,
        2850,
        2870
      ],
      backgroundColor: 'rgba(170,	211, 114, 0.6)',
      borderColor: 'rgb(170,	211, 114)',
      borderWidth: 1,
      barPercentage: 1,
      categoryPercentage: 1,
  }]
};

function buildData(spread){

  data = [];
  results = {};
  spreaddata = {
    labels: [],
    datasets: []
  };

  spread.forEach(function (x) { results[x] = (results[x] || 0) + 1; });
  Object.keys(results).forEach(key => data.push({x:key,y:results[key]}));

  for(let i in spread) {
    spreaddata.labels.push(results[i]);
  }

  spreaddata.datasets.push({
    data: data,
    backgroundColor: 'rgba(170,	211, 114, 0.6)',
    borderColor: 'rgb(170,	211, 114)',
    borderWidth: 1,
    barPercentage: 1,
    categoryPercentage: 1,
  });
}

function createHistogram(){
  histogram.destroy();
  ctx = document.getElementById('histogram').getContext('2d');
  histogram = new Chart(ctx, {
    type: 'bar',
    data: spreaddata,
    options: {
        scales: {
          x: {
            type: 'linear',
            offset: false,
            color: 'rgb(170,	211, 114)',
            grid: {
              offset: false
            },
            ticks: {
              stepSize: 10
            },
            title: {
              display:true,
              text: 'DPS',
              color: 'rgb(170,	211, 114)'
            }
          },
          y: {
            title: {
              display:true,
              text: 'Frequency',
              color: 'rgb(170,	211, 114)'
            }
          //beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              //label: (item, obj) => ` ${obj.labels[item.index]} DPS: ${obj.datasets[0].data[item.index]}`,
            }
          }
        }
    }
  });
}

var ctx = document.getElementById('histogram').getContext('2d');
var histogram = new Chart(ctx, {
  type: 'bar',
  data: spreaddata,
  options: {
      scales: {
        x: {
          type: 'linear',
          offset: false,
          color: 'rgb(170,	211, 114)',
          grid: {
            offset: false
          },
          ticks: {
            stepSize: 50
          },
          title: {
            display:true,
            text: 'DPS',
            color: 'rgb(170,	211, 114)'
          }
        },
        y: {
          title: {
            display:true,
            text: 'Frequency',
            color: 'rgb(170,	211, 114)'
          },
        //beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            //label: (item, obj) => ` ${obj.labels[item.index]} DPS: ${obj.datasets[0].data[item.index]}`,
          }
        }
      }
  }
});

function damageResults(){
  simresults = {
      steady: {},
      auto: {},
      multi: {},
      arcane: {},
      attack: {},
      kc: {},
      primary: {}
  };
  // steady
  simresults.steady.casts = (steadycount / iterations);
  simresults.steady.miss = (spellresult.steadyshot.Miss / steadycount) * 100;
  simresults.steady.crit = (spellresult.steadyshot.Crit / steadycount) * 100;
  simresults.steady.hit = (spellresult.steadyshot.Hit / steadycount) * 100;
  simresults.steady.avg = (steadydmg / steadycount);
  simresults.steady.dps = (steadydmg / sumduration);
  // auto
  simresults.auto.casts = (autocount / iterations);
  simresults.auto.miss = (spellresult.autoshot.Miss / autocount) * 100;
  simresults.auto.crit = (spellresult.autoshot.Crit / autocount) * 100;
  simresults.auto.hit = (spellresult.autoshot.Hit / autocount) * 100;
  simresults.auto.avg = (autodmg / autocount);
  simresults.auto.dps = (autodmg / sumduration);
  // multi
  if(SPELLS.multishot.enable){
      simresults.multi.casts = (multicount / iterations);
      simresults.multi.miss = (spellresult.multishot.Miss / multicount) * 100;
      simresults.multi.crit = (spellresult.multishot.Crit / multicount) * 100;
      simresults.multi.hit = (spellresult.multishot.Hit / multicount) * 100;
      simresults.multi.avg = (multidmg / multicount);
      simresults.multi.dps = (multidmg / sumduration);
  }
  // arcane
  if(SPELLS.arcaneshot.enable){
      simresults.arcane.casts = (arcanecount / iterations);
      simresults.arcane.miss = (spellresult.arcaneshot.Miss / arcanecount) * 100;
      simresults.arcane.crit = (spellresult.arcaneshot.Crit / arcanecount) * 100;
      simresults.arcane.hit = (spellresult.arcaneshot.Hit / arcanecount) * 100;
      simresults.arcane.avg = (arcanedmg / arcanecount);
      simresults.arcane.dps = (arcanedmg / sumduration);
  }
  // pet auto
  simresults.attack.casts = (petautocount / iterations);
  simresults.attack.miss = (spellresult.petattack.Miss / petautocount) * 100;
  simresults.attack.crit = (spellresult.petattack.Crit / petautocount) * 100;
  simresults.attack.hit = (spellresult.petattack.Hit / petautocount) * 100;
  simresults.attack.glance = (spellresult.petattack.Glance / petautocount) * 100;
  simresults.attack.dodge = (spellresult.petattack.Dodge / petautocount) * 100;
  simresults.attack.avg = (petdmg.attackdmg / petautocount);
  simresults.attack.dps = (petdmg.attackdmg / sumduration);
  // pet kill command
  simresults.kc.casts = (petkccount / iterations);
  simresults.kc.miss = (spellresult.killcommand.Miss / petkccount) * 100;
  simresults.kc.crit = (spellresult.killcommand.Crit / petkccount) * 100;
  simresults.kc.hit = (spellresult.killcommand.Hit / petkccount) * 100;
  simresults.kc.dodge = (spellresult.killcommand.Dodge / petkccount) * 100;
  simresults.kc.avg = (petdmg.kcdmg / petkccount);
  simresults.kc.dps = (petdmg.kcdmg / sumduration);
  // pet primary
  simresults.primary.casts = (petprimarycount / iterations);
  simresults.primary.miss = (spellresult.primary.Miss / petprimarycount) * 100;
  simresults.primary.crit = (spellresult.primary.Crit / petprimarycount) * 100;
  simresults.primary.hit = (spellresult.primary.Hit / petprimarycount) * 100;
  simresults.primary.dodge = (spellresult.primary.Dodge / petprimarycount) * 100;
  simresults.primary.partial = (spellresult.primary.Partial / petprimarycount) * 100;
  simresults.primary.avg = (petdmg.primarydmg / petprimarycount);
  simresults.primary.dps = (petdmg.primarydmg / sumduration);
  
  let newsimresults = Object.keys(simresults).map(key => ({action: key, results: simresults[key]}));
  let sortedsimresults = newsimresults.sort(compare);
  buildTable(sortedsimresults);

  console.log("pet dmg => "+sumpetdmg / iterations);
  console.log("total damage: " + sumdmg/iterations);
  console.log("duration: " + (Math.round(sumduration/iterations * 100) / 100));
}
var actions = {
auto: "Auto Shot",
arcane: "Arcane Shot",
steady: "Steady Shot",
  multi: "Multi Shot",
  attack: "Attack (Pet)",
  kc: "Kill Command (Pet)",
  primary: "Primary (Pet)",
};
function buildTable(results){

  let act = '';
  let tbody = document.getElementById('tbody');
  tbody.innerHTML = '';
  for (var i = 0; i < results.length; i++) {
    let tr = "<tr>";
    if (results[i].results.dps > 0) {
      act = results[i].action; 
      tr += "<td style='text-align:right'>" + actions[act] + "</td>" + 
      "<td style='text-align:right'>" + (results[i].results.dps || 0).toFixed(2) + "</td>" + 
      "<td style='text-align:right'>" + (results[i].results.casts || 0).toFixed(2) + "</td>" +
      "<td style='text-align:right'>" + (results[i].results.avg || 0).toFixed(2) + "</td>" +
      "<td style='text-align:right'>" + (results[i].results.hit || 0).toFixed(2) + "</td>" +
      "<td style='text-align:right'>" + (results[i].results.crit || 0).toFixed(2) + "</td>" +
      "<td style='text-align:right'>" + (results[i].results.miss || 0).toFixed(2) + "</td>" +
      "<td style='text-align:right'>" + (results[i].results.dodge || 0).toFixed(2) + "</td>" +
      "<td style='text-align:right'>" + (results[i].results.glance || 0).toFixed(2) + "</td>" +
      "<td style='text-align:right'>" + (results[i].results.partial || 0).toFixed(2) + "</td>" +
      "</tr>";
      tbody.innerHTML += tr;
    }
  }
}

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const dpsA = a.results.dps;
  const dpsB = b.results.dps;

  let comparison = 0;
  if (dpsA > dpsB) {
    comparison = -1;
  } else if (dpsA < dpsB) {
    comparison = 1;
  }
  return comparison;
}

/** Resets counts of spells used for stats */
function resultCountInitialize() {
  // player
  for (spellname in spellresult){
      spellresult[spellname].Hit = 0;
      spellresult[spellname].Crit = 0;
      spellresult[spellname].Miss = 0;
      
      if (spellname === 'primary') {
          spellresult[spellname].Partial = 0;
      }
      if (spellname === 'primary' || 'petattack' || 'killcommand') {
          spellresult[spellname].Dodge = 0;
      }
      if (spellname === 'petattack') {
          spellresult[spellname].Glance = 0;
      }

  }
  return;
}

function spellResultSum(result, spellname) {

  if (result === RESULT.HIT) {
      spellresult[spellname].Hit++;
  }
  else if (result === RESULT.GLANCE) {
      spellresult[spellname].Glance++;
  }
  else if (result === RESULT.CRIT) {
      spellresult[spellname].Crit++;
  }
  else if (result === RESULT.MISS) {
      spellresult[spellname].Miss++;
  }
  else if (result === RESULT.DODGE) {
      spellresult[spellname].Dodge++;
  }
  else if (result === RESULT.PARTIAL) {
      spellresult[spellname].Partial++;
  }
  //console.log(result);
  //console.log(spellname);
  //console.log(spellresult);
  return;
}