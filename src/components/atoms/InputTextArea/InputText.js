import React from "react";
import PropTypes from "prop-types";
import "./inputText.css";

const InputText = ({ ...props }) => (
  <textarea
    className={props.styles}
    placeholder="Here you can add comment..."
    aria-label="Input text field"
  />
);

InputText.propTypes = {
  styles: PropTypes.string.isRequired,
};

export default InputText;
