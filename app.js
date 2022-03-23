// Solution 1

const calculate = (...a) => (...b) => [...a, ...b].reduce((acc, i) => acc + i, 0);

// const calculate=(...x)=>(...y)=> {
//     return [].concat(x,y).reduce((a,b)=>a+b,0)

// Solution 2


// function calculate(...a) {
//     const s = a.reduce((a,b)=>a+b, 0);
//     return function(...b) {
//       return s + b.reduce((a,b)=>a+b, 0);
//     }
//   }

// Solution 3


const a = calculate(1, 4, 6)(2, 3, 3)
console.log(`Answer: ${
   a
}`);