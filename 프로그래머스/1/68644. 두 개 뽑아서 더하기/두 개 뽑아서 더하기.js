function solution(numbers) {
    let answer = [];
    let answerSet = new Set();
    
    for(let i = 0; i < numbers.length; i++){
        for(let j = 1; j < numbers.length; j++){
            if(i !== j){
                answerSet.add(numbers[i] + numbers[j]);        
            }
        }
    }
    
    answer = [...answerSet].sort((a, b) => { return a-b; });
    
    return answer;
}