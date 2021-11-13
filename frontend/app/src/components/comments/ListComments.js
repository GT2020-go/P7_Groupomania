import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
          return <Comment comment={comment} />;
        })}
    </>
  );
};

export default ListComments;
