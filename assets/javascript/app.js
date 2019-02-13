var q1 = {
  question: "Pick one",
  a1: "<p>a</p>",
  a2: "<p>b</p>",
  a3: "<p>c</p>",
  a4: "<p>d</p>"
}
var q2 = {
  question: "Pick one",
  a1: "<p>1</p>",
  a2: "<p>2</p>",
  a3: "<p>3</p>",
  a4: "<p>4</p>"
}
var q3 = {
  question: "Pick one",
  a1: "<p>e</p>",
  a2: "<p>r</p>",
  a3: "<p>t</p>",
  a4: "<p>y</p>"
}

var questions = [q1, q2, q3];

var number = 4;
var number2 = 8;
var intervalId;
var i = 0; //QUESTION ITERATOR

$("#start").click(question);

function question() {
  intervalId = setInterval(decrement, 1000);
  $("#start").css("display", "none");
  $("#timeRemaining").css("display", "inline");
  $("#question").html(questions[i].question);
  $("#answers").html(questions[i].a1 + questions[i].a2 + questions[i].a3 + questions[i].a4);

}
function decrement() {

  //  Decrease number by one.
  number--;

  //  Show the number in the #show-number tag.
  $("#timeRemaining").html("Time remaining: <h2>" + number + "</h2>");


  //  Once number hits zero...
  if (number === 0) {

    clearInterval(intervalId);
    number = 4;
    answerScreen();
  }
}

function answerScreen() {
  $("#timeRemaining").css("display", "none");
  $("#question").html("Times up!");
  $("#answers").html("the answer was " + questions[i].a2);
  intervalId = setInterval(decrement2, 1000);
}

function decrement2() {

  //  Decrease number by one.
  number2--;

  //  Once number hits zero...
  if (number2 === 0) {

    clearInterval(intervalId);
    number2 = 8;
    i++;
    question();
  }
}