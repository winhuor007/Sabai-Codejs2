let numList1 = [7, 14, 5, 19, 26, 42, 13];
let numList2 = [8, 21, 14, 36, 17, 2, 56, 41];
function Median(numList1) {
  let Median;
  for (let i = 0; i < numList1.length - 1; i++) {
    for (let j = i + 1; j < numList1.length; j++) {
      if (numList1[i] > numList1[j]) {
        let temp = numList1[i];
        numList1[i] = numList1[j];
        numList1[j] = temp;
      }
    }
  }
  console.log(numList1);
  if (numList1.length % 2 != 0) {
    Median = numList1[(numList1.length + 1) / 2 - 1]; //-1 (array count from 0th in math count from 1th)
  } else {
    Median =
      (numList1[numList1.length / 2 - 1] + numList1[numList1.length / 2]) / 2;
  }
  return Median;
}
console.log(Median(numList1));
