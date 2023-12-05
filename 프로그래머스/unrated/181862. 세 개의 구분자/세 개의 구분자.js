function solution(myStr) {
    var answer = [];
    
    answer = myStr.split(/[abc]/).filter(str => str);
    
    return answer.length ? answer : ['EMPTY'] ;
}