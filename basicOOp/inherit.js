class Animal {
    
    constructor(speed,thing)
    {
        this.speed = speed ;
        this.thing = thing ;
    }
    walk ()
    {
        console.log(" im walking at ",this.speed)
    }
    eat()
    {
        console.log(" im eating ",this.thing)
    }
}
class cow extends Animal
{
    walk()
    {
        console.log('im cow method')
    }
}

let animal  = new Animal(10,'banana');
animal.eat();
animal.walk();
let a1 = new cow();
a1.walk();