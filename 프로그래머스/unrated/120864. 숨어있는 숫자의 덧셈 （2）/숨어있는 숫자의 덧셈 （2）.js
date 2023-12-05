function solution(my_string) {
    var answer = 0;
    let arr = my_string.replaceAll(/[a-zA-Z]/g,'-').split('-')
    
    answer = arr.reduce((acc,cur,i) => {
        return acc + Number(cur);
    }, 0)
    
    
    return answer;
}