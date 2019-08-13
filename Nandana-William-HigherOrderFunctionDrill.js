function repeat(fn,n){
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
console.log(repeat(goodbye,5));
