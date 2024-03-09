import React from "react";
import { Helmet } from "react-helmet";
import algoliasearch from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import { configure, hits, pagination } from "instantsearch.js/es/widgets";

import Nabvar from "./components/Navbar";

const searchClient = algoliasearch(
 "U7EK21FBVX",
 "3d95cdd382952b9c7d760e1d3be9847f"
);

function Search() {
 const [search, setSearch] = React.useState("");
 const q = new URLSearchParams(window.location.search).get("q");

 React.useEffect(() => {
  const searchInstant = instantsearch({
   indexName: "search_contents",
   searchClient,
   insights: true,
   future: {
    preserveSharedStateOnUnmount: true,
   },
  });

  searchInstant.addWidgets([
   hits({
    container: "#hits",
    templates: {
     item: (hit, { html, components }) => html`
      <article>
       <h3>${components.Highlight({ hit, attribute: "title" })}</h3>
       <p>
        ${components.Highlight({
         hit,
         attribute: "description",
        })}
        })}
       </p>
      </article>
     `,
    },
   }),
   configure({
    hitsPerPage: 8,
   }),
   pagination({
    container: "#pagination",
   }),
  ]);
  searchInstant.start();
  if (q) {
   setSearch(q);
   searchInstant.helper.setQuery(q).search();
  }
 }, [q]);

 return (
  <>
   <Helmet>
    <title>Search - Saad Al Amin</title>
    <link
     rel="stylesheet"
     href="https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/satellite-min.css"
    />
   </Helmet>
   <Nabvar />
   <main className="search-container">
    <div className="hero-section">
     <h1>Search</h1>
     <div id="searchBox">
      <div className="input-group my-3">
       <input
        type="text"
        className="form-control"
        placeholder="Search"
        value={search}
        onChange={(e) => {
         setSearch(e.target.value);
         if (e.target.value)
          window.history.pushState(
           {},
           "",
           `/search?q=${encodeURIComponent(e.target.value)}`
          );
         else window.history.pushState({}, "", "/search");
        }}
        style={{ maxWidth: "400px" }}
       />
       <button
        className="btn btn-secondary"
        onClick={() => {
         setSearch("");
         window.history.pushState({}, "", "/search");
        }}
       >
        Clear
       </button>
      </div>
     </div>
    </div>

    <div className="container pt-5" id="hits"></div>
    <div
     className="container pt-5 d-flex justify-content-center justify-content-md-end"
     id="pagination"
    ></div>
    <div
     className="container pt-5 text-center"
     style={{
      color: "#777",
     }}
    >
     Powered by{" "}
     <a href="https://www.algolia.com/" target="_blank" rel="noreferrer">
      <img
       src="/images/icons/Algolia-logo-blue.png"
       alt="Algolia"
       height={18}
      />
     </a>
    </div>
   </main>
  </>
 );
}

export default Search;
