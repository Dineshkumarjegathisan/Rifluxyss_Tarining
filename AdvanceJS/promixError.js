new Promise ((resolve , reject )=>{

    function user(json)
    {
       // let js = JSON.parse(json)
        if(json % 2 == 0 )
        {
           console.log('yes')
        }
        else{
            reject(new Error("no field"));
        }
    }
    user(3)
})
.then(
    (v)=>{ console.log(v) }
)
.catch(e=>console.log(e))