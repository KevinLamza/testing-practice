export function sum(a, b) {
  return a + b;
}

export function capitalize(string) {
  if (typeof string === 'string') {
    let array = string.split('');
    let capitalizedString = '';
    for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        capitalizedString = capitalizedString + array[i].toUpperCase();
      } else {
        capitalizedString = capitalizedString + array[i];
      }
    }
    return capitalizedString;
  } else {
    throw new Error('not a string!');
  }
}

export function reverseString(string) {
  if (typeof string === 'string') {
    let array = string.split('');
    let reversedString = '';
    for (let i = array.length - 1; i >= 0; i--) {
      reversedString = reversedString + array[i];
    }
    return reversedString;
  } else {
    throw new Error('not a string!');
  }
}
