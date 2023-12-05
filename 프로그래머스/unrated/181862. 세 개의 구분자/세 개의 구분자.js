function solution(myStr) {
    var answer = [];
    
    let arr = myStr.replaceAll(/[abc]/g,'-').split('-');
    for(let v of arr){
        if(v) answer.push(v);
    }
    
    if(answer.length === 0) answer.push('EMPTY');
    
    return answer;
}