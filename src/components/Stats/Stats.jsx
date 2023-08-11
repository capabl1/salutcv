/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Stats = ({ className, divClassName, text = "Stats" }) => {
  return (
    <div className={`stats ${className}`}>
      <div className={`text-wrapper ${divClassName}`}>{text}</div>
    </div>
  );
};

Stats.propTypes = {
  text: PropTypes.string,
};
