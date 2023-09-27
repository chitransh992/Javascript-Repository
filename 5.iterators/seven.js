const Nums = [1,2,3,4,5]

const totalNums = Nums.reduce(function (acc,currVal) {
    console.log(acc+' : is accumulator value and '+currVal+' : is the current Value')
    return acc+currVal
},0)

console.log(totalNums)

console.log("**********************************************")

const itemSet = [{
    item1 : 'Java',
    price : 2000
   },
   {
    item2 : 'Javascript',
    price : 3000
   },
   {
    item3 : 'C++',
    price : 5000
   }
]

const priceToPay = itemSet.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay)


