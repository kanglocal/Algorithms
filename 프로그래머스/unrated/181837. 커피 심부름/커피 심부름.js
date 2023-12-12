function solution(order) {
    var answer = 0;
    
    answer = order.reduce((acc, cur) => {
        return acc + (cur.includes('cafelatte') ? 5000 : 4500)
    }, 0);
    
    return answer;
}