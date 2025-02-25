import { Helmet } from "react-helmet";
import modalConfig from "./scripts/modalConfig";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/About/Hero";
import Opinions from "./components/About/Opinions";
import Media from "./components/About/Media";
import Footer from "./components/Footer";
import Hidden from "./components/About/Hidden";
import { useEffect } from "react";
import faqSchema from "./schemas/faqSchema";

function About() {
  useEffect(() => {
    modalConfig();
  }, []);
  return (
    <div className="About">
      {/*-- __HEAD__ --*/}
      <Helmet>
        <title>About - Saad Al Amin</title>
        <script type="application/ld+json">{faqSchema.faqSchema}</script>
      </Helmet>

      {/*-- __NAVBAR__ --*/}
      <Navbar />

      {/*-- __MAIN__ --*/}
      <main className="about py-5">
        <div className="container p-md-0">
          {/*-- __HERO__ --*/}
          <Hero />

          {/*-- __OPINIONS__ --*/}
          <Opinions />

          {/*-- __MEDIA__ --*/}
          <Media />
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
