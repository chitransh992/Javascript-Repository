//Example 1
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task completed")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumend");
})

//Example2
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task two !!!")
        resolve();
    },1000)
}).then(function(){
    console.log("Asyn task 2 resolved");
})

//Example3
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Chitransh"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})


//Example4
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Chitransh",password:"123"})
        }
        else{
            reject("ERROR: Something went wrong")

        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("The Promise is resolved or rejected")
})


//Example5
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Chitransh",password:"123"})
        }
        else{
            reject("ERROR:Something went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
    console.log(response) 
    }
    catch(error){
        console.log("ERROR occurred")
    }
}
consumePromiseFive()

//Example6
fetch("https://api.github.com/users/chitransh992")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})

