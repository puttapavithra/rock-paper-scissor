'use strict';

//Element Selectors

//Score Elements
const userScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');

//Weapon Elements
const weaponsContainer = document.getElementById('weapons-container');
const userWeaponEl = document.getElementById('user-weapon');
const computerWeaponEl = document.getElementById('computer-weapon');

//Result Elements
const resultContainer = document.getElementById('result-container');
const resultEl = document.getElementById('result');

//Project Variables
let userScore = 0;
let computerScore = 0;

let userChoice = '';
let computerChoice = '';

const weapons = ['rock', 'paper', 'scissors'];

//Functions
//Game Defaults
const init = function () {
  userScoreEl.textContent = userScore;
  computerScoreEl.textContent = computerScore;
};

//Display Weapons
const displayWeapons = function () {
  weapons.forEach((weapon) => {
    //Create Weapon Button Element
    const weaponEl = document.createElement('button');

    //Adding a class of weapon to the button element
    weaponEl.classList.add('weapon');

    //Adding an attribute of value to button to get it in JS
    weaponEl.setAttribute('value', `${weapon}`);

    //We are inserting an image inside the button
    weaponEl.innerHTML = `<img src ="./assets/images/${weapon}.png" alt ="${weapon}"/>`;

    //We are appending the element created into weapons container
    weaponsContainer.appendChild(weaponEl);
  });
};

//Show Result Function

const showResult = function (userChoice, computerChoice, result) {
  //Add Message in result  container
  resultContainer.classList.add('show');
  userWeaponEl.textContent = userChoice.toUpperCase();
  computerWeaponEl.textContent = computerChoice.toUpperCase();

  //Show the result according to result
  if (result === 'draw') {
    resultEl.textContent = 'Game Draw';
  } else if (result === 'win') {
    resultEl.textContent = 'You Won';
    userScore++;
  } else if (result === 'lost') {
    resultEl.textContent = 'You Lost';
    computerScore++;
  }

  //Displaying scores
  userScoreEl.textContent = userScore;
  computerScoreEl.textContent = computerScore;
};

//Game Rules - Get Result Function
const getResult = function (userChoice, computerChoice) {
  //We are combining choices into a string
  let resultString = `${userChoice}${computerChoice}`;
  if (userChoice === computerChoice) {
    //Draw
    showResult(userChoice, computerChoice, 'draw');
  } else if (
    resultString === 'rockscissors' ||
    resultString === 'paperrock' ||
    resultString === 'scissorspaper'
  ) {
    //win
    showResult(userChoice, computerChoice, 'win');
  } else if (
    resultString === 'scissorsrock' ||
    resultString === 'rockpaper' ||
    resultString === 'paperscissors'
  ) {
    //lost
    showResult(userChoice, computerChoice, 'lost');
  }
};

//initializers
//Replacing the html score values
init();

//Displaying weapons on UI
displayWeapons();

//event listeners
document.querySelectorAll('button').forEach((weapon) => {
  //add Event listener for the weapon
  weapon.addEventListener('click', () => {
    userChoice = weapon.value;
    computerChoice = weapons[Math.trunc(Math.random() * weapons.length)];

    getResult(userChoice, computerChoice);
  });
});