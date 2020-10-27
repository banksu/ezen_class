const btnStart = document.querySelector(".btnStart"),
  input = document.querySelector(".numInput");

const startMSG = document.querySelector(".startMassage"),
  startBnt = document.querySelector(".btnStart");

const throwBnt = document.querySelector(".btnThrow"),
  input01 = document.querySelector(".numInput01"),
  input02 = document.querySelector(".numInput02"),
  input03 = document.querySelector(".numInput03");

const welcomeBox = document.querySelector(".welcome"),
  playBox = document.querySelector(".play");

const resultBox = document.querySelector(".result"),
  ballCount = document.querySelector(".result__ball"),
  strikeCont = document.querySelector(".result__strike"),
  win = document.querySelector(".result__strikeOut"),
  lost = document.querySelector(".result__yureka");

let targetNumber = [];
let myNumber = [];
let startTime;

function winner(tomato, egg) {
  let minutes = Math.floor(egg / 60000);
  let seconds = Math.floor((egg % 60000) / 1000);

  if (tomato === true) {
    document.write(
      "<span>You Win! Press f5</span><br><span>Current Time : " +
        minutes +
        " min " +
        seconds +
        " sec </span>"
    );
  }
}

function guessNumber() {
  resultBox.classList.remove("sleep");
  myNumber = [
    Number(input01.value),
    Number(input02.value),
    Number(input03.value)
  ];
  let strike = 0;
  let ball = 0;
  let yureka = 0;
  let tomato = false;

  for (let i = 0; i < 3; i++) {
    //strike and win
    if (targetNumber[i] === myNumber[i]) {
      strike++;
    } else if (myNumber.indexOf(targetNumber[i]) >= 0) {
      ball++;
    } else {
      yureka++;
    }
  }
  switch (strike) {
    case 1:
      strikeCont.innerText = "strike is " + strike;
      break;
    case 2:
      strikeCont.innerText = "strike is " + strike;
      break;
    case 3:
      tomato = true;
      wintime = new Date();
      egg = wintime - startTime;
      winner(tomato, egg);
      break;
  }

  //yureka
  if (yureka === 3) {
    lost.classList.remove("sleep");
  } else {
    lost.classList.add("sleep");
  }

  ballCount.innerText = "ball is " + ball;
  console.log(myNumber);
  console.log(targetNumber);
}

function checkArray(numArray) {
  if (
    numArray[0] === numArray[1] ||
    numArray[0] === numArray[2] ||
    numArray[1] === numArray[2]
  ) {
    getNumber();
  } else {
    playBox.classList.remove("sleep");
    welcomeBox.classList.add("sleep");
    targetNumber = numArray;
  }
}

function getNumber() {
  let numArray = [];
  for (let i = 0; i < 3; i++) {
    numArray.push(Math.floor(Math.random() * 9) + 1);
  }
  checkArray(numArray);
  startTime = new Date();
}

function handle() {
  btnStart.addEventListener("click", getNumber);
  throwBnt.addEventListener("click", guessNumber);
}

function init() {
  handle();
}

init();
