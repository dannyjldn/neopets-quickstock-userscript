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
    const quickStockTableSelector = '.quickstock-table-container';
    const headerSelector = '.quickstock-table thead tr th';
    const itemSelector = '.quickstock-table tbody tr td';
    const unstackIconSelector = '.unstack-icon';
    const perPageDropdownSelector = '#qs-per-page-select';

    function waitForTable() {
        return new Promise(resolve => {
            if (document.querySelector(quickStockTableSelector)) {
                return resolve(document.querySelector(quickStockTableSelector));
            }

            const observer = new MutationObserver(mutations => {
                if (document.querySelector(quickStockTableSelector)) {
                    observer.disconnect();
                    resolve(document.querySelector(quickStockTableSelector));
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }

    function styleTable() {
        document.querySelectorAll(headerSelector).forEach(header => {
            header.style.padding = "5px";
            header.style.fontFamily = "Museo Sans Rounded";
            header.style.fontSize = "16px";
        });

        document.querySelectorAll(itemSelector).forEach(item => {
            item.style.padding = "5px";
        });
    }


    function bindEventListeners() {
        document.querySelector(unstackIconSelector)?.addEventListener('click', () => {    
            init();
        });

        document.querySelector(perPageDropdownSelector)?.addEventListener('change', () => {
            init();
        });        
    }

    function init() {
        waitForTable().then(() => {
            styleTable();
            bindEventListeners();
        })
    }; 

    init();
})();