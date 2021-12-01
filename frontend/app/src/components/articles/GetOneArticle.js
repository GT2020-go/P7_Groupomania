import React, { useEffect } from "react";

import { getOneArticle } from "../../actions/articleActions";

import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router";
import EditArticle from "./EditArticle";

const GetOneArticle = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    const articleId = id;
    dispatch(getOneArticle(articleId));
  }, [dispatch]);

  const articleData = useSelector((state) => state.articles[0]);

  return (
    <>
      <EditArticle article={articleData} />
    </>
  );
};

export default GetOneArticle;
