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
    {`<!-- INFORMATION -->`}
    <meta
     name="description"
     content="Saad Al Amin is a Bangladeshi artist, film maker and graphics designer born 3 August 2005 in Dhaka, Bangladesh. He founded Muktir Ghonta and Videophics in 2018. He has also founded Creative Youth Community - CYC."
    />
    <meta
     name="keywords"
     content="saad al amin, official website, graphic designer, artist, film maker, finalist, leader, designer, journalist, bangladesh"
    />
    <meta name="author" content="Saad Al Amin" />
    {`<!-- OPEN GRAPH -->`}
    <meta property="og:site_name" content="Saad Al Amin" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Saad Al Amin - Official Website" />
    <meta
     property="og:description"
     content="Saad Al Amin is a Bangladeshi artist, film maker and graphics designer born 3 August 2005 in Dhaka, Bangladesh. He
    founded Muktir Ghonta and Videophics in 2018. He has also founded Creative Youth Community - CYC."
    />
    <meta property="og:image" content="/images/interface/mediaviewcover.jpg" />
    <meta property="og:url" content="https://saadalamin.com/" />
    {`<!-- TWITTER GRAPH -->`}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Saad Al Amin - Official Website" />
    <meta
     name="twitter:description"
     content="Saad Al Amin is a Bangladeshi artist, film maker and graphics designer born 3 August 2005 in Dhaka, Bangladesh. He
    founded Muktir Ghonta and Videophics in 2018. He has also founded Creative Youth Community - CYC."
    />
    <meta name="twitter:image" content="/images/interface/newcover.jpg" />
    <meta name="twitter:site" content="@saadalamin" />
    <meta name="twitter:creator" content="@mosefatullah" />

    <link rel="preload" href="/images/interface/e3.jpg" as="image" />
    <link rel="preload" href="/images/interface/e-2-blur.jpg" as="image" />
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
