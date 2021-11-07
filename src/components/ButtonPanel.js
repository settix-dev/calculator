import React from "react";
import Button from "./Button";

const ButtonPanel = ({ clickHandler }) => {
  return (
    <div className="btn-panel">
      <div className="d-flex flex-column bd-highlight mb-3 d-grid gap-2 d-md-block">
        <div class="p-2 bd-highlight btn btn-outline-primary button">
          <Button name="AC" handleClick={clickHandler} />
        </div>
        <div class="p-2 bd-highlight btn btn-outline-primary button">
          {" "}
          <Button name="+/-" handleClick={clickHandler} />
        </div>
        <div class="p-2 bd-highlight btn btn-outline-primary button">
          <Button name="%" handleClick={clickHandler} />
        </div>
        <div class="p-2 bd-highlight btn btn-outline-primary button btn-opt">
          <Button name="/" handleClick={clickHandler} />
        </div>
      </div>
      <div className="d-flex flex-column bd-highlight mb-3">
        <div class="p-2 bd-highlight btn btn-outline-primary button">
          <Button name="7" handleClick={clickHandler} />
        </div>
        <div class="p-2 bd-highlight btn btn-outline-primary button">
          {" "}
          <Button name="8" handleClick={clickHandler} />
        </div>
        <div class="p-2 bd-highlight btn btn-outline-primary button">
          <Button name="9" handleClick={clickHandler} />
        </div>
        <div class="p-2 bd-highlight btn btn-outline-primary button btn-opt">
          <Button name="x" handleClick={clickHandler} />
        </div>
      </div>
      <div className="d-flex flex-column bd-highlight mb-3">
        <div class="p-2 bd-highlight btn btn-outline-primary button">
          <Button name="4" handleClick={clickHandler} />
        </div>
        <div class="p-2 bd-highlight btn btn-outline-primary button">
          {" "}
          <Button name="5" handleClick={clickHandler} />
        </div>
        <div class="p-2 bd-highlight btn btn-outline-primary button">
          <Button name="6" handleClick={clickHandler} />
        </div>
        <div class="p-2 bd-highlight btn btn-outline-primary button btn-opt">
          <Button name="-" handleClick={clickHandler} />
        </div>
      </div>
      <div className="d-flex flex-column bd-highlight mb-3">
        <div class="p-2 bd-highlight btn btn-outline-primary button">
          <Button name="1" handleClick={clickHandler} />
        </div>
        <div class="p-2 bd-highlight btn btn-outline-primary button">
          {" "}
          <Button name="2" handleClick={clickHandler} />
        </div>
        <div class="p-2 bd-highlight btn btn-outline-primary button">
          <Button name="3" handleClick={clickHandler} />
        </div>
        <div class="p-2 bd-highlight btn btn-outline-primary button btn-opt">
          <Button name="+" handleClick={clickHandler} />
        </div>
      </div>
      <div className="d-flex flex-column bd-highlight mb-3">
        <div class="p-2 bd-highlight btn btn-outline-primary button zero">
          <Button name="0" handleClick={clickHandler} />
        </div>
        <div class="p-2 bd-highlight btn btn-outline-primary button">
          {" "}
          <Button name="." handleClick={clickHandler} />
        </div>
        <div class="p-2 bd-highlight btn btn-outline-primary button btn-opt">
          <Button name="=" handleClick={clickHandler} />
        </div>
      </div>
    </div>
  );
};

export default ButtonPanel;
