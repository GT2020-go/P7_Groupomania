import React from "react";

const AddArticle = () => {
  return (
    <>
      <h2>AddArticle component</h2>
      <div className="container mt-5 mb-5" id="articleId">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <form action="#" className="addArticle">
                <textarea
                  name="articleContent"
                  placeholder="Share what you've been up to..."
                  className="form-control"
                  defaultValue={""}
                  autoFocus
                  //onChangeEvent ici
                />
                <div className="actions">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn-sm btn-rounded"
                      data-toggle="tooltip"
                      data-original-title="AddImage"
                    >
                      Add an image
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-sm btn-rounded btn-info"
                  >
                    Post
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
