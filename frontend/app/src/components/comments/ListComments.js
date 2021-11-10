import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Comment from "./Comment";

const ListComments = ({ articleId }) => {
  console.log(articleId);

  // const findArticle = (id) => {
  //   return articles.id === articleId;
  // };

  const articleData = useSelector((state) => state.articles);

  console.log(articleData);

  const comms = articleData.comments;
  console.log(comms);
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
