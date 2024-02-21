"use strict";

const blogHeadingEl = document.querySelector(".blog--heading");
const blogContainerEl = document.querySelector(".blog-card--container");

blogHeadingEl.addEventListener("mouseover", function (e) {
  blogHeadingEl.style.color = "hsl(47, 88%, 63%)";
  blogContainerEl.classList.add("blog--active");
});

blogHeadingEl.addEventListener("mouseout", function (e) {
  blogHeadingEl.style.color = "hsl(0, 0%, 7%)";
  blogContainerEl.classList.remove("blog--active");
});
