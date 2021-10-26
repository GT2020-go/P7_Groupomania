import React from "react";

const Comment = () => {
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
            <span className="name">Daniel Frozer</span>
            <small className="comment-text">
              I like this alot! thanks alot
            </small>
            <div className="d-flex flex-row align-items-center status">
              <small>Like</small> <small>Reply</small>
              <small>Translate</small> <small>18 mins</small>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row mb-2">
          <img
            src="https://i.imgur.com/1YrCKa1.jpg"
            width={40}
            className="rounded-image"
            alt="default_img"
          />
          <div className="d-flex flex-column ml-2">
            <span className="name">Elizabeth goodmen</span>
            <small className="comment-text">Thanks for sharing!</small>
            <div className="d-flex flex-row align-items-center status">
              <small>Like</small> <small>Reply</small>
              <small>Translate</small> <small>8 mins</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
