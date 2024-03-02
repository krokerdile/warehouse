1. 편지

   ```jsx
   function solution(message) {
     var answer = 0;
     answer = parseInt(message.length * 2);
     return answer;
   }
   ```

   - parseInt()

2. 문자열 뒤집기

   ```jsx
   function solution(my_string) {
     var answer = "";
     answer = my_string.split("").reverse().join("");
     return answer;
   }
   ```

   - str.split(””).reverse().join(””);

   [JavaScript에서 문자열을 역순으로 뒤집는 세 가지 방법](https://www.freecodecamp.org/korean/news/how-to-reverse-a-string-in-javascript-in-3-different-ways/)

3. 배열의 유사도

   ```jsx
   function solution(s1, s2) {
     var answer = 0;
     s1.map((s1_item) => {
       s2.map((s2_item) => {
         if (s1_item == s2_item) {
           answer += 1;
         }
       });
     });
     return answer;
   }
   ```

   - 배열 map

4. 특정 문자 제거하기

   ```jsx
   function solution(my_string, letter) {
     var answer = "";
     answer = my_string.split(letter).join("");
     return answer;
   }
   ```

   - 처음에 생각 했을 때는 배열을 다 돌아다니면서 하나씩 찾아주는게 제일 베스트가 아닐까? 생각했음
   - 찾아보다 보니 없애 줘야 하는 단어를 기준으로 해주는 예시가 있어서 적용을 해보았음.
   - 기본에 대한 필요가 확실히 좀 더 느껴지는 것 같음.

5. 점의 위치 구하기

   ```jsx
   function solution(dot) {
     var answer = 0;
     if (dot[0] > 0 && dot[1] > 0) {
       answer = 1;
     } else if (dot[0] < 0 && dot[1] > 0) {
       answer = 2;
     } else if (dot[0] < 0 && dot[1] < 0) {
       answer = 3;
     } else {
       answer = 4;
     }
     return answer;
   }
   ```

   - 좀 더 빠르게 푸는 방법이 있을까?

6. 순서쌍의 개수

   ```jsx
   function solution(n) {
     var answer = 0;
     for (let i = 1; i < n + 1; i++) {
       if (n % i == 0) {
         answer += 1;
       }
     }
     return answer;
   }
   ```

   - 부분 집합 구하는 느낌 → 이것도 좀 더 빨리 푸는 방법 있을듯?

7. 순서쌍의 개수

   ```jsx
   function solution(n) {
     var answer = 0;
     for (let i = 1; i < n + 1; i++) {
       if (n % i == 0) {
         answer += 1;
       }
     }
     return answer;
   }
   ```

   - 부분 집합 구하는 느낌 → 이것도 좀 더 빨리 푸는 방법 있을듯?
