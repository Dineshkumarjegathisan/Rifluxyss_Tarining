let person = {
    action : "typing"
}

function Membar(name)
{
    this.name = name ;
}
Membar.prototype=person
let p1 = new Membar("Dinesh")
console.log(p1.name);
console.log(p1.action);