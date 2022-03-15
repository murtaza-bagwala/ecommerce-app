/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Nav.module.css */ \"./styles/Nav.module.css\");\n/* harmony import */ var _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_payments_solution_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/payments.solution.js */ \"./lib/payments.solution.js\");\n/* harmony import */ var _hooks_use_cart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-cart.js */ \"./hooks/use-cart.js\");\n\nvar _jsxFileName = \"/Users/murtazabagwala/workspace/personel-projects/ecommerce-app/components/nav.js\";\n\n\n\n\n\nconst Nav = () => {\n  const {\n    cartItems,\n    subtotal\n  } = (0,_hooks_use_cart_js__WEBPACK_IMPORTED_MODULE_2__.useCart)();\n\n  function checkout() {\n    (0,_lib_payments_solution_js__WEBPACK_IMPORTED_MODULE_1__.initiateCheckout)({\n      lineItems: cartItems.map(({\n        id,\n        quantity\n      }) => {\n        return {\n          price: id,\n          quantity\n        };\n      })\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n    className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navTitle),\n      children: \"Space Jelly Shop\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navCart),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: checkout,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaShoppingCart, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, undefined), \" $\", subtotal.toFixed(2)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYXBwLy4vY29tcG9uZW50cy9uYXYuanM/MzFiMiJdLCJuYW1lcyI6WyJOYXYiLCJjYXJ0SXRlbXMiLCJzdWJ0b3RhbCIsInVzZUNhcnQiLCJjaGVja291dCIsImluaXRpYXRlQ2hlY2tvdXQiLCJsaW5lSXRlbXMiLCJtYXAiLCJpZCIsInF1YW50aXR5IiwicHJpY2UiLCJzdHlsZXMiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLE1BQU07QUFDZCxRQUFNO0FBQUVDLGFBQUY7QUFBYUM7QUFBYixNQUEwQkMsMkRBQU8sRUFBdkM7O0FBRUEsV0FBU0MsUUFBVCxHQUFvQjtBQUNoQkMsK0VBQWdCLENBQUM7QUFDakJDLGVBQVMsRUFBRUwsU0FBUyxDQUFDTSxHQUFWLENBQWMsQ0FBQztBQUFFQyxVQUFGO0FBQU1DO0FBQU4sT0FBRCxLQUFzQjtBQUMvQyxlQUFPO0FBQ0hDLGVBQUssRUFBRUYsRUFESjtBQUVIQztBQUZHLFNBQVA7QUFJQyxPQUxVO0FBRE0sS0FBRCxDQUFoQjtBQVFIOztBQUVILHNCQUNFO0FBQUssYUFBUyxFQUFFRSxtRUFBaEI7QUFBQSw0QkFDRTtBQUFHLGVBQVMsRUFBRUEsd0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFHLGVBQVMsRUFBRUEsdUVBQWQ7QUFBQSw2QkFDRTtBQUFRLGVBQU8sRUFBRVAsUUFBakI7QUFBQSxnQ0FDRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLFFBQ3VCRixRQUFRLENBQUNVLE9BQVQsQ0FBaUIsQ0FBakIsQ0FEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVlELENBMUJEOztBQTRCQSwrREFBZVosR0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFTaG9wcGluZ0NhcnQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL05hdi5tb2R1bGUuY3NzJztcbmltcG9ydCB7IGluaXRpYXRlQ2hlY2tvdXQgfSBmcm9tICcuLi9saWIvcGF5bWVudHMuc29sdXRpb24uanMnXG5cbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tICcuLi9ob29rcy91c2UtY2FydC5qcyc7XG5cbmNvbnN0IE5hdiA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNhcnRJdGVtcywgc3VidG90YWwgfSA9IHVzZUNhcnQoKTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrb3V0KCkge1xuICAgICAgICBpbml0aWF0ZUNoZWNrb3V0KHtcbiAgICAgICAgbGluZUl0ZW1zOiBjYXJ0SXRlbXMubWFwKCh7IGlkLCBxdWFudGl0eSB9KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcmljZTogaWQsXG4gICAgICAgICAgICBxdWFudGl0eVxuICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbiAgICB9ICBcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm5hdlRpdGxlfT5cbiAgICAgICAgU3BhY2UgSmVsbHkgU2hvcFxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubmF2Q2FydH0+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17Y2hlY2tvdXR9PlxuICAgICAgICAgIDxGYVNob3BwaW5nQ2FydCAvPiAke3N1YnRvdGFsLnRvRml4ZWQoMil9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9wPlxuICAgIDwvbmF2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/nav.js\n");

/***/ }),

/***/ "./lib/payments.solution.js":
/*!**********************************!*\
  !*** ./lib/payments.solution.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initiateCheckout\": function() { return /* binding */ initiateCheckout; }\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripePromise = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(\"pk_test_51Kc5RkSDq42j3RrTZwkUHSIXT2GtJQiXXmOYJW35D7iAaEYyoBv3sZH6BMap8mVFZjLanaoqyID8UZvMOwCTDC0K00i6L7aoDx\");\n/**\n * @lesson-08-solution Exercise 2\n * We can create and immediately export a new async function which will allow\n * us to perform our Stripe initiation from somewhere else in our app.\n */\n\nasync function initiateCheckout({\n  lineItems\n} = {}) {\n  /**\n   * @lesson-08-solution Exercise 5\n   * When we load Stripe from the library, we can make sure we first\n   * wait for it to load. Once loaded we can take advantage of the\n   * redirectToCheckout method which along with some required parameters\n   * will send our customer to a Stripe Checkout session.\n   */\n  const stripe = await stripePromise;\n  await stripe.redirectToCheckout({\n    mode: 'payment',\n    lineItems,\n    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,\n    cancelUrl: window.location.origin\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYXBwLy4vbGliL3BheW1lbnRzLnNvbHV0aW9uLmpzPzcyZjMiXSwibmFtZXMiOlsic3RyaXBlUHJvbWlzZSIsImxvYWRTdHJpcGUiLCJwcm9jZXNzIiwiaW5pdGlhdGVDaGVja291dCIsImxpbmVJdGVtcyIsInN0cmlwZSIsInJlZGlyZWN0VG9DaGVja291dCIsIm1vZGUiLCJzdWNjZXNzVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJjYW5jZWxVcmwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUEsYUFBYSxHQUFHQyw2REFBVSxDQUFDQyw2R0FBRCxDQUFoQztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sZUFBZUMsZ0JBQWYsQ0FBZ0M7QUFBRUM7QUFBRixJQUFnQixFQUFoRCxFQUFvRDtBQUN6RDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVFLFFBQU1DLE1BQU0sR0FBRyxNQUFNTCxhQUFyQjtBQUVBLFFBQU1LLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEI7QUFDOUJDLFFBQUksRUFBRSxTQUR3QjtBQUU5QkgsYUFGOEI7QUFHOUJJLGNBQVUsRUFBRyxHQUFFQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQU8sbUNBSFI7QUFJOUJDLGFBQVMsRUFBRUgsTUFBTSxDQUFDQyxRQUFQLENBQWdCQztBQUpHLEdBQTFCLENBQU47QUFNRCIsImZpbGUiOiIuL2xpYi9wYXltZW50cy5zb2x1dGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tICdAc3RyaXBlL3N0cmlwZS1qcyc7XG5cbmNvbnN0IHN0cmlwZVByb21pc2UgPSBsb2FkU3RyaXBlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9BUElfS0VZKTtcblxuLyoqXG4gKiBAbGVzc29uLTA4LXNvbHV0aW9uIEV4ZXJjaXNlIDJcbiAqIFdlIGNhbiBjcmVhdGUgYW5kIGltbWVkaWF0ZWx5IGV4cG9ydCBhIG5ldyBhc3luYyBmdW5jdGlvbiB3aGljaCB3aWxsIGFsbG93XG4gKiB1cyB0byBwZXJmb3JtIG91ciBTdHJpcGUgaW5pdGlhdGlvbiBmcm9tIHNvbWV3aGVyZSBlbHNlIGluIG91ciBhcHAuXG4gKi9cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRpYXRlQ2hlY2tvdXQoeyBsaW5lSXRlbXMgfSA9IHt9KSB7XG4gIC8qKlxuICAgKiBAbGVzc29uLTA4LXNvbHV0aW9uIEV4ZXJjaXNlIDVcbiAgICogV2hlbiB3ZSBsb2FkIFN0cmlwZSBmcm9tIHRoZSBsaWJyYXJ5LCB3ZSBjYW4gbWFrZSBzdXJlIHdlIGZpcnN0XG4gICAqIHdhaXQgZm9yIGl0IHRvIGxvYWQuIE9uY2UgbG9hZGVkIHdlIGNhbiB0YWtlIGFkdmFudGFnZSBvZiB0aGVcbiAgICogcmVkaXJlY3RUb0NoZWNrb3V0IG1ldGhvZCB3aGljaCBhbG9uZyB3aXRoIHNvbWUgcmVxdWlyZWQgcGFyYW1ldGVyc1xuICAgKiB3aWxsIHNlbmQgb3VyIGN1c3RvbWVyIHRvIGEgU3RyaXBlIENoZWNrb3V0IHNlc3Npb24uXG4gICAqL1xuXG4gIGNvbnN0IHN0cmlwZSA9IGF3YWl0IHN0cmlwZVByb21pc2U7XG5cbiAgYXdhaXQgc3RyaXBlLnJlZGlyZWN0VG9DaGVja291dCh7XG4gICAgbW9kZTogJ3BheW1lbnQnLFxuICAgIGxpbmVJdGVtcyxcbiAgICBzdWNjZXNzVXJsOiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufT9zZXNzaW9uX2lkPXtDSEVDS09VVF9TRVNTSU9OX0lEfWAsXG4gICAgY2FuY2VsVXJsOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxuICB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/payments.solution.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_use_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-cart */ \"./hooks/use-cart.js\");\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav */ \"./components/nav.js\");\n\nvar _jsxFileName = \"/Users/murtazabagwala/workspace/personel-projects/ecommerce-app/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const cart = (0,_hooks_use_cart__WEBPACK_IMPORTED_MODULE_2__.useCartState)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_use_cart__WEBPACK_IMPORTED_MODULE_2__.CartContext.Provider, {\n    value: cart,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYXBwLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2FydCIsInVzZUNhcnRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFFdkMsUUFBTUMsSUFBSSxHQUFHQyw2REFBWSxFQUF6QjtBQUVBLHNCQUNFLDhEQUFDLGlFQUFEO0FBQXNCLFNBQUssRUFBRUQsSUFBN0I7QUFBQSw0QkFDRSw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOztBQUVELCtEQUFlRixLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuXG5pbXBvcnQgeyBDYXJ0Q29udGV4dCwgdXNlQ2FydFN0YXRlIH0gZnJvbSAnLi4vaG9va3MvdXNlLWNhcnQnO1xuXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2JztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cbiAgY29uc3QgY2FydCA9IHVzZUNhcnRTdGF0ZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPENhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjYXJ0fT5cbiAgICAgIDxOYXYgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/Nav.module.css":
/*!*******************************!*\
  !*** ./styles/Nav.module.css ***!
  \*******************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"nav\": \"Nav_nav__3Zjf-\",\n\t\"navTitle\": \"Nav_navTitle__22eHc\",\n\t\"navCart\": \"Nav_navCart__NYPLc\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYXBwLy4vc3R5bGVzL05hdi5tb2R1bGUuY3NzPzdjMjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL05hdi5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2XCI6IFwiTmF2X25hdl9fM1pqZi1cIixcblx0XCJuYXZUaXRsZVwiOiBcIk5hdl9uYXZUaXRsZV9fMjJlSGNcIixcblx0XCJuYXZDYXJ0XCI6IFwiTmF2X25hdkNhcnRfX05ZUExjXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Nav.module.css\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@stripe/stripe-js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_react-icons_fa_index_esm_js","hooks_use-cart_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();