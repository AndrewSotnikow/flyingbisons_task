import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./newsGrid.css";
import ListItem from "../../molecules/ListItem/ListItem";

const NewsGrid = ({ ...props }) => (
  <ul className="o-newsGrid" aria-label="List of the news">
    {props.news.map((post) => (
      <li className="o-newsGrid__listItem" key={post.id} aria-label="List item">
        <Link
          to={{ pathname: "/details", state: { post } }}
          className="o-newsGrid__Link"
          aria-label="List Link"
        >
          <ListItem post={post} key={post.id} />
        </Link>
      </li>
    ))}
  </ul>
);

NewsGrid.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NewsGrid;
