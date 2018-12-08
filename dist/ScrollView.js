(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["react"], root["react-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ScrollView = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAutobind = __webpack_require__(3);

	var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

	var _Utils = __webpack_require__(5);

	var _reactVextensions = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __rest = undefined && undefined.__rest || function (s, e) {
	    var t = {};
	    for (var p in s) {
	        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
	    }return t;
	};
	/*import {E} from "../../../Frame/General/Globals_Free";
	import {BaseComponent, Div, FindDOM, FindDOM_, Classes} from "../../../Frame/General/ReactGlobals";
	import {BufferAction} from "../../../Frame/General/Timers";*/

	//declare var $;
	//var $ = (window as any).$;
	var Div = function (_Component) {
	    _inherits(Div, _Component);

	    function Div() {
	        _classCallCheck(this, Div);

	        return _possibleConstructorReturn(this, (Div.__proto__ || Object.getPrototypeOf(Div)).apply(this, arguments));
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
	            return _react2.default.createElement("div", Object.assign({}, rest));
	        }
	    }]);

	    return Div;
	}(_react.Component);

	var inFirefox = navigator.userAgent.includes("Firefox");
	// main
	// ==========
	var styles = {
	    root: { position: "relative", display: "flex", /*flexDirection: "column",*/overflow: "hidden" },
	    root_nonFlex: { height: "100%" },
	    content: {
	        flex: 1,
	        overflow: "auto", overflowScrolling: "touch"
	    },
	    content_nonFlex: {
	        position: "absolute", left: 0, right: 0, top: 0, bottom: 0
	    },
	    //content_draggable: {cursor: "grab -webkit-grab -moz-grab"},
	    //content_dragging: {cursor: "-webkit-grabbing"}, // implemented in <style> tag instead, due to <Div> not being re-rendered (intentionally)
	    scrollBar: {
	        backgroundColor: "rgba(255,255,255,.3)",
	        borderRadius: 5
	    },
	    scrollBar_h: { position: "absolute", boxSizing: "border-box", zIndex: 10, height: 8, bottom: 0 },
	    scrollBar_v: { position: "absolute", boxSizing: "border-box", zIndex: 10, width: 8, right: 0 },
	    scrollBar_active: { backgroundColor: "rgba(255,255,255,.7)" },
	    scrollTrack: { position: "absolute", pointerEvents: "none" },
	    scrollTrack_h: { left: 0, right: 0, bottom: 0, height: 8 },
	    scrollTrack_v: { right: 0, top: 0, bottom: 0, width: 8 }
	};

	var ScrollView = exports.ScrollView = function (_BaseComponent) {
	    _inherits(ScrollView, _BaseComponent);

	    function ScrollView(props) {
	        _classCallCheck(this, ScrollView);

	        var _this2 = _possibleConstructorReturn(this, (ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).call(this, props));

	        _this2.propsJustChanged = false;
	        _this2.sizeJustChanged = false;
	        (0, _reactAutobind2.default)(_this2);
	        _this2.state = {
	            containerWidth: 0,
	            contentWidth: 0,
	            scrollH_active: false,
	            //scrollH_pos: this.props.scrollH_pos,
	            containerHeight: 0,
	            contentHeight: 0,
	            scrollV_active: false
	        };
	        return _this2;
	    }
	    //_lastState = {} as any; // to fix edge case, for when using "marginRight: -17" to hide scroll-bar


	    _createClass(ScrollView, [{
	        key: "render",
	        value: function render() {
	            var _this3 = this;

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
	            var _state = this.state,
	                containerWidth = _state.containerWidth,
	                containerHeight = _state.containerHeight,
	                contentWidth = _state.contentWidth,
	                contentHeight = _state.contentHeight,
	                scrollH_active = _state.scrollH_active,
	                scrollH_pos = _state.scrollH_pos,
	                scrollV_active = _state.scrollV_active,
	                scrollV_pos = _state.scrollV_pos,
	                scrollOp_bar = _state.scrollOp_bar;
	            //let scrollbarVisibilityChanged = scrollH_active != this._lastState.scrollH_active || scrollV_active != this._lastState.scrollV_active;
	            /*let scrollbarVisibilityChanged = containerWidth != this._lastState.containerWidth || containerHeight != this._lastState.containerHeight
	                || contentWidth != this._lastState.contentWidth || contentHeight != this._lastState.contentHeight;
	            this._lastState = this.state;*/
	            //console.log(`Rendering... ${this.propsJustChanged} ${this.sizeJustChanged}`);

	            var classes = ["ScrollView", backgroundDrag && "draggable", scrollOp_bar && "scrollActive", className && className];
	            return _react2.default.createElement("div", Object.assign({}, rest, { className: classes.filter(function (a) {
	                    return a;
	                }).join(" "), style: (0, _Utils.E)(styles.root, !flex && styles.root_nonFlex, style) }), scrollH_active && _react2.default.createElement("div", { className: "scrollTrack horizontal", style: (0, _Utils.E)(styles.scrollTrack, styles.scrollTrack_h) }, _react2.default.createElement("div", { ref: function ref(c) {
	                    return _this3.scrollHBar = c;
	                }, className: "scrollBar horizontal", onMouseDown: this.OnScrollbarMouseDown, onMouseOver: function onMouseOver() {
	                    return _this3.SetState({ scrollHBar_hovered: true });
	                }, onMouseOut: function onMouseOut() {
	                    return _this3.SetState({ scrollHBar_hovered: false });
	                }, style: (0, _Utils.E)(styles.scrollBar, styles.scrollBar_h, (this.state.scrollHBar_hovered || scrollOp_bar && scrollOp_bar == this.scrollHBar) && styles.scrollBar_active, { width: containerWidth / contentWidth * 100 + "%", left: scrollH_pos / contentWidth * 100 + "%", pointerEvents: "all" }, scrollHBarStyle) })), scrollV_active && _react2.default.createElement("div", { className: "scrollTrack vertical", style: (0, _Utils.E)(styles.scrollTrack, styles.scrollTrack_v) }, _react2.default.createElement("div", { ref: function ref(c) {
	                    return _this3.scrollVBar = c;
	                }, className: "scrollBar vertical", onMouseDown: this.OnScrollbarMouseDown, onMouseOver: function onMouseOver() {
	                    return _this3.SetState({ scrollVBar_hovered: true });
	                }, onMouseOut: function onMouseOut() {
	                    return _this3.SetState({ scrollVBar_hovered: false });
	                }, style: (0, _Utils.E)(styles.scrollBar, styles.scrollBar_v, (this.state.scrollVBar_hovered || scrollOp_bar && scrollOp_bar == this.scrollVBar) && styles.scrollBar_active, { height: containerHeight / contentHeight * 100 + "%", top: scrollV_pos / contentHeight * 100 + "%", pointerEvents: "all" }, scrollVBarStyle) })), _react2.default.createElement("style", null, "\n\t\t\t\t.hideScrollbar::-webkit-scrollbar { width: 0px; height: 0px; background: transparent; }\n\t\t\t\t.ScrollView.draggable > .content { cursor: grab; cursor: -webkit-grab; cursor: -moz-grab; }\n\t\t\t\t.ScrollView.draggable.scrollActive > .content { cursor: grabbing !important; cursor: -webkit-grabbing !important; cursor: -moz-grabbing !important; }\n\t\t\t\t"), _react2.default.createElement(Div, { ref: function ref(c) {
	                    return _this3.content = c;
	                }, className: "content hideScrollbar", onScroll: this.HandleScroll, onMouseDown: this.OnContentMouseDown, onTouchEnd: this.OnTouchEnd, onClick: onClick, style: (0, _Utils.E)(styles.content, /*backgroundDrag && styles.content_draggable,*/ /*scrollOp_bar && styles.content_dragging,*/!flex && styles.content_nonFlex, inFirefox && scrollH_active && { /*paddingBottom: GetHScrollBarHeight(),*/marginBottom: -(0, _Utils.GetHScrollBarHeight)() }, inFirefox && scrollV_active && { /*paddingRight: GetVScrollBarWidth(),*/marginRight: -(0, _Utils.GetVScrollBarWidth)() }, contentStyle), shouldUpdate: function shouldUpdate() {
	                    return _this3.PropsJustChanged || inFirefox && _this3.SizeJustChanged;
	                } }, children));
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            window.addEventListener("resize", this.UpdateSize);
	            document.addEventListener("mousemove", this.OnMouseMove);
	            document.addEventListener("mouseup", this.OnMouseUp);
	            //this.UpdateSize();
	            this.LoadScroll();
	            this.hScrollableDOM = this.hScrollableDOM || (0, _Utils.FindDOM)(this.content);
	            this.vScrollableDOM = this.vScrollableDOM || (0, _Utils.FindDOM)(this.content);
	        }
	    }, {
	        key: "componentDidUpdate",
	        value: function componentDidUpdate() {
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
	            (0, _Utils.OnVisible)((0, _Utils.FindDOM)(this), this.UpdateSize, true);
	            //FindDOM_(this).OnVisible(this.UpdateSize, true, true);
	            /*if (firstRender)
	                FindDOM_(this).OnVisible(this.LoadScroll, true, true);*/
	            // onTouchEndCapture doesn't work consistently, so use native event
	            /*FindDOM(this.content).ontouchend = ()=>(console.log("end"), this.OnTouchEnd());
	            FindDOM(this.content).ontouchcancel = ()=>(console.log("cancel"), this.OnTouchEnd());
	            FindDOM(this.content).ontouchmove = ()=>{console.log("move")};
	            FindDOM(this.content).ontouchstart = ()=>{console.log("start")};*/
	            if (source == _reactVextensions.RenderSource.Mount) {
	                this.SetState({
	                    "scrollH_pos": this.props.scrollH_pos,
	                    "scrollV_pos": this.props.scrollV_pos
	                });
	            }
	        }
	        // for some reason, this gets called even if not really unmounting (or... I don't see why it'd be unmounting, anyway)

	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            window.removeEventListener("resize", this.UpdateSize);
	            document.removeEventListener("mousemove", this.OnMouseMove);
	            document.removeEventListener("mouseup", this.OnMouseUp);
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            var _SetState;

	            this.SetState((_SetState = {}, _defineProperty(_SetState, nextProps.scrollH_pos != null ? "scrollH_pos" : "na", nextProps.scrollH_pos), _defineProperty(_SetState, nextProps.scrollV_pos != null ? "scrollV_pos" : "na", nextProps.scrollV_pos), _SetState));
	            // when updating children, we should remeasure the heights to decide whether to toggle scroll enabledness
	            // todo: in the future, have this run in PostRender() or something, as I think setTimeout is not guaranteed to run after the UI is updated 
	            setTimeout(this.UpdateSize);
	            this.propsJustChanged = true;
	        }
	    }, {
	        key: "UpdateSize",
	        value: function UpdateSize() {
	            var container = (0, _Utils.FindDOM)(this);
	            var content = (0, _Utils.FindDOM)(this.content);
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
	            if (containerWidth != this.state.containerWidth || containerHeight != this.state.containerHeight || contentWidth != this.state.contentWidth || contentHeight != this.state.contentHeight) {
	                this.sizeJustChanged = true;
	                this.SetState({
	                    containerWidth: containerWidth, containerHeight: containerHeight,
	                    contentWidth: contentWidth, contentHeight: contentHeight,
	                    scrollH_active: contentWidth > containerWidth,
	                    scrollV_active: contentHeight > containerHeight
	                });
	            }
	        }
	    }, {
	        key: "HandleScroll",
	        value: function HandleScroll(e) {
	            // if not user-initiated event, ignore
	            //if (e.type != "DOMMouseScroll" && e.type != "keyup" && e.type != "mousewheel" && e.type != "mousemove") return;
	            //e.stopPropagation();
	            // maybe temp; for performance, when used in LogEntriesUI
	            if (this.props.bufferScrollEventsBy) (0, _Utils.BufferAction)("ScrollView_HandleScroll", this.props.bufferScrollEventsBy, this.UpdateScrolls);else this.UpdateScrolls();
	        }
	    }, {
	        key: "UpdateScrolls",
	        value: function UpdateScrolls() {
	            //var contentUI = FindDOM(this.content);
	            var scrollH_pos = this.hScrollableDOM.scrollLeft;
	            var scrollV_pos = this.vScrollableDOM.scrollTop;
	            if (scrollH_pos != this.state.scrollH_pos || scrollV_pos != this.state.scrollV_pos) {
	                this.SetState({ scrollH_pos: scrollH_pos, scrollV_pos: scrollV_pos });
	                //this.props.onScroll && this.props.onScroll({x: scrollH_pos, y: scrollV_pos});
	                this.UpdateSize(); // update size info (if changed)
	            }
	        }
	        // #maybe temp; for performance, when used in LogEntriesUI
	        /*UpdateSizeAndScrolls() {
	            this.StartSetStateCluster();
	            this.UpdateSize();
	            this.UpdateScrolls();
	            this.EndSetStateCluster();
	        }*/

	    }, {
	        key: "OnContentMouseDown",
	        value: function OnContentMouseDown(e) {
	            var _this4 = this;

	            var _props = this.props,
	                backgroundDrag = _props.backgroundDrag,
	                backgroundDragMatchFunc = _props.backgroundDragMatchFunc;

	            if (!backgroundDrag) return;
	            backgroundDragMatchFunc = backgroundDragMatchFunc || function (a) {
	                var nodePlusParents = [a];
	                while (nodePlusParents[nodePlusParents.length - 1].parentNode instanceof Element) {
	                    nodePlusParents.push(nodePlusParents[nodePlusParents.length - 1].parentNode);
	                }var firstScrollViewParent = nodePlusParents.find(function (b) {
	                    return b.className.split(" ").indexOf("ScrollView") != -1;
	                });
	                if (firstScrollViewParent == null || firstScrollViewParent[0] != (0, _Utils.FindDOM)(_this4)) return false;
	                return a.className.split(" ").indexOf("content") != -1 || a == _this4.content; // || a == this.state.svgRoot;
	            };
	            if (!backgroundDragMatchFunc(e.target)) return;
	            if (e.button != 0) return;
	            this.StartScrolling(e);
	            this.props.onMouseDown && this.props.onMouseDown(e);
	        }
	    }, {
	        key: "OnScrollbarMouseDown",
	        value: function OnScrollbarMouseDown(e) {
	            e.preventDefault();
	            this.StartScrolling(e);
	        }
	    }, {
	        key: "StartScrolling",
	        value: function StartScrolling(e) {
	            //this.updateChildren = false;
	            this.SetState({ scrollOp_bar: e.target });
	            this.scroll_startMousePos = { x: e.pageX, y: e.pageY };
	            this.scroll_startScrollPos = { x: this.hScrollableDOM.scrollLeft, y: this.vScrollableDOM.scrollTop };
	        }
	    }, {
	        key: "OnMouseMove",
	        value: function OnMouseMove(e) {
	            var _state2 = this.state,
	                scrollOp_bar = _state2.scrollOp_bar,
	                containerWidth = _state2.containerWidth,
	                containerHeight = _state2.containerHeight,
	                contentWidth = _state2.contentWidth,
	                contentHeight = _state2.contentHeight;

	            if (!scrollOp_bar) return;
	            var scroll_mousePosDif = { x: e.pageX - this.scroll_startMousePos.x, y: e.pageY - this.scroll_startMousePos.y };
	            if (scrollOp_bar.classList && scrollOp_bar.classList.contains("horizontal")) {
	                var scrollPixelsPerScrollbarPixels = contentWidth / containerWidth;
	                this.hScrollableDOM.scrollLeft = this.scroll_startScrollPos.x + scroll_mousePosDif.x * scrollPixelsPerScrollbarPixels;
	            } else if (scrollOp_bar.classList && scrollOp_bar.classList.contains("vertical")) {
	                var _scrollPixelsPerScrollbarPixels = contentHeight / containerHeight;
	                this.vScrollableDOM.scrollTop = this.scroll_startScrollPos.y + scroll_mousePosDif.y * _scrollPixelsPerScrollbarPixels;
	            } else {
	                // if left-click dragging on background
	                var _scrollPixelsPerScrollbarPixels2 = 1;
	                this.hScrollableDOM.scrollLeft = this.scroll_startScrollPos.x - scroll_mousePosDif.x * _scrollPixelsPerScrollbarPixels2;
	                this.vScrollableDOM.scrollTop = this.scroll_startScrollPos.y - scroll_mousePosDif.y * _scrollPixelsPerScrollbarPixels2;
	            }
	        }
	    }, {
	        key: "OnMouseUp",
	        value: function OnMouseUp(e) {
	            if (!this.state.scrollOp_bar) return;
	            this.SetState({ scrollOp_bar: null });
	            this.OnScrollEnd();
	        }
	    }, {
	        key: "OnTouchEnd",
	        value: function OnTouchEnd() {
	            this.OnScrollEnd();
	        }
	    }, {
	        key: "OnScrollEnd",
	        value: function OnScrollEnd() {
	            var onScrollEnd = this.props.onScrollEnd;

	            if (onScrollEnd) {
	                //let content = FindDOM(this.content);
	                var scrollPos = { x: this.hScrollableDOM.scrollLeft, y: this.vScrollableDOM.scrollTop };
	                onScrollEnd(scrollPos);
	            }
	        }
	        // for external use

	    }, {
	        key: "GetScroll",
	        value: function GetScroll() {
	            return { x: this.state.scrollH_pos, y: this.state.scrollV_pos };
	        }
	        // alternative to using "scrollH_pos" and "scrollV_pos" props

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
	            this.vScrollableDOM.scrollTop += scrollPosOffset.y;
	            //this.setState({scrollH_pos: content.scrollLeft, scrollV_pos: content.scrollTop}, ()=>this.LoadScroll());
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
	}(_reactVextensions.BaseComponent);

	ScrollView.defaultProps = { flex: true };

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = autoBind;
	var wontBind = ['constructor', 'render', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];

	var toBind = [];

	function autoBind(context) {
	  if (context === undefined) {
	    console.error('Autobind error: No context provided.');
	    return;
	  }

	  var objPrototype = Object.getPrototypeOf(context);

	  if (arguments.length > 1) {
	    // If a list of methods to bind is provided, use it.
	    toBind = Array.prototype.slice.call(arguments, 1);
	  } else {
	    // If no list of methods to bind is provided, bind all available methods in class.
	    toBind = Object.getOwnPropertyNames(objPrototype);
	  }

	  toBind.forEach(function (method) {
	    var descriptor = Object.getOwnPropertyDescriptor(objPrototype, method);

	    if (descriptor === undefined) {
	      console.warn('Autobind: "' + method + '" method not found in class.');
	      return;
	    }

	    // Return if it's special case function or if not a function at all
	    if (wontBind.indexOf(method) !== -1 || typeof descriptor.value !== 'function') {
	      return;
	    }

	    Object.defineProperty(objPrototype, method, boundMethod(objPrototype, method, descriptor));
	  });
	}

	/**
	* From autobind-decorator (https://github.com/andreypopp/autobind-decorator/tree/master)
	* Return a descriptor removing the value and returning a getter
	* The getter will return a .bind version of the function
	* and memoize the result against a symbol on the instance
	*/
	function boundMethod(objPrototype, method, descriptor) {
	  var fn = descriptor.value;

	  return {
	    configurable: true,
	    get: function get() {
	      if (this === objPrototype || this.hasOwnProperty(method)) {
	        return fn;
	      }

	      var boundFn = fn.bind(this);
	      Object.defineProperty(this, method, {
	        value: boundFn,
	        configurable: true,
	        writable: true
	      });
	      return boundFn;
	    }
	  };
	}
	module.exports = exports['default'];


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Log = Log;
	exports.Assert = Assert;
	exports.FindDOM = FindDOM;
	exports.E = E;
	exports.BufferAction = BufferAction;
	exports.OnVisible = OnVisible;
	exports.GetScrollBarSizes = GetScrollBarSizes;
	exports.GetHScrollBarHeight = GetHScrollBarHeight;
	exports.GetVScrollBarWidth = GetVScrollBarWidth;
	exports.HasScrollBar = HasScrollBar;
	exports.HasVScrollBar = HasVScrollBar;
	exports.HasHScrollBar = HasHScrollBar;

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//declare var $;
	//var $ = (window as any).$;
	function Log(message) {
	    var _console;

	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	    }

	    (_console = console).log.apply(_console, [message].concat(args));
	}
	function Assert(condition, message) {
	    if (condition) return;
	    //console.log(`Assert failed) ${message}\n\nStackTrace) ${new Error().stack}`);
	    //console.error("Assert failed) " + message);
	    throw new Error("Assert failed) " + message);
	}
	function FindDOM(comp) {
	    if (comp == null || comp._reactInternalInstance == null) return null;
	    return _reactDom2.default.findDOMNode(comp);
	}
	//export function FindDOM_(comp) { return $(FindDOM(comp)); }
	function E() {
	    var result = {};

	    for (var _len2 = arguments.length, objExtends = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        objExtends[_key2] = arguments[_key2];
	    }

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = objExtends[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var extend = _step.value;

	            for (var key in extend) {
	                result[key] = extend[key];
	            }
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    return result;
	    //return StyleSheet.create(result);
	}
	var funcLastScheduledRunTimes = {};
	function BufferAction() {
	    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
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
	            var timeTillNextRun = nextRunTime - now;
	            //WaitXThenRun(timeTillNextRun, func);
	            setTimeout(func, timeTillNextRun);
	            funcLastScheduledRunTimes[key] = nextRunTime;
	        }
	    }
	}
	function OnVisible(elem, callback, onlyRunOnce) {
	    var triggerIfAlreadyVisible = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	    var options = {
	        keyframes: "\n@keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }\n@-moz-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }\n@-webkit-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }\n@-ms-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }\n@-o-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }, "
	    };
	    // if the keyframes aren't present, add them in a style element
	    if (document.querySelector("style.domnodeappear-keyframes") == null) {
	        var style = document.createElement("style");
	        style.className = "domnodeappear-keyframes";
	        style.innerHTML = options.keyframes;
	        document.head.appendChild(style);
	    }
	    // add animation to selected element
	    //$("head").append("<style class=\"" + options.stylesClass + "-animation\">" + options.styles + "</style>")
	    var elIsVisible = !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length); // from jquery source
	    if (triggerIfAlreadyVisible && elIsVisible) {
	        callback();
	        if (onlyRunOnce) // if we were only supposed to run once anyway, we're done already
	            return;
	    }
	    Object.assign(elem.style, { animationName: "nodeInserted", animationDuration: "0.001s" });
	    // on animation start, execute the callback
	    var handler = function handler(e) {
	        var target = e.target;
	        //if (e.originalEvent.animationName == "nodeInserted" && target.is(options.selector))
	        //Log(e.target);
	        if (e.animationName == "nodeInserted" && e.target == elem) {
	            callback.call(target);
	            if (onlyRunOnce) {
	                Object.assign(elem.style, { animationName: "", animationDuration: "" });
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
	var _scrollBarSizes = void 0;
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
	        Object.assign(div.style, { position: "absolute", visibility: "hidden", overflow: "scroll", width: "100px", height: "100px" });
	        document.body.appendChild(div);
	        //_scrollBarSizes = {width: div.offsetWidth - div.clientWidth, height: div.offsetHeight - div.clientHeight};
	        _scrollBarSizes = { width: 100 - div.clientWidth, height: 100 - div.clientHeight };
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
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("react-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function webpackUniversalModuleDefinition(root, factory) {
	  if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
	    var a = factory();
	    for (var i in a) {
	      ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' ? exports : root)[i] = a[i];
	    }
	  }
	})(window, function () {
	  return (/******/function (modules) {
	      // webpackBootstrap
	      /******/ // The module cache
	      /******/var installedModules = {};
	      /******/
	      /******/ // The require function
	      /******/function __webpack_require__(moduleId) {
	        /******/
	        /******/ // Check if module is in cache
	        /******/if (installedModules[moduleId]) {
	          /******/return installedModules[moduleId].exports;
	          /******/
	        }
	        /******/ // Create a new module (and put it into the cache)
	        /******/var module = installedModules[moduleId] = {
	          /******/i: moduleId,
	          /******/l: false,
	          /******/exports: {}
	          /******/ };
	        /******/
	        /******/ // Execute the module function
	        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	        /******/
	        /******/ // Flag the module as loaded
	        /******/module.l = true;
	        /******/
	        /******/ // Return the exports of the module
	        /******/return module.exports;
	        /******/
	      }
	      /******/
	      /******/
	      /******/ // expose the modules object (__webpack_modules__)
	      /******/__webpack_require__.m = modules;
	      /******/
	      /******/ // expose the module cache
	      /******/__webpack_require__.c = installedModules;
	      /******/
	      /******/ // define getter function for harmony exports
	      /******/__webpack_require__.d = function (exports, name, getter) {
	        /******/if (!__webpack_require__.o(exports, name)) {
	          /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
	          /******/
	        }
	        /******/
	      };
	      /******/
	      /******/ // define __esModule on exports
	      /******/__webpack_require__.r = function (exports) {
	        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
	          /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	          /******/
	        }
	        /******/Object.defineProperty(exports, '__esModule', { value: true });
	        /******/
	      };
	      /******/
	      /******/ // create a fake namespace object
	      /******/ // mode & 1: value is a module id, require it
	      /******/ // mode & 2: merge all properties of value into the ns
	      /******/ // mode & 4: return value when already ns object
	      /******/ // mode & 8|1: behave like require
	      /******/__webpack_require__.t = function (value, mode) {
	        /******/if (mode & 1) value = __webpack_require__(value);
	        /******/if (mode & 8) return value;
	        /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof2(value)) === 'object' && value && value.__esModule) return value;
	        /******/var ns = Object.create(null);
	        /******/__webpack_require__.r(ns);
	        /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
	        /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
	          __webpack_require__.d(ns, key, function (key) {
	            return value[key];
	          }.bind(null, key));
	        } /******/return ns;
	        /******/
	      };
	      /******/
	      /******/ // getDefaultExport function for compatibility with non-harmony modules
	      /******/__webpack_require__.n = function (module) {
	        /******/var getter = module && module.__esModule ?
	        /******/function getDefault() {
	          return module['default'];
	        } :
	        /******/function getModuleExports() {
	          return module;
	        };
	        /******/__webpack_require__.d(getter, 'a', getter);
	        /******/return getter;
	        /******/
	      };
	      /******/
	      /******/ // Object.prototype.hasOwnProperty.call
	      /******/__webpack_require__.o = function (object, property) {
	        return Object.prototype.hasOwnProperty.call(object, property);
	      };
	      /******/
	      /******/ // __webpack_public_path__
	      /******/__webpack_require__.p = "http://localhost:8080/";
	      /******/
	      /******/
	      /******/ // Load entry module and return exports
	      /******/return __webpack_require__(__webpack_require__.s = 0);
	      /******/
	    }(
	    /************************************************************************/
	    /******/[
	    /* 0 */
	    /***/function (module, exports, __webpack_require__) {

	      module.exports = __webpack_require__(1);

	      /***/
	    },
	    /* 1 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";

	      Object.defineProperty(exports, "__esModule", {
	        value: true
	      });

	      var _General = __webpack_require__(2);

	      Object.keys(_General).forEach(function (key) {
	        if (key === "default" || key === "__esModule") return;
	        Object.defineProperty(exports, key, {
	          enumerable: true,
	          get: function get() {
	            return _General[key];
	          }
	        });
	      });

	      var _PseudoStyleHelper = __webpack_require__(11);

	      Object.keys(_PseudoStyleHelper).forEach(function (key) {
	        if (key === "default" || key === "__esModule") return;
	        Object.defineProperty(exports, key, {
	          enumerable: true,
	          get: function get() {
	            return _PseudoStyleHelper[key];
	          }
	        });
	      });

	      var _BaseComponent = __webpack_require__(8);

	      Object.keys(_BaseComponent).forEach(function (key) {
	        if (key === "default" || key === "__esModule") return;
	        Object.defineProperty(exports, key, {
	          enumerable: true,
	          get: function get() {
	            return _BaseComponent[key];
	          }
	        });
	      });

	      /***/
	    },
	    /* 2 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";

	      Object.defineProperty(exports, "__esModule", {
	        value: true
	      });
	      exports.basePropFullKeys = exports.ShallowCompare = undefined;
	      exports.E = E;
	      exports.ToJSON = ToJSON;
	      exports.FromJSON = FromJSON;
	      exports.AsMultiline = AsMultiline;
	      exports.RemoveDuplicates = RemoveDuplicates;
	      exports.GetDOM = GetDOM;
	      exports.FindReact = FindReact;
	      exports.GetInnerComp = GetInnerComp;
	      exports.BasicStyles = BasicStyles;
	      exports.ApplyBasicStyles = ApplyBasicStyles;
	      exports.SimpleShouldUpdate = SimpleShouldUpdate;
	      exports.SimpleShouldUpdate_Overridable = SimpleShouldUpdate_Overridable;
	      exports.Instant = Instant;
	      exports.ShallowEquals = ShallowEquals;
	      exports.ShallowChanged = ShallowChanged;
	      exports.AddGlobalElement = AddGlobalElement;
	      exports.AddGlobalStyle = AddGlobalStyle;
	      exports.HasSealedProps = HasSealedProps;
	      exports.Sealed = Sealed;

	      var _react = __webpack_require__(3);

	      var _react2 = _interopRequireDefault(_react);

	      var _reactDom = __webpack_require__(4);

	      var _reactDom2 = _interopRequireDefault(_reactDom);

	      var _shallowCompare = __webpack_require__(5);

	      var _shallowCompare2 = _interopRequireDefault(_shallowCompare);

	      var _classnames = __webpack_require__(7);

	      var _classnames2 = _interopRequireDefault(_classnames);

	      function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : { default: obj };
	      }

	      exports.ShallowCompare = _shallowCompare2.default;

	      function G(entries) {
	        Object.assign(window, entries);
	      }
	      G({ E: E });
	      function E(e1, e2, e3, e4, e5, e6, e7, e8) {
	        var result = {};
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var extend = _step.value;

	            result.Extend(extend);
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }

	        return result;
	        //return StyleSheet.create(result);
	      }
	      function ToJSON(obj) {
	        return JSON.stringify(obj);
	      }
	      function FromJSON(json) {
	        return JSON.parse(json);
	      }
	      function AsMultiline(str) {
	        var desiredIndent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	        var result = str.substring(str.indexOf("\n") + 1, str.lastIndexOf("\n"));
	        if (desiredIndent != null) {
	          var firstLineIndent = (result.match(/^\t+/) || [""])[0].length;
	          if (firstLineIndent) {
	            var lines = result.split("\n");
	            // remove X tabs from start of each line (where X is firstLineIndent)
	            lines = lines.map(function (line) {
	              return line.replace(new RegExp("^\t{0," + firstLineIndent + "}"), "");
	            });
	            result = lines.join("\n");
	          }
	        }
	        return result;
	      }
	      ;
	      function RemoveDuplicates(items) {
	        var result = [];
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;

	        try {
	          for (var _iterator2 = items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var item = _step2.value;

	            if (result.indexOf(item) == -1) {
	              result.push(item);
	            }
	          }
	        } catch (err) {
	          _didIteratorError2 = true;
	          _iteratorError2 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	              _iterator2.return();
	            }
	          } finally {
	            if (_didIteratorError2) {
	              throw _iteratorError2;
	            }
	          }
	        }

	        return result;
	      }
	      //var ReactInstanceMap = require("react/lib/ReactInstanceMap");
	      G({ ShallowCompare: _shallowCompare2.default });
	      G({ React: _react2.default, Text: Text });
	      G({ GetDOM: GetDOM });
	      function GetDOM(comp) {
	        return _reactDom2.default.findDOMNode(comp);
	      }
	      ;
	      /*declare var $;
	      export function GetDOM_(comp) { return $(GetDOM(comp)) as JQuery; };
	      G({GetDOM_});*/
	      function FindReact(dom) {
	        for (var key in dom) {
	          if (key.startsWith("__reactInternalInstance$")) {
	            var compInternals = dom[key]._currentElement;
	            var compWrapper = compInternals._owner;
	            var comp = compWrapper._instance;
	            //return comp as React.Component<any, any>;
	            return comp;
	          }
	        }return null;
	      }
	      G({ FindReact: FindReact });
	      // needed for wrapper-components that don't provide way of accessing inner-component
	      function GetInnerComp(wrapperComp) {
	        // if you use `connect([...], {withRef: true})`, a function will be available at wrapper.getWrappedInstance(); use that if available
	        if (wrapperComp && wrapperComp["getWrappedInstance"]) return wrapperComp["getWrappedInstance"]();
	        return FindReact(GetDOM(wrapperComp));
	      }
	      G({ GetInnerComp: GetInnerComp });
	      var basePropFullKeys = exports.basePropFullKeys = {
	        m: "margin", ml: "marginLeft", mr: "marginRight", mt: "marginTop", mb: "marginBottom",
	        mlr: null, mtb: null,
	        p: "padding", pl: "paddingLeft", pr: "paddingRight", pt: "paddingTop", pb: "paddingBottom",
	        plr: null, ptb: null,
	        sel: null,
	        ct: null,
	        tabLabel: null, active: null,
	        page: null, match: null,
	        firebase: null
	      };
	      function RemoveBasePropKeys(restObj) {
	        for (var key in basePropFullKeys) {
	          delete restObj[key];
	        }
	      }
	      function BasicStyles(props) {
	        var result = {};
	        for (var key in props) {
	          if (basePropFullKeys[key] != null) {
	            var fullKey = basePropFullKeys[key];
	            result[fullKey] = props[key];
	          } else if (key == "mlr") {
	            result.marginLeft = props[key];
	            result.marginRight = props[key];
	          } else if (key == "mtb") {
	            result.marginTop = props[key];
	            result.marginBottom = props[key];
	          } else if (key == "plr") {
	            result.paddingLeft = props[key];
	            result.paddingRight = props[key];
	          } else if (key == "ptb") {
	            result.paddingTop = props[key];
	            result.paddingBottom = props[key];
	          }
	        }
	        return result;
	      }
	      function ApplyBasicStyles(target) {
	        var oldRender = target.prototype.render;
	        target.prototype.render = function () {
	          var result = oldRender.call(this);
	          var props = this.props;
	          var className = (0, _classnames2.default)({ selectable: props.sel, clickThrough: props.ct }, result.props.className);
	          if (className) {
	            result.props.className = className;
	          }
	          result.props.style = E(result.props.style, BasicStyles(props));
	          RemoveBasePropKeys(result.props);
	          return result;
	        };
	      }
	      /*export function ApplyBasicStyles(target: React.ComponentClass<any>, funcName: string) {
	          let oldRender = target.prototype.render;
	          target.prototype.render = function() {
	              let result = oldRender.call(this) as JSX.Element;
	              result.props.style = E(BasicStyles(result.props), result.props.style);
	              RemoveBasePropKeys(result.props);
	              return result;
	          }
	      }*/
	      function SimpleShouldUpdate(target) {
	        target.prototype.shouldComponentUpdate = function (newProps, newState) {
	          /*if (ShallowCompare(this, newProps, newState))
	              Log("Changed: " + this.props.Props().Where(a=>a.value !== newProps[a.name]).Select(a=>a.name) + ";" + g.ToJSON(this.props) + ";" + g.ToJSON(newProps));*/
	          return (0, _shallowCompare2.default)(this, newProps, newState);
	        };
	      }
	      //export function SimpleShouldUpdate_Overridable(target: Component<{shouldUpdate: (newProps: React.Props<any>, newState: any)=>boolean}, {}>) {
	      function SimpleShouldUpdate_Overridable(target) {
	        target.prototype.shouldComponentUpdate = function (newProps, newState) {
	          var shouldUpdate = newProps.shouldUpdate;

	          if (typeof shouldUpdate == "boolean") return shouldUpdate;
	          if (typeof shouldUpdate == "function") return shouldUpdate(newProps, newState);
	          return (0, _shallowCompare2.default)(this, newProps, newState);
	        };
	      }
	      // for PostRender() func
	      function Instant(target, name) {
	        target[name].instant = true;
	      }
	      function ShallowEquals(objA, objB) {
	        if (objA === objB) return true;
	        var keysA = Object.keys(objA || {});
	        var keysB = Object.keys(objB || {});
	        if (keysA.length !== keysB.length) return false;
	        // Test for A's keys different from B.
	        var hasOwn = Object.prototype.hasOwnProperty;
	        for (var i = 0; i < keysA.length; i++) {
	          if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	            return false;
	          }
	          var valA = objA[keysA[i]];
	          var valB = objB[keysA[i]];
	          if (valA !== valB) return false;
	        }
	        return true;
	      }
	      G({ ShallowChanged: ShallowChanged });
	      function ShallowChanged(objA, objB) {
	        for (var _len = arguments.length, propsToCompareMoreDeeply = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	          propsToCompareMoreDeeply[_key - 2] = arguments[_key];
	        }

	        if (propsToCompareMoreDeeply.length) {
	          if (ShallowChanged(objA.Excluding.apply(objA, propsToCompareMoreDeeply), objB.Excluding.apply(objB, propsToCompareMoreDeeply))) {
	            return true;
	          }
	          var _iteratorNormalCompletion3 = true;
	          var _didIteratorError3 = false;
	          var _iteratorError3 = undefined;

	          try {
	            for (var _iterator3 = propsToCompareMoreDeeply[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	              var key = _step3.value;

	              // for "children", shallow-compare at two levels deeper
	              if (key == "children") {
	                var _iteratorNormalCompletion4 = true;
	                var _didIteratorError4 = false;
	                var _iteratorError4 = undefined;

	                try {
	                  for (var _iterator4 = (objA.children || {}).VKeys().concat((objB.children || {}).VKeys())[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var childKey = _step4.value;

	                    if (ShallowChanged(objA.children[childKey], objB.children[childKey])) return true;
	                  }
	                } catch (err) {
	                  _didIteratorError4 = true;
	                  _iteratorError4 = err;
	                } finally {
	                  try {
	                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                      _iterator4.return();
	                    }
	                  } finally {
	                    if (_didIteratorError4) {
	                      throw _iteratorError4;
	                    }
	                  }
	                }
	              } else {
	                if (ShallowChanged(objA[key], objB[key])) return true;
	              }
	            }
	          } catch (err) {
	            _didIteratorError3 = true;
	            _iteratorError3 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	              }
	            } finally {
	              if (_didIteratorError3) {
	                throw _iteratorError3;
	              }
	            }
	          }

	          return false;
	        }
	        return !ShallowEquals(objA, objB);
	      }
	      //require("./GlobalStyles");
	      var loaded = false;
	      function AddGlobalElement(html) {
	        var asMultiline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	        if (asMultiline) {
	          html = AsMultiline(html, 0);
	        }
	        var proceed = function proceed() {
	          loaded = true;
	          //let nodeType = html.trim().substring(1, html.trim().IndexOfAny(" ", ">"));
	          //let nodeType = html.match(`<([a-zA-Z-]+)`)[1];
	          var nodeType = html.match("<([^ >]+)")[1];
	          var element = document.createElement(nodeType);
	          document.querySelector("#hidden_early").appendChild(element);
	          element.outerHTML = html;
	        };
	        if (loaded) {
	          proceed();
	        } else {
	          window.addEventListener("load", proceed);
	        }
	      }
	      ;
	      function AddGlobalStyle(str) {
	        var asMultiline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	        if (asMultiline) {
	          str = AsMultiline(str, 0);
	        }
	        AddGlobalElement("\n\t\t<style>\n\t\t" + str + "\n\t\t</style>\n\t");
	      }
	      ;
	      /*AddGlobalStyle(`
	      *:not(.ignoreBaseCSS) {
	          color: rgba(255,255,255,.7);
	      }
	      `);*/
	      /** Tunnels into Radium wrapper-class, and retrieves the original class, letting you access its static props. */
	      /*export function PreRadium<T>(typeGetterFunc: ()=>T, setFunc: Function): T {
	          WaitXThenRun(0, ()=> {
	              debugger;
	              let type = typeGetterFunc() as any;
	              setFunc(type.DecoratedComponent);
	          });
	          return {} as any;
	      }*/
	      /*export function PreRadium<T>(_: T, wrapperClass: Function): T {
	          return (wrapperClass as any).DecoratedComponent;
	      }*/
	      /*export function GetErrorMessagesUnderElement(element: HTMLElement) {
	          return $(element).find(":invalid").ToList().map(node=>(node[0] as any).validationMessage || `Invalid value.`);
	          return element.querySelector(":invalid").ToList().map(node=>(node[0] as any).validationMessage || `Invalid value.`);
	      }*/
	      function HasSealedProps(target) {
	        var oldConstructor = target.constructor;
	        target.constructor = function () {
	          for (var key in target["prototype"]) {
	            var method = target["prototype"][key];
	            if (method.sealed && this[key] != method) {
	              throw new Error("Cannot override sealed method \"" + key + "\".");
	            }
	          }
	          return oldConstructor.apply(this, arguments);
	        };
	      }
	      function Sealed(target, key) {
	        target[key].sealed = true;
	      }

	      /***/
	    },
	    /* 3 */
	    /***/function (module, exports) {

	      module.exports = __webpack_require__(2);

	      /***/
	    },
	    /* 4 */
	    /***/function (module, exports) {

	      module.exports = __webpack_require__(6);

	      /***/
	    },
	    /* 5 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       */

	      var shallowEqual = __webpack_require__(6);

	      /**
	       * Does a shallow comparison for props and state.
	       * See ReactComponentWithPureRenderMixin
	       * See also https://facebook.github.io/react/docs/shallow-compare.html
	       */
	      function shallowCompare(instance, nextProps, nextState) {
	        return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	      }

	      module.exports = shallowCompare;

	      /***/
	    },
	    /* 6 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       * @typechecks
	       * 
	       */

	      /*eslint-disable no-self-compare */

	      var hasOwnProperty = Object.prototype.hasOwnProperty;

	      /**
	       * inlined Object.is polyfill to avoid requiring consumers ship their own
	       * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	       */
	      function is(x, y) {
	        // SameValue algorithm
	        if (x === y) {
	          // Steps 1-5, 7-10
	          // Steps 6.b-6.e: +0 != -0
	          // Added the nonzero y check to make Flow happy, but it is redundant
	          return x !== 0 || y !== 0 || 1 / x === 1 / y;
	        } else {
	          // Step 6.a: NaN == NaN
	          return x !== x && y !== y;
	        }
	      }

	      /**
	       * Performs equality by iterating through keys on an object and returning false
	       * when any key has values which are not strictly equal between the arguments.
	       * Returns true when the values of all keys are strictly equal.
	       */
	      function shallowEqual(objA, objB) {
	        if (is(objA, objB)) {
	          return true;
	        }

	        if ((typeof objA === 'undefined' ? 'undefined' : _typeof2(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof2(objB)) !== 'object' || objB === null) {
	          return false;
	        }

	        var keysA = Object.keys(objA);
	        var keysB = Object.keys(objB);

	        if (keysA.length !== keysB.length) {
	          return false;
	        }

	        // Test for A's keys different from B.
	        for (var i = 0; i < keysA.length; i++) {
	          if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	            return false;
	          }
	        }

	        return true;
	      }

	      module.exports = shallowEqual;

	      /***/
	    },
	    /* 7 */
	    /***/function (module, exports, __webpack_require__) {

	      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
	                                                                       Copyright (c) 2017 Jed Watson.
	                                                                       Licensed under the MIT License (MIT), see
	                                                                       http://jedwatson.github.io/classnames
	                                                                       */
	      /* global define */

	      (function () {
	        'use strict';

	        var hasOwn = {}.hasOwnProperty;

	        function classNames() {
	          var classes = [];

	          for (var i = 0; i < arguments.length; i++) {
	            var arg = arguments[i];
	            if (!arg) continue;

	            var argType = typeof arg === 'undefined' ? 'undefined' : _typeof2(arg);

	            if (argType === 'string' || argType === 'number') {
	              classes.push(arg);
	            } else if (Array.isArray(arg) && arg.length) {
	              var inner = classNames.apply(null, arg);
	              if (inner) {
	                classes.push(inner);
	              }
	            } else if (argType === 'object') {
	              for (var key in arg) {
	                if (hasOwn.call(arg, key) && arg[key]) {
	                  classes.push(key);
	                }
	              }
	            }
	          }

	          return classes.join(' ');
	        }

	        if (typeof module !== 'undefined' && module.exports) {
	          classNames.default = classNames;
	          module.exports = classNames;
	        } else if (true) {
	          // register as 'classnames', consistent with npm package name
	          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return classNames;
	          }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	        } else {}
	      })();

	      /***/
	    },
	    /* 8 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";

	      Object.defineProperty(exports, "__esModule", {
	        value: true
	      });
	      exports.BaseComponent = exports.RenderSource = undefined;

	      var _createClass = function () {
	        function defineProperties(target, props) {
	          for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	          }
	        }return function (Constructor, protoProps, staticProps) {
	          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	        };
	      }();

	      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
	      } : function (obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
	      };

	      exports.BaseComponentWithConnector = BaseComponentWithConnector;

	      var _react = __webpack_require__(3);

	      var _react2 = _interopRequireDefault(_react);

	      var _reactAutobind = __webpack_require__(9);

	      var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

	      var _General = __webpack_require__(2);

	      function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : { default: obj };
	      }

	      function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	          throw new TypeError("Cannot call a class as a function");
	        }
	      }

	      function _possibleConstructorReturn(self, call) {
	        if (!self) {
	          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	      }

	      function _inherits(subClass, superClass) {
	        if (typeof superClass !== "function" && superClass !== null) {
	          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
	        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	      }

	      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	        var c = arguments.length,
	            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	            d;
	        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	        }return c > 3 && r && Object.defineProperty(target, key, r), r;
	      };
	      var BaseComponent_1;
	      var RenderSource = exports.RenderSource = undefined;
	      (function (RenderSource) {
	        RenderSource[RenderSource["Mount"] = 0] = "Mount";
	        RenderSource[RenderSource["PropChange"] = 1] = "PropChange";
	        RenderSource[RenderSource["SetState"] = 2] = "SetState";
	        RenderSource[RenderSource["Update"] = 3] = "Update";
	      })(RenderSource || (exports.RenderSource = RenderSource = {}));
	      var BaseComponent = BaseComponent_1 = function (_Component) {
	        _inherits(BaseComponent, _Component);

	        function BaseComponent(props) {
	          _classCallCheck(this, BaseComponent);

	          // helper for debugging
	          var _this = _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this, props));

	          _this.GetPropsChanged_lastProps = {};
	          _this.GetStateChanged_lastState = {};
	          _this.changeListeners = [];
	          _this.autoRemoveChangeListeners = true;
	          _this.mounted = false;
	          (0, _reactAutobind2.default)(_this);
	          // if had @Radium decorator, then "this" is actually an instance of a class-specific "RadiumEnhancer" derived-class
	          //		so reach in to original class, and set up auto-binding for its prototype members as well
	          if (_this.constructor.name == "RadiumEnhancer") (0, _reactAutobind2.default)(Object.getPrototypeOf(_this));
	          //this.state = this.state || this.defaultState || {} as any;
	          _this.state = _this.constructor["defaultState"] || {};
	          // if using PreRender, wrap render func
	          if (_this.PreRender != BaseComponent_1.prototype.PreRender) {
	            var oldRender = _this.render;
	            _this.render = function () {
	              this.PreRender();
	              return oldRender.apply(this, arguments);
	            };
	          }
	          // you know what, let's just always wrap the render() method, in this project; solves the annoying firebase-gobbling-errors issue
	          /*let oldRender = this.render;
	          this.render = function() {
	              try {
	                  this.PreRender();
	                  return oldRender.apply(this, arguments);
	              } catch (ex) {
	                  debugger;
	                  throw ex;
	              }
	          };*/
	          return _this;
	        }
	        //timers = [] as Timer[];


	        _createClass(BaseComponent, [{
	          key: "GetPropsChanged",
	          value: function GetPropsChanged() {
	            var _this2 = this;

	            var keys = (0, _General.RemoveDuplicates)(Object.keys(this.props).concat(Object.keys(this.GetPropsChanged_lastProps)));
	            var result = keys.filter(function (key) {
	              return !Object.is(_this2.props[key], _this2.GetPropsChanged_lastProps[key]);
	            });
	            this.GetPropsChanged_lastProps = Object.assign({}, this.props);
	            return result;
	          }
	        }, {
	          key: "GetPropsChanged_Data",
	          value: function GetPropsChanged_Data() {
	            var _this3 = this;

	            return (0, _General.ToJSON)(this.GetPropsChanged().reduce(function (result, key) {
	              return result[key] = _this3.props[key], result;
	            }, {}));
	          }
	        }, {
	          key: "GetStateChanged",
	          value: function GetStateChanged() {
	            var _this4 = this;

	            var keys = (0, _General.RemoveDuplicates)(Object.keys(this.state).concat(Object.keys(this.GetStateChanged_lastState)));
	            var result = keys.filter(function (key) {
	              return !Object.is(_this4.state[key], _this4.GetStateChanged_lastState[key]);
	            });
	            this.GetStateChanged_lastState = Object.assign({}, this.state);
	            return result;
	          }
	        }, {
	          key: "GetStateChanged_Data",
	          value: function GetStateChanged_Data() {
	            var _this5 = this;

	            return (0, _General.ToJSON)(this.GetStateChanged().reduce(function (result, key) {
	              return result[key] = _this5.state[key], result;
	            }, {}));
	          }
	          //forceUpdate(_: ()=>"Do not call this. Call Update() instead.") {

	        }, {
	          key: "forceUpdate",
	          value: function forceUpdate() {
	            //throw new Error("Do not call this. Call Update() instead.");
	            console.warn("Do not call this. Call Update() instead.");
	          }
	        }, {
	          key: "Update",
	          value: function Update(postUpdate) {
	            //if (!this.Mounted) return;
	            this.lastRender_source = RenderSource.Update;
	            //this.forceUpdate(postUpdate);
	            _react.Component.prototype.forceUpdate.call(this, postUpdate);
	          }
	        }, {
	          key: "Clear",
	          value: function Clear(postClear) {
	            var oldRender = this.render;
	            this.render = function () {
	              var _this6 = this;

	              this.render = oldRender;
	              //WaitXThenRun(0, this.Update);
	              setTimeout(function () {
	                return _this6.Update();
	              });
	              return _react2.default.createElement("div", null);
	            };
	            postClear();
	          }
	        }, {
	          key: "ClearThenUpdate",
	          value: function ClearThenUpdate() {
	            var _this7 = this;

	            //this.Clear(this.Update);
	            this.Clear(function () {
	              return _this7.Update();
	            });
	          }
	          /** Shortcut for "()=>(this.forceUpdate(), this.ComponentWillMountOrReceiveProps(props))". */

	        }, {
	          key: "UpdateAndReceive",
	          value: function UpdateAndReceive(props) {
	            var _this8 = this,
	                _arguments = arguments;

	            return function () {
	              //if (!this.Mounted) return;
	              //this.forceUpdate();
	              _react.Component.prototype.forceUpdate.apply(_this8, _arguments);
	              if (_this8.autoRemoveChangeListeners) _this8.RemoveChangeListeners();
	              _this8.ComponentWillMountOrReceiveProps(props);
	            };
	          }
	          //setState(_: ()=>"Do not call this. Call SetState() instead.") {
	          /*setState() {
	              throw new Error("Do not call this. Call SetState() instead.");
	          }*/

	        }, {
	          key: "setState",
	          value: function setState() {
	            return null;
	          }
	        }, {
	          key: "SetState",
	          value: function SetState(newState, callback) {
	            var _this9 = this;

	            var cancelIfStateSame = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	            var deepCompare = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	            if (cancelIfStateSame) {
	              // we only care about new-state's keys -- setState() leaves unmentioned keys untouched
	              var oldState_forNewStateKeys = Object.keys(newState).reduce(function (result, key) {
	                return result[key] = _this9.state[key], result;
	              }, {});
	              if (deepCompare) {
	                if ((0, _General.ToJSON)(newState) == (0, _General.ToJSON)(oldState_forNewStateKeys)) return [];
	              } else {
	                //if (ShallowEquals(newState, oldState_forNewStateKeys)) return [];
	                // use a looser comparison (we want a missing prop to be equivalent to null and undefined)
	                var same = true;
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                  for (var _iterator = (0, _General.RemoveDuplicates)(Object.keys(this.state).concat(Object.keys(newState)))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var key = _step.value;

	                    var valA = this.state[key];
	                    var valB = newState[key];
	                    if (valA == null && valB == null) continue;
	                    if (valA !== valB) {
	                      same = false;
	                      break;
	                    }
	                  }
	                } catch (err) {
	                  _didIteratorError = true;
	                  _iteratorError = err;
	                } finally {
	                  try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                      _iterator.return();
	                    }
	                  } finally {
	                    if (_didIteratorError) {
	                      throw _iteratorError;
	                    }
	                  }
	                }

	                if (same) return [];
	              }
	            }
	            var componentClass = this.constructor;
	            if (componentClass.ValidateState) {
	              componentClass.ValidateState(newState);
	            }
	            this.lastRender_source = RenderSource.SetState;
	            //this.setState(newState as S, callback);
	            _react.Component.prototype.setState.call(this, newState);
	          }
	        }, {
	          key: "AddChangeListeners",
	          value: function AddChangeListeners(host) {
	            if (host == null) return; // maybe temp
	            /*host.extraMethods = funcs;
	            for (let func of funcs)
	                this.changeListeners.push({host: host, func: func});*/

	            for (var _len = arguments.length, funcs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	              funcs[_key - 1] = arguments[_key];
	            }

	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	              for (var _iterator2 = funcs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                var func = _step2.value;

	                if (typeof func == "string") func = func.Func(this.Update);
	                // if actual function, add it (else, ignore entry--it must have been a failed conditional)
	                if (func instanceof Function) {
	                  //if (!host.HasExtraMethod(func)) {
	                  host.extraMethod = func;
	                  this.changeListeners.push({ host: host, func: func });
	                }
	              }
	            } catch (err) {
	              _didIteratorError2 = true;
	              _iteratorError2 = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                  _iterator2.return();
	                }
	              } finally {
	                if (_didIteratorError2) {
	                  throw _iteratorError2;
	                }
	              }
	            }
	          }
	        }, {
	          key: "RemoveChangeListeners",
	          value: function RemoveChangeListeners() {
	            //this.changeListeners = this.changeListeners || []; // temp fix for odd "is null" issue
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	              for (var _iterator3 = this.changeListeners[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                var changeListener = _step3.value;

	                changeListener.host.removeExtraMethod = changeListener.func;
	              }
	            } catch (err) {
	              _didIteratorError3 = true;
	              _iteratorError3 = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                  _iterator3.return();
	                }
	              } finally {
	                if (_didIteratorError3) {
	                  throw _iteratorError3;
	                }
	              }
	            }

	            this.changeListeners = [];
	          }
	        }, {
	          key: "RemoveChangeListenersFor",
	          value: function RemoveChangeListenersFor(host) {
	            var changeListenersToRemove = this.changeListeners.filter(function (a) {
	              return a.host == host;
	            });
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;

	            try {
	              for (var _iterator4 = changeListenersToRemove[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                var listener = _step4.value;

	                listener.host.removeExtraMethod = listener.func;
	                this.changeListeners.splice(this.changeListeners.indexOf(listener), 1);
	              }
	            } catch (err) {
	              _didIteratorError4 = true;
	              _iteratorError4 = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                  _iterator4.return();
	                }
	              } finally {
	                if (_didIteratorError4) {
	                  throw _iteratorError4;
	                }
	              }
	            }
	          }
	        }, {
	          key: "ComponentWillMount",
	          value: function ComponentWillMount() {}
	        }, {
	          key: "ComponentWillMountOrReceiveProps",
	          value: function ComponentWillMountOrReceiveProps(newProps, forMount) {}
	        }, {
	          key: "componentWillMount",
	          value: function componentWillMount() {
	            if (this.autoRemoveChangeListeners) this.RemoveChangeListeners();
	            this.ComponentWillMount();
	            this.ComponentWillMountOrReceiveProps(this.props, true);
	            this.lastRender_source = RenderSource.Mount;
	          }
	        }, {
	          key: "ComponentDidMount",
	          value: function ComponentDidMount() {}
	        }, {
	          key: "ComponentDidMountOrUpdate",
	          value: function ComponentDidMountOrUpdate(lastProps, lastState) {}
	        }, {
	          key: "componentDidMount",
	          value: function componentDidMount() {
	            this.ComponentDidMount.apply(this, arguments);
	            this.ComponentDidMountOrUpdate(this.ComponentDidMountOrUpdate_lastProps, this.ComponentDidMountOrUpdate_lastState);
	            this.ComponentDidMountOrUpdate_lastProps = this.props;
	            this.ComponentDidMountOrUpdate_lastState = this.state;
	            /*let {Ref} = this.props;
	            if (Ref) Ref(this);*/
	            this.mounted = true;
	            this.CallPostRender();
	          }
	        }, {
	          key: "ComponentWillUnmount",
	          value: function ComponentWillUnmount() {}
	        }, {
	          key: "componentWillUnmount",
	          value: function componentWillUnmount() {
	            this.ComponentWillUnmount();
	            /*for (let timer of this.timers) {
	                timer.Stop();
	            }
	            this.timers = [];*/
	            /*let {Ref} = this.props;
	            if (Ref) Ref(null);*/
	            this.mounted = false;
	          }
	        }, {
	          key: "ComponentWillReceiveProps",
	          value: function ComponentWillReceiveProps(newProps) {}
	        }, {
	          key: "componentWillReceiveProps",
	          value: function componentWillReceiveProps(newProps) {
	            if (this.autoRemoveChangeListeners) {
	              this.RemoveChangeListeners();
	            }
	            this.ComponentWillReceiveProps(newProps);
	            this.ComponentWillMountOrReceiveProps(newProps, false);
	            this.lastRender_source = RenderSource.PropChange;
	          }
	        }, {
	          key: "ComponentDidUpdate",
	          value: function ComponentDidUpdate() {}
	        }, {
	          key: "componentDidUpdate",
	          value: function componentDidUpdate() {
	            this.ComponentDidUpdate.apply(this, arguments);
	            this.ComponentDidMountOrUpdate(this.ComponentDidMountOrUpdate_lastProps, this.ComponentDidMountOrUpdate_lastState);
	            this.ComponentDidMountOrUpdate_lastProps = this.props;
	            this.ComponentDidMountOrUpdate_lastState = this.state;
	            this.CallPostRender();
	          }
	        }, {
	          key: "CallPostRender",
	          value: function CallPostRender() {
	            var _this10 = this;

	            if (this.PostRender == BaseComponent_1.prototype.PostRender) return;
	            var renderSource = this.lastRender_source;
	            var ownPostRender = this.PostRender;
	            // can be different, for wrapped components (apparently they copy the inner type's PostRender as their own PostRender -- except as a new function, for some reason)
	            var prototypePostRender = this.constructor.prototype.PostRender;
	            if (ownPostRender.instant || prototypePostRender.instant) {
	              this.PostRender(renderSource);
	            } else {
	              /*if (QuickIncrement("PostRenderLog") <= 1)
	                  Log("Calling PostRender for: " + this.constructor.name + ";" + V.GetStackTraceStr());*/
	              //Log("Calling PostRender for: " + this.constructor.name);
	              setTimeout(function () {
	                return window.requestAnimationFrame(function () {
	                  //WaitXThenRun(0, ()=>g.requestIdleCallback(()=> {
	                  if (!_this10.mounted) return;
	                  _this10.PostRender(renderSource);
	                });
	              });
	              /*WaitXThenRun(0, ()=> {
	                  this.PostRender();
	              });*/
	            }
	          }
	        }, {
	          key: "PreRender",
	          value: function PreRender() {}
	        }, {
	          key: "PostRender",
	          value: function PostRender(source) {}
	        }, {
	          key: "DOM",
	          get: function get() {
	            return this.mounted ? (0, _General.GetDOM)(this) : null;
	          }
	          //get DOM_() { return this.mounted ? $(this.DOM) : null; }
	          // needed for wrapper-components that don't provide way of accessing inner-component
	          //get InnerComp() { return FindReact(this.DOM); }
	          // make all these optional, so fits Component type definition/shape

	        }, {
	          key: "FlattenedChildren",
	          get: function get() {
	            var children = children instanceof Array ? this.props.children : [this.props.children];
	            return _react2.default.Children.map(children.filter(function (a) {
	              return a;
	            }), function (a) {
	              return a;
	            });
	          }
	        }]);

	        return BaseComponent;
	      }(_react.Component);
	      __decorate([_General.Sealed], BaseComponent.prototype, "componentWillMount", null);
	      __decorate([_General.Sealed], BaseComponent.prototype, "componentDidMount", null);
	      __decorate([_General.Sealed], BaseComponent.prototype, "componentWillUnmount", null);
	      __decorate([_General.Sealed], BaseComponent.prototype, "componentWillReceiveProps", null);
	      __decorate([_General.Sealed], BaseComponent.prototype, "componentDidUpdate", null);
	      exports.BaseComponent = BaseComponent = BaseComponent_1 = __decorate([_General.HasSealedProps], BaseComponent);
	      exports.BaseComponent = BaseComponent;
	      //G({Component2: Component, BaseComponent: Component});
	      /*export function BaseComponentWithConnect<Props>(connectFunc: (state?: RootState, props?)=>Props) {
	          return function InnerFunc<State>() {
	              return BaseComponent as new(..._)=>BaseComponent<Props, State>;
	          };
	      }*/

	      function BaseComponentWithConnector(connector, initialState) {
	        var BaseComponentEnhanced = function (_BaseComponent) {
	          _inherits(BaseComponentEnhanced, _BaseComponent);

	          function BaseComponentEnhanced(props) {
	            _classCallCheck(this, BaseComponentEnhanced);

	            var _this11 = _possibleConstructorReturn(this, (BaseComponentEnhanced.__proto__ || Object.getPrototypeOf(BaseComponentEnhanced)).call(this, props));

	            _this11.state = initialState;
	            if (_this11.constructor["defaultState"]) {
	              throw new Error("Cannot specify \"" + _this11.constructor.name + ".defaultState\". (initial-state is already set using BaseComponentWithConnect function)");
	            }
	            return _this11;
	          }

	          return BaseComponentEnhanced;
	        }(BaseComponent);
	        //return BaseComponentEnhanced;


	        return BaseComponentEnhanced;
	      }

	      /***/
	    },
	    /* 9 */
	    /***/function (module, exports, __webpack_require__) {

	      module.exports = __webpack_require__(10);

	      /***/
	    },
	    /* 10 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";

	      Object.defineProperty(exports, '__esModule', {
	        value: true
	      });
	      exports['default'] = autoBind;
	      var wontBind = ['constructor', 'render', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];

	      var toBind = [];

	      function autoBind(context) {
	        if (context === undefined) {
	          console.error('Autobind error: No context provided.');
	          return;
	        }

	        var objPrototype = Object.getPrototypeOf(context);

	        if (arguments.length > 1) {
	          // If a list of methods to bind is provided, use it.
	          toBind = Array.prototype.slice.call(arguments, 1);
	        } else {
	          // If no list of methods to bind is provided, bind all available methods in class.
	          toBind = Object.getOwnPropertyNames(objPrototype);
	        }

	        toBind.forEach(function (method) {
	          var descriptor = Object.getOwnPropertyDescriptor(objPrototype, method);

	          if (descriptor === undefined) {
	            console.warn('Autobind: "' + method + '" method not found in class.');
	            return;
	          }

	          // Return if it's special case function or if not a function at all
	          if (wontBind.indexOf(method) !== -1 || typeof descriptor.value !== 'function') {
	            return;
	          }

	          Object.defineProperty(objPrototype, method, boundMethod(objPrototype, method, descriptor));
	        });
	      }

	      /**
	      * From autobind-decorator (https://github.com/andreypopp/autobind-decorator/tree/master)
	      * Return a descriptor removing the value and returning a getter
	      * The getter will return a .bind version of the function
	      * and memoize the result against a symbol on the instance
	      */
	      function boundMethod(objPrototype, method, descriptor) {
	        var fn = descriptor.value;

	        return {
	          configurable: true,
	          get: function get() {
	            if (this === objPrototype || this.hasOwnProperty(method)) {
	              return fn;
	            }

	            var boundFn = fn.bind(this);
	            Object.defineProperty(this, method, {
	              value: boundFn,
	              configurable: true,
	              writable: true
	            });
	            return boundFn;
	          }
	        };
	      }
	      module.exports = exports['default'];

	      /***/
	    },
	    /* 11 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";

	      Object.defineProperty(exports, "__esModule", {
	        value: true
	      });
	      exports.CreateGlobalPseudoStyleAndReturnClassName = CreateGlobalPseudoStyleAndReturnClassName;

	      var _CSSPropertyOperations = __webpack_require__(12);

	      var _General = __webpack_require__(2);

	      var pseudoSelectorStyleKeys = {};
	      function CreateGlobalPseudoStyleAndReturnClassName(pseudoStyleType, style) {
	        var styleText = (0, _CSSPropertyOperations.createMarkupForStyles)(style);
	        var styleKey = (0, _General.ToJSON)(pseudoStyleType + "---" + styleText); // get a unique identifier for this particular pseudo-style
	        styleKey = styleKey.replace(/[^a-zA-Z0-9-]/g, ""); // make sure key is a valid class-name
	        // if <style> element for the given style-composite has not been created yet, create it 
	        if (pseudoSelectorStyleKeys[styleKey] == null) {
	          pseudoSelectorStyleKeys[styleKey] = true;
	          (0, _General.AddGlobalStyle)("\n\t\t\t." + styleKey + ":" + pseudoStyleType + " {\n\t\t\t\t" + styleText.replace(/([^ ]+?);/g, "$1 !important;") + "\n\t\t\t}\n\t\t");
	        }
	        return styleKey;
	      }

	      /***/
	    },
	    /* 12 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       */

	      var CSSProperty = __webpack_require__(13);
	      var ExecutionEnvironment = __webpack_require__(14);
	      var ReactInstrumentation = __webpack_require__(15);

	      var camelizeStyleName = __webpack_require__(27);
	      var dangerousStyleValue = __webpack_require__(29);
	      var hyphenateStyleName = __webpack_require__(30);
	      var memoizeStringOnly = __webpack_require__(32);
	      var warning = __webpack_require__(18);

	      var processStyleName = memoizeStringOnly(function (styleName) {
	        return hyphenateStyleName(styleName);
	      });

	      var hasShorthandPropertyBug = false;
	      var styleFloatAccessor = 'cssFloat';
	      if (ExecutionEnvironment.canUseDOM) {
	        var tempStyle = document.createElement('div').style;
	        try {
	          // IE8 throws "Invalid argument." if resetting shorthand style properties.
	          tempStyle.font = '';
	        } catch (e) {
	          hasShorthandPropertyBug = true;
	        }
	        // IE8 only supports accessing cssFloat (standard) as styleFloat
	        if (document.documentElement.style.cssFloat === undefined) {
	          styleFloatAccessor = 'styleFloat';
	        }
	      }

	      if (true) {
	        // 'msTransform' is correct, but the other prefixes should be capitalized
	        var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

	        // style values shouldn't contain a semicolon
	        var badStyleValueWithSemicolonPattern = /;\s*$/;

	        var warnedStyleNames = {};
	        var warnedStyleValues = {};
	        var warnedForNaNValue = false;

	        var warnHyphenatedStyleName = function warnHyphenatedStyleName(name, owner) {
	          if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	            return;
	          }

	          warnedStyleNames[name] = true;
	          true ? warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName(name), checkRenderMessage(owner)) : undefined;
	        };

	        var warnBadVendoredStyleName = function warnBadVendoredStyleName(name, owner) {
	          if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	            return;
	          }

	          warnedStyleNames[name] = true;
	          true ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : undefined;
	        };

	        var warnStyleValueWithSemicolon = function warnStyleValueWithSemicolon(name, value, owner) {
	          if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
	            return;
	          }

	          warnedStyleValues[value] = true;
	          true ? warning(false, "Style property values shouldn't contain a semicolon.%s " + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) : undefined;
	        };

	        var warnStyleValueIsNaN = function warnStyleValueIsNaN(name, value, owner) {
	          if (warnedForNaNValue) {
	            return;
	          }

	          warnedForNaNValue = true;
	          true ? warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) : undefined;
	        };

	        var checkRenderMessage = function checkRenderMessage(owner) {
	          if (owner) {
	            var name = owner.getName();
	            if (name) {
	              return ' Check the render method of `' + name + '`.';
	            }
	          }
	          return '';
	        };

	        /**
	         * @param {string} name
	         * @param {*} value
	         * @param {ReactDOMComponent} component
	         */
	        var warnValidStyle = function warnValidStyle(name, value, component) {
	          var owner;
	          if (component) {
	            owner = component._currentElement._owner;
	          }
	          if (name.indexOf('-') > -1) {
	            warnHyphenatedStyleName(name, owner);
	          } else if (badVendoredStyleNamePattern.test(name)) {
	            warnBadVendoredStyleName(name, owner);
	          } else if (badStyleValueWithSemicolonPattern.test(value)) {
	            warnStyleValueWithSemicolon(name, value, owner);
	          }

	          if (typeof value === 'number' && isNaN(value)) {
	            warnStyleValueIsNaN(name, value, owner);
	          }
	        };
	      }

	      /**
	       * Operations for dealing with CSS properties.
	       */
	      var CSSPropertyOperations = {
	        /**
	         * Serializes a mapping of style properties for use as inline styles:
	         *
	         *   > createMarkupForStyles({width: '200px', height: 0})
	         *   "width:200px;height:0;"
	         *
	         * Undefined values are ignored so that declarative programming is easier.
	         * The result should be HTML-escaped before insertion into the DOM.
	         *
	         * @param {object} styles
	         * @param {ReactDOMComponent} component
	         * @return {?string}
	         */
	        createMarkupForStyles: function createMarkupForStyles(styles, component) {
	          var serialized = '';
	          for (var styleName in styles) {
	            if (!styles.hasOwnProperty(styleName)) {
	              continue;
	            }
	            var isCustomProperty = styleName.indexOf('--') === 0;
	            var styleValue = styles[styleName];
	            if (true) {
	              if (!isCustomProperty) {
	                warnValidStyle(styleName, styleValue, component);
	              }
	            }
	            if (styleValue != null) {
	              serialized += processStyleName(styleName) + ':';
	              serialized += dangerousStyleValue(styleName, styleValue, component, isCustomProperty) + ';';
	            }
	          }
	          return serialized || null;
	        },

	        /**
	         * Sets the value for multiple styles on a node.  If a value is specified as
	         * '' (empty string), the corresponding style property will be unset.
	         *
	         * @param {DOMElement} node
	         * @param {object} styles
	         * @param {ReactDOMComponent} component
	         */
	        setValueForStyles: function setValueForStyles(node, styles, component) {
	          if (true) {
	            ReactInstrumentation.debugTool.onHostOperation({
	              instanceID: component._debugID,
	              type: 'update styles',
	              payload: styles
	            });
	          }

	          var style = node.style;
	          for (var styleName in styles) {
	            if (!styles.hasOwnProperty(styleName)) {
	              continue;
	            }
	            var isCustomProperty = styleName.indexOf('--') === 0;
	            if (true) {
	              if (!isCustomProperty) {
	                warnValidStyle(styleName, styles[styleName], component);
	              }
	            }
	            var styleValue = dangerousStyleValue(styleName, styles[styleName], component, isCustomProperty);
	            if (styleName === 'float' || styleName === 'cssFloat') {
	              styleName = styleFloatAccessor;
	            }
	            if (isCustomProperty) {
	              style.setProperty(styleName, styleValue);
	            } else if (styleValue) {
	              style[styleName] = styleValue;
	            } else {
	              var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
	              if (expansion) {
	                // Shorthand property that IE8 won't like unsetting, so unset each
	                // component to placate it
	                for (var individualStyleName in expansion) {
	                  style[individualStyleName] = '';
	                }
	              } else {
	                style[styleName] = '';
	              }
	            }
	          }
	        }
	      };

	      module.exports = CSSPropertyOperations;

	      /***/
	    },
	    /* 13 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       */

	      /**
	       * CSS properties which accept numbers but are not in units of "px".
	       */

	      var isUnitlessNumber = {
	        animationIterationCount: true,
	        borderImageOutset: true,
	        borderImageSlice: true,
	        borderImageWidth: true,
	        boxFlex: true,
	        boxFlexGroup: true,
	        boxOrdinalGroup: true,
	        columnCount: true,
	        columns: true,
	        flex: true,
	        flexGrow: true,
	        flexPositive: true,
	        flexShrink: true,
	        flexNegative: true,
	        flexOrder: true,
	        gridRow: true,
	        gridRowEnd: true,
	        gridRowSpan: true,
	        gridRowStart: true,
	        gridColumn: true,
	        gridColumnEnd: true,
	        gridColumnSpan: true,
	        gridColumnStart: true,
	        fontWeight: true,
	        lineClamp: true,
	        lineHeight: true,
	        opacity: true,
	        order: true,
	        orphans: true,
	        tabSize: true,
	        widows: true,
	        zIndex: true,
	        zoom: true,

	        // SVG-related properties
	        fillOpacity: true,
	        floodOpacity: true,
	        stopOpacity: true,
	        strokeDasharray: true,
	        strokeDashoffset: true,
	        strokeMiterlimit: true,
	        strokeOpacity: true,
	        strokeWidth: true
	      };

	      /**
	       * @param {string} prefix vendor-specific prefix, eg: Webkit
	       * @param {string} key style name, eg: transitionDuration
	       * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	       * WebkitTransitionDuration
	       */
	      function prefixKey(prefix, key) {
	        return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	      }

	      /**
	       * Support style names that may come passed in prefixed by adding permutations
	       * of vendor prefixes.
	       */
	      var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

	      // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	      // infinite loop, because it iterates over the newly added props too.
	      Object.keys(isUnitlessNumber).forEach(function (prop) {
	        prefixes.forEach(function (prefix) {
	          isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	        });
	      });

	      /**
	       * Most style properties can be unset by doing .style[prop] = '' but IE8
	       * doesn't like doing that with shorthand properties so for the properties that
	       * IE8 breaks on, which are listed here, we instead unset each of the
	       * individual properties. See http://bugs.jquery.com/ticket/12385.
	       * The 4-value 'clock' properties like margin, padding, border-width seem to
	       * behave without any problems. Curiously, list-style works too without any
	       * special prodding.
	       */
	      var shorthandPropertyExpansions = {
	        background: {
	          backgroundAttachment: true,
	          backgroundColor: true,
	          backgroundImage: true,
	          backgroundPositionX: true,
	          backgroundPositionY: true,
	          backgroundRepeat: true
	        },
	        backgroundPosition: {
	          backgroundPositionX: true,
	          backgroundPositionY: true
	        },
	        border: {
	          borderWidth: true,
	          borderStyle: true,
	          borderColor: true
	        },
	        borderBottom: {
	          borderBottomWidth: true,
	          borderBottomStyle: true,
	          borderBottomColor: true
	        },
	        borderLeft: {
	          borderLeftWidth: true,
	          borderLeftStyle: true,
	          borderLeftColor: true
	        },
	        borderRight: {
	          borderRightWidth: true,
	          borderRightStyle: true,
	          borderRightColor: true
	        },
	        borderTop: {
	          borderTopWidth: true,
	          borderTopStyle: true,
	          borderTopColor: true
	        },
	        font: {
	          fontStyle: true,
	          fontVariant: true,
	          fontWeight: true,
	          fontSize: true,
	          lineHeight: true,
	          fontFamily: true
	        },
	        outline: {
	          outlineWidth: true,
	          outlineStyle: true,
	          outlineColor: true
	        }
	      };

	      var CSSProperty = {
	        isUnitlessNumber: isUnitlessNumber,
	        shorthandPropertyExpansions: shorthandPropertyExpansions
	      };

	      module.exports = CSSProperty;

	      /***/
	    },
	    /* 14 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       */

	      var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	      /**
	       * Simple, lightweight module assisting with the detection and context of
	       * Worker. Helps avoid circular dependencies and allows code to reason about
	       * whether or not they are in a Worker, even if they never include the main
	       * `ReactWorker` dependency.
	       */
	      var ExecutionEnvironment = {

	        canUseDOM: canUseDOM,

	        canUseWorkers: typeof Worker !== 'undefined',

	        canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	        canUseViewport: canUseDOM && !!window.screen,

	        isInWorker: !canUseDOM // For now, this is true - might change in the future.

	      };

	      module.exports = ExecutionEnvironment;

	      /***/
	    },
	    /* 15 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";
	      /**
	       * Copyright (c) 2016-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       * 
	       */

	      // Trust the developer to only use ReactInstrumentation with a __DEV__ check

	      var debugTool = null;

	      if (true) {
	        var ReactDebugTool = __webpack_require__(16);
	        debugTool = ReactDebugTool;
	      }

	      module.exports = { debugTool: debugTool };

	      /***/
	    },
	    /* 16 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";
	      /**
	       * Copyright (c) 2016-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       * 
	       */

	      var ReactInvalidSetStateWarningHook = __webpack_require__(17);
	      var ReactHostOperationHistoryHook = __webpack_require__(20);
	      var ReactComponentTreeHook = __webpack_require__(21);
	      var ExecutionEnvironment = __webpack_require__(14);

	      var performanceNow = __webpack_require__(25);
	      var warning = __webpack_require__(18);

	      var hooks = [];
	      var didHookThrowForEvent = {};

	      function callHook(event, fn, context, arg1, arg2, arg3, arg4, arg5) {
	        try {
	          fn.call(context, arg1, arg2, arg3, arg4, arg5);
	        } catch (e) {
	          true ? warning(didHookThrowForEvent[event], 'Exception thrown by hook while handling %s: %s', event, e + '\n' + e.stack) : undefined;
	          didHookThrowForEvent[event] = true;
	        }
	      }

	      function emitEvent(event, arg1, arg2, arg3, arg4, arg5) {
	        for (var i = 0; i < hooks.length; i++) {
	          var hook = hooks[i];
	          var fn = hook[event];
	          if (fn) {
	            callHook(event, fn, hook, arg1, arg2, arg3, arg4, arg5);
	          }
	        }
	      }

	      var _isProfiling = false;
	      var flushHistory = [];
	      var lifeCycleTimerStack = [];
	      var currentFlushNesting = 0;
	      var currentFlushMeasurements = [];
	      var currentFlushStartTime = 0;
	      var currentTimerDebugID = null;
	      var currentTimerStartTime = 0;
	      var currentTimerNestedFlushDuration = 0;
	      var currentTimerType = null;

	      var lifeCycleTimerHasWarned = false;

	      function clearHistory() {
	        ReactComponentTreeHook.purgeUnmountedComponents();
	        ReactHostOperationHistoryHook.clearHistory();
	      }

	      function getTreeSnapshot(registeredIDs) {
	        return registeredIDs.reduce(function (tree, id) {
	          var ownerID = ReactComponentTreeHook.getOwnerID(id);
	          var parentID = ReactComponentTreeHook.getParentID(id);
	          tree[id] = {
	            displayName: ReactComponentTreeHook.getDisplayName(id),
	            text: ReactComponentTreeHook.getText(id),
	            updateCount: ReactComponentTreeHook.getUpdateCount(id),
	            childIDs: ReactComponentTreeHook.getChildIDs(id),
	            // Text nodes don't have owners but this is close enough.
	            ownerID: ownerID || parentID && ReactComponentTreeHook.getOwnerID(parentID) || 0,
	            parentID: parentID
	          };
	          return tree;
	        }, {});
	      }

	      function resetMeasurements() {
	        var previousStartTime = currentFlushStartTime;
	        var previousMeasurements = currentFlushMeasurements;
	        var previousOperations = ReactHostOperationHistoryHook.getHistory();

	        if (currentFlushNesting === 0) {
	          currentFlushStartTime = 0;
	          currentFlushMeasurements = [];
	          clearHistory();
	          return;
	        }

	        if (previousMeasurements.length || previousOperations.length) {
	          var registeredIDs = ReactComponentTreeHook.getRegisteredIDs();
	          flushHistory.push({
	            duration: performanceNow() - previousStartTime,
	            measurements: previousMeasurements || [],
	            operations: previousOperations || [],
	            treeSnapshot: getTreeSnapshot(registeredIDs)
	          });
	        }

	        clearHistory();
	        currentFlushStartTime = performanceNow();
	        currentFlushMeasurements = [];
	      }

	      function checkDebugID(debugID) {
	        var allowRoot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        if (allowRoot && debugID === 0) {
	          return;
	        }
	        if (!debugID) {
	          true ? warning(false, 'ReactDebugTool: debugID may not be empty.') : undefined;
	        }
	      }

	      function beginLifeCycleTimer(debugID, timerType) {
	        if (currentFlushNesting === 0) {
	          return;
	        }
	        if (currentTimerType && !lifeCycleTimerHasWarned) {
	          true ? warning(false, 'There is an internal error in the React performance measurement code. ' + 'Did not expect %s timer to start while %s timer is still in ' + 'progress for %s instance.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : undefined;
	          lifeCycleTimerHasWarned = true;
	        }
	        currentTimerStartTime = performanceNow();
	        currentTimerNestedFlushDuration = 0;
	        currentTimerDebugID = debugID;
	        currentTimerType = timerType;
	      }

	      function endLifeCycleTimer(debugID, timerType) {
	        if (currentFlushNesting === 0) {
	          return;
	        }
	        if (currentTimerType !== timerType && !lifeCycleTimerHasWarned) {
	          true ? warning(false, 'There is an internal error in the React performance measurement code. ' + 'We did not expect %s timer to stop while %s timer is still in ' + 'progress for %s instance. Please report this as a bug in React.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : undefined;
	          lifeCycleTimerHasWarned = true;
	        }
	        if (_isProfiling) {
	          currentFlushMeasurements.push({
	            timerType: timerType,
	            instanceID: debugID,
	            duration: performanceNow() - currentTimerStartTime - currentTimerNestedFlushDuration
	          });
	        }
	        currentTimerStartTime = 0;
	        currentTimerNestedFlushDuration = 0;
	        currentTimerDebugID = null;
	        currentTimerType = null;
	      }

	      function pauseCurrentLifeCycleTimer() {
	        var currentTimer = {
	          startTime: currentTimerStartTime,
	          nestedFlushStartTime: performanceNow(),
	          debugID: currentTimerDebugID,
	          timerType: currentTimerType
	        };
	        lifeCycleTimerStack.push(currentTimer);
	        currentTimerStartTime = 0;
	        currentTimerNestedFlushDuration = 0;
	        currentTimerDebugID = null;
	        currentTimerType = null;
	      }

	      function resumeCurrentLifeCycleTimer() {
	        var _lifeCycleTimerStack$ = lifeCycleTimerStack.pop(),
	            startTime = _lifeCycleTimerStack$.startTime,
	            nestedFlushStartTime = _lifeCycleTimerStack$.nestedFlushStartTime,
	            debugID = _lifeCycleTimerStack$.debugID,
	            timerType = _lifeCycleTimerStack$.timerType;

	        var nestedFlushDuration = performanceNow() - nestedFlushStartTime;
	        currentTimerStartTime = startTime;
	        currentTimerNestedFlushDuration += nestedFlushDuration;
	        currentTimerDebugID = debugID;
	        currentTimerType = timerType;
	      }

	      var lastMarkTimeStamp = 0;
	      var canUsePerformanceMeasure = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';

	      function shouldMark(debugID) {
	        if (!_isProfiling || !canUsePerformanceMeasure) {
	          return false;
	        }
	        var element = ReactComponentTreeHook.getElement(debugID);
	        if (element == null || (typeof element === 'undefined' ? 'undefined' : _typeof2(element)) !== 'object') {
	          return false;
	        }
	        var isHostElement = typeof element.type === 'string';
	        if (isHostElement) {
	          return false;
	        }
	        return true;
	      }

	      function markBegin(debugID, markType) {
	        if (!shouldMark(debugID)) {
	          return;
	        }

	        var markName = debugID + '::' + markType;
	        lastMarkTimeStamp = performanceNow();
	        performance.mark(markName);
	      }

	      function markEnd(debugID, markType) {
	        if (!shouldMark(debugID)) {
	          return;
	        }

	        var markName = debugID + '::' + markType;
	        var displayName = ReactComponentTreeHook.getDisplayName(debugID) || 'Unknown';

	        // Chrome has an issue of dropping markers recorded too fast:
	        // https://bugs.chromium.org/p/chromium/issues/detail?id=640652
	        // To work around this, we will not report very small measurements.
	        // I determined the magic number by tweaking it back and forth.
	        // 0.05ms was enough to prevent the issue, but I set it to 0.1ms to be safe.
	        // When the bug is fixed, we can `measure()` unconditionally if we want to.
	        var timeStamp = performanceNow();
	        if (timeStamp - lastMarkTimeStamp > 0.1) {
	          var measurementName = displayName + ' [' + markType + ']';
	          performance.measure(measurementName, markName);
	        }

	        performance.clearMarks(markName);
	        if (measurementName) {
	          performance.clearMeasures(measurementName);
	        }
	      }

	      var ReactDebugTool = {
	        addHook: function addHook(hook) {
	          hooks.push(hook);
	        },
	        removeHook: function removeHook(hook) {
	          for (var i = 0; i < hooks.length; i++) {
	            if (hooks[i] === hook) {
	              hooks.splice(i, 1);
	              i--;
	            }
	          }
	        },
	        isProfiling: function isProfiling() {
	          return _isProfiling;
	        },
	        beginProfiling: function beginProfiling() {
	          if (_isProfiling) {
	            return;
	          }

	          _isProfiling = true;
	          flushHistory.length = 0;
	          resetMeasurements();
	          ReactDebugTool.addHook(ReactHostOperationHistoryHook);
	        },
	        endProfiling: function endProfiling() {
	          if (!_isProfiling) {
	            return;
	          }

	          _isProfiling = false;
	          resetMeasurements();
	          ReactDebugTool.removeHook(ReactHostOperationHistoryHook);
	        },
	        getFlushHistory: function getFlushHistory() {
	          return flushHistory;
	        },
	        onBeginFlush: function onBeginFlush() {
	          currentFlushNesting++;
	          resetMeasurements();
	          pauseCurrentLifeCycleTimer();
	          emitEvent('onBeginFlush');
	        },
	        onEndFlush: function onEndFlush() {
	          resetMeasurements();
	          currentFlushNesting--;
	          resumeCurrentLifeCycleTimer();
	          emitEvent('onEndFlush');
	        },
	        onBeginLifeCycleTimer: function onBeginLifeCycleTimer(debugID, timerType) {
	          checkDebugID(debugID);
	          emitEvent('onBeginLifeCycleTimer', debugID, timerType);
	          markBegin(debugID, timerType);
	          beginLifeCycleTimer(debugID, timerType);
	        },
	        onEndLifeCycleTimer: function onEndLifeCycleTimer(debugID, timerType) {
	          checkDebugID(debugID);
	          endLifeCycleTimer(debugID, timerType);
	          markEnd(debugID, timerType);
	          emitEvent('onEndLifeCycleTimer', debugID, timerType);
	        },
	        onBeginProcessingChildContext: function onBeginProcessingChildContext() {
	          emitEvent('onBeginProcessingChildContext');
	        },
	        onEndProcessingChildContext: function onEndProcessingChildContext() {
	          emitEvent('onEndProcessingChildContext');
	        },
	        onHostOperation: function onHostOperation(operation) {
	          checkDebugID(operation.instanceID);
	          emitEvent('onHostOperation', operation);
	        },
	        onSetState: function onSetState() {
	          emitEvent('onSetState');
	        },
	        onSetChildren: function onSetChildren(debugID, childDebugIDs) {
	          checkDebugID(debugID);
	          childDebugIDs.forEach(checkDebugID);
	          emitEvent('onSetChildren', debugID, childDebugIDs);
	        },
	        onBeforeMountComponent: function onBeforeMountComponent(debugID, element, parentDebugID) {
	          checkDebugID(debugID);
	          checkDebugID(parentDebugID, true);
	          emitEvent('onBeforeMountComponent', debugID, element, parentDebugID);
	          markBegin(debugID, 'mount');
	        },
	        onMountComponent: function onMountComponent(debugID) {
	          checkDebugID(debugID);
	          markEnd(debugID, 'mount');
	          emitEvent('onMountComponent', debugID);
	        },
	        onBeforeUpdateComponent: function onBeforeUpdateComponent(debugID, element) {
	          checkDebugID(debugID);
	          emitEvent('onBeforeUpdateComponent', debugID, element);
	          markBegin(debugID, 'update');
	        },
	        onUpdateComponent: function onUpdateComponent(debugID) {
	          checkDebugID(debugID);
	          markEnd(debugID, 'update');
	          emitEvent('onUpdateComponent', debugID);
	        },
	        onBeforeUnmountComponent: function onBeforeUnmountComponent(debugID) {
	          checkDebugID(debugID);
	          emitEvent('onBeforeUnmountComponent', debugID);
	          markBegin(debugID, 'unmount');
	        },
	        onUnmountComponent: function onUnmountComponent(debugID) {
	          checkDebugID(debugID);
	          markEnd(debugID, 'unmount');
	          emitEvent('onUnmountComponent', debugID);
	        },
	        onTestEvent: function onTestEvent() {
	          emitEvent('onTestEvent');
	        }
	      };

	      // TODO remove these when RN/www gets updated
	      ReactDebugTool.addDevtool = ReactDebugTool.addHook;
	      ReactDebugTool.removeDevtool = ReactDebugTool.removeHook;

	      ReactDebugTool.addHook(ReactInvalidSetStateWarningHook);
	      ReactDebugTool.addHook(ReactComponentTreeHook);
	      var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
	      if (/[?&]react_perf\b/.test(url)) {
	        ReactDebugTool.beginProfiling();
	      }

	      module.exports = ReactDebugTool;

	      /***/
	    },
	    /* 17 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";
	      /**
	       * Copyright (c) 2016-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       * 
	       */

	      var warning = __webpack_require__(18);

	      if (true) {
	        var processingChildContext = false;

	        var warnInvalidSetState = function warnInvalidSetState() {
	          true ? warning(!processingChildContext, 'setState(...): Cannot call setState() inside getChildContext()') : undefined;
	        };
	      }

	      var ReactInvalidSetStateWarningHook = {
	        onBeginProcessingChildContext: function onBeginProcessingChildContext() {
	          processingChildContext = true;
	        },
	        onEndProcessingChildContext: function onEndProcessingChildContext() {
	          processingChildContext = false;
	        },
	        onSetState: function onSetState() {
	          warnInvalidSetState();
	        }
	      };

	      module.exports = ReactInvalidSetStateWarningHook;

	      /***/
	    },
	    /* 18 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";
	      /**
	       * Copyright (c) 2014-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       */

	      var emptyFunction = __webpack_require__(19);

	      /**
	       * Similar to invariant but only logs a warning if the condition is not met.
	       * This can be used to log issues in development environments in critical
	       * paths. Removing the logging code for production environments will keep the
	       * same logic and follow the same code paths.
	       */

	      var warning = emptyFunction;

	      if (true) {
	        var printWarning = function printWarning(format) {
	          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            args[_key - 1] = arguments[_key];
	          }

	          var argIndex = 0;
	          var message = 'Warning: ' + format.replace(/%s/g, function () {
	            return args[argIndex++];
	          });
	          if (typeof console !== 'undefined') {
	            console.error(message);
	          }
	          try {
	            // --- Welcome to debugging React ---
	            // This error was thrown as a convenience so that you can use this stack
	            // to find the callsite that caused this warning to fire.
	            throw new Error(message);
	          } catch (x) {}
	        };

	        warning = function warning(condition, format) {
	          if (format === undefined) {
	            throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	          }

	          if (format.indexOf('Failed Composite propType: ') === 0) {
	            return; // Ignore CompositeComponent proptype check.
	          }

	          if (!condition) {
	            for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	              args[_key2 - 2] = arguments[_key2];
	            }

	            printWarning.apply(undefined, [format].concat(args));
	          }
	        };
	      }

	      module.exports = warning;

	      /***/
	    },
	    /* 19 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";

	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       * 
	       */

	      function makeEmptyFunction(arg) {
	        return function () {
	          return arg;
	        };
	      }

	      /**
	       * This function accepts and discards inputs; it has no side effects. This is
	       * primarily useful idiomatically for overridable function endpoints which
	       * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	       */
	      var emptyFunction = function emptyFunction() {};

	      emptyFunction.thatReturns = makeEmptyFunction;
	      emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	      emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	      emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	      emptyFunction.thatReturnsThis = function () {
	        return this;
	      };
	      emptyFunction.thatReturnsArgument = function (arg) {
	        return arg;
	      };

	      module.exports = emptyFunction;

	      /***/
	    },
	    /* 20 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";
	      /**
	       * Copyright (c) 2016-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       * 
	       */

	      var history = [];

	      var ReactHostOperationHistoryHook = {
	        onHostOperation: function onHostOperation(operation) {
	          history.push(operation);
	        },
	        clearHistory: function clearHistory() {
	          if (ReactHostOperationHistoryHook._preventClearing) {
	            // Should only be used for tests.
	            return;
	          }

	          history = [];
	        },
	        getHistory: function getHistory() {
	          return history;
	        }
	      };

	      module.exports = ReactHostOperationHistoryHook;

	      /***/
	    },
	    /* 21 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";
	      /**
	       * Copyright (c) 2016-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       * 
	       */

	      var _prodInvariant = __webpack_require__(22);

	      var ReactCurrentOwner = __webpack_require__(23);

	      var invariant = __webpack_require__(24);
	      var warning = __webpack_require__(18);

	      function isNative(fn) {
	        // Based on isNative() from Lodash
	        var funcToString = Function.prototype.toString;
	        var hasOwnProperty = Object.prototype.hasOwnProperty;
	        var reIsNative = RegExp('^' + funcToString
	        // Take an example native function source for comparison
	        .call(hasOwnProperty
	        // Strip regex characters so we can use it for regex
	        ).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'
	        // Remove hasOwnProperty from the template to make it generic
	        ).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	        try {
	          var source = funcToString.call(fn);
	          return reIsNative.test(source);
	        } catch (err) {
	          return false;
	        }
	      }

	      var canUseCollections =
	      // Array.from
	      typeof Array.from === 'function' &&
	      // Map
	      typeof Map === 'function' && isNative(Map) &&
	      // Map.prototype.keys
	      Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	      // Set
	      typeof Set === 'function' && isNative(Set) &&
	      // Set.prototype.keys
	      Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

	      var setItem;
	      var getItem;
	      var removeItem;
	      var getItemIDs;
	      var addRoot;
	      var removeRoot;
	      var getRootIDs;

	      if (canUseCollections) {
	        var itemMap = new Map();
	        var rootIDSet = new Set();

	        setItem = function setItem(id, item) {
	          itemMap.set(id, item);
	        };
	        getItem = function getItem(id) {
	          return itemMap.get(id);
	        };
	        removeItem = function removeItem(id) {
	          itemMap['delete'](id);
	        };
	        getItemIDs = function getItemIDs() {
	          return Array.from(itemMap.keys());
	        };

	        addRoot = function addRoot(id) {
	          rootIDSet.add(id);
	        };
	        removeRoot = function removeRoot(id) {
	          rootIDSet['delete'](id);
	        };
	        getRootIDs = function getRootIDs() {
	          return Array.from(rootIDSet.keys());
	        };
	      } else {
	        var itemByKey = {};
	        var rootByKey = {};

	        // Use non-numeric keys to prevent V8 performance issues:
	        // https://github.com/facebook/react/pull/7232
	        var getKeyFromID = function getKeyFromID(id) {
	          return '.' + id;
	        };
	        var getIDFromKey = function getIDFromKey(key) {
	          return parseInt(key.substr(1), 10);
	        };

	        setItem = function setItem(id, item) {
	          var key = getKeyFromID(id);
	          itemByKey[key] = item;
	        };
	        getItem = function getItem(id) {
	          var key = getKeyFromID(id);
	          return itemByKey[key];
	        };
	        removeItem = function removeItem(id) {
	          var key = getKeyFromID(id);
	          delete itemByKey[key];
	        };
	        getItemIDs = function getItemIDs() {
	          return Object.keys(itemByKey).map(getIDFromKey);
	        };

	        addRoot = function addRoot(id) {
	          var key = getKeyFromID(id);
	          rootByKey[key] = true;
	        };
	        removeRoot = function removeRoot(id) {
	          var key = getKeyFromID(id);
	          delete rootByKey[key];
	        };
	        getRootIDs = function getRootIDs() {
	          return Object.keys(rootByKey).map(getIDFromKey);
	        };
	      }

	      var unmountedIDs = [];

	      function purgeDeep(id) {
	        var item = getItem(id);
	        if (item) {
	          var childIDs = item.childIDs;

	          removeItem(id);
	          childIDs.forEach(purgeDeep);
	        }
	      }

	      function describeComponentFrame(name, source, ownerName) {
	        return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	      }

	      function _getDisplayName(element) {
	        if (element == null) {
	          return '#empty';
	        } else if (typeof element === 'string' || typeof element === 'number') {
	          return '#text';
	        } else if (typeof element.type === 'string') {
	          return element.type;
	        } else {
	          return element.type.displayName || element.type.name || 'Unknown';
	        }
	      }

	      function describeID(id) {
	        var name = ReactComponentTreeHook.getDisplayName(id);
	        var element = ReactComponentTreeHook.getElement(id);
	        var ownerID = ReactComponentTreeHook.getOwnerID(id);
	        var ownerName;
	        if (ownerID) {
	          ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	        }
	        true ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : undefined;
	        return describeComponentFrame(name, element && element._source, ownerName);
	      }

	      var ReactComponentTreeHook = {
	        onSetChildren: function onSetChildren(id, nextChildIDs) {
	          var item = getItem(id);
	          !item ? true ? invariant(false, 'Item must have been set') : undefined : void 0;
	          item.childIDs = nextChildIDs;

	          for (var i = 0; i < nextChildIDs.length; i++) {
	            var nextChildID = nextChildIDs[i];
	            var nextChild = getItem(nextChildID);
	            !nextChild ? true ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : undefined : void 0;
	            !(nextChild.childIDs != null || _typeof2(nextChild.element) !== 'object' || nextChild.element == null) ? true ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : undefined : void 0;
	            !nextChild.isMounted ? true ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : undefined : void 0;
	            if (nextChild.parentID == null) {
	              nextChild.parentID = id;
	              // TODO: This shouldn't be necessary but mounting a new root during in
	              // componentWillMount currently causes not-yet-mounted components to
	              // be purged from our tree data so their parent id is missing.
	            }
	            !(nextChild.parentID === id) ? true ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : undefined : void 0;
	          }
	        },
	        onBeforeMountComponent: function onBeforeMountComponent(id, element, parentID) {
	          var item = {
	            element: element,
	            parentID: parentID,
	            text: null,
	            childIDs: [],
	            isMounted: false,
	            updateCount: 0
	          };
	          setItem(id, item);
	        },
	        onBeforeUpdateComponent: function onBeforeUpdateComponent(id, element) {
	          var item = getItem(id);
	          if (!item || !item.isMounted) {
	            // We may end up here as a result of setState() in componentWillUnmount().
	            // In this case, ignore the element.
	            return;
	          }
	          item.element = element;
	        },
	        onMountComponent: function onMountComponent(id) {
	          var item = getItem(id);
	          !item ? true ? invariant(false, 'Item must have been set') : undefined : void 0;
	          item.isMounted = true;
	          var isRoot = item.parentID === 0;
	          if (isRoot) {
	            addRoot(id);
	          }
	        },
	        onUpdateComponent: function onUpdateComponent(id) {
	          var item = getItem(id);
	          if (!item || !item.isMounted) {
	            // We may end up here as a result of setState() in componentWillUnmount().
	            // In this case, ignore the element.
	            return;
	          }
	          item.updateCount++;
	        },
	        onUnmountComponent: function onUnmountComponent(id) {
	          var item = getItem(id);
	          if (item) {
	            // We need to check if it exists.
	            // `item` might not exist if it is inside an error boundary, and a sibling
	            // error boundary child threw while mounting. Then this instance never
	            // got a chance to mount, but it still gets an unmounting event during
	            // the error boundary cleanup.
	            item.isMounted = false;
	            var isRoot = item.parentID === 0;
	            if (isRoot) {
	              removeRoot(id);
	            }
	          }
	          unmountedIDs.push(id);
	        },
	        purgeUnmountedComponents: function purgeUnmountedComponents() {
	          if (ReactComponentTreeHook._preventPurging) {
	            // Should only be used for testing.
	            return;
	          }

	          for (var i = 0; i < unmountedIDs.length; i++) {
	            var id = unmountedIDs[i];
	            purgeDeep(id);
	          }
	          unmountedIDs.length = 0;
	        },
	        isMounted: function isMounted(id) {
	          var item = getItem(id);
	          return item ? item.isMounted : false;
	        },
	        getCurrentStackAddendum: function getCurrentStackAddendum(topElement) {
	          var info = '';
	          if (topElement) {
	            var name = _getDisplayName(topElement);
	            var owner = topElement._owner;
	            info += describeComponentFrame(name, topElement._source, owner && owner.getName());
	          }

	          var currentOwner = ReactCurrentOwner.current;
	          var id = currentOwner && currentOwner._debugID;

	          info += ReactComponentTreeHook.getStackAddendumByID(id);
	          return info;
	        },
	        getStackAddendumByID: function getStackAddendumByID(id) {
	          var info = '';
	          while (id) {
	            info += describeID(id);
	            id = ReactComponentTreeHook.getParentID(id);
	          }
	          return info;
	        },
	        getChildIDs: function getChildIDs(id) {
	          var item = getItem(id);
	          return item ? item.childIDs : [];
	        },
	        getDisplayName: function getDisplayName(id) {
	          var element = ReactComponentTreeHook.getElement(id);
	          if (!element) {
	            return null;
	          }
	          return _getDisplayName(element);
	        },
	        getElement: function getElement(id) {
	          var item = getItem(id);
	          return item ? item.element : null;
	        },
	        getOwnerID: function getOwnerID(id) {
	          var element = ReactComponentTreeHook.getElement(id);
	          if (!element || !element._owner) {
	            return null;
	          }
	          return element._owner._debugID;
	        },
	        getParentID: function getParentID(id) {
	          var item = getItem(id);
	          return item ? item.parentID : null;
	        },
	        getSource: function getSource(id) {
	          var item = getItem(id);
	          var element = item ? item.element : null;
	          var source = element != null ? element._source : null;
	          return source;
	        },
	        getText: function getText(id) {
	          var element = ReactComponentTreeHook.getElement(id);
	          if (typeof element === 'string') {
	            return element;
	          } else if (typeof element === 'number') {
	            return '' + element;
	          } else {
	            return null;
	          }
	        },
	        getUpdateCount: function getUpdateCount(id) {
	          var item = getItem(id);
	          return item ? item.updateCount : 0;
	        },

	        getRootIDs: getRootIDs,
	        getRegisteredIDs: getItemIDs,

	        pushNonStandardWarningStack: function pushNonStandardWarningStack(isCreatingElement, currentSource) {
	          if (typeof console.reactStack !== 'function') {
	            return;
	          }

	          var stack = [];
	          var currentOwner = ReactCurrentOwner.current;
	          var id = currentOwner && currentOwner._debugID;

	          try {
	            if (isCreatingElement) {
	              stack.push({
	                name: id ? ReactComponentTreeHook.getDisplayName(id) : null,
	                fileName: currentSource ? currentSource.fileName : null,
	                lineNumber: currentSource ? currentSource.lineNumber : null
	              });
	            }

	            while (id) {
	              var element = ReactComponentTreeHook.getElement(id);
	              var parentID = ReactComponentTreeHook.getParentID(id);
	              var ownerID = ReactComponentTreeHook.getOwnerID(id);
	              var ownerName = ownerID ? ReactComponentTreeHook.getDisplayName(ownerID) : null;
	              var source = element && element._source;
	              stack.push({
	                name: ownerName,
	                fileName: source ? source.fileName : null,
	                lineNumber: source ? source.lineNumber : null
	              });
	              id = parentID;
	            }
	          } catch (err) {
	            // Internal state is messed up.
	            // Stop building the stack (it's just a nice to have).
	          }

	          console.reactStack(stack);
	        },
	        popNonStandardWarningStack: function popNonStandardWarningStack() {
	          if (typeof console.reactStackEnd !== 'function') {
	            return;
	          }
	          console.reactStackEnd();
	        }
	      };

	      module.exports = ReactComponentTreeHook;

	      /***/
	    },
	    /* 22 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       * 
	       */

	      /**
	       * WARNING: DO NOT manually require this module.
	       * This is a replacement for `invariant(...)` used by the error code system
	       * and will _only_ be required by the corresponding babel pass.
	       * It always throws.
	       */

	      function reactProdInvariant(code) {
	        var argCount = arguments.length - 1;

	        var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

	        for (var argIdx = 0; argIdx < argCount; argIdx++) {
	          message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	        }

	        message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

	        var error = new Error(message);
	        error.name = 'Invariant Violation';
	        error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

	        throw error;
	      }

	      module.exports = reactProdInvariant;

	      /***/
	    },
	    /* 23 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       * 
	       */

	      /**
	       * Keeps track of the current owner.
	       *
	       * The current owner is the component who should own any components that are
	       * currently being constructed.
	       */

	      var ReactCurrentOwner = {
	        /**
	         * @internal
	         * @type {ReactComponent}
	         */
	        current: null
	      };

	      module.exports = ReactCurrentOwner;

	      /***/
	    },
	    /* 24 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       */

	      /**
	       * Use invariant() to assert state which your program assumes to be true.
	       *
	       * Provide sprintf-style format (only %s is supported) and arguments
	       * to provide information about what broke and what you were
	       * expecting.
	       *
	       * The invariant message will be stripped in production, but the invariant
	       * will remain to ensure logic does not differ in production.
	       */

	      var validateFormat = function validateFormat(format) {};

	      if (true) {
	        validateFormat = function validateFormat(format) {
	          if (format === undefined) {
	            throw new Error('invariant requires an error message argument');
	          }
	        };
	      }

	      function invariant(condition, format, a, b, c, d, e, f) {
	        validateFormat(format);

	        if (!condition) {
	          var error;
	          if (format === undefined) {
	            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	          } else {
	            var args = [a, b, c, d, e, f];
	            var argIndex = 0;
	            error = new Error(format.replace(/%s/g, function () {
	              return args[argIndex++];
	            }));
	            error.name = 'Invariant Violation';
	          }

	          error.framesToPop = 1; // we don't care about invariant's own frame
	          throw error;
	        }
	      }

	      module.exports = invariant;

	      /***/
	    },
	    /* 25 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";

	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       * @typechecks
	       */

	      var performance = __webpack_require__(26);

	      var performanceNow;

	      /**
	       * Detect if we can use `window.performance.now()` and gracefully fallback to
	       * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
	       * because of Facebook's testing infrastructure.
	       */
	      if (performance.now) {
	        performanceNow = function performanceNow() {
	          return performance.now();
	        };
	      } else {
	        performanceNow = function performanceNow() {
	          return Date.now();
	        };
	      }

	      module.exports = performanceNow;

	      /***/
	    },
	    /* 26 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       * @typechecks
	       */

	      var ExecutionEnvironment = __webpack_require__(14);

	      var performance;

	      if (ExecutionEnvironment.canUseDOM) {
	        performance = window.performance || window.msPerformance || window.webkitPerformance;
	      }

	      module.exports = performance || {};

	      /***/
	    },
	    /* 27 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       * @typechecks
	       */

	      var camelize = __webpack_require__(28);

	      var msPattern = /^-ms-/;

	      /**
	       * Camelcases a hyphenated CSS property name, for example:
	       *
	       *   > camelizeStyleName('background-color')
	       *   < "backgroundColor"
	       *   > camelizeStyleName('-moz-transition')
	       *   < "MozTransition"
	       *   > camelizeStyleName('-ms-transition')
	       *   < "msTransition"
	       *
	       * As Andi Smith suggests
	       * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	       * is converted to lowercase `ms`.
	       *
	       * @param {string} string
	       * @return {string}
	       */
	      function camelizeStyleName(string) {
	        return camelize(string.replace(msPattern, 'ms-'));
	      }

	      module.exports = camelizeStyleName;

	      /***/
	    },
	    /* 28 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";

	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       * @typechecks
	       */

	      var _hyphenPattern = /-(.)/g;

	      /**
	       * Camelcases a hyphenated string, for example:
	       *
	       *   > camelize('background-color')
	       *   < "backgroundColor"
	       *
	       * @param {string} string
	       * @return {string}
	       */
	      function camelize(string) {
	        return string.replace(_hyphenPattern, function (_, character) {
	          return character.toUpperCase();
	        });
	      }

	      module.exports = camelize;

	      /***/
	    },
	    /* 29 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       */

	      var CSSProperty = __webpack_require__(13);
	      var warning = __webpack_require__(18);

	      var isUnitlessNumber = CSSProperty.isUnitlessNumber;
	      var styleWarnings = {};

	      /**
	       * Convert a value into the proper css writable value. The style name `name`
	       * should be logical (no hyphens), as specified
	       * in `CSSProperty.isUnitlessNumber`.
	       *
	       * @param {string} name CSS property name such as `topMargin`.
	       * @param {*} value CSS property value such as `10px`.
	       * @param {ReactDOMComponent} component
	       * @return {string} Normalized style value with dimensions applied.
	       */
	      function dangerousStyleValue(name, value, component, isCustomProperty) {
	        // Note that we've removed escapeTextForBrowser() calls here since the
	        // whole string will be escaped when the attribute is injected into
	        // the markup. If you provide unsafe user data here they can inject
	        // arbitrary CSS which may be problematic (I couldn't repro this):
	        // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	        // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	        // This is not an XSS hole but instead a potential CSS injection issue
	        // which has lead to a greater discussion about how we're going to
	        // trust URLs moving forward. See #2115901

	        var isEmpty = value == null || typeof value === 'boolean' || value === '';
	        if (isEmpty) {
	          return '';
	        }

	        var isNonNumeric = isNaN(value);
	        if (isCustomProperty || isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
	          return '' + value; // cast to string
	        }

	        if (typeof value === 'string') {
	          if (true) {
	            // Allow '0' to pass through without warning. 0 is already special and
	            // doesn't require units, so we don't need to warn about it.
	            if (component && value !== '0') {
	              var owner = component._currentElement._owner;
	              var ownerName = owner ? owner.getName() : null;
	              if (ownerName && !styleWarnings[ownerName]) {
	                styleWarnings[ownerName] = {};
	              }
	              var warned = false;
	              if (ownerName) {
	                var warnings = styleWarnings[ownerName];
	                warned = warnings[name];
	                if (!warned) {
	                  warnings[name] = true;
	                }
	              }
	              if (!warned) {
	                true ? warning(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : undefined;
	              }
	            }
	          }
	          value = value.trim();
	        }
	        return value + 'px';
	      }

	      module.exports = dangerousStyleValue;

	      /***/
	    },
	    /* 30 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       * @typechecks
	       */

	      var hyphenate = __webpack_require__(31);

	      var msPattern = /^ms-/;

	      /**
	       * Hyphenates a camelcased CSS property name, for example:
	       *
	       *   > hyphenateStyleName('backgroundColor')
	       *   < "background-color"
	       *   > hyphenateStyleName('MozTransition')
	       *   < "-moz-transition"
	       *   > hyphenateStyleName('msTransition')
	       *   < "-ms-transition"
	       *
	       * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	       * is converted to `-ms-`.
	       *
	       * @param {string} string
	       * @return {string}
	       */
	      function hyphenateStyleName(string) {
	        return hyphenate(string).replace(msPattern, '-ms-');
	      }

	      module.exports = hyphenateStyleName;

	      /***/
	    },
	    /* 31 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";

	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       * @typechecks
	       */

	      var _uppercasePattern = /([A-Z])/g;

	      /**
	       * Hyphenates a camelcased string, for example:
	       *
	       *   > hyphenate('backgroundColor')
	       *   < "background-color"
	       *
	       * For CSS style names, use `hyphenateStyleName` instead which works properly
	       * with all vendor prefixes, including `ms`.
	       *
	       * @param {string} string
	       * @return {string}
	       */
	      function hyphenate(string) {
	        return string.replace(_uppercasePattern, '-$1').toLowerCase();
	      }

	      module.exports = hyphenate;

	      /***/
	    },
	    /* 32 */
	    /***/function (module, exports, __webpack_require__) {

	      "use strict";
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       *
	       * This source code is licensed under the MIT license found in the
	       * LICENSE file in the root directory of this source tree.
	       *
	       * 
	       * @typechecks static-only
	       */

	      /**
	       * Memoizes the return value of a function that accepts one string argument.
	       */

	      function memoizeStringOnly(callback) {
	        var cache = {};
	        return function (string) {
	          if (!cache.hasOwnProperty(string)) {
	            cache[string] = callback.call(this, string);
	          }
	          return cache[string];
	        };
	      }

	      module.exports = memoizeStringOnly;

	      /***/
	    }]
	    /******/)
	  );
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ })
/******/ ])
});
;