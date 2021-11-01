import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { createLike, deleteLike } from "../../actions/likeActions";

const CreateLike = ({ articleId }) => {
  const [like, setLike] = useState(null);
  const userId = useSelector((state) => state.auth.id); // get userId from store

  const likeData = { like, articleId, userId };

  const articleData = useSelector((state) => state.articles[articleId - 1]);

  console.log(articleData);

  const likes = articleData.likes;

  console.log(likes);

  const likeContent = likes.map((like) => likes.like);

  console.log(likeContent);

  const likeTest = () => {
    const likeExist = likes.find((like) => like.userId === userId);

    if (!likeExist) {
      console.log(false);
      return true;
    } else {
      console.log(true);
      console.log("likeId: " + likeExist.id);
      const likeId = likeExist.id;
      return deleteLike(likeId);
      //here we will need to call function to delete like
    }
  };

  const dispatch = useDispatch();

  const id = articleId; //--------------------- to update below

  //   const handleLike = () => {
  //     setLike(likeTest());
  //     dispatch(createLike(likeData));
  //   };

  return (
    <>
      <div className="d-flex flex-row icons d-flex align-items-center">
        <input
          type="button"
          onClick={() => {
            setLike(likeTest());
            dispatch(createLike(likeData));
          }}
          id={id}
        />
        <span className="material-icons">favorite</span>
      </div>
    </>
  );
};

export default CreateLike;
