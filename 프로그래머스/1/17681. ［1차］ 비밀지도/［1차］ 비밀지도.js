function solution(n, arr1, arr2) {
    var answer = [];
    
    let inputs = [arr1, arr2];
    let result = [[],[]];
    
    for(let index in inputs){
        for(let d of inputs[index]){
            let num = d.toString(2);
            let temp = [];
            for(let i = 0; i < n - num.length; i++){
                temp.push('0');
            }
            temp.push(...num);
            result[index].push(temp);
        }    
    }
    
    for(let i = 0; i < result[0].length; i++){
        let temp = '';
        for(let j = 0; j < result[1].length; j++){
            if(result[0][i][j] === '0' && result[1][i][j] === '0'){
                temp += ' ';
            }else{
                temp += '#';
            }
        }
        answer.push(temp);
    }
    
    
    
    return answer;
}