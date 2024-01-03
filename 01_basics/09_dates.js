//Dates
let myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)
 
// let mycreateddate=new Date(2023,0,23)
// console.log(mycreateddate.toDateString())

// let createddate=new Date(2023,0,23,5,23,32)
// let teddate=new Date("2023-01-23")
let mycreateddate=new Date("01-14-2023")
// console.log(mycreateddate.toLocaleString())

// let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(mycreateddate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newdate=new Date()
// console.log(newdate)
// console.log(newdate.getDay())
// console.log(newdate.getMonth()+1)


newdate.toLocaleString('default',{
    weekday:"long",
})
