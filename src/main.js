"use strict";
// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});
// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 스크롤시 Arrow 버튼을 나타내거나 숨김
const Arrow = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight) {
    Arrow.classList.add("arrow--opacity");
  } else {
    Arrow.classList.remove("arrow--opacity");
  }
});
