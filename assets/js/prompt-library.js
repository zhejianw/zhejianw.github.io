(function () {
  "use strict";

  var config = window.promptLibraryConfig || {};

  function findPromptHeadingElement(node) {
    var current = node.previousElementSibling;

    while (current) {
      if (current.tagName === "H2" || current.tagName === "H3") {
        return current;
      }
      current = current.previousElementSibling;
    }

    return null;
  }

  function ensureHeadingId(heading, index) {
    if (heading.id) {
      return heading.id;
    }

    heading.id = "prompt-" + String(index + 1);
    return heading.id;
  }

  function addAnchorLink(heading) {
    if (!heading || heading.querySelector(".prompt-anchor-link")) {
      return;
    }

    var title = heading.textContent.trim();
    var link = document.createElement("a");
    link.className = "prompt-anchor-link";
    link.href = "#" + heading.id;
    link.textContent = "#";
    link.setAttribute("aria-label", "Permanent link: " + title);
    link.setAttribute("title", "Permanent link");
    heading.appendChild(link);
  }

  function addModeBadge(paragraph, label, extraClass) {
    var badge = document.createElement("span");
    badge.className = "prompt-mode-badge" + (extraClass ? " " + extraClass : "");
    badge.textContent = label;
    paragraph.appendChild(badge);
  }

  function enhanceModeParagraph(paragraph) {
    if (!paragraph || paragraph.classList.contains("prompt-mode")) {
      return;
    }

    var original = paragraph.textContent.trim();
    var content = original.replace(/^推荐模式[：:]\s*/, "");
    var firstPart = content.split("；")[0];
    var added = {};

    paragraph.textContent = "";
    paragraph.classList.add("prompt-mode");
    paragraph.setAttribute("aria-label", "推荐模式：" + content);
    paragraph.setAttribute("title", "推荐模式：" + content);

    function addMode(key, label) {
      if (!added[key]) {
        addModeBadge(paragraph, label, "");
        added[key] = true;
      }
    }

    if (firstPart.indexOf("Extra High") !== -1) {
      addMode("extra-high", "Extra High");
    } else if (firstPart.indexOf("Pro") !== -1) {
      addMode("pro", "Pro");
    } else if (firstPart.indexOf("High") !== -1) {
      addMode("high", "High");
    }

    if (content.indexOf("Extra High") !== -1) {
      addMode("extra-high", "Extra High");
    }
    if (content.indexOf("Pro") !== -1) {
      addMode("pro", "Pro");
    }
    if (content.replace(/Extra High/g, "").indexOf("High") !== -1) {
      addMode("high", "High");
    }
    if (/联网|在线搜索|搜索并核实|检索并核实/.test(content)) {
      addModeBadge(paragraph, "Web required", "is-web");
    }
    if (/流程控制|逐个喂|不能一起喂/.test(content)) {
      addModeBadge(paragraph, "Sequence", "is-sequence");
    }
    if (/不单独运行/.test(content)) {
      addModeBadge(paragraph, "Use with task", "is-sequence");
    }

    var parts = content.split("；");
    var note = parts.length > 1 ? parts.slice(1).join("；") : "";

    if (!paragraph.children.length && firstPart) {
      addModeBadge(paragraph, firstPart, "is-sequence");
    }

    if (note) {
      var noteSpan = document.createElement("span");
      noteSpan.className = "prompt-mode-note";
      noteSpan.textContent = note;
      paragraph.appendChild(noteSpan);
    }
  }

  function fallbackCopy(text) {
    var textarea = document.createElement("textarea");
    var previousFocus = document.activeElement;
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    var copied;

    try {
      copied = document.execCommand("copy");
    } finally {
      document.body.removeChild(textarea);
      if (previousFocus && typeof previousFocus.focus === "function") {
        previousFocus.focus();
      }
    }

    if (!copied) {
      throw new Error("Clipboard copy failed");
    }
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return new Promise(function (resolve, reject) {
        var settled = false;
        var timeout = window.setTimeout(function () {
          if (!settled) {
            settled = true;
            reject(new Error("Clipboard API timed out"));
          }
        }, 1200);

        navigator.clipboard.writeText(text).then(function () {
          if (!settled) {
            settled = true;
            window.clearTimeout(timeout);
            resolve();
          }
        }).catch(function (error) {
          if (!settled) {
            settled = true;
            window.clearTimeout(timeout);
            reject(error);
          }
        });
      }).catch(function () {
        fallbackCopy(text);
      });
    }

    return new Promise(function (resolve, reject) {
      try {
        fallbackCopy(text);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  function setButtonState(button, status, state) {
    window.clearTimeout(button.copyResetTimer);
    button.classList.remove("is-copied", "is-error");

    if (state === "copied") {
      button.textContent = "Copied";
      button.classList.add("is-copied");
      status.textContent = "Prompt copied";
    } else if (state === "error") {
      button.textContent = "Copy failed";
      button.classList.add("is-error");
      status.textContent = "Select the prompt text manually";
    } else {
      button.textContent = "Copy Prompt";
      status.textContent = "";
    }

    if (state !== "idle") {
      button.copyResetTimer = window.setTimeout(function () {
        setButtonState(button, status, "idle");
      }, 2200);
    }
  }

  function setPromptExpanded(shell, expanded) {
    var body = shell.querySelector("[data-prompt-body]");
    var toggle = shell.querySelector(".prompt-toggle-button");

    if (!body || !toggle) {
      return;
    }

    body.hidden = !expanded;
    shell.classList.toggle("is-collapsed", !expanded);
    toggle.textContent = expanded ? "Hide Prompt" : "Show Prompt";
    toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
  }

  function findPromptMetadata(heading, shell) {
    var current = heading.nextElementSibling;
    var description = null;
    var mode = null;

    while (current && current !== shell) {
      if (current.classList && current.classList.contains("prompt-description")) {
        description = current;
      } else if (/^推荐模式[：:]/.test(current.textContent.trim())) {
        mode = current;
      }
      current = current.nextElementSibling;
    }

    return {
      description: description,
      mode: mode
    };
  }

  function wrapPromptCard(heading, shell, metadata) {
    var parent = heading.parentNode;
    var card = document.createElement("section");

    card.className = "prompt-card";
    card.setAttribute("data-prompt-id", heading.id);
    parent.insertBefore(card, heading);
    card.appendChild(heading);

    if (metadata.description) {
      card.appendChild(metadata.description);
    }
    if (metadata.mode) {
      enhanceModeParagraph(metadata.mode);
      card.appendChild(metadata.mode);
    }

    card.appendChild(shell);
    return card;
  }

  function enhancePromptBlock(pre, index) {
    if (pre.closest(".prompt-copy-shell")) {
      return;
    }

    var code = pre.querySelector("code") || pre;
    var block = pre.closest(".highlighter-rouge") || pre.closest(".highlight") || pre;
    var parent = block.parentNode;

    if (!parent) {
      return;
    }

    var heading = findPromptHeadingElement(block);

    if (!heading) {
      return;
    }

    ensureHeadingId(heading, index);
    addAnchorLink(heading);

    var shell = document.createElement("div");
    var toolbar = document.createElement("div");
    var status = document.createElement("span");
    var button = document.createElement("button");

    shell.className = "prompt-copy-shell";
    toolbar.className = "prompt-copy-toolbar";
    status.className = "prompt-copy-status";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");

    button.type = "button";
    button.className = "prompt-copy-button";
    var headingText = heading.firstChild ? heading.firstChild.textContent.trim() : heading.textContent.trim();

    button.textContent = "Copy Prompt";
    button.setAttribute("aria-label", "Copy prompt: " + headingText);
    button.setAttribute("title", "Copy prompt: " + headingText);
    button.setAttribute("data-prompt-index", String(index + 1));

    button.addEventListener("click", function () {
      button.disabled = true;

      copyText(code.textContent).then(function () {
        button.disabled = false;
        setButtonState(button, status, "copied");
      }).catch(function () {
        button.disabled = false;
        setButtonState(button, status, "error");
      });
    });

    if (config.collapsePrompts) {
      var toggle = document.createElement("button");
      var bodyId = heading.id + "-body";

      block.id = bodyId;
      block.setAttribute("data-prompt-body", "");
      toggle.type = "button";
      toggle.className = "prompt-toggle-button";
      toggle.textContent = "Show Prompt";
      toggle.setAttribute("aria-controls", bodyId);
      toggle.setAttribute("aria-expanded", "false");
      toggle.addEventListener("click", function () {
        setPromptExpanded(shell, toggle.getAttribute("aria-expanded") !== "true");
      });
      toolbar.appendChild(toggle);
    } else {
      block.setAttribute("data-prompt-body", "");
    }

    toolbar.appendChild(status);
    toolbar.appendChild(button);
    parent.insertBefore(shell, block);
    shell.appendChild(toolbar);
    shell.appendChild(block);

    var metadata = findPromptMetadata(heading, shell);
    var card = wrapPromptCard(heading, shell, metadata);

    if (/^Q[1-6]\s*[·:]/.test(headingText)) {
      card.classList.add("is-quick-pass");
    }

    if (config.collapsePrompts) {
      setPromptExpanded(shell, false);
    }
  }

  function addViewControls(content) {
    if (!config.collapsePrompts || content.querySelector(".prompt-view-controls")) {
      return;
    }

    var toc = content.querySelector(".prompt-section-toc");

    if (!toc) {
      return;
    }

    var controls = document.createElement("div");
    var expand = document.createElement("button");
    var collapse = document.createElement("button");

    controls.className = "prompt-view-controls";
    controls.setAttribute("aria-label", "Prompt display controls");
    expand.type = "button";
    expand.className = "prompt-view-button";
    expand.textContent = "Expand all";
    collapse.type = "button";
    collapse.className = "prompt-view-button";
    collapse.textContent = "Collapse all";

    expand.addEventListener("click", function () {
      Array.prototype.forEach.call(content.querySelectorAll(".prompt-copy-shell"), function (shell) {
        setPromptExpanded(shell, true);
      });
    });
    collapse.addEventListener("click", function () {
      Array.prototype.forEach.call(content.querySelectorAll(".prompt-copy-shell"), function (shell) {
        setPromptExpanded(shell, false);
      });
    });

    controls.appendChild(expand);
    controls.appendChild(collapse);
    toc.parentNode.insertBefore(controls, toc.nextSibling);
  }

  function revealHashTarget() {
    var hash = window.location.hash;

    Array.prototype.forEach.call(document.querySelectorAll(".prompt-card.is-hash-target"), function (card) {
      card.classList.remove("is-hash-target");
    });

    if (!hash || hash.length < 2) {
      return;
    }

    var target;

    try {
      target = document.getElementById(decodeURIComponent(hash.slice(1)));
    } catch (error) {
      return;
    }

    if (!target) {
      return;
    }

    var card = target.closest(".prompt-card");

    if (card) {
      card.classList.add("is-hash-target");
      setPromptExpanded(card.querySelector(".prompt-copy-shell"), true);
    }

    window.setTimeout(function () {
      target.scrollIntoView({ block: "start" });
    }, 0);
  }

  function initPromptLibrary() {
    var content = document.querySelector(".page__content");

    if (!content) {
      return;
    }

    Array.prototype.forEach.call(content.querySelectorAll("pre"), enhancePromptBlock);
    addViewControls(content);
    revealHashTarget();
    window.addEventListener("hashchange", revealHashTarget);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPromptLibrary);
  } else {
    initPromptLibrary();
  }
}());
