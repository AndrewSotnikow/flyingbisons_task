import React from "react";
import PropTypes from "prop-types";
import "./newsGrid.css";
import Article from "../../molecules/Acticle/Article";

const NewsGrid = ({ ...props }) => (
  <div className="o-newsGrid">
    {props.news.map((post) => (
      <Article post={post} key={post.id} />
    ))}
  </div>
);

NewsGrid.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NewsGrid;
