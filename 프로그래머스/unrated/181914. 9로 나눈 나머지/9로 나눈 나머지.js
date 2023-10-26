function solution(number) {
    var answer = 0;
    
    let sum = [...number].reduce((acc,cur) => {
        return Number(acc) + Number(cur);
    })
    answer = sum % 9;
    
    return answer;
}