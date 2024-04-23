import React from "react";
import { Helmet } from "react-helmet";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Post from "./components/Discuss/Post";
import Banner from "./components/Discuss/Banner";

// Utils
import postsOffline from "./utils/_data.json";
import { allPosts } from "./utils/discuss";

function Discuss() {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    allPosts(
      (data) => {
        setPosts(data);
      },
      (e) => {
        console.error(e);
      }
    );
  }, []);
  return (
    <>
      {/*-- __HEAD__ --*/}
      <Helmet>
        <title>Q&A Discussions - Saad Al Amin</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Sedan:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/*-- __NAVBAR__ --*/}
      <Navbar />

      {/*-- __MAIN__ --*/}
      <main className="discuss p-0">
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
                <div className="w-100 d-flex gap-3 flex-column flex-sm-row align-items-sm-center">
                  <h2 className="fw-medium m-0">Q&A Discussions</h2>
                  <div className="ms-sm-auto">
                    <button className="btn btn-primary">Ask Question</button>
                  </div>
                </div>

                <div className="row mt-4 row-gap-2">
                  <div className="col-md-9 d-flex">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <button className="btn btn-dark ms-2">Search</button>
                  </div>
                  <div className="col-md-3">
                    <select className="form-select">
                      <option value="latest" selected>
                        Latest
                      </option>
                      <option value="oldest">Oldest</option>
                    </select>
                  </div>
                </div>
              </div>
              <div
                className="p-0"
                style={{
                  minHeight: "50vh",
                  borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                {posts.map((post, index) => (
                  <Post key={index} post={post} />
                ))}
              </div>
            </div>
            <div className="col-12 col-md-4 py-4">
              <section className="section">
                <header>
                  <b>Suggested Posts!</b>
                </header>
                <div className="posts">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          style={{ width: "20px", height: "20px" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                          />
                        </svg>
                        Lorem ipsum dolor sit amet.
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          style={{ width: "20px", height: "20px" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                          />
                        </svg>
                        Lorem ipsum dolor sit amet.
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          style={{ width: "20px", height: "20px" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                          />
                        </svg>
                        Lorem ipsum dolor sit amet.
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          style={{ width: "20px", height: "20px" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                          />
                        </svg>
                        Lorem ipsum dolor sit amet.
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          style={{ width: "20px", height: "20px" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                          />
                        </svg>
                        Lorem ipsum dolor sit amet.
                      </a>
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

      {/*-- __BANNER__ --*/}
      <Banner />
    </>
  );
}

export default Discuss;
