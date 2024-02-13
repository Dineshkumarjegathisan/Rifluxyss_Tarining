let arr = ["Dinesh","kumarJ"];

let [firstName,lastName] = arr ;

console.log(firstName + lastName);


let opt = {
    name : "dineshkumar",
    age : 25 
}
let {name , age } = opt ;

console.log("====Nestated Destrucuring=====")
let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };

  let {
    size :{ width , height},
    items :[items1,item2],
    tittle = "menu" 
  } = options;
