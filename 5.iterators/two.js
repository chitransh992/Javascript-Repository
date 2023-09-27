//for of loop

const arr = [1,2,3,4,5]

for(const i of arr){
    console.log(i);
}

const greeting = "Hello world"

for(const i of greeting){
    console.log('Each character of greet is '+i)
}

//Map

const map = new Map()

map.set("IN","India")
map.set("Fr","France")
console.log(map)

for(const [key,value] of map){
    console.log(key,'->',value)
}

//for of loop does not run here

const myObject = {
    game1: 'COC',
    game2:'PUBG'
}

for(const [key,value] of myObject){
    console.log(key,'->',value)
}