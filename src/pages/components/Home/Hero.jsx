import React from "react";
import { Link } from "react-router-dom";

function Hero() {
 return (
  <>
   <div className="first w-100">
    <div className="intro container">
     <h2 className="fw-bolder">Saad Al Amin</h2>
     <span
      className="badge bg-custom fw-normal p-2"
      style={{ width: "fit-content" }}
     >
      Film Maker | Musical Artist | Leader
     </span>
     <p className="mt-4">
      Saad Al Amin is a Bangladeshi artist, film maker and graphics designer
      born in Bangladesh. He is now working as a leading personality in tons of
      activities. Saad is also a very well known personality in Bangladesh who
      has been working hard to make a difference in Bangladesh.
     </p>
     <div className="mt-5 d-flex flex-column flex-md-row gap-3 align-items-center">
      <Link
       to="/about"
       className="btn btn-dark p-2 px-4 m-0"
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
       <span
        style={{
         color: "#aaa",
        }}
       >
        Or,
       </span>
       <Link
        to="/ask"
        className="btn p-0 py-2 m-0 ms-2 text-decoration-underline"
        style={{ width: "fit-content", color: "#aaa" }}
       >
        Ask him a question
       </Link>
      </div>
     </div>
    </div>
   </div>
  </>
 );
}

export default Hero;
