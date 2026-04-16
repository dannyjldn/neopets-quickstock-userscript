// ==UserScript==
// @name         Neopets Quickstock Style Adjuster
// @version      v1.0.0
// @description  Adjusts the styles on the new Neopets Quickstock page to make it easier to use. Currently only reduces padding, but other adjustments may follow.
// @author       Danny [amulthate]
// @match        https://www.neopets.com/quickstock.phtml*
// ==/UserScript==

(function() {
    'use strict';
    const header = document.querySelector('.quickstock-table.np-table thead th');
    if(header) {
        header.style.padding = "5px";
        header.style.fontFamily = "Museo Sans Rounded";
        header.style.fontSize = "16px";
    });

    const items = document.querySelectorAll('.quickstock-table.np-table tbody td');
    items.forEach((item) => {
        item.style.padding = "5px";
    });
})();