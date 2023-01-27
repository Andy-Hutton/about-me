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

// question 1
function learn() {
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
}
learn();

// question 2
function uni() {
  let uni = confirm("Do you think i went to university.");
  if (uni == true) {
    alert("Wrong, I didn't go! I started working in a bar.");
    Points++;
  } else {
    alert("Correct I didn't go, I started working straight after my A levels.");
  }
}
uni();

// question 3
function wife() {
  let wife = confirm(user + " Do you think im married?");
  if (wife == true) {
    alert("Correct, we have been married for six years.");
    Points++;
  } else {
    alert(
      "wrong, the single life wasnt for me... I always wanted to be married and have children!"
    );
  }
}
wife();

// question 4
function children() {
  let children = confirm("Do you think I have children");
  if (children == true) {
    alert("Correct I have two amazing boys");
    Points++;
  } else {
    alert(user + " your funny, I would get a lot more sleep if I didnt!");
  }
}
children();

// question 5
function car() {
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
}
car();

// question 6

function age() {
  let ageQ = prompt(
    "What is my age? Guess a number between 30- 40? You have 4 tries!"
  );
  let ageAttempts = 3;

  while (ageQ != 38 && ageAttempts > 0) {
    // ageQ = prompt("try again " + attempts + " attempts left");
    alert("thats not right you have " + ageAttempts + " remaining");
    if (ageQ > 38) {
      ageQ = prompt(
        "What is my age? Guess a number between 30- 40? Try a lower number."
      );
    } else if (ageQ < 38) {
      ageQ = prompt(
        "What is my age? Guess a number between 30- 40? Try a higher number."
      );
    } else {
      ageQ = prompt(
        "What is my age? Guess a number between 30- 40? Try guessing a number."
      );
    }
    ageAttempts--;
  }
  // }
  if (ageQ == 38) {
    alert(
      "Nice, you guessed my age it was 38 you had " + ageAttempts + " left"
    );
    Points++;
  } else {
    alert("sorry you have 0 attempts remaining, I'm 38!");
  }
}
age();

// question 7

alert(user + " Good luck for the final question!");
function car2() {
  let carQuestion = prompt("Name one car on my Top 5 list").toLowerCase();

  let topCars = ["f40", "type r", "gt40", "22b", "gtr"];

  let carAttempts = 5;

  while (carAttempts > 0) {
    for (let i = 0; i < topCars.length; i++) {
      if (carQuestion == topCars[i]) {
        alert("thats correct!");
        Points++;
        carAttempts = 0;
      }
    }
    if (carAttempts > 0) {
      carQuestion = prompt("that is wrong, please try again.");
      carAttempts--;
    }
  }
}
car2();
alert(user + "well done, you scored" + Points + "/7");
