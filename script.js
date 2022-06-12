// ==UserScript==
// @name         Advanced driversed.com auto-clicker
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Auto-clicks the "next" button (pauses when on questions) on the driversed.com course
// @author       kr45732
// @match        https://driversed.com/*
// @grant        window.focus
// ==/UserScript==

setInterval(() => {
    if (document.getElementsByClassName('result-headertxt')[0]?.textContent?.trim() != "Questions") {
        Array.prototype.filter.call(document.getElementsByClassName('btn'), button => button?.textContent?.trim() == "NEXT")[0]?.click()
    }

    if (location.pathname.endsWith("/dashboard/") && !document.hasFocus()) {
        window.focus();
    }
}, 400)
