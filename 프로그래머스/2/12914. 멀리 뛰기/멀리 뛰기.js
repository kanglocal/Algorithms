function solution(n) {
    var answer = 0;
    var dp=[];
    
    dp[1]=1;
    dp[2]=2;
    
    for(let i = 3 ; i <= n ; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    answer = dp[n];
    
    return answer;
}
