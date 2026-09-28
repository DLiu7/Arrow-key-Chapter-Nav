
// ==UserScript==
// @name         Arrow-key chapter nav
// @match        https://trxs.cc/tongren/*/*.html
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  function findLink(label) {
    return [...document.querySelectorAll('.pageNav a')]
      .find(a => a.textContent.trim() === label);
  }

  document.addEventListener('keydown', function (e) {
    // Don't hijack keys while typing in the search box
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    // Leave browser shortcuts like Alt+Left (back) alone
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;

    if (e.key === 'ArrowRight') {
      const next = findLink('下一章');
      if (next) next.click();
    } else if (e.key === 'ArrowLeft') {
      const prev = findLink('上一章');
      if (prev) prev.click();
    }
  });
})();
