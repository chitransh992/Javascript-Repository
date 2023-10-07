//Example1 : Inheritance in Javascript
const school = {
    username : "KV school",
}
const Teachers = {
    count : 5
}

Object.setPrototypeOf(Teachers,school)

//Example1
const username = "Chitransh     "
let myScore = "2333         "

String.prototype.trueLength = function(){
    console.log(this)
    console.log("True length is : "+this.trim().length)
}
username.trueLength()

