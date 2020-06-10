//calling functions
//1 normally
function sayHi(){
    console.log('hi');
} 

sayHi();
//2 as a variable
var sayBye = function(){
    console.log('bye');
};
sayBye(); 
//3   psasing function in another function
function callFunction(fun){
    fun();
};
callFunction(sayBye);