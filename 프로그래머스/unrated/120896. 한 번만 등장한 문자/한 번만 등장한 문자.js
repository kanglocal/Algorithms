function solution(s) {
    var answer = '';
    
    let arr = [];
    for(let letter of s){
        if(s.indexOf(letter) === s.lastIndexOf(letter)){
            arr.push(letter);
        }
    }
    answer = arr.sort().join('');
    
    return answer;
}