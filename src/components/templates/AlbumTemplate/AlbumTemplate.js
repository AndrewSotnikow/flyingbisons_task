import React from "react";
import Header from "../../molecules/Header/Header";
import "./albumTemplate.scss";

const AlbumTemplate = () => {
  return (
    <>
      <header className="header">
        <Header
          title="Album"
          styles="a-header__title a-header__title--darkBlue"
        />
      </header>
    </>
  );
};

export default AlbumTemplate;
