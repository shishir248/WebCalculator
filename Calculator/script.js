var buttons = document.getElementsByClassName('buttons');
var display = document.getElementById('display');
var operand1;
var operand2;
var numofoperators = 0;
var operand2si = 0;
var operand2li = 0;
var operator;
var alreadyoperator;
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute("data-value");

        if (value !== "ac" && value !== "back") {
            alreadyoperator = display.innerText.slice(display.innerText.length - 1, display.innerText);
            //At a time if number of operators > 1; then first eval and then move forward
            if (value === "+" || value === "-" || value === "*" || value === "/" || value === "%") {
                if (alreadyoperator === "+" || alreadyoperator === "-" || alreadyoperator === "*" ||
                    alreadyoperator === "/" || alreadyoperator === "%") {
                    display.innerText = display.innerText.slice(0, display.innerText.length - 1);
                }
                numofoperators++;
                console.log(value);
                operand1 = parseFloat(display.innerText);
                if (numofoperators == 1) {
                    operand2si = display.innerText.length;
                    console.log(value);
                    operator = value;
                }
                if (numofoperators > 1) {
                    operand2li = display.innerText.length;
                }
                // console.log(numofoperators);
                // console.log(operand2si);
                // console.log(operand2li);

            }
            if (numofoperators > 1 || value === "=") {
                operand2 = parseFloat(display.innerText.slice(operand2si + 1, operand2li));
                if (numofoperators > 1) {
                    operand1 = eval(operand1 + " " + operator + " " + operand2);
                    display.innerText = operand1;
                    operator = value;
                }
                operand2 = parseFloat(display.innerText.slice(operand2si + 1, display.innerText.length));
                if (value === "=") {
                    operand1 = eval(operand1 + operator + operand2);
                    display.innerText = operand1;
                    value = "";
                    operator = undefined;
                }
                numofoperators--;

            }
            display.innerText += value;
        } else if (value === "ac") {
            display.innerText = "";
            operand1 = undefined;
            operand2 = undefined;
            operand2li = 0;
            operand2si = 0;
            numofoperators = 0;
        } else {
            display.innerText = display.innerText.slice(0, display.innerText.length - 1);
        }
    });
}