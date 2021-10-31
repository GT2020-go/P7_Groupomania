import React from "react";

const Comment = ({ comment }) => {
  // console.log(commentData);
  // let comm = commentData.map((data) => data);
  // console.log(comm);
  // console.log(comm.map((data) => data.comment));
  return (
    <>
      <div className="comments">
        <div className="d-flex flex-row mb-2">
          <img
            src="https://i.imgur.com/9AZ2QX1.jpg"
            width={40}
            className="rounded-image"
            alt="default_img"
          />
          <div className="d-flex flex-column ml-2">
            <span className="name">userId: {comment.userId}</span>
            <small className="comment-text">{comment.comment}</small>
            <div className="d-flex flex-row align-items-center status">
              <small>Like</small> <small>Reply</small>
              <small>Translate</small> <small>18 mins</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
