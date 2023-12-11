function solution(arr) {
    var answer = [];
    
    // 최소 개수
    let temp = 1;
    while(temp < arr.length){
        temp *= 2;
    }
    
    
    for(let i = 1; i <= temp - arr.length ; i++){
        answer.push(0);
    }
    
    return [...arr,...answer];
}