function solution(cards1, cards2, goal) {
  let answer = 'Yes';
  let temp = '';

  for(let goalItem of goal) {
    if(cards1[0] === goalItem) {
      temp += cards1.shift()
    }else if(cards2[0] === goalItem) {
      temp += cards2.shift()
    }
    else {
      answer = 'No';
      break;
    }
  }

  return answer;
}