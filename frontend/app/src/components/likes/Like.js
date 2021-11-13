import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { createLike, deleteLike } from "../../actions/likeActions";

const likeDataInitialState = {
  userId: "",
  articleId: "",
  like: "",
};

const Like = ({ articleId }) => {
  const [likeData, setLikeData] = useState(likeDataInitialState);
  const userId = useSelector((state) => state.auth.id);
  const likes = useSelector((state) => state.articles).filter(
    (article) => article.id === articleId
  )[0].likes;

  const dispatch = useDispatch();

  const handleLike = () => {
    if (likes.some((like) => like.userId === userId)) {
      const likeId = likes.find((like) => like.userId === userId).id;
      dispatch(deleteLike(likeId));
    } else {
      dispatch(
        createLike({
          ...setLikeData,
          userId: userId,
          articleId: articleId,
          like: true,
        })
      );
    }
  };

  return (
    <>
      <button type="button" value={likeData} onClick={handleLike}>
        <span className="material-icons">favorite</span>
      </button>
    </>
  );
};

export default Like;
