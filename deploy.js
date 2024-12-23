import ghpages from "gh-pages";

var callback = function (err) {
 if (err) {
  console.log(err);
 } else {
  console.log("Published!");
 }
};
console.log("Working...");
ghpages.publish("dist", { cname: "saadalamin.com" }, callback);
