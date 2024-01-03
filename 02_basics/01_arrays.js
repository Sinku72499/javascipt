// array
const myarray=[3,5,4,3]
const myarray2=new Array(33,44,22,4,4)
// console.log(myarray[2])

// Array methods
//myarray.push(6)//add a no
// myarray.pop()// delete last digit no.
// myarray.unshift(9)//add from starting 
//myarray.shift()// remove from starting
// console.log(myarray.includes(9))
// console.log(myarray.indexOf(4))

// const newarray=myarray.join()
// console.log(myarray)
// console.log(newarray)
// console.log(typeof newarray)

// slice it does not change the original array and not manipulate original array and not 
//include last no,  
//splice it manipulates the original array and includes the last no.


//************************************ARRAY PART 2***************************************** */

const marvel_heros=["ironman","thor","spiderman"]
const dc_heros=["superman","flash","batman"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros)
//console.log(marvel_heros[3][1]);//output=>[ 'ironman', 'thor', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//const allheros = marvel_heros.concat(dc_heros)
//console.log(allheros)// output=>[ 'ironman', 'thor', 'spiderman', 'superman', 'flash', 'batman' ]

//const all_newheros=[...marvel_heros,...dc_heros]// spread operator
//console.log(all_newheros)
// const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const realarray=anotherarray.flat(Infinity)
// console.log(realarray)
/*output=>[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]*/

//console.log(Array.isArray("sinku")) //output=>false
//console.log(Array.from("sinku"))//output=>[ 's', 'i', 'n', 'k', 'u' ]
//console.log(Array.from({name:"sinku"}))//output=>[]

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))//output=>[ 100, 200, 300 ]