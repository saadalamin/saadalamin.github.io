import React from "react";

function Hidden() {
 React.useEffect(() => {
  /**
   * @description Bottom to top button
   */
  let btn = document.querySelector(".__b2top");
  if (btn) {
   window.addEventListener("scroll", () => {
    if (
     document.body.scrollTop > 290 ||
     document.documentElement.scrollTop > 290
    ) {
     btn.style.display = "block";
    } else {
     btn.style.display = "none";
    }
   });
   btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
   });
  }
 }, []);
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

   {/**-- __BOTTOM_TO_TOP --**/}
   <div className="__b2top position-fixed end-0 bottom-0 m-3 btn bg-transparent dn">
    <svg
     xmlns="http://www.w3.org/2000/svg"
     width="30"
     height="30"
     fill="#fff"
     className="bi bi-arrow-up-square-fill"
     viewBox="0 0 16 16"
    >
     <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
    </svg>
   </div>
  </>
 );
}

export default Hidden;
