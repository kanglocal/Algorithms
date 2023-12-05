function solution(array, n) {
    var answer = 0;
    
    let newArr = array.sort((a,b) => a-b).map((v) => Math.abs(n-v));
    answer = array[newArr.indexOf(Math.min(...newArr))];
    
    return answer;
}