function solution(array, commands) {
    var answer = [];
    
    answer = commands.map((command) => {
        const [i, j, k] = command;
        const newArr = array
        .filter((value, fIndex) => fIndex >= i - 1 && fIndex < j) // i~j 배열 만든것.
        .sort((a,b) => a - b)
        
        return newArr[k - 1];
    })
   
    return answer;
}