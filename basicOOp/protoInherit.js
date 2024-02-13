// let animal = {
//     eat : "yes" 
// }
// let rabbit = {
     
// }

// rabbit.__proto__ = animal ;
// console.log(rabbit.eat)

let animal = {
    eats : true ,
    walk(){
        console.log(" im walking ")
    }
}
let rabbit = {
    jump : "yes i can jump ",
    __proto__ : animal 
}
rabbit.walk();
//console.log(rabbit.walk());
// rabbit.__proto__ = animal ;
// console.log(rabbit.__proto__)

console.log("=====")

let goat = {
    eats : "yes " ,
    walk(){

    }
}
let cow = {
    __proto__ :goat 
}

let bull = {
    __proto__ :cow
}
bull.walk = function(){
    console.log ("hiii");
}
goat.walk();
cow.walk();