/*the left hand side is the key and the right hand side is the URL for the key - a dictionary object is a key value pairing, 
paring a value with the object, that is the code we have below, the part with the "handOptions"
Dictionary is the most important data structure you have to learn as a developer*/
const handOptions = {
  rock: "Githubassets/Rock.png",
  paper: "Githubassets/Paper.png",
  scissors: "Githubassets/Scissors.png",
};

let SCORE = 0;

const pickUserHand = (hand) => {
  console.log(hand);
  //hide the current page
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  //show the next page with the selected hand
  // create placeholder text and images for your program when you do not have the java script codes yet

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  /*set the user pick using the dictionary object. Take note of the type of brackets used for each type of code.*/
  document.getElementById("userPickImage").src = handOptions[hand];

  let cpHand = pickHouseHand();
  referee(hand, cpHand);
};
//take note of the camel casing used in JavaScript
// the square brackets "[]" are used for arrays (an array is a list of items)
//an array had addresses to it's elements for example the address of "rock" in the array below is address 0, "paper" is address 1 and "scissors" is address 2

//math.random returns a number between 0 and 1
//math.round rounds the figure to the nearest number
/*math.floor returns the last integer less than or equal to a given number ie, 
it rounds to the closest buttom number. ie, 2.73 will round to the closest buttom number which is 2*/

const pickHouseHand = () => {
  let hands = ["rock", "paper", "scissors"];
  let cpHand = hands[Math.floor(Math.random() * 3)];

  /*set the user pick using the dictionary object. Take note of the type of brackets used for each type of code.*/
  /*In the code below, cpHand is used because the the computer is meant to pick the hand based on the cpHand variable declared above
    but the code will still use the dictionary object created above*/
  document.getElementById("computerpickimage").src = handOptions[cpHand];

  return cpHand;
};

const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOSE!");
  }

  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
};

const restartGame = () => {
  let hands = document.querySelector(".hands");
  hands.style.display = "flex";

  //show the next page with the selected hand
  // create placeholder text and images for your program when you do not have the java script codes yet

  let contest = document.querySelector(".contest");
  contest.style.display = "none";
};

//const is used to create a function that does something
const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
};

/*notice that the function below allows the decision to be replaced with the text of the inputed html location ie,
the score will be replaced with the h1 ( first heading in score)
I dont exactly know what the innerText command does.*/

//the command "SCORE = score" is replacing the value of SCORE with score

const setScore = (score) => {
  SCORE = score;
  document.querySelector(".score h1").innerText = score;
};

//make a project live by dragging it into netlify
