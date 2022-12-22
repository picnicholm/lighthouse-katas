const vowels = (data) =>
  Array.from(data).filter((letter) => "aeiouAEIOU".includes(letter)).length;

console.log(vowels("orange"));
console.log(vowels("lighthouse labs"));
console.log(vowels("aeiou"));
