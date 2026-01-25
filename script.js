console.log("RigSense Web Doc - Jan 25, 2026");

//...............................................................
//DEFINITIONS....................................................
const playBtnIntroComps = document.querySelector(
  ".play-btn-wrapper.intro-comps",
);
const playBtnERSInfo = document.querySelector(".play-btn-wrapper.ers-info");
const playBtnERSAssembleExplode = document.querySelector(
  ".play-btn-wrapper.ers-assemble-explode",
);
const playBtnERSCalibration = document.querySelector(
  ".play-btn-wrapper.ers-calibration",
);
const imgERSExploded = document.querySelector(".img-ers-exploded");
const imgERSAssembled = document.querySelector(".img-ers-assembled");
const allChapterWrappers = document.querySelectorAll(".chapter-wrapper");
const allSubChapterWrappers = document.querySelectorAll(".sub-chapter-wrapper");
const vidIntroComps = document
  .querySelector(".vid-intro-comps")
  .querySelector(".vid");
const vidERSInfo = document
  .querySelector(".vid-ers-info")
  .querySelector(".vid");
const vidERSAssemble = document
  .querySelector(".vid-ers-assemble")
  .querySelector(".vid");
const vidERSExplode = document
  .querySelector(".vid-ers-explode")
  .querySelector(".vid");
const vidERSCalibration = document
  .querySelector(".vid-ers-calibration")
  .querySelector(".vid");
let ERSexplodedFlag = true;
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
//INTRO....................................................
playBtnIntroComps.addEventListener("click", function () {
  playBtnIntroComps.classList.add("off");
  vidIntroComps.play();
});

vidIntroComps.addEventListener("ended", function () {
  vidIntroComps.pause();
  vidIntroComps.currentTime = 0;
  playBtnIntroComps.classList.remove("off");
});
//...............................................................
//ERS-OVERVIEW....................................................
playBtnERSInfo.addEventListener("click", function () {
  playBtnERSInfo.classList.add("off");
  vidERSInfo.play();
});

vidERSInfo.addEventListener("ended", function () {
  vidERSInfo.pause();
  vidERSInfo.currentTime = 0;
  playBtnERSInfo.classList.remove("off");
});
//...............................................................
//ERS-INSTALLATION..................................................
playBtnERSAssembleExplode.addEventListener("click", function (el) {
  PlayERSAssembleOrExplode();
});

vidERSAssemble.addEventListener("ended", function () {
  vidERSAssemble.pause();
  imgERSAssembled.parentElement.classList.remove("off");
  playBtnERSAssembleExplode.classList.remove("off");
});
vidERSExplode.addEventListener("ended", function () {
  vidERSExplode.pause();
  playBtnERSAssembleExplode.classList.remove("off");
  imgERSExploded.parentElement.classList.remove("off");
});

const PlayERSAssembleOrExplode = function () {
  playBtnERSAssembleExplode.classList.add("off");
  if (ERSexplodedFlag) {
    vidERSExplode.parentElement.classList.add("off");
    vidERSExplode.currentTime = 0;
    imgERSExploded.parentElement.classList.add("off");
    vidERSAssemble.parentElement.classList.remove("off");
    vidERSAssemble.play();
    ERSexplodedFlag = false;
  } else {
    vidERSAssemble.parentElement.classList.add("off");
    vidERSAssemble.currentTime = 0;
    imgERSAssembled.parentElement.classList.add("off");
    vidERSExplode.parentElement.classList.remove("off");
    vidERSExplode.play();
    ERSexplodedFlag = true;
  }
};
//...............................................................
//ERS-CALIBRATION..................................................
playBtnERSCalibration.addEventListener("click", function () {
  playBtnERSCalibration.classList.add("off");
  vidERSCalibration.play();
});
vidERSCalibration.addEventListener("ended", function () {
  vidERSCalibration.pause();
  vidERSCalibration.currentTime = 0;
  playBtnERSCalibration.classList.remove("off");
});
