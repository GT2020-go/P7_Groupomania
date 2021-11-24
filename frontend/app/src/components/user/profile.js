import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useHistory } from "react-router-dom";
import { logout, deleteUser } from "../../actions/authActions";
import ProfilePic from "../../img/baseline_account_circle_black_48dp.png";

// import DeleteUserTest from "./DeleteUser";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Profile = () => {
  const auth = useSelector((state) => state.auth);
  const userName = useSelector((state) => state.auth.name); // get userName from store
  const userId = useSelector((state) => state.auth.id);

  const dispatch = useDispatch();

  const history = useHistory();
  const handleSignOut = () => {
    logout();
    history.push("/login");
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleDeleteUser = () => {
    dispatch(deleteUser(userId));
    handleClose();
    history.push("/signup");
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card p-3 py-4">
              <div className="text-center">
                <img
                  src={ProfilePic}
                  className="rounded-circle"
                  alt="Logo Groupomania"
                />
              </div>
              <div className="text-center mt-3">
                <h5 className="mt-2 mb-0">{userName}</h5>
                <a
                  href={`mailto:${auth.email}`}
                  className="text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{auth.email}</span>
                </a>
                <div className="mt-3 d-flex justify-content-between buttons">
                  <button
                    className="btn btn-outline-primary px-4"
                    type="button"
                    onClick={() => handleSignOut()}
                  >
                    Disconnect
                  </button>
                  <button
                    className="btn btn-danger px-4 d-flex "
                    // variant="primary"
                    onClick={handleShow}
                  >
                    <span class="material-icons px-1">warning_amber</span>{" "}
                    Delete account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete your account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You are about to delete you account. Do you wish to continue?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            I changed my mind
          </Button>
          {/* <DeleteUser userId={userId} /> */}
          <Button variant="danger" onClick={handleDeleteUser}>
            Delete my account
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Profile;
