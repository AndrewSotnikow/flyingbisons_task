import React from "react";
import PropTypes from "prop-types";

const TitleH2 = ({ ...props }) => (
  <h2 aria-label="Subtitle" className={props.styles}>
    {props.title}
  </h2>
);

TitleH2.propTypes = {
  styles: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TitleH2;
