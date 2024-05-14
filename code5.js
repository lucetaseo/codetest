function solution(num1, num2) {
    var answer = 0;
    return num1 % num2;
}

console.log(solution(3, 2));  // 출력: 1
console.log(solution(10, 5));   // 출력: 0


// 더 깔끔한답
//const solution = (num1, num2) => num1 % num2
