// inc to feet 
function inchTofeet(inc){
    var result = inc / 12;
    return result;
}
var  howInch = 12;
var totalResult = inchTofeet(howInch);
console.log(totalResult);


// miles to kilometer 
function milesToKiloMeter (miles) {
       var result = miles * 1.6;
       return result;
}

var perMiles = 50 ;
var totalResult =  milesToKiloMeter(perMiles);
console.log(totalResult);


//Check even and odd number using function

function evenOrOdd (number ) {
    if (number %  2 == 0 ){
        return true;
    }
    return false;

}

var isEven = 100;
var resultIsEven = evenOrOdd(isEven);
console.log(resultIsEven);

// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = 2022;

checkLeapYear(year);
