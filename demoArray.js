// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

let arr = [-3, 8, 7, 6, 5, -4, 3, 2, 1] ;

for(let i =0 ; i< arr.length ; i++)
{
    for(let j = 0 ;j<arr.length ; j++)
    {
        if(arr[j]>arr[i])
        {
            console.log(arr[j]);
        }
    }
}