/* Shared release URLs; matching HTML href attributes remain no-JavaScript fallback. */
(function () {
  "use strict";
  var releases = window.SCHOLAR_SOFTWARE_RELEASES || {};
  function isHttps(value) {
    if (typeof value !== "string") return false;
    try { return new URL(value).protocol === "https:"; }
    catch (_) { return false; }
  }
  document.querySelectorAll("[data-download-link]").forEach(function (link) {
    var parts = (link.getAttribute("data-download-link") || "").split(".");
    if (parts.length !== 3) return;
    var software = releases[parts[0]];
    var platform = software && software[parts[1]];
    var edition = platform && platform[parts[2]];
    if (edition && isHttps(edition.url)) link.href = edition.url;
  });
  document.querySelectorAll("[data-release-version]").forEach(function (element) {
    var release = releases[element.getAttribute("data-release-version")];
    if (!release || !release.windows || !release.macos) return;
    var win = release.windows.version, mac = release.macos.version;
    if (win && mac) {
      element.textContent = win === mac
        ? "Version " + win + " · Windows / macOS · English / 繁體中文"
        : "Windows v" + win + " · macOS v" + mac + " · English / 繁體中文";
    }
  });
})();
