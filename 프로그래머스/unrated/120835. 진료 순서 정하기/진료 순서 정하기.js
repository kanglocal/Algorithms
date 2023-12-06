function solution(emergency) {
    var answer = [];
    
    let temp = [...emergency].sort((a,b) => b-a);
    
    for(let score of emergency) {
        answer.push(temp.indexOf(score) + 1);
    }
    
    return answer;
}