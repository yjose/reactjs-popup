/*!
 * reactjs-popup v1.3.1
 * (c) 2018-present Youssouf EL AZIZI <youssoufelazizi@gmail.com>
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
  (global.reactjsPopup = factory(global.React,global.reactDom));
}(this, (function (React,reactDom) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
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
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
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

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
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

    4. check if calculated position is going out of bounds of wrapper box or not. If yes repeat 1-3 for next position enum. By default wrapper box is window element
  */
  function getCoordinatesForPosition(triggerBounding, ContentBounding, position, arrow, _ref) {
    var offsetX = _ref.offsetX,
        offsetY = _ref.offsetY;
    var margin = arrow ? 8 : 0;
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
        top -= height / 2 + triggerBounding.height / 2 + margin;
        transform = "rotate(45deg)";
        arrowTop = "100%";
        arrowLeft = "50%";
        break;

      case "bottom":
        top += height / 2 + triggerBounding.height / 2 + margin;
        transform = "rotate(225deg)";
        arrowLeft = "50%";
        break;

      case "left":
        left -= width / 2 + triggerBounding.width / 2 + margin;
        transform = " rotate(-45deg)";
        arrowLeft = "100%";
        arrowTop = "50%";
        break;

      case "right":
        left += width / 2 + triggerBounding.width / 2 + margin;
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

    top = args[0] === "top" ? top - offsetY : top + offsetY;
    left = args[0] === "left" ? left - offsetX : left + offsetX;
    return {
      top: top,
      left: left,
      transform: transform,
      arrowLeft: arrowLeft,
      arrowTop: arrowTop
    };
  }

  function calculatePosition(triggerBounding, ContentBounding, positions, arrow, _ref2, wrapperBox) {
    var offsetX = _ref2.offsetX,
        offsetY = _ref2.offsetY;
    var bestCoords;
    var i = 0;

    while (i < positions.length) {
      bestCoords = getCoordinatesForPosition(triggerBounding, ContentBounding, positions[i], arrow, {
        offsetX: offsetX,
        offsetY: offsetY
      });
      var contentBox = {
        top: bestCoords.top,
        left: bestCoords.left,
        width: ContentBounding.width,
        height: ContentBounding.height
      };

      if (contentBox.top <= wrapperBox.top || contentBox.left <= wrapperBox.left || contentBox.top + contentBox.height >= wrapperBox.top + wrapperBox.height || contentBox.left + contentBox.width >= wrapperBox.left + wrapperBox.width) {
        i++;
      } else {
        break;
      }
    }

    return bestCoords;
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

  var POSITION_TYPES = ["top left", "top center", "top right", "right top", "right center", "right bottom", "bottom left", "bottom center", "bottom right", "left top", "left center", "left bottom"];

  var Popup =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(Popup, _React$PureComponent);

    function Popup(props) {
      var _this;

      _classCallCheck(this, Popup);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Popup).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        isOpen: _this.props.open || _this.props.defaultOpen,
        modal: _this.props.modal ? true : !_this.props.trigger // we create this modal state because the popup can't be a tooltip if the trigger prop doesn't exist

      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lockScroll", function () {
        if (_this.state.modal && _this.props.lockScroll) document.getElementsByTagName("body")[0].style.overflow = "hidden";
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "resetScroll", function () {
        if (_this.state.modal && _this.props.lockScroll) document.getElementsByTagName("body")[0].style.overflow = "auto";
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "togglePopup", function () {
        if (_this.state.isOpen) _this.closePopup();else _this.openPopup();
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openPopup", function () {
        if (_this.state.isOpen || _this.props.disabled) return;

        _this.setState({
          isOpen: true
        }, function () {
          _this.setPosition();

          _this.props.onOpen();

          _this.lockScroll();
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closePopup", function () {
        if (!_this.state.isOpen) return;

        _this.props.onClose();

        _this.setState({
          isOpen: false
        }, function () {
          _this.resetScroll();
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseEnter", function () {
        clearTimeout(_this.timeOut);
        var mouseEnterDelay = _this.props.mouseEnterDelay;
        _this.timeOut = setTimeout(function () {
          return _this.openPopup();
        }, mouseEnterDelay);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseLeave", function () {
        clearTimeout(_this.timeOut);
        var mouseLeaveDelay = _this.props.mouseLeaveDelay;
        _this.timeOut = setTimeout(function () {
          return _this.closePopup();
        }, mouseLeaveDelay);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getTooltipBoundary", function () {
        var keepTooltipInside = _this.props.keepTooltipInside;
        var boundingBox = {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };

        if (typeof keepTooltipInside === "string") {
          var selector = document.querySelector(keepTooltipInside);

          {
            if (selector === null) throw new Error("".concat(keepTooltipInside, " selector is not exist : keepTooltipInside must be a valid html selector 'class' or 'Id'  or a boolean value"));
          }

          boundingBox = selector.getBoundingClientRect();
        }

        return boundingBox;
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setPosition", function () {
        var _this$props = _this.props,
            arrow = _this$props.arrow,
            position = _this$props.position,
            offsetX = _this$props.offsetX,
            offsetY = _this$props.offsetY,
            keepTooltipInside = _this$props.keepTooltipInside,
            arrowStyle = _this$props.arrowStyle;
        var modal = _this.state.modal;
        if (modal) return;

        var helper = _this.HelperEl.getBoundingClientRect();

        var trigger = _this.TriggerEl.getBoundingClientRect();

        var content = _this.ContentEl.getBoundingClientRect();

        var boundingBox = _this.getTooltipBoundary();

        var positions = Array.isArray(position) ? position : [position]; // keepTooltipInside would be activated if the  keepTooltipInside exist or the position is Array

        if (keepTooltipInside || Array.isArray(position)) positions = _toConsumableArray(positions).concat(POSITION_TYPES);
        var cords = calculatePosition(trigger, content, positions, arrow, {
          offsetX: offsetX,
          offsetY: offsetY
        }, boundingBox);
        _this.ContentEl.style.top = cords.top - helper.top + "px";
        _this.ContentEl.style.left = cords.left - helper.left + "px";

        if (arrow) {
          _this.ArrowEl.style["transform"] = cords.transform;
          _this.ArrowEl.style["-ms-transform"] = cords.transform;
          _this.ArrowEl.style["-webkit-transform"] = cords.transform;
          _this.ArrowEl.style.top = arrowStyle.top || cords.arrowTop;
          _this.ArrowEl.style.left = arrowStyle.left || cords.arrowLeft;
        }

        if (window.getComputedStyle(_this.TriggerEl, null).getPropertyValue("position") == "static" || window.getComputedStyle(_this.TriggerEl, null).getPropertyValue("position") == "") _this.TriggerEl.style.position = "relative";
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addWarperAction", function () {
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

        if (!modal && on.indexOf("hover") >= 0) {
          childrenElementProps.onMouseEnter = _this.onMouseEnter;
          childrenElementProps.onMouseLeave = _this.onMouseLeave;
        }

        return childrenElementProps;
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderTrigger", function () {
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
              break;

            case "focus":
              triggerProps.onFocus = _this.onMouseEnter;
              break;
          }
        }

        if (typeof trigger === "function") return React.cloneElement(trigger(_this.state.isOpen), triggerProps);
        return React.cloneElement(trigger, triggerProps);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderContent", function () {
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

        var _this$props5 = this.props,
            closeOnEscape = _this$props5.closeOnEscape,
            defaultOpen = _this$props5.defaultOpen;
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
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (prevProps.disabled !== this.props.disabled && this.props.disabled && this.state.isOpen) {
          this.closePopup();
        }
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
        var _this$props6 = this.props,
            overlayStyle = _this$props6.overlayStyle,
            closeOnDocumentClick = _this$props6.closeOnDocumentClick,
            on = _this$props6.on;
        var modal = this.state.modal;
        var overlay = this.state.isOpen && !(on.indexOf("hover") >= 0);
        var ovStyle = modal ? styles.overlay.modal : styles.overlay.tooltip;
        return [!!this.props.trigger && React.createElement(Ref, {
          innerRef: this.setTriggerRef,
          key: "R"
        }, this.renderTrigger()), this.state.isOpen && React.createElement("div", {
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
        }, modal && this.renderContent()), this.state.isOpen && !modal && this.renderContent()];
      }
    }]);

    return Popup;
  }(React.PureComponent);

  _defineProperty(Popup, "defaultProps", {
    children: function children() {
      return React.createElement("span", null, " Your Content Here !!");
    },
    trigger: null,
    onOpen: function onOpen() {},
    onClose: function onClose() {},
    defaultOpen: false,
    open: false,
    disabled: false,
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
    mouseLeaveDelay: 100,
    keepTooltipInside: false
  });

  {
    var PropTypes = require("prop-types");

    var TRIGGER_TYPES = ["hover", "click", "focus"];
    Popup.propTypes = {
      arrowStyle: PropTypes.object,
      contentStyle: PropTypes.object,
      overlayStyle: PropTypes.object,
      className: PropTypes.string,
      modal: PropTypes.bool,
      closeOnDocumentClick: PropTypes.bool,
      disabled: PropTypes.bool,
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
      on: PropTypes.oneOfType([PropTypes.oneOf(TRIGGER_TYPES), PropTypes.arrayOf(PropTypes.oneOf(TRIGGER_TYPES))]),
      children: PropTypes.oneOfType([PropTypes.func, PropTypes.element, PropTypes.string]).isRequired,
      position: PropTypes.oneOfType([PropTypes.oneOf(POSITION_TYPES), PropTypes.arrayOf(PropTypes.oneOf(POSITION_TYPES))]),
      keepTooltipInside: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
    };
  }

  var Ref =
  /*#__PURE__*/
  function (_React$PureComponent2) {
    _inherits(Ref, _React$PureComponent2);

    function Ref() {
      _classCallCheck(this, Ref);

      return _possibleConstructorReturn(this, _getPrototypeOf(Ref).apply(this, arguments));
    }

    _createClass(Ref, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var innerRef = this.props.innerRef;
        if (innerRef) innerRef(reactDom.findDOMNode(this));
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

  return Popup;

})));
