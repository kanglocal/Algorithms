function solution(arr, queries) {
    var answer = [...arr];
    
    for(let query of queries){
        
        for(let i = query[0]; i <= query[1]; i++){
            answer[i]++;
        }
    }
    return answer;
}