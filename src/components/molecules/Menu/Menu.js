import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/button/Button";
import "./menu.css";
import "../../atoms/button/button.css";

const Menu = ({ ...props }) => {
  const [checked, setChecked] = useState(true);
  const t = () => setChecked(false);
  console.log(checked, t);
  return (
    <nav className={props.styles[0]}>
      <Button
        styles={!checked ? props.styles[1] : `${props.styles[1]}--active`}
        onclick={props.firstBtnFunc}
        title={props.title[0]}
      />
      <div className="verticalLine" />
      <Button
        styles={checked ? props.styles[1] : `${props.styles[1]}--active`}
        onclick={props.secondBtnFunc}
        title={props.title[1]}
      />
    </nav>
  );
};

Menu.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  styles: PropTypes.arrayOf(PropTypes.string).isRequired,
  firstBtnFunc: PropTypes.func.isRequired,
  secondBtnFunc: PropTypes.func.isRequired,
};

export default Menu;
