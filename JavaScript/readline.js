const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  //입력받을 값 처리
  number = parseInt(line);
  for (let i = 1; i < 10; i++) {
    console.log(number, "*", i, "=", number * i);
  }

  rl.close();
}).on("close", function () {
  //문제 풀이 로직
  process.exit();
});
