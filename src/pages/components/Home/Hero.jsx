import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="first w-100">
        <div className="intro p-sm-5">
          <div className="row align-items-center justify-content-between gap-2 gap-lg-0">
            <div className="col-12 col-lg-5 one order-1 order-md-0">
              <h2 className="fw-bolder">Saad Al Amin</h2>
              <span
                className="badge fw-normal p-2"
                style={{ width: "fit-content", backgroundColor: "#444" }}
              >
                Filmmaker | Artist | Researcher
              </span>
              <p className="p-0">
                Saad Al Amin is a Bangladeshi artist, film maker and graphics
                designer born in Bangladesh. He is now working as a leading
                personality in tons of activities.
              </p>
              <div className="mt-4 d-flex flex-column flex-md-row gap-3 align-items-center">
                <Link
                  to="/about"
                  className="btn btn-secondary p-2 px-4 m-0"
                  style={{ width: "fit-content" }}
                >
                  Learn More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-info-circle mb-1 ms-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </Link>
                <div className="links">
                  <Link
                    to="/discuss"
                    className="btn p-0 py-2 m-0 ms-1"
                    style={{
                      width: "fit-content",
                      color: "#fff",
                      paddingLeft: "0px !important",
                    }}
                  >
                    &rarr;
                    <span className="text-decoration-underline ms-2">
                      Q&A Discussions
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7 video">
              <iframe
                id="video"
                className="w-100 rounded-3"
                style={{
                  aspectRatio: "16/9",
                }}
                src="https://www.youtube.com/embed/Q1ro4L_htLw?si=OpPQHae5JT_FWFF6"
                title="Introductory Video of Saad Al Amin"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
