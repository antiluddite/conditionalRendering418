import React from "react";
// import Login from "./Login";

//Used for if/else and ternerary isLoggedIn
// let isLoggedIn = false;

// const currentTime = new Date().getHours();
const currentTime = new Date(2019, 11, 1, 18).getHours();
console.log(currentTime);

// Using if else render
// function renderConditionally() {
//   //if (isLoggedIn === true)
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

// NOTES ON && in JS
// (EXPRESSION && EXPRESSION)
// var x = 5;
// (x > 3 && x < 7)

// NOTES ON && in React
// CONDITION && EXPRESSION
// true && EXPRESSION
// false && -EXPRESSION-

//NOTES ON ternary operator is an expression not a statement
// CONDITION ? DO IF TRUE : DO IF FALSE
// isCloudy === true ? bringUmbrella() : bringSunscreen()

//Ternerary for logged in
// function App() {
//   return (
//     <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
//   );
// }

//Ternery for working past 12 midday
// function App() {
//   return (
//     <div className="container">{
//       currentTime > 12 ?
//       <h1>Why are you still working?</h1> :
//       null
//       }</div>
//   );
// }

//Using react &&
function App() {
  return (
    <div className="container">
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
}
export default App;
