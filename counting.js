function countLetters(string) {
  var letterCount = {};
  string = string.replace(/ /g ,"");
  for(var i = 0; i < string.length; i ++) {
    var letter = string[i].toLowerCase();
    if (letter in letterCount) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  } return letterCount;
}

console.log(countLetters('lighthouse in the house'));