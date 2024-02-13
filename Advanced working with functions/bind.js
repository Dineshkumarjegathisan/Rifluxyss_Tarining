export let nameObj = {
    name : "dinesh"
}
let updateName = {
    name : "kumar ",
    sayHai : function(){
        console.log(this.name);
    }
}
console.log("before call bind method ");
updateName.sayHai();
console.log('after call bind method');
let finalBind = updateName.sayHai.bind(nameObj);
finalBind();

