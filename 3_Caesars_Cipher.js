function rot13(str) {
  const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const toConvertArr = str.split('')

  let convertedArr = toConvertArr.map((letter) => {
    const position = abc.indexOf(letter);

    if (position >= 0) {
      return (abc[(position + 13) % 26])
    } else {
      return letter;
    }
  })

  let result = convertedArr.join('')

  return result;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
