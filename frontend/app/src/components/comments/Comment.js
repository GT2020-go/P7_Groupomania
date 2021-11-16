import React from "react";

//moment is a package that provides date formats
import moment from "moment";

import DeleteComment from "./DeleteComment";

const Comment = ({ comment }) => {
  return (
    <>
      <div className="comments" id={comment.id}>
        <div className="d-flex flex-column mb-2">
          <div className="d-flex flex-row justify-content-between ml-2">
            <p className="name">
              {comment.name} commented {moment(comment.updatedAt).fromNow()}{" "}
            </p>
            <DeleteComment commentId={comment.id} authorId={comment.userId} />
          </div>
          <div className="d-flex flex-row ml-2">
            <p className="comment-text">{comment.comment}</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Comment;
