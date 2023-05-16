function squareDigits(num) {
  var numStr = num.toString();
  var result = "";

  for (var i = 0; i < numStr.length; i++) {
    var digit = parseInt(numStr[i]);
    result += (digit * digit).toString();
  }

  return parseInt(result);
}
