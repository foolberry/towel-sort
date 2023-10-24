
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let output=[];
  if (matrix == null) return output;
  for (let i = 0; i < matrix.length; i++){
    if (i % 2 == 0) output = output.concat(matrix[i]);
    else output = output.concat(matrix[i].reverse());
  }
  return output;
}
