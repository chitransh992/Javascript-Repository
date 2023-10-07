const user = {
    username : "chitransh",
    loginCount:"8",

    getDetails : function(){
        console.log(this.username)
    }
}
console.log(user.username)
console.log(user.getDetails())

function User(username,loggedIn){
    this.username = username;
    this.loggedIn = loggedIn;

    this.greeting = function(){
        console.log("Welcome"+this.username);
    }
    return this;
}
const userOne= new User("Chitransh",18)
console.log(userOne)
console.log(userOne.constructor)
