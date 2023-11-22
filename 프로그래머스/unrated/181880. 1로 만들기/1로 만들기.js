function solution(num_list) {
    var answer = 0;
    
    for(let num of num_list){
        let temp = num;
        while(temp > 1){
            if(temp % 2 !== 0){
                temp -= 1;
            }
            temp /= 2;
            answer++;
        }    
    }
    
    return answer;
}