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
      <div className="container mt-5 mb-5" id="addArticle">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6" id="createArticle">
            <Accordion className="create-post">
              <Accordion.Item className="create-post" eventKey="0">
                <Accordion.Header className="create-post">
                  <div className="titleBox d-flex justify-content-center mt-1 mb-1">
                    <h4>Create a new post</h4>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="card">
                    <form
                      id="article"
                      name="article"
                      action="#"
                      className="addArticle"
                      onSubmit={handleSubmit}
                    >
                      <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Give your post a title..."
                        className="form-control articleTitle"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                      <textarea
                        id="content"
                        name="content"
                        placeholder="Share something with your colleagues..."
                        className="form-control articleContent"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                      />
                      <div className="actions">
                        <div className="btn-group d-flex justify-content-between">
                          <div className="btn-group d-flex justify-content-between align-items-center">
                            <label for="image">
                              <button
                                className=" d-flex align-items-center"
                                title="Upload an image"
                              >
                                <span class="material-icons-outlined">
                                  add_photo_alternate
                                </span>
                              </button>
                            </label>
                            <input
                              title="/!\ only supports .jpeg and .png"
                              id="image"
                              name="image"
                              type="file"
                              onChange={(e) => setImage(e.target.files[0])}
                            />
                          </div>
                          <div className="btn-group d-flex justify-content-between">
                            <button
                              title="submit"
                              type="submit"
                              className="btn btn-sm btn-bd-light "
                            >
                              <span className="material-icons">send</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddArticle;
