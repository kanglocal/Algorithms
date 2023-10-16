function solution(n, m) {
    let maxDivideNum
    let smallNum = Math.min(n,m);
    let bigNum = Math.max(n,m);
    
    for(let i = smallNum; i > 0; i--){
        if(smallNum % i === 0 && bigNum % i === 0){
            maxDivideNum = i;
            break;
        }
    }

    const answer = [maxDivideNum , n * m / maxDivideNum]
    return answer;
}