function solution(arr) {
    var answer = arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);
    
    return answer.length > 0 ? answer : [-1];
}