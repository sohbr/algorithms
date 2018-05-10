var calculate = function(s) {

  let stack = [];
  let num = 0;
  let res = 0;
  let sign = '+';

  s = s.split(" ").join("");

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= '0' && s[i] <= '9') {
      num = (num * 10) + +s[i];
    }
    if (i === s.length - 1 || !(s[i] >= '0' && s[i] <= '9')) {
      if (sign === '+') {
        stack.push(num);
      } else if (sign === '-') {
        stack.push(-num);
      } else if (sign === '*') {
        stack.push(stack.pop() * num);
      } else if (sign === '/') {
        stack.push(parseInt(stack.pop() / num));
      }
      num = 0;
      sign = s[i];
    }
  }

  for (let i = 0; i < stack.length; i++) {
    res += stack[i];
  }

  return res;

};


console.log(calculate("3+2*2"));
console.log(calculate(" 3/2 "));
console.log(calculate(" 3+5 / 2 "));
console.log(calculate("0"));
console.log(calculate("1 + 1"));
console.log(calculate("2*3*4"));
