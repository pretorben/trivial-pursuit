$(document).ready(function() {

//get value assigned to a question

  var blueQ1=$("#blueQ").attr("value");
  var pinkQ1=$("#pinkQ").attr("value");
  var yellowQ1=$("#yellowQ").attr("value");
  var brownQ1=$("#brownQ").attr("value");
  var greenQ1=$("#greenQ").attr("value");
  var orangeQ1=$("#orangeQ").attr("value");

// get value assigned to button

  var blueA1=$("#bA1").attr("value");
  var blueA2=$("#bA2").attr("value");
  var blueA3=$("#bA3").attr("value");
  var blueA4=$("#bA4").attr("value");

  var pinkA1=$("#pA1").attr("value");
  var pinkA2=$("#pA2").attr("value");
  var pinkA3=$("#pA3").attr("value");
  var pinkA4=$("#pA4").attr("value");

  var yellowA1=$("#yA1").attr("value");
  var yellowA2=$("#yA2").attr("value");
  var yellowA3=$("#yA3").attr("value");
  var yellowA4=$("#yA4").attr("value");

  var brownA1=$("#brA1").attr("value");
  var brownA2=$("#brA2").attr("value");
  var brownA3=$("#brA3").attr("value");
  var brownA4=$("#brA4").attr("value");

  var greenA1=$("#gA1").attr("value");
  var greenA2=$("#gA2").attr("value");
  var greenA3=$("#gA3").attr("value");
  var greenA4=$("#gA4").attr("value");

  var orangeA1=$("#oA1").attr("value");
  var orangeA2=$("#oA2").attr("value");
  var orangeA3=$("#oA3").attr("value");
  var orangeA4=$("#oA4").attr("value");

  console.log(brownQ1);
  console.log(orangeA1);
  console.log(greenA2);
  console.log(blueA3);
  console.log(blueA4);

//user clicks button; COMPARE button value to question value; IF equal THEN change feedback to green, ELSE change feedback to red

//BLUE Q & A

$("#bA1").click(function(){
  if (blueA1 == blueQ1) {
    $("#blueFb").css("background-color", "green");
  } else {
    $("#blueFb").css("background-color", "red");
  }
});

$("#bA2").click(function(){
  if (blueA2 == blueQ1) {
    $("#blueFb").css("background-color", "green");
  } else {
    $("#blueFb").css("background-color", "red");
  }
});

$("#bA3").click(function(){
  if (blueA3 == blueQ1) {
    $("#blueFb").css("background-color", "green");
  } else {
    $("#blueFb").css("background-color", "red");
  }
});

//PINK Q&A

$("#pA4").click(function(){
  if (pinkA4 == pinkQ1) {
    $("#pinkFb").css("background-color", "green");
  } else {
    $("#pinkFb").css("background-color", "red");
  }
});

$("#pA1").click(function(){
  if (pinkA1 == pinkQ1) {
    $("#pinkFb").css("background-color", "green");
  } else {
    $("#pinkFb").css("background-color", "red");
  }
});

$("#pA2").click(function(){
  if (pinkA2 == pinkQ1) {
    $("#pinkFb").css("background-color", "green");
  } else {
    $("#pinkFb").css("background-color", "red");
  }
});

$("#pA3").click(function(){
  if (pinkA3 == pinkQ1) {
    $("#pinkFb").css("background-color", "green");
  } else {
    $("#pinkFb").css("background-color", "red");
  }
});

$("#pA4").click(function(){
  if (pinkA4 == pinkQ1) {
    $("#pinkFb").css("background-color", "green");
  } else {
    $("#pinkFb").css("background-color", "red");
  }
});

//YELLOW Q&A

$("#yA4").click(function(){
  if (yellowA4 == yellowQ1) {
    $("#yellowFb").css("background-color", "green");
  } else {
    $("#yellowFb").css("background-color", "red");
  }
});

$("#yA1").click(function(){
  if (yellowA1 == yellowQ1) {
    $("#yellowFb").css("background-color", "green");
  } else {
    $("#yellowFb").css("background-color", "red");
  }
});

$("#yA2").click(function(){
  if (yellowA2 == yellowQ1) {
    $("#yellowFb").css("background-color", "green");
  } else {
    $("#yellowFb").css("background-color", "red");
  }
});

$("#yA3").click(function(){
  if (yellowA3 == yellowQ1) {
    $("#yellowFb").css("background-color", "green");
  } else {
    $("#yellowFb").css("background-color", "red");
  }
});

$("#yA4").click(function(){
  if (yellowA4 == yellowQ1) {
    $("#yellowFb").css("background-color", "green");
  } else {
    $("#yellowFb").css("background-color", "red");
  }
});

//BROWN Q&A

$("#brA4").click(function(){
  if (brownA4 == brownQ1) {
    $("#brownFb").css("background-color", "green");
  } else {
    $("#brownFb").css("background-color", "red");
  }
});

$("#brA1").click(function(){
  if (brownA1 == brownQ1) {
    $("#brownFb").css("background-color", "green");
  } else {
    $("#brownFb").css("background-color", "red");
  }
});

$("#brA2").click(function(){
  if (brownA2 == brownQ1) {
    $("#brownFb").css("background-color", "green");
  } else {
    $("#brownFb").css("background-color", "red");
  }
});

$("#brA3").click(function(){
  if (brownA3 == brownQ1) {
    $("#brownFb").css("background-color", "green");
  } else {
    $("#brownFb").css("background-color", "red");
  }
});

$("#brA4").click(function(){
  if (brownA4 == brownQ1) {
    $("#brownFb").css("background-color", "green");
  } else {
    $("#brownFb").css("background-color", "red");
  }
});

//GREEN Q&A

$("#gA4").click(function(){
  if (greenA4 == greenQ1) {
    $("#greenFb").css("background-color", "green");
  } else {
    $("#greenFb").css("background-color", "red");
  }
});

$("#gA1").click(function(){
  if (greenA1 == greenQ1) {
    $("#greenFb").css("background-color", "green");
  } else {
    $("#greenFb").css("background-color", "red");
  }
});

$("#gA2").click(function(){
  if (greenA2 == greenQ1) {
    $("#greenFb").css("background-color", "green");
  } else {
    $("#greenFb").css("background-color", "red");
  }
});

$("#gA3").click(function(){
  if (greenA3 == greenQ1) {
    $("#greenFb").css("background-color", "green");
  } else {
    $("#greenFb").css("background-color", "red");
  }
});

$("#gA4").click(function(){
  if (greenA4 == greenQ1) {
    $("#greenFb").css("background-color", "green");
  } else {
    $("#greenFb").css("background-color", "red");
  }
});

//ORANGE Q&A

$("#oA4").click(function(){
  if (orangeA4 == orangeQ1) {
    $("#orangeFb").css("background-color", "green");
  } else {
    $("#orangeFb").css("background-color", "red");
  }
});

$("#oA1").click(function(){
  if (orangeA1 == orangeQ1) {
    $("#orangeFb").css("background-color", "green");
  } else {
    $("#orangeFb").css("background-color", "red");
  }
});

$("#oA2").click(function(){
  if (orangeA2 == orangeQ1) {
    $("#orangeFb").css("background-color", "green");
  } else {
    $("#orangeFb").css("background-color", "red");
  }
});

$("#oA3").click(function(){
  if (orangeA3 == orangeQ1) {
    $("#orangeFb").css("background-color", "green");
  } else {
    $("#orangeFb").css("background-color", "red");
  }
});

$("#oA4").click(function(){
  if (orangeA4 == orangeQ1) {
    $("#orangeFb").css("background-color", "green");
  } else {
    $("#orangeFb").css("background-color", "red");
  }
});

});
