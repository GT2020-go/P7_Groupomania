import React, { useEffect } from "react";

import { getOneArticle } from "../../actions/articleActions";

import { useDispatch, useSelector, useStore } from "react-redux";
import { useHistory } from "react-router";

import { useParams } from "react-router";
import EditArticle from "./EditArticle";

const GetOneArticle = () => {
  const { id } = useParams();
  const articleId = id;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    console.log(articleId);
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
