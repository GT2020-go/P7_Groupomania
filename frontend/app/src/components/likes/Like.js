import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

import { createLike, deleteLike } from "../../actions/likeActions";

import jwtDecode from "jwt-decode";

const CreateLike = ({ articleId }) => {
  const [like, setLike] = useState("");
  const userId = useSelector((state) => state.auth.id); // get userId from store

  const likeData = { like, articleId, userId };

  const articleData = useSelector((state) => state.articles[articleId - 1]);

  console.log(articleData);

  const likes = articleData.likes;

  console.log(likes);

  const likeContent = likes.map((like) => likes.like);

  console.log(likeContent);

  const dispatch = useDispatch();
  const history = useHistory();
  const id = articleId; //--------------------- to update below

  const handleLike = () => {
    console.log("lapin: " + userId);

    // pourquoi pas recup l'userId avant??

    const likeExist = likes.find((like) => like.userId === userId);
    if (likeExist) {
      const likeId = likeExist.id;
      console.log("patate chaude");

      dispatch(deleteLike(likeId));
      history.push("/articles");
    } else {
      console.log("petard mouille");
      setLike(true);

      dispatch(createLike(likeData));
      history.push("/articles");
    }
  };

  return (
    <>
      <div className="d-flex flex-row icons d-flex align-items-center">
        <button type="button" onClick={handleLike} id={id}>
          <span className="material-icons">favorite</span>
        </button>

        <p className="text-justify">{likes.length} likes</p>
      </div>
    </>
  );
};

export default CreateLike;
