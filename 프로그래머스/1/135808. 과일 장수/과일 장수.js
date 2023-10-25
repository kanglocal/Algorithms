function solution(k, m, score) {
    var answer = 0;
    const boxes = [];
    let box = [];
    
    score.sort((a,b) => b-a).forEach((point,index)=>{
        box.push(point);
        if(box.length === m){
            boxes.push(box);
            box = [];
        }
    })
    
    
    for(let box of boxes){
        let minPoint = box[m-1];
        answer += minPoint * m;
    }
    
    
    return answer;
}