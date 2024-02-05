import { $firebase_database_read } from "../utils/firebase";

export default async function getMusicVideos(result, error) {
 $firebase_database_read(
  "works/musicvideos",
  (s) => {
   if (typeof result === "function") result(s);
  },
  (e) => {
   if (typeof error === "function") error(e);
  }
 );
}
