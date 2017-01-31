//RANDOM QUESTION GENERATOR

// var blueQuestions = [
//   "What is the color of the sky?",
//   "What kind of dog is Scooby Doo?",
//   "What kind of animal is Garfield?",
//   "What do cows eat?",
//   "Who lives in a pinapple under the sea?"
// ];
//
// var randomValue = blueQuestions [Math.floor(Math.random() * blueQuestions.length)];
//
// console.log(randomValue);

var blueQuestions = [
  {
    name:"blueQ1",
    value:"1",
    blueQ:"What color is the sky?",
    corAns:"blue",
    det1:"yellow",
    det2:"green",
    det3:"red"
  },
  {
    name:"blueQ2",
    value:"1",
    blueQ:"What color are grapes?",
    corAns:"green",
    det1:"yellow",
    det2:"blue",
    det3:"red"
  },
  {
    name:"blueQ3",
    value:"1",
    blueQ:"What color are carrots?",
    corAns:"orange",
    det1:"yellow",
    det2:"green",
    det3:"red"
  },
  {
    name:"blueQ4",
    value:"1",
    blueQ:"What color is the sun?",
    corAns:"yellow",
    det1:"blue",
    det2:"green",
    det3:"red"
  },
  {
    name:"blueQ5",
    value:"1",
    blueQ:"What color are roses?",
    corAns:"red",
    det1:"blue",
    det2:"green",
    det3:"yellow"
  }
]

blueQuestions.sort(function(a, b){return 0.5 - Math.random()});

var blueRandomValueQ = blueQuestions[1].blueQ; //[Math.floor(Math.random() * blueQuestions.length)];

//Need to randomize order of corAns, det1, det2, det3

// "#blueQ"=blueRandomValueQ
//""#ba1"=blueRandomValueA

console.log(blueRandomValueQ);
