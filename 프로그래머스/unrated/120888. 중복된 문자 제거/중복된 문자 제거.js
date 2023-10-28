function solution(my_string) {
    var answer = '';
    let result = new Set();
    
    for(let letter of my_string){
        result.add(letter);
    }
    
    answer = [...result].join('');
    
    return answer;
}