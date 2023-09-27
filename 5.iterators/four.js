//for each loop
const coding = ["Js","Ruby","Python","CPP","C"]

coding.forEach( function (item){console.log(item)})
console.log("********************************************")

//using arrow function
coding.forEach((item)=>{console.log(item)})
console.log("***********************************************")

//Taking only reference
function printMe(item){
    console.log(item)
}

coding.forEach(printMe)
console.log("***********************************************")


//for printing all the array indexes
coding.forEach((item,index,array)=>{
    console.log(item,index,array)
})
console.log("************************************************")

//We get output from database in this format , we fetch the values from it using for each loop
const myCoding = [
    {
    languageName : "Java",
    languageFileName : ".java"
    },
    {
        languageName : "Python",
        languageFileName : ".py"
    },
    {
        languageName : "Javascript",
        languageFileName : ".js"
    }
]

myCoding.forEach((item)=>{console.log(item.languageFileName)})
