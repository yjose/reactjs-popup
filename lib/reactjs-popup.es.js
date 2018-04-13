/*!
 * reactjs-popup v1.1.0
 * (c) 2018-present Youssouf EL AZIZI <youssoufelazizi@gmail.com>
 * Released under the MIT License.
 */
import React from 'react';
import { findDOMNode } from 'react-dom';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/* Algo to calculate position 
  1. center position for popup content : the center of the trigger will be the center of the content content
      so the popup content position will be like this :
      top => the y of the center for the trigger element : trigger.top + trigger.height/2
      left => the x of the center for the trigger element : trigger.left + trigger.width/2

  2. translate position according to the first  position attribute  passed  in the function argument 
      for example :
        position = 'left top'
        we need to handle the first argument in the position: 'left' => that's mean we need to translate the popup content according to the X axis by - content.width/2
      
  3.translate position according to the first  position attribute  passed  in the function argument 
    for example :
      position = 'left top'
      the second argument 'top' => translate popup content by + content.height*4/5

*/
function calculatePosition(triggerBounding, ContentBounding, position, arrow, offset) {
  var margin = arrow ? 8 : 0;
  var MarginX = margin + offset.offsetX;
  var MarginY = margin + offset.offsetY;
  var args = position.split(" "); // the step N 1 : center the popup content => ok

  var CenterTop = triggerBounding.top + triggerBounding.height / 2;
  var CenterLeft = triggerBounding.left + triggerBounding.width / 2;
  var height = ContentBounding.height,
      width = ContentBounding.width;
  var top = CenterTop - height / 2;
  var left = CenterLeft - width / 2;
  var transform = "";
  var arrowTop = "0%";
  var arrowLeft = "0%"; // the  step N 2 : => ok

  switch (args[0]) {
    case "top":
      top -= height / 2 + triggerBounding.height / 2 + MarginY;
      transform = "rotate(45deg)";
      arrowTop = "100%";
      arrowLeft = "50%";
      break;

    case "bottom":
      top += height / 2 + triggerBounding.height / 2 + MarginY;
      transform = "rotate(225deg)";
      arrowLeft = "50%";
      break;

    case "left":
      left -= width / 2 + triggerBounding.width / 2 + MarginX;
      transform = " rotate(-45deg)";
      arrowLeft = "100%";
      arrowTop = "50%";
      break;

    case "right":
      left += width / 2 + triggerBounding.width / 2 + MarginX;
      transform = "rotate(135deg)";
      arrowTop = "50%";
      break;
  }

  switch (args[1]) {
    case "top":
      top = triggerBounding.top;
      arrowTop = triggerBounding.height / 2 + "px";
      break;

    case "bottom":
      top = triggerBounding.top - height + triggerBounding.height;
      arrowTop = height - triggerBounding.height / 2 + "px";
      break;

    case "left":
      left = triggerBounding.left;
      arrowLeft = triggerBounding.width / 2 + "px";
      break;

    case "right":
      left = triggerBounding.left - width + triggerBounding.width;
      arrowLeft = width - triggerBounding.width / 2 + "px";
      break;
  }

  return {
    top: top,
    left: left,
    transform: transform,
    arrowLeft: arrowLeft,
    arrowTop: arrowTop
  };
}

var styles = {
  popupContent: {
    tooltip: {
      position: "absolute",
      zIndex: "2",
      width: "200px",
      background: "rgb(255, 255, 255)",
      border: "1px solid rgb(187, 187, 187)",
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 3px",
      padding: "5px"
    },
    modal: {
      position: "relative",
      background: "rgb(255, 255, 255)",
      width: "50%",
      margin: "auto",
      border: "1px solid rgb(187, 187, 187)",
      padding: "5px"
    }
  },
  popupArrow: {
    height: "10px",
    width: "10px",
    position: "absolute",
    background: "rgb(255, 255, 255)",
    transform: "rotate(45deg)",
    margin: "-5px",
    zIndex: "-1",
    boxShadow: "rgba(0, 0, 0, 0.2) 1px 1px 1px"
  },
  overlay: {
    tooltip: {
      position: "fixed",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0"
    },
    modal: {
      position: "fixed",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      background: "rgba(0, 0, 0,0.5)",
      display: "flex",
      zIndex: "999"
    }
  }
};

var Popup =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Popup, _React$PureComponent);

  function Popup(props) {
    var _this;

    _classCallCheck(this, Popup);

    _this = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        isOpen: _this.props.open || _this.props.defaultOpen,
        modal: _this.props.modal ? true : !_this.props.trigger // we create this modal state because the popup can't be a tooltip if the trigger prop doesn't existe

      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "lockScroll", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.state.modal && _this.props.lockScroll) document.getElementsByTagName("body")[0].style.overflow = "hidden";
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "resetScroll", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.state.modal && _this.props.lockScroll) document.getElementsByTagName("body")[0].style.overflow = "auto";
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "togglePopup", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.state.isOpen) _this.closePopup();else _this.openPopup();
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "openPopup", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.state.isOpen) return;

        _this.setState({
          isOpen: true
        }, function () {
          _this.setPosition();

          _this.props.onOpen();

          _this.lockScroll();
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "closePopup", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (!_this.state.isOpen) return;

        _this.setState({
          isOpen: false
        }, function () {
          _this.props.onClose();

          _this.resetScroll();
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onMouseEnter", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        clearTimeout(_this.timeOut);
        var mouseEnterDelay = _this.props.mouseEnterDelay;
        _this.timeOut = setTimeout(function () {
          return _this.openPopup();
        }, mouseEnterDelay);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onMouseLeave", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        clearTimeout(_this.timeOut);
        var mouseLeaveDelay = _this.props.mouseLeaveDelay;
        _this.timeOut = setTimeout(function () {
          return _this.closePopup();
        }, mouseLeaveDelay);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setPosition", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props = _this.props,
            arrow = _this$props.arrow,
            position = _this$props.position,
            offsetX = _this$props.offsetX,
            offsetY = _this$props.offsetY;
        var modal = _this.state.modal;
        if (modal) return;

        var helper = _this.HelperEl.getBoundingClientRect();

        var trigger = _this.TriggerEl.getBoundingClientRect();

        var content = _this.ContentEl.getBoundingClientRect();

        var cords = calculatePosition(trigger, content, position, arrow, {
          offsetX: offsetX,
          offsetY: offsetY
        });
        _this.ContentEl.style.top = cords.top - helper.top + "px";
        _this.ContentEl.style.left = cords.left - helper.left + "px";

        if (arrow) {
          _this.ArrowEl.style["transform"] = cords.transform;
          _this.ArrowEl.style["-ms-transform"] = cords.transform;
          _this.ArrowEl.style["-webkit-transform"] = cords.transform;
          _this.ArrowEl.style.top = cords.arrowTop;
          _this.ArrowEl.style.left = cords.arrowLeft;
        }

        if (window.getComputedStyle(_this.TriggerEl, null).getPropertyValue("position") == "static" || window.getComputedStyle(_this.TriggerEl, null).getPropertyValue("position") == "") _this.TriggerEl.style.position = "relative";
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "addWarperAction", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props2 = _this.props,
            contentStyle = _this$props2.contentStyle,
            className = _this$props2.className,
            on = _this$props2.on;
        var modal = _this.state.modal;
        var popupContentStyle = modal ? styles.popupContent.modal : styles.popupContent.tooltip;
        var childrenElementProps = {
          className: "popup-content ".concat(className),
          style: Object.assign({}, popupContentStyle, contentStyle),
          ref: _this.setContentRef,
          onClick: function onClick(e) {
            e.stopPropagation();
          }
        };

        if (!modal && on.includes("hover")) {
          childrenElementProps.onMouseEnter = _this.onMouseEnter;
          childrenElementProps.onMouseLeave = _this.onMouseLeave;
        }

        return childrenElementProps;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "renderTrigger", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var triggerProps = {
          key: "T"
        };
        var _this$props3 = _this.props,
            on = _this$props3.on,
            trigger = _this$props3.trigger;
        var onAsArray = Array.isArray(on) ? on : [on];

        for (var i = 0, len = onAsArray.length; i < len; i++) {
          switch (onAsArray[i]) {
            case "click":
              triggerProps.onClick = _this.togglePopup;
              break;

            case "hover":
              triggerProps.onMouseEnter = _this.onMouseEnter;
              triggerProps.onMouseLeave = _this.onMouseLeave;

            case "focus":
              triggerProps.onFocus = _this.onMouseEnter;
              break;
          }
        }

        if (typeof trigger === "function") return React.cloneElement(trigger(_this.state.isOpen), triggerProps);
        return React.cloneElement(trigger, triggerProps);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "renderContent", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props4 = _this.props,
            arrow = _this$props4.arrow,
            arrowStyle = _this$props4.arrowStyle;
        var modal = _this.state.modal;
        return React.createElement("div", _extends({}, _this.addWarperAction(), {
          key: "C"
        }), arrow && !modal && React.createElement("div", {
          ref: _this.setArrowRef,
          style: Object.assign({}, styles.popupArrow, arrowStyle)
        }), typeof _this.props.children === "function" ? _this.props.children(_this.closePopup, _this.state.isOpen) : _this.props.children);
      }
    });

    _this.setTriggerRef = function (r) {
      return _this.TriggerEl = r;
    };

    _this.setContentRef = function (r) {
      return _this.ContentEl = r;
    };

    _this.setArrowRef = function (r) {
      return _this.ArrowEl = r;
    };

    _this.setHelperRef = function (r) {
      return _this.HelperEl = r;
    };

    _this.timeOut = 0;
    return _this;
  }

  _createClass(Popup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          closeOnEscape = _props.closeOnEscape,
          defaultOpen = _props.defaultOpen;
      if (defaultOpen) this.setPosition();

      if (closeOnEscape) {
        window.addEventListener("keyup", function (e) {
          if (e.key === "Escape") _this2.closePopup();
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.open === nextProps.open) return;
      if (nextProps.open) this.openPopup();else this.closePopup();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // kill any function to execute if the component is unmounted
      clearTimeout(this.timeOut);
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          overlayStyle = _props2.overlayStyle,
          closeOnDocumentClick = _props2.closeOnDocumentClick,
          on = _props2.on;
      var modal = this.state.modal;
      var overlay = this.state.isOpen && !on.includes("hover");
      var ovStyle = modal ? styles.overlay.modal : styles.overlay.tooltip;
      return [this.state.isOpen && React.createElement("div", {
        key: "H",
        style: {
          position: "absolute",
          top: "0px",
          left: "0px"
        },
        ref: this.setHelperRef
      }), overlay && React.createElement("div", {
        key: "O",
        className: "popup-overlay",
        style: Object.assign({}, ovStyle, overlayStyle),
        onClick: closeOnDocumentClick ? this.closePopup : undefined
      }, modal && this.renderContent()), this.state.isOpen && !modal && this.renderContent(), !!this.props.trigger && React.createElement(Ref, {
        innerRef: this.setTriggerRef,
        key: "R"
      }, this.renderTrigger())];
    }
  }]);

  return Popup;
}(React.PureComponent);

Object.defineProperty(Popup, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    children: function children() {
      return React.createElement("span", null, " Your Content Here !!");
    },
    trigger: null,
    onOpen: function onOpen() {},
    onClose: function onClose() {},
    defaultOpen: false,
    open: false,
    closeOnDocumentClick: true,
    closeOnEscape: true,
    on: ["click"],
    contentStyle: {},
    arrowStyle: {},
    overlayStyle: {},
    className: "",
    position: "bottom center",
    modal: false,
    lockScroll: false,
    arrow: true,
    offsetX: 0,
    offsetY: 0,
    mouseEnterDelay: 100,
    mouseLeaveDelay: 100
  }
});

if (process.env.NODE_ENV !== "production") {
  var PropTypes = require("prop-types");

  Popup.propTypes = {
    arrowStyle: PropTypes.object,
    contentStyle: PropTypes.object,
    overlayStyle: PropTypes.object,
    className: PropTypes.string,
    modal: PropTypes.bool,
    closeOnDocumentClick: PropTypes.bool,
    lockScroll: PropTypes.bool,
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    mouseEnterDelay: PropTypes.number,
    mouseLeaveDelay: PropTypes.number,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    open: PropTypes.bool,
    defaultOpen: PropTypes.bool,
    trigger: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    // for uncontrolled component we don't need the trigger Element
    on: PropTypes.oneOfType([PropTypes.oneOf(["hover", "click", "focus"]), PropTypes.arrayOf(PropTypes.oneOf(["hover", "click", "focus"]))]),
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.element, PropTypes.string]).isRequired,
    position: PropTypes.oneOf(["top left", "top center", "top right", "bottom left", "bottom center", "bottom right", "right top", "right center", "right bottom", "left top", "left center", "left bottom"])
  };
}

var Ref =
/*#__PURE__*/
function (_React$PureComponent2) {
  _inherits(Ref, _React$PureComponent2);

  function Ref(props) {
    _classCallCheck(this, Ref);

    return _possibleConstructorReturn(this, (Ref.__proto__ || Object.getPrototypeOf(Ref)).call(this, props));
  }

  _createClass(Ref, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var innerRef = this.props.innerRef;
      if (innerRef) innerRef(findDOMNode(this));
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return React.Children.only(children);
    }
  }]);

  return Ref;
}(React.PureComponent);

export default Popup;
