$(document).ready(function() {

//get value assigned to a question

  var blueQ1=$("#blueQ").attr("value");

// get value assigned to button

  var blueA1=$("#bA1").attr("value");
  var blueA2=$("#bA2").attr("value");
  var blueA3=$("#bA3").attr("value");
  var blueA4=$("#bA4").attr("value");

  console.log(blueQ1);
  console.log(blueA1);
  console.log(blueA2);
  console.log(blueA3);
  console.log(blueA4);

//user clicks button; COMPARE button value to question value; IF equal THEN change feedback to green, ELSE change feedback to red

$("#bA1").click(function(){
  // $("#blueFb").css("background-color", "green");
  if (blueA1 == blueQ1) {
    $("#blueFb").css("background-color", "green");
  } else {
    $("#blueFb").css("background-color", "red");
  }
});

$("#bA2").click(function(){
  // $("#blueFb").css("background-color", "green");
  if (blueA2 == blueQ1) {
    $("#blueFb").css("background-color", "green");
  } else {
    $("#blueFb").css("background-color", "red");
  }
});

$("#bA3").click(function(){
  // $("#blueFb").css("background-color", "green");
  if (blueA3 == blueQ1) {
    $("#blueFb").css("background-color", "green");
  } else {
    $("#blueFb").css("background-color", "red");
  }
});

$("#bA4").click(function(){
  // $("#blueFb").css("background-color", "green");
  if (blueA4 == blueQ1) {
    $("#blueFb").css("background-color", "green");
  } else {
    $("#blueFb").css("background-color", "red");
  }
});

});
