import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Comment from "./Comment";

const ListComments = ({ articleId }) => {
  console.log(articleId);

  // const commentsData = useSelector(
  //   (state) => state.articles.articleId.comments
  // );

  const articleData = useSelector((state) => state.articles[articleId - 1]);

  console.log(articleData);

  const comms = articleData.comments;

  console.log(comms);

  const commentContent = comms.map((comment) => comms.comment);

  console.log(commentContent);

  // console.log(JSON.stringify(commentsData));
  return (
    <>
      {comms &&
        comms.map((comment) => {
          return <Comment comment={comment} />;
        })}
      <div>blabla</div>
    </>
  );
};

export default ListComments;
