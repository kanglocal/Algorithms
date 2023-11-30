function solution(i, j, k) {
    var answer = 0;
    
    for(let num = i; num <= j; num++){
        let strNum = String(num);
        if(strNum.includes(k)) {
            answer += (strNum.split(k + '').length - 1);
        }
    }
    
    return answer;
}