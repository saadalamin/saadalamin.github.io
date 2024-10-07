import { Helmet } from "react-helmet";

// Components
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

function Blog() {
    const [navHeight, setNavHeight] = useState(0);
    useEffect(() => {
        setNavHeight(document.querySelector(".navbar").offsetHeight);
    }, []);
    return (
        <>
            {/*-- __HEAD__ --*/}
            <Helmet>
                <title>Personal Blog - Saad Al Amin</title>
            </Helmet>

            {/*-- __NAVBAR__ --*/}
            <Navbar />

            {/*-- __MAIN__ --*/}
            <main className="blog text-center p-0">
                <iframe
                    src="https://saadalamin.blogspot.com/"
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
}

export default Blog;
