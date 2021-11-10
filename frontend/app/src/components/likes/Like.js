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
  // .filter((likes) => likes.userId === "1");

  console.log("userId: ");
  console.log(userId);

  console.log("articleId: ");
  console.log(articleId);

  console.log("likes: ");
  console.log(likes);
  console.log(likes.some((like) => like.userId === userId));

  // const isLike = () => {
  //   if () {
  //     likes.filter((like) => like.userId === userId);
  //   } else {
  //     return false;
  //   }
  // };

  // like avec userId = userId state => delete sinon create

  // console.log(isLike);

  const dispatch = useDispatch();

  const handleLike = () => {
    if (likes.some((like) => like.userId === userId)) {
      console.log(true);
      const likeId = likes.find((like) => like.userId === userId).id;
      // console.log(like.id);
      dispatch(deleteLike(likeId));
    } else {
      console.log(false);
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
