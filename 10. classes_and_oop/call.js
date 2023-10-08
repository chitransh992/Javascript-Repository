//Example1
function setUserName(username){
    this.username = username
    console.log("Called")
}

function createUserName(username, email, password){
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const one = new createUserName("Chitransh","xyz@gmail.com","123")
console.log(one)


