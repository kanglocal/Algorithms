function solution(s, skip, index) {
  var answer = '';

  for(let i = 0; i < s.length; i++) {
    let limitStep = index;
    let currentCode = s.charCodeAt(i);

    while(limitStep > 0) {
      currentCode++;
      if(currentCode > 122) {
        currentCode = 97;
      }
      if(!skip.includes(String.fromCharCode(currentCode))){
        limitStep--;
      }
    }
    answer += String.fromCharCode(currentCode);
  }
  return answer;
}