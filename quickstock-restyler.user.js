// ==UserScript==
// @name         Neopets Quickstock Style Adjuster
// @version      v1.2.0
// @description  Modifies the styles on the latest Neopets Quickstock page to make it easier to use.
// @author       Danny
// @match        https://www.neopets.com/quickstock.phtml*
// ==/UserScript==

(function() {
    'use strict';

    const timeout = 1500;
    const headerSelector = '.quickstock-table thead tr th';
    const itemSelector = '.quickstock-table tbody tr td';
    const unstackIconSelector = '.unstack-icon';
    const perPageDropdownSelector = '#qs-per-page-select';

    setTimeout(() => {
        const unstackIcon = document.querySelector(unstackIconSelector);
        const perPageDropdown = document.querySelector(perPageDropdownSelector);

        function getHeaderTitles() {
            return document.querySelectorAll(headerSelector);
        }

        function getItems() {
            return document.querySelectorAll(itemSelector);
        }

        function styleItemRows(items) {
            items.forEach((item) => {
                item.style.padding = "5px";
            });
        }

        function styleHeaderRow(headerTitles) {
            headerTitles.forEach((headerTitle) => {
                headerTitle.style.padding = "5px";
                headerTitle.style.fontFamily = "Museo Sans Rounded";
                headerTitle.style.fontSize = "16px";
            });
        }

        const headerTitles = getHeaderTitles();
        const items = getItems();

        styleHeaderRow(headerTitles);

        items.forEach((item) => {
            item.style.padding = "5px";
        });

        if (unstackIcon) {
            unstackIcon.addEventListener('click', () => {
                setTimeout(() => {
                    const newItems = document.querySelectorAll(itemSelector);
                    const newHeaderTitles = document.querySelectorAll(headerSelector);
                    styleHeaderRow(newHeaderTitles);
                    styleItemRows(newItems);
                }, timeout);
            });
        }

        if (perPageDropdown) {
            perPageDropdown.addEventListener('change', () => {
                setTimeout(() => {
                    const newPageItems = getItems();
                    const newPageHeaderTitles = getHeaderTitles();
                    styleHeaderRow(newPageHeaderTitles);
                    styleItemRows(newPageItems);
                }, timeout);
            });
        }
    }, timeout);
})();