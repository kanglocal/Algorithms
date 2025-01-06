function solution(a, b, n) {
  let answer = 0;
  let temp = n;

  while(temp >= a) {
    answer += Math.floor(temp / a) * b;
    temp = Math.floor(temp / a) * b + temp % a;
  }

  return answer;
}