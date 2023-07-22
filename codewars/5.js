function noBoringZeros(n) {
  let division = 0;
  if (n % 10 === 0 && n !== 0) {
    do {
      division = n / 10;
      n = division;
    } while (division % 10 === 0);
    return division;
  } else return n;
}

console.log(noBoringZeros(145));
