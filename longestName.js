//function takes in an argument which is an array of objects and returns the object at the index whichn holds the longest name.
const longestName = (instructors) => {
  // Start by defining a variable to to hold the name length
  let nameLength = 0;
  // Define a variable which will point to the index holding the name with the longest length
  let longestName;
  // Loop through the array of objects to find name with the longest length
  for (let instructor of instructors) {
    if (instructor.name.length > nameLength) {
      nameLength = instructor.name.length;
      longestName = instructor;
    }
  }
  return longestName;
};

console.log(
  longestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
// console.log(
//   longestName([
//     { name: "Matthew", course: "Web" },
//     { name: "David", course: "iOS" },
//     { name: "Domascus", course: "Web" },
//   ])
// );
