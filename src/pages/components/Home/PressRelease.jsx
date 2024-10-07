import { useEffect } from "react";
import getPress from "../../scripts/getPress";

function PressRelease() {
  useEffect(() => {
    /**
     * @description Configures the press modal
     */
    function modalPressConfig() {
      var modalPress = document.getElementById("modalForPress");
      getPress(
        (data) => {
          var t = data;
          var o = "";
          for (let e = 0; e < t.length; e++) {
            o +=
              '<li class="list-group-item"><img src="' +
              t[e].img +
              '" alt="press" /><div><h4>' +
              t[e].title +
              "</h4><a href='" +
              t[e].link +
              "' target='_blank'>See More</a></div></li>";
          }
          modalPress.querySelectorAll(".modal-body")[0].innerHTML = o;
        },
        () => {
          modalPress.querySelectorAll(".modal-body")[0].innerHTML =
            "<p>An unknown error occurred!</p>";
        }
      );
      getPress();
    }
    if (document.getElementById("modalForPress")) {
      document
        .getElementById("modalForPress")
        .addEventListener("shown.bs.modal", modalPressConfig);
    }
    /**
     * @description Loads the press posts
     */
    function pressPostsLoad() {
      getPress(
        (data) => {
          var t = data;
          t = t.sort(
            // format accepted : '24 Dec 2023'
            (a, b) =>
              new Date(b.date.split(" ").reverse().join(" ")) -
              new Date(a.date.split(" ").reverse().join(" "))
          );
          var o = "";
          for (let e = 0; e < 4; e++) {
            o +=
              `<a class="post col-12 col-sm-6 col-lg-3"
      href="` +
              t[e].link +
              `"
      target="_blank">
      <img src="` +
              t[e].img +
              `" class="card-img-top" alt="Saad Al Amin">
      <div class="body">
        <p>
          <span>` +
              t[e].title +
              `</span>
          <span>` +
              t[e].date +
              `</span>
        </p>
      </div>
    </a>`;
            if (e == 6) break;
          }
          document.querySelectorAll(".posts-a")[0].innerHTML =
            o +
            '<hr><div class="seeMore col-12 col-sm-6 col-lg-3"><a href="#" data-bs-toggle="modal" data-bs-target="#modalForPress" id="modalPressMore"><button class="btn">Browse More +</button></a></div>';
        },
        () => { }
      );
    }
    pressPostsLoad();
  }, []);
  return (
    <>
      <h4 className="title">Press Release</h4>
      <div className="posts-a row row-gap-4 mb-5"></div>
    </>
  );
}

export default PressRelease;
