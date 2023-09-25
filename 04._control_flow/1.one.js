//if Statement
// const isUserLoggedIn = true

// if(isUserLoggedIn){

// }

const balance = 500
if(balance => 500) console.log("Test"),console.log("Test 1")           //Do not do this practice,It is unreadable code

const isUserLoggedIn = true
const debitCard = true

//If both are true
if(isUserLoggedIn && debitCard){
    console.log("Can do Shopping")
}

//If only one is true
if(isUserLoggedIn || debitCard){
    console.log("Can do shopping")
}