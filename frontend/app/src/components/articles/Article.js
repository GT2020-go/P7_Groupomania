import React, { useState } from "react";

//moment is a package that provides date formats
import moment from "moment";

import Comments from "../comments/Comments";
import DeleteArticle from "./DeleteArticle";
import CreateLike from "../likes/Like";

import { Link } from "react-router-dom";

const Article = ({ article }) => {
  return (
    <>
      <div className="article container mt-2 mb-4" id={article.id}>
        <div className="background position-behind">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              className="blob1"
              d="M51.1,-63.6C62.2,-51.5,64.4,-31.6,68.7,-11.5C72.9,8.6,79.2,29,73,44.4C66.8,59.8,48.1,70.3,29.5,73.9C11,77.6,-7.5,74.4,-22.6,66.9C-37.8,59.3,-49.6,47.4,-59.2,33.1C-68.8,18.7,-76.1,2,-75.3,-15.2C-74.5,-32.4,-65.7,-50,-51.8,-61.6C-37.8,-73.2,-18.9,-78.6,0.5,-79.3C20,-79.9,40,-75.7,51.1,-63.6Z"
              preserveAspectRatio="xMidYMid meet"
              x="0"
              y="0"
              transform="translate(100 100) scale(1.25)"
            />
          </svg>
        </div>

        <div className="article-container d-flex align-items-center justify-content-center position-front">
          <div className="col-md-6">
            <div className="titleBox d-flex justify-content-center mt-1 mb-1">
              <h3>{article.title}</h3>
            </div>

            <div className="titleBox author d-flex justify-content-end">
              <h4>
                by {article.user.name}{" "}
                <a
                  href={`mailto:${article.user.email}`}
                  className="text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span class="material-icons">email</span>
                </a>
              </h4>
            </div>

            <div className="content-container px-4 pt-4 pb-4">
              <div className="image-container">
                <img
                  src={article.image}
                  className="img-fluid articleImage"
                  alt={article.image}
                />
              </div>

              <div className="article-text-container d-flex flex-column">
                <div className="article-info-container d-flex">
                  <div className="author-container">
                    <small className="author">
                      {article.user.name} •{" "}
                      {moment(article.updatedAt).fromNow()}
                    </small>
                  </div>
                  <div className="author-only-cta d-flex">
                    <Link to={`/articles/${article.id}`}>
                      <span class="material-icons-outlined">edit</span>
                    </Link>
                    <DeleteArticle
                      articleId={article.id}
                      authorId={article.userId}
                    />
                  </div>
                </div>
                <div className="article-content-container d-flex">
                  <p className="article-content">{article.content}</p>
                </div>
                <div className="article-cta-container d-flex justify-content-right  ml-0">
                  <div className="like-container d-flex px-1">
                    <CreateLike articleId={article.id} />
                    {article.likes.length}
                  </div>
                  <div className="comments-container d-flex px-1">
                    <span class="material-icons-outlined">chat_bubble</span>{" "}
                    <div>{article.comments.length} </div>
                  </div>
                </div>
                <div className="comments-list">
                  <Comments articleId={article.id} />
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
