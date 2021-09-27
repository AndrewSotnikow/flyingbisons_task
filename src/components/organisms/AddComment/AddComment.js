import React from "react";
import Button from "../../atoms/button/Button";
import TitleH2 from "../../atoms/Titles/TitleH2";
import "./addComment.css";
import InputText from "../../atoms/InputTextArea/InputText";

const AddComment = () => (
  <div className="m-addComment" aria-label="Add comment block">
    <TitleH2 title="Comment" styles="m-addComment__title" />
    <InputText styles="m-addComment__commentInput" />
    <Button
      styles="m-addComment__commentButton"
      title="Add"
      onclick={() => {}}
    />
  </div>
);

export default AddComment;
