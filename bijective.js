var alphabet = "0123456789ABCDEF"; // 16진수로 수정
var base = alphabet.length;

function encode(num){
  var encoded = '';
  if(num==0) return alphabet[num]; // 수정한 부분
  while (num){
    var remainder = num % base;
    num = Math.floor(num / base);
    encoded = alphabet[remainder].toString() + encoded;
  }
  return encoded;
}

function decode(str){
  var decoded = 0;
  while (str){
    var index = alphabet.indexOf(str[0]);
    var power = str.length - 1;
    decoded += index * (Math.pow(base, power));
    str = str.substring(1);
  }
  return decoded;
}

// 이부분은 빼고 console 창에 돌린다.
module.exports.encode = encode;
module.exports.decode = decode;
