
//
// const LSTM = brain.recurrent.LSTM;
// const net = new LSTM();
//
//
// const mathProblems = ["hello s"];
//
// net.train(mathProblems, { log: true, errorThresh: 0.03 });


const net = new brain.NeuralNetwork();

let TrainingData = [];

//net.train(TrainingData,{ log: true});

function TestNN(){
  let inp = document.getElementById("NN-Input").value;
  inp = inp.split(",");
  inp.forEach((item,i) => {
    if (item == ""){
      inp.pop(i);
    }else {
    inp[i] = +item;
    }
  });

  SetAllData(myChart, net.run(inp));
}

function TrainNN(){
  document.getElementById("TrainButton").hidden = true;
  console.log('training')
  net.train(TrainingData,{ log: true});
  console.log('done')
  document.getElementById("TrainButton").hidden = false;
}


function AddTrainingData(){

  let inp = document.getElementById("NN-Add-Training-Data").value;
  let output = inp.split("=");
  inp = output[0];
  output = output[1];

  inp = inp.split(",");
  output = output.split(",");

  inp.forEach((item,i) => {
    if (item == ""){
      inp.pop(i);
    }else {
    inp[i] = +item;
    }
  });

  output.forEach((item,i) => {
    if (item == ""){
      output.pop(i);
    }else {
    output[i] = +item;
    }
  });

  TrainingData.push({input : inp, output : output});

  let entry = document.createElement('li');
  let RemoveButton = document.createElement("button");
  let Div_element = document.createElement("div");

  RemoveButton.className = "btn btn-outline-dark";
  RemoveButton.textContent = "Remove";

  RemoveButton.onclick = () => {
    RemoveButton.remove();
    entry.remove();
    TrainingData.pop(TrainingData.length - 1);
  };

  entry.textContent = "[" + inp + "] -> [" + output + "]";

  Div_element.appendChild(entry);
  Div_element.appendChild(RemoveButton);

  document.getElementById("test1").appendChild(Div_element);


  document.getElementById("TrainButton").hidden = false;
}

// const net = new brain.recurrent.LSTMTimeStep({
//   inputSize: 1,
//   hiddenLayers: [10],
//   outputSize: 1,
// });
//
//
// const trainingData = [
//   [
//     [5],
//     [4],
//     [3],
//     [2],
//     [1],
//   ],
// ];
//
// net.train(trainingData, { log: true, errorThresh: 0.09 });
//
// const forecast = net.forecast(
//   [
//     [5],
//     [4],
//   ],
//   3
// );
//
