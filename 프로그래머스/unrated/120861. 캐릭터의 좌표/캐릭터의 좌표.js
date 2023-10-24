function solution(keyinput, board) {
    var answer = [];
    
    const num = {
        left:[-1,0],
        right:[1,0],
        up:[0,1],
        down:[0,-1]
    }
    const maxW = Math.floor(board[0] / 2 );
    const maxH = Math.floor(board[1] / 2);
    let w = 0;
    let h = 0;
    
    keyinput.forEach((key)=>{
        const [addW,addH] = num[key];
        if(Math.abs(w + addW) <= maxW){ w += addW;} 
        if(Math.abs(h + addH) <= maxH){ h += addH;}
    })
    
    answer = [w, h];
    return answer;
}