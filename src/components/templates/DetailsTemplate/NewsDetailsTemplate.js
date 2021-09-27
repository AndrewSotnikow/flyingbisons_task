import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./newsDetailsTemplate.css";
import Header from "../../molecules/Header/Header";
import Button from "../../atoms/button/Button";
import AddComment from "../../organisms/AddComment/AddComment";
import NewsDetails from "../../molecules/NewsDetails/NewsDetails";
import UsersCommentList from "../../organisms/UsersCommentsList/UsersCommentsList";
import { ReactComponent as GoBackButtonImage } from "../../atoms/Icons/GoBackButton.svg";
import TitleH2 from "../../atoms/Titles/TitleH2";

const NewsDetailsTemplate = ({ ...props }) => {
  const errorSection = (
    <div className="t-NewsDetailsTemplate__error">
      <TitleH2
        styles="a-title"
        title={`Cannot load comments... ${props.error}`}
      />
    </div>
  );
  return (
    <>
      <header
        className="t-NewsDetailsTemplate__header"
        aria-label="News details page header"
      >
        <Header title="News details" styles="m-header__title --darkBlue" />
        <NavLink to="/news" className="t-NewsDetailsTemplate__NavLink">
          <Button
            styles="t-NewsDetailsTemplate--button"
            onclick={() => {}}
            title={<GoBackButtonImage />}
          />
        </NavLink>
      </header>
      <section
        className="t-NewsDetailsTemplate__detailsSection"
        aria-label="News post section"
      >
        <NewsDetails post={props.post} />
      </section>
      <section
        className="t-NewsDetailsTemplate__commentSection"
        aria-label="Add comment section"
      >
        <AddComment />
      </section>
      <section
        className="t-NewsDetailsTemplate__commentSection"
        aria-label="List of user comments to the news"
      >
        {props.error
          ? errorSection
          : props.userComments && (
              <UsersCommentList comments={props.userComments} />
            )}
      </section>
    </>
  );
};

NewsDetailsTemplate.propTypes = {
  userComments: PropTypes.arrayOf(PropTypes.object).isRequired,
  post: PropTypes.objectOf(PropTypes.any).isRequired,
  error: PropTypes.string.isRequired,
};

export default NewsDetailsTemplate;
