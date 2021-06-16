import React from "react";
import { useSelector } from "react-redux";

export const SignupUser = () => {
  const users = useSelector((state) => state.users);

  const renderedUsers = users.map((user) => (
    <article className="post-excerpt" key={user.id}>
      <h3>{user.title}</h3>
      <p className="post-content">{user.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Users</h2>
      {renderedUsers}
    </section>
  );
};
