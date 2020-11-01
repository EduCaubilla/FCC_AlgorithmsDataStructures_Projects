function convertToRoman(num) {
  const romanNumbers = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  const digitNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

  var toRoman = "";

  for (var i = 0; i < digitNumbers.length; i++) {
    while (digitNumbers[i] <= num) {
      toRoman += romanNumbers[i];
      num -= digitNumbers[i];
    }
  }

  return toRoman;
}

console.log("36 in roman numbers is: ", convertToRoman(36));
console.log("587 in roman numbers is: ", convertToRoman(587));
console.log("1979 in roman numbers is: ", convertToRoman(1979));


