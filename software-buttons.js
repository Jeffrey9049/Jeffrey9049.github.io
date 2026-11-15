/* Enables download buttons only after a valid public URL is configured. */
(function () {
  "use strict";
  var releases = window.SCHOLAR_SOFTWARE_RELEASES || {};
  function validReleaseURL(value) {
    if (typeof value !== "string" || !value.trim()) return false;
    try {
      var url = new URL(value);
      return url.protocol === "https:";
    } catch (_) { return false; }
  }
  document.querySelectorAll("[data-download-link]").forEach(function (link) {
    var key = link.getAttribute("data-download-link");
    var item = releases[key] || {};
    if (!validReleaseURL(item.url)) return;
    link.href = item.url.trim();
    link.hidden = false;
  });
  document.querySelectorAll("[data-download-pending]").forEach(function (element) {
    var key = element.getAttribute("data-download-pending");
    var item = releases[key] || {};
    if (validReleaseURL(item.url)) element.hidden = true;
  });
  document.querySelectorAll("[data-release-version]").forEach(function (element) {
    var key = element.getAttribute("data-release-version");
    var item = releases[key] || {};
    if (validReleaseURL(item.url) && item.version) {
      element.textContent = "Available version: " + item.version;
    }
  });
})();
