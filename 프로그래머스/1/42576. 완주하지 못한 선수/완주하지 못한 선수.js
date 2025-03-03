function solution(participant, completion) {
  const hash = {};

  for (let person of participant) {
    hash[person] = (hash[person] || 0) + 1;
  }

  for (let person of completion) {
    hash[person]--;
  }

  for (let person in hash) {
    if (hash[person] > 0) {
      return person;
    }
  }
}