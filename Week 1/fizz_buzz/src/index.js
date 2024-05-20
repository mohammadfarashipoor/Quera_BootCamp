function fizz_buzz(numbers) {
  const output = [];
  numbers.forEach((num) => {
    if (num % 3 == 0 && num % 5 == 0) {
      output.push("fizzbuzz");
    } else if (num % 3 == 0) {
      output.push("fizz");
    } else if (num % 5 == 0) {
      output.push("buzz");
    } else {
      output.push(num);
    }
  });
  return output.join(", ");
}
console.log(fizz_buzz([3, 6, 7]));
module.exports = fizz_buzz;
