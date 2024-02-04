import React from "react";
import { Helmet } from "react-helmet";
import modalConfig from "./utils/modalConfig";

// Components
import Navbar from "./components/Navbar";
import Projects from "./components/Works/Projects";
import Footer from "./components/Footer";
import Hidden from "./components/Works/Hidden";

function Works() {
 React.useEffect(() => {
  document.body.classList.remove("body-home");
  modalConfig();
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
