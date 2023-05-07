function printUpperOrLowerCase(color: string, value?: boolean) {
  if (value) {
    return color.toUpperCase();
  } else {
    return color.toLowerCase();
  }
}

console.log(printUpperOrLowerCase('red', true));
console.log(printUpperOrLowerCase('green', false));
console.log(printUpperOrLowerCase('blue'));
