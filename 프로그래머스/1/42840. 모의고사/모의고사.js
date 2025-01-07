function solution(answers) {
  let answer = [];

  const person1 = '12345'.repeat(Math.ceil(answers.length / 5)).slice(0, answers.length).split('');
  const person2 = '21232425'.repeat(Math.ceil(answers.length / 5)).slice(0, answers.length).split('');
  const person3 = '3311224455'.repeat(Math.ceil(answers.length / 5)).slice(0, answers.length).split('');

  let answerCnt = [0, 0, 0];

  for(let num in answers){
    if(answers[num] === Number(person1[num])) answerCnt[0]++;
    if(answers[num] === Number(person2[num])) answerCnt[1]++;
    if(answers[num] === Number(person3[num])) answerCnt[2]++;
  }

  // 제일 큰 수의 인덱스+1를 뽑아 와야함.
  const maxCnt = Math.max(...answerCnt);

  for(let i in answerCnt) {
    if(answerCnt[i] === maxCnt) answer.push(Number(i) + 1)
  }

  return answer;
}