import { Helmet } from "react-helmet";

// Components
import Navbar from "./components/Navbar";
import modalConfig from "./scripts/modalConfig";
import Hidden from "./components/Contents/Hidden";
import { useEffect } from "react";

function Contents() {
  function getContentsFromFB() {
    const token =
      "EAAFc1qSZApA0BO0gwEHoEZAhbcnR0cm6kohkyz37wrwEd9q0mkwS50LtiZBLGoZCjkmHQBsWhuheCegjSBYC7ChVhAJGRkJH4X5Rofto6vy51duGcpMk3aIWHFZApZC2HqZB4aTs8RPx6cT19vJBVn2muSHwjgzkNR2C1Kaz4Hac7hvX52dPbz5weJwPMY3dcTOVDjk4IdnQjR2bhMH";
    fetch(
      `https://graph.facebook.com/saadalamin04/videos?fields=title,picture,permalink_url,source,embed_html,description,views&access_token=${token}`
    )
      .then((res) => res.json())
      .then((d) => {
        let contents = "";
        d.data.map((e) => {
          if (!e.source) return;
          if (!e.title && !e.description && !e.views) return;
          let title = e.title?.replace(/"/g, "&quot;") || "Untitled";
          contents += `
            <div class="col-md-6 col-lg-4 mb-3">
              <div class="card bg-dark text-white mb-3 h-100">
                    <div class="position-relative border-sm"> 
                        <img src="${e.picture
            }" class="img-fluid" alt="..." width="100%" style="aspect-ratio: 16/9; object-fit: contain; background-color: black; border-radius: 0.375rem 0.375rem 0 0; filter: brightness(0.5);">
                        <div class="position-absolute top-50 start-50 translate-middle"
                            onclick="document.getElementById('modalMain').querySelector('video').src='${e.source
            }'; document.getElementById('modalMain').querySelector('.title-post').innerHTML='${title}';"> 
                            <button type="button" class="btn btn-primary rounded-pill p-0 ps-1" style="width: 38px; height: 38px;"  data-bs-toggle="modal" data-bs-target="#modalMain"
                            > 
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 18 18">
                                   <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                </svg>
                            </button>
                        </div>
                    </div> 
                    <div> 
                        <div class="card-body"> 
                            ${e.title
              ? `<p class="card-text m-0">${e.title}</p>`
              : ""
            } 
                            <p class="card-text m-0"><small>${e.description?.replace(
              /#(\w+)/g,
              '<a href="https://www.facebook.com/hashtag/$1" target="_blank" class="text-decoration-none">#$1</a>'
            ) || "No description"
            }</small></p> <p class="card-text m-0" style="color: #aaa"><small>${e.views
            } views</small></p> 
                        </div> 
                    </div>
               </div>
            </div>
            `;
        });
        if (document.getElementById("contents")) document.getElementById("contents").innerHTML = contents;
        if (document.getElementById("loading")) document.getElementById("loading").style.display = "none";
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    modalConfig();
    getContentsFromFB();
  }, []);
  return (
    <>
      {/*-- __HEAD__ --*/}
      <Helmet>
        <title>Contents - Saad Al Amin</title>
      </Helmet>

      {/*-- __NAVBAR__ --*/}
      <Navbar />

      {/*-- __MAIN__ --*/}
      <main className="contents" style={{ minHeight: "95vh" }}>
        <div className="container py-5">
          <div id="loading" className="text-center pt-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          <div className="row row-gap-2" id="contents"></div>
        </div>
      </main>

      {/*-- __HIDDEN__ --*/}
      <Hidden />
    </>
  );
}

export default Contents;
