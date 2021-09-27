import React from "react";
import PropTypes from "prop-types";
import "./newsDetails.css";
import Text from "../../atoms/Text/Text";
import TitleH2 from "../../atoms/Titles/TitleH2";

const NewsDetails = ({ ...props }) => (
  <div key={props.post.id} className="m-newsDetails" aria-label="News details">
    <TitleH2 title={props.post.title} styles="m-newsDetails__title" />
    <Text text={props.post.body} styles="m-newsDetails__text --darkBlue" />
  </div>
);

NewsDetails.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default NewsDetails;
