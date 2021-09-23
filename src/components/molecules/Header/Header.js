import React from "react";
import PropTypes from "prop-types";
import TitleH2 from "../../atoms/Titles/TitleH2";

const Header = ({ ...props }) => (
  <div className="m__header">
    <TitleH2 title={props.title} class={props.class} />
  </div>
);

Header.propTypes = {
  class: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
