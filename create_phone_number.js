function createPhoneNumber(numbers) {
  number = [...numbers];
  finalNUmber = '(';
  for (let i = 0; i < number.length; i++) {
    if (i < 3) {
      finalNUmber += number[i];
    } else if (i === 3) {
      finalNUmber += `) ${number[i]}`;
    } else if (i === 6) {
      finalNUmber += `-${number[i]}`;
    } else {
      finalNUmber += number[i];
    }

  }
  return finalNUmber;
}



console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");