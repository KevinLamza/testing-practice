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

export const calculator = {
  add(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
      throw new Error('Input have to be numbers!');
    }
    return a + b;
  },
  subtract(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
      throw new Error('Input have to be numbers!');
    }
    return a - b;
  },
  multiply(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
      throw new Error('Input have to be numbers!');
    }
    return a * b;
  },
  divide(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
      throw new Error('Input have to be numbers!');
    }
    if (b === 0) {
      throw new Error("Can't divide by zero!");
    } else {
      return a / b;
    }
  },
};

export function caesarCipher(string, number) {
  if (typeof string === 'string' && typeof number === 'number') {
    // prettier-ignore
    let lowerAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    // prettier-ignore
    let upperAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let array = string.split('');
    let cipheredString = '';
    for (let i = 0; i < array.length; i++) {
      let character = array[i];
      if (character == character.toUpperCase()) {
        // if (character === 'X') {
        //   character = 'A';
        // } else if (character === 'Y') {
        //   character = 'B';
        // } else if (character === 'Z') {
        //   character = 'C';
        // } else {
        //   let index = upperAlphabet.findIndex(
        //     (element) => element === character,
        //   );
        //   if (index != -1) {
        //     character = upperAlphabet[index + 3];
        //   }
        // }
        let oldIndex = upperAlphabet.findIndex(
          (element) => element === character,
        );
        if (oldIndex != -1) {
          let newIndex = oldIndex + number;
          while (newIndex > upperAlphabet.length) {
            newIndex = newIndex - upperAlphabet.length;
          }
          character = upperAlphabet[newIndex];
        }
      } else if (character == character.toLowerCase()) {
        let oldIndex = lowerAlphabet.findIndex(
          (element) => element === character,
        );
        if (oldIndex != -1) {
          let newIndex = oldIndex + number;
          while (newIndex + 1 > lowerAlphabet.length) {
            newIndex = newIndex - lowerAlphabet.length;
          }
          character = lowerAlphabet[newIndex];
        }
      }
      cipheredString = cipheredString + character;
    }
    return cipheredString;
  } else {
    throw new Error('Invalid input');
  }
}

caesarCipher('xyZ', 3);
