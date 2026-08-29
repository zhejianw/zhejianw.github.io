(function () {
  "use strict";

  var config = window.promptLibraryConfig || {};
  var recentStorageKey = "zhejian-prompt-recently-copied";

  function getRecentlyCopied() {
    try {
      var stored = JSON.parse(window.localStorage.getItem(recentStorageKey) || "[]");
      return Array.isArray(stored) ? stored : [];
    } catch (error) {
      return [];
    }
  }

  function rememberCopied(promptId) {
    var recent = getRecentlyCopied().filter(function (item) {
      return item !== promptId;
    });

    recent.unshift(promptId);
    try {
      window.localStorage.setItem(recentStorageKey, JSON.stringify(recent.slice(0, 8)));
    } catch (error) {
      return;
    }
  }

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

  function setLinkButtonState(button, status, state) {
    window.clearTimeout(button.copyResetTimer);
    button.classList.remove("is-copied", "is-error");

    if (state === "copied") {
      button.textContent = "Link Copied";
      button.classList.add("is-copied");
      status.textContent = "Prompt link copied";
    } else if (state === "error") {
      button.textContent = "Copy Failed";
      button.classList.add("is-error");
      status.textContent = "Copy the page address manually";
    } else {
      button.textContent = "Copy Link";
      status.textContent = "";
    }

    if (state !== "idle") {
      button.copyResetTimer = window.setTimeout(function () {
        setLinkButtonState(button, status, "idle");
      }, 2200);
    }
  }

  function promptUrl(promptId) {
    var url = new URL(window.location.href);
    url.hash = promptId;
    return url.toString();
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
    var linkButton = document.createElement("button");
    var button = document.createElement("button");

    shell.className = "prompt-copy-shell";
    toolbar.className = "prompt-copy-toolbar";
    status.className = "prompt-copy-status";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");

    linkButton.type = "button";
    linkButton.className = "prompt-link-button";
    linkButton.textContent = "Copy Link";

    button.type = "button";
    button.className = "prompt-copy-button";
    var headingText = heading.firstChild ? heading.firstChild.textContent.trim() : heading.textContent.trim();

    button.textContent = "Copy Prompt";
    button.setAttribute("aria-label", "Copy prompt: " + headingText);
    button.setAttribute("title", "Copy prompt: " + headingText);
    button.setAttribute("data-prompt-index", String(index + 1));

    linkButton.setAttribute("aria-label", "Copy link to prompt: " + headingText);
    linkButton.setAttribute("title", "Copy link to prompt: " + headingText);
    linkButton.addEventListener("click", function () {
      linkButton.disabled = true;

      copyText(promptUrl(heading.id)).then(function () {
        linkButton.disabled = false;
        setLinkButtonState(linkButton, status, "copied");
      }).catch(function () {
        linkButton.disabled = false;
        setLinkButtonState(linkButton, status, "error");
      });
    });

    button.addEventListener("click", function () {
      button.disabled = true;

      copyText(code.textContent).then(function () {
        button.disabled = false;
        rememberCopied(heading.id);
        setButtonState(button, status, "copied");
      }).catch(function () {
        button.disabled = false;
        setButtonState(button, status, "error");
      });
    });

    toolbar.appendChild(status);
    toolbar.appendChild(linkButton);

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

    var anchor = content.querySelector(".prompt-section-toc") ||
      content.querySelector(".prompt-workflow") ||
      content.querySelector(".prompt-layer-nav");

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
    if (anchor) {
      anchor.parentNode.insertBefore(controls, anchor.nextSibling);
    } else {
      content.insertBefore(controls, content.firstChild);
    }
  }

  function initLayerNav() {
    var nav = document.querySelector(".prompt-layer-nav");

    if (!nav) {
      return;
    }

    var current = nav.querySelector(".is-current");
    var frameRequested = false;

    function updateOverflowState() {
      frameRequested = false;
      var maxScroll = Math.max(0, nav.scrollWidth - nav.clientWidth);
      nav.classList.toggle("can-scroll-left", nav.scrollLeft > 4);
      nav.classList.toggle("can-scroll-right", nav.scrollLeft < maxScroll - 4);
    }

    function requestOverflowUpdate() {
      if (!frameRequested) {
        frameRequested = true;
        window.requestAnimationFrame(updateOverflowState);
      }
    }

    if (current) {
      nav.scrollLeft = Math.max(0, current.offsetLeft - (nav.clientWidth - current.offsetWidth) / 2);
    }

    updateOverflowState();
    nav.addEventListener("scroll", requestOverflowUpdate, { passive: true });
    window.addEventListener("resize", requestOverflowUpdate);
  }

  function createCommandPalette(content) {
    var cards = Array.prototype.slice.call(content.querySelectorAll(".prompt-card"));

    if (cards.length < 2 || content.querySelector(".prompt-command-dialog")) {
      return;
    }

    var records = cards.map(function (card) {
      var heading = card.querySelector("h2, h3");
      var description = card.querySelector(".prompt-description");
      var mode = card.querySelector(".prompt-mode");
      var code = card.querySelector(".prompt-copy-shell code") || card.querySelector(".prompt-copy-shell pre");
      return {
        id: card.getAttribute("data-prompt-id"),
        title: heading ? heading.textContent.replace(/#\s*$/, "").trim() : "Untitled prompt",
        description: description ? description.textContent.trim() : "",
        mode: mode ? mode.textContent.trim() : "",
        code: code ? code.textContent : "",
        layer: config.currentLayer || "current",
        url: window.location.pathname + window.location.search + "#" + card.getAttribute("data-prompt-id"),
        isLocal: true
      };
    });

    var controls = content.querySelector(".prompt-view-controls");
    var layerNav = content.querySelector(".prompt-layer-nav");
    var trigger = document.createElement("button");
    var stickyTrigger = document.createElement("button");
    var dialog = document.createElement("dialog");
    var panel = document.createElement("div");
    var header = document.createElement("div");
    var title = document.createElement("h2");
    var close = document.createElement("button");
    var scopeControls = document.createElement("div");
    var layerScopeButton = document.createElement("button");
    var allScopeButton = document.createElement("button");
    var input = document.createElement("input");
    var help = document.createElement("p");
    var results = document.createElement("div");
    var status = document.createElement("p");
    var visibleRecords = records.slice();
    var selectedIndex = 0;
    var searchScope = "layer";
    var crossLayerRecords = [];
    var crossLayerState = "idle";

    trigger.type = "button";
    trigger.className = "prompt-view-button prompt-command-trigger";
    trigger.textContent = "Search prompts";
    trigger.setAttribute("aria-keyshortcuts", "Control+K Meta+K");
    trigger.setAttribute("title", "Search this prompt layer (Ctrl/Command + K)");

    if (controls) {
      controls.insertBefore(trigger, controls.firstChild);
    } else {
      content.insertBefore(trigger, content.firstChild);
    }

    stickyTrigger.type = "button";
    stickyTrigger.className = "prompt-layer-find";
    stickyTrigger.textContent = "Find";
    stickyTrigger.setAttribute("aria-keyshortcuts", "Control+K Meta+K");
    stickyTrigger.setAttribute("title", "Find a prompt (Ctrl/Command + K)");
    if (layerNav) {
      layerNav.classList.add("has-find");
      layerNav.appendChild(stickyTrigger);
    }

    dialog.className = "prompt-command-dialog";
    dialog.setAttribute("aria-labelledby", "prompt-command-title");
    panel.className = "prompt-command-panel";
    header.className = "prompt-command-header";
    title.id = "prompt-command-title";
    title.textContent = "Find a prompt";
    close.type = "button";
    close.className = "prompt-command-close";
    close.textContent = "Close";
    close.setAttribute("aria-label", "Close prompt search");
    scopeControls.className = "prompt-command-scopes";
    scopeControls.setAttribute("aria-label", "Search scope");
    layerScopeButton.type = "button";
    layerScopeButton.className = "prompt-command-scope is-active";
    layerScopeButton.textContent = "This layer";
    layerScopeButton.setAttribute("aria-pressed", "true");
    allScopeButton.type = "button";
    allScopeButton.className = "prompt-command-scope";
    allScopeButton.textContent = "All layers";
    allScopeButton.setAttribute("aria-pressed", "false");
    input.type = "search";
    input.className = "prompt-command-input";
    input.placeholder = "Search title, description, mode, or prompt text";
    input.setAttribute("autocomplete", "off");
    input.setAttribute("role", "combobox");
    input.setAttribute("aria-autocomplete", "list");
    input.setAttribute("aria-haspopup", "listbox");
    input.setAttribute("aria-expanded", "false");
    input.setAttribute("aria-controls", "prompt-command-results");
    input.setAttribute("aria-label", "Search prompts in this layer");
    help.className = "prompt-command-help";
    help.textContent = "Arrow keys select · Enter opens · Ctrl/Command + Enter copies";
    results.id = "prompt-command-results";
    results.className = "prompt-command-results";
    results.setAttribute("role", "listbox");
    status.className = "prompt-command-status";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");

    header.appendChild(title);
    header.appendChild(close);
    panel.appendChild(header);
    scopeControls.appendChild(layerScopeButton);
    scopeControls.appendChild(allScopeButton);
    panel.appendChild(scopeControls);
    panel.appendChild(input);
    panel.appendChild(help);
    panel.appendChild(results);
    panel.appendChild(status);
    dialog.appendChild(panel);
    document.body.appendChild(dialog);

    function select(index) {
      if (!visibleRecords.length) {
        selectedIndex = 0;
        input.removeAttribute("aria-activedescendant");
        return;
      }

      selectedIndex = (index + visibleRecords.length) % visibleRecords.length;
      Array.prototype.forEach.call(results.querySelectorAll(".prompt-command-result"), function (item, itemIndex) {
        var selected = itemIndex === selectedIndex;
        item.classList.toggle("is-selected", selected);
        item.setAttribute("aria-selected", String(selected));
        if (selected) {
          input.setAttribute("aria-activedescendant", item.id);
          item.scrollIntoView({ block: "nearest" });
        }
      });
    }

    function openRecord(record) {
      if (!record) {
        return;
      }
      if (typeof dialog.close === "function") {
        dialog.close();
      } else {
        dialog.removeAttribute("open");
      }
      if (!record.isLocal) {
        window.location.assign(record.url);
      } else if (window.location.hash === "#" + record.id) {
        revealHashTarget();
      } else {
        window.location.hash = record.id;
      }
    }

    function copyRecord(record) {
      if (!record) {
        return;
      }
      var text = record.code || new URL(record.url, window.location.origin).toString();
      copyText(text).then(function () {
        if (record.code) {
          rememberCopied(record.id);
        }
        renderResults(input.value);
        status.textContent = (record.code ? "Copied prompt: " : "Copied link: ") + record.title;
      }).catch(function () {
        status.textContent = "Copy failed. Open the prompt and copy manually.";
      });
    }

    function recentlyFirst(source, recent) {
      var rank = {};
      recent.forEach(function (id, index) {
        rank[id] = index;
      });
      return source.slice().sort(function (left, right) {
        var leftRank = Object.prototype.hasOwnProperty.call(rank, left.id) ? rank[left.id] : Number.MAX_SAFE_INTEGER;
        var rightRank = Object.prototype.hasOwnProperty.call(rank, right.id) ? rank[right.id] : Number.MAX_SAFE_INTEGER;
        return leftRank - rightRank;
      });
    }

    function renderResults(query) {
      var needle = query.trim().toLowerCase();
      var recent = getRecentlyCopied();
      var source = searchScope === "all" ? crossLayerRecords : records;

      if (searchScope === "all" && crossLayerState === "loading") {
        results.textContent = "";
        status.textContent = "Loading the metadata-only cross-layer index…";
        visibleRecords = [];
        return;
      }

      if (searchScope === "all" && crossLayerState === "error") {
        results.textContent = "";
        status.textContent = "Cross-layer index unavailable. Search this layer instead.";
        visibleRecords = [];
        return;
      }

      visibleRecords = source.filter(function (record) {
        var searchable = searchScope === "all" ?
          [record.layer, record.title, record.description, record.url] :
          [record.title, record.description, record.mode, record.code];
        return !needle || searchable.join(" ").toLowerCase().indexOf(needle) !== -1;
      });

      if (!needle && searchScope === "layer") {
        visibleRecords = recentlyFirst(visibleRecords, recent);
      }

      results.textContent = "";
      visibleRecords.forEach(function (record, index) {
        var button = document.createElement("button");
        var titleLine = document.createElement("span");
        var descriptionLine = document.createElement("span");
        var metaLine = document.createElement("span");

        button.type = "button";
        button.id = "prompt-command-result-" + index;
        button.className = "prompt-command-result";
        button.setAttribute("role", "option");
        button.setAttribute("tabindex", "-1");
        button.setAttribute("aria-selected", "false");
        titleLine.className = "prompt-command-result__title";
        titleLine.textContent = record.title;
        descriptionLine.className = "prompt-command-result__description";
        descriptionLine.textContent = record.description;
        metaLine.className = "prompt-command-result__meta";
        metaLine.textContent = [
          searchScope === "all" ? record.layer : "",
          record.mode,
          searchScope === "layer" && recent.indexOf(record.id) !== -1 ? "Recently copied" : ""
        ].filter(Boolean).join(" · ");
        button.appendChild(titleLine);
        if (record.description) {
          button.appendChild(descriptionLine);
        }
        if (metaLine.textContent) {
          button.appendChild(metaLine);
        }
        button.addEventListener("mouseenter", function () {
          select(index);
        });
        button.addEventListener("click", function () {
          openRecord(record);
        });
        results.appendChild(button);
      });

      selectedIndex = 0;
      select(0);
      status.textContent = visibleRecords.length ?
        visibleRecords.length + " prompt" + (visibleRecords.length === 1 ? "" : "s") + (!needle && searchScope === "layer" && recent.length ? " · recent copies first" : "") :
        "No matching prompts";
    }

    function loadCrossLayerIndex() {
      if (crossLayerState !== "idle") {
        return;
      }
      crossLayerState = "loading";
      renderResults(input.value);
      window.fetch(config.crossLayerIndexUrl, { credentials: "same-origin" }).then(function (response) {
        if (!response.ok) {
          throw new Error("Prompt index request failed");
        }
        return response.json();
      }).then(function (data) {
        if (!Array.isArray(data)) {
          throw new Error("Prompt index is invalid");
        }
        crossLayerRecords = data.map(function (record) {
          return {
            id: record.id || record.url,
            title: record.title || "Untitled prompt",
            description: record.description || "",
            mode: "",
            code: "",
            layer: record.layer || "Unknown",
            url: record.url,
            isLocal: false
          };
        });
        crossLayerState = "ready";
        renderResults(input.value);
      }).catch(function () {
        crossLayerState = "error";
        renderResults(input.value);
      });
    }

    function setSearchScope(scope) {
      searchScope = scope;
      layerScopeButton.classList.toggle("is-active", scope === "layer");
      layerScopeButton.setAttribute("aria-pressed", String(scope === "layer"));
      allScopeButton.classList.toggle("is-active", scope === "all");
      allScopeButton.setAttribute("aria-pressed", String(scope === "all"));
      input.placeholder = scope === "layer" ?
        "Search title, description, mode, or prompt text" :
        "Search layer, title, description, or URL";
      input.setAttribute("aria-label", scope === "layer" ? "Search prompts in this layer" : "Search prompts across all layers");
      help.textContent = scope === "layer" ?
        "Arrow keys select · Enter opens · Ctrl/Command + Enter copies" :
        "Metadata only · Enter opens · Ctrl/Command + Enter copies link";
      if (scope === "all" && crossLayerState === "idle") {
        loadCrossLayerIndex();
      } else {
        renderResults(input.value);
      }
    }

    function openPalette() {
      if (dialog.open) {
        input.focus();
        return;
      }
      input.value = "";
      renderResults("");
      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
      }
      window.setTimeout(function () {
        input.setAttribute("aria-expanded", "true");
        input.focus();
      }, 0);
    }

    trigger.addEventListener("click", openPalette);
    stickyTrigger.addEventListener("click", openPalette);
    layerScopeButton.addEventListener("click", function () {
      setSearchScope("layer");
      input.focus();
    });
    allScopeButton.addEventListener("click", function () {
      setSearchScope("all");
      input.focus();
    });
    close.addEventListener("click", function () {
      if (typeof dialog.close === "function") {
        dialog.close();
      } else {
        dialog.removeAttribute("open");
      }
    });
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog && typeof dialog.close === "function") {
        dialog.close();
      }
    });
    dialog.addEventListener("close", function () {
      input.setAttribute("aria-expanded", "false");
    });
    input.addEventListener("input", function () {
      renderResults(input.value);
    });
    input.addEventListener("keydown", function (event) {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        select(selectedIndex + 1);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        select(selectedIndex - 1);
      } else if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        copyRecord(visibleRecords[selectedIndex]);
      } else if (event.key === "Enter") {
        event.preventDefault();
        openRecord(visibleRecords[selectedIndex]);
      }
    });
    document.addEventListener("keydown", function (event) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openPalette();
      }
    });

    setSearchScope("layer");
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
    createCommandPalette(content);
    initLayerNav();
    revealHashTarget();
    window.addEventListener("hashchange", revealHashTarget);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPromptLibrary);
  } else {
    initPromptLibrary();
  }
}());
