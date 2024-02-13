let arr = ["red","blue","green","black"]

arr.push("white");//inert into last element
console.log(arr);

arr.unshift("yello");// insert into first element
console.log(arr);

arr.splice(0,2); // remove middle element
console.log(arr);

console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr)
let v = arr.slice(1,3)
console.log(v);
