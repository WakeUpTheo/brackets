module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const pairs = {};

  bracketsConfig.forEach(element => {
      openBrackets.push(element[0]);
      pairs[element[1]] = element[0];
  });

  let stack = [];

  for (let i = 0; i < str.length; i++) {
      let current = str[i];

      if (stack.length !== 0) {
          let topElement = stack[stack.length - 1];
          if (pairs[current] === topElement) {
              stack.pop();
          } else {
              stack.push(current);
          }
      } else {
          if (openBrackets.includes(current)) {
              stack.push(current);
          } else {
              return false;
          }
      }
  }
  return stack.length === 0;
}
