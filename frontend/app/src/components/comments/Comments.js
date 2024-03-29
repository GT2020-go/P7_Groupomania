import React from "react";
import AddComment from "./AddComment";
import ListComments from "./ListComments";

import Accordion from "react-bootstrap/Accordion";

const Comments = ({ articleId, numberOfComments }) => {
  return (
    <>
      <AddComment articleId={articleId} />
      <Accordion className="comments-list">
        <Accordion.Item className="comments-list" eventKey="0">
          <Accordion.Header className="comments-list">
            show all comments
            <div className="comments-container d-flex px-1">
              <span className="material-icons-outlined">chat_bubble</span>{" "}
              <div>{numberOfComments} </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <ListComments articleId={articleId} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Comments;
