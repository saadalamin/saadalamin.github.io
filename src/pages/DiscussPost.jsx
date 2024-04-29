import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Utils
import { convertDateToText } from "./utils/date";
import { postAnswer } from "./utils/discuss";
import {
  $firebase_auth_check_admin,
  $firebase_auth_onAuth,
  $firebase_firestore_read_single
} from "./utils/firebase";

function DiscussPost() {
  const [post, setPost] = React.useState(useLocation()?.state?.post || null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(null);
  const [isDisabledSA, setIsDisabledSA] = React.useState(true);
  const postId = useParams().id;

  React.useEffect(() => {
    if (!post) {
      $firebase_firestore_read_single(
        `discuss-posts/${postId}`,
        (data) => {
          setPost(data);
        },
        (e) => {
          setPost(false);
          console.error(e);
        }
      );
    }
    $firebase_auth_onAuth((user) => {
      if (user) {
        $firebase_auth_check_admin((r) => {
          if (r) {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        });
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => {
      setIsLoggedIn(null);
    };
  }, [post, postId]);
  return (
    <>
      {/*-- __HEAD__ --*/}
      <Helmet>
        <title>{post ? post.title : "Q&A"} - Q&A!</title>
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
          {
            typeof post === "object" ? (
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
                      borderLeft: "1px solid rgba(255, 255, 255, 0.1)"
                    }}
                  >
                    <div className="w-100">
                      <Link to={"/discuss"}>
                        <button
                          className="btn btn-light mb-4"
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
                        </button></Link>
                      <h2 className="fw-medium m-0">
                        {post ? post.title : "Untitled Question!"}
                      </h2>
                    </div>
                  </div>
                  <div
                    className="p-0"
                    style={{
                      minHeight: "30vh",
                      border: "1px solid rgba(255, 255, 255, 0.1)"
                    }}
                  >
                    <div className="p-4">
                      <p>{post && post.body ? post.body : "No description found!"}</p>
                    </div>
                  </div>
                  <section
                    className="answer"
                    style={{
                      display:
                        post && typeof post.answer === "object" && post.answer.date ? "block" : "none",
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
                          Saad Al Amin, {
                            post?.answer?.date
                              ? convertDateToText(post.answer.date)
                              : "Unknown"
                          }
                        </span>
                        <p
                          className="mt-2"
                          style={{
                            fontSize: "0.98rem",
                          }}
                        >
                          {
                            post?.answer?.body
                              ? post.answer.body
                              : "No answer found!"
                          }
                        </p>
                      </div>
                      <div className="d-flex"></div>
                    </div>
                  </section>
                  <section
                    className="answer-form answer"
                    style={{
                      display:
                        isLoggedIn === true &&
                          (post && typeof post.answer !== "object") || (post && typeof post.answer === "object" && Object.keys(post.answer).length === 0)
                          ? "block" : "none",
                    }}
                  >
                    <div className="d-sm-flex gap-4 align-items-center">
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
                      <div className="w-100 d-flex align-items-end bg-dark text-light p-0 rounded-4">
                        <textarea
                          cols={30}
                          rows={3}
                          className="bg-transparent text-light border-0 w-100 p-2 ps-3"
                          placeholder="Answer the question..."
                          style={{
                            fontSize: "0.98rem",
                          }}
                          onChange={(e) => {
                            if (e.target.value.length > 0) {
                              setIsDisabledSA(false);
                            } else {
                              setIsDisabledSA(true);
                            }
                          }}
                        ></textarea>
                        <div className="px-2 pb-2">
                          <button
                            id="sendAnswer"
                            className="btn btn-sm ms-2 border-0"
                            style={{
                              fontSize: "0.98rem",
                            }}
                            onClick={() => {
                              const answer = document.querySelector(".answer-form textarea").value;
                              if (answer.length > 0) {
                                postAnswer(postId, {
                                  body: answer,
                                  date: new Date(),
                                }, () => {
                                  setPost({
                                    ...post,
                                    answer: {
                                      body: answer,
                                      date: new Date(),
                                    },
                                  });
                                  document.querySelector(".answer-form textarea").value = "";
                                  document.getElementById("sendAnswer").disabled = true;
                                  alert("Answer posted successfully!");
                                }, (e) => {
                                  alert("Failed to post answer!");
                                  console.log(e);
                                });
                              }
                            }}
                            disabled={isDisabledSA}
                          >
                            <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="send" fill="#0866ff" style={{
                              width: "20px",
                              height: "20px",
                            }}>
                              <path d="M21.66,12a2,2,0,0,1-1.14,1.81L5.87,20.75A2.08,2.08,0,0,1,5,21a2,2,0,0,1-1.82-2.82L5.46,13H11a1,1,0,0,0,0-2H5.46L3.18,5.87A2,2,0,0,1,5.86,3.25h0l14.65,6.94A2,2,0,0,1,21.66,12Z" />
                            </svg>
                          </button>
                        </div>
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
            ) : (
              post === null ? (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
                  <div className="text-center">
                    <h1 className="display-1 text-danger">404</h1>
                    <h2 className="display-4">Post not found!</h2>
                  </div>
                </div>
              )
            )
          }
        </div>
      </main>

      {/*-- __FOOTER__ --*/}
      <Footer />
    </>
  );
}

export default DiscussPost;
