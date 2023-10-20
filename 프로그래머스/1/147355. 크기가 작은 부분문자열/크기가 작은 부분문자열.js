function solution(t, p) {
    let answer = 0;
    const targetArr = [];
    
    for(let i = 0; i <= t.length - p.length; i++){
        targetArr.push(Number(t.substr(i,p.length)));
    }
    
    const answerArr = targetArr.filter((v) => {
        return v <= Number(p);
    })
    
    answer = answerArr.length;
    return answer;
}

