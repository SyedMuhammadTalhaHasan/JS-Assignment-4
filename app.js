// table
const num = parseInt(prompt("Please Enter a Number"));
for (let i = 1; i <= 10; i++) {
    const result = i * num;
    console.log(`${num} * ${i} = ${result}`);
}

// 5(5!)
function calculateFactorial(n) {
    let result = 1;
    let i = 1;
  
    while (i <= n) {
      result *= i;
      i++;
    }
  
    return result;
  }
  
  const number = 5;
  const factorial = calculateFactorial(number);
  const answer = number * factorial;

  console.log(`${number}(${number}!) = ${answer}`);