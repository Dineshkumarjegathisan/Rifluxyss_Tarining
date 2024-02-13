// let recipeMap = new Map([["tomoto",300],["cucumber",500],["banana",350],["onoian",900]])
// // for(let vegatable of recipeMap.keys()){
// //     console.log(recipeMap[vegatable]);
// // }
// for(let vegatable of recipeMap.entries())
// {console.log(vegatable) ;
// }
// for(let vegatable of recipeMap.get())
// {
//     console.log(vegatable);
// }

console.log("we can use key a")
let person = {
    'first Name'  : " Dinesh  ",
    'last Name'   : "kumar J"
} 
let visitCount = new Map();
visitCount.set(person['first Name'],"ravi") ;

console.log(visitCount.get(person['first Name']));