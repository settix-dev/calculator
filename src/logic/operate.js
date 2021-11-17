const operate = (numberOne, numberTwo, operation) => {
    let total = null;
    switch(operation) {
        case "+":
            total = +numberOne + +numberTwo;
            break;
        case "-":
            total = numberOne - numberTwo;
            break;
        case "x":
            total = numberOne * numberTwo;
            break;
        case "/":
            total = numberOne / numberTwo;
            break;
        case "%":
            total = numberOne / 100 || numberTwo / 100;
            break;
        default:
            return total;
    }
    
    return total;        
}

export default operate;


