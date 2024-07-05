const CalculateAverage = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
let average = CalculateAverage(numbers);
console.log(`Average: ${average}`);
