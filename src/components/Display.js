import PropTypes from "prop-types";
import React from "react";

const Display = ({ result }) => {
  return <div className="display-result">{result}</div>;
};

Display.defaultProps = {
  result: "0",
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
