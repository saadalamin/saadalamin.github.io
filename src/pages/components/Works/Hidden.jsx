import React from "react";

function Hidden() {
 return (
  <>
   {/*-- __MODAL__ --*/}
   <div
    className="modal fade"
    id="modalMain"
    data-bs-keyboard="false"
    tabIndex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true"
   >
    <div className="modal-dialog" style={{ width: "fit-content" }}>
     <div className="modal-content bg-light">
      <div className="modal-header">
       <button
        type="button"
        className="btn-close bg-white p-1"
        data-bs-dismiss="modal"
        aria-label="Close"
       ></button>
      </div>
      <div className="modal-body text-center text-black p-0">
       <img
        loading="lazy"
        alt="works"
        className="image"
        style={{ maxWidth: "500px" }}
       />
       <h5 className="title-post mt-3 mb-3 px-4 text-start">Name</h5>
       <p className="px-4 text-start">Description</p>
      </div>
     </div>
    </div>
   </div>
  </>
 );
}

export default Hidden;
