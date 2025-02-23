function solution(s) {
  var answer = 0;

  let firstCnt = 0;
  let restCnt = 0;
  let tempLetter = '';

  for(let i=0; i < s.length; i++) {
    if(tempLetter === ''){
      tempLetter = s[i];
      firstCnt++;
    } else{
      if(s[i] === tempLetter) firstCnt++
      else restCnt++;

      if(firstCnt === restCnt) {
        answer++
        tempLetter = ''
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