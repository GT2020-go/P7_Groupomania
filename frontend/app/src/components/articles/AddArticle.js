import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addArticle } from "../../actions/articleActions";

import Accordion from "react-bootstrap/Accordion";

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const userId = useSelector((state) => state.auth.id); // get userId from store

  const article = new FormData();
  article.append("title", title);
  article.append("content", content);
  article.append("image", image);
  article.append("userId", userId);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // e.preventDefault();
    dispatch(addArticle(article));
  };

  return (
    <>
      <div className="pt-2" id="addArticle">
        <div className="add-article-container d-flex align-items-center justify-content-center pt-2">
          <div className="d-flex flex-column" id="createArticle">
            <button
              title="Write a new article"
              class="create-post"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample2"
              aria-expanded="false"
              aria-controls="multiCollapseExample2"
            >
              <div className="titleBox d-flex justify-content-center mt-1 mb-1">
                <h4>
                  Write a new article{" "}
                  <span class="material-icons-outlined">post_add</span>
                </h4>
              </div>
            </button>

            <div
              class="collapse multi-collapse px-2 pb-2"
              id="multiCollapseExample2"
            >
              <form
                id="article"
                name="article"
                action="#"
                className="addArticle d-flex flex-column align-items-center"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Give your post a title..."
                  className="form-control articleTitle mb-2"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
                <textarea
                  id="content"
                  name="content"
                  placeholder="Share something with your colleagues..."
                  className="form-control articleContent mb-2"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
                <div className="actions d-flex">
                  <label
                    className="d-flex align-items-center justify-content-center"
                    for="image"
                  >
                    <button
                      className="d-flex align-items-center justify-content-center"
                      title="Upload an image"
                    >
                      <span class="material-icons-outlined px-2">
                        add_photo_alternate
                      </span>
                    </button>
                  </label>
                  <input
                    title="/!\ only supports .jpeg and .png"
                    id="image"
                    name="image"
                    type="file"
                    className="form-control sm ml-2 mr-2"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <button
                    title="submit"
                    type="submit"
                    className="d-flex align-items-center "
                  >
                    <span className="material-icons px-1">send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddArticle;
