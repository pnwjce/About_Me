'use strict';

var rightAnswer = 0;

//Get Username
var userName = prompt('Welcome! What\'s your name?');
console.log('What\'s your name : ' + userName);
alert('Hello ' + userName + ', nice to meet you! Shall we play a game so you can get to know me better? (Answers should be yes or no)');

//Rain question
var functionRain = function() {
  var rain = prompt('I live in Seattle, and we get a lot of rain. So do you think I like the rain?');
  rain = rain.toLowerCase();
  console.log('do I like the rain : ' + rain);
  if(rain === 'yes') {
    alert('You are right, ' + userName + '. I really, really do!');
    rightAnswer++;
  }
  else if(rain === 'no') {
    alert('I really do actually. I even miss the rain during the summer.');
  }
  else {
    alert('Was that a tricky question?');
  }
};
functionRain();

//Cats or Dogs?
var functionAnimals = function() {
  var animals = prompt('If I could choose only one pet, would I choose a cat?');
  animals = animals.toLowerCase();
  console.log('cats or dogs : ' + animals);
  if(animals === 'yes') {
    alert('Though my first pet, outside of the occasional goldfish, was a cat. Sadly, I would still choose dogs. ');
  }
  else if(animals === 'no') {
    alert('I would choose a dog! Somehow I prefer pets who don\'t judge me.');
    rightAnswer++;
  }
  else {
    alert('I\'m a little more basic than that.');
  }
};
functionAnimals();

//Zombie movies?
var functionZombie = function() {
  var zombie = prompt('Do I like zombie movies?');
  zombie = zombie.toLowerCase();
  console.log('Do I like zombie movies : ' + zombie);
  if(zombie === 'yes') {
    alert('In all forms, I like them silly and scary.');
    rightAnswer++;
  }
  else if(zombie === 'no') {
    alert('Sadly ' + userName + ', you are wrong on this one. I don\'t think I\'ve ever met a zombie I didn\'t like.');
  }
  else {
    alert('Did the zombies get to you already?');
  }
};
functionZombie();

//Romance novel question
var functionRomNovel = function() {var romNovel = prompt('Do I like reading a good romance novel?');
  romNovel = romNovel.toLowerCase();
  console.log('Do I like reading romance novels : ' + romNovel);
  if(romNovel === 'yes') {
    alert('Yes, I think there\'s always room for more love in the world.');
    rightAnswer++;
  }
  else if(romNovel === 'no') {
    alert('Nope, I\'m a bit of a romantic. Bring on the love!');
  }
  else {
    alert('No judgement ' + userName + ', no judgement.');
  }
};
functionRomNovel();

//Country music question
var functionCountry = function() {
  var country = prompt('Do I hate country music?');
  country = country.toLowerCase();
  console.log('Do I hate country music : ' + country);
  if(country === 'yes') {
    alert('No cowboy, you read me wrong. I love a good ditty.');
  }
  else if(country === 'no') {
    alert('Yeehaw! I surely do enjoy a sweet tune!');
    rightAnswer++;
  }
  else {
    alert('I like all the tunes friend.');
  }
};
functionCountry();

//Guess my number
var numberGameString = prompt('My family has a lucky number we always ask to have on our sports jerseys. Can you guess it? (Hint: it\'s under 20)');
console.log('What\'s my lucky jersey number : ' + numberGameString);

var jerseyNumber = 14 ;
var numberGame = parseInt(numberGameString);
console.log(numberGame);

for(var i = 0; i < 4; i++){
  if(numberGame === jerseyNumber){
    alert('Wow! You got it!');
    rightAnswer++;
    break;
  }else if(numberGame < jerseyNumber){
    numberGame = prompt('Oops, too low! Try again.');
    numberGame = parseInt(numberGame);
    console.log('Too low : ' + numberGame);
  }else {
    numberGame = prompt('Shooting for the stars, you went too high! Try again.');
    numberGame = parseInt(numberGame);
    console.log('Too high : ' + numberGame);
  }
}

//Dream Cities to Visit
var dreamCities = prompt('Can you guess one of my Top 5 Cities I want to visit?');
dreamCities = dreamCities.toLowerCase();
console.log('What are my dream cities to visit : ' + dreamCities);

if(dreamCities === 'istanbul' || dreamCities === 'sydney' || dreamCities === 'marrakesh' || dreamCities === 'seoul' || dreamCities === 'auckland') {
  alert('Good guess, you picked well!');
  rightAnswer++;
}
else {
  alert('Not one of mine, but maybe I should add it!');
}

alert('Well ' + userName + ', you got ' + rightAnswer + ' questions right!');
