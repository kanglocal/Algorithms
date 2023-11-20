function solution(name, yearning, photo) {
    var answer = [];
    
    for(let items of photo) {
        let sum = 0;
        for(let item of items){
            if(name.indexOf(item) >= 0){
                sum += yearning[name.indexOf(item)];    
            }
        }
        answer.push(sum);
    }
    
    return answer;
}