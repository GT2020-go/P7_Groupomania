import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { editArticle } from "../../actions/articleActions";

const EditArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  //   const userId = useSelector((state) => state.auth.id); // get userId from store

  const article = new FormData();
  article.append("title", title);
  article.append("content", content);
  article.append("image", image);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(article);
    dispatch(editArticle(article));
  };

  return (
    <>
      <div className="container mt-5 mb-5" id="articleId">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <form
                id="article"
                name="article"
                action="#"
                className="editArticle"
                onSubmit={handleSubmit}
              >
                <h4>You can edit your post</h4>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder={article.tile}
                  className="form-control articleTitle"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  autoFocus
                />
                <textarea
                  id="content"
                  name="content"
                  placeholder={article.content}
                  className="form-control articleContent"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <div className="actions">
                  <div className="btn-group d-flex justify-content-between">
                    <div className="btn-group d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-sm btn-bd-light "
                        data-toggle="tooltip"
                        data-original-title="EditImage"
                      >
                        <input
                          id="image"
                          name="image"
                          type="file"
                          onChange={(e) => setImage(e.target.files[0])}
                        />
                        <span className="material-icons-outlined">image</span>
                      </button>
                    </div>
                    <div className="btn-group d-flex justify-content-between">
                      <button
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
          </div>
        </div>
      </div>
    </>
  );
};

export default EditArticle;
