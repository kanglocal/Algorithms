function solution(intStrs, k, s, l) {
    var answer = [];
    
    for(let str of intStrs){
        let num = Number(str.substr(s,l));
        if(num > k) answer.push(num);
    }
    return answer;
}