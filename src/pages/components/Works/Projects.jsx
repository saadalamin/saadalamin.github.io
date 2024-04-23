import React from "react";
import getMusicVideos from "../../scripts/getMusicvideos";

function Projects() {
 const [musicVideos, setMusicVideos] = React.useState([]);
 React.useEffect(() => {
  function configProjects() {
   getMusicVideos(
    (res) => {
     setMusicVideos(res);
    },
    (err) => {
     console.info(err);
    }
   );
  }
  configProjects();
 }, []);
 return (
  <div>
   <h4 className="title">Music Videos</h4>
   <div className="project-container-a">
    <div className="container">
     <div className="row row-gap-2">
      {musicVideos.map((mv, i) => {
       return (
        <div className="col-lg-2 col-xl-4" key={i}>
         <img
          className="w-100"
          style={{
           minHeight: "200px",
          }}
          src={mv.src}
          alt="Thumbnail - Music Video"
          title={mv.title}
         />
         <p className="d-flex justify-content-between">
          <span>{mv.title}</span>
          <a
           href={mv.link}
           className="float-end btn py-1 px-2 btn-success"
           target="_blank"
           rel="noreferrer"
           style={{
            fontSize: "0.8rem",
           }}
          >
           Watch
          </a>
         </p>
        </div>
       );
      })}
     </div>
    </div>
   </div>
   <div className="break"></div>
   <h4 className="title">Podcasts</h4>
   <div className="project-container-b">
    <div className="container">
     <div className="row row-gap-4">
      <div className="col-md-4">
       <iframe
        src="https://www.youtube.com/embed/SJPMxe_1O4Y"
        title="Saad Al Amin Podcast 1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
       ></iframe>
      </div>
      <div className="col-md-4">
       <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/KuhqoBdmjzA?si=zCFegP-iXTGL5JvN"
        title="Saad Al Amin Podcast 2"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
       ></iframe>
      </div>
     </div>
    </div>
   </div>
   <div className="break"></div>
   <h4 className="title">Projects</h4>
   <div className="project-container-c">
    <div className="container">
     <div className="row row-gap-4">
      <div className="col-md-4">
       <iframe
        src="https://www.youtube.com/embed/uj60JrZcvts"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
       ></iframe>
      </div>
      <div className="col-md-4">
       <iframe
        src="https://www.youtube.com/embed/8BwhciEvKsI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
       ></iframe>
      </div>
      <div className="col-md-4">
       <iframe
        src="https://www.youtube.com/embed/Oqywer0ejjU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
       ></iframe>
      </div>
      <div className="col-md-4">
       <iframe
        src="https://www.youtube.com/embed/6ghDK8BLlB4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
       ></iframe>
      </div>
      <div className="col-md-4">
       <iframe
        src="https://www.youtube.com/embed/wcW1zMyCCRM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
       ></iframe>
      </div>
      <div className="col-md-4">
       <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/CfIsU1N3_A8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
       ></iframe>
      </div>
      <div className="col-md-4">
       <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ngVipGUL8_o"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
       ></iframe>
      </div>
      <div className="col-md-4">
       <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VKr6g4tLhTA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
       ></iframe>
      </div>
      <div className="col-md-4">
       <iframe
        src="https://www.youtube.com/embed/iYrbqV9NZRk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
       ></iframe>
      </div>
      <div className="col-md-4">
       <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/pR393ERBV38"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
       ></iframe>
      </div>
      <div className="col-md-4">
       <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/54mSnqleMp0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
       ></iframe>
      </div>
      <div className="col-md-4">
       <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/t-eEGaxhhCk"
        title="Abu Adam - Lost | Official Nasheed Video (Vocals Only)"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
       ></iframe>
      </div>
     </div>
    </div>
   </div>
   <div className="break"></div>
   <h4 className="title">Photography</h4>
   <div className="project-container-d">
    <div className="container">
     <div className="row row-gap-4">
      <div
       className="col-6 col-sm-4 col-md-3"
       data-bs-toggle="modal"
       data-bs-target="#modalMain"
      >
       <img
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fphotography%2FDSC02539.jpg?alt=media&token=49527fbe-1aeb-4e84-bb12-f6f707122793"
        alt="Photography"
       />
      </div>
      <div
       className="col-6 col-sm-4 col-md-3"
       data-bs-toggle="modal"
       data-bs-target="#modalMain"
      >
       <img
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fphotography%2FDSC00122.jpg?alt=media&token=dc36cd56-d879-4323-8b92-22aa0cabc068"
        alt="Photography"
       />
      </div>
      <div
       className="col-6 col-sm-4 col-md-3"
       data-bs-toggle="modal"
       data-bs-target="#modalMain"
      >
       <img
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fphotography%2F7.jpg?alt=media&token=11002a1f-6521-42e5-b3ed-3e8546bcd948"
        alt="Photography"
       />
      </div>
      <div
       className="col-6 col-sm-4 col-md-3"
       data-bs-toggle="modal"
       data-bs-target="#modalMain"
      >
       <img
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fphotography%2F1.jpg?alt=media&token=724b4d92-8524-42da-882d-cf7ff7ab20f7"
        alt="Photography"
       />
      </div>
      <div
       className="col-6 col-sm-4 col-md-3 special"
       data-bs-toggle="modal"
       data-bs-target="#modalMain"
      >
       <img
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fphotography%2FDSC00432.jpg?alt=media&token=ae70a1f5-ecab-4e89-afc3-d40d08b2e7bf"
        alt="Photography"
       />
      </div>
      <div
       className="col-6 col-sm-4 col-md-3 special"
       data-bs-toggle="modal"
       data-bs-target="#modalMain"
      >
       <img
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fphotography%2FDSC02741.jpg?alt=media&token=e927c884-756f-4dc1-bdff-2bf293ee98a9"
        alt="Photography"
       />
      </div>
      <div
       className="col-12 col-sm-12 col-md-6"
       style={{ height: "fit-content" }}
      >
       <div className="row">
        <div className="col-6">
         <img
          loading="lazy"
          src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fphotography%2FDSC0993.jpg?alt=media&token=f4b40f28-8e7f-4d49-9edb-8eadfc7b072d"
          alt="Photography"
          data-bs-toggle="modal"
          data-bs-target="#modalMain"
         />
        </div>
        <div className="col-6">
         <img
          loading="lazy"
          src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fphotography%2FDSC00867.jpg?alt=media&token=ddf74481-3398-45a6-b765-33b18fa3dc20"
          alt="Photography"
          data-bs-toggle="modal"
          data-bs-target="#modalMain"
         />
        </div>
       </div>
       <br />
       <div className="row">
        <div className="col-6">
         <img
          loading="lazy"
          src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fphotography%2FDSC00908.jpg?alt=media&token=5f3bcc73-4633-4ef6-8173-5c8e27f70a24"
          alt="Photography"
          data-bs-toggle="modal"
          data-bs-target="#modalMain"
         />
        </div>
        <div className="col-6">
         <img
          loading="lazy"
          src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fphotography%2FDSC01338.jpg?alt=media&token=4610ab3e-b697-49a6-bf18-40d3d9d3db39"
          alt="Photography"
          data-bs-toggle="modal"
          data-bs-target="#modalMain"
         />
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>

   <h4 className="title">Design</h4>
   <div className="project-container-e">
    <div className="container">
     <div className="row row-gap-4">
      <div className="col-6 col-md-3">
       <img
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fdesign%2F1.jpg?alt=media&token=63f1bd0a-e9e3-4ec6-b522-acb046e374be"
        alt="Design"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
      </div>
      <div className="col-6 col-md-3">
       <img
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fdesign%2F2.jpg?alt=media&token=9d65b3a6-5290-438a-9e53-ea431c4f5ec9"
        alt="Design"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
      </div>
      <div className="col-6 col-md-3">
       <img
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fdesign%2F3.jpg?alt=media&token=8477fb19-d376-492b-ad17-ae9659341af7"
        alt="Design"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
      </div>
      <div className="col-6 col-md-3">
       <img
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fdesign%2F4.jpg?alt=media&token=09025930-f8eb-46a0-8ca3-6e7bf733a5de"
        alt="Design"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
      </div>
      <div className="col-6 col-md-3">
       <img
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fdesign%2F5.jpg?alt=media&token=803488f2-1f05-42da-b44a-c616dbc8e1e7"
        alt="Design"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
      </div>
      <div className="col-6 col-md-3">
       <img
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fdesign%2F11.jpg?alt=media&token=23eb6707-7940-4c5f-ae4e-96e69e0b7da9"
        alt="Design"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
      </div>
      <div className="col-6 col-md-3">
       <img
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fdesign%2F7.jpg?alt=media&token=ee246940-9ffc-4473-b11f-895701c17ac5"
        alt="Design"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
      </div>
      <div className="col-6 col-md-3">
       <img
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fdesign%2F8.jpg?alt=media&token=9f36508e-3814-4743-92b7-cc6505a35504"
        alt="Design"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
      </div>
      <div className="col-6 col-md-3">
       <img
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fdesign%2F9.jpg?alt=media&token=1c1df5b6-b803-4c66-a1f5-317a29260537"
        alt="Design"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
      </div>
      <div className="col-6 col-md-3">
       <img
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fdesign%2F10.jpg?alt=media&token=9b5fe7de-874d-428f-a67f-4c0dbbb263e7"
        alt="Design"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
      </div>
      <div className="col-6 col-md-3">
       <img
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fdesign%2F6.jpg?alt=media&token=bf3bbce7-d859-4041-bb7c-c269cfa3197b"
        alt="Design"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
      </div>
     </div>
    </div>
   </div>
   <div className="break"></div>
   <h4 className="title">Seminars</h4>
   <div className="project-container-f">
    <div className="container">
     <div className="row row-gap-4">
      <div className="col-md-4">
       <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsaadalamin0%2Fposts%2Fpfbid02B596uxb5mr4FQYJk4kfHnoQTBMG46khWCKGWvZYFpENVEVb1gYKDNKkfUe8d13SWl&show_text=false&width=500"
        style={{
         border: "none",
         overflow: "hidden",
        }}
        scrolling="no"
        frameBorder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
       ></iframe>
      </div>
      <div className="col-md-4">
       <iframe
        src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsaadalamin04%2Fvideos%2F1228096624518711%2F&show_text=false&width=267&t=0"
        style={{
         border: "none",
         overflow: "hidden",
        }}
        scrolling="no"
        frameBorder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen="true"
       ></iframe>
      </div>
      <div className="col-md-4">
       <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D1070534523723163%26set%3Da.228624607914163%26type%3D3&show_text=false&width=500"
        style={{
         border: "none",
         overflow: "hidden",
        }}
        scrolling="no"
        frameBorder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
       ></iframe>
      </div>
     </div>
     <div className="row mt-4 row-gap-2">
      <div className="col-md-4">
       <iframe
        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fsaadalamin0%2Fvideos%2F523173459991807%2F&show_text=false&width=560&t=0"
        style={{
         border: "none",
         overflow: "hidden",
        }}
        scrolling="no"
        frameBorder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen="true"
       ></iframe>
      </div>
      <div className="col-md-4">
       <iframe
        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fsaadalamin0%2Fvideos%2F1378693929368500%2F&show_text=false&width=560&t=0"
        style={{
         border: "none",
         overflow: "hidden",
        }}
        scrolling="no"
        frameBorder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen="true"
       ></iframe>
      </div>
      <div className="col-md-4">
       <iframe
        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fsaadalamin0%2Fvideos%2F909133580096670%2F&show_text=false&width=560&t=0"
        style={{
         border: "none",
         overflow: "hidden",
        }}
        scrolling="no"
        frameBorder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen="true"
       ></iframe>
      </div>
     </div>
    </div>
   </div>
   <div className="break"></div>
   <h4 className="title">Social</h4>
   <div className="project-container-g">
    <div className="container">
     <div className="row row-gap-4">
      <div className="col-md-4">
       <img
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fsocial%2F1.jpg?alt=media&token=31f160f1-7148-473d-97cf-3e0a06fe0b3c"
        alt="Social"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
       <span>After Working at Ramadan Iftar Donation Project 2022</span>
       <span></span>
      </div>
      <div className="col-md-4">
       <img
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fsocial%2F2.jpg?alt=media&token=4fb86d1a-e5ce-4680-9a9d-2d8ded3774fc"
        alt="Social"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
       <span>After Working at Ramadan Iftar Donation Project 2022</span>
       <span></span>
      </div>
      <div className="col-md-4">
       <img
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fsocial%2F3.jpg?alt=media&token=0b95f4cb-da28-457b-b45b-a03dad7b25cb"
        alt="Social"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
       <span>After Working at Ramadan Iftar Donation Project 2022</span>
       <span></span>
      </div>
      <div className="col-md-4">
       <img
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fsocial%2F4.jpg?alt=media&token=f722c59b-9382-4dba-b59e-6cc5d20a1af9"
        alt="Social"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
       <span>After Working at Ramadan Iftar Donation Project 2022</span>
       <span></span>
      </div>
      <div className="col-md-4">
       <img
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fsocial%2F5.jpg?alt=media&token=3325d778-33c4-4713-a3af-547f094ed5eb"
        alt="Social"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
       <span>After Working at Ramadan Iftar Donation Project 2022</span>
       <span></span>
      </div>
      <div className="col-md-4">
       <img
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fsocial%2F6.jpg?alt=media&token=0794d2f0-c622-4311-a66e-0c60eb7a85cf"
        alt="Social"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
       <span>After Working at Ramadan Iftar Donation Project 2022</span>
       <span></span>
      </div>
      <div className="col-md-4">
       <img
        src="https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fsocial%2F7.jpg?alt=media&token=725131e8-e7dc-4e70-a572-f8b2e382206b"
        alt="Social"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
       <span>After Working at Ramadan Iftar Donation Project 2022</span>
       <span></span>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Projects;
