(() => {
  // script.js
  console.log("RigSense Web Doc - Jan 28, 2026");
  var allChapterWrappers = document.querySelectorAll(".chapter-wrapper");
  var allSubChapterWrappers = document.querySelectorAll(".sub-chapter-wrapper");
  var allPlayBtns = document.querySelectorAll(".play-btn-wrapper");
  var allVids = [
    ...document.querySelectorAll(".vid"),
    ...document.querySelectorAll(".vid-overlap")
  ];
  var ersAssembleOrExplode = "assemble";
  var compBtnWrapper = document.querySelector(".comp-btn-wrapper");
  var allCompBtns = document.querySelectorAll(".button.comp");
  var compBackBtn = document.querySelector(".button.back");
  var allCompVidDivs = [...document.querySelectorAll(".vid-code-multi")];
  var allCompVidDivsMP = [...document.querySelectorAll(".vid-code-multi.mp")];
  var allCompVids = [...document.querySelectorAll(".vid-multi")];
  var allCompVidsMP = [...document.querySelectorAll(".vid-multi-mp")];
  var currentCompVidDiv;
  var currentCompVidDivMP;
  var blackout = document.querySelector(".blackout");
  var allCompAllWrappers = [...document.querySelectorAll(".comp-all-wrapper")];
  var compIndex;
  var dimmer = document.querySelector(".dimmer");
  var backImgTextBtnWrapper = document.querySelector(
    ".back-img-text-btn-wrapper"
  );
  var allCompImgTextBtns = document.querySelectorAll(".button.img-text");
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
  allPlayBtns.forEach(function(el) {
    el.addEventListener("click", function() {
      el.classList.add("off");
      if (el.classList.contains("ers-assemble-explode")) {
        PlayERSAssembleOrExplode(el);
        return;
      }
      el.parentElement.querySelectorAll(".vid").forEach(function(el2) {
        el2.play();
      });
    });
  });
  allCompBtns.forEach(function(el, btnIndex) {
    el.addEventListener("click", function() {
      compBtnWrapper.classList.remove("active");
      compIndex = btnIndex;
      ActivateCompVid(btnIndex);
      PlayCompVid();
    });
  });
  compBackBtn.addEventListener("click", function() {
    backImgTextBtnWrapper.classList.remove("active");
    dimmer.classList.remove("active");
    DeActivateAllCompData();
    currentCompVidDiv.querySelector(".vid-multi").currentTime = 0;
    currentCompVidDivMP.querySelector(".vid-multi-mp").currentTime = 0;
    compBtnWrapper.classList.add("active");
    allCompAllWrappers.forEach(function(el) {
      el.querySelector(".comp-data-wrapper").scroll(0, 0);
    });
  });
  allCompImgTextBtns.forEach(function(el) {
    el.addEventListener("click", function() {
      el.textContent === "image" ? (el.textContent = "text", dimmer.classList.remove("active"), allCompAllWrappers[compIndex].classList.remove("active")) : (el.textContent = "image", dimmer.classList.add("active"), allCompAllWrappers[compIndex].classList.add("active"));
    });
  });
  allVids.forEach(function(el) {
    el.addEventListener("ended", function() {
      el.parentElement.parentElement.querySelector(".play-btn-wrapper").classList.remove("off");
      if (el.classList.contains("vid-overlap")) return;
      el.currentTime = 0;
    });
  });
  allCompVids.forEach(function(el) {
    el.addEventListener("ended", function() {
      backImgTextBtnWrapper.classList.add("active");
      dimmer.classList.add("active");
      ActivateCompData();
    });
  });
  var PlayERSAssembleOrExplode = function(playBtn) {
    let playThis;
    playBtn.parentElement.querySelectorAll(".vid-overlap").forEach(function(el) {
      if (!el.parentElement.classList.contains(ersAssembleOrExplode) && window.getComputedStyle(el.parentElement).display !== "none") {
        el.parentElement.classList.add("off");
        el.currentTime = 0;
      }
      if (el.parentElement.classList.contains(ersAssembleOrExplode) && window.getComputedStyle(el.parentElement).display !== "none") {
        playThis = el.parentElement;
      }
    });
    playThis.classList.remove("off");
    playThis.querySelector(".vid-overlap").play();
    ersAssembleOrExplode === "assemble" ? ersAssembleOrExplode = "explode" : ersAssembleOrExplode = "assemble";
  };
  var ActivateCompVid = function(btnIndex) {
    allCompVidDivs.forEach(function(el) {
      el.classList.remove("active");
    });
    allCompVidsMP.forEach(function(el) {
      el.classList.remove("active");
    });
    let activeCompVidDiv = allCompVidDivs[btnIndex];
    let activeCompVidDivMP = allCompVidDivsMP[btnIndex];
    activeCompVidDiv.classList.add("current");
    activeCompVidDivMP.classList.add("current");
  };
  var PlayCompVid = function() {
    currentCompVidDiv = allCompVidDivs.find(
      (el) => el.classList.contains("current")
    );
    currentCompVidDiv.querySelector(".vid-multi").play();
    currentCompVidDiv.classList.add("active");
    currentCompVidDiv.classList.remove("current");
    currentCompVidDivMP = allCompVidDivsMP.find(
      (el) => el.classList.contains("current")
    );
    currentCompVidDivMP.querySelector(".vid-multi-mp").play();
    currentCompVidDivMP.classList.add("active");
    currentCompVidDivMP.classList.remove("current");
  };
  var ActivateCompData = function() {
    DeActivateAllCompData();
    allCompAllWrappers[compIndex].classList.add("active");
  };
  var DeActivateAllCompData = function() {
    allCompAllWrappers.forEach(function(el) {
      el.classList.remove("active");
    });
  };
})();
