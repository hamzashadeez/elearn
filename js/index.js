let data = [
  {
    id: 1,
    caption: "Computer & Technology Basics Course for Absolute Beginners",
    url: "https://www.youtube.com/embed/y2kg3MOk1sY",
  },
  {
    id: 2,
    caption: "Learn Python - Full Course for Beginners",
    url: "https://www.youtube.com/embed/rfscVS0vtbw",
  },
  {
    id: 3,
    caption: "Full Ethical Hacking Course",
    url: "https://www.youtube.com/embed/3Kq1MIfTWCE",
  },
  {
    id: 4,
    caption: "JavaScript Tutorial - PuzzleCam Game",
    url: "https://www.youtube.com/embed/HS6KHYIYdXc",
  },
  {
    id: 5,
    caption:
      "Let's build Hulu 2.0 with REACT.JS! (Next.js, Tailwind CSS, Responsive",
    url: "https://www.youtube.com/embed/MqDlsjc8GLo",
  },
  {
    id: 6,
    caption: "College Algebra – Full Course with Python Code",
    url: "https://www.youtube.com/embed/i7vOAcUo5iA",
  },
  {
    id: 7,
    caption: "System Design for Beginners Course",
    url: "https://www.youtube.com/embed/m8Icp_Cid5o",
  },
  {
    id: 8,
    caption: "Full HTTP Networking Course – Fetch and REST APIs in JavaScript",
    url: "https://www.youtube.com/embed/2JYT5f2isg4",
  },
];

let url = "https://mee-backend.vercel.app/elearn";

const getDataOnline = async () => {
  await fetch(url, {
    method: "GET", // POST, PUT, DELETE, etc.
    headers: {
      // the content type header value is usually auto-set
      // depending on the request body
      "Content-Type": "application/json",
    },
    body: undefined, // string, FormData, Blob, BufferSource, or URLSearchParams
    referrer: "about:client", // or "" to send no Referer header,
    referrerPolicy: "strict-origin-when-cross-origin", // no-referrer-when-downgrade, no-referrer, origin, same-origin...
    mode: "cors", // same-origin, no-cors
    credentials: "same-origin", // omit, include
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      updateMonthly(data);
      OS(data);
    })
    .catch((error) => console.log(error));
};

const updateDataOnline = async () => {
  await fetch(url, {
    method: "PUT", // POST, PUT, DELETE, etc.
    headers: {
      // the content type header value is usually auto-set
      // depending on the request body
      "Content-Type": "application/json",
    },
    body: undefined, // string, FormData, Blob, BufferSource, or URLSearchParams
    referrer: "about:client", // or "" to send no Referer header,
    referrerPolicy: "strict-origin-when-cross-origin", // no-referrer-when-downgrade, no-referrer, origin, same-origin...
    mode: "cors", // same-origin, no-cors
    credentials: "same-origin", // omit, include
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      getDataOnline();
    })
    .catch((error) => console.log(error));
};

const getCount = () => {
  if (JSON.parse(localStorage.getItem("@count"))) {
    return JSON.parse(localStorage.getItem("@count"));
  } else {
    return 5800;
  }
};
let Count = getCount();

const getPlatformCount = () => {
  if (JSON.parse(localStorage.getItem("@platformcount"))) {
    return JSON.parse(localStorage.getItem("@platformcount"));
  } else {
    return 18;
  }
};
let PlatformCount = getPlatformCount();

const container = document.getElementById("container");
const render = () => {
  // html element
  data.map((d) => {
    let html = `<div class="bg-white rounded-md">
                <iframe id="video" onpointerenter="updateData()" style="width: 100%; height: 300px;" src=${d.url} title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
                <h5 id="caption" class="p-3">${d.caption}</h5>
            </div>`;
    container.innerHTML += html;
  });
};

const updateData = () => {
  updateDataOnline();
  // Count++;
  // PlatformCount++;
  // localStorage.setItem("@count", JSON.stringify(Count));
  // localStorage.setItem("@platformcount", JSON.stringify(PlatformCount));
  // updateMonthly();
  // OS();
};

render();

// https://www.educba.com/data-mining-techniques-for-business/
let user = localStorage.getItem("@elearn");

const showUser = () => {
  if (user) {
    // there is a user
    console.log(user);
    document.getElementById("user").style.display = "block";
    document.getElementById("username").innerHTML = JSON.parse(user);
  } else {
    // no user
    console.log(user, "no user");
  }
};
const updateMonthly = (data) => {
  document.getElementById("monthlyContainer").innerHTML = "";
  var monthly = new CanvasJS.Chart("monthlyContainer", {
    title: {
      text: "Monthly E-learning Website Visits",
    },
    data: [
      {
        type: "area",
        dataPoints: [
          { x: new Date(2022, 00, 1), y: 2600 },
          { x: new Date(2022, 01, 1), y: 3800 },
          { x: new Date(2022, 02, 1), y: 4300 },
          { x: new Date(2022, 03, 1), y: 2900 },
          { x: new Date(2022, 04, 1), y: 4100 },
          { x: new Date(2022, 05, 1), y: 4500 },
          { x: new Date(2022, 06, 1), y: 8600 },
          { x: new Date(2022, 07, 1), y: 6400 },
          { x: new Date(2022, 08, 1), y: 5300 },
          { x: new Date(2022, 09, 1), y: 6000 },
          { x: new Date(2022, 10, 1), y: 1600 },
          { x: new Date(2022, 11, 1), y: 9000 },
          { x: new Date(2022, 12, 1), y: 7800 },
          { x: new Date(2023, 1, 1), y: data.visits },
        ],
      },
    ],
  });
  monthly.render();
};
window.onload = function () {
  showUser();
  // OS();
  getDataOnline();
  // updateMonthly();

  // spline
  var chart = new CanvasJS.Chart("splineContainer", {
    title: {
      text: "Online Courses Issued from E-learning Library",
    },
    data: [
      {
        type: "spline",

        dataPoints: [
          { x: new Date(2022, 00, 1), y: 1352 },
          { x: new Date(2022, 01, 1), y: 1514 },
          { x: new Date(2022, 02, 1), y: 1321 },
          { x: new Date(2022, 03, 1), y: 1163 },
          { x: new Date(2022, 04, 1), y: 950 },
          { x: new Date(2022, 05, 1), y: 1201 },
          { x: new Date(2022, 06, 1), y: 1186 },
          { x: new Date(2022, 07, 1), y: 1281 },
          { x: new Date(2022, 08, 1), y: 1438 },
          { x: new Date(2022, 09, 1), y: 1305 },
          { x: new Date(2022, 10, 1), y: 1480 },
          { x: new Date(2022, 11, 1), y: 1291 },
        ],
      },
    ],
  });

  chart.render();
};

document.getElementById("signOut").addEventListener("click", () => {
  localStorage.clear("@elearn");
  document.getElementById("user").style.display = "none";
  alert("Successfully Signed Out");
});

const OS = (data) => {
  document.getElementById("chartContainer").innerHTML = "";
  var chartEl = new CanvasJS.Chart("chartContainer", {
    title: {
      text: "Operating Systems Students Use For E-learning",
    },
    data: [
      {
        type: "doughnut",
        dataPoints: [
          { y: data.windows, indexLabel: "Windows OS" },
          { y: data.android, indexLabel: "Android" },
          { y: 35.0, indexLabel: "Apple iOS" },
          { y: 17, indexLabel: "Mac OS" },
          { y: 4, indexLabel: "Others" },
        ],
      },
    ],
  });

  chartEl.render();
};
