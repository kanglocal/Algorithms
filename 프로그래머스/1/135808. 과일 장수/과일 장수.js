function solution(k, m, score) {
    var answer = 0;
    
    const items = score.slice().sort((a,b) => a-b).slice(score.length % m); // 맨 앞의 가장 점수가 낮은 사과 제외.
    
    for(let i = 0; i <items.length; i += m){
        answer += items[i] * m;
    }
    
    return answer;
}