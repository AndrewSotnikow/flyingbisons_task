import React from "react";
import PropTypes from "prop-types";
import "./text.css";

const Text = ({ ...props }) => <p className={props.styles}>{props.text}</p>;

Text.propTypes = {
  styles: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Text;
