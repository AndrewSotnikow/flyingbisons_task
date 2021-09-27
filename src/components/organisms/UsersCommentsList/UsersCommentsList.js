import React from "react";
import PropTypes from "prop-types";
import "./usersCommentsList.css";
import CommentsListItem from "../../molecules/CommentsListItem/CommentsListItem";

const UsersCommentList = ({ ...props }) => {
  return (
    <ul className="o-usersCommentsList" aria-label="List of the users comments">
      {props.comments &&
        props.comments.map((post) => (
          <CommentsListItem post={post} key={post.id} />
        ))}
    </ul>
  );
};

UsersCommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UsersCommentList;
