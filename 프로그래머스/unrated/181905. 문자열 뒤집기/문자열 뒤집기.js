function solution(my_string, s, e) {
    var answer = '';
    let start = my_string.slice(0,s);
    let middle = my_string.slice(s,e+1);
    let end = my_string.slice(e+1, my_string.length);
    
    let reversedMiddle = [...middle].reverse();
    
    answer = start;
    answer += reversedMiddle.join('');
    answer += end;
    
    return answer;
}