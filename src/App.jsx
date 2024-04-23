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
import DiscussPost from "./pages/DiscussPost";
import Admin from "./pages/Admin";

import WithLayout from "./pages/contexts/WithLayout";
import Search from "./pages/Search";
import Error from "./pages/Error";

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
              <WithLayout>
                <Home />
              </WithLayout>
            }
          />
          <Route
            path="/about"
            element={
              <WithLayout>
                <About />
              </WithLayout>
            }
          />
          <Route
            path="/blog"
            element={
              <WithLayout>
                <Blog />
              </WithLayout>
            }
          />
          <Route
            path="/works"
            element={
              <WithLayout>
                <Works />
              </WithLayout>
            }
          />
          <Route
            path="/contents"
            element={
              <WithLayout>
                <Contents />
              </WithLayout>
            }
          />
          <Route
            path="/search"
            element={
              <WithLayout>
                <Search />
              </WithLayout>
            }
          />
          <Route
            path="/discuss"
            element={
              <WithLayout>
                <Discuss />
              </WithLayout>
            }
          />
          <Route
            path="/discuss/q/:id"
            element={
              <WithLayout>
                <DiscussPost />
              </WithLayout>
            }
          />
          <Route
            path="/admin"
            element={
              <WithLayout>
                <Admin />
              </WithLayout>
            }
          />
          <Route
            path="*"
            element={
              <WithLayout>
                <Error />
              </WithLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
