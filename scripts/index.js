/* Preloader */
// const interval = setInterval(() => {
//   const allImagesLoaded = [...document.querySelectorAll('img')]
//     .map(x => x.complete)
//     .indexOf(false) === -1;
//   if (allImagesLoaded) {
//     console.log('All images loaded');
//     clearInterval(interval);
//   } else {
//     window.location.reload();
//   }
// }, 1000);

/* Scroll to top */

/****** BUILT-IN FUNCTIONS ******/

var getJSON = function (url, callback) {
  try {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "json";
    xhr.onload = function () {
      var status = xhr.status;
      if (xhr.readyState == 4 && status === 200) {
        callback(xhr.response, "ok");
      } else {
        callback(xhr.response, status);
        throw status;
      }
    };
    xhr.send();
  } catch {
    fetch(url)
      .then((res) => res.json())
      .then((out) => callback(out))
      .catch((err) => {
        throw err;
      });
  }
};

/********* HOME PAGE **********/
var elm = document.querySelectorAll("p"),
  elm1 = document.querySelectorAll(".project-container-d .row img"),
  elm2 = document.querySelectorAll(".project-container-e .row img"),
  elm3 = document.querySelectorAll(".opinion-list > div"),
  elm4 = document.querySelectorAll(".project-container-g .row img"),
  box = document.getElementById("modalMain");
var modalPress = document.getElementById("modalForPress");
var modalConfig = function (
  e,
  customTitle = undefined,
  customContent = undefined,
  src = undefined
) {
  e.onclick = function () {
    var t = customTitle;
    if (e.querySelectorAll("p")[0]) t = e.querySelectorAll("p")[0].innerHTML;

    console.log(t);

    if (e.querySelectorAll("img")[0])
      document.querySelectorAll("#modalMain img")[0].src =
        e.querySelectorAll("img")[0].src;
    else if (src) document.querySelectorAll("#modalMain img")[0].src = src;

    if (document.querySelectorAll("#modalMain .title-post")[0])
      document.querySelectorAll("#modalMain .title-post")[0].innerHTML = t;

    if (document.querySelectorAll("#modalMain p")[0]) {
      if (customContent == undefined) {
        document.querySelectorAll("#modalMain p")[0].innerHTML =
          t +
          '.<br/><a href="https://www.linkedin.com/in/saadalamin/recent-activity/" target="_blank">See here all his posts</a>';
      } else
        document.querySelectorAll("#modalMain p")[0].innerHTML = customContent;
    }
  };
};
if (elm) {
  elm.forEach((e) => {
    e.title = e.innerText;
  });
}
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
    console.log(e);
    modalConfig(e, e.parentElement.querySelectorAll("span")[0].innerHTML, e.parentElement.querySelectorAll("span")[1].innerHTML, e.src);
  });
}

var a = document.querySelectorAll("#switch_btn button");
if (a) {
  for (let e = 0; e < a.length; e++)
    a[e].onclick = function () {
      var t = document.querySelectorAll("#sections section");
      for (let o = 0; o < t.length; o++)
        if ("" != t[o].innerHTML) {
          (t[o].style.display = "none"),
            (document.querySelectorAll(
              "." + a[e].innerHTML.toLowerCase() + "-container"
            )[0].style.display = "block");
          var l = document.querySelectorAll("#switch_btn button");
          for (let e = 0; e < l.length; e++) l[e].classList.remove("active");
          a[e].classList.add("active");
        }
    };
}

var counting = function () {
  var counters = document.querySelectorAll(".count h2");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function (start, value, id) {
    var localStart = start;
    var interval = 50;
    var increment = Math.ceil((value - start) / (2000 / interval));

    var updateCounter = function () {
      if (localStart < value) {
        localStart += increment;
        if (localStart > value) localStart = value;
        counters[id].innerHTML = localStart.toLocaleString("en-US") + "+";
        setTimeout(updateCounter, interval);
      }
    };

    updateCounter();
  };

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
};

document.body.onload = counting();

/********* PROJECT PAGE **********/
var prj = document.querySelectorAll(".works > .container")[0];

function appendProject(imgLink, title, goLink, projectRow, projectObject) {
  var a = document.createElement("div");
  var b = document.createElement("img");
  var c = document.createElement("p");
  var d = document.createElement("a");
  a.classList.add("col-md-4");
  b.src = "images/works/" + imgLink;
  b.alt = "Saad Al Amin Projects";
  b.title = title.toUpperCase();
  b.style.width = "100%";
  c.innerHTML = title;
  d.href = goLink;
  d.className = "float-end btn py-0 px-1 btn-success";
  d.innerHTML = "View";
  d.target = "_blank";
  a.appendChild(b);
  a.appendChild(c);
  c.appendChild(d);
  projectRow.appendChild(a);
  projectObject.push(a);
}

if (prj) {
  getJSON("./data/works.json", function (res) {
    var projectAObject = [];
    var projectBObject = [];
    var projectARow = prj.querySelectorAll(".project-container-a .row")[0];
    var projectBRow = prj.querySelectorAll(".project-container-b .row")[0];

    for (const i in res) {
      if (Object.hasOwnProperty.call(res, i)) {
        if (res[i].dir == "musicvideos") {
          appendProject(
            "musicvideos/" + res[i].src,
            res[i].title,
            res[i].link,
            projectARow,
            projectAObject
          );
        } else if (res[i].dir == "mycreations") {
          appendProject(
            "mycreations/" + res[i].src,
            res[i].title,
            res[i].link,
            projectBRow,
            projectBObject
          );
        }
      }
    }
  });

  /* <div class="col-md-4">
  <img src="images/projects/mycreations/ashbe-alo-fire.jpeg" width="100%" alt="Saad Al Amin Projects">
  <p>Ashbe Alo Fire <a href="" class="float-end btn py-0 px-1 btn-success">View</a></p>
</div> */
}
