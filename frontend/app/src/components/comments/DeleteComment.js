import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { getArticles } from "../../actions/articleActions";
import { deleteComment } from "../../actions/commentActions";

const DeleteComment = ({ commentId, authorId }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.id); // get userId from store
  const history = useHistory();

  // useEffect(() => {
  //   dispatch(listComment());
  // }, [dispatch]);

  const handleDeleteComment = () => {
    if (userId === authorId) {
      dispatch(deleteComment(commentId));
    } else {
      console.log("you cannot delete this comment as you are not the author");
    }
  };

  return (
    <>
      {authorId === userId ? (
        <>
          <button type="button" onClick={handleDeleteComment}>
            <span className="trash material-icons">delete</span>
          </button>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default DeleteComment;
