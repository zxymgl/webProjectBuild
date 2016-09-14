webpackJsonp([1],{

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reducers = __webpack_require__(249);
	
	exports.default = function (store) {
	  return {
	    path: 'counter',
	    getComponent: function getComponent(nextState, next) {
	      __webpack_require__.e/* nsure */(2, function (require) {
	        /*  These modules are lazily evaluated using require hook, and
	            will not loaded until the router invokes this callback. */
	        var Counter = __webpack_require__(317).default;
	        var reducer = __webpack_require__(318).default;
	
	        (0, _reducers.injectReducer)(store, { key: 'counter', reducer: reducer });
	
	        next(null, Counter);
	      });
	    }
	  };
	};

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NotFound = __webpack_require__(364);
	
	var _NotFound2 = _interopRequireDefault(_NotFound);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  path: '*',
	  component: _NotFound2.default
	};

/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NotFound = undefined;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(185);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var goBack = function goBack(e) {
	  e.preventDefault();
	  return _reactRouter.browserHistory.goBack();
	};
	
	var NotFound = exports.NotFound = function NotFound() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'h4',
	      null,
	      'Page not found!'
	    ),
	    _react2.default.createElement(
	      'p',
	      null,
	      _react2.default.createElement(
	        'a',
	        { href: '#', onClick: goBack },
	        '← Back'
	      )
	    )
	  );
	};
	
	exports.default = NotFound;

/***/ }

});
//# sourceMappingURL=1.1.5619cfc386cd700388f4.js.map