// ==UserScript==
// @name         Neopets Quickstock Style Adjuster
// @version      v1.2.0
// @description  Modifies the styles on the latest Neopets Quickstock page to make it easier to use.
// @author       Danny
// @match        https://www.neopets.com/quickstock.phtml*
// ==/UserScript==

(function() {
    'use strict';

    const quickStockTableSelector = '#quickstock-table-container';
    const headerSelector = '.quickstock-table thead tr th';
    const itemSelector = '.quickstock-table tbody tr td';
    const clickableElements = ['.unstack-icon', '.stack-icon', '.az-icon', '.time-icon', '.inv-nc-icon', '.inv-np-icon',];
    const perPageDropdownSelector = '#qs-per-page-select';

    function waitForTable() {
        return new Promise((resolve) => {
            const observer = new MutationObserver((mutations, observer) => {
                const element = document.querySelector(quickStockTableSelector);
                if (element) {
                    observer.disconnect();
                    resolve(element);
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true,
            });
        });    
    }

    function waitForPopup() {
        return new Promise((resolve) => {
            const observer = new MutationObserver((mutations, observer) => {
                const element = document.querySelector('#commonMessagePopup');
                if (element) {
                    observer.disconnect();
                    resolve(element);
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true,
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
        clickableElements.forEach(selector => {
            document.querySelector(selector)?.addEventListener('click', () => {    
                init();
            });
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
        waitForPopup().then(() => {
            waitForTable().then(() => {
                styleTable();
                bindEventListeners();
            })
        });
    }; 

    init();
})();