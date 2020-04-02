"use strict";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

let actualPosition = window.pageYOffset;

window.addEventListener("scroll", function() {
  let actualDisplacement = window.pageYOffset;
  if (actualPosition >= actualDisplacement) {
    document.getElementsByClassName("js__nav-bar")[0].style.top = "0px";
  } else {
    document.getElementsByClassName("js__nav-bar")[0].style.top = "-100px";
  }
  actualPosition = actualDisplacement;
});
