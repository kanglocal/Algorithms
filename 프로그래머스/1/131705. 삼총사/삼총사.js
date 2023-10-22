function solution(number) {
    var answer = 0;
    let tempSet = new Set();
    let resultSet = new Set();
    
    for(let stu1 = 0; stu1 < number.length; stu1++){
        for(let stu2 = 0; stu2 < number.length; stu2++){
            for(let stu3 = 0; stu3 < number.length; stu3++){
                if(number[stu1] + number[stu2] + number[stu3] === 0){
                    
                    tempSet = new Set();
                    tempSet.add(stu1);
                    tempSet.add(stu2);
                    tempSet.add(stu3);
                    
                    if(tempSet.size < 3){
                        continue;
                    }
                    
                    let isNewSet = true;
                    
                    for(let part of resultSet){
                        if([...tempSet].every((element) => [...part].includes(element))){
                            isNewSet = false;
                        }
                    }
                    
                    if(isNewSet){
                        resultSet.add(tempSet);    
                    }
                    
                }
            }
            
        }
    }
    answer = resultSet.size;
    
    return answer;
}