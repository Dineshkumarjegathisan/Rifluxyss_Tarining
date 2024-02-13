let obj = {
    a : 5,
    b : 6 
};
function demo (){
    obj.c = 7 ;
    Object.assign(obj );
    //console.log(obj);
}
demo();
console.log(obj);