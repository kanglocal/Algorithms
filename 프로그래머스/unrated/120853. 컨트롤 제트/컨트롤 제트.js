function solution(s) {
    var answer = 0;
    
    answer = s.split(' ').filter((v, i, arr) => v !== 'Z' && arr[i+1] !== 'Z')
        .reduce((acc,cur) => +acc + +cur, 0);
    
    return answer;
}