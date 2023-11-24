function solution(people, limit) {
    let answer = 0;
    let start = 0;
    let end = people.length -1;
    
    people.sort(function(a, b){return a-b});
    
    while(start <= end){
        if(people[start] + people[end] <= limit){
            start += 1;
            end -= 1;
        }else{
            end -= 1;
        }
        answer += 1;
    }
    
    return answer;
}