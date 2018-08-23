// FizzBuzz to 100
// Author: adhamlin 2018


var num = 1;

while (num <= 100){
    if ((num % 3 === 0) && (num % 5 === 0)) {
        console.log(num + " is divisible by 3 and 5, FIZZBUZZ!");
    } else if (num % 3 === 0) {
        console.log(num + " is divisible by 3, FIZZ!");
    } else if (num % 5 === 0) {
        console.log(num + " is divisible by 5, BUZZ!");
    } else {
        console.log(num + " is Not divisible by 3 or 5.")
    }
    num = num + 1;

}
