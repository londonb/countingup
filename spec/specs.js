describe('counter', function() {
  it("will multiply by 1.", function(){
  expect(counter(5)).to.equal(10);
});
});

describe('range', function() {
  it("will divide the count-to number by the count-by input", function(){
  expect(range(30,5)).to.equal(6);
});
});

// describe('output', function(){
//   it("will populate the number array that will multiply with the count-by number.", function(){
//   expect(output(30,5)).to.eql([1, 2, 3, 4, 5, 6]);
//   });
// });

describe('output', function(){
  it("will take the numberArray values and multiply it with the count-by number and output as a string.", function(){
  expect(output(30,5)).to.equal('5,10,15,20,25,30');
  });
});
