import React from "react";
import PropTypes from "prop-types";

const Button = ({ ...props }) => (
  <button
    type="button"
    className={props.styles}
    onClick={() => props.onclick()}
  >
    {props.title}
  </button>
);

Button.propTypes = {
  styles: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
};

export default Button;
