import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { editArticle } from "../../actions/articleActions";
import DeleteImage from "./DeleteArticleImage";
import EditImage from "./EditArticleImage";

import { useHistory } from "react-router";

const EditArticle = ({ articleId }) => {
  const article = useSelector((state) =>
    state.articles.find((article) => article.id == articleId)
  );

  const [title, setTitle] = useState(article.title);
  const [content, setContent] = useState(article.content);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    const updatedArticle = {
      title: title,
      content: content,
    };
    dispatch(editArticle(updatedArticle, articleId));
    history.push("/articles");
  };

  return (
    <>
      <div className="container mt-5 mb-5" id={articleId}>
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
                  placeholder={
                    typeof article.title === "undefined" ? "" : article.title
                  }
                  className="form-control articleTitle"
                  defaultValue={
                    typeof article.title === "undefined" ? "" : article.title
                  }
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  id="content"
                  name="content"
                  placeholder={
                    typeof article.content === "undefined"
                      ? ""
                      : article.content
                  }
                  className="form-control articleContent"
                  defaultValue={
                    typeof article.content === "undefined"
                      ? ""
                      : article.content
                  }
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <div className="actions">
                  <div className="btn-group d-flex justify-content-between">
                    <div className="btn-group d-flex justify-content-between">
                      <button
                        id="submitButton"
                        type="submit"
                        className="btn btn-sm btn-bd-light "
                      >
                        <span className="send material-icons">send</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              <EditImage articleId={articleId} />
              <div className="image-container">
                <img
                  src={article.image}
                  className="img-fluid articleImage"
                  alt={article.image}
                />
              </div>
              <DeleteImage articleId={articleId} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditArticle;
