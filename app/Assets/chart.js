var ctx = document.getElementById('myChart').getContext('2d');



var myChart = new Chart(ctx, {
type: 'bar',
data: {
labels: [1],
datasets: [{
    label: "AI's prediction",
    data: [0],
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1.7
}]},
options: {
  responsive: false,
  scales: {yAxes: [
  {
              ticks:
                  {beginAtZero: true,
                    suggestedMin: 0,
                    suggestedMax: 1,
                    callback: function(value, index, values) {
                          return value + "%";
                      }
                    }

}]},maintainAspectRatio: false}});

  function addData(chart, label, data) {
      chart.data.labels.push(label);
      chart.data.datasets.forEach((dataset) => {
          dataset.data.push(data);
      });
      chart.update();
  }
  function removeData(chart) {
      chart.data.labels.pop();
      chart.data.datasets.forEach((dataset) => {
          dataset.data.pop();
      });
      chart.update();
  }

  function SetData(chart, index, value){
    chart.data.datasets.forEach((dataset) => {
        dataset.data[index] = value;
    });
    chart.update();
  }

  function SetAllData(chart , data){
    let labels_ = []
    chart.data.datasets.forEach((dataset) => {
        dataset.data = data;
        for (let i = 0; i < dataset.data.length; i++){
        labels_.push(labels_.length + 1);
        }
    });
    chart.data.labels = labels_;
    chart.update();
  }
