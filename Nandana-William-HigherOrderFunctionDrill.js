'use strict';

/*function repeat(fn,n){
  for(let i=0;i<n;i++){
    console.log(fn());
  }
}

function hello(){
  console.log('Hello World');
}

function goodbye(){
  console.log('Goodbye world');
}

console.log(repeat(hello,5));
console.log(repeat(goodbye,5));*/


/*function filter(arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}


// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, (name) => name[0] === 'R');
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES*/

/*function hazardWarningCreator(typeOfWarning){
  let warningCounter =0;
  return function(location){
    warningCounter++;
    if(warningCounter===1){
      console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    } else{
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    }
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');

const rocksWarning2 = hazardWarningCreator('snow on the Road');

const rocksWarning3 = hazardWarningCreator('Fire on the Road');

console.log(rocksWarning('Main St and Pacific Ave'));
console.log(rocksWarning('Main St and Pacific Ave'));
console.log(rocksWarning('Centinela Ave and Olympic Blvd'));
console.log(rocksWarning2('Main St and Pacific Ave'));
console.log(rocksWarning2('Main St and Pacific Ave'));
console.log(rocksWarning3('Centinela Ave and Olympic Blvd'));
console.log(rocksWarning3('Main St and Pacific Ave'));
console.log(rocksWarning3('Main St and Pacific Ave'));*/

/*function turtleMovement(array) {
  return array.filter(filterFunction);
}

const turtleMoves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
let filteredMoves = turtleMoves.filter(tm => tm[0] >= 0 && tm[1] >= 0);
let mappedMoves = filteredMoves.map(tm => tm[0] + tm[1]);
let eachFilteredMove = mappedMoves.forEach((tm, i = 1) => {
  console.log(`Movement #${i++}: ${tm}`);
});

console.log(filteredMoves);
console.log(mappedMoves);
console.log(eachFilteredMove);*/

const input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let newArray = input.split(' ');
//newArray.unshift('');
let reduceResult = newArray.reduce( (acc,word) => {
  if (word.length === 3) {
    acc += ' '; 
  } else {
    acc += word.slice(-1).toUpperCase();
  }
  return acc;
}, '');


console.log(reduceResult);