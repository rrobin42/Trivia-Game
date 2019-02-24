//QUESTIONS
var q1 = {
  question: "Who is the NBA logo modeled after?",
  ca: "<p class='answerBox c'>Jerry West</p>",
  wa: ["<p class='answerBox w'>Michael Jordan</p>", "<p class='answerBox w' id='w'>Wilt Chamberlain</p>", "<p class='answerBox w' id='w'>Larry Bird</p>"]
}
var q2 = {
  question: "How many championships did Michael Jordan win with the Chicago Bulls?",
  ca: "<p class='answerBox c'>6</p>",
  wa: ["<p class='answerBox w'>2</p>", "<p class='answerBox w'>3</p>", "<p class='answerBox w'>4</p>"]
}
var q3 = {
  question: "What team was Kobe Bryant drafted to?",
  ca: "<p class='answerBox c'>Charlotte Hornets</p>",
  wa: ["<p class='answerBox w'>LA Lakers</p>", "<p class='answerBox w'>LA Clippers</p>", "<p class='answerBox w'>He went undrafted</p>"]
}
//QUESTION OBJECTS PLACED IN ARRAY
var questions = [q1, q2, q3];

var number = 60; //COUNTDOWN TIMER FOR QUESTION SCREEN
var number2 = 3; //COUNTDOWN TIMER FOR ANSWER SCREEN
var intervalId;
var i = 0; //QUESTION ITERATOR
var correctAnswers = 0; //number of correct answers
var wrongAnswers = 0; //number of wrong answers

//CALL QUESTION SCREEN WHEN START BUTTON IS CLICKED
$("#start").click(question);


//FUNCTION FOR QUESTION SCREEN
function question() {
  intervalId = setInterval(decrement, 1000);
  $("#start").css("display", "none");
  $("#timeRemaining").css("display", "inline");
  $("#timeRemaining").html("Time remaining: <h2>" + number + "</h2>");
  $("#question").html(questions[i].question);

  var displayAnswers = [questions[i].ca, questions[i].wa[0], questions[i].wa[1], questions[i].wa[2]];

  shuffle(displayAnswers);
  $("#answers").html(displayAnswers.join(""));


  //ANSWER ONCLICK FUNCTIONS
  $(".c").click(function () {
    clearInterval(intervalId);
    number = 60;
    correctAnswers++;
    answerScreen(1);
  });
  $(".w").click(function () {
    clearInterval(intervalId);
    number = 60;
    wrongAnswers++;
    answerScreen(2);
  });
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
    number = 60;
    answerScreen(3);
  }
}

//FUNCTION FOR ANSWER SCREEN
function answerScreen(n) {
  console.log(n);
  //IF THE ANSWER IS CORRECT
  if (n === 1) {
    $("#question").html("GOOD JOB!")
    $("#answers").html("");
    $("#timeRemaining").html("Time remaining: <h2>" + number2 + "</h2>");
    intervalId = setInterval(decrement2, 1000);
    n = 0;
  }

  //IF THE ANSWER IS WRONG
  else if (n === 2) {
    $("#timeRemaining").css("display", "none");
    $("#question").html("Wrong!");
    $("#answers").html("the answer was " + questions[i].ca);
    intervalId = setInterval(decrement2, 1000);
    n = 0;
  }
  //IF TIME RAN OUT
  else if (n === 3) {
    $("#timeRemaining").css("display", "none");
    $("#question").html("Times up!");
    $("#answers").html("the answer was " + questions[i].ca);
    intervalId = setInterval(decrement2, 1000);
    n = 0;
  }

  $("#timeRemaining").html("Time remaining: <h2>" + number2 + "</h2>");
}

//DECREMENT FUNCTION FOR ANSWER SCREEN
function decrement2() {


  //  Decrease number by one.
  number2--;

  $("#timeRemaining").html("Time remaining: <h2>" + number2 + "</h2>");

  //  Once number hits zero...
  if (number2 === 0) {
    number2 = 3;
    clearInterval(intervalId);
    i++;
    if (i < questions.length) {
      question();
    }
    else {
      final();
    }
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function final() {
  $("#final").css("display","inline");
  $("#final").html("<p>number of correct answers " + correctAnswers + " </p>" +
    "<p>number of wrong answers " + wrongAnswers + "</p>");
  $("#timeRemaining").css("display", "none");
  $("#final").append("<button id='reset' onclick='reset()'>Restart game</button>");
  $("#reset").click(question);
}

function reset() {
  correctAnswers = 0;
  wrongAnswers = 0;
  i = 0;
  number = 60;
  number2 = 3;
  $("#final").css("display", "none");
}