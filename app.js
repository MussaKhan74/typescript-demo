// let num1: number = "1";
var num1 = 1;
function calculate(num1, num2) {
    return num1 + num2;
}
console.log(calculate(num1, 3));
function getTotal(numbers) {
    return numbers.reduce(function (acc, item) {
        return acc + item;
    }, 0);
}
console.log(getTotal([3, 2, 1]));
