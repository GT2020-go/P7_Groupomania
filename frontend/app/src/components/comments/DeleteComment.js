import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteComment } from "../../actions/commentActions";

const DeleteComment = ({ commentId, authorId }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.id); // get userId from store
  const isAdmin = useSelector((state) => state.auth.admin);

  const handleDeleteComment = () => {
    if (userId === authorId || isAdmin === true) {
      dispatch(deleteComment(commentId));
    } else {
      console.log("you cannot delete this comment as you are not the author");
    }
  };

  return (
    <>
      {authorId === userId || isAdmin === true ? (
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
