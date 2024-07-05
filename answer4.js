const calculateBMI = function (weight, height) {
  return weight / (height * height);
};

// Example usage:
const weight = 70; // in kilograms
const height = 1.75; // in meters
console.log(calculateBMI(weight, height)); // Output: 22.857142857142858
