1. 두수의 차

   ```jsx
   function solution(num1, num2) {
     var answer = 0;
     answer = num1 - num2;
     return answer;
   }
   ```

2. 몫 구하기

   - parseInt()를 통해서 정수형 만들어주기

   ```jsx
   function solution(num1, num2) {
     var answer = 0;
     answer = num1 / num2;
     answer = parseInt(answer);
     return answer;
   }
   ```

3. 나머지 구하기

   ```jsx
   function solution(num1, num2) {
     var answer = -1;
     answer = num1 % num2;
     return answer;
   }
   ```

4. 숫자 비교하기

   - if문 구조
   - == 과 === 의 차이

   ```jsx
   function solution(num1, num2) {
     var answer = 0;
     if (num1 == num2) {
       answer = 1;
     } else {
       answer = -1;
     }
     return answer;
   }
   ```

5. 나이 출력

   ```jsx
   function solution(age) {
     var answer = 0;
     answer = 2022 - age + 1;
     return answer;
   }
   ```

6. 두 수의 합

   ```jsx
   function solution(num1, num2) {
     var answer = -1;
     answer = num1 + num2;
     return answer;
   }
   ```

7. 두 수의 나눗셈

   ```jsx
   function solution(num1, num2) {
     var answer = 0;
     answer = (num1 / num2) * 1000;
     answer = parseInt(answer);
     return answer;
   }
   ```

8. 각도기

   - and, or → &&, ||
   - if, else if, else

   ```jsx
   function solution(angle) {
     var answer = 0;
     if (0 <= angle && angle < 90) {
       answer = 1;
     } else if (angle == 90) {
       answer = 2;
     } else if (90 <= angle && angle < 180) {
       answer = 3;
     } else if (angle == 180) {
       answer = 4;
     }

     return answer;
   }
   ```

9. 짝수의 합

   - for문 작성 → c언어랑 똑같은 스타일

   ```jsx
   function solution(n) {
     var answer = 0;
     for (let i = 0; i <= n; i = i + 2) {
       if (i != 0) {
         answer += i;
       }
     }
     return answer;
   }
   ```

10. 배열의 평균값

    - 배열의 길이 → array.length
    - 배열을 부르는 방법 forEach or map

    ```jsx
    function solution(numbers) {
      var answer = 0;
      numbers.map((number, index) => {
        answer += number;
      });
      answer = answer / numbers.length;
      return answer;
    }
    ```

11. 양꼬치

    1. 문제를 읽을 때 조건 확실하게 확인 하고 적어두기
    2. parseInt 말고 다른 방법은?

    ```jsx
    function solution(n, k) {
      var answer = 0;
      answer = 12000 * n + 2000 * (k - parseInt(n / 10));
      return answer;
    }
    ```

12 . 아이스 아메리카노

- array에 값 추가할 때 array.push()

```jsx
function solution(money) {
  var answer = [];
  answer.push(parseInt(money / 5500));
  answer.push(money - answer[0] * 5500);
  return answer;
}
```

1. 짝수 홀수 개수

   1. 조건 부로 배열 확인 하는 게 있는 지 봐야 될 것 같음.

   ```jsx
   function solution(num_list) {
     var answer = [0, 0];
     num_list.map((num) => {
       if (num % 2 == 0) {
         answer[0] += 1;
       } else {
         answer[1] += 1;
       }
     });
     return answer;
   }
   ```

2. 배열 두배 만들기

   1. `map`은 배열 요소 전체를 대상으로 함수를 호출하고, 함수 호출 결과를 배열로 반환해준다는 점을 활용해서 코드 짜기

   ```jsx
   function solution(numbers) {
     var answer = [];
     answer = numbers.map((number) => number * 2);
     return answer;
   }
   ```

3. 배열 원소의 길이

   1. map의 호출결과 배열 반환을 활용해서 풀기

   ```jsx
   function solution(strlist) {
     var answer = [];
     answer = strlist.map((str) => str.length);
     return answer;
   }
   ```
