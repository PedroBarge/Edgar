//----------------------------------------------------------------
// Challenge 1
//----------------------------------------------------------------
//Create a function called sheldonize like the following example: "batatas".sheldonize(2) // knock knock batatas; knock knock batatas;
String.prototype.sheldonize = function (numberOfTimes) {
  let value = "";

  for (let i = 0; i < numberOfTimes; i++) {
    const isLastValue = i === numberOfTimes - 1;

    value += `Knock knock ${this}${isLastValue ? "!" : ","}`;
  }
  return value;
};

console.log("batatas".sheldonize(2));

//----------------------------------------------------------------
// Challenge 2
//----------------------------------------------------------------
/*
  Create a function called sumNumbersOrStrings like the following example:
  [1,2,3,4,5].sumNumbersOrStrings() //15
  ["Luke","I'm", "your", "uncleeeee", "!"].sumNumbersOrStrings() //Luke I'm your uncleeeee !
  [1,"I'm", "your", "uncleeeee", "!"].sumNumbersOrStrings() //All elements should be Numbers or Strings
*/

Array.prototype.sumNumbersOrStrings = function () {
  const arrayOfStrings = this.every((elem) => typeof elem === "string");
  const arrayOfNumbers = this.every((elem) => typeof elem === "number");

  let value = 0;
  if (arrayOfNumbers) {
    for (let i = 0; i < this.length; i++) {
      const element = this[i];
      value += element;
    }
    //or
    //return this.reduce((total, elem) => total + elem, 0);
    return value;
  }
  if (arrayOfStrings) {
    return this.join(" ");
  }
  return "All elements should be Numbers or Strings";
};

console.log([1, 2, 3, 4, 5].sumNumbersOrStrings());
console.log(["Luke", "I'm", "your", "uncleeeee", "!"].sumNumbersOrStrings());
console.log([1, "I'm", "your", "uncleeeee", "!"].sumNumbersOrStrings());
//----------------------------------------------------------------
// Xeila
//----------------------------------------------------------------

function xeila() {
  this.number = 2;
}

rodrigo = new xeila();

xeila.prototype.message = "hi";

console.log(rodrigo.message);

console.log(rodrigo.__proto__);

pedro = new xeila();

console.log(rodrigo);

console.log(pedro.message);

xeila.prototype.toString = function toString() {
  return this.number;
};

console.log(rodrigo.toString());

//----------------------------------------------------------------

console.log(["Pedro", "Daniel", "Barge"].indexOf("Daniel"));

if ("Pedro" === String("Pedro")) {
  console.log(true);
} else console.log(false);
