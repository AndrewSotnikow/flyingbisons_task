import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../../atoms/button/Button";
import "./menu.css";
import "../../atoms/button/button.css";

const Menu = ({ ...props }) => {
  const [checked, setChecked] = useState(true);
  return (
    <nav className={props.styles[0]}>
      <NavLink to="/news" className="navLink">
        <Button
          styles={checked ? props.styles[1] : `${props.styles[1]}--active`}
          onclick={() => setChecked(true)}
          title={props.title[0]}
        />
      </NavLink>
      <div className="verticalLine" />
      <NavLink to="/album" className="navLink">
        <Button
          styles={!checked ? props.styles[1] : `${props.styles[1]}--active`}
          onclick={() => setChecked(false)}
          title={props.title[1]}
        />
      </NavLink>
    </nav>
  );
};

Menu.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  styles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Menu;
