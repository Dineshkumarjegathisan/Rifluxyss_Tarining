// function div(a , b)
// {
//     try {
//         c =  a / b ;
//         console.log(c)
//     } catch (err) {
//         console.log("Error" + err.message)
//     }
  
// }
// let result = div(10 , 0);
// console.log(result);

let jsonObj = '{"age" : 24 }' ; 
try {
    let user = JSON.parse(jsonObj);
    if(!user.name)
    {
        throw new SyntaxError ("this is syntax error") ;
    }
} catch (err) {
   
    console.log("JSON Error : ",err.message);
}



function doAthing ()
{
    nothing();
}
function nothing(){
    throw new Error (" ==> error ");
}
function init(){
    try{
        doAthing();
    }catch(err){
        console.log(err)
    }
}

init() ;

// function doAthing() {
//     byDoingSomethingElse();
// }

// function byDoingSomethingElse() {
//     throw new Error('Uh oh!');
// }

// function init() {
//     try {
//         doAthing();
//     } catch(e) {
//         console.log(e);
//         // [Error: Uh oh!]
//     }
// }

// init();