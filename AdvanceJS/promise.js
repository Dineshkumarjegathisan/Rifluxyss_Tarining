// let pro = new Promise(function(resolve,reject ){

//     function oddOrEven(a){
//     if(a % 2 == 1)
//     {
//         console.log('i will print after 2 sec');
//         setTimeout(()=>{
//             resolve(`im odd ${a} number`);
//         },2000)
        
//     }
//     else{
//         reject(`im even ${a} number`);
//     }
//     }
//     oddOrEven(5)
// })
// pro.then(
//      v => console.log(v)
//     ,e =>console.log(e)
    
// )
new Promise(function(resolve ,reject){

    function word(str)
    {
        let count = 0 ;
      for(let i =0 ;i<str.length;i++)
      {
        if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u'){
            count++ ;
        }
      }
      resolve(count)
    }
    let s = "bcd"
    word(s);
})
.then(
    a => console.log(`Total count of vowles is : ${a}`),
    b => console.log(`No count of vowles ${b}`)

).catch()(
    
)