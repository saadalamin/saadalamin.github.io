import React from "react";
import getJSON from "../../utils/getJSON";

function Projects() {
 React.useEffect(() => {
  function configProjects() {
   var prj = document.querySelectorAll(".works > .container")[0];

   function appendProject(imgLink, title, goLink, projectRow, projectObject) {
    var a = document.createElement("div");
    var b = document.createElement("img");
    var c = document.createElement("p");
    var d = document.createElement("a");
    a.classList.add("col-md-4");
    b.src = "/images/works/" + imgLink;
    b.alt = "Saad Al Amin Projects";
    b.title = title.toUpperCase();
    b.style.width = "100%";
    c.innerHTML = title;
    d.href = goLink;
    d.className = "float-end btn py-1 px-2 btn-success";
    d.style.fontSize = "0.8rem";
    d.innerHTML = "View";
    d.target = "_blank";
    a.appendChild(b);
    a.appendChild(c);
    c.appendChild(d);
    projectRow.appendChild(a);
    projectObject.push(a);
   }

   if (prj) {
    getJSON("/data/works-music.json", function (res) {
     var projectAObject = [];
     var projectBObject = [];
     var projectARow = prj.querySelectorAll(".project-container-a .row")[0];
     var projectBRow = prj.querySelectorAll(".project-container-b .row")[0];

     for (const i in res) {
      if (Object.hasOwnProperty.call(res, i)) {
       if (res[i].dir == "musicvideos") {
        appendProject(
         "musicvideos/" + res[i].src,
         res[i].title,
         res[i].link,
         projectARow,
         projectAObject
        );
       } else if (res[i].dir == "mycreations") {
        appendProject(
         "mycreations/" + res[i].src,
         res[i].title,
         res[i].link,
         projectBRow,
         projectBObject
        );
       }
      }
     }
    });
   }
  }
  configProjects();
 }, []);
 return (
  <div>
   <h4 className="title">Music Videos</h4>
   <div className="project-container-a">
    <div className="container">
     <div className="row row-gap-2"></div>
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
        src="/images/works/photography/DSC02539.jpg"
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
        src="/images/works/photography/DSC00122.jpg"
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
        src="/images/works/photography/7.jpg"
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
        src="/images/works/photography/1.jpg"
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
        src="/images/works/photography/DSC00432.jpg"
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
        src="/images/works/photography/DSC02741.jpg"
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
          src="/images/works/photography/DSC0993.jpg"
          alt="Photography"
          data-bs-toggle="modal"
          data-bs-target="#modalMain"
         />
        </div>
        <div className="col-6">
         <img
          loading="lazy"
          src="/images/works/photography/DSC00867.jpg"
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
          src="/images/works/photography/DSC00908.jpg"
          alt="Photography"
          data-bs-toggle="modal"
          data-bs-target="#modalMain"
         />
        </div>
        <div className="col-6">
         <img
          loading="lazy"
          src="/images/works/photography/DSC01338.jpg"
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
        src="/images/works/design/1.jpg"
        alt="Design"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
      </div>
      <div className="col-6 col-md-3">
       <img
        loading="lazy"
        src="/images/works/design/2.jpg"
        alt="Design"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
      </div>
      <div className="col-6 col-md-3">
       <img
        loading="lazy"
        src="/images/works/design/3.jpg"
        alt="Design"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
      </div>
      <div className="col-6 col-md-3">
       <img
        loading="lazy"
        src="/images/works/design/4.jpg"
        alt="Design"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
      </div>
      <div className="col-6 col-md-3">
       <img
        loading="lazy"
        src="/images/works/design/5.jpg"
        alt="Design"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
      </div>
      <div className="col-6 col-md-3">
       <img
        loading="lazy"
        src="/images/works/design/11.jpg"
        alt="Design"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
      </div>
      <div className="col-6 col-md-3">
       <img
        loading="lazy"
        src="/images/works/design/7.jpg"
        alt="Design"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
      </div>
      <div className="col-6 col-md-3">
       <img
        loading="lazy"
        src="/images/works/design/8.jpg"
        alt="Design"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
      </div>
      <div className="col-6 col-md-3">
       <img
        loading="lazy"
        src="/images/works/design/9.jpg"
        alt="Design"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
      </div>
      <div className="col-6 col-md-3">
       <img
        loading="lazy"
        src="/images/works/design/10.jpg"
        alt="Design"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
      </div>
      <div className="col-6 col-md-3">
       <img
        loading="lazy"
        src="/images/works/design/6.jpg"
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
     <div className="row row-gap-2">
      <div className="col-md-4">
       <img
        loading="lazy"
        src="/images/works/social/1.jpg"
        alt="Social"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
       <span>After Working at Ramadan Iftar Donation Project 2022</span>
       <span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
        voluptatem in beatae eligendi adipisci ut harum rem recusandae quam
        dolorem, quis nulla neque aliquid. Earum voluptatum ipsa perspiciatis
        odio voluptas?
       </span>
      </div>
      <div className="col-md-4">
       <img
        src="/images/works/social/2.jpg"
        alt="Social"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
       <span>After Working at Ramadan Iftar Donation Project 2022</span>
       <span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
        voluptatem in beatae eligendi adipisci ut harum rem recusandae quam
        dolorem, quis nulla neque aliquid. Earum voluptatum ipsa perspiciatis
        odio voluptas?
       </span>
      </div>
      <div className="col-md-4">
       <img
        src="/images/works/social/3.jpg"
        alt="Social"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
       <span>After Working at Ramadan Iftar Donation Project 2022</span>
       <span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
        voluptatem in beatae eligendi adipisci ut harum rem recusandae quam
        dolorem, quis nulla neque aliquid. Earum voluptatum ipsa perspiciatis
        odio voluptas?
       </span>
      </div>
      <div className="col-md-4">
       <img
        src="/images/works/social/4.jpg"
        alt="Social"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
       <span>After Working at Ramadan Iftar Donation Project 2022</span>
       <span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
        voluptatem in beatae eligendi adipisci ut harum rem recusandae quam
        dolorem, quis nulla neque aliquid. Earum voluptatum ipsa perspiciatis
        odio voluptas?
       </span>
      </div>
      <div className="col-md-4">
       <img
        src="/images/works/social/5.jpg"
        alt="Social"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
       <span>After Working at Ramadan Iftar Donation Project 2022</span>
       <span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
        voluptatem in beatae eligendi adipisci ut harum rem recusandae quam
        dolorem, quis nulla neque aliquid. Earum voluptatum ipsa perspiciatis
        odio voluptas?
       </span>
      </div>
      <div className="col-md-4">
       <img
        src="/images/works/social/6.jpg"
        alt="Social"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
       <span>After Working at Ramadan Iftar Donation Project 2022</span>
       <span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
        voluptatem in beatae eligendi adipisci ut harum rem recusandae quam
        dolorem, quis nulla neque aliquid. Earum voluptatum ipsa perspiciatis
        odio voluptas?
       </span>
      </div>
      <div className="col-md-4">
       <img
        src="/images/works/social/7.jpg"
        alt="Social"
        data-bs-toggle="modal"
        data-bs-target="#modalMain"
       />
       <span>After Working at Ramadan Iftar Donation Project 2022</span>
       <span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
        voluptatem in beatae eligendi adipisci ut harum rem recusandae quam
        dolorem, quis nulla neque aliquid. Earum voluptatum ipsa perspiciatis
        odio voluptas?
       </span>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Projects;
