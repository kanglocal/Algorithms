function solution(s) {
  var answer = 0;

  let firstCnt = 0;
  let restCnt = 0;
  let currentLetter = '';

  for(let i=0; i < s.length; i++) {
    if(currentLetter === ''){
      currentLetter = s[i];
      firstCnt++;
    } else{
      if(s[i] === currentLetter) firstCnt++
      else restCnt++;

      if(firstCnt === restCnt) {
        answer++
        currentLetter = ''
        firstCnt = 0;
        restCnt = 0;
      }

    }

    if(firstCnt !== restCnt && i === s.length-1){
      answer++;
    }
  }

  return answer;
}