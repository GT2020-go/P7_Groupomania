import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { editImage } from "../../actions/articleActions";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const EditImage = ({ article }) => {
  console.log(article);
  const dispatch = useDispatch();

  const history = useHistory();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [image, setImage] = useState(null);

  const articleImage = new FormData();
  const id = article;
  const handleEditImage = () => {
    articleImage.append("image", image);
    dispatch(editImage(articleImage, id));
    handleClose();
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card p-3 py-4">
              <div className="mt-3 d-flex justify-content-between buttons">
                <button
                  className="btn btn-danger px-4 d-flex "
                  // variant="primary"
                  onClick={handleShow}
                >
                  <span className="material-icons px-1">warning_amber</span>{" "}
                  Modify Image
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you wish to change the image?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            I changed my mind
          </Button>
          <div className="container">
            <div className="btn-group d-flex justify-content-between align-items-center">
              <label htmlFor="image">
                <span className="material-icons-outlined">
                  add_photo_alternate
                </span>
              </label>

              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                className="btn btn-sm btn-bd-light"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>
          <Button variant="warning" onClick={handleEditImage}>
            Yes upload new Image
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditImage;