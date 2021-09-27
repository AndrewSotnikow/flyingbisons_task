import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { fetchNews } from "../../../utils/fetchNews";
import scrollHandler from "../../../utils/scrollHandler";
import NewsListTemplate from "../../templates/NewsListTemplate/NewsListTemplate";
import TitleH1 from "../../atoms/Titles/TitleH1";
import "./newsList.css";

const NewsListPage = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (fetching) {
      fetchNews(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${currentPage}`,
        setNews,
        news,
        setError,
        setLoading,
        setCurrentPage,
        setFetching,
        setTotalCount
      );
    }
    if (news && totalCount) {
      document.addEventListener("scroll", (e) => {
        scrollHandler(e, news, totalCount, setFetching);
      });
      return function removeListener() {
        document.removeEventListener("scroll", (e) => {
          scrollHandler(e, news, totalCount, setFetching);
        });
      };
    }
    return undefined;
  }, [fetching]); // eslint-disable-line react-hooks/exhaustive-deps

  const status = {
    fetched: news,
    loading,
    error,
  };
  if (status.loading) {
    return (
      <div className="p-NewsListPage__loader" aria-label="Loading section">
        <TitleH1 styles="a-title" title="Loading..." />
        <Loader type="Puff" color="#00BFFF" height={60} width={60} />
      </div>
    );
  }
  if (status.error) {
    return (
      <div className="p-NewsListPage__error" aria-label="Error section">
        <TitleH1
          styles="m-header__title"
          title={`Houston we have a problem... ${error}`}
        />
      </div>
    );
  }
  if (!status.loading) {
    return <>{status.fetched && <NewsListTemplate news={news} />}</>;
  }

  return <></>;
};

// export default NewsListPage;
export default React.memo(NewsListPage);
