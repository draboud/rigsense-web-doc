(() => {
  // script.js
  console.log("RigSense Web Doc - Feb 1, 2026");
  var allChapterWrappers = document.querySelectorAll(".chapter-wrapper");
  var allSubChapterWrappers = document.querySelectorAll(".sub-chapter-wrapper");
  var allPlayBtns = document.querySelectorAll(".play-btn-wrapper");
  var allVids = [
    ...document.querySelectorAll(".vid"),
    ...document.querySelectorAll(".vid-overlap")
  ];
  var ersAssembleOrExplode = "assemble";
  var allCompBtns = document.querySelectorAll(".btn.comp");
  var allCompBackBtns = [...document.querySelectorAll(".btn.back")];
  var allCompVidWrappers = [...document.querySelectorAll(".vid-wrapper.comps")];
  var allCompVidDivs = [...document.querySelectorAll(".vid-code-multi")];
  var allCompVidDivsMP = [...document.querySelectorAll(".vid-code-multi.mp")];
  var allCompVids = [...document.querySelectorAll(".vid-multi")];
  var allCompVidsMP = [...document.querySelectorAll(".vid-multi-mp")];
  var currentCompVidDiv;
  var currentCompVidDivMP;
  var blackout = document.querySelector(".blackout");
  var allCompAllWrappers = [...document.querySelectorAll(".comp-all-wrapper")];
  var compIndex;
  var backImgTextBtnWrapper = document.querySelector(
    ".back-img-text-btn-wrapper"
  );
  var allCompImgTextBtns = document.querySelectorAll(".btn.img-text");
  var allDotWrappers = document.querySelectorAll(".dot-wrapper");
  var allDots = [...document.querySelectorAll(".dot")];
  var allDotDescriptionWrappers = [
    ...document.querySelectorAll(".dot-description-wrapper")
  ];
  var COMP_DOT_DESCRIPTION = 5e3;
  var compDescriptionTimer;
  var navWrapper = document.querySelector(".nav-wrapper");
  var navBtn = document.querySelector(".nav-btn");
  var navMenu = document.querySelector(".nav-menu");
  var allNavItemHeaders = document.querySelectorAll(".nav-item-header");
  var allNavDropdowns = document.querySelectorAll(".nav-item-dropdown");
  var mainWrapper = document.querySelector(".main-wrapper");
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
  navBtn.addEventListener("click", function() {
    navWrapper.classList.add("active");
    navBtn.classList.add("active");
    navMenu.classList.add("active");
  });
  allNavItemHeaders.forEach(function(el) {
    el.addEventListener("click", function() {
      CloseAllNavDropdowns();
      el.parentElement.querySelector(".nav-item-dropdown").classList.add("active");
    });
  });
  allNavDropdowns.forEach(function(el) {
    el.addEventListener("click", function() {
      CloseNavTotally();
    });
  });
  mainWrapper.addEventListener("click", function() {
    CloseNavTotally();
  });
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
      el.closest(".comp-btn-wrapper").classList.remove("active");
      compIndex = btnIndex;
      ActivateCompVid(btnIndex);
      PlayCompVid();
    });
  });
  allCompBackBtns.forEach(function(el) {
    el.addEventListener("click", function() {
      backImgTextBtnWrapper.classList.remove("active");
      el.parentElement.querySelector(".btn.img-text").textContent = "image";
      el.closest(".vid-wrapper").querySelector(".dimmer").classList.remove("active");
      DeActivateAllCompData();
      currentCompVidDiv.querySelector(".vid-multi").currentTime = 0;
      currentCompVidDivMP.querySelector(".vid-multi-mp").currentTime = 0;
      el.closest(".btn-wrapper").querySelector(".comp-btn-wrapper").classList.add("active");
      allCompAllWrappers.forEach(function(el2) {
        el2.querySelector(".comp-data-wrapper").scroll(0, 0);
      });
    });
  });
  allCompImgTextBtns.forEach(function(el) {
    el.addEventListener("click", function() {
      el.textContent === "image" ? (el.textContent = "text", el.closest(".vid-wrapper").querySelector(".dimmer").classList.remove("active"), allCompAllWrappers[compIndex].classList.remove("active")) : (el.textContent = "image", el.closest(".vid-wrapper").querySelector(".dimmer").classList.add("active"), allCompAllWrappers[compIndex].classList.add("active")), allChapterWrappers[compIndex].focus();
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
      el.parentElement.parentElement.querySelector(".dimmer").classList.add("active");
      ActivateCompData();
    });
  });
  allDots.forEach(function(el, dotIndex) {
    el.addEventListener("mouseenter", function() {
      clearTimeout(compDescriptionTimer);
      el.classList.remove("active");
      DeActivateAllRelatedDotDescriptionWrappers(
        el.parentElement.parentElement,
        dotIndex
      );
      ActivateRelatedDotDescriptionWrappers(dotIndex);
      RefreshDotAfterTimer(el, dotIndex);
    });
  });
  allDotDescriptionWrappers.forEach(function(el) {
    el.addEventListener("mouseleave", function() {
      el.classList.remove("active");
      el.parentElement.parentElement.querySelector(".dot").classList.add("active");
    });
  });
  var CloseNavTotally = function() {
    CloseAllNavDropdowns();
    navMenu.classList.remove("active");
    navWrapper.classList.remove("active");
    navBtn.classList.remove("active");
  };
  var CloseAllNavDropdowns = function() {
    allNavDropdowns.forEach(function(el) {
      el.classList.remove("active");
    });
  };
  var RefreshDotAfterTimer = function(dot, dotIndex) {
    compDescriptionTimer = setTimeout(function() {
      DeActivateAllRelatedDotDescriptionWrappers(dot.parentElement.parentElement);
      allDots[dotIndex].classList.add("active");
    }, COMP_DOT_DESCRIPTION);
  };
  var DeActivateAllRelatedDotDescriptionWrappers = function(dotWrapper, dotIndex) {
    dotWrapper.querySelectorAll(".dot-description-wrapper").forEach(function(el) {
      el.classList.remove("active");
    });
    if (dotIndex || dotIndex === 0) {
      dotWrapper.querySelectorAll(".dot").forEach(function(el, index) {
        if (index !== dotIndex) el.classList.add("active");
      });
    }
  };
  var ActivateRelatedDotDescriptionWrappers = function(dotIndex) {
    allDotDescriptionWrappers[dotIndex].classList.add("active");
  };
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
