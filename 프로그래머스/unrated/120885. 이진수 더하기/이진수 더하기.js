function solution(bin1, bin2) {
    var answer = '';
    let sum = parseInt(bin1,2) + parseInt(bin2, 2);
    
    answer = sum.toString(2);
    return answer;
}