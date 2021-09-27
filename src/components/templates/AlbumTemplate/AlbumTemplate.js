import React from "react";
import Header from "../../molecules/Header/Header";
import "./albumTemplate.css";

const AlbumTemplate = () => {
  return (
    <>
      <header className="header" aria-label="Album page header">
        <Header
          title="Album"
          styles="m-header__title m-header__title--darkBlue"
        />
      </header>
    </>
  );
};

export default AlbumTemplate;
