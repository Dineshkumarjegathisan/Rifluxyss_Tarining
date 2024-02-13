let obj1 = {
    sayHi(){
        console.log(`hi ${this.name}` )
    },
    sayBye(){
        console.log(`bye ${this.name }` );
    }
}
class Person{
    constructor(name )
    {
        this.name = name ;
    }
}
Object.assign(Person.prototype,obj1)
let result = new Person("dinesh").sayHi();
result;
// console.log(result);
