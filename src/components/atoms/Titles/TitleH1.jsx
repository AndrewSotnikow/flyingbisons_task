import React from "react";
import PropTypes from "prop-types";

const TitleH1 = ({ ...props }) => (
  <h1 className={props.class}>{props.title}</h1>
);

TitleH1.propTypes = {
  class: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TitleH1;
