"use strict";

let Points = 0;
let user = prompt("What is your name?");
console.log("Todays visitor is " + user);
document.write(user);
console.log(user);

while (!user) {
  user = prompt("I need your name, so you can play the game");
}

if (user == "andy") {
  alert("Still not working yet?");
}

let learn = confirm("Would you like to  learn about me?");
if (learn == true) {
  alert(
    "Hey " +
      user +
      " lets learn about me. With these questions please anwser OK for yes, and cancel for No"
  );
} else {
  alert("why dont you want to know about me.");
}

let uni = confirm("Do you think i went to university.");
if (uni == false) {
  alert("Correct I didn't go, I started working straight after my A levels.");
  Points++;
} else {
  alert("Wrong I didn't go! I started working in a bar.");
}

let wife = confirm(user + " Do you think im married?");
if (wife == true) {
  alert("Correct, we have been married for six years.");
  Points++;
} else {
  alert(
    "wrong, the single life wasnt for me... I always wanted to be married and have children!"
  );
}

let children = confirm("Do you think I have children");
if (children == true) {
  alert("Correct I have two amazing boys");
  Points++;
} else {
  alert(user + " your funny, I would get a lot more sleep if I didnt!");
  Points++;
}

let car = prompt("What car do I drive? STI, C63, Type R");

switch (car.toLowerCase()) {
  case "sti":
    alert("I used to before the children.");
    break;
  case "c63":
    alert("Nope I worked for Mercedes for a decade, I know the problems!");
    break;
  case "type r":
    alert("yes its the perfect family hot hatch, Theo calls it the race car");
    Points++;
    break;

  default:
    alert("What even was that?");
}

let ageQ = prompt(
  "What is my age? Guess a number between 30- 40? You have 4 tries!"
);
let attempts = 3;

while (ageQ != 38 && attempts > 0) {
  // ageQ = prompt("try again " + attempts + " attempts left");

  if (ageQ > 38) {
    prompt("try a lower number " + attempts + " attempts left");
  }
  if (ageQ < 38) {
    prompt("try a higher number " + attempts + " attempts left");
  }
  attempts--;
}
if (ageQ === true) {
  prompt("Nice, you guessed my age");
  Points++;
}
alert(user + " I hope you have been paying attention...");

let carQuestion = prompt("Name one car on my Top 5 list").toLowerCase();

let topCars = ["f40", "type r", "gt40", "22b", "gtr"];

for (let i = 0; i < topCars.length; i++)
  if (carQuestion == topCars[i]) {
    alert(carQuestion + " was correct!");
    Points++;
  }
{
  alert(user + "well done, you scored" + points + "/7");
}
