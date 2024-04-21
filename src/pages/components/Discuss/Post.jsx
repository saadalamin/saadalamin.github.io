import React from "react";

function Post({ key, post: { title } }) {
  return (
    <article className="post p-4" key={key}>
      <header>
        <h1 className="post-title">{title}</h1>
      </header>
      <p className="post-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vel
        iusto temporibus non, pariatur a officiis quas, repellendus alias quos
        nulla neque voluptates natus dicta expedita eligendi odio, ex nesciunt.
      </p>
      <footer>
        <div className="d-flex gap-1">
          <span className="post-author">
            Saad Al Amin <span>&lt;Artist&gt;</span>
          </span>
        </div>
        <div>
          Asked <span className="post-time">1 months ago</span>
        </div>
      </footer>
    </article>
  );
}

export default Post;
