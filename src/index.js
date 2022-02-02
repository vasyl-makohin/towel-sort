// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix) {
    const result = matrix.reduce(
      (previousValue, currentValue, currentIndex) => {
        if (currentIndex % 2) {
          currentValue = currentValue.reverse();
        }

        return previousValue.concat(currentValue);
      },
      []
    );

    return result;
  } else {
    return [];
  }
};
