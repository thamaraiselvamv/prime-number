const checkButton = document.getElementById('check');
const numInput = document.getElementById('num');
const resultDiv = document.getElementById('result');

checkButton.addEventListener('click', () => {
  const num = parseInt(numInput.value);
  if (num <= 1) {
    resultDiv.textContent = 'Please enter a number greater than 1';
    resultDiv.className = '';
    return;
  }
  const isPrime = isPrimeNumber(num);
  resultDiv.textContent = isPrime? `${num} is a prime number` : `${num} is not a prime number`;
  resultDiv.className = isPrime? 'prime' : 'not-prime';
});

function isPrimeNumber(num) {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}