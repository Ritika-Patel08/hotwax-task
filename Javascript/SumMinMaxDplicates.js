const numbers2 = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

const sum = numbers2.reduce((acc, num) => acc + num, 0);
const min = Math.min(...numbers2);
const max = Math.max(...numbers2);

console.log('Sum:', sum);
console.log('Min:', min);
console.log('Max:', max);

function isPrime(num) {
    for (let i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num !== 1;
  }
// b. Check if every element is prime
const allPrime = numbers2.every(isPrime);
console.log(allPrime ? 'List is full of prime no' : 'List is not full of prime no');

// c. Check if there is at least one prime number
const hasPrime = numbers2.some(isPrime);
console.log(hasPrime ? 'List has a prime no' : 'List does not have a prime no');

// d. Remove duplicate values from the list
const uniqueNumbers = [...new Set(numbers2)];

console.log('Unique Numbers:', uniqueNumbers);

const uniqueNumbersWithoutMethods = Object.keys(numbers2.reduce((acc, num) => {
  acc[num] = true;
  return acc;
}, {})).map(Number);

console.log(uniqueNumbersWithoutMethods);