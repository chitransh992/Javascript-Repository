//falsy values

// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truely values
//"0",'false'," ",[],{},function(){}

const emptyString = {}

if(Object.keys(emptyString).length === 0){
    console.log("Object is empty")
}

//Nullish Coalsing operator(??): null defination

let val1;
val1 = 5 ?? 10
val2 = null ?? 4
val3 = null ?? 1 ?? 2

console.log(val2)
console.log(val3)

//Ternary Operator

//condition? True : False

const price = 500
price>=500? console.log("Above"):console.log("Below")