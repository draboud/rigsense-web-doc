console.log("RigSense Web Doc - Jan 28, 2026");
//...............................................................
//DEFINITIONS....................................................
const allChapterWrappers = document.querySelectorAll(".chapter-wrapper");
const allSubChapterWrappers = document.querySelectorAll(".sub-chapter-wrapper");
const allPlayBtns = document.querySelectorAll(".play-btn-wrapper");
const allVids = [
  ...document.querySelectorAll(".vid"),
  ...document.querySelectorAll(".vid-overlap"),
];
let ersAssembleOrExplode = "assemble";
const compBtnWrapper = document.querySelector(".comp-btn-wrapper");
const allCompBtns = document.querySelectorAll(".button.comp");
const compBackBtn = document.querySelector(".button.back");
const allCompVidDivs = [...document.querySelectorAll(".vid-code-multi")];
const allCompVidDivsMP = [...document.querySelectorAll(".vid-code-multi.mp")];
const allCompVids = [...document.querySelectorAll(".vid-multi")];
const allCompVidsMP = [...document.querySelectorAll(".vid-multi-mp")];
let currentCompVidDiv;
let currentCompVidDivMP;
const blackout = document.querySelector(".blackout");
const allCompAllWrappers = [...document.querySelectorAll(".comp-all-wrapper")];
let compIndex;
const dimmer = document.querySelector(".dimmer");
const backImgTextBtnWrapper = document.querySelector(
  ".back-img-text-btn-wrapper",
);
const allCompImgTextBtns = document.querySelectorAll(".button.img-text");
//...............................................................
//CHAPTERS....................................................
allChapterWrappers.forEach(function (el) {
  el.addEventListener("click", function (e) {
    const clicked = e.target.closest(".chapter-wrapper");
    ActivateSubChapterWrapper(clicked);
  });
});
const ActivateSubChapterWrapper = function (clicked) {
  allSubChapterWrappers.forEach(function (el) {
    if (el.parentElement === clicked) {
      el.classList.toggle("active");
    } else {
      el.classList.remove("active");
    }
  });
};
//...............................................................
//EVENTS.........................................................
allPlayBtns.forEach(function (el) {
  el.addEventListener("click", function () {
    el.classList.add("off");
    if (el.classList.contains("ers-assemble-explode")) {
      PlayERSAssembleOrExplode(el);
      return;
    }
    el.parentElement.querySelectorAll(".vid").forEach(function (el) {
      el.play();
    });
  });
});
allCompBtns.forEach(function (el, btnIndex) {
  el.addEventListener("click", function () {
    compBtnWrapper.classList.remove("active");
    compIndex = btnIndex;
    ActivateCompVid(btnIndex);
    PlayCompVid();
  });
});
compBackBtn.addEventListener("click", function () {
  backImgTextBtnWrapper.classList.remove("active");
  dimmer.classList.remove("active");
  DeActivateAllCompData();
  currentCompVidDiv.querySelector(".vid-multi").currentTime = 0;
  currentCompVidDivMP.querySelector(".vid-multi-mp").currentTime = 0;
  compBtnWrapper.classList.add("active");
  allCompAllWrappers.forEach(function (el) {
    el.querySelector(".comp-data-wrapper").scroll(0, 0);
  });
});
allCompImgTextBtns.forEach(function (el) {
  el.addEventListener("click", function () {
    el.textContent === "image"
      ? ((el.textContent = "text"),
        dimmer.classList.remove("active"),
        allCompAllWrappers[compIndex].classList.remove("active"))
      : ((el.textContent = "image"),
        dimmer.classList.add("active"),
        allCompAllWrappers[compIndex].classList.add("active"));
  });
});
allVids.forEach(function (el) {
  el.addEventListener("ended", function () {
    el.parentElement.parentElement
      .querySelector(".play-btn-wrapper")
      .classList.remove("off");
    if (el.classList.contains("vid-overlap")) return;
    el.currentTime = 0;
  });
});
allCompVids.forEach(function (el) {
  el.addEventListener("ended", function () {
    backImgTextBtnWrapper.classList.add("active");
    dimmer.classList.add("active");
    ActivateCompData();
  });
});
//...............................................................
//...............................................................
const PlayERSAssembleOrExplode = function (playBtn) {
  let playThis;
  playBtn.parentElement.querySelectorAll(".vid-overlap").forEach(function (el) {
    if (
      !el.parentElement.classList.contains(ersAssembleOrExplode) &&
      window.getComputedStyle(el.parentElement).display !== "none"
    ) {
      el.parentElement.classList.add("off");
      el.currentTime = 0;
    }
    if (
      el.parentElement.classList.contains(ersAssembleOrExplode) &&
      window.getComputedStyle(el.parentElement).display !== "none"
    ) {
      playThis = el.parentElement;
    }
  });
  playThis.classList.remove("off");
  playThis.querySelector(".vid-overlap").play();
  ersAssembleOrExplode === "assemble"
    ? (ersAssembleOrExplode = "explode")
    : (ersAssembleOrExplode = "assemble");
};
const ActivateCompVid = function (btnIndex) {
  allCompVidDivs.forEach(function (el) {
    el.classList.remove("active");
  });
  allCompVidsMP.forEach(function (el) {
    el.classList.remove("active");
  });
  let activeCompVidDiv = allCompVidDivs[btnIndex];
  let activeCompVidDivMP = allCompVidDivsMP[btnIndex];
  activeCompVidDiv.classList.add("current");
  activeCompVidDivMP.classList.add("current");
};
const PlayCompVid = function () {
  currentCompVidDiv = allCompVidDivs.find((el) =>
    el.classList.contains("current"),
  );
  currentCompVidDiv.querySelector(".vid-multi").play();
  currentCompVidDiv.classList.add("active");
  currentCompVidDiv.classList.remove("current");

  currentCompVidDivMP = allCompVidDivsMP.find((el) =>
    el.classList.contains("current"),
  );
  currentCompVidDivMP.querySelector(".vid-multi-mp").play();
  currentCompVidDivMP.classList.add("active");
  currentCompVidDivMP.classList.remove("current");
};
const ActivateCompData = function () {
  DeActivateAllCompData();
  allCompAllWrappers[compIndex].classList.add("active");
};
const DeActivateAllCompData = function () {
  allCompAllWrappers.forEach(function (el) {
    el.classList.remove("active");
  });
};
//...............................................................
//...............................................................

//...............................................................
//...............................................................
