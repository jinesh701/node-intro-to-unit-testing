const should = require("chai").should();

const fizzBuzzer = require("../fizzBuzzer");

describe("fizzBuzzer", function() {
  it(`Should return "fizz-buzz" if it's divisible by 15`, function() {
    [15, 30, 45].forEach(function(input) {
      fizzBuzzer(input).should.equal("fizz-buzz");
    });
  });

  it(`Should return "buzz" if it's divisible by 5`, function() {
    [5, 10, 20].forEach(function(input) {
      fizzBuzzer(input).should.equal("buzz");
    });
  });

  it(`Should return "fizz" if it's divisible by 3`, function() {
    [3, 6, 9].forEach(function(input) {
      fizzBuzzer(input).should.equal("fizz");
    });
  });

  it(`Should return a number that is not divisible by 3, 5, or 15`, function() {
    [1, 2, 4].forEach(function(input) {
      fizzBuzzer(input).should.equal(input);
    });
  });

  it(`Should raise an error if it's not a number`, function() {
    ["a", "b", "c"].forEach(function(input) {
      (function() {
        fizzBuzzer(input);
      }.should.throw(Error));
    });
  });
});
