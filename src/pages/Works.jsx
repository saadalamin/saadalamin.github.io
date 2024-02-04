import React from "react";
import { Helmet } from "react-helmet";
import modalConfig from "./utils/modalConfig";
import getJSON from "./utils/getJSON";

// Components
import Navbar from "./components/Navbar";
import Projects from "./components/Works/Projects";
import Footer from "./components/Footer";
import Hidden from "./components/Works/Hidden";

function Works() {
 React.useEffect(() => {
  document.body.classList.remove("body-home");
  modalConfig();
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
    d.className = "float-end btn py-0 px-1 btn-success";
    d.innerHTML = "View";
    d.target = "_blank";
    a.appendChild(b);
    a.appendChild(c);
    c.appendChild(d);
    projectRow.appendChild(a);
    projectObject.push(a);
   }

   if (prj) {
    getJSON("https://saadalamin.com/data/works-music.json", function (res) {
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
  <div className="Works">
   {/*-- __HEAD__ --*/}
   <Helmet>
    <title>Works of Saad Al Amin</title>
   </Helmet>

   {/*-- __NAVBAR__ --*/}
   <Navbar />

   {/*-- __MAIN__ --*/}
   <main className="works">
    <div className="container">
     <div className="banner"></div>

     {/*-- __PROJECTS__ --*/}
     <Projects />
    </div>
   </main>

   {/*-- __FOOTER__ --*/}
   <Footer />

   {/*-- __HIDDEN __ --*/}
   <Hidden />
  </div>
 );
}

export default Works;
