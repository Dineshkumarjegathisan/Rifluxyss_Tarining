class Mycalss {
    constructor (name ,age )
    {
        this.name = name ;
        this.age = age ;
    }
    show()
    {
        console.log(`hi ${this.name}i am non static method `)
    }
    static display()
    {
        console.log(`hi ${this.name} i am static method`)
    }
}
let myclass = new Mycalss('dinesh',25);
// myclass.show();
Mycalss.display();