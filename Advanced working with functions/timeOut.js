// let timer = function add(a,b)
// {
//      let c = a +  b ;
//      console.log(c);
//      console.log("after time out")
// };
// console.log("before time out")
// setInterval(timer , 4000 ,10 ,10);

var c = 0 ;
var a = 1 ;
let timer = function (){

    c+=2//c = c+2 
    console.log(a+" : "+c);
    a+=1
}
setInterval(timer,2000 )