// function addtwonumber(number1,number2){
//     console.log(number1+number2)
// }
//const sum=addtwonumber(3,7)// output=>10
//console.log(sum)//output=>undefined

function addtwonumber(number1,number2){
    //let sum=number1+number2
    //return sum// return ke baad kuch v likh do kuch v execute ni hoga
    return number1+number2
}
const sum=addtwonumber(3,7)
//console.log("sum:",sum)//output=>sum: 10

function isloggedin(username="sam"){
    if(username===undefined/*!username*/){
        console.log("Please enter a username")
        return

    }
    return `${username} is just logged in this account`
}
// const result=isloggedin("Sinku")
// console.log(result)

//console.log(isloggedin("Sinku"))

function calculatecartprice(...num1){
    return num1
  // (...) rest operator and spread oprator
    
}
//console.log(calculatecartprice(200,400,500))
const user={
    name:"sinku",
    price:199
}
function handleobject(anyobject){
    console.log(`${anyobject.name} you have to pay ${anyobject.price} amount`)
}
// handleobject(user)
handleobject({
    name:"Guddu",
    price:1000
})

const newarray=[200,300,400,1000,2000,5000]
function lastreturn(petarray){
    return petarray[5]
}
console.log(lastreturn(newarray))