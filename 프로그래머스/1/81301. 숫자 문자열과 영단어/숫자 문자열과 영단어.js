function solution(s) {
    var answer = 0;
    
    let wordArr = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    let originNum ={
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    }
    
    for(let word of wordArr){
        s = s.replaceAll(word,originNum[word]);
    }
    
    answer = Number(s);
    
    return answer;
}