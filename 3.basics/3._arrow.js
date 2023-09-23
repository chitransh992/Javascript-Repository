const username = {
    username : "Chitransh",
    age: "30",

    welcomeMessage: function(){
        console.log( this.username+', welcome abroad !!!')
        console.log(this)

    }
}
// username.welcomeMessage()
// username.username = "Sam"
// username.welcomeMessage()

//here, 'this' will print empty set beacuse it is node envionment so no global objects will be printed 
//but if it is brower then it will print browser actitvities
console.log(this)  

// if we execute 'this' inside a function then it will print function activities
//The below is an arrow function usage
const chai = ()=>{
    console.log(this)
}
chai()

//This is an implicit return arrow function where we do not need to put parenthesis inside function defination

const addTwo = (num1,num2)=>num1+num2
console.log(addTwo(1,2))

//For object return we can use arrow function
const add = ()=> ({name : "Chitransh"})
console.log(add())
