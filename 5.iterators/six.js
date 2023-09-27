const myNumber = [1,2,3,4,5,6,7,8]

const myNums = myNumber.map((item)=>{ return item+10})
console.log(myNums)

console.log("**********************************************")

//using map chaining

const newNums = myNumber.map((num)=>num*10)
                        .map((num)=>num+1)
                        .filter((num)=>num>=40)
console.log(newNums)

