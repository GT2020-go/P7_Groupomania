import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { editArticle } from "../../actions/articleActions";

// const articleInitialState = useSelector((state) => state.articles);

const EditArticle = ({ article }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  //   const userId = useSelector((state) => state.auth.id); // get userId from store
  // console.log(articleInitialState);

  const handleSubmit = (e, f) => {
    const updatedArticle = new FormData();
    updatedArticle.append("title", title);

    updatedArticle.append("content", content);
    updatedArticle.append("image", image);

    dispatch(editArticle(updatedArticle, article.id));
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
                  placeholder={article.title}
                  className="form-control articleTitle"
                  defaultValue={article.title}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  id="content"
                  name="content"
                  // placeholder={article.content}
                  className="form-control articleContent"
                  defaultValue={article.content}
                  value={content}
                  onChange={(f) => setContent(f.target.value)}
                />
                <div className="actions">
                  <div className="btn-group d-flex justify-content-between">
                    <div className="btn-group d-flex justify-content-between align-items-center">
                      <label for="image">
                        <button className=" d-flex align-items-center">
                          <span class="material-icons-outlined">
                            add_photo_alternate
                          </span>
                        </button>
                      </label>

                      <input
                        id="image"
                        name="image"
                        type="file"
                        defaultValue={article.image}
                        className="btn btn-sm btn-bd-light"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
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
