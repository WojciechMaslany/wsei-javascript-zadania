let Calculator = function() {
    this.history = [];
}

Calculator.prototype.add = function(num1, num2) {
    var result = num1 + num2;
    this.history.push (`added ${num1} to ${num2} got ${result}`)
    return result;
}

Calculator.prototype.multiply = function(num1, num2) {
    var result = num1 * num2;
    this.history.push (`multiplied ${num1} with ${num2} got ${result}`)
    return result;
}

Calculator.prototype.substract = function(num1, num2) {
    var result = num1 - num2;
    this.history.push (`substracted ${num1} from ${num2} got ${result}`)
    return result;
}

Calculator.prototype.divide = function(num1, num2) {
    var result = num1 + num2;
    this.history.push (`divided ${num1} by ${num2} got ${result}`)
    return result;
}

Calculator.prototype.printOperation = function () {
    console.table(this.history);
}

Calculator.prototype.clearOperation = function () {
    this.history = [];
}

var kalkulator = new Calculator();

kalkulator.add(1,1)
kalkulator.multiply(2,2)
kalkulator.substract(10, 5)
kalkulator.divide(3, 3)
kalkulator.printOperation();
kalkulator.clearOperation();
kalkulator.printOperation();