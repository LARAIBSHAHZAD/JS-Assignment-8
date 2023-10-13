function inputValue(value)
{
    var input = document.getElementById("display").value += value;
}

function clearDisplay()
{
    display.value = '';
}

function clearDisplayEach()
{
    var clearEach = document.getElementById("display");
    clearEach.value = clearEach.value.slice(0, -1);
}

function SquareValue() 
{
    var input = document.getElementById("display");
    var value = parseFloat(input.value);
    var square = Math.pow(value, 2);
    input.value = square;
}

function calculateResult()
{
    var displayValue = document.getElementById("display").value;
    var result = eval(displayValue);
    document.getElementById("display").value = result;
}