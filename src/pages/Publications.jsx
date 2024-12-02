import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

// Components
import Navbar from "./components/Navbar";

export default function Publications() {
 const { id } = useParams();
 const [navHeight, setNavHeight] = useState(0);
 useEffect(() => {
  setNavHeight(document.querySelector(".navbar").offsetHeight);
 }, []);
 if (
  id ==
  "Bangladeshi_July_Revolution_Visual_Representation_Impacts_A_Film_Impact_Aspect"
 ) {
  return (
   <>
    {/*-- __HEAD__ --*/}
    <Helmet>
     <title>
      Bangladeshi July Revolution & Visual Representation Impacts: A Film Impact
      Aspect - Saad Al Amin
     </title>
    </Helmet>

    {/*-- __NAVBAR__ --*/}
    <Navbar />

    {/*-- __MAIN__ --*/}
    <main className="blog text-center p-0">
     <iframe
      src="/pdfs/Bangladeshi July Revolution & Visual Representation Impacts A Film Impact Aspect.pdf"
      style={{
       display: "block",
       border: "none",
       width: "100%",
       height: "calc(100vh - " + navHeight + "px)",
      }}
     ></iframe>
    </main>
   </>
  );
 } else return <div>Not Found!</div>;
}
