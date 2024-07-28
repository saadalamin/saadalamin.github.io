import {
 $firebase_firestore_read_limit,
 $firebase_firestore_update,
} from "./firebase";

/* */
function allPosts(success, error) {
 $firebase_firestore_read_limit(
  "discuss-posts",
  ["title"],
  10,
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
 $firebase_firestore_read_limit(
  "discuss-posts",
  ["date"],
  10,
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
  { answer: data },
  (s) => {
   if (success) success(s);
  },
  (e) => {
   if (error) error(e);
  }
 );
};

/* */
const editAnswer = (postId, data, success, error) => {
 $firebase_firestore_update(
  `discuss-posts/${postId}`,
  { answer: data },
  (s) => {
   if (success) success(s);
  },
  (e) => {
   if (error) error(e);
  }
 );
};

export { allPosts, suggestedPosts, postAnswer, editAnswer };
