// 5. Provided the following  array:
//     [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
//   a. Find the sum, min, and max
//   b. Print “List is full of prime no” if every element is prime
//   c. Print “List has a prime no” if there is a prime no in it
//   d. Remove duplicate values from the list ()

const numbers = [10, 11, 42, 36, 4, 75, 6, 97, 81, 19, 10];
let sum=0;
let min=numbers[0];
let max=numbers[0];
let count=0;
const uniqueNumbers=[];
function Isprime(num)
{
    if (num<=1)return false;
    for(var i=2;i<=Math.sqrt(num);i++)
     {
        if(num%i==0)return false;
     }

     return true;

}

for(var i=0;i<numbers.length;i++)
{
    sum=sum+numbers[i];
}

for(var i=0;i<numbers.length;i++)
{
    if(numbers[i]<min)
    {
        min=numbers[i];
    }
}

for(var i=0;i<numbers.length;i++)
{
    if(numbers[i]>max)
    {
        max=numbers[i];
    }
}

for(var i=0;i<numbers.length;i++)
{
    if(Isprime(numbers[i]))
    {
        count++;
    }
}

for(var i=0;i<numbers.length;i++)
{
    if(uniqueNumbers.indexOf(numbers[i])===-1)
    {
        uniqueNumbers.push(numbers[i]);
    }
}

if(count==numbers.length){
    console.log("List is full of prime number");
}
if(count>=1){
    console.log("List has a prime number");
}
console.log(sum);
console.log(min);
console.log(max);
console.log(uniqueNumbers);
