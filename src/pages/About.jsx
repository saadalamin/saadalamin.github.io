import React from "react";
import { Helmet } from "react-helmet";
import modalConfig from "./scripts/modalConfig";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/About/Hero";
import Opinions from "./components/About/Opinions";
import Media from "./components/About/Media";
import Footer from "./components/Footer";
import Hidden from "./components/About/Hidden";

function About() {
 React.useEffect(() => {
  document.body.classList.remove("body-home");
  modalConfig();
 }, []);
 return (
  <div className="About">
   {/*-- __HEAD__ --*/}
   <Helmet>
    <title>About - Saad Al Amin</title>
   </Helmet>

   {/*-- __NAVBAR__ --*/}
   <Navbar />

   {/*-- __MAIN__ --*/}
   <main className="about pt-lg-5">
    <div className="container-lg pt-5">
     <div className="containe">
      {/*-- __HERO__ --*/}
      <Hero />

      {/*-- __OPINIONS__ --*/}
      <Opinions />

      {/*-- __MEDIA__ --*/}
      <Media />
     </div>
    </div>
   </main>

   {/*-- __FOOTER__ --*/}
   <Footer />

   {/*-- __HIDDEN __ --*/}
   <Hidden />
  </div>
 );
}

export default About;
