import React from "react";

//moment is a package that provides date formats
import moment from "moment";

const Article = ({ article }) => {
  return (
    <>
      <h4>Article (1) component</h4>
      <div className="container mt-5 mb-5" id="article">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="d-flex justify-content-between p-2 px-3">
                <div className="d-flex flex-row align-items-center">
                  <img
                    src="https://i.imgur.com/UXdKE3o.jpg"
                    width={50}
                    className="rounded-circle"
                    alt="profile_picture"
                  />
                  <div className="d-flex flex-column ml-2">
                    <span className="font-weight-bold">
                      {article.user.name}
                    </span>
                    <a
                      href={`mailto:${article.user.email}`}
                      className="text-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {article.user.email}
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-row mt-1 ellipsis">
                  <small className="mr-2">
                    {moment(article.updatedAt).fromNow()}
                  </small>
                  <i className="fa fa-ellipsis-h" />
                </div>
              </div>
              <img
                src={article.image}
                className="img-fluid"
                alt={article.image}
              />
              <div className="p-2">
                <h4>{article.title}</h4>
                <p className="text-justify">{article.content}</p>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row icons d-flex align-items-center">
                    <i className="fa fa-heart" />
                    <i className="fa fa-smile-o ml-2" />
                  </div>
                  <div className="d-flex flex-row muted-color">
                    <span>2 comments</span> <span className="ml-2">Share</span>
                  </div>
                </div>
                <hr />
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
                      <small className="comment-text">
                        Thanks for sharing!
                      </small>
                      <div className="d-flex flex-row align-items-center status">
                        <small>Like</small> <small>Reply</small>
                        <small>Translate</small> <small>8 mins</small>
                      </div>
                    </div>
                  </div>
                  <div className="comment-input">
                    <input type="text" className="form-control" />
                    <div className="fonts">
                      <i className="fa fa-camera" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
