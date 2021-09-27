import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ ...props }) => (
  <button
    aria-label={typeof props.title === "string" ? props.title : "button"}
    type="button"
    className={props.styles}
    onClick={() => props.onclick()}
  >
    {props.title}
  </button>
);

Button.propTypes = {
  styles: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.object])
    .isRequired,
  onclick: PropTypes.func.isRequired,
};

export default Button;
