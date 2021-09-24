import React from "react";
import PropTypes from "prop-types";
import Header from "../molecules/Header/Header";
import NewsGrid from "../organisms/NewsGrid/NewsGrid";
import "./newsListTemplate.scss";
import Menu from "../molecules/Menu/Menu";

const NewsListTemplate = (props) => {
  const { news, buttonTitles, styles, firstBtnFunc, secondBtnFunc } = props;

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
        <nav>
          <Menu
            title={buttonTitles}
            styles={styles}
            firstBtnFunc={firstBtnFunc}
            secondBtnFunc={secondBtnFunc}
          />
        </nav>
      </>
    );
  }
  return <></>;
};

NewsListTemplate.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
  buttonTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  styles: PropTypes.arrayOf(PropTypes.string).isRequired,
  firstBtnFunc: PropTypes.func.isRequired,
  secondBtnFunc: PropTypes.func.isRequired,
};

export default NewsListTemplate;
