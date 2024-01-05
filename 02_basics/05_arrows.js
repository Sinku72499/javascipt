const user={
    username:"sinku",
    price:999,
    welcomemessage: function(){
        console.log(`Hlo ${this.username}, welcome to our website pay ${this.price}`)
        console.log(this)/*output=>{
            username: 'sinku',
            price: 999,
            welcomemessage: [Function: welcomemessage]
          }
          Hlo sammy, welcome to our website pay 1000
          {
            username: 'sammy',
            price: 1000,
            welcomemessage: [Function: welcomemessage]
          }*/
    }
}
// user.welcomemessage()
// user.username="sammy"
// user.price=1000
// user.welcomemessage()

//console.log(this)//output=>{}
// function chai(){
//     let username="sinku"
//     console.log(this.username)
// }
// chai()
//output=>undefined 

const chai=() =>{   // function ke jagah pe => arrow function lag gya 
    let username="sinku"
    console.log(this.username)
}
// chai()

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(5,3))

//implicit return jisme return ni lagta
// const addtwo=(num1,num2)=> (num1+num2)
const addtwo=(num1,num2)=> ({username:"sinku"})

console.log(addtwo(5,3))