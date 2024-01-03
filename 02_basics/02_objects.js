// Singleton
// objects constructor

// object literals
// const mysym=Symbol("key1")
// const jsuser={
//     name:"sinku",
//     "full name":"Sinku Kumar Singh",
//     age:18,
//     [mysym]:"mykey1",
//     location:"jaipur",
//     email:"sinku@google.com",
//     isloggedin:false,
//     lastlogondays:["monday","saturday"]

// }
// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(jsuser[mysym])

// jsuser.email="sinku@bauaa.com"
// Object.freeze(jsuser)
// jsuser.email="sinku@kauaa.com"
// console.log(jsuser)
// jsuser.greeting=function(){
//     console.log("hello JS user")
// }
// jsuser.greetingtwo=function(){
//     console.log(`hello JS user,${this.name}`);
// }
//console.log(jsuser.greeting)//output=>[Function (anonymous)]
//console.log(jsuser.greeting())//output=>hello JS user
//console.log(jsuser.greetingtwo())//output=>hello JS user,sinku

/*********************************OBJECT PART 2****************************************** */

// const tinderuser=new Object()
// const tinderuser={}
// tinderuser.id="123abc"
// tinderuser.name="sammy"
// tinderuser.isloggedin=false
//console.log(tinderuser);//output=>{ id: '123abc', name: 'sammy', isloggedin: false }

// const regularuser={
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"sinku",
//             lastname:"kumar"
//         }
//     }
// }
// console.log(regularuser.fullname.userfullname.firstname)
// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// const obj4={5:"c",6:"b"}
//const obj3={obj1+obj2}cannot be done
//const obj3=Object.assign({},obj1,obj2,obj4)// we can also use spread const obj3={...obj1,...obj2,...}
//console.log(obj3)//output=>{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'c', '6': 'b' }

// console.log(Object.keys(tinderuser));// it gives all key in an array
//console.log(Object.values(tinderuser));// it gives all values in an array 
//console.log(Object.entries(tinderuser));// it gives all key and values in separate array
 
//console.log(tinderuser.hasOwnProperty('isloggedin'))// output=>true

/************************************OBJECT PART 3******************************************* */

const course={
    coursename:"JS in hindi",
    price:"999",
    courseInstructor:"sinku"
}
// course.courseInstructor
const {courseInstructor:instructor}=course
console.log(instructor);
//json
// {
//     "name":"sinku"
//     "price":"free"

// }