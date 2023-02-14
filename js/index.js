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

const container = document.getElementById("container");
const render = () => {
  // html element
  data.map((d) => {
    let html = `<div class="bg-white rounded-md">
                <iframe id="video" style="width: 100%; height: 300px;" src=${d.url} title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
                <h5 id="caption" class="p-3">${d.caption}</h5>
            </div>`;
    container.innerHTML += html;
  });
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

window.onload = function () {
  showUser();
  var chartEl = new CanvasJS.Chart("chartContainer", {
    title: {
      text: "Operating Systems Students Use For E-learning",
    },
    data: [
      {
        type: "doughnut",
        dataPoints: [
          { y: 53.37, indexLabel: "Android" },
          { y: 35.0, indexLabel: "Apple iOS" },
          { y: 7, indexLabel: "Mac OS" },
          { y: 2, indexLabel: "Windows Phone" },
          { y: 5, indexLabel: "Others" },
        ],
      },
    ],
  });

  chartEl.render();
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

  //   monthly
  var monthly = new CanvasJS.Chart("monthlyContainer", {
    title: {
      text: "Monthly E-learning Website Visits",
    },
    data: [
      {
        type: "area",
        dataPoints: [
          //array

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
          { x: new Date(2023, 1, 1), y: 6800 },
        ],
      },
    ],
  });

  monthly.render();
};
