import React from "react";

function Hidden() {
 return (
  <>
   {/**-- __MODAL --**/}
   <div
    className="modal fade"
    id="modalForPress"
    data-bs-keyboard="false"
    tabIndex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true"
   >
    <div className="modal-dialog modal-lg modal-dialog-scrollable">
     <div className="modal-content bg-light text-black">
      <div className="modal-header">
       <h1 className="modal-title fs-5" id="modalLabel">
        Press Release
       </h1>
       <button
        type="button"
        className="btn-close bg-white p-1"
        data-bs-dismiss="modal"
        aria-label="Close"
       ></button>
      </div>
      <div className="modal-body list-group p-0 text-center"></div>
     </div>
    </div>
   </div>

  </>
 );
}

export default Hidden;
