function solution(keymap, targets) {
  var answer = [];

  for(let target of targets) {
    let temp = 0;

    for(let letter of target) {
      let keyCntArr = [];
      for(let keymapItem of keymap) {
        const pressedCnt = keymapItem.indexOf(letter);
        if(pressedCnt > -1){
          keyCntArr.push(pressedCnt + 1)
        }
      }
      if(keyCntArr.length > 0) {
        temp += Math.min(...keyCntArr)
      }else {
        temp = -1;
        break;
      }
    }
    answer.push(temp);
    
  }

  if(answer.length === 0 || answer.every(num => num === 0)) answer = [-1];
  return answer;
}