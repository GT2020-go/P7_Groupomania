import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteArticle } from "../../actions/articleActions";

const DeleteArticle = ({ articleId, authorId }) => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.id); // get userId from store
  const isAdmin = useSelector((state) => state.auth.admin);

  const handleDeleteArticle = () => {
    if (userId === authorId || isAdmin === true) {
      dispatch(deleteArticle(articleId));
    } else {
      console.log("you cannot delete this article as you are not the author");
    }
  };

  return (
    <>
      {authorId === userId || isAdmin === true ? (
        <>
          <div>
            <button type="button" onClick={handleDeleteArticle}>
              <span className="trash material-icons">delete</span>
            </button>
          </div>
        </>
      ) : (
        <> </>
      )}
    </>
  );
};

export default DeleteArticle;
