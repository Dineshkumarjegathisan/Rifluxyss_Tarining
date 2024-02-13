let person = {
    name : "Dinesh",
    age : 25 ,
    getDet : function()
    {
        console.log(this.name +" : "+ this.age );
    }
}
//person.getDet();//it works scop is this keyword ref to person

// let demo = person.getDet ;
// demo();
let getMember = {
    name : "kumar",
    age : 45 
}

let getdet = person.getDet.bind(getMember);
getdet();