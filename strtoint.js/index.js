function strToInt(str) {
    let i = 0, sign = 1, result = 0;
    while (str.charAt(i) == ' ') {
      i++;
    }
    if (str.charAt(i) == '+') {
      i++;
    }
    else if (str.charAt(i) == '-') {
      sign = -1;
      i++;
    }
  
    while (str.charAt(i) >= '0' && str.charAt(i) <= '9') {
      res = res * 10 + (str.charAt(i) - 0);
      i++;
    }
    return res * sign;
  };
  
  console.log(strToInt("10"));
  console.log(strToInt("-21"));
  console.log(strToInt("   11"));
  console.log(strToInt("18   "));
  console.log(strToInt("attainu10"));
 
  