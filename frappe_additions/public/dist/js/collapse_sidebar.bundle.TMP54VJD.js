(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // ../frappe_additions/frappe_additions/public/sidebar_collapsed/js/collapse_sidebar.bundle.js
  var require_collapse_sidebar_bundle = __commonJS({
    "../frappe_additions/frappe_additions/public/sidebar_collapsed/js/collapse_sidebar.bundle.js"(exports, module) {
      (() => {
        var __webpack_modules__ = {
          "./frappe_additions/src/sidebar_collapsed/collapse_sidebar.js": () => {
            eval(`frappe.provide('frappe.ui.pages');

const originalSetupSidebarToggle = frappe.ui.Page.prototype.setup_sidebar_toggle;

// Overriding the setup_sidebar_toggle function in frappe.ui.Page.prototype
frappe.ui.Page.prototype.setup_sidebar_toggle = function () {

    // Select the sidebar toggle button within the page head
    let sidebar_toggle = $(".page-head").find(".sidebar-toggle-btn");

    // Select the sidebar wrapper element within the page layout
    let sidebar_wrapper = this.wrapper.find(".layout-side-section");

    // Toggle the visibility of the sidebar wrapper
    sidebar_wrapper.toggle();

    // Check if the sidebar toggle functionality is disabled or if there's no sidebar wrapper element
    if (this.disable_sidebar_toggle || !sidebar_wrapper.length) {
        // If either condition is true, remove the last sidebar toggle button
        sidebar_toggle.last().remove();
    } else {
        // If the sidebar is not disabled and there is a sidebar wrapper element

        // If not a mobile device, set a title attribute on the sidebar toggle for accessibility
        if (!frappe.is_mobile()) {
            sidebar_toggle.attr("title", __("Toggle Sidebar"));
        }

        // Set an ARIA label for accessibility
        sidebar_toggle.attr("aria-label", __("Toggle Sidebar"));

        // Initialize a tooltip for the sidebar toggle with delay and hover trigger settings
        sidebar_toggle.tooltip({
            delay: { show: 600, hide: 100 },
            trigger: "hover",
        });

        // Add a click event listener to the sidebar toggle button
        sidebar_toggle.click(() => {
            // Check if the screen size is extra small (xs) or small (sm)
            if (frappe.utils.is_xs() || frappe.utils.is_sm()) {
                // If the screen size is xs or sm, set up an overlay sidebar
                this.setup_overlay_sidebar();
            } else {
                // Otherwise, simply toggle the visibility of the sidebar wrapper
                sidebar_wrapper.toggle();
            }

            // Trigger the toggleSidebar event on the document body
            $(document.body).trigger("toggleSidebar");

            // Update the sidebar toggle icon 
            this.update_sidebar_icon();
        });
    }
};

//# sourceURL=webpack://frappe_additions/./frappe_additions/src/sidebar_collapsed/collapse_sidebar.js?`);
          },
          "./frappe_additions/src/sidebar_collapsed/main.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _collapse_sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapse_sidebar.js */ "./frappe_additions/src/sidebar_collapsed/collapse_sidebar.js");\n/* harmony import */ var _collapse_sidebar_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_collapse_sidebar_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://frappe_additions/./frappe_additions/src/sidebar_collapsed/main.js?');
          }
        };
        var __webpack_module_cache__ = {};
        function __webpack_require__(moduleId) {
          var cachedModule = __webpack_module_cache__[moduleId];
          if (cachedModule !== void 0) {
            return cachedModule.exports;
          }
          var module2 = __webpack_module_cache__[moduleId] = {
            exports: {}
          };
          __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
          return module2.exports;
        }
        (() => {
          __webpack_require__.n = (module2) => {
            var getter = module2 && module2.__esModule ? () => module2["default"] : () => module2;
            __webpack_require__.d(getter, { a: getter });
            return getter;
          };
        })();
        (() => {
          __webpack_require__.d = (exports2, definition) => {
            for (var key in definition) {
              if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
              }
            }
          };
        })();
        (() => {
          __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
        })();
        (() => {
          __webpack_require__.r = (exports2) => {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
              Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
            }
            Object.defineProperty(exports2, "__esModule", { value: true });
          };
        })();
        var __webpack_exports__ = __webpack_require__("./frappe_additions/src/sidebar_collapsed/main.js");
      })();
    }
  });
  require_collapse_sidebar_bundle();
})();
//# sourceMappingURL=collapse_sidebar.bundle.TMP54VJD.js.map
