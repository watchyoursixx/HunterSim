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
