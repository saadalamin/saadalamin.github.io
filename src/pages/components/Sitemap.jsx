import React from "react";
import { js2xml, xml2json } from "xml-js";
import { Octokit } from "octokit";
import { Base64 } from "js-base64";

function Sitemap() {
 const [data, setData] = React.useState(null);
 const token = "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";
 const octokit = new Octokit({
  auth: token,
 });
 React.useEffect(() => {
  fetch("https://saadalamin.com/sitemap.xml")
   .then((response) => response.text())
   .then((data) => {
    const json = xml2json(data, {
     compact: true,
     ignoreComment: true,
     spaces: 4,
    });
    setData(json);
   });
 }, []);
 async function submitXML(data) {
  const sitemapFile = await octokit.request(
   "GET /repos/saadalamin/saadalamin/contents/sitemap.xml",
   {
    owner: "saadalamin",
    repo: "saadalamin",
    path: "sitemap.xml",
    ref: "gh-pages",
   }
  );
  await octokit.request(
   "PUT /repos/saadalamin/saadalamin/contents/sitemap.xml",
   {
    owner: "saadalamin",
    repo: "saadalamin",
    path: "sitemap.xml",
    message: "Update sitemap.xml",
    branch: "gh-pages",
    committer: {
     name: "Saad Al Amin",
     email: "saadalamin2004@gmail.com",
    },
    content: Base64.encode(
     js2xml(data, {
      compact: true,
      ignoreComment: true,
      spaces: 4,
     })
    ),
    sha: sitemapFile.data.sha,
   }
  );
 }
 return (
  <>
   <h2>Sitemap</h2>
   <p>Sitemap page</p>
   <code style={{ display: "block", whiteSpace: "pre-wrap" }}>
    {data && JSON.stringify(JSON.parse(data), null, 4)}
   </code>
   <button
    onClick={() => {
     const dataParsed = JSON.parse(data);
     dataParsed.urlset.url.push({
      loc: { _text: "https://saadalamin.com/test" },
      lastmod: { _text: "2021-08-25" },
     });
     const newData = JSON.stringify(dataParsed, null, 4);
     setData(newData);
     submitXML(dataParsed);
    }}
   >
    Submit Sitemap
   </button>
  </>
 );
}

export default Sitemap;
