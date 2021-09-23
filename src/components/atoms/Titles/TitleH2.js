import React from "react";
import PropTypes from "prop-types";

const TitleH2 = ({ ...props }) => (
  <h2 className={props.class}>{props.title}</h2>
);

TitleH2.propTypes = {
  class: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TitleH2;
