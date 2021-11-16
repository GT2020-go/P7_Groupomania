import React from "react";

//moment is a package that provides date formats
import moment from "moment";

import DeleteComment from "./DeleteComment";

const Comment = ({ comment }) => {
  return (
    <>
      <div className="comments" id={comment.id}>
        <div className="d-flex flex-column mb-2">
          <div className="article-info-container d-flex">
            <div className="author-container">
              <p className="author">{comment.name}</p>
            </div>
            <div className="moment-container">
              <p className="moment">• {moment(comment.updatedAt).fromNow()}</p>
            </div>
            <div className="author-only-cta d-flex">
              <DeleteComment commentId={comment.id} authorId={comment.userId} />
            </div>
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
