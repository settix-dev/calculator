import React, { Component } from "react";
import "../App.css";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import Header from "./Header";
import clickedButton from "../logic/clickedButton";

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

    this.setState({
      ...clickedButton(buttonName, {
        total: total,
        next: next,
        operation: operation,
      }),
    });
    // const regexpClickedDigit = /\d/;
    // const regexClickedAC = /^A\w\b/;
    // const digitButton = buttonName.match(regexpClickedDigit);
    // const acButton = buttonName.match(regexClickedAC);
    // const symbolButton = !digitButton && !acButton ? buttonName : null;

    //   if (acButton) {
    //     console.log(`Clicked AC Button: ${acButton}`);
    //     return this.setState({
    //       ...this.state,
    //       total: "0",
    //       next: "",
    //       operation: "",
    //     });
    //   } else if (digitButton) {
    //     if (next) {
    //       if (next.indexOf("0") !== 0) {
    //         next = next + digitButton;
    //         console.log(`We are here!!`);
    //       } else if (next === "0.") {
    //         next = "0." + digitButton;
    //       } else if (next.indexOf("0") === 0 && next.length === 1) {
    //         console.log(`The problem is here!!`);
    //         next = digitButton;
    //       } else {
    //         console.log(`Here is the solution`);
    //         next = next + digitButton;
    //       }
    //       return this.setState({ ...this.state, next: next });
    //     } else if (total) {
    //       console.log(`very cool!!`);
    //       return operation
    //         ? this.setState({ ...this.state, next: digitButton })
    //         : this.setState({ ...this.state, next: digitButton, total: "" });
    //     }
    //     console.log(`This is starting point`);
    //     return this.setState({
    //       ...this.state,
    //       next: digitButton,
    //       total: "",
    //       // total: total + next === 0 ? "" : total + next,
    //       operation: "",
    //     });
    //   } else if (symbolButton) {
    //     console.log(`Clicked symbol Button: ${symbolButton}`);
    //     if (next) {
    //       switch (symbolButton) {
    //         case ".":
    //           next = next.includes(".") ? next : next + ".";
    //           this.setState({ ...this.state, next: next });
    //           break;
    //         case "%":
    //         case "+/-":
    //           console.log(`Dealing with operation`);
    //           total = next;
    //           operation = symbolButton;
    //           next = calculate({ total, next, operation }, operation);
    //           this.setState({ ...this.state, next: next });
    //           break;
    //         case "=":
    //           if (total) {
    //             total = calculate({ total, next, operation }, operation);
    //             next = "";
    //             operation = "";
    //             this.setState({
    //               ...this.state,
    //               next: next,
    //               total: total,
    //               operation: operation,
    //             });
    //           }
    //           break;
    //         default:
    //           // operation = symbolButton;
    //           total = total
    //             ? calculate({ total, next, operation }, operation)
    //             : next;
    //           next = "";
    //           operation = symbolButton;
    //           console.log("I have also reached here!");
    //           this.setState({
    //             ...this.state,
    //             next: next,
    //             total: total,
    //             operation: operation,
    //           });
    //       }
    //       console.log(`State is returned here!!`);
    //       return this.state;
    //     } else if (total) {
    //       switch (symbolButton) {
    //         case ".":
    //           if (!operation) {
    //             console.log(typeof total);
    //             next = "0.";
    //             total = "";
    //             this.setState({ ...this.state, next: next, total: total });
    //           } else {
    //             next = "0.";
    //             this.setState({ ...this.state, next: next });
    //           }
    //           break;
    //         case "%":
    //         case "+/-":
    //           if (!operation && total !== "0") {
    //             console.log(`Hello here`);
    //             operation = symbolButton;
    //             total = calculate({ total, next, operation }, operation);
    //             operation = "";
    //             this.setState({
    //               ...this.state,
    //               total: total,
    //               operation: operation,
    //             });
    //           }
    //           break;
    //         default:
    //           if (symbolButton !== "=" && !operation) {
    //             operation = symbolButton;
    //             this.setState({ ...this.state, operation: operation });
    //           }
    //       }
    //       console.log(`State returned in total territory!!`);
    //       return this.state;
    //     } else if (symbolButton === ".") {
    //       console.log(`I am on work here today!`);
    //       next = "0.";
    //       operation = "";
    //       total = "";
    //       return this.setState({
    //         ...this.state,
    //         next: next,
    //         total: total,
    //         operation: operation,
    //       });
    //     }
    //   } // end of symbolButton block
  } // end handleClick

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
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
        </div>
      </div>
    );
  }
}
