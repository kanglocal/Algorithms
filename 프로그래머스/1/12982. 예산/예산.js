function solution(d, budget) {
    var answer = 0;
    
    let dArr = [...d].sort((a,b) => a-b);
    let sum = 0;
    
    for(let request of dArr){
        sum += Number(request);
        if(sum <= budget){
            answer++;    
        }else{
            break;
        }
    }
    
    return answer;
}