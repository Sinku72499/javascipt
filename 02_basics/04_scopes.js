let a=1000
// const b=20
// var c=30
// scope=>{}
if (true){
    let a=10
    //const b=20
    //var c=30
    //console.log("INNER:",a)
}
//console.log(a)
//console.log(b)
//console.log(c)// it can give ans 30 because of var variable decelaration 
// local scope and global scope ...........

function one(){
    const username="sinku"

    function two(){
        const website="youtube"
        //console.log(username)
    }
    // console.log(website)// gives error because we cannot access website because website is 
    // declare inside the two function
    two()
}
one()


if(true){
    const username="sinku"
    if(username==="sinku"){
        const website=" youtube "
        //console.log(username + website)
    }
    //console.log(website)
}
//console.log(username)

//+++++++interesting++++++++++// declare above or below 
function addone(num){
    return num+1
}
console.log(addone(5))

//+++++++++++2nd method to make function ++++++ declare above and it can bs accessable...
const addtwo=function(num){
    return num+4
}
console.log(addtwo(5))
