### 2557: Hello World

```jsx
console.log("Hello World!");
```

-

### 1000: A+B

```jsx
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

list = input.split(" ");

console.log(parseInt(list[0]) + parseInt(list[1]));
```

- 자바스크립트로 백준에서 코테를 진행 할 때는 입력을 받는 부분에 대해서 따로 처리를 해줘야된다.
- toString()은 입력받은 부분에 대해서 문자열로 바꿔주는 부분, trim()은 문자열 양쪽 공백을 지워주고 정리를 해서 반환 해주는 함수라고 생각을 하면 된다. 코테를 칠 때 그러면 그 부분에 대해서 생각을 하고 만약에 위의 문제 처럼 정수가 필요한 경우이면 따로 처리를 해주는 식으로 많이 쓰는 것 같다.

[[백준] NodeJs/Javascript 입력값 받는 방법](https://velog.io/@imysh578/백준-NodeJsJavascript-입력값-받는-방법)

### 1001: A-B

```jsx
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

list = input.split(" ");

console.log(parseInt(list[0]) - parseInt(list[1]));
```

### 10998: A\*B

```jsx
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

list = input.split(" ");

console.log(parseInt(list[0]) * parseInt(list[1]));
```

### 10869: 사칙연산

```jsx
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

list = input.split(" ");
console.log(parseInt(list[0]) + parseInt(list[1]));
console.log(parseInt(list[0]) - parseInt(list[1]));
console.log(parseInt(list[0]) * parseInt(list[1]));
console.log(parseInt(parseInt(list[0]) / parseInt(list[1])));
console.log(parseInt(list[0]) % parseInt(list[1]));
```

- 이거 이렇게 푸는게 맞나 싶음, parseInt() 안에 parseInt()는 아닌 거 같음. split() 해줄 때 int형태로 바꿔서 해주는 방식을 찾아봐야 될 듯함.

### 10869: 사칙연산

```jsx
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

list = input.split(" ");
console.log(parseInt(list[0]) + parseInt(list[1]));
console.log(parseInt(list[0]) - parseInt(list[1]));
console.log(parseInt(list[0]) * parseInt(list[1]));
console.log(parseInt(parseInt(list[0]) / parseInt(list[1])));
console.log(parseInt(list[0]) % parseInt(list[1]));
```

### 10926: ??!

```jsx
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(input + "??!");
```

### 18108: **1998년생인 내가 태국에서는 2541년생?!**

```jsx
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(input + "??!");
```

### 10430: 나머지

```jsx
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let list = input.split(" ").map(Number);

let A = list[0];
let B = list[1];
let C = list[2];

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
```

- map으로 다양하게 활용할 수 있는데, map이 반환 해주는 형태로 구성되어 있어서 그런 것 같음.
  - Number라는 형태로 반환 해주도록 작성하면 위에 처럼 받아서 사용할 수 있음.

### 2588: 곱셈

```jsx
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let list = input.split("\n");

console.log(parseInt(list[1][2]) * parseInt(list[0]));
console.log(parseInt(list[1][1]) * parseInt(list[0]));
console.log(parseInt(list[1][0]) * parseInt(list[0]));
console.log(parseInt(list[0]) * parseInt(list[1]));
```

- split 할 때 조건 걸어주는 거

### 2588: 곱셈

```jsx
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let list = input.split(" ").map(Number);

let A = list[0];
let B = list[1];
let C = list[2];

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
```

### 11382: 꼬마 정민

```jsx
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let list = input.split(" ").map(Number);

let answer = 0;

list.map((item) => {
  answer += item;
});

console.log(answer);
```

### 10171: 고양이

```jsx
console.log(`\\    /\\`);
console.log(" )  ( ')");
console.log("(  /  )");
console.log(" \\(__)|");
```

- \ , / 작성할 때 문자열 처리 해주는 거 생각해주기

### 10172: 개

```jsx
console.log(`|\\_/|`);
console.log(`|q p|   /}`);
console.log(`( 0 )"""\\`);
console.log(`|"^"\`    |`);
console.log(`||_/=\\\\__|
`);
```

[[Javascript] 문자열을 숫자 배열로 변환하는 방법 - split(",").map(Number)](https://bo5mi.tistory.com/201)

### 1330: 두 수 비교하기

```jsx
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

list = input.split(" ").map(Number);

console.log(list[0] > list[1] ? ">" : list[0] == list[1] ? "==" : "<");
```

- 삼항 연산자 활용하기

### 9498: 시험 성적

```jsx
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const number = parseInt(input);

if (number >= 90 && number <= 100) {
  console.log("A");
} else if (number >= 80) {
  console.log("B");
} else if (number >= 70) {
  console.log("C");
} else if (number >= 60) {
  console.log("D");
} else {
  console.log("F");
}
```

### 2753: 윤년

```jsx
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const year = parseInt(input);

console.log(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) ? 1 : 0);
```

- 조건 잘 읽기

### 14681: 윤년

```jsx
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const year = parseInt(input);

console.log(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) ? 1 : 0);
```
