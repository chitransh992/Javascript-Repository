//Functions Basics

function saveMyName(){
  console.log("Chitransh Mathur")  
}
saveMyName()


// function addTwoNumbers(number1,number2){
//    console.log(number1+number2)
// }

function addTwoNumbers(number1,number2){
  let result = number1+number2
  console.log("The number is :")
  return result
}
const result = addTwoNumbers(3,4)
console.log(result)


function loginUser(usermessage){
    if(!usermessage){
        console.log("Please write user name")
        return 
    }
   return usermessage+' is logged in'
}

console.log(loginUser())

//Rest Operator(... sign[for ex -> ...num1 can take many values])

function calculateCartPrice(...num1){     
    return num1
}
console.log(calculateCartPrice(1,2,3,4,5))

//Here, val1 and val2 take 1 and 2 value and rest goes to num1

function calculateCartPrice2(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice2(1,2,3,4,5,6))

const user = {
    username : "Chitransh",
    Age : "22"
}
function handleObject(anyObject){
    console.log('Username is '+user.username+' and age is '+user.Age)
}
handleObject(user)


