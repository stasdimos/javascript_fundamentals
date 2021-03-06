// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").


function greaterNum(x, y){
  if (x > y) {
    document.write("The greater number is" + x);
    }else{
      document.write("The greater number is " + y)
    }
}

greaterNum(5,10)
greaterNum(10,5)


// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(lang){
  if (lang == "es"){
      document.write("Olla World");
  } else if ( lang == "de" ) {
      document.write("Deutch world");
  } else if ( lang == "gr" ) {
      document.write("Yasoo World");
  } else {
      document.write("Hello World");
    }
}

helloWorld("gr")

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.


function assignGrade(score){
  if (score >= 80){
    document.write("A!");
  } else if (score >= 70) {
    document.write("B!");
  } else if (score >= 60) {
    document.write("C!");
  } else if (score >= 50) {
    document.write("D!");
  } else {
    document.write("F! You suck.");
  }
}

assignGrade(49)
assignGrade(51)
assignGrade(65)
assignGrade(75)
assignGrade(85)


// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".


// function pluralize(noun, num){
//   if () {};

// }





