const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
let num = input.split("\n").map(Number);

let sum = 0;
let del = [];

num.forEach((x) => {
  sum += x;
});

num.sort(function (a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
});

for (let i = 0; i < 9; i++) {
  for (let j = i; j < 9; j++) {
    if (sum - num[i] - num[j] == 100) {
      del.push(i);
      del.push(j);
      break;
    }
  }
}
num.splice(del[0], 1);
num.splice(del[1] - 1, 1);

num.forEach((x) => {
  console.log(x);
});
