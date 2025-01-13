function solution(n) {
    const s = new Set();
    
    // 1을 제외한 홀수만 set에 담음.
    for(let i=3; i<=n; i+=2){
        s.add(i);
    }
    
    // 2도 소수니까 담음.
    s.add(2);
    
    for(let j = 3; j < Math.sqrt(n); j++){
        if(s.has(j)){
            // 
             for(let k = j*j; k <= n; k += j){    
                s.delete(k);
             }
        }
    }
    return s.size;
}