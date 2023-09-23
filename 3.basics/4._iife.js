//Immediately invoked function expression(iife)

//for example

// function one(){
//     console.log("Hello")
// }
// one()

//we can simplfy this object by wrap it up by () braces and execute () braces
//named iife
(function two22(){
    console.log("Hello");
})();      // we insert ;(semicolon), if we want to write two iife inside one file

//unnamed iife
((name)=>{
    console.log("Hello there")
})()