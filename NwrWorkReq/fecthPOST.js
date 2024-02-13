let user = {
    "name" : "agfgsgf",
    "age " : "26"
}

let opt = {
    method : "POST",
    headers :{
        'contentType' :'application/json;charset=utf-8'
    },
    body :JSON.stringify(user)
}

let fectRes = fetch('http://dummy.restapiexample.com/api/v1/create',opt)
.then(res =>{res.json})
.then(e =>{console.log(e)})