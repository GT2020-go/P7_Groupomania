import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { userAdded } from "./userSlice";

export const AddUserForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSaveUserClicked = () => {
    if (title && content) {
      dispatch(
        userAdded({
          id: nanoid(),
          title,
          content,
        })
      );

      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <h2>Add a New User</h2>
      <form>
        <label htmlFor="userTitle">User Title:</label>
        <input
          type="text"
          id="userTitle"
          name="userTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="userContent">Content:</label>
        <textarea
          id="userContent"
          name="userContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSaveUserClicked}>
          Save User
        </button>
      </form>
    </section>
  );
};
