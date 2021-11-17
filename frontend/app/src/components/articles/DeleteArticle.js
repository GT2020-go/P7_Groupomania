import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteArticle } from "../../actions/articleActions";

const DeleteArticle = ({ articleId, authorId }) => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.id); // get userId from store

  console.log(authorId);
  console.log(articleId);

  const handleDeleteArticle = () => {
    if (userId === authorId) {
      dispatch(deleteArticle(articleId));
    } else {
      console.log("you cannot delete this article as you are not the author");
    }
  };

  return (
    <>
      {authorId === userId ? (
        <>
          <div>
            <button type="button" onClick={handleDeleteArticle}>
              <span className="material-icons">delete</span>
            </button>
          </div>
        </>
      ) : (
        <> </>
      )}
    </>
  );
};

export default DeleteArticle;
