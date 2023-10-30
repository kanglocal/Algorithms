function solution(id_pw, db) {
    var answer = '';
    const [id, pw] = id_pw;
    console.log(id + ", " + pw);
    
    for(let data of db){
        if(data[0] === id && data[1] === pw){
            answer = 'login';
            break;
        }
        if(data[0] === id){
            answer = 'wrong pw';
            
        }
        if(data[0] !== id && data[1] !== pw){
            answer = 'fail';    
        }
        
    }
    
    
    
    return answer;
}