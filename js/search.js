/* ============================================================
   Kestrel Hill College — search engine
   Lightweight client-side full-text search over SITE_INDEX
   (see search-data.js). No build step, no dependencies.
   ============================================================ */

(function () {
  "use strict";

  /** Escape a string for safe use inside HTML. */
  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  /** Split a query into lowercase word tokens, dropping empties. */
  function tokenize(query) {
    return query
      .toLowerCase()
      .split(/[^a-z0-9']+/)
      .filter(Boolean);
  }

  /**
   * Score one index entry against the query tokens.
   * Title matches are weighted far higher than body matches,
   * whole-token matches beat substring matches, and an exact
   * phrase match anywhere gets a bonus.
   */
  function scoreEntry(entry, tokens, rawQuery) {
    const title = entry.title.toLowerCase();
    const body = entry.content.toLowerCase();
    let score = 0;

    tokens.forEach(function (token) {
      if (title === token) score += 12;
      else if (title.split(/\W+/).includes(token)) score += 8;
      else if (title.includes(token)) score += 4;

      const bodyWordMatches = body.split(/\W+/).filter(function (w) {
        return w === token;
      }).length;
      score += bodyWordMatches * 2;

      if (!bodyWordMatches && body.includes(token)) score += 1;
    });

    if (rawQuery.trim().length > 2) {
      const phrase = rawQuery.toLowerCase().trim();
      if (title.includes(phrase)) score += 10;
      else if (body.includes(phrase)) score += 5;
    }

    return score;
  }

  /** Run a search and return sorted { entry, score } results. */
  function search(query) {
    const tokens = tokenize(query);
    if (tokens.length === 0) return [];

    return SITE_INDEX.map(function (entry) {
      return { entry: entry, score: scoreEntry(entry, tokens, query) };
    })
      .filter(function (r) {
        return r.score > 0;
      })
      .sort(function (a, b) {
        return b.score - a.score;
      });
  }

  /** Wrap matches of any query token in <mark> for a text string. */
  function highlight(text, tokens) {
    if (!tokens.length) return escapeHtml(text);
    const pattern = tokens
      .map(function (t) {
        return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      })
      .join("|");
    const re = new RegExp("(" + pattern + ")", "ig");
    return escapeHtml(text).replace(re, "<mark>$1</mark>");
  }

  /** Build a short snippet around the first token match in the content. */
  function buildSnippet(content, tokens, radius) {
    radius = radius || 90;
    const lower = content.toLowerCase();
    let idx = -1;
    for (let i = 0; i < tokens.length && idx === -1; i++) {
      idx = lower.indexOf(tokens[i]);
    }
    if (idx === -1) idx = 0;
    const start = Math.max(0, idx - radius);
    const end = Math.min(content.length, idx + radius);
    let snippet = content.slice(start, end).trim();
    if (start > 0) snippet = "\u2026" + snippet;
    if (end < content.length) snippet = snippet + "\u2026";
    return highlight(snippet, tokens);
  }

  // ---------------------------------------------------------
  // Header live-search dropdown (present on every page)
  // ---------------------------------------------------------
  function initHeaderSearch() {
    const form = document.querySelector("[data-search-form]");
    if (!form) return;
    const input = form.querySelector("input[type='search']");
    const panel = document.querySelector("[data-search-panel]");

    function render(query) {
      const tokens = tokenize(query);
      const results = search(query).slice(0, 6);

      if (!query.trim()) {
        panel.classList.remove("open");
        panel.innerHTML = "";
        return;
      }

      if (results.length === 0) {
        panel.innerHTML =
          '<p class="panel-hint">No matches for \u201c' +
          escapeHtml(query) +
          '\u201d. Try a different word, or press Enter to see the full search page.</p>';
        panel.classList.add("open");
        return;
      }

      const items = results
        .map(function (r) {
          const e = r.entry;
          return (
            "<li><a href='" +
            e.url +
            "'>" +
            "<div class='result-kicker'>" +
            escapeHtml(e.section) +
            "</div>" +
            "<div class='result-title'>" +
            highlight(e.title, tokens) +
            "</div>" +
            "<p class='result-snippet'>" +
            buildSnippet(e.content, tokens) +
            "</p>" +
            "</a></li>"
          );
        })
        .join("");

      panel.innerHTML =
        '<p class="panel-hint">' +
        results.length +
        (results.length === 1 ? " result" : " results") +
        " \u2014 press Enter for the full list</p><ul>" +
        items +
        "</ul>";
      panel.classList.add("open");
    }

    input.addEventListener("input", function () {
      render(input.value);
    });

    input.addEventListener("focus", function () {
      if (input.value.trim()) render(input.value);
    });

    document.addEventListener("click", function (evt) {
      if (!form.contains(evt.target) && !panel.contains(evt.target)) {
        panel.classList.remove("open");
      }
    });

    document.addEventListener("keydown", function (evt) {
      if (evt.key === "Escape") {
        panel.classList.remove("open");
        input.blur();
      }
    });

    form.addEventListener("submit", function (evt) {
      evt.preventDefault();
      const q = input.value.trim();
      if (q) {
        window.location.href = "search-results.html?q=" + encodeURIComponent(q);
      }
    });
  }

  // ---------------------------------------------------------
  // Full results page (search-results.html)
  // ---------------------------------------------------------
  function initResultsPage() {
    const mount = document.querySelector("[data-results-mount]");
    if (!mount) return;

    const params = new URLSearchParams(window.location.search);
    const query = params.get("q") || "";
    const input = document.querySelector("[data-results-input]");
    const meta = document.querySelector("[data-results-meta]");
    const heading = document.querySelector("[data-results-heading]");

    if (input) input.value = query;

    function renderResults(q) {
      const tokens = tokenize(q);
      const results = search(q);

      if (heading) {
        heading.textContent = q ? "Results for \u201c" + q + "\u201d" : "Search Kestrel Hill College";
      }
      document.title = (q ? "Results for \u201c" + q + "\u201d" : "Search") + " \u2014 Kestrel Hill College";

      if (!q.trim()) {
        meta.textContent = "Enter a word or phrase above to search academics, admissions, campus life, and more.";
        mount.innerHTML = "";
        return;
      }

      meta.textContent =
        results.length +
        (results.length === 1 ? " result found" : " results found") +
        " for \u201c" + q + "\u201d";

      if (results.length === 0) {
        mount.innerHTML =
          '<div class="no-results">' +
          "<p>No pages matched your search. A few suggestions:</p>" +
          "<ul><li>Check the spelling of your search terms</li>" +
          "<li>Try a more general word, like \u201cprograms\u201d or \u201chousing\u201d</li>" +
          "<li>Browse <a href='academics.html'>Academics</a>, <a href='admissions.html'>Admissions</a>, or <a href='campus-life.html'>Campus Life</a> directly</li></ul>" +
          "</div>";
        return;
      }

      mount.innerHTML = results
        .map(function (r) {
          const e = r.entry;
          return (
            "<article class='result-item'>" +
            "<div class='result-kicker'>" +
            escapeHtml(e.section) +
            "</div>" +
            "<h3><a href='" +
            e.url +
            "'>" +
            highlight(e.title, tokens) +
            "</a></h3>" +
            "<div class='result-url'>kestrelhill.edu/" +
            e.url +
            "</div>" +
            "<p>" +
            buildSnippet(e.content, tokens, 140) +
            "</p>" +
            "</article>"
          );
        })
        .join("");
    }

    renderResults(query);

    const form = document.querySelector("[data-results-form]");
    if (form) {
      form.addEventListener("submit", function (evt) {
        evt.preventDefault();
        const q = input.value.trim();
        const url = new URL(window.location.href);
        url.searchParams.set("q", q);
        window.history.pushState({}, "", url);
        renderResults(q);
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    initHeaderSearch();
    initResultsPage();
  });
})();
