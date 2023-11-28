function solution(n) {
    let temp = 1;
    let sum = 1;
    
    while(sum < n){
        sum *= ++temp;
    }
    if(sum > n) temp--;
    
    return temp;
}
