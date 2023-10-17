function isPrime(n) {
  // Base case
  if (n <= 1) return false;
  // Check from 2 to n-1
  for (let i = 2; i < n; i++) if (n % i == 0) return false;
  return true;
}
// console.log('🚀 ~ file: prime.js:14 ~ isPrime(11) :', isPrime(10));
