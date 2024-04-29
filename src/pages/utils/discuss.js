import {
 $firebase_firestore_read,
 $firebase_firestore_read_query,
 $firebase_firestore_update,
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

/* */
const postAnswer = (postId, data, success, error) => {
 $firebase_firestore_update(
  `discuss-posts/${postId}`,
  { answers: data },
  (s) => {
   if (success) success(s);
  },
  (e) => {
   if (error) error(e);
  }
 );
};

export { allPosts, suggestedPosts, postAnswer };
