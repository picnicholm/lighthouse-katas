//Convert text input to an array, trim whitespace off the edges, transform every instance of whitspace, and join back to string.
const urlEncode = (text) =>
  Array.from(text.trim())
    .map((x) => (x !== " " ? x : "%20"))
    .join("");

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
