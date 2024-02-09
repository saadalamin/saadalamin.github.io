import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Works from "./pages/Works";
import Contents from "./pages/Contents";
import Admin from "./pages/Admin";

import WithScrollback from "./pages/contexts/WithScrollback";

function App() {
 return (
  <>
   <BrowserRouter>
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
      path="/admin"
      element={
       <WithScrollback>
        <Admin />
       </WithScrollback>
      }
     />
    </Routes>
   </BrowserRouter>
  </>
 );
}

export default App;
