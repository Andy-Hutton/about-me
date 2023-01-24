let user = prompt("What is your name?");
console.log("Todays visitor is " + user);
document.write(user);
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
  alert("I am, we have been married for six years.");
} else {
  alert(
    "the single life wasnt for me, I always wanted to be married and have children!"
  );
}

let children = confirm("Do you think I have children");
if (children == true) {
  alert("I have two amazing boys");
} else {
  alert(user + "I would get a lot more sleep if I didnt!");
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
    break;
  default:
    alert("what an awful choice!");
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
