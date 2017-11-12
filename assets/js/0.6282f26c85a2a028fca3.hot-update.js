webpackHotUpdate(0,{

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import 'flag-icon-css/css/flag-icon.css';


var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoRouter = __webpack_require__(9);

var _infernoMobx = __webpack_require__(6);

var _createMemoryHistory = __webpack_require__(33);

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _axios = __webpack_require__(13);

var _axios2 = _interopRequireDefault(_axios);

var _viewer = __webpack_require__(67);

var _viewer2 = _interopRequireDefault(_viewer);

var _ViewerState = __webpack_require__(74);

var _ViewerState2 = _interopRequireDefault(_ViewerState);

var _viewer3 = __webpack_require__(75);

var _viewer4 = _interopRequireDefault(_viewer3);

var _noop = __webpack_require__(59);

var _noop2 = _interopRequireDefault(_noop);

__webpack_require__(97);

__webpack_require__(62);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.NODE_ENV !== 'production') {
  __webpack_require__(63);
}

var context = (0, _viewer2.default)(new _ViewerState2.default(window.__STATE));
var history = (0, _createMemoryHistory2.default)();

var createVNode = _inferno2.default.createVNode;
_inferno2.default.render(createVNode(16, _infernoMobx.Provider, null, null, _extends({}, context, {
  children: createVNode(16, _infernoRouter.Router, null, null, {
    'history': history,
    children: _viewer4.default
  })
})), document.getElementById('root'));

// Twitch callbacks

window.__onAuthorized = function (twitchAuth) {
  _axios2.default.defaults.headers.common['Authorization'] = 'Bearer ' + twitchAuth.token;
  context.state.twitchAuth = twitchAuth;
  if (context.state.twitchContext) init();
};

window.__onContext = function (twitchContext) {
  context.state.twitchContext = twitchContext;
  if (context.state.twitchAuth) init();
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ })

})