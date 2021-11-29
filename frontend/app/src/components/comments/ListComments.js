import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Comment from "./Comment";

import { getArticles } from "../../actions/articleActions";
import { listComments } from "../../actions/commentActions";

const ListComments = ({ articleId }) => {
  const articleData = useSelector((state) =>
    state.articles.find((article) => article.id === articleId)
  );

  const comms = articleData.comments;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listComments());
  }, [dispatch]);

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
