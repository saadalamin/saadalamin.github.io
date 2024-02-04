import React from "react";
import { Helmet } from "react-helmet";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Home/Hero";
import PressRelease from "./components/Home/PressRelease";
import Features from "./components/Home/Features";
import Counter from "./components/Home/Counter";
import About from "./components/Home/About";
import WorkedWith from "./components/Home/WorkedWith";
import ShowMe from "./components/Home/ShowMe";
import Footer from "./components/Footer";
import Hidden from "./components/Home/Hidden";

function Home() {
 React.useEffect(() => {
  document.body.classList.add("body-home");
 }, []);
 return (
  <div className="Home">
   {/*-- __HEAD__ --*/}
   <Helmet>
    <title>Saad Al Amin - Official Website</title>
   </Helmet>

   {/*-- __NAVBAR__ --*/}
   <Navbar />

   {/*-- __HERO__ --*/}
   <Hero />

   {/*-- __MAIN__ --*/}
   <main className="home">
    <div className="container py-md-5">
     {/*-- __PRESS_RELEASE__ --*/}
     <PressRelease />
    </div>
    <div className="parallax bg-light">
     <div className="container">
      <div className="break"></div>
      {/*-- __FEATURES__ --*/}
      <Features />
      {/*-- __COUNTER__ --*/}
      <Counter />
     </div>
    </div>
    <div className="container pt-0 pt-md-5 pb-lg-5">
     {/*-- __ABOUT__ --*/}
     <About />
     {/*-- __WORKED_WITH__ --*/}
     <WorkedWith />
     {/*-- __SHOW_ME__ --*/}
     <ShowMe />
    </div>
   </main>

   {/*-- __FOOTER__ --*/}
   <Footer />

   {/*-- __HIDDEN__ --*/}
   <Hidden />
  </div>
 );
}

export default Home;
