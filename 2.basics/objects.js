
//Object literals

const mySym = Symbol("key1")

const jsUser = {
    name:"Chitransh",
    age : 18,
    email:"Yash@gmail.com",
    mySym : "MySymKey",
    [mySym] : "MySymKey"
}

console.log(jsUser.age)
console.log(typeof jsUser.mySym)
console.log(jsUser[mySym])

// jsUser.email = "chitransh@gmail.com"
// Object.freeze(jsUser)
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS User")
}
jsUser.greetingTwo = function(){
    console.log('Hello Js User',this.name)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())

// //This is a Singlaton Object
// const tinderUser = new Object()
// console.log(tinderUser)

// //This is not an Singlation Object
// const tinderUser1 = {}
// console.log(tinderUser1)

// tinderUser1.id = "123",
// tinderUser1.name = "Yash"

// console.log(tinderUser1)

// const regularUser = {
//     email: "Yash@gmail.com",
//     fullname:{
//         userfullname: {
//             firstname : "Chitransh",
//             lastname : "Mathur"
//         }
//     }
// }
// // console.log(regularUser)



