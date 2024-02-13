// let createPerson = {
//     firstName : "Dinesh",
//     lastName : "kumjar J",
//     getFullname(){
//         return this.firstName + this.lastName ;
//     }
// }
// console.log(createPerson.getFullname())


// function createPerson(firstName ,lastName)
// {
//     return{
//         firstName : firstName,
//         lastName : lastName ,
//         getFullname()
//         {
//             return firstName + lastName
//         } 
//     }
// }
// let result = createPerson("Dinesh" , "kumare J")
// console.log(result.getFullname());

function lapTop (initialAmount,totalAmount)
{
    return {
        initialAmount : initialAmount ,
        totalAmount : totalAmount  ,
        getfullAmount (){
            return (this.initialAmount+this.totalAmount);
        }
    }
}
let system = lapTop(1500,500)
console.log(system.getfullAmount());