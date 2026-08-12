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
console.log(obj.myFunction(2, 3));