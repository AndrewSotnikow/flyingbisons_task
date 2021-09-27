import React from "react";
import PropTypes from "prop-types";
import Text from "../../atoms/Text/Text";
import TitleH2 from "../../atoms/Titles/TitleH2";
import "./commentsListItem.css";

const CommentsListItem = ({ ...props }) => (
  <li key={props.post.id} className="m-commentListItem" aria-label="List item">
    <TitleH2 title={props.post.email} styles="m-commentListItem__title" />
    <Text text={props.post.body} styles="m-commentListItem__text --lightgray" />
  </li>
);

CommentsListItem.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CommentsListItem;
