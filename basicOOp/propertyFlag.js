let person = {
    name : "dinesh",
    age  : 24  
}
let descriptor = Object.getOwnPropertyDescriptor(person ,"name");
console.log(descriptor)
Object.defineProperty(person ,"name" ,{enumerable:false})
person.name = "pat"
console.log(person)

//Object.defineProperty(person,'name,{}')name