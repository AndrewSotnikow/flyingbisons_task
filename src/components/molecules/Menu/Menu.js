import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../../atoms/button/Button";
import "./menu.css";
import "../../atoms/button/button.css";

const Menu = ({ ...props }) => {
  const [checked, setChecked] = useState(true);
  return (
    <nav className="m-menu" aria-label="Navigation menu">
      <NavLink
        to="/news"
        className="m-menu__navLink"
        aria-label="Navigation menu link"
      >
        <Button
          styles={!checked ? "m-menu__button" : "m-menu__button --active"}
          onclick={() => setChecked(true)}
          title={props.title[0]}
        />
      </NavLink>
      <div className="m-menu__verticalLine" />
      <NavLink
        to="/album"
        className="m-menu__navLink"
        aria-label="Navigation menu link"
      >
        <Button
          styles={checked ? "m-menu__button" : "m-menu__button --active"}
          onclick={() => setChecked(false)}
          title={props.title[1]}
        />
      </NavLink>
    </nav>
  );
};

Menu.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Menu;
