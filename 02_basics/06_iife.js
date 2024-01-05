// Named iife
// (function chai(){
//     console.log("DB Connected")
// })();// iife
// ()()//iife = global scope ke polution ko htane ke liye iife use krte h 


(() => {
    console.log("DB CONNECTED")
})();

((name) => {
    console.log(`DB CONNECTED ${name}`)
})("sinku");