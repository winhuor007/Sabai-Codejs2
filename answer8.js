listNum = [134, 45, 656, 66, 4, 3, 333, 56, 46];
listNum.sort((a, b) => a - b);
console.log(listNum);

//2th
listNum = [134, 45, 656, 66, 4, 3, 333, 56, 46];
const SortNum = (listNum) => {
  for (let i = 0; i < listNum.length - 1; i++) {
    for (let j = i + 1; j < listNum.length; j++)
      if (listNum[i] > listNum[j]) {
        let temp = listNum[i];
        listNum[i] = listNum[j];
        listNum[j] = temp;
      }
  }
  return listNum;
};
console.log(SortNum(listNum));
