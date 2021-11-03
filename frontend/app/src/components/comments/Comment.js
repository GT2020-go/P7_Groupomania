import React from "react";

//moment is a package that provides date formats
import moment from "moment";

const Comment = ({ comment }) => {
  return (
    <>
      <div className="comments" id={comment.id}>
        <div className="d-flex flex-row mb-2">
          <div className="d-flex flex-column ml-2">
            <span className="name">userId: {comment.userId}</span>
            <small className="comment-text">{comment.comment}</small>
            <div className="d-flex flex-row align-items-center status">
              <small>Like </small> <small>Reply </small>
              <small>Translate </small>
              <small>{moment(comment.updatedAt).fromNow()}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
