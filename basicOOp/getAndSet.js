let member = {
    firstName : "manick",
    lastName  : "basha",
    get getname(){
        return `${this.firstName , this.lastName}`
    },
    set setname (value){
        return [this.firstName , this.lastName] = value.split(" ");
    }
}
console.log(member.getname)
member.setname = "Dinesh kumar " ;
console.log(member.firstName , member.lastName)
