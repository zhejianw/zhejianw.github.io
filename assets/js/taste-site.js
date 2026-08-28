(function () {
  "use strict";

  var header = document.querySelector("[data-taste-header]");
  var menuButton = document.querySelector(".taste-menu-toggle");
  var navigation = document.querySelector(".taste-primary-nav");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function updateHeader() {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    }
  }

  function closeMenu() {
    if (!menuButton || !navigation) {
      return;
    }

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.querySelector(".taste-menu-toggle__label").textContent = "Menu";
    navigation.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function fallbackCopy(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () {
        fallbackCopy(text);
      });
    }

    fallbackCopy(text);
    return Promise.resolve();
  }

  document.querySelectorAll("[data-copy-target], [data-copy-url]").forEach(function (button) {
    button.addEventListener("click", function () {
      var status = button.parentElement ? button.parentElement.querySelector(".taste-copy-status") : null;
      var targetSelector = button.getAttribute("data-copy-target");
      var sourceUrl = button.getAttribute("data-copy-url");
      var originalLabel = button.textContent;
      var textPromise;

      button.disabled = true;

      if (sourceUrl) {
        textPromise = fetch(sourceUrl, { credentials: "same-origin" }).then(function (response) {
          if (!response.ok) {
            throw new Error("Unable to load copy source");
          }
          return response.text();
        });
      } else {
        var target = targetSelector ? document.querySelector(targetSelector) : null;
        textPromise = target ? Promise.resolve(target.textContent.trim()) : Promise.reject(new Error("Copy source not found"));
      }

      textPromise.then(copyText).then(function () {
        button.textContent = "Copied";
        if (status) {
          status.textContent = "Copied to clipboard";
        }
      }).catch(function () {
        button.textContent = "Copy failed";
        if (status) {
          status.textContent = "Open the source and copy it manually";
        }
      }).finally(function () {
        window.setTimeout(function () {
          button.disabled = false;
          button.textContent = originalLabel;
          if (status) {
            status.textContent = "";
          }
        }, 2200);
      });
    });
  });

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      var willOpen = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(willOpen));
      menuButton.querySelector(".taste-menu-toggle__label").textContent = willOpen ? "Close" : "Menu";
      navigation.classList.toggle("is-open", willOpen);
      document.body.style.overflow = willOpen ? "hidden" : "";
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  document.querySelectorAll("[data-work-panel]").forEach(function (panel, panelIndex) {
    var trigger = panel.querySelector(".taste-work-panel__trigger");
    var body = panel.querySelector(".taste-work-panel__body");

    if (!trigger) {
      return;
    }

    var startsActive = panel.classList.contains("is-active") || panelIndex === 0;
    panel.classList.toggle("is-active", startsActive);
    trigger.setAttribute("aria-expanded", String(startsActive));
    if (body) {
      body.inert = !startsActive;
    }

    trigger.addEventListener("click", function () {
      document.querySelectorAll("[data-work-panel]").forEach(function (candidate) {
        var isSelected = candidate === panel;
        var candidateTrigger = candidate.querySelector(".taste-work-panel__trigger");
        var candidateBody = candidate.querySelector(".taste-work-panel__body");
        candidate.classList.toggle("is-active", isSelected);
        if (candidateTrigger) {
          candidateTrigger.setAttribute("aria-expanded", String(isSelected));
        }
        if (candidateBody) {
          candidateBody.inert = !isSelected;
        }
      });
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      var menuWasOpen = menuButton && menuButton.getAttribute("aria-expanded") === "true";
      if (menuWasOpen) {
        closeMenu();
        menuButton.focus();
      }
    }
  });

  if (reduceMotion || !window.gsap || !window.ScrollTrigger) {
    return;
  }

  window.gsap.registerPlugin(window.ScrollTrigger);

  var homeHeroTargets = ".taste-home-hero__discipline, .taste-home-hero h1, .taste-home-hero__lede, .taste-home-hero__status, .taste-home-hero .taste-actions";

  if (document.querySelector(".taste-home-hero")) {
    window.gsap.from(homeHeroTargets, {
      y: 36,
      opacity: 0,
      duration: 1.1,
      stagger: 0.09,
      ease: "power3.out"
    });

    window.gsap.from(".taste-home-portrait", {
      x: 44,
      opacity: 0,
      duration: 1.2,
      delay: 0.18,
      ease: "power3.out"
    });
  }

  if (document.querySelector(".taste-page-hero .page__title")) {
    window.gsap.from(".taste-page-hero .page__title, .taste-page-hero__lede", {
      y: 34,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: "power3.out"
    });
  }

  if (!document.body.classList.contains("is-prompt-library")) {
    document.querySelectorAll(".taste-reveal").forEach(function (heading) {
      window.gsap.from(heading, {
        yPercent: 24,
        opacity: 0.16,
        ease: "none",
        scrollTrigger: {
          trigger: heading,
          start: "top 88%",
          end: "top 58%",
          scrub: 0.8
        }
      });
    });

    window.gsap.utils.toArray(".taste-animate-card").forEach(function (card, index) {
      window.gsap.from(card, {
        y: 42,
        opacity: 0,
        duration: 0.85,
        delay: Math.min(index * 0.04, 0.18),
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 88%"
        }
      });
    });

    document.querySelectorAll(".taste-stack-card").forEach(function (card) {
      window.gsap.to(card, {
        scale: 0.975,
        opacity: 0.84,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top 16%",
          end: "bottom 8%",
          scrub: true
        }
      });
    });
  }

  var media = window.gsap.matchMedia();
  media.add("(min-width: 1061px)", function () {
    var agenda = document.querySelector(".taste-agenda__grid");

    if (!agenda) {
      return undefined;
    }

    var pin = window.ScrollTrigger.create({
      trigger: agenda,
      start: "top 104px",
      end: "bottom bottom-=72",
      pin: ".taste-agenda__intro",
      pinSpacing: false
    });

    return function () {
      pin.kill();
    };
  });
}());
