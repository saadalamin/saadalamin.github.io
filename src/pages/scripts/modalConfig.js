export default function modalConfig() {
  var elm1 = document.querySelectorAll(".project-container-d .row img"),
    elm2 = document.querySelectorAll(".project-container-e .row img"),
    elm3 = document.querySelectorAll(".opinion-list > div"),
    elm4 = document.querySelectorAll(".project-container-g .row img");
  var modalConfig = function (
    e,
    customTitle = undefined,
    customContent = undefined,
    src = undefined
  ) {
    e.onclick = function () {
      var t = customTitle;
      if (e.querySelectorAll("p")[0] && customTitle === undefined)
        t = e.querySelectorAll("p")[0].innerHTML;

      if (e.querySelectorAll("img")[0].src)
        document.querySelectorAll("#modalMain img")[0].src =
          e.querySelectorAll("img")[0].src;
      else if (src) document.querySelectorAll("#modalMain img")[0].src = src;

      if (document.querySelectorAll("#modalMain .title-post")[0])
        document.querySelectorAll("#modalMain .title-post")[0].innerHTML = t;

      if (document.querySelectorAll("#modalMain p")[0]) {
        if (customContent == undefined) {
          document.querySelectorAll("#modalMain p")[0].innerHTML = t;
        } else
          document.querySelectorAll("#modalMain p")[0].innerHTML =
            customContent;
      }
    };
  };
  if (elm1) {
    elm1.forEach((e) => {
      modalConfig(e, "", "", e.src);
    });
  }
  if (elm2) {
    elm2.forEach((e) => {
      modalConfig(e, "", "", e.src);
    });
  }
  if (elm3) {
    elm3.forEach((e) => {
      var x = "";
      if (e.querySelectorAll("span")[0])
        x = e.querySelectorAll("span")[0].innerHTML;
      else x = e.querySelectorAll("p")[0].innerHTML;
      modalConfig(e, e.querySelectorAll("h4")[0].innerHTML, x);
    });
  }
  if (elm4) {
    elm4.forEach((e) => {
      modalConfig(
        e,
        e.parentElement.querySelectorAll("span")[0].innerHTML,
        e.parentElement.querySelectorAll("span")[1].innerHTML,
        e.src
      );
    });
  }
}
