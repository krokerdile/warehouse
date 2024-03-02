1. 배열 자르기

   ```jsx
   function solution(numbers, num1, num2) {
     var answer = [];
     numbers.map((number, index) => {
       if (index >= num1 && index <= num2) {
         answer.push(number);
       }
     });
     return answer;
   }
   ```

2. 배열 뒤집기

   ```jsx
   function solution(num_list) {
     var answer = [];
     answer = num_list.reverse();
     return answer;
   }
   ```

   - 배열 뒤집기 → reverse()
