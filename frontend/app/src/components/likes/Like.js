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
  // const userId_ = useSelector((state) => state.auth.id);

  // const testIfLikeExist = (like) => like.userId === userId_;
  // const isLike = useSelector(
  //   (state) => state.articles[articleId - 1]
  // ).likes.find(testIfLikeExist);

  const dispatch = useDispatch();

  const handleLike = () => {
    // const isLike = useSelector(
    //   (state) => state.articles[articleId - 1]
    // ).likes.find(testIfLikeExist);
    // console.log(isLike);
    // if (isLike) {
    //   console.log(true);
    //   console.log(isLike.id);
    //   dispatch(deleteLike(isLike.id));
    // } else {
    //   console.log(false);
    //   dispatch(
    //     createLike({
    //       ...setLikeData,
    //       userId: userId_,
    //       articleId: articleId,
    //       like: true,
    //     })
    //   );
    // }
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
