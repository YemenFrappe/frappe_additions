/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frappe_additions/src/sidebar_collapsed/collapse_sidebar.js":
/*!********************************************************************!*\
  !*** ./frappe_additions/src/sidebar_collapsed/collapse_sidebar.js ***!
  \********************************************************************/
/***/ (() => {

eval("frappe.provide('frappe.ui.pages');\n\nconst originalSetupSidebarToggle = frappe.ui.Page.prototype.setup_sidebar_toggle;\n\n// Overriding the setup_sidebar_toggle function in frappe.ui.Page.prototype\nfrappe.ui.Page.prototype.setup_sidebar_toggle = function () {\n\n    // Select the sidebar toggle button within the page head\n    let sidebar_toggle = $(\".page-head\").find(\".sidebar-toggle-btn\");\n\n    // Select the sidebar wrapper element within the page layout\n    let sidebar_wrapper = this.wrapper.find(\".layout-side-section\");\n\n    // Toggle the visibility of the sidebar wrapper\n    sidebar_wrapper.toggle();\n\n    // Check if the sidebar toggle functionality is disabled or if there's no sidebar wrapper element\n    if (this.disable_sidebar_toggle || !sidebar_wrapper.length) {\n        // If either condition is true, remove the last sidebar toggle button\n        sidebar_toggle.last().remove();\n    } else {\n        // If the sidebar is not disabled and there is a sidebar wrapper element\n\n        // If not a mobile device, set a title attribute on the sidebar toggle for accessibility\n        if (!frappe.is_mobile()) {\n            sidebar_toggle.attr(\"title\", __(\"Toggle Sidebar\"));\n        }\n\n        // Set an ARIA label for accessibility\n        sidebar_toggle.attr(\"aria-label\", __(\"Toggle Sidebar\"));\n\n        // Initialize a tooltip for the sidebar toggle with delay and hover trigger settings\n        sidebar_toggle.tooltip({\n            delay: { show: 600, hide: 100 },\n            trigger: \"hover\",\n        });\n\n        // Add a click event listener to the sidebar toggle button\n        sidebar_toggle.click(() => {\n            // Check if the screen size is extra small (xs) or small (sm)\n            if (frappe.utils.is_xs() || frappe.utils.is_sm()) {\n                // If the screen size is xs or sm, set up an overlay sidebar\n                this.setup_overlay_sidebar();\n            } else {\n                // Otherwise, simply toggle the visibility of the sidebar wrapper\n                sidebar_wrapper.toggle();\n            }\n\n            // Trigger the toggleSidebar event on the document body\n            $(document.body).trigger(\"toggleSidebar\");\n\n            // Update the sidebar toggle icon \n            this.update_sidebar_icon();\n        });\n    }\n};\n\n//# sourceURL=webpack://frappe_additions/./frappe_additions/src/sidebar_collapsed/collapse_sidebar.js?");

/***/ }),

/***/ "./frappe_additions/src/sidebar_collapsed/main.js":
/*!********************************************************!*\
  !*** ./frappe_additions/src/sidebar_collapsed/main.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _collapse_sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapse_sidebar.js */ \"./frappe_additions/src/sidebar_collapsed/collapse_sidebar.js\");\n/* harmony import */ var _collapse_sidebar_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_collapse_sidebar_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://frappe_additions/./frappe_additions/src/sidebar_collapsed/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./frappe_additions/src/sidebar_collapsed/main.js");
/******/ 	
/******/ })()
;