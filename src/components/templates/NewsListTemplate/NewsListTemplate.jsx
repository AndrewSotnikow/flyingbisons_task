import React from "react";
import PropTypes from "prop-types";
import Header from "../../molecules/Header/Header";
import NewsGrid from "../../organisms/NewsGrid/NewsGrid";
import "./newsListTemplate.scss";

const NewsListTemplate = (props) => {
  const { news } = props;

  if (news) {
    return (
      <>
        <header className="header">
          <Header
            title="News list"
            styles="a-header__title a-header__title--darkBlue"
          />
        </header>
        <section className="section">
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
