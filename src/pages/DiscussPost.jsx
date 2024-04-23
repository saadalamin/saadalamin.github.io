import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Utils
import { convertDateToText } from "./utils/date";
import data from "./utils/_data.json";

function DiscussPost() {
  let post = useLocation()?.state?.post;
  if (!post) post = data.find((v) => v.id === useParams().id);
  return (
    <>
      {/*-- __HEAD__ --*/}
      <Helmet>
        <title>{post ? post.title : "Q&A"} - Discussions!</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Sedan:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/*-- __NAVBAR__ --*/}
      <Navbar />

      {/*-- __MAIN__ --*/}
      <main className="post-self discuss p-0">
        <div className="container pb-5">
          <div className="row">
            <div
              className="col-12 col-md-8"
              style={{
                minHeight: "55vh",
              }}
            >
              <div
                className="p-3 pb-4 p-md-4"
                style={{
                  minHeight: "35vh",
                  borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
                  borderBottom:
                    post && post.body
                      ? "1px solid rgba(255, 255, 255, 0.1)"
                      : "none",
                }}
              >
                <div className="w-100">
                  <button
                    className="btn btn-light mb-4"
                    onClick={() => {
                      window.history.back();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                      />
                    </svg>
                  </button>
                  <h2 className="fw-medium m-0">
                    {post ? post.title : "Untitled Question!"}
                  </h2>
                </div>
              </div>
              <div
                className="p-0"
                style={{
                  minHeight: "30vh",
                  borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
                  display: post && post.body ? "block" : "none",
                }}
              >
                <div className="p-4">
                  <p>{post ? post.body : "No body found!"}</p>
                </div>
              </div>
              <section
                className="answer"
                style={{
                  display:
                    post && typeof post.answer === "object" ? "block" : "none",
                }}
              >
                <div className="d-sm-flex gap-4">
                  <img
                    src="/images/persons/saad2.jpg"
                    alt="Saad Al Amin"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      border: "2px solid #fff",
                      marginBottom: "25px",
                    }}
                  />
                  <div>
                    <span
                      style={{
                        color: "#aaa",
                      }}
                    >
                      Saad Al Amin, 2 minutes ago
                    </span>
                    <p
                      className="mt-2"
                      style={{
                        fontSize: "0.98rem",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto, esse obcaecati suscipit quam neque sapiente
                      soluta molestiae laborum commodi saepe quaerat! Nam nemo
                      laudantium eligendi delectus optio. Sint, expedita
                      delectus?
                    </p>
                  </div>
                  <div className="d-flex"></div>
                </div>
              </section>
            </div>
            <div className="col-12 col-md-4 py-4">
              <section className="section">
                <header>
                  <b>Information</b>
                </header>
                <div className="info posts">
                  <ul className="list-unstyled">
                    <li>
                      Asked:{" "}
                      <span
                        style={{
                          color: "#ccc",
                        }}
                      >
                        {post ? post.author : "Unknown"}
                      </span>
                    </li>
                    <li>
                      Asked on:{" "}
                      <span
                        style={{
                          color: "#ccc",
                        }}
                      >
                        {post ? convertDateToText(post.date) : "Unknown"}
                      </span>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/*-- __FOOTER__ --*/}
      <Footer />
    </>
  );
}

export default DiscussPost;
