import {
 $firebase_firestore_read,
 $firebase_firestore_read_query,
} from "./firebase";

/* */
function allPosts(success, error) {
 $firebase_firestore_read(
  "discuss-posts",
  (data) => {
   if (success) success(data);
  },
  (e) => {
   if (error) error(e);
  }
 );
}

/* */
const suggestedPosts = (success, error) => {
 $firebase_firestore_read_query(
  "discuss-posts",
  /* random posts from last 7 days */
  ["date", ">", new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)],
  (data) => {
   if (success) success(data);
  },
  (e) => {
   if (error) error(e);
  }
 );
};

export { allPosts, suggestedPosts };
