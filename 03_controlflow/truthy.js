// falsy value:      false,0,-0,BigInt,0n,(""),NaN,Undefined,Null

// truthy value:     "0","False"," ",[],{},function(){}

// nullish coalesing operator (??): null ,undefined 
// let val1;
// val1=5??10//output=>5
// val1=null??10//output=>10
// val1=undefined??10//output=>15
// val1=null??5??10//output=>5


// console.log(val1)

// terniary operator 
// condition ?true:false
const icecream=100
icecream>=80?console.log("more than 80"):console.log("less than 80")