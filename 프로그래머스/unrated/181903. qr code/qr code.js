function solution(q, r, code) {
    var answer = '';
    
    answer = [...code].reduce((acc, cur, i) => {
        if(i%q === r) return acc + cur;
        return acc;
    }, '');
    
    return answer;
}