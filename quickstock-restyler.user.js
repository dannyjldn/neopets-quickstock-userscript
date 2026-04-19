// ==UserScript==
// @name         Neopets Quickstock Style Adjuster
// @version      v1.1.0
// @description  Modifies the styles on the latest Neopets Quickstock page to make it easier to use. 
// @author       Danny
// @match        https://www.neopets.com/quickstock.phtml*
// ==/UserScript==

(function() {
    'use strict';

    const headerSelector = '.quickstock-table.np-table thead th';
    const itemSelector = '.quickstock-table.np-table tbody td';
    const unstackIconSelector = '.unstack-icon';
    const perPageDropdownSelector = '#qs-per-page-select';

    const headerTitles = document.querySelectorAll(headerSelector);
    const items = document.querySelectorAll(itemSelector);
    const unstackIcon = document.querySelector(unstackIconSelector);
    const perPageDropdown = document.querySelector(perPageDropdownSelector);

    function styleItemRows(items) {
        items.forEach((item) => {
            item.style.padding = "5px";
        });
    }

    headerTitles.forEach((headerTitle) => {
        headerTitle.style.padding = "5px";
        headerTitle.style.fontFamily = "Museo Sans Rounded";
        headerTitle.style.fontSize = "16px";
    });

    items.forEach((item) => {
        item.style.padding = "5px";
    });

    if (unstackIcon) {
        unstackIcon.addEventListener('click', () => {
            setTimeout(() => {
                const newItems = document.querySelectorAll(itemSelector);
                styleItemRows(newItems);
            }, 100);
        });
    }

    if (perPageDropdown) {
        perPageDropdown.addEventListener('change', () => {
            setTimeout(() => {
                const newItems = document.querySelectorAll(itemSelector);
                newItems.forEach((item) => {
                    styleItemRows(newItems);
                });
            }, 100);
        });
    }
})();