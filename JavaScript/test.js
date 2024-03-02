const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim();

let arr = input.split("\n").map(Number);

for (let i = 1; i <= arr[0]; i++) {
  let cnt = 0;
  let answer = [arr[1], 0, 0];
  cnt += 1;
  while (1) {}
  console.log(cnt);
}
