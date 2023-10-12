console.log("Hello World")

// this is a comment!

/*
this
is
a
multi-line
comment
*/

/* this is a multi-line comment on a single line */

console.log("%cHello, World", "color: blue; font-size: 40px");

var petDog;
var petDog = "Rex";

var petCat;
var petCat = "Pepper";

console.log ("My pet dog's name is:")
console.log ("My pet cat's name is: ")

console.log ("My pet dog's name is:", petDog)
console.log ("My pet cat's name is: ", petCat)

var catSound;
var catSound = "purr";

var dogSound;
var dogSound = "woof";

console.log(petDog, "says", dogSound)
console.log(petCat, "says", catSound)

catSound = "meow"

console.log(petCat, "now says", catSound)

var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);

var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString);


// this is a comment! Create a variable named  score and set it to  8
// this is a comment! Use console.log() that includes the string "Mid-level skills:" and compares the score variable to above 0 and below 10 using the && operator
// this is a comment! The expected output in the console should be: "Mid-level skills: true".

var score = "8"
console.log("Mid-level skills:", score > 0 && score < 10)

/*Declare the variable timeRemaining, and assign the value of 0 to it.
Declare the variable energy, and assign the value of 10 to it.
Console log the following parameters: "Game over: ", and timeRemaining == 0 || energy == 0
Note that the expected output in the console should be: "Game over: true".*/

var timeRemaining = 4;
var energy = 10;


if (timeRemaining <= 10) {
    console.log("Game over:", timeRemaining == 0 || energy == 0)
} else {
console.log("invalid input");

}
// this is a comment!console.log("false")

/*You need to code a small program that takes a number and determines if it's an even number (like 2, 4, 6, 8, 10).

To achieve this task, you need to declare six variables, as follows:

The first variable, named num1,  should be assigned a number value of 2.
The second variable, named num2, should be assigned a number value of 5.
The third variable, named test1, should be assigned the calculation of num1 % 2. Note: executing this code will return a number.
The fourth variable, named test2, should be assigned the calculation of num2 % 2. Note: executing this code will also return a number.
The fifth variable, named result1, should be assigned the result of comparing if the number stored in the test1 variable is not equal to 0, in other words, this: test1 == 0.
The sixth variable, named result2, should be assigned the result of comparing if the number stored in the test2 variable is not equal to 0, in other words, test2 == 0.
Run console log two times after you've set the variables:

The first console log should have the following code between parentheses: "Is", num1, "an even number?", result1
The second console log should have the following code between parentheses: "Is", num2, "an even number?", result2
Note: The output to the console should be as follows:

Is 2 an even number? true

Is 5 an even number? false*/

var num1 = 2;
var num2 = 7;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;

console.log("Is", num1, "an even number?", result1)
console.log("Is", num2, "an even number?", result2)

var now = "Now in"
var three = 3;
var d = "D!"
console.log(now + three + d)


var counter = 0;
counter += 5;
counter += 3;

console.log(counter)

/*
if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The light is not green, orange, or red");
}

//converting the previous if-else example with switch-case
switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        //this block will run if no condition matches
        console.log('The light is not green, orange, or red');
        break;
 }*/


 var age = 50;

if (age>=65) {
console.log("You get your income from your pension")
} else if (age>=18 && age <65) {console.log("Each month you get a salary")
} else if (age < 18) { 
console.log("You get an allowance")
} else {console.log("The value of the age variable is not numerical")}


var day = "Sunday";
switch (day) {
    case "Monday": 
        console.log("Its a new week") 
            break 

    case "Tuesday": 
        console.log("Any To-dos from Monday?") 
            break 

    case "Wednesday": 
        console.log("Midweek") 
            break 

    case "Thursday": 
        console.log("Half week gone") 
            break 

    case "Friday": 
        console.log("TGIF") 
            break 

    case "Saturday": 
        console.log("Weekend loaded") 
            break 

    case "Sunday": 
        console.log("Funday. Yeyyyy!") 
            break 

    default: 
        console.log("There is no such day") 
            break 
}
