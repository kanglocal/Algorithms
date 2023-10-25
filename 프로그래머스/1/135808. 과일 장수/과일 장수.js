function solution(k, m, score) {
    var answer = 0;
    const boxes = [];
    let box = [];
    
    score.sort((a,b) => b-a);
    
    for(let i = 0; i < score.length; i++){
        box.push(score[i]);
        if(box.length === m){
            boxes.push(box);
            box = [];
        }
    }
    
    
    for(let box of boxes){
        let minPoint = box[m-1];
        answer += minPoint * m;
    }
    
    
    return answer;
}