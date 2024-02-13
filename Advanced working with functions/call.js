let personObj = {
    name: "dinesh"
}
let updateObj = {
    name : "kumar",
    greeting : function (age){
        console.log(this.name ,'age is ', + age )
    }
}
updateObj.greeting.call(personObj,25)
//console.log(finalPrint);