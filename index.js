// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Clousre part 1</h1>`;

function isPrimeCache(v) {
  return function () {
    if (v <= 3) {
      return v > 1;
    }
    if (v % 2 == 0 || v % 3 == 0) {
      return false;
    }
    var vSqrt = Math.sqrt(v);
    for (let i = 5; i <= vSqrt; i += 6) {
      if (v % i == 0 || v % (i + 2) == 0) {
        return false;
      }
    }
    return true;
  }
}

var dict = {};
function factorize(v) {
  var isPrime = dict[v];
  if(!isPrime) {
    isPrime = isPrimeCache(v);
    dict[v] = isPrime;
  }
  if (!isPrime(v)) {
    let i = Math.floor(Math.sqrt(v));
    while (v % i != 0) {
      i--;
    }
    return [
      ...factorize(i),
      ...factorize(v / i)
    ];
  }
  return [v];
}

console.log(factorize(120));