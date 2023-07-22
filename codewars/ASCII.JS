// function encode(str) {
//   let chars = str.split('');

//   for (let i = 0; i < chars.length; i++) {
//     chars[i] = String.fromCharCode(chars[i].charCodeAt() + 7);
//   }
//   return chars.join('');
// }

// function decode(str) {
//   let chars = str.split('');

//   for (let i = 0; i < chars.length; i++) {
//     chars[i] = String.fromCharCode(chars[i].charCodeAt() - 7);
//   }
//   return chars.join('');
// }
// let string = 'abcde';
// string = encode(string);
// console.log(string);
// string = decode(string);
// console.log(string);

function topSecret(str) {
  let chars = str.split('');

  for (let i = 0; i < chars.length; i++) {
    if (chars[i].toLowerCase() !== chars[i].toUpperCase()) {
      if (chars[i] === chars[i].toLowerCase()) {
        if (chars[i].charCodeAt() < 100) {
          chars[i] = String.fromCharCode(122 - (99 - chars[i].charCodeAt()));
        } else {
          chars[i] = String.fromCharCode(chars[i].charCodeAt() - 3);
        }
      } else if (chars[i] === chars[i].toUpperCase()) {
        if (chars[i].charCodeAt() < 68) {
          chars[i] = String.fromCharCode(90 - (67 - chars[i].charCodeAt()));
        } else {
          chars[i] = String.fromCharCode(chars[i].charCodeAt() - 3);
        }
      }
    }
  }
  return chars.join('');
}
console.log(topSecret('Pb qdph lv Mrkq'));
