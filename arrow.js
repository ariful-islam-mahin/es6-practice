const doubleIt = num => num * 2; //single parameter
const sum = (num1, num2) => num1 + num2; //double parameter
const return5 = () => 5; //empty parameter
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result
} //function body

console.log(doubleIt(5), sum(10, 5), return5(), doMath(7, 3))

