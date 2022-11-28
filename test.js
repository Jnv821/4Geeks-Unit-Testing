test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One Dollar should be 0.0072 Yens", function(){
    const { fromDollarToYen } = require("./app.js")

     // use the function like its supposed to be used
    const Yens = fromDollarToYen(3.5)

     // if 1 Yen are 0.0072 dollars, then 3.5 Yen should be (3.5 * 0.0072)
     const expected = 3.5 * 0.0072; 

     // this is the comparison for the unit test
      expect(fromDollarToYen(3.5)).toBeCloseTo(0.0252, 4); //1 Yen are 0.0072 dollars, then 3.5 euros should be = (3.5 * 0,0072)
})

test("One Pound should be 0.0060 Yens", function(){

    const {fromYenToPound} = require("./app.js")

    //use the function like its supposed to be used
    const Pounds = fromYenToPound(3.5)

    // if 1 Pound are 0,0060, then 3.5 pounds should be (3.5 * 0.0060)
    const expected = 3.5 * 0.0060; 
    
    // this is the comparison for the unit test
    expect(fromYenToPound(3.5)).toBeCloseTo(0.021, 3); //1 Yen are 0.0060 pounds, then 3.5 yen should be = (3.5 * 0,021)
})