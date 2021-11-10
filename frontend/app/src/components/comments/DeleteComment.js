import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteComment } from "../../actions/commentActions";

const DeleteComment = ({ commentId, authorId }) => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.id); // get userId from store

  const handleDeleteComment = () => {
    if (userId === authorId) {
      dispatch(deleteComment(commentId));
    } else {
      console.log("you cannot delete this comment as you are not the author");
    }
  };

  return (
    <>
      <button type="button" onClick={handleDeleteComment}>
        <span className="material-icons">delete</span>
      </button>
    </>
  );
};

export default DeleteComment;
