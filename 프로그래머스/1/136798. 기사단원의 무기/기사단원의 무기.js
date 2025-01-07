function solution(number, limit, power) {
  let answer = 0;

  // number 를 돌면서 각각 num의 약수 개수를 뽑아내.
  // 뽑은 약수 개수가 limit을 초과하면 power로 대체.
  // 위에서 만든 애를 answer 에 더한다.
  
  for(let num = 1; num <= number; num++) {
    let weaponPower = getDivisorCnt(num);
    if(weaponPower > limit) weaponPower = power;
    answer += weaponPower;
  }
  return answer;
}

const getDivisorCnt = (num) => {
  let count = 0;
  for(let i = 1; i <= Math.sqrt(num); i++) {
    if(num % i === 0) {
      if(i * i === num) {
        count++;
      }else {
        count += 2;
      }
    }
  }
  return count;
}