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

/* Home section */
var elm = document.querySelectorAll("p"),
 elm1 = document.querySelectorAll(".post"),
 box = document.getElementById("modalMain");
elm.forEach((e) => {
 e.title = e.innerText;
}),
 elm1.forEach((e) => {
  e.onclick = function () {
   var t = e.querySelectorAll("p span")[0].innerHTML;
   (document.querySelectorAll("#modalMain img")[0].src =
    e.querySelectorAll("img")[0].src),
    (document.querySelectorAll("#modalMain .title-post")[0].innerHTML = t),
    (document.querySelectorAll("#modalMain p")[0].innerHTML =
     t +
     '.<br/><a href="https://www.linkedin.com/in/saadalamin/recent-activity/" target="_blank">See here all his posts</a>');
  };
 });
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

/* Project section */
var prj = document.querySelectorAll(".projects > .container")[0];

function appendProject(imgLink, title, goLink, projectRow, projectObject) {
 var a = document.createElement("div");
 var b = document.createElement("img");
 var c = document.createElement("p");
 var d = document.createElement("a");
 a.classList.add("col-md-4");
 b.src = "images/projects/" + imgLink;
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
 getJSON("./data/images.json", function (res) {
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
}
