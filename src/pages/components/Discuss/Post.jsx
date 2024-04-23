import React from "react";
import { Link } from "react-router-dom";

// Utils
import { convertDateToText } from "../../utils/date";

function Post({ key, post }) {
  return (
    <article className="post p-4" key={key}>
      <header>
        <Link
          to={`/discuss/question/${post.id}`}
          state={{
            post: post,
          }}
          style={{
            textDecoration: "none",
          }}
        >
          <h1 className="post-title">{post.title || "Untitled Question!"}</h1>
        </Link>
      </header>
      <p className="post-body">{post.body || "No description found..."}</p>
      <footer>
        <div className="d-flex gap-1">
          <span className="post-author">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#aaa"
              style={{
                width: "18px",
                height: "18px",
                marginRight: "2px",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            {post.author}
          </span>
        </div>
        <div className="d-flex gap-1">
          <span
            style={{
              display: post.answer ? "block" : "none",
              color: "#00AB29",
            }}
          >
            (Answered)
          </span>
          <div>
            Asked{" "}
            <span className="post-time">
              {post.date ? convertDateToText(post.date) : "on an unknown date"}
            </span>
          </div>
        </div>
      </footer>
    </article>
  );
}

export default Post;
