import React from "react";
import { Helmet } from "react-helmet";
import faqSchema from "./schemas/faqSchema";
import articleSchema from "./schemas/articleSchema";

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
     data-react-helmet="true"
    />
    <meta
     name="keywords"
     content="saad al amin, official website, graphic designer, artist, film maker, finalist, leader, designer, journalist, bangladesh"
     data-react-helmet="true"
    />
    <meta name="author" content="Saad Al Amin" data-react-helmet="true" />
    {`<!-- OPEN GRAPH -->`}
    <meta
     property="og:site_name"
     content="Saad Al Amin"
     data-react-helmet="true"
    />
    <meta property="og:type" content="website" data-react-helmet="true" />
    <meta
     property="og:title"
     content="Saad Al Amin - Official Website"
     data-react-helmet="true"
    />
    <meta
     property="og:description"
     content="Saad Al Amin is a Bangladeshi artist, film maker and graphics designer born 3 August 2005 in Dhaka, Bangladesh. He
    founded Muktir Ghonta and Videophics in 2018. He has also founded Creative Youth Community - CYC."
     data-react-helmet="true"
    />
    <meta
     property="og:image"
     content="/images/interface/mediaviewcover.jpg"
     data-react-helmet="true"
    />
    <meta
     property="og:url"
     content="https://saadalamin.com/"
     data-react-helmet="true"
    />
    {`<!-- TWITTER GRAPH -->`}
    <meta
     name="twitter:card"
     content="summary_large_image"
     data-react-helmet="true"
    />
    <meta
     name="twitter:title"
     content="Saad Al Amin - Official Website"
     data-react-helmet="true"
    />
    <meta
     name="twitter:description"
     content="Saad Al Amin is a Bangladeshi artist, film maker and graphics designer born 3 August 2005 in Dhaka, Bangladesh. He
    founded Muktir Ghonta and Videophics in 2018. He has also founded Creative Youth Community - CYC."
     data-react-helmet="true"
    />
    <meta
     name="twitter:image"
     content="/images/interface/newcover.jpg"
     data-react-helmet="true"
    />
    <meta name="twitter:site" content="@saadalamin" data-react-helmet="true" />
    <meta
     name="twitter:creator"
     content="@mosefatullah"
     data-react-helmet="true"
    />

    {`<!-- SCHEMA.ORG -->`}
    <script type="application/ld+json" data-react-helmet="true">
     {faqSchema}
    </script>
    <script type="application/ld+json" data-react-helmet="true">
     {articleSchema}
    </script>
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
