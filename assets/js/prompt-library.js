(function () {
  "use strict";

  function findPromptHeading(node) {
    var current = node.previousElementSibling;

    while (current) {
      if (current.tagName === "H2" || current.tagName === "H3") {
        return current.textContent.trim();
      }
      current = current.previousElementSibling;
    }

    return "此 Prompt";
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
      return navigator.clipboard.writeText(text).catch(function () {
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
      button.textContent = "已复制";
      button.classList.add("is-copied");
      status.textContent = "已复制到剪贴板";
    } else if (state === "error") {
      button.textContent = "复制失败";
      button.classList.add("is-error");
      status.textContent = "请手动选择文本复制";
    } else {
      button.textContent = "一键复制";
      status.textContent = "";
    }

    if (state !== "idle") {
      button.copyResetTimer = window.setTimeout(function () {
        setButtonState(button, status, "idle");
      }, 2200);
    }
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

    var heading = findPromptHeading(block);
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
    button.textContent = "一键复制";
    button.setAttribute("aria-label", "复制：" + heading);
    button.setAttribute("title", "复制：" + heading);
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

    toolbar.appendChild(status);
    toolbar.appendChild(button);
    parent.insertBefore(shell, block);
    shell.appendChild(toolbar);
    shell.appendChild(block);
  }

  function initPromptLibrary() {
    var content = document.querySelector(".page__content");

    if (!content) {
      return;
    }

    Array.prototype.forEach.call(content.querySelectorAll("pre"), enhancePromptBlock);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPromptLibrary);
  } else {
    initPromptLibrary();
  }
}());
