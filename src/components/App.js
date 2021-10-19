import React, { Component } from "react";
import "../App.css";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import calculate from "../logic/calculate";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    let { total, next, operation } = this.state;
    const regexpClickedDigit = /\d/;
    const regexClickedAC = /^A\w\b/;
    const digitButton = buttonName.match(regexpClickedDigit);
    const acButton = buttonName.match(regexClickedAC);
    const symbolButton = !digitButton && !acButton ? buttonName : null;

    if (acButton) {
      console.log(`Clicked AC Button: ${acButton}`);
      if (total === null && next === null && operation === null) {
        return this.setState({ ...this.state });
      } else {
        return this.setState({
          ...this.state,
          total: "0",
          next: "",
          operation: "",
        });
      }
    } else if (digitButton) {
      console.log(`Clicked AC Button: ${digitButton}`);
      if (total === null && next === null && operation === null) {
        return this.setState({
          ...this.state,
          next: digitButton,
          total: total + next === 0 ? "" : total + next,
          operation: "",
        });
      } else if (total === "" && next !== "" && operation === "") {
        next = next + digitButton;
        return this.setState({ ...this.state, next: next });
      } else if (total !== "" && next === "" && operation !== "") {
        next = next + digitButton;
        return this.setState({ ...this.state, next: next });
      } else if (total !== "" && next !== "" && operation !== "") {
        next = next + digitButton;
        return this.setState({ ...this.state, next: next });
      } else if (total !== "" && next === "" && operation === "") {
        next = digitButton;
        total = "";
        return this.setState({ ...this.state, next: next, total: total });
      }
    } else if (symbolButton) {
      console.log(`Clicked symbol Button: ${symbolButton}`);
      if (symbolButton === ".") {
        if (total === null && next === null && operation === null) {
          console.log(`I am on work here today!`);
          next = "0.";
          operation = "";
          total = "";
          return this.setState({
            ...this.state,
            next: next,
            total: total,
            operation: operation,
          });
        } else if (total !== null && next.includes(".") && operation !== null) {
          console.log(`I am on work here today!`);
          return this.setState({ ...this.state });
        } else if (total !== null && next === "" && operation !== "") {
          console.log(`I am on work here today!`);
          next = "0.";
          return this.setState({ ...this.state, next: next });
        } else if (total === "0" && next === "" && operation === "") {
          next = "0.";
          total = "";
          return this.setState({ ...this.state, next: next, total: total });
        } else if (total !== null && next === "" && operation === "") {
          console.log(`I am on work here today!`);
          next = "0.";
          total = "";
          return this.setState({ ...this.state, next: next, total: total });
        } else if (next.indexOf(0) !== null) {
          console.log(`I am on work here today!`);
          next = next + ".";
          return this.setState({ ...this.state, next: next });
        }
      } else if (symbolButton === "+/-") {
        if (total === null && next === null && operation === null) {
          console.log(`I am on work here today!`);
          return this.setState({ ...this.state });
        }
        if (total !== "" && next === "" && operation !== "") {
          console.log(`I am on work here today!`);
          return this.setState({ ...this.state });
        } else if (total !== "" && next !== "" && operation !== "") {
          console.log(`I am on work here today!`);
          total = next; // We use the current next(second operand) as total in calculate method below
          operation = symbolButton;
          next = calculate({ total, next, operation }, symbolButton);
          return this.setState({ ...this.state, next: next });
        } else if (total !== "" && next === "" && operation === "") {
          operation = symbolButton;
          total = calculate({ total, next, operation }, operation);
          operation = "";
          return this.setState({
            ...this.state,
            next: next,
            total: total,
            operation: operation,
          });
        } else if (total === "" && next !== "" && operation === "") {
          console.log(`I am on work here today!`);
          total = next;
          operation = symbolButton;
          next = calculate({ total, next, operation }, operation);
          total = "";
          operation = "";
          return this.setState({ ...this.state, next: next });
        }
      } else if (symbolButton === "%") {
        console.log(`I am on work here today!`);
        if (total === null && next === null && operation === null) {
          return this.setState({ ...this.state });
        }
        if (total === "" && operation === "" && next !== "") {
          console.log(`I am on work here today!`);
          total = next;
          operation = symbolButton;
          total = calculate({ total, next, operation }, operation);
          operation = "";
          next = "";
          console.log(`total = ${total} I have seen you here`);
          return this.setState({
            ...this.state,
            next: next,
            total: total,
            operation: operation,
          });
        } else if (total !== "" && next !== "" && operation !== "") {
          total = next;
          console.log(`The state total is ${this.state.total}`);
          operation = symbolButton;
          next = calculate({ total, next, operation }, operation);
          console.log(`Next = ${next}`);
          return this.setState({ ...this.state, next: next });
        } else if (total !== "" && next === "" && operation !== "") {
          console.log(`checked in here!`);
          return this.setState({ ...this.state });
        } else if (total !== "" && next === "" && operation === "") {
          operation = symbolButton;
          total = calculate({ total, next, operation }, operation);
          operation = "";
          return this.setState({
            ...this.state,
            next: next,
            total: total,
            operation: operation,
          });
        }
      } else if (symbolButton === "=") {
        console.log(`I am on work here today!`);
        if (total === null && next === null && operation === null) {
          return this.setState({ ...this.state });
        }
        if (total !== "" && next === "" && operation !== "") {
          return this.setState({ ...this.state });
        } else if (total === "" && next !== "" && operation === "") {
          return this.setState({ ...this.state });
        } else if (total !== "" && next === "" && operation === "") {
          return this.setState({ ...this.state });
        }
        console.log(`Clicked: ${buttonName} button`);
        console.log(calculate({ total, next, operation }, operation));

        return this.setState({
          ...this.state,
          next: "",
          total: calculate({ total, next, operation }, operation),
          operation: "",
        });
      } else { // symbolButton === operation button
        console.log(`I am on work here today!`);
        if (total === null && next === null && operation === null) {
          return this.setState({ ...this.state });
        }
        if (total !== "" && next !== "" && operation !== "") {
          total = calculate({ total, next, operation }, operation);
          console.log("Total is evaluated! Total = " + total);
          next = "";
          operation = symbolButton;
          console.log("I have also reached here!");
          return this.setState({
            ...this.state,
            next: next,
            total: total,
            operation: operation,
          });
        } else if (total !== "" && next === "" && operation !== "") {
          return this.setState({ ...this.state });
        } else if (total !== "" && next === "" && operation === "") {
          console.log(`Yes I am here!!`);
          operation = symbolButton;
          return this.setState({
            ...this.state,
            operation: operation,
          });
        } else if (total === "" && next !== "" && operation === "") {
          console.log(`Hey`);
          total = next;
          next = "";
          operation = symbolButton;
          return this.setState({
            ...this.state,
            next: next,
            total: total,
            operation: operation,
          });
        }
      } // end of operation button
    } // end of symbolButton block  
  }
  
  render() {
    return (
      <div className="App">
        <h1>Math-Magician</h1>
        <React.Fragment>
          {this.state.total === null &&
          this.state.next === null &&
          this.state.operation === null ? (
            <Display result={`0`} />
          ) : (
            <Display
              result={`${this.state.total}${this.state.operation}${this.state.next}`}
            />
          )}
          <ButtonPanel clickHandler={this.handleClick} />
        </React.Fragment>
      </div>
    );
  }
}
