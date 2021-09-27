import React from "react";
import PropTypes from "prop-types";
import TitleH2 from "../../atoms/Titles/TitleH2";
import "./header.css";

const Header = ({ ...props }) => (
  <div className="m-header">
    <TitleH2 title={props.title} styles={props.styles} />
  </div>
);

Header.propTypes = {
  styles: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
