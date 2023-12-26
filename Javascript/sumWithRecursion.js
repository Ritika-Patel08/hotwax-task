
function sumOfNumbers(arr,index=0)
{
    if(index==arr.length)
    {
        return 0;
    }
    return arr[index]+sumOfNumbers(arr,index+1);
}

const numbers=[1,2,3,4,5,6];

const result = sumOfNumbers(numbers);

console.log(result);
