function sumMul(n, m) {
  const sum = [];
  if (n > m || n < 1 || m < 1) {
    return 'INVALID';
  }
  for (let i = n; i < m; i++) {
    if (i % n === 0) {
      sum.push(i);
    }
  }
  return sum.reduce((acc, currentValue) => acc + currentValue, 0);
}
console.log(sumMul(4, 123));
