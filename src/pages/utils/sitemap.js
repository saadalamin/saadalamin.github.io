import { Octokit } from "octokit";
import { js2xml, xml2json } from "xml-js";
import { Base64 } from "js-base64";

const octokit = new Octokit({
 auth: "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",
});

const ownerName = "saadalamin";
const repoName = "saadalamin";
const branchName = "gh-pages";
const fileName = "sitemap.xml";

const getSitemap = async (result) => {
 const data = await octokit.request(
  "GET /repos/{owner}/{repo}/contents/{path}",
  {
   owner: ownerName,
   repo: repoName,
   path: fileName,
   ref: branchName,
  }
 );
 if (typeof result === "function") {
  result(
   xml2json(Base64.decode(data.data.content), {
    compact: true,
    spaces: 4,
   })
  );
 }
};

const postSitemap = async (data, result) => {
 try {
  const sitemapFile = await octokit.request(
   `GET /repos/{owner}/{repo}/contents/{path}`,
   {
    owner: ownerName,
    repo: repoName,
    path: fileName,
    ref: branchName,
   }
  );
  await octokit.request(`PUT /repos/{owner}/{repo}/contents/{path}`, {
   owner: ownerName,
   repo: repoName,
   path: fileName,
   message: "Update sitemap.xml",
   branch: branchName,
   committer: {
    name: "Saad Al Amin",
    email: "saadalamin2004@gmail.com",
   },
   content: Base64.encode(
    js2xml(data, {
     compact: true,
     spaces: 4,
    })
   ),
   sha: sitemapFile.data.sha,
  });
  if (typeof result === "function") {
   result(true);
  }
 } catch (e) {
  result(false, e);
 }
};

export { getSitemap, postSitemap };
