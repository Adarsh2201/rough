// var time= 0;
// console.log("hello world");
// var timer =  setInterval(function(){
//     time +=  2;
//     console.log(time+"seconds passed");
//     if(time > 5){
//         clearInterval(timer);
//     }
// },2000);


// modules (using the  function in counter)
var count = require('./count');
console.log(count.counter(['a','b','c','d']));
console.log(count.adder(10,5));
console.log(count.adder(count.pi,5));
