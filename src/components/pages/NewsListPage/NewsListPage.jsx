import React, { useState, useEffect } from "react";
import { fetchData } from "../../../functions/fetchData";
import NewsListTemplate from "../../templates/NewsListTemplate/NewsListTemplate";

const NewsListPage = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const test = () => console.log("Action");

  useEffect(() => {
    fetchData(
      "https://jsonplaceholder.typicode.com/posts",
      setNews,
      setError,
      setLoading
    );
  }, []);
  console.log(error, loading);
  return (
    <>
      <NewsListTemplate
        news={news}
        styles={["m-menu", "a-button a-button"]}
        firstBtnFunc={test}
        buttonTitles={["News list", "Album"]}
        secondBtnFunc={test}
      />
    </>
  );
};

export default NewsListPage;
