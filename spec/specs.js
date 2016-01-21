describe('counter', function() {
  it("will multiply by 1.", function(){
  expect(counter(5)).to.equal(10);
});
});

describe('range', function() {
  it("will divide the count-to number by the count-by input", function(){
  expect(range(50,7)).to.equal(7);
});
});
