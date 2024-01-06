//for of
// ["","",""]
// [{},{},{},{}]
// const array=[1,2,3,4,5,6,7]
// for (const val of array) {
//     console.log(val)
    
// }

// const greeting ="hello world"
// for (const greet of greeting) {
//     console.log("each letter is :",greet)
    
// }

//map =>only contain unique value 
const map = new Map()
map.set('IN',"india")
map.set('USA',"United State of america")
map.set('Fr',"France")
map.set('IN',"india")
//console.log(map)//output=>Map(3) {
//     'IN' => 'india',
//     'USA' => 'United State of america',
//     'Fr' => 'France'
//   }
for (const [key,value] of map) {
    //console.log(key,':-',value)
    
}//output=>IN :- india
// USA :- United State of america
// Fr :- France
// object cannot be iterated using for of loop

