const myArr = new Array(1,2,3,4);
console.log(myArr[3])

//Array Methods
myArr.push(3)
console.log(myArr)

myArr.pop()

myArr.unshift(9)   //insert in first place of array
console.log(myArr)

myArr.shift()     //used to remove
console.log(myArr)

console.log(myArr.indexOf(3))
console.log(myArr.includes(2))

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

//slice, splice

console.log("A ",myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B ",myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log(myArr)

console.log(Array.isArray("Chitransh"))
console.log(Array.from("Chitransh"))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

