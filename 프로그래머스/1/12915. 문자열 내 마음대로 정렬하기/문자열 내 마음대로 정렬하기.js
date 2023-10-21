function solution(strings, n) {
    var answer = [];
    answer = [...strings];
    
    answer.sort((a,b) => {
        let result = a[n].charCodeAt() - b[n].charCodeAt();
        
        if(result === 0){
            for(let i = 0; i <= answer.length; i++){
                if(a[i] !== b[i]){
                    result = a[i].charCodeAt() - b[i].charCodeAt();
                    break;
                }
            }
        }
        return result;
    })
    
    return answer;
}