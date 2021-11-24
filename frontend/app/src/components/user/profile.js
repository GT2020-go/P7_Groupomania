import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout, deleteUser } from "../../actions/authActions";
import ProfilePic from "../../img/baseline_account_circle_black_48dp.png";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Profile = () => {
  const auth = useSelector((state) => state.auth);
  const userName = useSelector((state) => state.auth.name); // get userName from store
  const userId = useSelector((state) => state.auth.id);

  const history = useHistory();
  const handleSignOut = () => {
    //Signout the user:
    logout();
    // then send him back to login page:
    history.push("/login");
  };
  //Modal button:
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  //delete user:

  const handleDeleteUser = () => {
    deleteUser(userId);
    handleClose;
  };
  return (
    <>
      {auth ? (
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
                    {/* <div className="px-4 mt-1">
                      <p className="fonts">
                        Consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div> */}

                    <div className="mt-3 d-flex justify-content-between buttons">
                      <button
                        className="btn btn-outline-primary px-4"
                        type="button"
                        onClick={() => handleSignOut()}
                      >
                        Disconnect
                      </button>
                      <Button
                        className="btn btn-danger px-4 d-flex "
                        // variant="primary"
                        onClick={handleShow}
                      >
                        <span class="material-icons px-1">warning_amber</span>{" "}
                        Delete account
                      </Button>

                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Delete your account</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          You are about to delete you account. Do you wish to
                          continue?
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="primary" onClick={handleClose}>
                            I changed my mind
                          </Button>
                          <Button variant="danger" onClick={handleDeleteUser}>
                            Delete my account
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Profile;

<div
  role="dialog"
  aria-modal="true"
  class="fade modal show"
  tabindex="-1"
  style="padding-right: 16px; display: block;"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title h4">Modal heading</div>
        <button type="button" class="btn-close" aria-label="Close"></button>
      </div>
      <div class="modal-body">Woohoo, you're reading this text in a modal!</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary">
          Close
        </button>
        <button type="button" class="btn btn-primary">
          Save Changes
        </button>
      </div>
    </div>
  </div>
</div>;
