import { $firebase_database_read } from "../utils/firebase";

export default async function getPress(result, error) {
 $firebase_database_read(
  "posts/press",
  (s) => {
   if (typeof result === "function") result(s);
  },
  (e) => {
   if (typeof error === "function") error(e);
  }
 );
}
