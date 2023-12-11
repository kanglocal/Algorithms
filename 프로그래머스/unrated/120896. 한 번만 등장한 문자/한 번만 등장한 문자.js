function solution(s) {
    var answer = '';
    let sortedS = [...s].sort().join('');
    
    for(let letter of sortedS){
        let length = sortedS.split(letter).length - 1;
        if(length === 1) answer += letter;
    }
    
    return answer;
}