import React from "react";
import { Helmet } from "react-helmet";

import Nabvar from "./components/Navbar";

function Search() {
 const [search, setSearch] = React.useState("");
 const q = new URLSearchParams(window.location.search).get("q");
 React.useEffect(() => {
  setSearch(q);
 }, [q]);
 return (
  <>
   <Helmet>
    <title>Admin</title>
   </Helmet>
   <Nabvar />
   <main className="search-container">
    <div className="hero-section">
     <h1>Search</h1>
     <form>
      <div className="input-group my-3">
       <input
        type="text"
        className="form-control"
        placeholder="Search"
        value={search}
        onChange={(e) => {
         setSearch(e.target.value);
         if (e.target.value)
          window.history.pushState({}, "", `/search?q=${e.target.value}`);
         else window.history.pushState({}, "", "/search");
        }}
        style={{ maxWidth: "400px" }}
       />
       <button
        className="btn btn-secondary"
        type="button"
        onClick={(e) => {
         if (!search) return;
         setSearch(e.target.value);
         window.location.replace(`/search?q=${search}`);
        }}
       >
        Search
       </button>
      </div>
     </form>
    </div>
    <div className="container pt-5"></div>
   </main>
  </>
 );
}

export default Search;
