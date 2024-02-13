//parent class properties are available in child class

function outer()
{
    let a = 5 ;
    function inner(b)
    {
        return a + b ;

    }
    return inner ;
}
const result = outer();
console.log(result(5))