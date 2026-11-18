/* Shared release links; direct HTML URLs are retained as a no-JavaScript fallback. */
(function () {
  "use strict";
  var releases = window.SCHOLAR_SOFTWARE_RELEASES || {};
  function isHttps(value) {
    if (typeof value !== "string") return false;
    try { return new URL(value).protocol === "https:"; }
    catch (_) { return false; }
  }
  function downloadFor(key) {
    var parts = String(key || "").split(".");
    if (parts.length !== 2) return null;
    var software = releases[parts[0]] || {};
    var locale = software[parts[1]] || {};
    return locale;
  }
  document.querySelectorAll("[data-download-link]").forEach(function (link) {
    var release = downloadFor(link.getAttribute("data-download-link"));
    if (release && isHttps(release.url)) link.href = release.url;
  });
  document.querySelectorAll("[data-release-version]").forEach(function (element) {
    var release = releases[element.getAttribute("data-release-version")];
    if (release && release.version)
      element.textContent = "Version " + release.version + " · English / 繁體中文";
  });
})();
