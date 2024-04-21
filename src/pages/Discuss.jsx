import React from "react";
import { Helmet } from "react-helmet";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Post from "./components/Discuss/Post";

function Discuss() {
  const [navHeight, setNavHeight] = React.useState(0);
  const posts = [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  React.useEffect(() => {
    document.body.classList.remove("body-home");
    setNavHeight(document.querySelector(".navbar").offsetHeight);
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
        <div className="container py-4 px-3 p-md-4 p-lg-5">
          <div className="row">
            <div className="col-12 col-md-8">
              <div
                className="pb-4 p-3 p-md-4"
                style={{
                  borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <h2 className="fw-medium">Q&A Discussions</h2>
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
            <div className="col-12 col-md-4">
              <section className="section">
                <header>
                  <b>Suggested Posts!</b>
                </header>
                <div className="posts">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">&rarr; Lorem ipsum dolor sit amet.</a>
                    </li>
                    <li>
                      <a href="#!">&rarr; Lorem ipsum dolor sit amet.</a>
                    </li>
                    <li>
                      <a href="#!">&rarr; Lorem ipsum dolor sit amet.</a>
                    </li>
                    <li>
                      <a href="#!">&rarr; Lorem ipsum dolor sit amet.</a>
                    </li>
                    <li>
                      <a href="#!">&rarr; Lorem ipsum dolor sit amet.</a>
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

export default Discuss;
