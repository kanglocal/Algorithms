function solution(intStrs, k, s, l) {
    return intStrs.map((v) => +v.substr(s, l)).filter((v) => v > k);
}