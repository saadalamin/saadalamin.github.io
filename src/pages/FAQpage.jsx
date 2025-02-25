import React from "react";
import Faq from "./components/Home/Faq";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import faqSchema from "./schemas/faqSchema";

export default function Faqpage() {
  return (
    <div>
      <Helmet>
        <title>Who is Saad Al Amin? – Frequently Asked Questions</title>
        <script type="application/ld+json">{faqSchema.faqSchema}</script>
      </Helmet>
      <Navbar />
      <Faq />
      <Footer />
    </div>
  );
}
