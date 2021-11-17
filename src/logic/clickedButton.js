import calculate from "./calculate";

function clickedButton(buttonName, { total, next, operation }) {
  const regexpClickedDigit = /\d/;
  const regexClickedAC = /^A\w\b/;
  const digitButton = buttonName.match(regexpClickedDigit);
  const acButton = buttonName.match(regexClickedAC);
  const symbolButton = !digitButton && !acButton ? buttonName : null;

  if (acButton) {
    return {
      total: "0",
      next: "",
      operation: "",
    };
  } else if (digitButton) {
    if (next) {
      if (next.indexOf("0") !== 0) {
        next = next + digitButton;
      } else if (next === "0.") {
        next = "0." + digitButton;
      } else if (next.indexOf("0") === 0 && next.length === 1) {
        next = digitButton;
      } else {
        next = next + digitButton;
      }
      return { next: next, total, operation };
    } else if (total) {
      return operation
        ? { next: digitButton, total, operation }
        : { next: digitButton, total: "", operation };
    }
    return {
      next: digitButton,
      total: "",
      operation: "",
    };
  } else if (symbolButton) {
    let state = {};
    if (next) {
      switch (symbolButton) {
        case ".":
          next = next.includes(".") ? next : next + ".";
          state = { next: next, total, operation };
          break;
        case "%":
        case "+/-":
          total = next;
          operation = symbolButton;
          next = calculate({ total, next, operation }, operation);
          state = { next: next  };
          break;
        case "=":
          if (total) {
            total = calculate({ total, next, operation }, operation);
            next = "";
            operation = "";
            state = {
              next: next,
              total: total,
              operation: operation,
            };
          }
          break;
        default:
          total = total
            ? calculate({ total, next, operation }, operation)
            : next;
          next = "";
          operation = symbolButton;
          state = ({
            next: next,
            total: total,
            operation: operation,
          });
      }
      return state;
    } else if (total) {
      switch (symbolButton) {
        case ".":
          if (!operation) {
            next = "0.";
            total = "";
            state = ({ next: next, total: total, operation });
          } else {
            next = "0.";
            state = ({ next: next, total, operation });
          }
          break;
        case "%":
        case "+/-":
          if (!operation && total !== "0") {
            operation = symbolButton;
            total = calculate({ total, next, operation }, operation);
            operation = "";
            state = ({
              next,
              total: total,
              operation: operation,
            });
          }
          break;
        default:
          if (symbolButton !== "=" && !operation) {
            operation = symbolButton;
            state = ({ next, total, operation: operation });
          }
      }
      return state;
    } else if (symbolButton === ".") {
      next = "0.";
      operation = "";
      total = "";
      return ({
        next: next,
        total: total,
        operation: operation,
      });
    }
  } 
}

export default clickedButton;
