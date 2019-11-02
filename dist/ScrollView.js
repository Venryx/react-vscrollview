(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return ScrollView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_vextensions__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/*import {E} from "../../../Frame/General/Globals_Free";
import {BaseComponent, Div, FindDOM, FindDOM_, Classes} from "../../../Frame/General/ReactGlobals";
import {BufferAction} from "../../../Frame/General/Timers";*/





 //declare var $;
//var $ = (window as any).$;

var Div =
/*#__PURE__*/
function (_Component) {
  _inherits(Div, _Component);

  function Div() {
    _classCallCheck(this, Div);

    return _possibleConstructorReturn(this, _getPrototypeOf(Div).apply(this, arguments));
  }

  _createClass(Div, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.shouldUpdate) return this.props.shouldUpdate(nextProps, nextState);
      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          shouldUpdate = _a.shouldUpdate,
          rest = __rest(_a, ["shouldUpdate"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, rest));
    }
  }]);

  return Div;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var inFirefox = navigator.userAgent.includes("Firefox"); // main
// ==========

var styles = {
  root: {
    position: "relative",
    display: "flex",

    /*flexDirection: "column",*/
    overflow: "hidden"
  },
  root_nonFlex: {
    height: "100%"
  },
  content: {
    flex: 1,
    overflow: "auto",
    overflowScrolling: "touch"
  },
  content_nonFlex: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  //content_draggable: {cursor: "grab -webkit-grab -moz-grab"},
  //content_dragging: {cursor: "-webkit-grabbing"}, // implemented in <style> tag instead, due to <Div> not being re-rendered (intentionally)
  scrollBar: {
    backgroundColor: "rgba(255,255,255,.3)",
    borderRadius: 5
  },
  scrollBar_h: {
    position: "absolute",
    boxSizing: "border-box",
    zIndex: 10,
    height: 8,
    bottom: 0
  },
  scrollBar_v: {
    position: "absolute",
    boxSizing: "border-box",
    zIndex: 10,
    width: 8,
    right: 0
  },
  scrollBar_active: {
    backgroundColor: "rgba(255,255,255,.7)"
  },
  scrollTrack: {
    position: "absolute",
    pointerEvents: "none"
  },
  scrollTrack_h: {
    left: 0,
    right: 0,
    bottom: 0,
    height: 8
  },
  scrollTrack_v: {
    right: 0,
    top: 0,
    bottom: 0,
    width: 8
  }
};
var ScrollView =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(ScrollView, _BaseComponent);

  function ScrollView(props) {
    var _this;

    _classCallCheck(this, ScrollView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollView).call(this, props));
    _this.propsJustChanged = false;
    _this.sizeJustChanged = false;

    _this.UpdateSize = function () {
      var container = Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["GetDOM"])(_assertThisInitialized(_this));
      var content = Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["GetDOM"])(_this.content);
      if (container == null || content == null) return;
      /*var containerWidth = container.offsetWidth;
      var containerHeight = container.offsetHeight;*/

      var containerWidth = container.clientWidth;
      var containerHeight = container.clientHeight;
      /*var contentWidth = this.hScrollableDOM.scrollWidth;
      var contentHeight = this.vScrollableDOM.scrollHeight;*/

      var contentWidth = content.scrollWidth + parseInt(content.style.marginRight || "0"); // include margin

      var contentHeight = content.scrollHeight + parseInt(content.style.marginBottom || "0"); // include margin
      //Log(`Width: ${contentWidth}/${containerWidth}, Height: ${contentHeight}/${containerHeight}`);

      if (containerWidth != _this.state.containerWidth || containerHeight != _this.state.containerHeight || contentWidth != _this.state.contentWidth || contentHeight != _this.state.contentHeight) {
        _this.sizeJustChanged = true;

        _this.SetState({
          containerWidth: containerWidth,
          containerHeight: containerHeight,
          contentWidth: contentWidth,
          contentHeight: contentHeight,
          scrollH_active: contentWidth > containerWidth,
          scrollV_active: contentHeight > containerHeight
        });
      }
    };

    _this.HandleScroll = function (e) {
      // if not user-initiated event, ignore
      //if (e.type != "DOMMouseScroll" && e.type != "keyup" && e.type != "mousewheel" && e.type != "mousemove") return;
      //e.stopPropagation();
      // maybe temp; for performance, when used in LogEntriesUI
      if (_this.props.bufferScrollEventsBy) Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["BufferAction"])("ScrollView_HandleScroll", _this.props.bufferScrollEventsBy, _this.UpdateScrolls);else _this.UpdateScrolls();
    }; // #maybe temp; for performance, when used in LogEntriesUI

    /*UpdateSizeAndScrolls() {
        this.StartSetStateCluster();
        this.UpdateSize();
        this.UpdateScrolls();
        this.EndSetStateCluster();
    }*/


    _this.OnContentMouseDown = function (e) {
      var _this$props = _this.props,
          backgroundDrag = _this$props.backgroundDrag,
          backgroundDragMatchFunc = _this$props.backgroundDragMatchFunc;
      if (!backgroundDrag) return;

      backgroundDragMatchFunc = backgroundDragMatchFunc || function (a) {
        var nodePlusParents = [a];

        while (nodePlusParents[nodePlusParents.length - 1].parentNode instanceof Element) {
          nodePlusParents.push(nodePlusParents[nodePlusParents.length - 1].parentNode);
        }

        var firstScrollViewParent = nodePlusParents.find(function (b) {
          return b.className.split(" ").indexOf("ScrollView") != -1;
        });
        if (firstScrollViewParent == null || firstScrollViewParent[0] != Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["GetDOM"])(_assertThisInitialized(_this))) return false;
        return a.className.split(" ").indexOf("content") != -1 || Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["GetDOM"])(_this.content) && a == Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["GetDOM"])(_this.content); // || a == this.state.svgRoot;
      };

      if (!backgroundDragMatchFunc(e.target)) return;
      if (e.button != 0) return;

      _this.StartScrolling(e);

      _this.props.onMouseDown && _this.props.onMouseDown(e);
    };

    _this.OnScrollbarMouseDown = function (e) {
      e.preventDefault();

      _this.StartScrolling(e);
    };

    _this.OnMouseMove = function (e) {
      var _this$state = _this.state,
          scrollOp_bar = _this$state.scrollOp_bar,
          containerWidth = _this$state.containerWidth,
          containerHeight = _this$state.containerHeight,
          contentWidth = _this$state.contentWidth,
          contentHeight = _this$state.contentHeight;
      if (!scrollOp_bar) return;
      var scroll_mousePosDif = {
        x: e.pageX - _this.scroll_startMousePos.x,
        y: e.pageY - _this.scroll_startMousePos.y
      };

      if (scrollOp_bar.classList && scrollOp_bar.classList.contains("horizontal")) {
        var scrollPixelsPerScrollbarPixels = contentWidth / containerWidth;
        _this.hScrollableDOM.scrollLeft = _this.scroll_startScrollPos.x + scroll_mousePosDif.x * scrollPixelsPerScrollbarPixels;
      } else if (scrollOp_bar.classList && scrollOp_bar.classList.contains("vertical")) {
        var _scrollPixelsPerScrollbarPixels = contentHeight / containerHeight;

        _this.vScrollableDOM.scrollTop = _this.scroll_startScrollPos.y + scroll_mousePosDif.y * _scrollPixelsPerScrollbarPixels;
      } else {
        // if left-click dragging on background
        var _scrollPixelsPerScrollbarPixels2 = 1;
        _this.hScrollableDOM.scrollLeft = _this.scroll_startScrollPos.x - scroll_mousePosDif.x * _scrollPixelsPerScrollbarPixels2;
        _this.vScrollableDOM.scrollTop = _this.scroll_startScrollPos.y - scroll_mousePosDif.y * _scrollPixelsPerScrollbarPixels2;
      }
    };

    _this.OnMouseUp = function (e) {
      if (!_this.state.scrollOp_bar) return;

      _this.SetState({
        scrollOp_bar: null
      });

      _this.OnScrollEnd();
    };

    _this.OnTouchEnd = function () {
      _this.OnScrollEnd();
    };

    _this.OnScrollEnd = function () {
      var onScrollEnd = _this.props.onScrollEnd;

      if (onScrollEnd) {
        //let content = FindDOM(this.content);
        var scrollPos = {
          x: _this.hScrollableDOM.scrollLeft,
          y: _this.vScrollableDOM.scrollTop
        };
        onScrollEnd(scrollPos);
      }
    };

    _this.state = {
      containerWidth: 0,
      contentWidth: 0,
      scrollH_active: false,
      //scrollH_pos: this.props.scrollH_pos,
      containerHeight: 0,
      contentHeight: 0,
      scrollV_active: false
    };
    return _this;
  } //_lastState = {} as any; // to fix edge case, for when using "marginRight: -17" to hide scroll-bar


  _createClass(ScrollView, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _a = this.props,
          backgroundDrag = _a.backgroundDrag,
          backgroundDragMatchFunc = _a.backgroundDragMatchFunc,
          bufferScrollEventsBy = _a.bufferScrollEventsBy,
          scrollH_pos = _a.scrollH_pos,
          scrollV_pos = _a.scrollV_pos,
          className = _a.className,
          style = _a.style,
          contentStyle = _a.contentStyle,
          scrollHBarStyle = _a.scrollHBarStyle,
          scrollVBarStyle = _a.scrollVBarStyle,
          flex = _a.flex,
          onMouseDown = _a.onMouseDown,
          onClick = _a.onClick,
          onScrollEnd = _a.onScrollEnd,
          children = _a.children,
          rest = __rest(_a, ["backgroundDrag", "backgroundDragMatchFunc", "bufferScrollEventsBy", "scrollH_pos", "scrollV_pos", "className", "style", "contentStyle", "scrollHBarStyle", "scrollVBarStyle", "flex", "onMouseDown", "onClick", "onScrollEnd", "children"]);

      children = children instanceof Array ? children : [children];
      var _this$state2 = this.state,
          containerWidth = _this$state2.containerWidth,
          containerHeight = _this$state2.containerHeight,
          contentWidth = _this$state2.contentWidth,
          contentHeight = _this$state2.contentHeight,
          scrollH_active = _this$state2.scrollH_active,
          scrollH_pos = _this$state2.scrollH_pos,
          scrollV_active = _this$state2.scrollV_active,
          scrollV_pos = _this$state2.scrollV_pos,
          scrollOp_bar = _this$state2.scrollOp_bar; //let scrollbarVisibilityChanged = scrollH_active != this._lastState.scrollH_active || scrollV_active != this._lastState.scrollV_active;

      /*let scrollbarVisibilityChanged = containerWidth != this._lastState.containerWidth || containerHeight != this._lastState.containerHeight
          || contentWidth != this._lastState.contentWidth || contentHeight != this._lastState.contentHeight;
      this._lastState = this.state;*/
      //console.log(`Rendering... ${this.propsJustChanged} ${this.sizeJustChanged}`);

      var classes = ["ScrollView", backgroundDrag && "draggable", scrollOp_bar && "scrollActive", className && className];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, rest, {
        className: classes.filter(function (a) {
          return a;
        }).join(" "),
        style: Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["E"])(styles.root, !flex && styles.root_nonFlex, style)
      }), scrollH_active && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "scrollTrack horizontal",
        style: Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["E"])(styles.scrollTrack, styles.scrollTrack_h)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: function ref(c) {
          return _this2.scrollHBar = c;
        },
        className: "scrollBar horizontal",
        onMouseDown: this.OnScrollbarMouseDown,
        onMouseOver: function onMouseOver() {
          return _this2.SetState({
            scrollHBar_hovered: true
          });
        },
        onMouseOut: function onMouseOut() {
          return _this2.SetState({
            scrollHBar_hovered: false
          });
        },
        style: Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["E"])(styles.scrollBar, styles.scrollBar_h, (this.state.scrollHBar_hovered || scrollOp_bar && scrollOp_bar == this.scrollHBar) && styles.scrollBar_active, {
          width: "".concat(containerWidth / contentWidth * 100, "%"),
          left: scrollH_pos / contentWidth * 100 + "%",
          pointerEvents: "all"
        }, scrollHBarStyle)
      })), scrollV_active && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "scrollTrack vertical",
        style: Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["E"])(styles.scrollTrack, styles.scrollTrack_v)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: function ref(c) {
          return _this2.scrollVBar = c;
        },
        className: "scrollBar vertical",
        onMouseDown: this.OnScrollbarMouseDown,
        onMouseOver: function onMouseOver() {
          return _this2.SetState({
            scrollVBar_hovered: true
          });
        },
        onMouseOut: function onMouseOut() {
          return _this2.SetState({
            scrollVBar_hovered: false
          });
        },
        style: Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["E"])(styles.scrollBar, styles.scrollBar_v, (this.state.scrollVBar_hovered || scrollOp_bar && scrollOp_bar == this.scrollVBar) && styles.scrollBar_active, {
          height: "".concat(containerHeight / contentHeight * 100, "%"),
          top: scrollV_pos / contentHeight * 100 + "%",
          pointerEvents: "all"
        }, scrollVBarStyle)
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n\t\t\t\t.hideScrollbar::-webkit-scrollbar { width: 0px; height: 0px; background: transparent; }\n\t\t\t\t.ScrollView.draggable > .content { cursor: grab; cursor: -webkit-grab; cursor: -moz-grab; }\n\t\t\t\t.ScrollView.draggable.scrollActive > .content { cursor: grabbing !important; cursor: -webkit-grabbing !important; cursor: -moz-grabbing !important; }\n\t\t\t\t"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
        ref: function ref(c) {
          return _this2.content = c;
        },
        className: "content hideScrollbar",
        onScroll: this.HandleScroll,
        onMouseDown: this.OnContentMouseDown,
        onTouchEnd: this.OnTouchEnd,
        onClick: onClick,
        style: Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["E"])(styles.content,
        /*backgroundDrag && styles.content_draggable,*/

        /*scrollOp_bar && styles.content_dragging,*/
        !flex && styles.content_nonFlex, inFirefox && scrollH_active && {
          /*paddingBottom: GetHScrollBarHeight(),*/
          marginBottom: -Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["GetHScrollBarHeight"])()
        }, inFirefox && scrollV_active && {
          /*paddingRight: GetVScrollBarWidth(),*/
          marginRight: -Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["GetVScrollBarWidth"])()
        }, contentStyle),
        shouldUpdate: function shouldUpdate() {
          return _this2.PropsJustChanged || inFirefox && _this2.SizeJustChanged;
        }
      }, children));
    }
  }, {
    key: "ComponentDidMount",
    value: function ComponentDidMount() {
      window.addEventListener("resize", this.UpdateSize);
      document.addEventListener("mousemove", this.OnMouseMove);
      document.addEventListener("mouseup", this.OnMouseUp); //this.UpdateSize();

      this.LoadScroll();
      this.hScrollableDOM = this.hScrollableDOM || Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["GetDOM"])(this.content);
      this.vScrollableDOM = this.vScrollableDOM || Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["GetDOM"])(this.content);
    }
  }, {
    key: "ComponentDidUpdate",
    value: function ComponentDidUpdate() {
      if (!this.propsJustChanged) return; // if was just a scroll-update, ignore

      this.LoadScroll();
    }
  }, {
    key: "LoadScroll",
    value: function LoadScroll() {
      if (!this.state.scrollH_pos && !this.state.scrollV_pos) return;
      this.hScrollableDOM.scrollLeft = this.state.scrollH_pos;
      this.vScrollableDOM.scrollTop = this.state.scrollV_pos;
    }
  }, {
    key: "PostRender",
    value: function PostRender(source) {
      //if (FindDOM(this)) {
      Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["OnVisible"])(Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["GetDOM"])(this), this.UpdateSize, true); //FindDOM_(this).OnVisible(this.UpdateSize, true, true);

      /*if (firstRender)
          FindDOM_(this).OnVisible(this.LoadScroll, true, true);*/
      // onTouchEndCapture doesn't work consistently, so use native event

      /*FindDOM(this.content).ontouchend = ()=>(console.log("end"), this.OnTouchEnd());
      FindDOM(this.content).ontouchcancel = ()=>(console.log("cancel"), this.OnTouchEnd());
      FindDOM(this.content).ontouchmove = ()=>{console.log("move")};
      FindDOM(this.content).ontouchstart = ()=>{console.log("start")};*/

      if (source == react_vextensions__WEBPACK_IMPORTED_MODULE_2__["RenderSource"].Mount) {
        this.SetState({
          "scrollH_pos": this.props.scrollH_pos,
          "scrollV_pos": this.props.scrollV_pos
        });
      }
    } // for some reason, this gets called even if not really unmounting (or... I don't see why it'd be unmounting, anyway)

  }, {
    key: "ComponentWillUnmount",
    value: function ComponentWillUnmount() {
      window.removeEventListener("resize", this.UpdateSize);
      document.removeEventListener("mousemove", this.OnMouseMove);
      document.removeEventListener("mouseup", this.OnMouseUp);
    }
  }, {
    key: "ComponentWillReceiveProps",
    value: function ComponentWillReceiveProps(nextProps) {
      var _this$SetState;

      this.SetState((_this$SetState = {}, _defineProperty(_this$SetState, nextProps.scrollH_pos != null ? "scrollH_pos" : "na", nextProps.scrollH_pos), _defineProperty(_this$SetState, nextProps.scrollV_pos != null ? "scrollV_pos" : "na", nextProps.scrollV_pos), _this$SetState)); // when updating children, we should remeasure the heights to decide whether to toggle scroll enabledness
      // todo: in the future, have this run in PostRender() or something, as I think setTimeout is not guaranteed to run after the UI is updated 

      setTimeout(this.UpdateSize);
      this.propsJustChanged = true;
    }
  }, {
    key: "UpdateScrolls",
    value: function UpdateScrolls() {
      //var contentUI = FindDOM(this.content);
      var scrollH_pos = this.hScrollableDOM.scrollLeft;
      var scrollV_pos = this.vScrollableDOM.scrollTop;

      if (scrollH_pos != this.state.scrollH_pos || scrollV_pos != this.state.scrollV_pos) {
        this.SetState({
          scrollH_pos: scrollH_pos,
          scrollV_pos: scrollV_pos
        }); //this.props.onScroll && this.props.onScroll({x: scrollH_pos, y: scrollV_pos});

        this.UpdateSize(); // update size info (if changed)
      }
    }
  }, {
    key: "StartScrolling",
    value: function StartScrolling(e) {
      //this.updateChildren = false;
      this.SetState({
        scrollOp_bar: e.target
      });
      this.scroll_startMousePos = {
        x: e.pageX,
        y: e.pageY
      };
      this.scroll_startScrollPos = {
        x: this.hScrollableDOM.scrollLeft,
        y: this.vScrollableDOM.scrollTop
      };
    } // for external use

  }, {
    key: "GetScroll",
    value: function GetScroll() {
      return {
        x: this.state.scrollH_pos,
        y: this.state.scrollV_pos
      };
    } // alternative to using "scrollH_pos" and "scrollV_pos" props

  }, {
    key: "SetScroll",
    value: function SetScroll(scrollPos) {
      //this.setState({scrollH_pos: scrollPos.x, scrollV_pos: scrollPos.y}, ()=>this.LoadScroll());
      //var content = FindDOM(this.content);
      this.hScrollableDOM.scrollLeft = scrollPos.x;
      this.vScrollableDOM.scrollTop = scrollPos.y;
    }
  }, {
    key: "ScrollBy",
    value: function ScrollBy(scrollPosOffset) {
      //this.setState({scrollH_pos: this.GetScroll().x + scrollPosOffset.x, scrollV_pos: this.GetScroll().y + scrollPosOffset.y}, ()=>this.LoadScroll());
      //var content = FindDOM(this.content);
      this.hScrollableDOM.scrollLeft += scrollPosOffset.x;
      this.vScrollableDOM.scrollTop += scrollPosOffset.y; //this.setState({scrollH_pos: content.scrollLeft, scrollV_pos: content.scrollTop}, ()=>this.LoadScroll());
    }
  }, {
    key: "PropsJustChanged",
    get: function get() {
      var result = this.propsJustChanged;
      this.propsJustChanged = false;
      return result;
    }
  }, {
    key: "SizeJustChanged",
    get: function get() {
      var result = this.sizeJustChanged;
      this.sizeJustChanged = false;
      return result;
    }
  }]);

  return ScrollView;
}(react_vextensions__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);
ScrollView.defaultProps = {
  flex: true
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return Log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assert", function() { return Assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDOM", function() { return GetDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferAction", function() { return BufferAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnVisible", function() { return OnVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetScrollBarSizes", function() { return GetScrollBarSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetHScrollBarHeight", function() { return GetHScrollBarHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetVScrollBarWidth", function() { return GetVScrollBarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasScrollBar", function() { return HasScrollBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasVScrollBar", function() { return HasVScrollBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasHScrollBar", function() { return HasHScrollBar; });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
 //declare var $;
//var $ = (window as any).$;

function Log(message) {
  var _console;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  (_console = console).log.apply(_console, [message].concat(args));
}
function Assert(condition, message) {
  if (condition) return; //console.log(`Assert failed) ${message}\n\nStackTrace) ${new Error().stack}`);
  //console.error("Assert failed) " + message);

  throw new Error("Assert failed) " + message);
}
function GetDOM(comp) {
  //if (comp == null || comp["_reactInternalInstance"] == null || comp.mounted == false) return null;
  if (comp == null || comp["mounted"] == false) return null;
  return react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.findDOMNode(comp);
} //export function FindDOM_(comp) { return $(FindDOM(comp)); }

function E() {
  var result = {};

  for (var _len2 = arguments.length, objExtends = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    objExtends[_key2] = arguments[_key2];
  }

  for (var _i = 0, _objExtends = objExtends; _i < _objExtends.length; _i++) {
    var extend = _objExtends[_i];

    for (var key in extend) {
      result[key] = extend[key];
    }
  }

  return result; //return StyleSheet.create(result);
}
var funcLastScheduledRunTimes = {};
function BufferAction() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  if (args.length == 2) var minInterval = args[0],
      func = args[1],
      key = null;else if (args.length == 3) var key = args[0],
      minInterval = args[1],
      func = args[2];
  var lastScheduledRunTime = funcLastScheduledRunTimes[key] || 0;
  var now = new Date().getTime();
  var timeSinceLast = now - lastScheduledRunTime;

  if (timeSinceLast >= minInterval) {
    // if we've waited enough since last run, run right now
    func();
    funcLastScheduledRunTimes[key] = now;
  } else {
    var waitingForNextRunAlready = lastScheduledRunTime > now;

    if (!waitingForNextRunAlready) {
      // else, if we're not already waiting for next-run, schedule next-run
      var nextRunTime = lastScheduledRunTime + minInterval;
      var timeTillNextRun = nextRunTime - now; //WaitXThenRun(timeTillNextRun, func);

      setTimeout(func, timeTillNextRun);
      funcLastScheduledRunTimes[key] = nextRunTime;
    }
  }
}
function OnVisible(elem, callback, onlyRunOnce) {
  var triggerIfAlreadyVisible = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var options = {
    keyframes: "\n@keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }\n@-moz-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }\n@-webkit-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }\n@-ms-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }\n@-o-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }, "
  }; // if the keyframes aren't present, add them in a style element

  if (document.querySelector("style.domnodeappear-keyframes") == null) {
    var style = document.createElement("style");
    style.className = "domnodeappear-keyframes";
    style.innerHTML = options.keyframes;
    document.head.appendChild(style);
  } // add animation to selected element
  //$("head").append("<style class=\"" + options.stylesClass + "-animation\">" + options.styles + "</style>")


  var elIsVisible = !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length); // from jquery source

  if (triggerIfAlreadyVisible && elIsVisible) {
    callback();
    if (onlyRunOnce) // if we were only supposed to run once anyway, we're done already
      return;
  }

  Object.assign(elem.style, {
    animationName: "nodeInserted",
    animationDuration: "0.001s"
  }); // on animation start, execute the callback

  var handler = function handler(e) {
    var target = e.target; //if (e.originalEvent.animationName == "nodeInserted" && target.is(options.selector))
    //Log(e.target);

    if (e.animationName == "nodeInserted" && e.target == elem) {
      callback.call(target);

      if (onlyRunOnce) {
        Object.assign(elem.style, {
          animationName: "",
          animationDuration: ""
        });
        document.removeEventListener("animationstart", handler);
        document.removeEventListener("webkitAnimationStart", handler);
        document.removeEventListener("oanimationstart", handler);
        document.removeEventListener("MSAnimationStart", handler);
      }
    }
  };

  document.addEventListener("animationstart", handler);
  document.addEventListener("webkitAnimationStart", handler);
  document.addEventListener("oanimationstart", handler);
  document.addEventListener("MSAnimationStart", handler);
}
;

var _scrollBarSizes;

function GetScrollBarSizes() {
  if (!_scrollBarSizes) {
    /*let outer = $("<div style='visibility: hidden; position: absolute; left: -100px; top: -100px; height: 100px; overflow: scroll;'/>").appendTo("body");
    let heightWithScroll = $("<div>").css({height: "100%"}).appendTo(outer).outerHeight();
    outer.remove();
    _hScrollBarHeight = 100 - heightWithScroll;
    Log("HHeight:" + _hScrollBarHeight);
    //V._hScrollBarHeight = outer.children().height() - outer.children()[0].clientHeight;*/

    /*let container = $("<div style='visibility: hidden; position: absolute; top: -1000px; width: 100px; height: 100px; overflow: scroll;'/>").appendTo("body");
    _scrollBarSizes = {width: 100 - container[0].clientWidth, height: 100 - container[0].clientHeight};
    container.remove();*/
    var div = document.createElement("div");
    Object.assign(div.style, {
      position: "absolute",
      visibility: "hidden",
      overflow: "scroll",
      width: "100px",
      height: "100px"
    });
    document.body.appendChild(div); //_scrollBarSizes = {width: div.offsetWidth - div.clientWidth, height: div.offsetHeight - div.clientHeight};

    _scrollBarSizes = {
      width: 100 - div.clientWidth,
      height: 100 - div.clientHeight
    };
    div.remove();
  }

  return _scrollBarSizes;
}
function GetHScrollBarHeight() {
  return GetScrollBarSizes().height;
}
function GetVScrollBarWidth() {
  return GetScrollBarSizes().width;
}
function HasScrollBar(control) {
  return HasVScrollBar(control) || HasHScrollBar(control);
}
function HasVScrollBar(control) {
  return control[0].scrollHeight > control[0].clientHeight;
}
function HasHScrollBar(control) {
  return control[0].scrollWidth > control[0].clientWidth;
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-vextensions");

/***/ })
/******/ ]);
});