arr1 = [
  66, 36, 49, 40, 73, 12, 77, 78, 76, 8, 50, 20, 85, 22, 24, 68, 26, 59, 92, 93,
  30,
];
function proc_arrInt(arr1) {
  const numberArr = [];

  const allIntegers = arr1.forEach((element) => {
    const typeElement = typeof element;

    if (typeElement == 'number') {
      numberArr.push(element);
    }
  });

  const primeNumbers = arr1.forEach((element) => {
    for (let i = 0; i < element; i++) {
      if (!Number.isInteger(element / i)) {
        console.log(element);
      }
    }
  });

  console.log([numberArr.length]);
}

proc_arrInt(arr1);

const a = 5;
