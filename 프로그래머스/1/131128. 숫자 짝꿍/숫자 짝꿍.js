function solution(X, Y) {
  var answer = '';
  const countX = new Array(10).fill(0);
  const countY = new Array(10).fill(0);

  for (const num of X) {
    countX[num]++;
  }
  for (const num of Y) {
    countY[num]++;
  }

  for (let i = 9; i >= 0; i--) {
    const commonCount = Math.min(countX[i], countY[i]);
    answer += i.toString().repeat(commonCount);
  }

  if (answer === '') return "-1";
  if (answer[0] === '0') return "0";

  return answer;
}