webpackJsonp([2],{

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactRedux = __webpack_require__(288);

	var _counter = __webpack_require__(318);

	var _Counter = __webpack_require__(359);

	var _Counter2 = _interopRequireDefault(_Counter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*  Object of action creators (can also be function that returns object).
	    Keys will be passed as props to presentational components. Here we are
	    implementing our wrapper around increment; the component doesn't care   */

	var mapActionCreators = {
	    increment: function increment() {
	        return (0, _counter.increment)(1);
	    },
	    doubleAsync: _counter.doubleAsync
	};

	/*  This is a container component. Notice it does not contain any JSX,
	    nor does it import React. This component is **only** responsible for
	    wiring in the actions and state necessary to render a presentational
	    component - in this case, the counter:   */

	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        counter: state.counter
	    };
	};

	/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

	    import { createSelector } from 'reselect'
	    const counter = (state) => state.counter
	    const tripleCount = createSelector(counter, (count) => count * 3)
	    const mapStateToProps = (state) => ({
	      counter: tripleCount(state)
	    })

	    Selectors can compute derived data, allowing Redux to store the minimal possible state.
	    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
	    Selectors are composable. They can be used as input to other selectors.
	    https://github.com/reactjs/reselect    */

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapActionCreators)(_Counter2.default);

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = exports.doubleAsync = exports.COUNTER_INCREMENT = undefined;

	var _defineProperty2 = __webpack_require__(319);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _promise = __webpack_require__(323);

	var _promise2 = _interopRequireDefault(_promise);

	exports.increment = increment;
	exports.default = counterReducer;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// ------------------------------------
	// Constants
	// ------------------------------------
	var COUNTER_INCREMENT = exports.COUNTER_INCREMENT = 'COUNTER_INCREMENT';

	// ------------------------------------
	// Actions
	// ------------------------------------

	/*  NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
	    If you're unfamiliar with Flow, you are completely welcome to avoid
	    annotating your code, but if you'd like to learn more you can
	    check out: flowtype.org.

	    NOTE: There is currently a bug with babel-eslint where a `space-infix-ops`
	    error is incorrectly thrown when using arrow functions, hence the oddity.  */

	function increment() {
	  var value = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

	  return {
	    type: COUNTER_INCREMENT,
	    payload: value
	  };
	}

	/*  This is a thunk, meaning it is a function that immediately
	    returns a function for lazy evaluation. It is incredibly useful for
	    creating async actions, especially when combined with redux-thunk!

	    NOTE: This is solely for demonstration purposes. In a real application,
	    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
	    reducer take care of this logic.  */

	var doubleAsync = exports.doubleAsync = function doubleAsync() {
	  return function (dispatch, getState) {
	    return new _promise2.default(function (resolve) {
	      setTimeout(function () {
	        dispatch(increment(getState().counter));
	        resolve();
	      }, 200);
	    });
	  };
	};

	var actions = exports.actions = {
	  increment: increment,
	  doubleAsync: doubleAsync
	};

	// ------------------------------------
	// Action Handlers
	// ------------------------------------
	var ACTION_HANDLERS = (0, _defineProperty3.default)({}, COUNTER_INCREMENT, function (state, action) {
	  return state + action.payload;
	});

	// ------------------------------------
	// Reducer
	// ------------------------------------
	var initialState = 0;
	function counterReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  var handler = ACTION_HANDLERS[action.type];

	  return handler ? handler(state, action) : state;
	}

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(320);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(321), __esModule: true };

/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(322);
	var $Object = __webpack_require__(256).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(254);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(264), 'Object', {defineProperty: __webpack_require__(260).f});

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(324), __esModule: true };

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(325);
	__webpack_require__(326);
	__webpack_require__(339);
	__webpack_require__(343);
	module.exports = __webpack_require__(256).Promise;

/***/ },

/***/ 325:
/***/ function(module, exports) {



/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(327)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(328)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(279)
	  , defined   = __webpack_require__(276);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(329)
	  , $export        = __webpack_require__(254)
	  , redefine       = __webpack_require__(330)
	  , hide           = __webpack_require__(259)
	  , has            = __webpack_require__(272)
	  , Iterators      = __webpack_require__(331)
	  , $iterCreate    = __webpack_require__(332)
	  , setToStringTag = __webpack_require__(336)
	  , getPrototypeOf = __webpack_require__(338)
	  , ITERATOR       = __webpack_require__(337)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },

/***/ 329:
/***/ function(module, exports) {

	module.exports = true;

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(259);

/***/ },

/***/ 331:
/***/ function(module, exports) {

	module.exports = {};

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(333)
	  , descriptor     = __webpack_require__(268)
	  , setToStringTag = __webpack_require__(336)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(259)(IteratorPrototype, __webpack_require__(337)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(261)
	  , dPs         = __webpack_require__(334)
	  , enumBugKeys = __webpack_require__(284)
	  , IE_PROTO    = __webpack_require__(281)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(266)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(335).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(260)
	  , anObject = __webpack_require__(261)
	  , getKeys  = __webpack_require__(270);

	module.exports = __webpack_require__(264) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(255).document && document.documentElement;

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(260).f
	  , has = __webpack_require__(272)
	  , TAG = __webpack_require__(337)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(282)('wks')
	  , uid        = __webpack_require__(283)
	  , Symbol     = __webpack_require__(255).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(272)
	  , toObject    = __webpack_require__(287)
	  , IE_PROTO    = __webpack_require__(281)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(340);
	var global        = __webpack_require__(255)
	  , hide          = __webpack_require__(259)
	  , Iterators     = __webpack_require__(331)
	  , TO_STRING_TAG = __webpack_require__(337)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(341)
	  , step             = __webpack_require__(342)
	  , Iterators        = __webpack_require__(331)
	  , toIObject        = __webpack_require__(273);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(328)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },

/***/ 341:
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },

/***/ 342:
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(329)
	  , global             = __webpack_require__(255)
	  , ctx                = __webpack_require__(257)
	  , classof            = __webpack_require__(344)
	  , $export            = __webpack_require__(254)
	  , isObject           = __webpack_require__(262)
	  , anObject           = __webpack_require__(261)
	  , aFunction          = __webpack_require__(258)
	  , anInstance         = __webpack_require__(345)
	  , forOf              = __webpack_require__(346)
	  , setProto           = __webpack_require__(350).set
	  , speciesConstructor = __webpack_require__(352)
	  , task               = __webpack_require__(353).set
	  , microtask          = __webpack_require__(355)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(337)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(356)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(336)($Promise, PROMISE);
	__webpack_require__(357)(PROMISE);
	Wrapper = __webpack_require__(256)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(358)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(275)
	  , TAG = __webpack_require__(337)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },

/***/ 345:
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(257)
	  , call        = __webpack_require__(347)
	  , isArrayIter = __webpack_require__(348)
	  , anObject    = __webpack_require__(261)
	  , toLength    = __webpack_require__(278)
	  , getIterFn   = __webpack_require__(349);
	module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(261);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(331)
	  , ITERATOR   = __webpack_require__(337)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(344)
	  , ITERATOR  = __webpack_require__(337)('iterator')
	  , Iterators = __webpack_require__(331);
	module.exports = __webpack_require__(256).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(262)
	  , anObject = __webpack_require__(261);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(257)(Function.call, __webpack_require__(351).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(286)
	  , createDesc     = __webpack_require__(268)
	  , toIObject      = __webpack_require__(273)
	  , toPrimitive    = __webpack_require__(267)
	  , has            = __webpack_require__(272)
	  , IE8_DOM_DEFINE = __webpack_require__(263)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(264) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(261)
	  , aFunction = __webpack_require__(258)
	  , SPECIES   = __webpack_require__(337)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(257)
	  , invoke             = __webpack_require__(354)
	  , html               = __webpack_require__(335)
	  , cel                = __webpack_require__(266)
	  , global             = __webpack_require__(255)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(275)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },

/***/ 354:
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(255)
	  , macrotask = __webpack_require__(353).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(275)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(259);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(255)
	  , core        = __webpack_require__(256)
	  , dP          = __webpack_require__(260)
	  , DESCRIPTORS = __webpack_require__(264)
	  , SPECIES     = __webpack_require__(337)('species');

	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(337)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Counter = __webpack_require__(360);

	var _Counter2 = _interopRequireDefault(_Counter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Counter2.default;

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Counter = undefined;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Counter = __webpack_require__(361);

	var _Counter2 = _interopRequireDefault(_Counter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// FlowType annotations
	var Counter = exports.Counter = function Counter(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'h2',
	      { className: _Counter2.default.counterContainer },
	      'Counter:',
	      ' ',
	      _react2.default.createElement(
	        'span',
	        { className: _Counter2.default['counter--green'] },
	        props.counter
	      )
	    ),
	    _react2.default.createElement(
	      'button',
	      { className: 'btn btn-default', onClick: props.increment },
	      'Increment'
	    ),
	    ' ',
	    _react2.default.createElement(
	      'button',
	      { className: 'btn btn-default', onClick: props.doubleAsync },
	      'Double (Async)'
	    )
	  );
	};

	Counter.propTypes = {
	  counter: _react2.default.PropTypes.number.isRequired,
	  doubleAsync: _react2.default.PropTypes.func.isRequired,
	  increment: _react2.default.PropTypes.func.isRequired
	};

	exports.default = Counter;

/***/ },

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(362);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(306)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(362, function() {
				var newContent = __webpack_require__(362);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(305)();
	// imports


	// module
	exports.push([module.id, ".Counter__counter___8Lvk1{font-weight:700}.Counter__counter--green___30k-8{color:#19c819}.Counter__counterContainer___1Ev3K{margin:1em auto}", "", {"version":3,"sources":["/./src/components/src/components/Counter/Counter.scss"],"names":[],"mappings":"AAAA,0BACE,eAAkB,CACnB,iCAGmB,aACR,CACX,mCAGC,eAAiB,CAClB","file":"Counter.scss","sourcesContent":[".counter {\n  font-weight: bold;\n}\n\n.counter--green {\n  composes: counter;\n  color: rgb(25,200,25);\n}\n\n.counterContainer {\n  margin: 1em auto;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"counter": "Counter__counter___8Lvk1",
		"counter--green": "Counter__counter--green___30k-8 Counter__counter___8Lvk1",
		"counterContainer": "Counter__counterContainer___1Ev3K"
	};

/***/ }

});
//# sourceMappingURL=2.2.5619cfc386cd700388f4.js.map
