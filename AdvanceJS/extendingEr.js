class ValidationError extends Error {
    constructor(message)
    {
        super(message)
        this.name = "ValidatonError"
    }
}
function readUser (json)
{
    let user = JSON.parse(json)
    if(!user.age)
    {
        console.log("No field : Age");
    }
    if(user.name)
    {
        console.log("===>",user.name);
    }
    return user ;
}

try {
    
   readUser('{ "name" "dinesh" }');
} catch (err) {
    if(err instanceof ValidationError)
    {
        console.log("Invalid " + err.message);
    }
    if(err instanceof SyntaxError )
    {
        console.log(err)
    } 
}


