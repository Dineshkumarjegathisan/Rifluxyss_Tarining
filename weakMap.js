// let message = " hello " ;
// console.log("=====>"+message);
// message = null;
// console.log(message);

let a = {message : " hello "}
console.log(a.message)
a = null ;
let arr = [a];
console.log(arr)

function weakMap()
{
    let wm = new WeakMap();
    let list = [] ;
    function add(a , b)
    {
        wm.set(a,b);
        list.push(a);
    }
    function show()
    {
        for(let i of list)
        {
            if(wm.has(i))
            console.log((i.name?i.name:i.age)+ " : " + wm.get(i));
        }
    }
    return { add,show }
}
let wm2 = weakMap();
wm2.add({name:"patrick"},"how are you")
wm2.add({age:20},"good age")
wm2.show()

