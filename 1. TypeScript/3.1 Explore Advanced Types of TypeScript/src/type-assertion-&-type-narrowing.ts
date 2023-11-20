{
  // type-assertion
  let anything: any;

  anything = 'Next level web development';

  (anything as string).length;

  const kgToGram = (param: string | number): string | number | undefined => {
    // type-narrowing
    if (typeof param === 'number') {
      const value = param * 1000;
      return value;
    }

    if (typeof param === 'string') {
      const value = parseFloat(param) * 1000;
      return `The converted result is ${value} gram`;
    }
  };

  // type-assertion
  const resultToBeNumber = kgToGram(100) as number;
  const resultToBeString = kgToGram('100') as string;

  type CustomErrorType = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomErrorType).message);
  }

  const name = 'hello world';
}
