
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const result = [];
  if (matrix) {
      matrix.forEach((el, i) => {
          if (i % 2 === 0) {
              result.push(...[...el].sort((a, b) => a - b));
          } else {
              result.push(...[...el].sort((a, b) => b - a));
          }
      })
  }
  return result;
}
