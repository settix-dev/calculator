import operate from "./operate";

const calculate = (
  data = { total: null, next: null, operation: null },
  buttonName
) => {
  let numberOne = data.total;
  let numberTwo = data.next;

  if (buttonName === "+/-") {
    data = { ...data, total: data.total * -1, next: data.next * -1 };
  } else if (buttonName === data.operation) {
    data = { ...data, total: operate(numberOne, numberTwo, buttonName) };
  }
  return data.total;
};

export default calculate;
