"use strict";
{
    // type-assertion
    let anything;
    anything = 'Next level web development';
    anything.length;
    const kgToGram = (param) => {
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
    const resultToBeNumber = kgToGram(100);
    const resultToBeString = kgToGram('100');
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    const name = 'hello world';
}
