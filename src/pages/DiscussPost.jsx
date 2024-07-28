import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Utils
import { convertDateToText } from "./utils/date";
import { editAnswer, postAnswer } from "./utils/discuss";
import {
  $firebase_auth_check_admin,
  $firebase_auth_onAuth,
  $firebase_firestore_read_single,
  $timestamp
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
                        typeof post.answer === "object" && post.body && post.answer.date ? "block" : "none",
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
                        <div style={{
                          display: isLoggedIn ? "flex" : "none",
                          gap: "20px",
                        }}>
                          <button
                            className="btn btn-sm border-0 p-0 text-white"
                            style={{
                              fontSize: "0.9rem",
                              marginLeft: "-5px",
                              display: "flex",
                              alignItems: "center",
                              gap: "2px",
                            }}
                            onClick={() => {
                              if (confirm("Are you sure you want to delete this answer?")) {
                                postAnswer(postId, {}, () => {
                                  setPost({
                                    ...post,
                                    answer: {},
                                  });
                                  alert("Answer deleted successfully!");
                                }, (e) => {
                                  alert("Failed to delete answer!");
                                  console.log(e);
                                });
                              }
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" style={{
                              width: "20px",
                              height: "20px",
                            }}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg> Delete
                          </button>
                          <button
                            className="btn btn-sm border-0 p-0 text-white"
                            style={{
                              fontSize: "0.9rem",
                              marginLeft: "-5px",
                              display: "flex",
                              alignItems: "center",
                              gap: "2px",
                            }}
                            onClick={() => {
                              const _b = prompt("Edit answer:", post.answer.body || "");
                              if (_b) {
                                editAnswer(postId, { body: _b, date: $timestamp(new Date()) }, () => {
                                  setPost({
                                    ...post,
                                    answer: {
                                      body: _b,
                                      date: new Date(),
                                    },
                                  });
                                  alert("Answer edited successfully!");
                                }, (e) => {
                                  alert("Failed to edit answer!");
                                  console.log(e);
                                });
                              }
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="lightgreen" style={{
                              width: "20px",
                              height: "20px",
                            }}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="answer-form answer"
                    style={{
                      display:
                        isLoggedIn ?
                          ((typeof post.answer !== "object") || (typeof post.answer === "object" && Object.keys(post.answer).length === 0)
                            ? "block" : "none") : "none"
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
