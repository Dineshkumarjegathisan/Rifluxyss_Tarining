function passByValue(demo)
{
    console.log(demo)
    demo.a = 100 ;
   
}
let demo ={
    a : 1 
}
passByValue(demo)
console.log(demo);