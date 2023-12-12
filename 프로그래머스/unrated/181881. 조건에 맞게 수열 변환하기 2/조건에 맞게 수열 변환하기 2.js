function solution(arr) {
    var answer = 0;
    let resultArr = [...arr];
    
    while(true){
        let tempArr = [];
        for(let num of resultArr){
            let temp = num;
            if(num >= 50 && num % 2 === 0){
                temp = num / 2;
            }else if(num < 50 && num % 2 !== 0){
                temp = num * 2 + 1;
            }
            tempArr.push(temp);
        }
        
        if(tempArr.toString() === resultArr.toString()) return answer;
        
        resultArr = [...tempArr];
        answer++;
    }
    
    return answer;
}