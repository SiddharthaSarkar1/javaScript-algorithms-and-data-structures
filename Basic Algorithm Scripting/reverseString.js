function reverseString(str) {
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return reversedString;
}

console.log(reverseString("hello"))

function reverseString2(str) {
  
    return str
    .split("")
    .reverse()
    .join("")
  }

console.log(reverseString2("World"));
