// writing a function that converts Roman Numerals to Arabic Numerals

function romanToArabic(romanNumeral) {
  let romanNumeral = romanNumeral.toUpperCase();
  const romanNumeralArray = romanNumeral.split('');
  let totalValue = 0;
  const convertRomanNumeral = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  for (let i = 0; i < romanNumeralArray.length; i++) {
    if (
      convertRomanNumeral[romanNumeralArray[i]] <
      convertRomanNumeral[romanNumeralArray[i + 1]]
    ) {
      totalValue +=
        convertRomanNumeral[romanNumeralArray[i + 1]] -
        convertRomanNumeral[romanNumeralArray[i]];
      i++;
    } else {
      totalValue += convertRomanNumeral[romanNumeralArray[i]];
    }
  }
  return totalValue;
}

console.log(romanToArabic('MCMXCIX'));
