function solution(name, yearning, photo) {
    var answer = [];
    
    photo.forEach((items) => {
        let sum = items.reduce((acc, cur,index) => {
            acc += yearning[name.indexOf(cur)] ?? 0;
            return acc;
        }, 0);
        answer.push(sum);
    })
    
    return answer;
}