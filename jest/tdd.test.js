const { expect } = require('expect');
const myFunctions = require('./tdd.js');


test('Testing sum -- success', () => {
    const target = new myFunctions.Portfolio();
    const result = myFunctions.sum();
    expect(target).toStrictEqual(result);
  });

test('Testing is empty -- success', () => {
    const target = true;
    const result = new myFunctions.Portfolio();
    expect(target).toStrictEqual(result.isEmpty());
  });


test('Testing buy -- success', () => {

    const target = {numShares: [5,10], tickers: ["GME","RBLX"],};
    const result = new myFunctions.Portfolio();
    result.buy("GME",5)
    result.buy("RBLX",10)
    expect(target).toEqual(expect.objectContaining(result));
  });


test('Testing unique -- success', () => {

    const target = 2;
    const result = new myFunctions.Portfolio();
    result.buy("GME",5)
    result.buy("RBLX",10)
    expect(target).toBe(result.numUnique());
  });


test('Testing buy 2 -- success', () => {

    const target = {numShares: [45,10], tickers: ["GME","RBLX"],};
    const result = new myFunctions.Portfolio();
    result.buy("GME",5)
    result.buy("RBLX",10)
    result.buy("GME",40)
    expect(target).toEqual(expect.objectContaining(result));
  });


test('Testing sell  -- success', () => {

    const target = {numShares: [2,10], tickers: ["GME","RBLX"],};
    const result = new myFunctions.Portfolio();
    result.buy("GME",5)
    result.buy("RBLX",10)
    result.sell("GME",3)
    expect(target).toEqual(expect.objectContaining(result));
  });


test('Testing numShares  -- success', () => {

    const target = 35;
    const result = new myFunctions.Portfolio();
    result.buy("GME",35)
    result.buy("RBLX",10)
    expect(target).toEqual((result.getNumShares("GME")));
  });


test('Testing remove ticker  -- success', () => {

    const target = {numShares: [10], tickers: ["RBLX"],};
    const result = new myFunctions.Portfolio();
    result.buy("GME",5)
    result.buy("RBLX",10)
    result.sell("GME",5)
    expect(target).toEqual(expect.objectContaining(result));
  });


test('Testing Sell Error  -- success', () => {
    const result = new myFunctions.Portfolio();
    result.buy("GME",35)
    result.buy("RBLX",10)

    expect(() => result.sell("RBLX",11)).toThrow(/ShareSaleException/);
  });