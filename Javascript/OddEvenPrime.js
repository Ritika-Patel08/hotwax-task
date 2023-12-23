const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = numbers.filter(num => num % 2 === 0);

const odds = numbers.filter(num => num % 2 !== 0);

function isPrime(num) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num !== 1;
}

const primes = numbers.filter(isPrime);

console.log( evens);
console.log(odds);
console.log(primes);