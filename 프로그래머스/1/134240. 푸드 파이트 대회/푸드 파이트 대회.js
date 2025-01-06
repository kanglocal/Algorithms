function solution(food) {
  let answer = '';

  let temp = [];
  for(let i = 1; i < food.length; i++){
    for(let j = 0; j < Math.floor(food[i]/2); j++) {
      temp.push(i);
    }
  }
  answer = temp.join('') + '0' + temp.reverse().join('');
    
  return answer;
}
