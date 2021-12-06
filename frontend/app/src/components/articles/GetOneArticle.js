import React, { useEffect } from "react";

import { getOneArticle } from "../../actions/articleActions";

import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router";
import EditArticle from "./EditArticle";

const GetOneArticle = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneArticle(id));
  }, [dispatch]);

  const articleData = useSelector((state) =>
    state.articles.find((article) => article.id == id)
  );

  console.log(id);
  console.log({ id });
  console.log(articleData);

  return (
    <>
      <EditArticle articleId={id} />
    </>
  );
};

export default GetOneArticle;
