function solution(myString, pat) {
    var answer = 0;
    
    for(let i = 0; i < myString.length +1 - pat.length; i++){
        let word = myString.substr(i, pat.length);
        if(word === pat) answer++;
    }
    return answer;
}