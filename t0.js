function solution(number, k) {
  const stack = [];
  number = number.split("");

  for (let i = 0; i < number.length; i += 1) {
    // 스택의 크기가 0이면 넣는다.
    if (stack.length === 0) {
      stack.push(number[i]);
      continue;
    }

    // 스택의 맨 위에 있는 값과 number[i]를 비교
    while (k > 0 && stack[stack.length - 1] < number[i]) {
      stack.pop();
      k--;
    }
    // number[i]가 stack의 맨 윗 값보다 크면 계속 pop
    // pop 하면서 k값을 줄여준다.
    stack.push(number[i]);
  }
  return Number(stack.join(""));
}

console.log("\n\n===큰 수 만들기===");

console.log("1994", "2");
console.log(solution("1924", 2));

console.log("12341234", "3");
console.log(solution("12341234", 3));

console.log("4177252841", "4");
console.log(solution("4177252841", 4));
