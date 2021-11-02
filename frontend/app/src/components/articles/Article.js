import React from "react";

//moment is a package that provides date formats
import moment from "moment";

import Comments from "../comments/Comments";

import CreateLike from "../likes/Like";

const Article = ({ article }) => {
  return (
    <>
      <div className="container mt-5 mb-5" id={article.id}>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="d-flex justify-content-between">
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
                  {/* add the like button here    --- */}
                  <CreateLike articleId={article.id} />
                  {/* ---    add the like button here */}
                  <div className="d-flex flex-row muted-color">
                    <span>{article.comments.length} comments</span>
                  </div>
                </div>
                <hr />
                <Comments articleId={article.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
