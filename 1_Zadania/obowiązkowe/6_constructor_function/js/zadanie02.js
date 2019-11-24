let Calculator = function() {
    this.history = [];
}

Calculator.prototype.add = function(num1, num2) {
    var result = num1 + num2;
    this.history.push
    return result;
}