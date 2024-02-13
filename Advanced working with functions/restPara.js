// function add(a , b)
// {
//     return  a + b ;
// }
// console.log(add(1,5,2,3));

function  sumAll (...args)
{
    let sum = 0 ;
    for(let num of args)
    {
        sum += num ;
    }
    return sum ;
}
console.log(sumAll(1,2,9,9,));

// function show(firstName,lastName,...tittle)
// {
//     console.log(firstName + lastName );
//     console.log(tittle[0]);
// }
// show("diensh "," kumar J ","sowtware Engineer","disign Engineer");

console.log("Arrow Functins");

let demo = (firstName,lastName,...tittle)=>{
    console.log(firstName + lastName );
    console.log(tittle[0]);
}
demo("diensh "," kumar J ","sowtware Engineer","disign Engineer")