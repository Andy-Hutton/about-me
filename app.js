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
if (uni == true) {
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
if (ageQ == 38) {
  alert("Nice, you guessed my age it was 38 you had " + ageAttempts + " left");
  Points++;
} else {
  alert("sorry you have 0 attempts remaining, I'm 38!");
}
alert(user + " Good luck for the final question!");

let carQuestion = prompt("Name one car on my Top 5 list").toLowerCase();
let carAttempts = 5;
let topCars = ["f40", "type r", "gt40", "22b", "gtr"];
while (carQuestion != topCars.length && carAttempts > 0) {
  if (carQuestion != topCars) {
    prompt("Guess again you have " + carAttempts + " remaining.");

    carAttempts--;
  }
}
if (carQuestion == topCars.length) {
  alert("nice, your correct! You did it in" + carAttempts);
  Points++;
} else {
  alert(
    "sorry you have 0 attempts remaining, you could have chose F40, 22B, GT40, GTR, Type R"
  );
}
alert("Well done " + user + " you got" + points + " /7");

// for (let i = 0; i < topCars.length; i++)
//   if (carQuestion == topCars[i]) {
//     alert(
//       carQuestion +
//         " was correct!" +
//         carAttempts +
//         " remaining. The correct anwsers were" +
//         topCars
//     );
//     Points++;
//   } else {
//     carQuestion = alert("Try guessing again!");
//   }
//   if (carQuestion =
// carAttempts--;

//  alert(user + "well done, you scored" + points + "/7");
