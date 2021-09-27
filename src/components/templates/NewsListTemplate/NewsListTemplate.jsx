import React from "react";
import PropTypes from "prop-types";
import Header from "../../molecules/Header/Header";
import NewsGrid from "../../organisms/NewsGrid/NewsGrid";
import "./newsListTemplate.css";

const NewsListTemplate = (props) => {
  const { news } = props;

  if (news) {
    return (
      <>
        <header
          className="t-NewsListTemplate--header"
          aria-label="News list page header"
        >
          <Header title="News list" styles="m-header__title --darkBlue" />
        </header>
        <section className="t-NewsListTemplate--section" aria-label="News list">
          <NewsGrid news={news} />
        </section>
      </>
    );
  }
  return <></>;
};

NewsListTemplate.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NewsListTemplate;
