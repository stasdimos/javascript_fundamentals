

function setHeight(newHeight) {
  this.height = newHeight;
}

var square = new Object();
square.setHeight = setHeight;







// ----------

var myObject = {
  first_property; "first"
  second_property; "second"
};

myObject.first_property;
myObject['first_property'];

myObject.third_property = "third";
myObject["fourth_property"] = "fourth";

var julie = new Object();






// -----------------
var aGlobal = "Hello";

function myFunction(){
  var innerVar = "Value";
  console.log(innerVar);

  function myInnerFunction() {
    var innerInnerVar = " inner inner!";
    aGlobal = "OHAI";
    console.log(innerVar);
    console.log(innerInnerVar);
  }

  // console.log(myInnerFunction);
  return myInnerFunction
}

var myInnerFunction = myFunction();
myInnerFunction();

// myFunction();
// console.log(aGlobal);
