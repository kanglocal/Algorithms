function solution(before, after) {
    var answer = 0;
    
    answer = [...before].sort().join('') === [...after].sort().join('');
    
    return Number(answer);
}