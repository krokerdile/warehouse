1. 피자나눠먹기(1)

   ```jsx
   function solution(n) {
     var answer = 0;
     answer = n % 7 == 0 ? n / 7 : parseInt(n / 7) + 1;
     return answer;
   }
   ```

   - 삼항연산자 A(조건문) ? true인 경우 : false인 경우

2. 최댓값 만들기

   ```jsx
   function solution(numbers) {
     var answer = 0;
     var max = 0;
     var subMax = 0;
     numbers.map((number) => {
       if (max < number) {
         subMax = max;
         max = number;
       } else {
         if (subMax < number) {
           subMax = number;
         }
       }
     });
     answer = max * subMax;
     return answer;
   }
   ```

   - 조건을 잘 정리해야 될 것 같다.

3. 삼각형의 완성 조건

   ```jsx
   function solution(sides) {
     var answer = 0;
     var sum = 0;
     sides.map((side) => {
       sum += side;
       if (answer < side) {
         answer = side;
       }
     });
     if (sum / 2 <= answer) {
       answer = 2;
     } else {
       answer = 1;
     }
     return answer;
   }
   ```

   - 조건을 잘 정리해야 될 것 같다.

4. 문자 출력 반복하기

   ```jsx
   function solution(my_string, n) {
     var answer = "";
     my_string = my_string.split("");
     my_string.map((string) => {
       for (let i = 0; i < n; i++) {
         answer += string;
       }
     });
     return answer;
   }
   ```

   - .split(”split 조건”)

5. 모음 제거

   ```jsx
   function solution(my_string) {
     var answer = "";
     let temp = "aeiou";
     //     let list = my_string.split("");
     //     list.map((string)=>{

     //     })
     answer = my_string.split(temp[0]).join("");
     answer = answer.split(temp[1]).join("");
     answer = answer.split(temp[2]).join("");
     answer = answer.split(temp[3]).join("");
     answer = answer.split(temp[4]).join("");
     return answer;
   }
   ```

   -

6. 모음 제거

   ```jsx
   function solution(my_string) {
     var answer = "";
     let temp = "aeiou";
     //     let list = my_string.split("");
     //     list.map((string)=>{

     //     })
     answer = my_string.split(temp[0]).join("");
     answer = answer.split(temp[1]).join("");
     answer = answer.split(temp[2]).join("");
     answer = answer.split(temp[3]).join("");
     answer = answer.split(temp[4]).join("");
     return answer;
   }
   ```

   -
