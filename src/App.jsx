import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import websiteSchema from "./pages/schemas/websiteSchema";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Works from "./pages/Works";
import Contents from "./pages/Contents";
import Discuss from "./pages/Discuss";
import Admin from "./pages/Admin";

import WithScrollback from "./pages/contexts/WithScrollback";
import Search from "./pages/Search";
import Error from './pages/Error';

function App() {
 return (
  <>
   <BrowserRouter>
    <Helmet>
     <script type="application/ld+json">{websiteSchema}</script>
    </Helmet>

    <Routes>
     <Route
      path="/"
      element={
       <WithScrollback>
        <Home />
       </WithScrollback>
      }
     />
     <Route
      path="/about"
      element={
       <WithScrollback>
        <About />
       </WithScrollback>
      }
     />
     <Route
      path="/blog"
      element={
       <WithScrollback>
        <Blog />
       </WithScrollback>
      }
     />
     <Route
      path="/works"
      element={
       <WithScrollback>
        <Works />
       </WithScrollback>
      }
     />
     <Route
      path="/contents"
      element={
       <WithScrollback>
        <Contents />
       </WithScrollback>
      }
     />
     <Route
      path="/search"
      element={
       <WithScrollback>
        <Search />
       </WithScrollback>
      }
     />
     <Route
      path="/discuss"
      element={
       <WithScrollback>
        <Discuss />
       </WithScrollback>
      }
     />
     <Route
      path="/admin"
      element={
       <WithScrollback>
        <Admin />
       </WithScrollback>
      }
     />
     <Route
      path="*"
      element={
       <WithScrollback>
        <Error />
       </WithScrollback>
      }
     />
    </Routes>
   </BrowserRouter>
  </>
 );
}

export default App;
