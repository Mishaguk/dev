  function consonantCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const strConsonants = [];
    const strToPass = str.split('');
    for (let i = 0; i < strToPass.length; i++) {
      const litterToPass = strToPass[i];

      if (
        !vowels.find((item) => item === litterToPass.toLowerCase()) &&
        litterToPass.toLowerCase() !== litterToPass.toUpperCase()
      ) {
        strConsonants.push(litterToPass);
      }
    }
    return strConsonants.length;
  }
console.log(consonantCount('01234567890_'));
