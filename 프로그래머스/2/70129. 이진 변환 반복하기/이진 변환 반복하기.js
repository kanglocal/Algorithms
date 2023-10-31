function solution(s) {
    var answer = [];
    let copy = s;
    let zeroCnt = 0;
    let processCnt = 0;
    
    while(true){
        if(Number(copy) === 1){
            break;
        }
        
        for(let letter of copy){
            if(letter === '0') zeroCnt++;
        }
        
        copy = copy.replaceAll('0','');
        copy = (copy.length).toString(2);
        processCnt++;
    }
    
    answer = [processCnt, zeroCnt];
    
    return answer;
}