//Convert text input to an array, trim whitespace off the edges, transform every instance of whitspace, and join back to string.
// const urlEncode = (text) =>
//   Array.from(text.trim())
//     .map((x) => (x !== " " ? x : "%20"))
//     .join("");

// const urlEncode = (text) => {
//   let string = text.trim();
//   let encoded = "";
//   for (let character of string) {
//     character === " " ? (encoded += "%20") : (encoded += character);
//   }
//   return encoded;
// };

const urlEncode = (text) => text.trim().replace(" ", "%20");

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
