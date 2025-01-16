function solution(n, m, section) {
  var answer = 0;
  var paintedWall = 0;
  
  for(var wall of section) {
    if(paintedWall < wall) {
      answer++;
      paintedWall = wall+m-1;
    }
  }
  return answer;
}