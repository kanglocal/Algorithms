function solution(array, n) {
    var answer = 0;
    array.sort((a,b) => a-b);
    console.log(array);
    
    let newArr = array.map((v) => Math.abs(n-v));
    
    answer = array[newArr.indexOf(Math.min(...newArr))];
    
    return answer;
}