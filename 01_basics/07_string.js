const name="sinku"
const id=55

//console.log(name + id+ " value ")//priviously used method
//console.log(`my name is ${name} and my Id is ${id}`) //modern syntax called string intopolation

const myName=new String("Sinku-singh-rajpoot")
// console.log(myName[3])
// console.log(myName.__proto__)
// console.log(myName.length)
// console.log(myName.toUpperCase())
// console.log(myName)
// console.log(myName.charAt(3))
// console.log(myName.indexOf("k"))
const newstring=myName.substring(0,3)
//console.log(newstring)

const anotherstring=myName.slice(-8,4)
//console.log(anotherstring);
// const nstring="     sinku     "
// console.log(nstring)
// console.log(nstring.trim())// trim remove space from start and end 
console.log(myName.split("-"))// replace and includes also checks 
