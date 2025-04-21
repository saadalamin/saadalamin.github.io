import { useEffect, useState } from "react";
import getPress from "../../scripts/getPress";
import {useLenis} from "lenis/react";

function PressRelease() {
 const [pressPosts, setPressPosts] = useState([]);
 const [modalPressPosts, setModalPressPosts] = useState([]);
 const [hasError, setHasError] = useState(false);
 const lenis = useLenis();

 useEffect(() => {
  if (lenis) {
   const modalElement = document.getElementById("modalForPress");

   const handleModalHide = () => lenis.start();
   modalElement.addEventListener("hide.bs.modal", handleModalHide);

   return () => {
    modalElement.removeEventListener("hide.bs.modal", handleModalHide);
   };
  }
 }, [lenis]);

 useEffect(() => {
  async function dataFetch() {
   getPress(
    (data) => {
     setModalPressPosts(data);
     setHasError(false);
     const sortedData = data.sort(
      (a, b) =>
       new Date(b.date.split(" ").reverse().join(" ")) -
       new Date(a.date.split(" ").reverse().join(" "))
     );
     setPressPosts(sortedData.slice(0, 4));
    },
    (error) => {
     console.error("Error fetching:", error);
     setHasError(true);
    }
   );
  }

  dataFetch();
 }, []);

 return (
  <>
   <h4 className="title">Press Release</h4>
   <div className="posts-a row px-1 row-gap-4 mb-5">
    {pressPosts.map((post, index) => (
     <div
      key={index}
      className={`post col-12 col-sm-6 col-lg-3 ${
       post.iframe ? "" : "link-container"
      }`}
     >
      {post.iframe ? (
       <>
        <div dangerouslySetInnerHTML={{ __html: post.iframe }} />
        <div className="body">
         <p>
          <span>{post.title}</span>
          <span>{post.date}</span>
         </p>
        </div>
       </>
      ) : (
       <a href={post.link} target="_blank" rel="noopener noreferrer">
        <img src={post.img} className="card-img-top" alt="Press" />
        <div className="body">
         <p>
          <span>{post.title}</span>
          <span>{post.date}</span>
         </p>
        </div>
       </a>
      )}
     </div>
    ))}
    <hr />
    <div className="seeMore col-12 col-sm-6 col-lg-3">
     <button
      className="btn"
      data-bs-toggle="modal"
      data-bs-target="#modalForPress"
      onClick={() => lenis.stop()}
     >
      Browse More +
     </button>
    </div>
   </div>

   {/* Modal */}
   <div
    className="modal fade"
    id="modalForPress"
    tabIndex="-1"
    aria-labelledby="modalForPressLabel"
    aria-hidden="true"
   >
    <div className="modal-dialog modal-dialog-scrollable">
     <div className="modal-content">
      <div className="modal-header">
       <h5 className="modal-title text-black" id="modalForPressLabel">
        Press release
       </h5>
       <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
       ></button>
      </div>
      <div className="modal-body">
       {hasError ? (
        <p>An unknown error occurred!</p>
       ) : (
        <ul className="list-group">
         {modalPressPosts.map((post, index) => (
          <li key={index} className="list-group-item">
           {post.iframe ? (
            <>
             <section dangerouslySetInnerHTML={{ __html: post.iframe }} />
             <div>
              <h4>{post.title}</h4>
             </div>
            </>
           ) : (
            <>
             <img src={post.img} alt="press" />
             <div>
              <h4>{post.title}</h4>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
               See More
              </a>
             </div>
            </>
           )}
          </li>
         ))}
        </ul>
       )}
      </div>
     </div>
     </div>
   </div>
  </>
 );
}

export default PressRelease;
