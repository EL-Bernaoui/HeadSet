// LightBox
const preview_image = document.querySelector(".preview_image");
const imgs = document.querySelectorAll(".imgs");
const prv_img = document.querySelector(".prv_img");
const prv_close = document.querySelector(".prv_close");

imgs.forEach((img) => {
  img.addEventListener("click", function (e) {
    const src = e.target.src;
    preview_image.classList.add("show");
    prv_img.src = src;
    document.body.style.overflowY = "hidden";
  });
});

prv_close.addEventListener("click", function () {
  preview_image.classList.remove("show");
  document.body.style.overflowY = "auto";
  setTimeout(() => {
    prv_img.src = "";
  }, 500);
});
