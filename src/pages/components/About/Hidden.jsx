import React from "react";

function Hidden() {
 return (
  <>
   {/*-- __MODEL __ --*/}
   <div
    className="modal fade"
    id="modalMain"
    data-bs-keyboard="false"
    tabIndex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true"
   >
    <div className="modal-dialog">
     <div className="modal-content bg-light text-black">
      <div className="modal-header">
       <button
        type="button"
        className="btn-close bg-white p-1"
        data-bs-dismiss="modal"
        aria-label="Close"
       ></button>
      </div>
      <div className="modal-body p-4">
       <img
        alt="about"
        className="image rounded-2 mb-3"
        style={{ width: "100px", height: "100px" }}
       />
       <h5 className="title-post mt-2 mb-3">Name</h5>
       <p>Description</p>
      </div>
     </div>
    </div>
   </div>
  </>
 );
}

export default Hidden;
