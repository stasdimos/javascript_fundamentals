// Exercises: Variables

var x;
var x = 10

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var numberOfChildren = 3;
var partnerName = "girl";
var location = "toronto";
var jobTitle = "coder";


document.write("You will be a " + jobTitle + " in" + location + " and married to " + partnerName + " with" + numberOfChildren + " kids")


// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.


var birthYear = 1987;
var present = 2014;

document.write("Your Age is " + present - birthYear)


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 27;
var maxAge = 100;
var amountDay = 100;

document.write("You will need " + ((maxAge - currentAge) * 365 * 100) + " to last you until the ripe old age of " + maxAge);


// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 10;

document.write("The circumference is " + (2 * 3.14 * radius))
document.write("The area is " + (3.14 * radius * radius))


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius = 20;
var fahrenheit = 80;


document.write(" " + celsius + "C is " + (((celsius * (9/5)) + 32) + "F"))
document.write(" " + fahrenheit + "F is " + (((fahrenheit - 32) * (5/9)) + "C")






