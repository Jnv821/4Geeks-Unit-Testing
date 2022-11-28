// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// we declare the function with the exact name "fromEuroToDollar"
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 0.0072;
    //return the dollar value
    return valueInYen;
}

// we declare the function with the exact name "fromEuroToDollar"
const fromYenToPound = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInPound = valueInYen * 0.0060;
    //return the dollar value
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }