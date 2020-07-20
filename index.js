// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Clousre part 1</h1>`;

// function isPrime(v) {
//     if (v <= 3) {
//         return v > 1;
//     }
//     if (v % 2 == 0 || v % 3 == 0) {
//         return false;
//     }
//     var vSqrt = Math.sqrt(v);
//     for (let i = 5; i <= vSqrt; i += 6) {
//         if (v % i == 0 || v % (i + 2) == 0) {
//             return false;
//         }
//     }
//     return true;
// }

var isPrimeCache = (function isPrime1(v) {
  var primes = {};
  return function isPrime1(v) {
    if(v in primes) {
      console.log('From cache...');
      return primes[v];
    }
    if (v <= 3) {
        return (primes[v] = v > 1);
    }
    if (v % 2 == 0 || v % 3 == 0) {
        return (primes[v] = false);
    }
    var vSqrt = Math.sqrt(v);
    for (let i = 5; i <= vSqrt; i += 6) {
        if (v % i == 0 || v % (i + 2) == 0) {
            return (primes[v] = false);
        }
    }
    return (primes[v] = true);
  };
})();

console.log(isPrimeCache(300));
console.log(isPrimeCache(300));