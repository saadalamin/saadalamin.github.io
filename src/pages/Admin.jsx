import React from "react";
import { Helmet } from "react-helmet";

import Sitemap from "./components/Admin/Sitemap";
import Discuss from "./components/Admin/Discuss";
import Nabvar from "./components/Navbar";

// Utils
import {
  $firebase_auth_check_admin,
  $firebase_auth_login_google,
  $firebase_auth_github,
  $firebase_auth_logout,
  $firebase_auth_onAuth,
} from "./utils/firebase";

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(null);
  const [userName, setUserName] = React.useState(null);
  React.useEffect(() => {
    $firebase_auth_onAuth((user) => {
      if (user) {
        $firebase_auth_check_admin((r) => {
          if (r) {
            setIsLoggedIn(true);
            setUserName(user.displayName);
          } else {
            setIsLoggedIn(false);
          }
        });
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => {
      setIsLoggedIn(null);
    };
  }, []);
  return (
    <>
      <Helmet>
        <title>Admin</title>
      </Helmet>
      <Nabvar />
      <div className="admin-container">
        <div className="hero-section">
          <h1>Admin</h1>
          {isLoggedIn == true ? (
            <>
              <p className="text-muted">Logged in as {userName}</p>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => {
                  setIsLoggedIn(null);
                  $firebase_auth_logout(
                    (user) => {
                      setIsLoggedIn(user ? true : false);
                    },
                    (e) => {
                      setIsLoggedIn(false);
                      alert(e);
                    }
                  );
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <p className="text-muted">Not logged in</p>
          )}
        </div>
        <div className="container pt-5">
          {isLoggedIn === null && (
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>Loading...</p>
            </div>
          )}
          {isLoggedIn == true && <Sitemap />}
          {isLoggedIn == true && <Discuss />}
          {isLoggedIn == false && (
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  minHeight: "250px",
                  backgroundColor: "#333",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  padding: "10px",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h3>Login</h3>
                <button
                  className="btn btn-primary btn-sm mt-5"
                  onClick={() => {
                    setIsLoggedIn(null);
                    $firebase_auth_login_google(
                      (user) => {
                        setIsLoggedIn(user ? true : false);
                      },
                      (e) => {
                        setIsLoggedIn(false);
                        alert(e);
                      }
                    );
                  }}
                >
                  Login with Google
                </button>
                <button
                  className="btn btn-secondary btn-sm mt-3"
                  onClick={() => {
                    setIsLoggedIn(null);
                    $firebase_auth_github(
                      (user) => {
                        setIsLoggedIn(user ? true : false);
                      },
                      (e) => {
                        setIsLoggedIn(false);
                        alert(e);
                      }
                    );
                  }}
                >
                  Login with Github
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Admin;
