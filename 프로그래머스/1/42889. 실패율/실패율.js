function solution(N, stages) {
  var answer = [];
  
  let PeoplePerStages = Array(N).fill(0);
  let percent = [];

  for(let stage of stages) {
    if(stage > N) continue;
    PeoplePerStages[stage-1]++;
  }

  let clearPeople = stages.length;
  for(let i = 0; i < PeoplePerStages.length; i++) {
    percent[i] = PeoplePerStages[i] / clearPeople;
    clearPeople -= PeoplePerStages[i]
  }

  answer = percent.map((value, index) => ({value, index}))
    .sort((a, b) =>b.value - a.value)
    .map(item => item.index + 1)

  return answer;
}