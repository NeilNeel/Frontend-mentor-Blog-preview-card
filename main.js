"use strict";

const blogHeadingEl = document.querySelector(".blog--heading");
const blogContainerEl = document.querySelector(".blog-card--container");

blogHeadingEl.addEventListener("mouseover", function (e) {
  blogHeadingEl.classList.add("blog--heading--active");
  blogContainerEl.classList.add("blog-card--container--active");
});

blogHeadingEl.addEventListener("mouseout", function (e) {
  blogHeadingEl.classList.remove("blog--heading--active");
  blogContainerEl.classList.remove("blog-card--container--active");
});
