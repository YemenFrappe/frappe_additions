(()=>{var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var i=a((exports,module)=>{(()=>{var __webpack_modules__={"./frappe_additions/src/sidebar_collapsed/collapse_sidebar.js":()=>{eval(`frappe.provide('frappe.ui.pages');

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

//# sourceURL=webpack://frappe_additions/./frappe_additions/src/sidebar_collapsed/collapse_sidebar.js?`)},"./frappe_additions/src/sidebar_collapsed/main.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collapse_sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapse_sidebar.js */ "./frappe_additions/src/sidebar_collapsed/collapse_sidebar.js");
/* harmony import */ var _collapse_sidebar_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_collapse_sidebar_js__WEBPACK_IMPORTED_MODULE_0__);


//# sourceURL=webpack://frappe_additions/./frappe_additions/src/sidebar_collapsed/main.js?`)}},__webpack_module_cache__={};function __webpack_require__(e){var r=__webpack_module_cache__[e];if(r!==void 0)return r.exports;var _=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](_,_.exports,__webpack_require__),_.exports}__webpack_require__.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(r,{a:r}),r},__webpack_require__.d=(e,r)=>{for(var _ in r)__webpack_require__.o(r,_)&&!__webpack_require__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:r[_]})},__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),__webpack_require__.r=e=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./frappe_additions/src/sidebar_collapsed/main.js")})()});i();})();
//# sourceMappingURL=collapse_sidebar.bundle.SJGTMHM4.js.map
