import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Comment from "./Comment";
import Article from "../articles/Article";

import { getArticles } from "../../actions/commentActions";

const ListComments = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  console.log("articles: " + JSON.stringify(articles));

  const comments = articles.map((article) => {
    console.log("comments " + JSON.stringify(article.comments));
    return article.comments;
  });

  const comment = comments.map((comment) => {
    console.log("Comment: " + JSON.stringify(comment.comment));
    return comment.comment;
  });
  console.log("hello: " + JSON.stringify(comment));

  return (
    <>
      {comments &&
        comments.map((comment) => {
          return <Comment comment={comment} />;
        })}
    </>
  );
};

export default ListComments;

// {articles &&
//   articles.map((article) => {
//     return (
//       <Article
//         article={article}
//         key={article.id}
//         comments={article.comments}
