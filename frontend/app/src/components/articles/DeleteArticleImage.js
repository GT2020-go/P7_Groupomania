import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { deleteImage } from "../../actions/articleActions";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const DeleteImage = ({ article }) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleDeleteImage = () => {
    dispatch(deleteImage(article));
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
                  Delete Image
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete this Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This will delete the current image. Are you sure?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            I changed my mind
          </Button>
          <Button variant="danger" onClick={handleDeleteImage}>
            Yes. Delete image
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteImage;
