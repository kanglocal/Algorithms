function solution(nums) {
  let answer = 0;

  const numLength = nums.length;

  for(let index1 = 0; index1 < numLength-2; index1++){
    for(let index2 = index1+1; index2 < numLength-1; index2++){
      for(let index3 = index2+1; index3< numLength; index3++) {
        const num = nums[index1] + nums[index2] + nums[index3]
        if(isPrime(num)) answer++
      }
    }
  }

  return answer;
}

const isPrime = (number) => {
  if(number === 1) return false;


  for(let i = 2; i <= Math.sqrt(number); i++) {
    if(number % i === 0) return false;
  }

  return true;
}