import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addComment } from "../../actions/commentActions";

const AddComment = ({ articleId }) => {
  const [comment, setComment] = useState("");
  const userId = useSelector((state) => state.auth.id); // get userId from store

  const commentData = new FormData();
  commentData.append("comment", comment);
  commentData.append("userId", userId);
  commentData.append("articleId", articleId);
  const dispatch = useDispatch();

  const id = articleId;

  //--------------------- to update below
  const handleSubmit = (e) => {
    // e.preventDefault();
    dispatch(addComment(comment));
  };

  return (
    <>
      <form className="comment-input" onSubmit={handleSubmit} id={id}>
        <div class="d-flex flex-row">
          <input
            type="text"
            className="form-control"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit" className="btn btn-sm btn-bd-light ">
            <span className="material-icons">send</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default AddComment;
