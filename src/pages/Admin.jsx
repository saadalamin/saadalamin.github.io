import React from "react";
import Sitemap from "./components/Sitemap";
import {
 $firebase_auth_check_admin,
 $firebase_auth_login_google,
 $firebase_auth_onAuth,
} from "./utils/firebase";

function Admin() {
 const [isLoggedIn, setIsLoggedIn] = React.useState(null);
 React.useEffect(() => {
  $firebase_auth_onAuth((user) => {
   if (user) {
    $firebase_auth_check_admin((r) => {
     if (r) {
      setIsLoggedIn(true);
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
   <h1>Admin</h1>
   <p>Admin page</p>
   {isLoggedIn === null && (
    <>
     <p>Loading...</p>
    </>
   )}
   {isLoggedIn == false && (
    <>
     <button
      onClick={() => {
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
    </>
   )}
   {isLoggedIn == true && <Sitemap />}
  </>
 );
}

export default Admin;
