/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    //max, min pop
    //salary 나머지 합 / salary 개수 = 평균
  salary.sort((a, b) => Number(a) - Number(b))
  salary.pop()
  salary.shift()
  return salary.reduce((acc, cur) => acc + cur) / salary.length;
};