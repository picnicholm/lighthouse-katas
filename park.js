const park = (spots, vehicle) => {
  // Set coordinate's default.
  let coordinate = false;
  // Loop through the first array which are the rows that contain more arrays.
  for (let x = 0; x < spots.length; x++) {
    // Loop through the coloumns which are the arrays within the first array to access the spots.
    for (let y = 0; y < spots[x].length; y++) {
      // Assign spot to the variable cooridate depending on variable type.
      // Regular cars park in R
      if (vehicle === "regular") {
        if (spots[x][y] === "R") {
          coordinate = [x, y];
        }
        // Small cars park in R or S
      } else if (vehicle === "small") {
        if (spots[x][y] === "R" || spots[x][y] === "S") {
          coordinate = [x, y];
        }
        // Motorcycles park in R, S or M
      } else if (vehicle === "motorcycle") {
        if (spots[x][y] === "R" || spots[x][y] === "S" || spots[x][y] === "M") {
          coordinate = [x, y];
        }
      }
    }
  }
  return coordinate;
};

console.log(
  park(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"], // 5
    ],
    "regular"
  )
);

console.log(
  park(
    [
      ["M", "M", "M", "M"],
      ["M", "s", "M", "M"],
      ["M", "M", "M", "M"],
      ["M", "M", "r", "M"],
    ],
    "small"
  )
);

console.log(
  park(
    [
      ["s", "s", "s", "s", "s", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["S", "r", "s", "m", "r", "s"],
      ["S", "r", "s", "m", "R", "s"],
      ["S", "r", "S", "M", "m", "S"],
    ],
    "motorcycle"
  )
);
