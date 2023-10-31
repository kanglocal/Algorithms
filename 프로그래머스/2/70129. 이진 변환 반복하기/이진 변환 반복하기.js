function solution(s) {
    var answer = [0,0];
    let copy = s;
    
    while(Number(copy) !== 1){
        answer[1] += copy.split(0).length - 1;
        
        copy = copy.replaceAll('0','').length.toString(2);
        answer[0]++;
    }
    
    return answer;
}