(() => {
  // script.js
  console.log("RigSense Web Doc - Jan 25, 2026");
  var allChapterWrappers = document.querySelectorAll(".chapter-wrapper");
  var allSubChapterWrappers = document.querySelectorAll(".sub-chapter-wrapper");
  var playBtnIntroComps = document.querySelector(
    ".play-btn-wrapper.intro-comps"
  );
  var playBtnERSInfo = document.querySelector(".play-btn-wrapper.ers-info");
  var playBtnERSAssembleExplode = document.querySelector(
    ".play-btn-wrapper.ers-assemble-explode"
  );
  var playBtnERSCalibration = document.querySelector(
    ".play-btn-wrapper.ers-calibration"
  );
  var playBtnServiceSwapComps = document.querySelector(
    ".play-btn-wrapper.service-swap-comps"
  );
  var imgERSExploded = document.querySelector(".img-ers-exploded");
  var imgERSAssembled = document.querySelector(".img-ers-assembled");
  var vidIntroComps = document.querySelector(".vid-intro-comps").querySelector(".vid");
  var vidERSInfo = document.querySelector(".vid-ers-info").querySelector(".vid");
  var vidERSAssemble = document.querySelector(".vid-ers-assemble").querySelector(".vid");
  var vidERSExplode = document.querySelector(".vid-ers-explode").querySelector(".vid");
  var vidERSCalibration = document.querySelector(".vid-ers-calibration").querySelector(".vid");
  var vidServiceSwapComps = document.querySelector(".vid-service-swap-comps").querySelector(".vid");
  var ERSexplodedFlag = true;
  allChapterWrappers.forEach(function(el) {
    el.addEventListener("click", function(e) {
      const clicked = e.target.closest(".chapter-wrapper");
      ActivateSubChapterWrapper(clicked);
    });
  });
  var ActivateSubChapterWrapper = function(clicked) {
    allSubChapterWrappers.forEach(function(el) {
      if (el.parentElement === clicked) {
        el.classList.toggle("active");
      } else {
        el.classList.remove("active");
      }
    });
  };
  playBtnIntroComps.addEventListener("click", function() {
    playBtnIntroComps.classList.add("off");
    vidIntroComps.play();
  });
  vidIntroComps.addEventListener("ended", function() {
    vidIntroComps.pause();
    vidIntroComps.currentTime = 0;
    playBtnIntroComps.classList.remove("off");
  });
  playBtnERSInfo.addEventListener("click", function() {
    playBtnERSInfo.classList.add("off");
    vidERSInfo.play();
  });
  vidERSInfo.addEventListener("ended", function() {
    vidERSInfo.pause();
    vidERSInfo.currentTime = 0;
    playBtnERSInfo.classList.remove("off");
  });
  playBtnERSAssembleExplode.addEventListener("click", function(el) {
    PlayERSAssembleOrExplode();
  });
  vidERSAssemble.addEventListener("ended", function() {
    vidERSAssemble.pause();
    imgERSAssembled.parentElement.classList.remove("off");
    playBtnERSAssembleExplode.classList.remove("off");
  });
  vidERSExplode.addEventListener("ended", function() {
    vidERSExplode.pause();
    playBtnERSAssembleExplode.classList.remove("off");
    imgERSExploded.parentElement.classList.remove("off");
  });
  var PlayERSAssembleOrExplode = function() {
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
  playBtnERSCalibration.addEventListener("click", function() {
    playBtnERSCalibration.classList.add("off");
    vidERSCalibration.play();
  });
  vidERSCalibration.addEventListener("ended", function() {
    vidERSCalibration.pause();
    vidERSCalibration.currentTime = 0;
    playBtnERSCalibration.classList.remove("off");
  });
  playBtnServiceSwapComps.addEventListener("click", function() {
    playBtnServiceSwapComps.classList.add("off");
    vidServiceSwapComps.play();
  });
  vidServiceSwapComps.addEventListener("ended", function() {
    vidServiceSwapComps.pause();
    vidServiceSwapComps.currentTime = 0;
    playBtnServiceSwapComps.classList.remove("off");
  });
})();
