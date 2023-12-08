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
    if (e.querySelectorAll("p")[0] && customTitle === undefined)
      t = e.querySelectorAll("p")[0].innerHTML;

    if (e.querySelectorAll("img")[0])
      document.querySelectorAll("#modalMain img")[0].src =
        e.querySelectorAll("img")[0].src;
    else if (src) document.querySelectorAll("#modalMain img")[0].src = src;

    if (document.querySelectorAll("#modalMain .title-post")[0])
      document.querySelectorAll("#modalMain .title-post")[0].innerHTML = t;

    if (document.querySelectorAll("#modalMain p")[0]) {
      if (customContent == undefined) {
        document.querySelectorAll("#modalMain p")[0].innerHTML = t;
      } else
        document.querySelectorAll("#modalMain p")[0].innerHTML = customContent;
    }
  };
};
var modalPressConfig = function () {
  getJSON("./data/press.json", function (data) {
    var t = data;
    var o = "";
    for (let e = 0; e < t.length; e++) {
      o +=
        '<li class="list-group-item"><img src="images/posts/press/' +
        t[e].img +
        '" alt="press" /><div><h4>' +
        t[e].title +
        "</h4><a href='" +
        t[e].link +
        "' target='_blank'>See More</a></div></li>";
    }
    modalPress.querySelectorAll(".modal-body")[0].innerHTML = o;
  });
};
var pressPostsLoad = function () {
  getJSON("./data/press.json", function (data) {
    var t = data;
    t = t.sort(
      // format accepted : '24 Dec 2023'
      (a, b) => new Date(b.date.split(" ").reverse().join(" ")) - new Date(a.date.split(" ").reverse().join(" "))
    );
    var o = "";
    for (let e = 0; e < 4; e++) {
      o +=
        `<a class="post col-12 col-sm-6 col-lg-3"
      href="` +
        t[e].link +
        `"
      target="_blank">
      <img src="images/posts/press/` +
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
      '<hr><div class="seeMore col-12 col-sm-6 col-lg-3"><a href="#" data-bs-toggle="modal" data-bs-target="#modalForPress" onclick="modalPressConfig()"><button class="btn">Browse More +</button></a></div>';
  });
};
pressPostsLoad();
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
    modalConfig(
      e,
      e.parentElement.querySelectorAll("span")[0].innerHTML,
      e.parentElement.querySelectorAll("span")[1].innerHTML,
      e.src
    );
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
  var counters = document.querySelectorAll(".count .counting");
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

/*@ Bottom to Top Implementation*/
window.onload = function () {
  let btn = document.querySelector(".__b2top");
  if (btn) {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 290 ||
        document.documentElement.scrollTop > 290
      ) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    });
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
};

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
  getJSON("./data/works-music.json", function (res) {
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
