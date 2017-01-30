// get value assigned to button OLD
  // $('button[name="bA1"]').click(function(){
  //   var value=$(this).attr("value");
  //   console.log(value);
  // });
  //
  // $('button[name="bA2"]').click(function(){
  //   var value=$(this).attr("value");
  //   console.log(value);
  // });
  //
  // $('button[name="bA3"]').click(function(){
  //   var value=$(this).attr("value");
  //   console.log(value);
  // });
  //
  // $('button[name="bA4"]').click(function(){
  //   var value=$(this).attr("value");
  //   console.log(value);

$(document).ready(function() {

//get value assigned to a question

  var blueQ1=$('td[name="blueQ"]').attr("value");

// get value assigned to button

  var blueA1=$('button[name="bA1"]').attr("value");
  var blueA2=$('button[name="bA2"]').attr("value");
  var blueA3=$('button[name="bA3"]').attr("value");
  var blueA4=$('button[name="bA4"]').attr("value");

  console.log(blueQ1);
  console.log(blueA1);
  console.log(blueA2);
  console.log(blueA3);
  console.log(blueA4);

if (blueA1 = blueQ1) {
  $("#blueFb").css("background-color", "green");
} else if (blueA2 = blueQ1) {
  $("#blueFb").css("background-color", "green");
} else if (blueA3 = blueQ1) {
  $("#blueFb").css("background-color", "green");
} else if (blueA4 = blueQ1) {
  $("#blueFb").css("background-color", "green");
  }

















})
