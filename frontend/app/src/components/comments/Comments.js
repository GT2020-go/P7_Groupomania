import React from "react";
import AddComment from "./AddComment";
import ListComments from "./ListComments";

const Comments = ({ articleId, comments }) => {
  return (
    <>
      <h1>Comments component</h1>
      <AddComment articleId={articleId} />
      <ListComments comments={comments} />
    </>
  );
};

export default Comments;
