import React, { useEffect } from "react";

import { getOneArticle } from "../../actions/articleActions";

import { useDispatch, useSelector, useStore } from "react-redux";
import { useHistory } from "react-router";

import { useParams } from "react-router";
import EditArticle from "./EditArticle";

const GetOneArticle = () => {
  const { id } = useParams();
  const articleId = id;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    console.log(articleId);
    dispatch(getOneArticle(articleId));
  }, [dispatch]);

  const article = useSelector((state) => state.articles);
  console.log(article);

  return (
    <>
      <EditArticle article={article} />
      {/* <h1>My new element {articleId}</h1>
      <div className="container mt-5 mb-5" id="articleId">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <form
                id="article"
                name="article"
                action="#"
                className="editArticle"
                // onSubmit={handleSubmit}
              >
                <h4>You can edit your post</h4>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder={article.title}
                  className="form-control articleTitle"
                  //   value={title}
                  //   onChange={(e) => setTitle(e.target.value)}
                  autoFocus
                />
                <textarea
                  id="content"
                  name="content"
                  placeholder={article.content}
                  className="form-control articleContent"
                  //   value={content}
                  //   onChange={(e) => setContent(e.target.value)}
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

                          //   onChange={(e) => setImage(e.target.files[0])}
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
      </div> */}
    </>
  );
};

export default GetOneArticle;
