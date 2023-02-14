const first = document.getElementById("first");
const form = document.getElementById("form");
let allowed = false;

var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      allowed = true;
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      allowed = false;
      console.log("Something went wrong!");
    });
}

let overlay = document.getElementById("overlay");
let spinner = document.getElementById("spinner");

const submit = () => {
  overlay.style.display = "flex";
  spinner.style.display = "block";
  setTimeout(() => {
    overlay.style.display = "none";
    spinner.style.display = "none";
  }, 2500);
  setTimeout(() => {
    localStorage.setItem("@elearn", JSON.stringify(first.value));
    window.location.href = "../index.html";
  }, 1200);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (allowed) {
    submit();
  } else {
    alert(
      "Sorry, You need to enable the Webcam For Biometic Authentication. Refresh the Page Now!"
    );
  }
});
