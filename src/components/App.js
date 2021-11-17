import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../App.css";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import Header from "./Header";
import clickedButton from "../logic/clickedButton";
import Home from "./routes/Home";
import Quote from "./routes/Quote";

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
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/quote" component={Quote} />
            <Route
              path="/calculator"
              render={() => (
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
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
