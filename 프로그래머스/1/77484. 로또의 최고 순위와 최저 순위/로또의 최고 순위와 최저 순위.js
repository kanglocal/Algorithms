function solution(lottos, win_nums) {
  var answer = [];

  let correctCnt = 0;
  let zeroCnt = 0;

  for(let num of lottos) {
    if(num === 0) {
      zeroCnt++;
      continue;
    }
    if(win_nums.includes(num)) correctCnt++
  }

 return [getGrade(correctCnt + zeroCnt), getGrade(correctCnt)] 
}

function getGrade(correctCnt){
  switch (correctCnt){
    case 6: return 1;
    case 5: return 2;
    case 4: return 3;
    case 3: return 4;
    case 2: return 5;
    default: return 6;
  }
}