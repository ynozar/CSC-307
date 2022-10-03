const { expect } = require('expect');
const myFunctions = require('./sample-functions.js');

test('Testing sum -- success', () => {
    const target = 30;
    const result = myFunctions.sum(12, 18);
    expect(target).toBe(result);
  });

  test('Testing sum -- negative num -- success', () => {
    const target = -55;
    const result = myFunctions.sum(-50, -5);
    expect(target).toBe(result);
  });


  test('Testing div -- div by zero -- success', () => {
    expect(() => myFunctions.div(5,0)).toThrow(/div by zero/);
    
  });

  test('containsNumbers-- 1 -- success', () => {
    const target = false;
    const result = myFunctions.containsNumbers("");
    expect(target).toBe(result);
    
  });

  test('containsNumbers-- 2 -- fail', () => {
    const target = false;
    const result = myFunctions.containsNumbers(" ");
    expect(target).toBe(result);
    
  });

  test('containsNumbers-- 3 -- success', () => {
    const target = true;
    const result = myFunctions.containsNumbers(" 5aaa");
    expect(target).toBe(result);
    
  });