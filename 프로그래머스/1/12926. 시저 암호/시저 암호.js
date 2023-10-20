function solution(s, n) {
    var answer = '';
    const up_min_ascii = 65;
    const up_max_ascii = 90
    const low_min_ascii = 97;
    const low_max_ascii = 122;
    
    for(let i in s){
        // 공백인경우
        if(s[i] === ' ' ){
            answer += ' ';
            continue;
        }
        
        let code = s.codePointAt(i) + n;

        if(s[i] === s[i].toUpperCase() && code > up_max_ascii){
            code = up_min_ascii + ((code - up_min_ascii ) % 26);
        }else if(s[i] !== s[i].toUpperCase() && code > low_max_ascii){
            code = low_min_ascii + ((code - low_min_ascii ) % 26);
        }
        
        answer += String.fromCharCode(code);
    }
    return answer;
}