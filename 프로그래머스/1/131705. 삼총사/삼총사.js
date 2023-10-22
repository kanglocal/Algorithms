function solution(number) {
    var answer = 0;
    
    for(let stu1 = 0; stu1 < number.length - 2; stu1++){
        for(let stu2 = stu1 + 1; stu2 < number.length - 1; stu2++){
            for(let stu3 = stu2 + 1; stu3 < number.length; stu3++){
                if(number[stu1] + number[stu2] + number[stu3] === 0){
                    answer++;
                }
            }
            
        }
    }
    return answer;
}