import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addComment } from "../../actions/commentActions";

const AddComment = ({ articleId }) => {
  const [comment, setComment] = useState("");
  const userId = useSelector((state) => state.auth.id); // get userId from store
  const name = useSelector((state) => state.auth.name);
  const commentData = { comment, userId, articleId, name };

  const dispatch = useDispatch();

  const id = articleId;

  //--------------------- to update below
  const handleSubmit = (e) => {
    dispatch(addComment(commentData));
  };

  return (
    <>
      <form
        className="comment-input addComment"
        onSubmit={handleSubmit}
        id={id}
      >
        <div className="d-flex flex-row">
          <input
            type="text"
            placeholder="Comment this article..."
            className="form-control mb-2"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-sm btn-bd-light ">
            <span className="send material-icons">send</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default AddComment;
