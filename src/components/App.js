
import React, { Component } from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

// static data
let data = {total: 7, next: "10", operation: "-"};
let buttonName = "-"
const calculateTest =  calculate(data, buttonName);
console.log(calculateTest);

console.log(operate(5, 7, "+"));

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       total: null,
       next: null,
       operation: null
    };

    this.handleClick = this.handleClick.bind(this);

  }

 handleClick(buttonName)  {
   
   let {total, next, operation} = this.state

    if ((((operation === "+") && (buttonName === "+" || buttonName === "-" || buttonName === "x" || buttonName === "/")) || 
        ((operation === "-") && (buttonName === "+" || buttonName === "-" || buttonName === "x" || buttonName === "/")) ||
        ((operation === "x") && (buttonName === "+" || buttonName === "-" || buttonName === "x" || buttonName === "/")) ||
        ((operation === "/") && (buttonName === "+" || buttonName === "-" || buttonName === "x" || buttonName === "/")))
        && next !== "") {
        console.log("I am here!");
        total = calculate({total, next, operation}, operation);
        console.log("Total is evaluated! Total = " + total);
        next = "";
        operation = buttonName;
        console.log("I have also reached here!");  
        return this.setState({...this.state, next: next, total: total, operation: operation}); 
          
   } else if (total !== "" && next === "" && operation !== "" && buttonName === ".") {
      next = "0.";
      return this.setState({...this.state, next: next}); // Returns this.state.next="0."
   } else if ((total !== "" && next === "" && operation !== "")
   && (buttonName === "+" || buttonName === "-" || buttonName === "x" || buttonName === "/" || buttonName === "=")) {
   console.log(`I am currently here`)
   return this.setState({...this, next: next, total: total, operation: operation}); // Return the current state
     
  } else if ((total !== "" && next === "" && operation === "")
      && (buttonName !== "+" || buttonName !== "-" || buttonName !== "x" || buttonName !== "/")) { // Added this block also
      console.log(`I am in this block`);
      if (buttonName === "%") {
        operation = buttonName;
        total = calculate({total, next, operation}, operation);
        operation = "";
        return this.setState({...this.state, next: next, total: total, operation: operation});
      } else if (buttonName === "+/-") {
        operation = buttonName;
        total = calculate({total, next, operation}, buttonName);
        operation = "";
        return this.setState({...this.state, next: next, total: total, operation: operation});
      } else if (buttonName === "AC") {
        total = "0";
        operation = "";
        return this.setState({...this.state, next: next, total:total, operation: operation});
      } else if ((total !== "") && next === "" && operation === ""
        && (buttonName === "+" || buttonName === "-" || buttonName === "x" || buttonName === "/")) {
        console.log(`Yes I am here!!`);
        operation = buttonName;
        return this.setState({...this.state, next: next, total:total, operation: operation});
      } else if (total !== "" && next === "" && operation === "" && buttonName === ".") { // Handling total= 0 && "."
        next = "0.";
        total = "";
        return this.setState({...this.state, next: next, total: total, operation: operation});
      } else
        console.log(`I am returning this button as next`);
        total = "";
        next = buttonName;
        operation = "";
        return this.setState({...this.state, next: next, total: total, operation: operation});
     } else if ((total !== "" && next === "" && operation === "")
      && (buttonName !== "+" || buttonName !== "-" || buttonName !== "x" || buttonName !== "/" )) { // Added this block
      next = buttonName;
      total = "";
      return this.setState({...this.state, next: next, total: total, operation: operation});
     } else if ((total !== null && next !== null && operation !== null) // Added this line
      && (buttonName === "+" || buttonName === "-" || buttonName === "x" || buttonName === "/")) {
      total = total + next;
      next = "";
      operation = buttonName;
      console.log(`operation = ${operation}`);

      this.setState({...this.state, next: next, total: total, operation: operation})
     } else if ((total === null && next === null && operation === null)  // Handling "." at the start of the application
     && buttonName === ".")  {
       console.log(`I am dealing with "."`);
      next = "0.";
      total = "";
      operation = "";
      return this.setState({...this.state, next: next, total: total, operation: operation});
     } else if ((total === null && next === null && operation === null) // Added this line 
     && (buttonName === "+" || buttonName === "-" || buttonName === "x" || buttonName === "/" || buttonName === "+/-"
     || buttonName === "%" || buttonName === "AC" || buttonName === "=")) {

     console.log(buttonName + " is clicked");
     console.log(`operation = ${operation}`);
     this.setState({...this.state, next: next, total: total, operation: operation}) // return the current state
     
}   else if (buttonName === "%") {
        if (total === "" && operation === "" && next !== "") {
          total = next;
          operation = buttonName;
          total = calculate({total, next, operation},  operation);
          operation = "";
          next = "";
          console.log(`total = ${total} I have seen you here`);
          return this.setState({...this.state, next: next, total: total, operation: operation });
          
        } else if (total !== "" && next === "" && operation !== "" && buttonName !== "%") {
          console.log(`I am executed!`);
          next = buttonName;
          return this.setState({...this.state, next: next});
        } else if (total !== "" && next !== "" && operation !== "" && buttonName !== "%") {
          next = next + buttonName;
          console.log(`We are here!`)
          return this.setState({...this.state, next: next});
        } else if (total !== "" && next !== "" && operation !== "" && buttonName === "%") {
          total = next; 
          console.log(`The state total is ${this.state.total}`);
          operation = buttonName;
          next = calculate({total, next, operation}, operation);
          console.log(`Next = ${next}`);
          return this.setState({...this.state, next: next});
        }  else if ((total !== "" && next === "" && operation !== "") && buttonName === "%") {
          console.log(`checked in here!`);
          return this.setState({...this.state, total: total, next: next, operation: operation});
        } else {
          console.log(`I am right here`)
        total = next;
        next = "";
        operation = buttonName
        total = calculate({total, next, operation}, operation);
        console.log(`I have left calculate.`)
       // next = "";
        operation = "";
        return this.setState({...this.state, next: next, total: total, operation: operation});
        }
        
   } else if (buttonName === "=") {

        console.log(`Clicked: ${buttonName} button`);
        console.log(calculate({total, next, operation}, operation));

        return this.setState({...this.state, next: "", total: calculate({total, next, operation}, operation), operation: ""});
   } else if (buttonName === "+/-") {
        if (total !== "" && operation !== "" && next === "" && buttonName === "+/-") {
          return this.setState({...this.state, next: next, total: total, operation:operation});
        } else if (total !== "" && operation !== "" && next !== "" && buttonName === "+/-") {
          total = next; // We use the current next(second operand) as total in calculate method below
          operation = buttonName;
          next = calculate({total, next, operation}, buttonName);

          return this.setState({...this.state, next: next});
        } else if (total === null && next === null && operation === null && buttonName === "+/-") { // Added this line
          // return this.setState({...this.state});
        } else {
          console.log(`Clicked: ${buttonName}`);
          console.log(calculate({total, next, buttonName}, buttonName));

          return this.setState({...this.state, next: "", total: calculate({total, next, buttonName}, buttonName), operation: ""});
        }
        
   } else if (buttonName === "AC"){

        console.log(`Clicked: ${buttonName}`);
        return this.setState({...this.state, next: "", total: "0", operation: ""});
   } else {
        console.log("Not clicked");

        if (operation !== null) {
          if (next.includes(".") && buttonName === ".") {
            return this.setState({...this.state, next: next, total: total, operation: operation});
          } else if (next !== null && buttonName !== ".") {
            console.log("I am actually here");
            next = next + buttonName;
            return this.setState({...this.state, next: next});
          } else if (next.indexOf(0) === 0 && buttonName === ".") {
            console.log(`Zero point!`);
            next = next + ".";
            return this.setState({...this.state, next: next});
          } else if (next.indexOf(0) === 0 && buttonName !== ".") {
            console.log("First")
            next = buttonName;
            return this.setState({...this.state, next: next});
          }  else if ((next.indexOf(0) !== null) && (buttonName === ".")) {
            console.log("Second");
            next = next + ".";
            return this.setState({...this.state, next: next});
          } else {
            console.log("I have also passed here!");
            next = next + buttonName;
            return this.setState({...this.state, next: next})
          }
          // this.setState({...this.state, next: next})
          // console.log("this is where I am");
        }  else {
          console.log("No I am here instead");
          return this.setState({...this.state, next: buttonName , total: (total + next) === 0 ? "" : total + next, operation: ""});
        }   
   }
   console.log(`Clicked button: ${buttonName}`);
 }      
  render() {
    return (
      <div className="App">
      <h1>Math-Magician</h1>
      <React.Fragment>
        {(this.state.total === null && this.state.next === null && this.state.operation === null)? 
        <Display result={`0`} /> : 
        <Display result={`${this.state.total}${this.state.operation}${this.state.next}`} />}
        <ButtonPanel clickHandler= {this.handleClick}/>
      </React.Fragment>
    </div>
    )
  }
}
