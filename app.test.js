
const { sum, fromEuroToDollar } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});
test("One euro should be 1.206 dollars", function(){

    const { fromEuroToDollar } = require('./app.js')

  
    const dollars = fromEuroToDollar(3.5)

   
    const expected = 3.5 * 1.2; 
    
   
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("pass euros to dollars to yen ", function(){

    const { fromDollarToYen } = require('./app.js')


    const yen = fromDollarToYen(3.5)

    
    const expected = 3.5 / 1.2 * 127.9; 
    
 
     expect(fromDollarToYen(3.5)).toBe(373.04166666666674); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("pass yen to pounds", function(){

    const { fromYenToPounds } = require('./app.js')


    const yen = fromYenToPounds(3.5)

    
    const expected = 3.5 / 127.9 * 0.8; 
    
 
     expect(fromYenToPounds(3.5)).toBe(0.0218921032056294); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})