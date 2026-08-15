// Function Declaration
// function sum(a, b) {
//   return a + b;
// }

// Function Expression (named)
// const myFunction = function sum(a, b) {
//   return a + b;
// }

// Function Expression (anonymous)
// const myFunction = function (a, b) {
//   return a + b;
// }

// Function Arrow
// const myFunction = (a, b) => a + b;

// Function constructor
// const myFunction = new Function("a", "b", "return a + b")

const obj = {
  myFunction(a, b) {
    return a + b;
  }
}

function showTest(a, b) {
  console.log("sum of a + b = ", a+b)
  console.log("Hello world");
}

showTest(12,3)

// console.log(obj.myFunction(2, 3));