function addMatrices(matrix1, matrix2) {
  const newMatrix = [];
  for (let i = 0; i < matrix1.length; i++) {
    const elementsMatrix = [];
    for (let j = 0; j < matrix2.length; j++) {
      const elementMatrix = matrix1[i][j] + matrix2[i][j];
      elementsMatrix.push(elementMatrix);
    }
    newMatrix.push(elementsMatrix);
  }
  return newMatrix;
}

module.exports = addMatrices;
