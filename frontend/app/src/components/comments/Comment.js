import React from "react";

//moment is a package that provides date formats
import moment from "moment";

import DeleteComment from "./DeleteComment";

const Comment = ({ comment }) => {
  return (
    <>
      <div className="comments" id={comment.id}>
        <div className="d-flex flex-row mb-2">
          <div className="d-flex flex-column ml-2">
            <span className="name">
              {comment.name}{" "}
              <small>commented {moment(comment.updatedAt).fromNow()}</small>{" "}
            </span>
            <small className="comment-text">{comment.comment}</small>
            <DeleteComment commentId={comment.id} authorId={comment.userId} />
            {/* <div className="d-flex flex-row align-items-center status">
              <small>Like </small> <small>Reply </small>
              <small>Translate </small>
            </div> */}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Comment;
