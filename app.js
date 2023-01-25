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
  alert("hey " + user + " lets learn about me.");
} else {
  alert("why dont you want to know about me.");
}

let uni = confirm("do you think i went to university.");
if (uni == false) {
  alert("I started working straight after my A levels.");
} else {
  alert("I should have! But I started working.");
  Points++;
}

let wife = confirm(user + " Do you think im married?");
if (wife == true) {
  alert("I am, we have been married for six years.");
} else {
  alert(
    "the single life wasnt for me, I always wanted to be married and have children!"
  );
  Points++;
}

let children = confirm("Do you think I have children");
if (children == true) {
  alert("I have two amazing boys");
} else {
  alert(user + "I would get a lot more sleep if I didnt!");
  Points++;
}

let car = prompt("What car do I drive? STI, C63, Type R");

switch (car.toLowerCase()) {
  case "sti":
    alert("I used to before the children.");
    break;
  case "c63":
    alert("Nope worked for Mercedes for a decade, I know the problems!");
    break;
  case "type r":
    alert("yes its the perfect family hot hatch, Theo calls it the race car");
    Points++;
    break;
  default:
    alert("what an awful choice!");
}
ageQ = prompt(
  "What is my age, guess a number between 30- 40? You have 4 tries!"
);
let ageQ = 38;
let attempts = 3;
while (ageQ != 38 && attempts > 0) {
  // help* indicate too high or too low?
  ageQ = prompt("try again");
  console.log("Correct!");
  prompt("Well done");
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
