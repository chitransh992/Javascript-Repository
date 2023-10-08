class User{
    constructor(username,password){
        this.username = username
        this.password =password
    }
    get username(){
        return this._username.toUpperCase();
    }
    set username(value){
        this._username = value
    }
}
const one = new User("Chitransh","abc")
console.log(one.username)