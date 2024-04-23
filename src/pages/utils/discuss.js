import { $firebase_firestore_read } from "./firebase";

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

export { allPosts };
