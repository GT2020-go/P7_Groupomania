import React from "react";
import { useSelector } from "react-redux";

import Comment from "./Comment";

const ListComments = ({ articleId }) => {
  const articleData = useSelector((state) =>
    state.articles.find((article) => article.id === articleId)
  );

  const comms = articleData.comments;

  return (
    <>
      {comms &&
        comms.map((comment) => {
          return <Comment comment={comment} key={comment.id} />;
        })}
    </>
  );
};

export default ListComments;
