import React from "react";
import { getSitemap, postSitemap } from "../utils/sitemap";

function Sitemap() {
 const [data, setData] = React.useState(null);
 const [addnewsitemapInput1, setAddnewsitemapInput1] = React.useState(
  "https://saadalamin.com/"
 );
 const [addnewsitemapInput2, setAddnewsitemapInput2] = React.useState(
  new Date().toISOString().split("T")[0]
 );
 const [addnewsitemapInput3, setAddnewsitemapInput3] = React.useState("Select");
 React.useEffect(() => {
  getSitemap((result) => {
   setData(result);
  });
 }, []);
 return (
  <div className="sitemap-section">
   <h2>Sitemap</h2>
   <div className="row row-gap-5">
    <div className="col-12 col-md-6">
     <button
      className="btn btn-primary"
      onClick={() => {
       setData("");
       setTimeout(() => {
        getSitemap((result) => {
         setData(result);
        });
       }, 500);
      }}
     >
      Refresh
     </button>
     <form className="addnewurl-form">
      <div className="form-group">
       <label htmlFor="url">
        URL{" "}
        <span
         style={{
          color: "red",
         }}
        >
         *
        </span>
       </label>
       <input
        type="text"
        id="url"
        className="form-control bg-dark text-white"
        value={addnewsitemapInput1}
        onChange={(e) => setAddnewsitemapInput1(e.target.value)}
       />
      </div>
      <div className="form-group">
       <label htmlFor="lastmod">
        Last Modified{" "}
        <span
         style={{
          color: "red",
         }}
        >
         *
        </span>
       </label>
       <input
        type="date"
        id="lastmod"
        className="form-control bg-dark text-white"
        value={addnewsitemapInput2}
        onChange={(e) => setAddnewsitemapInput2(e.target.value)}
       />
      </div>
      <div className="form-group">
       <label htmlFor="changefreq">Change Frequency</label>
       <select
        id="changefreq"
        className="form-control bg-dark text-white"
        value={addnewsitemapInput3}
        onChange={(e) => setAddnewsitemapInput3(e.target.value)}
       >
        <option>Select</option>
        <option value="always">Always</option>
        <option value="hourly">Hourly</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
        <option value="never">Never</option>
       </select>
      </div>
      <div className="note">
       <p
        className="text-muted"
        style={{
         fontSize: "0.8rem",
         marginTop: "10px",
        }}
       >
        Note: Last Modified tells search engines to re-crawl the page.
       </p>
      </div>
      <button
       type="submit"
       className="btn btn-primary"
       onClick={(e) => {
        e.preventDefault();
        const dataParsed = JSON.parse(data);
        const url = document.getElementById("url").value;
        const lastmod = document.getElementById("lastmod").value;
        const changefreq = document.getElementById("changefreq").value;
        const dataFinal = {};
        if (!url) {
         alert("URL is required");
         return;
        } else {
         dataFinal.loc = { _text: url };
        }
        if (!lastmod) {
         alert("Last Modified is required");
         return;
        } else {
         dataFinal.lastmod = { _text: lastmod };
        }
        if (changefreq !== "Select") {
         dataFinal.changefreq = { _text: changefreq };
        }
        dataParsed.urlset.url.push(dataFinal);
        const newData = JSON.stringify(dataParsed, null, 4);
        setData("");
        setTimeout(() => {
         postSitemap(dataParsed, (result, e) => {
          if (result) {
           alert(
            "Sitemap submitted! It may take a few minutes to update properly."
           );
           setData(newData);
          } else {
           alert("Sitemap not submitted! Please try again.");
           console.error(e);
          }
         });
        }, 500);
       }}
      >
       Add New URL
      </button>
     </form>
    </div>
    <div className="col-12 col-md-6">
     <code style={{ display: "block", whiteSpace: "pre-wrap" }}>
      {data && JSON.stringify(JSON.parse(data), null, 4)}
     </code>
    </div>
   </div>
  </div>
 );
}

export default Sitemap;
