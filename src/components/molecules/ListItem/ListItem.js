import React from "react";
import PropTypes from "prop-types";
import TitleH2 from "../../atoms/Titles/TitleH2";
import { ReactComponent as Arrow } from "../../atoms/Icons/Arrow-Right.svg";
import "./listItem.css";
import Text from "../../atoms/Text/Text";

const ListItem = ({ ...props }) => (
  <div key={props.post.id} className="m-listItem" aria-label="List item">
    <div className="m-listItem__titleContainer">
      <TitleH2 title={props.post.title} styles="m-listItem__title" />
      <Text text={props.post.body} styles="m-listItem__text --lightgray" />
    </div>
    <div className="m-listItem__arrowContainer">
      <Arrow alt="Arrow image" />
    </div>
  </div>
);

ListItem.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ListItem;
