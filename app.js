const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 1.2 * 127.9 ;
    return valueInYen;
}
const fromYenToPounds = function(valueInYen){
    let valueInPounds = valueInYen / 127.9 * .8;
    return valueInPounds
}
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPounds}