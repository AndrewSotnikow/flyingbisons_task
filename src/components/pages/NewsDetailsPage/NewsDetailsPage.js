import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useLocation } from "react-router-dom";
import "./newsDetailsPage.css";
import fetchComments from "../../../utils/fetchComments";
import NewsDetailsTemplate from "../../templates/DetailsTemplate/NewsDetailsTemplate";
import TitleH1 from "../../atoms/Titles/TitleH1";

const NewsDetails = () => {
  const location = useLocation();
  const { post } = location.state;
  const url = `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`;

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userComments, setUserComments] = useState([]);

  const status = {
    fetched: userComments,
    loading,
    error,
  };

  useEffect(() => {
    fetchComments(url, userComments, setUserComments, setError, setLoading);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  if (!status.loading) {
    return (
      <>
        <NewsDetailsTemplate
          post={post}
          error={error}
          userComments={userComments}
        />
      </>
    );
  }
  if (status.loading) {
    return (
      <div className="t-NewsDetails__loader" aria-label="Loading section">
        <TitleH1 styles="a-title" title="Loading..." />
        <Loader type="Puff" color="#00BFFF" height={60} width={60} />
      </div>
    );
  }
  return <></>;
};

export default NewsDetails;
