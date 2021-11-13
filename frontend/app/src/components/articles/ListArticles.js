import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Article from "./Article";
import { getArticles } from "../../actions/articleActions";

const ListArticles = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <>
      {articles &&
        articles.map((article) => {
          return (
            <Article
              article={article}
              key={article.id}
              commentsData={article.comments}
            />
          );
        })}
    </>
  );
};

export default ListArticles;
