/*
Challenge 1
Create a function that takes an array of numbers and returns an 
array of only the odd numbers. The function must not use
looping or libraries that use looping. 
*/

function oddNum(arr, onpop) {
    var val = arr.pop(); 
    
    onpop(val); 
	
    if (arr.length > 0) oddNum(arr, onpop); 
}
 
var coll = [];
oddNum(a, function(v) { 
	if (v % 2 === 0) 
    coll.push(v); 
 });
