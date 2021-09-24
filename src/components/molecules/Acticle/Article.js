import React from "react";
import PropTypes from "prop-types";
import TitleH2 from "../../atoms/Titles/TitleH2";
import { ReactComponent as Arrow } from "../../atoms/Icons/Arrow-Right.svg";

const Article = ({ ...props }) => (
  <div key={props.post.id} className="m-article">
    <div className="m-article__titleContainer">
      <TitleH2 title={props.post.title} styles="a-article__title" />
      <TitleH2
        title={props.post.title}
        styles="a-article__title  a-article__title--lightgray a-article__title--subTitle"
      />
    </div>
    <div className="m-article__arrowContainer">
      <Arrow />
    </div>
  </div>
);

Article.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Article;
