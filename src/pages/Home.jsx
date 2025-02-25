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
import Faq from "./components/Home/Faq";
import faqSchema from "./schemas/faqSchema";

function Home() {
  return (
    <div className="Home">
      {/*-- __HEAD__ --*/}
      <Helmet>
        <title>Saad Al Amin - Official Website</title>
        <link rel="canonical" href="https://www.saadalamin.com"/>

        <link rel="preload" href="/images/interface/e3.jpg" as="image" />
        <link rel="preload" href="/images/interface/e-2-blur.jpg" as="image" />
        <script type="application/ld+json">{JSON.stringify(faqSchema.faqSchema)}</script>
      </Helmet>

      {/*-- __NAVBAR__ --*/}
      <Navbar />

      {/*-- __HERO__ --*/}
      <Hero />

      {/*-- __MAIN__ --*/}
      <main className="home">
        <div className="w-100 px-3 py-4 p-sm-5">
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

      {/*-- __FAQ__ --*/}
      <Faq limited />

      {/*-- __FOOTER__ --*/}
      <Footer />

      {/*-- __HIDDEN__ --*/}
      <Hidden />
    </div>
  );
}

export default Home;
