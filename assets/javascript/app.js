//QUESTIONS
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
//QUESTION OBJECTS PLACED IN ARRAY
var questions = [q1, q2, q3];

var number = 4; //COUNTDOWN TIMER FOR QUESTION SCREEN
var number2 = 8; //COUNTDOWN TIMER FOR ANSWER SCREEN
var intervalId;
var i = 0; //QUESTION ITERATOR

//CALL QUESTION SCREEN WHEN START BUTTON IS CLICKED
$("#start").click(question);


//FUNCTION FOR QUESTION SCREEN
function question() {
  intervalId = setInterval(decrement, 1000);
  $("#start").css("display", "none");
  $("#timeRemaining").css("display", "inline");
  $("#question").html(questions[i].question);
  $("#answers").html(questions[i].a1 + questions[i].a2 + questions[i].a3 + questions[i].a4);

}

//DECREMENT FUNCTION FOR QUESTION SCREEN
function decrement() {

  //  Decrease number by one.
  number--;

  //  Show the number in the #timeRemaining tag.
  $("#timeRemaining").html("Time remaining: <h2>" + number + "</h2>");
  //  Once number hits zero...
  if (number === 0) {
    clearInterval(intervalId);

    //RESET TIMER
    number = 4;
    answerScreen();
  }
}

//FUNCTION FOR ANSWER SCREEN
function answerScreen() {
  $("#timeRemaining").css("display", "none");
  $("#question").html("Times up!");
  $("#answers").html("the answer was " + questions[i].a2);
  intervalId = setInterval(decrement2, 1000);
}

//DECREMENT FUNCTION FOR ANSWER SCREEN
function decrement2() {

  //  Decrease number by one.
  number2--;

  //  Once number hits zero...
  if (number2 === 0) {
    clearInterval(intervalId);
    number2 = 8;
    i++;
    if (i < questions.length)
      question();
    else {

    }
  }
}