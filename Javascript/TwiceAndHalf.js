const numbers= [0, 2, 4, 6, 8, 10, 12, 14, 16]
const twice =[];
const half =[];

for(var i=0;i<numbers.length;i++)
{
    twice.push(numbers[i]*2);
    half.push(numbers[i]/2);
}

console.log(twice);
console.log(half);