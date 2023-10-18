function solution(numbers) {
    let answer = [];
    let answerSet = new Set();
    
    for(let i in numbers){
        for(let j in numbers){
            if(i !== j){
                answerSet.add(numbers[i] + numbers[j]);        
            }
        }
    }
    
    answer = [...answerSet].sort((a, b) => { return a-b; });
    
    return answer;
}