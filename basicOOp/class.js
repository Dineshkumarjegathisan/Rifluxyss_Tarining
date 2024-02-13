class Myclass {
    constructor(name)
    {
        this.name = name 
    }
    display()
    {
       
        console.log( this.name,'','im display method ');
    }
}

let result = new Myclass('dinesh');
result.display();