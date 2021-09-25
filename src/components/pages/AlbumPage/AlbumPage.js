import React from "react";
import AlbumTemplate from "../../templates/AlbumTemplate/AlbumTemplate";

const NewsListPage = () => {
  return (
    <>
      <AlbumTemplate
        styles={["m-menu", "a-button a-button--active"]}
        buttonTitles={["News list", "Album"]}
      />
    </>
  );
};

export default NewsListPage;
