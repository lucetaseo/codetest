function solution(birthYear) {
    const currentYear = 2023;
    return currentYear - birthYear;
}

// 테스트 케이스
console.log(solution(1983));  
console.log(solution(2000));



// 문제 수정이 안되서 못쓴 코드
//function solution(age) {
//    return new Date().getFullYear() - age + 1;
//}