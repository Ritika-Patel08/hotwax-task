const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const prime=[];
const even=[];
const odd=[];

function Isprime(num)
{
    if (num<=1)return false;
    for(var i=2;i<=Math.sqrt(num);i++)
     {
        if(num%i==0)return false;
     }

     return true;

}

for(var j=0;j<numbers.length;j++)
{
    if(Isprime(numbers[j])){
        prime.push(numbers[j]);
    }
}

for(var i=0;i<numbers.length;i++)
{
    if(numbers[i]%2==0)
    {
        even.push(numbers[i]);
      
    }else {
        odd.push(numbers[i]);
    }
}


console.log(even);
console.log(odd);
console.log(prime);
