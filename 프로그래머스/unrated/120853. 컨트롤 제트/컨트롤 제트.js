function solution(s) {
    var answer = 0;
    
    answer = s.split(' ').filter((v, i, arr) => {
        if(v !== 'Z'){
            return arr[i+1] !== 'Z';
        }
        return v !== 'Z';
    }).reduce((acc,cur) => Number(acc) + Number(cur), 0);
    
    return answer;
}