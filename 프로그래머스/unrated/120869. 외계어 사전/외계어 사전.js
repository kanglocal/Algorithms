function solution(spell, dic) {
    var answer = 2;
    
    
    for(let word of dic){
        if(spell.length !== word.length){
            continue;
        }
        
        let copySpell = [...spell];
        
        let result = [...word].every((letter)=>{
            if(!copySpell.includes(letter)){
                return false;
            }
            
            copySpell.splice(copySpell.indexOf(letter), 1);
            return true;
        });
        
        if(result) {
            answer = 1;
            break;
        }
    }    
    
    
    
    return answer;
}