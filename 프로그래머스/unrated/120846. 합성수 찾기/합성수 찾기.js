function solution(n) {
    var answer = 0;
    let cnt = 0;
    
    for(let num = 1; num <= n; num++){
        cnt = 0;
        for(let i = 1; i <= num/2; i++){
            if(num % i === 0) cnt++;
            
            if(cnt >= 2){
                answer++;
                break;
            }
        }
    }
    
    
    return answer;
}