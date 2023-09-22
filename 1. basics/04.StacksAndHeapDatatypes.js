
//primitive datatype(int,Boolean) === Stack memory
// Non Primitive Datatype(array,classes,interface) == Heap memory


//for stack memory copy is allocated and for heap memory reference is allocated

//example -- stack memory
let user1 = "rohit"
let user2 = user1
user2 = "Raman"

console.log(user1)
console.log(user2)

//here, the copy is provided hence the value is changes here

//example -- heap memory

let userOne = {
     userName: "Chitransh",
     upi: "user@sbi"
}

let userTwo = userOne

userTwo.upi ="user@pnb"

console.log(userOne.upi)
console.log(userTwo.upi)

// in this example, the reference of the copy is provided from the heap memory hence it will change the value

