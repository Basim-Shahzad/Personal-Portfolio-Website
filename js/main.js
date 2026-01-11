const container = document.querySelector(".skills-container");
const socialLinks = document.querySelectorAll(".social-link");
const jotesButton = document.querySelector(".jotes-but");
const freelancerButton = document.querySelector(".freelancer-but");

container.innerHTML += container.innerHTML += container.innerHTML;

let scrollAmount = 0;
let speed = 2;
let isPaused = false;

function scrollImages() {
   if (!isPaused) {
      scrollAmount += speed;

      if (scrollAmount >= container.scrollWidth / 2) {
         scrollAmount = 0;
      }

      container.scrollLeft = scrollAmount;
   }
   requestAnimationFrame(scrollImages);
}

scrollImages();

container.addEventListener("mouseenter", () => {
   isPaused = true;
});

container.addEventListener("mouseleave", () => {
   isPaused = false;
});

socialLinks.forEach((link) => {
   const span = link.querySelector("span");
   const img = link.querySelector("img");

   link.addEventListener("mouseenter", () => {
      span.classList.add("hidden");
      img.classList.remove("hidden");
   });

   link.addEventListener("mouseleave", () => {
      span.classList.remove("hidden");
      img.classList.add("hidden");
   });
});

jotesButton.addEventListener("click", () => {
   window.open("https://github.com/Basim-Shahzad/Jotes", "_blank");
});

freelancerButton.addEventListener("click", () => {
   window.open("https://github.com/Basim-Shahzad/Freelancer-Flow", "_blank");
});
