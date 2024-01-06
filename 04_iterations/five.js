const coding=["js","ruby","python","java"]
// coding.forEach( function (item){
//     console.log(item)
// })
// coding.forEach( (item) =>{
//     console.log(item)
// })
// function printme(item){
//     console.log(item)
// }
// coding.forEach(printme)

// coding.forEach( (item,index,Array) =>{
//    console.log(item,index,Array)
// })
const mycoding=[
    {
        language:'javascript',
        languagefilename:'js'
    },
    {
        language:'python',
        languagefilename:'py' 
    },
    {
        language:'java',
        languagefilename:'java'
    }
]
mycoding.forEach( (item)=>{
    console.log(item.languagefilename)
})