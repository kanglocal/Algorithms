function solution(s) {
    var answer = [];
    
    for(let i in s){
        if(i == s.indexOf(s[i])){// 첫글자인 경우
            answer.push(-1);
        }else{
            answer.push(i - (s.substr(0,i).lastIndexOf(s[i])));
        }
    }
    
    return answer;
}
