import React from "react";
import faqSchema from "../../schemas/faqSchema";
import { Link } from "react-router-dom";

export default function Faq({ limited }) {
  let fSchema = faqSchema.faqs;
  if (limited) {
    fSchema = faqSchema.faqs.slice(0, 5);
  }
  return (
    <div className="bg-dark text-light py-5">
      <section className="bsb-faq-3 py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-center text-light">
                Frequently Asked Questions
              </h2>
              <p className="mb-5 text-center text-light">
                Explore answers to common questions about Saad Al Amin, his
                work, and more.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-11 col-xl-10">
                <div className="accordion accordion-flush" id="faqAccount">
                  {fSchema.map((faq, index) => (
                    <div
                      className="accordion-item bg-transparent border-top border-bottom py-3 border-light"
                      key={index}
                    >
                      <h2
                        className="accordion-header"
                        id={`faqHeading${index}`}
                      >
                        <button
                          className="accordion-button collapsed bg-transparent fw-bold shadow-none text-light"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#faqCollapse${index}`}
                          aria-expanded="false"
                          aria-controls={`faqCollapse${index}`}
                        >
                          {faq[0]}
                        </button>
                      </h2>
                      <div
                        id={`faqCollapse${index}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`faqHeading${index}`}
                      >
                        <div className="accordion-body text-light">
                          <p>{faq[1]}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {limited && (
            <div className="mt-5 w-100 d-flex justify-content-center">
              <Link
                to="/faq"
                className="btn btn-secondary p-2 px-4"
                style={{ width: "fit-content" }}
              >
                Go to FAQ page for more{" "}
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
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
