// function fact (num){
//     if(num ==0)
//     return 1;
//     else
//     {
//         let result =  num * fact(num - 1);
//         return result ;
//     }  
// }
// console.log(fact(5));

function oddEve(number)
{
    if(number == 0 )
    return "even"
    if(number == 1)
    return "odd"
    else
    return oddEve(number - 2 )
}
console.log(oddEve(10)) ;
