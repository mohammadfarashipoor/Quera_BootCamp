function palindrome(input) {
  // const punctuation = /[!"#$%&'()*â€™+,-./:;<=>?@[\]^_`{|}~ ]/g;
  const punctuation = /[^\w\s]+/g;
  const newText = `${input}`
    .replace(punctuation, "")
    .replace(/\s/g, "")
    .toLocaleUpperCase();
  const reverseText = newText.split("").reverse().join("");

  return newText === reverseText;
}
module.exports = palindrome;
