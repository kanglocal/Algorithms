function solution(s) {
    var answer = '';
    
    const sArr = s.split(' ');
    
    let tempWord = [];
    let tempLetter = "";
    
    for(let word of sArr){
        tempLetter = "";
        for(let i in word){
            if(i%2 === 0){
                tempLetter += word[i].toUpperCase();
            }else{
                tempLetter += word[i].toLowerCase();
            }
        }
        tempWord.push(tempLetter);
    }
    answer = tempWord.join(' ');
    
    return answer;
}