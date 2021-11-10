import React from "react";
import AddComment from "./AddComment";
import ListComments from "./ListComments";

const Comments = ({ articleId }) => {
  return (
    <>
      <AddComment articleId={articleId} />
      <ListComments articleId={articleId} />
    </>
  );
};

export default Comments;
