function* gen()
{
    try {
        let result = yield "2 + 2 = ?" ;
        console.log('the execution doesnot reach here ');
        
    } catch (e) {
        console.log(e)
    }
}
let genarator = gen();
genarator.next().value;
genarator.throw(new Error ('the answer is not found in dataBase '))