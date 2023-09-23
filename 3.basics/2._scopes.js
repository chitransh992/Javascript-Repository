// we didnot use var because it can be printed globally even if it is declared locally

// var c = 300

if(true){
    let a = 10
    const b = 20
    var c = 30    //here var is declared locally
}

// console.log(a)
// console.log(b)
console.log(c)   // Here, var is printed globally

//Therefore, we always use 'let' instead of 'var'


//Nested Scope

function one(){
    const username = "Chitransh"

    function two(){
        const age = 20
        console.log(username)
    }
    // console.log(age)
    two()
}
// one()

if(true){
    const username = "Chitransh"
    if(username == "Chitransh"){
        const age = 40
        console.log(username + age)
    }
    // console.log(age)
}
// console.log(username)

// a variable can store function in javascript

const add = function(num){
    return num+1
}
console.log(add(1))

