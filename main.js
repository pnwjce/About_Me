'use strict';

//Get Username
var userName = prompt('Welcome! What\'s your name?');
console.log('What\'s your name : ' + userName);
alert('Hello ' + userName + ', nice to meet you!');

//Rain question
var rain = prompt('I live in Seattle, and we get a lot of rain. So do you think I like the rain?');
console.log('do I like the rain : ' + rain);
if(rain === 'yes') {
  alert('You are right, ' + userName + '. I really, really do!');
}
else if(rain === 'no') {
  alert('I really do actually. I even miss the rain during the summer.');
}
else {
  alert('Was that a tricky question?');
}

//Cats or Dogs?
var animals = prompt('If I could choose only one pet, would I choose a dog?');
console.log('cats or dogs : ' + animals);
if(animals === 'no') {
  alert('Though my first pet, outside of the occasional goldfish, was a cat. Sadly, I would still choose dogs. ');
}
else if(animals === 'yes') {
  alert('Yes, I would. Somehow I prefer pets who don\'t judge me.');
}
else {
  alert('I\'m a little more basic than that.');
}

//Zombie movies?
var zombie = prompt('Do I like zombie movies?');
console.log('Do I like zombie movies : ' + zombie);
if(zombie === 'yes') {
  alert('In all forms, I like them silly and scary.');
}
else if(zombie === 'no') {
  alert('Sadly ' + userName + ', you are wrong on this one. I don\t think I\'ve ever met a zombie I didn\'t like.');
}
else {
  alert('Did the zombies get to you already?');
}


//Romance novel question
var romNovel = prompt('Do I like reading a good romance novel?');
console.log('Do I like reading romance novels : ' + romNovel);
if(romNovel === 'yes') {
  alert('Yes, I think there\'s always room for more love in the world.');
}
else if(romNovel === 'no') {
  alert('Nope, I\'m a bit of a romantic. Bring on the love!');
}
else {
  alert('No judgement ' + userName + ', no judgement.');
}

//Country music question
var country = prompt('What are my feelings about country music? Yes or No?');
console.log('Do I like country music : ' + country);
if(country === 'yes') {
  alert('Yeehaw! I surely do!');
}
else if(country === 'no') {
  alert('No cowboy, you read me wrong. I love a good ditty.');
}
else {
  alert('I like all the tunes friend.');
}

//Guess my number
var numberGameString = prompt('My family has a lucky number we always ask to have on our sports jerseys. Can you guess it? (Hint: it\'s under 20)');
console.log('What\'s my lucky jersey number : ' + numberGameString);

var jerseyNumber = 14 ;
var numberGame = parseInt(numberGameString);
console.log(numberGame);

for(var i = 0; i < 4; i++){
  if(numberGame === jerseyNumber){
    alert('Wow! You got it!');
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
