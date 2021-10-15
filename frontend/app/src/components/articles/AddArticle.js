import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addArticle } from "../../actions/articleActions";

// Define the article - initial state:
const articleInitialState = {
  title: "",
  content: "",
  image: "",
  userId: 1, //to get from the store
};

const AddArticle = () => {
  const [article, setArticle] = useState(articleInitialState);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addArticle(article));
    setArticle(articleInitialState);
  };

  const handleFile = (e) => {
    e.preventDefault();
    let image = e.target.files[0];
    console.log(image);
    return image;
  };

  return (
    <>
      <h2>AddArticle component</h2>
      <div className="container mt-5 mb-5" id="articleId">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <form
                id="article"
                name="article"
                action="#"
                className="addArticle"
                onSubmit={handleSubmit}
              >
                <h4>Create a new post</h4>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Give your post a title..."
                  className="form-control articleTitle"
                  onChange={(e) =>
                    setArticle({ ...article, title: e.target.value })
                  }
                  autoFocus
                />
                <textarea
                  id="content"
                  name="content"
                  placeholder="Share something with your colleagues..."
                  className="form-control articleContent"
                  value={article.content}
                  onChange={(e) =>
                    setArticle({ ...article, content: e.target.value })
                  }
                />
                <div className="actions">
                  <div className="btn-group d-flex justify-content-between">
                    <div className="btn-group d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-sm btn-bd-light "
                        data-toggle="tooltip"
                        data-original-title="AddImage"
                      >
                        <input
                          id="file"
                          name="file"
                          type="file"
                          // value={article.image}
                          onChange={(e) =>
                            setArticle({ ...article, image: handleFile(e) })
                          }
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

export default AddArticle;

// const formData = new FormData();
//       if (this.file !== null) {
//         formData.append("userId", this.$store.state.user.userId);
//         formData.append("title", this.title);
//         formData.append("content", this.content);
//         formData.append("imageUrl", this.selectedFile);
//       }
