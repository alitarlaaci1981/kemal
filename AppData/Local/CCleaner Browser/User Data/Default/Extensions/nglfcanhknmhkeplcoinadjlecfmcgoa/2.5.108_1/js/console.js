/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2019-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

'use strict';

self.log = (function() {
    const noopFunc = function() {};
    const info = function(s) { console.log(`[uBO] ${s}`); };
    return {
        get verbosity( ) { return; },
        set verbosity(level) {
            this.info = console.info = level === 'info' ? info : noopFunc;
        },
        info: noopFunc,
        print: info,
    };
})();

// CORE_V2
const CLEANING_DONE_KEY = "__UPDATE_CLEANED__";
let FIRST_RUN_AFTER_UPDATE = false;

// Hack to clean LocalStorage from AdBlock v1. It takes all the keys except the user whitelist and removes them.
chrome.storage.local.get(null, function (result) {
    let keysToRemove = ["assetSourceRegistry", "selectedFilterLists"];

    // If it wasn't already cleaned
    if (!result[CLEANING_DONE_KEY]) {
        chrome.storage.local.remove(keysToRemove, function () {
            if (chrome.runtime.lastError) {
                console.log("Error:", chrome.runtime.lastError);
            } else {
                chrome.storage.local.set({[CLEANING_DONE_KEY]: true}, function () {
                    console.log("LocalStorage cleaned...");
                    FIRST_RUN_AFTER_UPDATE = true;
                });
            }
        });
    }
});
