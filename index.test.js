const fizzbuzz = require("./index")

test("Inputting 1 returns 1", () => {
    const output = fizzbuzz(1);
    expect(output).toEqual(1)
});

test("Inputting 2 returns 2", () => {
    const output = fizzbuzz(2);
    expect(output).toEqual(2)
});


test("Inputting 3 returns Fizz", () => {
    const output = fizzbuzz(3);
    expect(output).toEqual("Fizz")
});

test("Inputting 6 returns Fizz", () => {
    const output = fizzbuzz(6);
    expect(output).toEqual("Fizz")
});

test("Inputting 5 returns Buzz", () => {
    const output = fizzbuzz(5);
    expect(output).toEqual("Buzz")
});

test("Inputting 10 returns Buzz", () => {
    const output = fizzbuzz(10);
    expect(output).toEqual("Buzz")
});

test("Inputting 15 returns FizzBuzz", () => {
    const output = fizzbuzz(15);
    expect(output).toEqual("FizzBuzz")
});

test("Inputting 30 returns FizzBuzz", () => {
    const output = fizzbuzz(15);
    expect(output).toEqual("FizzBuzz")
});