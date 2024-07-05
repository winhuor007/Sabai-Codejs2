const Fact = (num) => {
  if (num < 0) return "Please Enter Positive Number";
  else if (num == 0) return 1;
  else return num * Fact(num - 1);
};
console.log(Fact(6));
