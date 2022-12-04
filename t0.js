// 큰 수 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
    const stack = [];
    let count = 0;
    
    for(const item of number) {
        while (count < k && stack[stack.length - 1] < item) {
            stack.pop();
            count++;
        }
        stack.push(item);
    }
    
    while(count < k) {
        stack.pop();
        count++;
    }
    
    return Number(stack.join(""));
}

console.log("\n\n===큰 수 만들기===");

console.log("1924", "2");
console.log(solution("1924", 2));

console.log("1231234", "3");
console.log(solution("1231234", 3));

console.log("4177252841", "4");
console.log(solution("4177252841", 4));
