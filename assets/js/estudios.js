let skillsContent = document.querySelector(".skills-content");
// console.log(skillsContent);
let skillsHeaders = document.querySelectorAll(".skills-header");

skillsHeaders.forEach((el) => {
  el.addEventListener("click", function () {
    el.parentNode.classList.toggle("open");
  });
});
