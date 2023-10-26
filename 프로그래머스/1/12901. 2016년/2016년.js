function solution(a, b) {
    var answer = '';
    
    const monthDays = [31,29,31,30,31,30,31,31,30,31,30,31];
    const day = ['THU','FRI','SAT','SUN','MON','TUE','WED','THU'];
    let sum = 0;
    
    for(let i = 0; i < a-1; i++){
        sum += monthDays[i];
    }
    
    sum += b;
    
    answer = day[sum % 7];
    return answer;
}