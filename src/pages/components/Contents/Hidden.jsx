import React from "react";

function Hidden() {
 return (
  <>
   {/*-- __MODAL__ --*/}
   <div
    className="modal fade modal-lg"
    id="modalMain"
    data-bs-keyboard="false"
    tabIndex="-1"
    aria-labelledby="modalLabel"
    onClick="document.getElementById('modalMain').querySelector('video').pause();"
    aria-hidden="true"
   >
    <div
     className="modal-dialog modal-dialog-scrollable"
     style={{ width: "fit-content" }}
    >
     <div className="modal-content bg-light text-black">
      <div className="modal-header">
       <p className="modal-title title-post text-start">Untitled</p>
       <button
        type="button"
        className="btn-close bg-white p-1"
        data-bs-dismiss="modal"
        aria-label="Close"
       ></button>
      </div>
      <div className="modal-body text-center p-0">
       <div style={{ backgroundColor: "#000" }}>
        <video
         src=""
         controls
         style={{ height: "85vh", minHeight: "500px", maxWidth: "450px" }}
         autoPlay
        ></video>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
}

export default Hidden;
