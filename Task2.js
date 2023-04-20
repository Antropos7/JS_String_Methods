function reverser(str) {
  let redersedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    redersedString += str[i];
  }
  return redersedString;
}
console.log(reverser("Hello! It's me - Antropos7"));
