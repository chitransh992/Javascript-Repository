
//Example1
function multipleBy5(num){
    return num*5;
}
multipleBy5.power = 2

console.log(multipleBy5(5))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype)

//Example2
function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    score++;
}
createUser.prototype.print = function(){
    console.log("Score is : "+this.score)
}

const one = new createUser("Chitransh",10)
const two = new createUser("Yash",20)

one.print()
two.print()