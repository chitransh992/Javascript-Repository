const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor)

/*
Syntax:
Object.getOwnPropertyDescriptor(object name,its property)


writable – if true , the value can be changed, otherwise it's read-only.
enumerable – if true , then listed in loops, otherwise not listed.
configurable – if true , the property can be deleted and these attributes can be modified, otherwise not.
*/

//Example1

const one = {
    username : "Chitransh",
    password: " 124"
}

console.log(Object.getOwnPropertyDescriptor(one,"username"))

//can change its property by using defineProperty method

Object.defineProperty(one,'username',{
    writable : false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(one,"username"))
