let user = prompt("What is your name?");
console.log("Todays visitor is " + user);
// document.write(user);
console.log(user);

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
}

let wife = confirm(user + " Do you think im married?");
if (wife == true) {
  alert("I do, we have been married for six years.");
} else {
  alert("the single life wasnt for me!");
}

let children = confirm("Do you think I have children");
if (children == true) {
  alert("I have two amazing boys");
} else {
  alert(user + "I would get a lot more sleep if I didnt!");
}

let drink = prompt("What is your favourite colour?");

switch (colour.toLowerCase()) {
  case "red":
    console.log("Your favourite colour was red. Gross.");
    break;
  case "green":
    console.log("Nice. Good choice.");
    break;
  default:
    console.log(
      "Pretty sure that colour doesn't exist. Have you thought about red or green? ¯\\_(ツ)_/¯"
    );
}

// console.log("Your favourite type of motorsport is " + motorsport);

// alert("Hi there, " + user + ". Your favourite motorsport is " + motorsport);
// let track = prompt(user + " which is your favorite race track?");
// console.log(user + " which is your favorite race track?");

// let conditions = prompt(user + " what are the best racing conditions");
// console.log(user + " what are the best racing conditions");

// alert(
//   "Hey " +
//     user +
//     " your favorite motorsport is " +
//     motorsport +
//     " at " +
//     track +
//     " in " +
//     conditions +
//     " condtions"
// );
