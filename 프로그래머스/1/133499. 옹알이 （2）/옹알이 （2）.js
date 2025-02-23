function solution(babbling) {
  var answer = 0;
  var pronunable = ["aya", "ye", "woo", "ma"];

  for (let bWord of babbling) {
    for (let pWord of pronunable) {
      if(bWord.includes(pWord.repeat(2))) {
        // 반복된 발음이 있다면 다음 bWord로 넘어간다.
        break;
      }
      // 공백을 주고 합치기
      bWord = bWord.split(pWord).join(" ");
    }
    // 공백제거
    if(bWord.split(" ").join("").length === 0){
      answer ++
    }
  }
  return answer;
}