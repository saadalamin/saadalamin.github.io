import React from "react";

function Banner() {
  return (
    <div
      className="banner-container"
      style={{
        display:
          window.localStorage.getItem("xJUkjgukyjv") === "1" ? "none" : "flex",
      }}
    >
      <div className="banner">
        <button
          className="btn close-btn"
          onClick={() => {
            document.querySelector(".banner-container").style.display = "none";
            window.localStorage.setItem("xJUkjgukyjv", 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{ width: "25px", height: "25px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <img
          src="/images/persons/saad2.jpg"
          alt="Saad Al Amin"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "2px solid #fff",
            marginBottom: "25px",
          }}
        />
        <h4>Ask Your Question to Saad Al Amin!</h4>
        <p
          style={{
            fontSize: "0.98rem",
          }}
        >
          For an example, you can ask about his works, contents, blog, or
          anything else.
        </p>
      </div>
    </div>
  );
}

export default Banner;
