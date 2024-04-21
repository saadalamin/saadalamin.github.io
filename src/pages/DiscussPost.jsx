import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Utils
import { convertDateToText } from "./utils/date";

function DiscussPost() {
  const [navHeight, setNavHeight] = React.useState(0);
  const post = useLocation().state.post;
  React.useEffect(() => {
    document.body.classList.remove("body-home");
    setNavHeight(document.querySelector(".navbar").offsetHeight);
  }, []);
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
            <div className="col-12 col-md-8">
              <div
                className="p-3 pb-4 p-md-4"
                style={{
                  borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
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
                  minHeight: "50vh",
                  borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="p-4">
                  <p>{post ? post.body : "No body found!"}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 py-4">
              <section className="section">
                <header>
                  <b>Information</b>
                </header>
                <div className="info posts">
                  <ul className="list-unstyled">
                    <li>
                      <b>Asked:</b> {post ? post.author : "Unknown"}
                    </li>
                    <li>
                      <b>Asked on:</b>{" "}
                      {post ? convertDateToText(post.askedOn) : "Unknown"}
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
