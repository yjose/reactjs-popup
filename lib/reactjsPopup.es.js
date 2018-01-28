import React from 'react';

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
  var totalMargin = margin + offset;
  var args = position.split(" ");
  // the step N 1 : center the popup content => ok
  var CenterTop = triggerBounding.top + triggerBounding.height / 2;
  var CenterLeft = triggerBounding.left + triggerBounding.width / 2;
  var height = ContentBounding.height,
      width = ContentBounding.width;

  var top = CenterTop - height / 2;
  var left = CenterLeft - width / 2;
  var transform = "";
  var arrowTop = "0%";
  var arrowLeft = "0%";
  // the  step N 2 : => ok
  switch (args[0]) {
    case "top":
      top -= height / 2 + triggerBounding.height / 2 + totalMargin;
      transform = "rotate(45deg)";
      arrowTop = "100%";
      arrowLeft = "50%";
      break;
    case "bottom":
      top += height / 2 + triggerBounding.height / 2 + totalMargin;
      transform = "rotate(225deg)";
      arrowLeft = "50%";
      break;
    case "left":
      left -= width / 2 + triggerBounding.width / 2 + totalMargin;
      transform = " rotate(-45deg)";
      arrowLeft = "100%";
      arrowTop = "50%";
      break;
    case "right":
      left += width / 2 + triggerBounding.width / 2 + totalMargin;
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

  return { top: top, left: left, transform: transform, arrowLeft: arrowLeft, arrowTop: arrowTop };
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

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
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



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
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
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Popup = function (_React$Component) {
  inherits(Popup, _React$Component);

  function Popup(props) {
    classCallCheck(this, Popup);

    var _this = possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));

    _this.state = {
      isOpen: _this.props.defaultOpen
    };

    _this.togglePopup = function () {
      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      }, function () {
        return _this.state.isOpen && _this.setPosition();
      });
    };

    _this.openPopup = function () {
      if (_this.state.isOpen) return;
      _this.setState({ isOpen: true }, function () {
        _this.setPosition();
        _this.props.onOpen();
      });
    };

    _this.closePopup = function () {
      if (!_this.state.isOpen) return;
      _this.setState({ isOpen: false }, _this.props.onClose());
    };

    _this.onMouseEnter = function () {
      clearTimeout(_this.timeOut);
      var mouseEnterDelay = _this.props.mouseEnterDelay;

      _this.timeOut = setTimeout(function () {
        return _this.openPopup();
      }, mouseEnterDelay);
    };

    _this.onMouseLeave = function () {
      clearTimeout(_this.timeOut);
      var mouseLeaveDelay = _this.props.mouseLeaveDelay;

      _this.timeOut = setTimeout(function () {
        return _this.closePopup();
      }, mouseLeaveDelay);
    };

    _this.setPosition = function () {
      var _this$props = _this.props,
          modal = _this$props.modal,
          arrow = _this$props.arrow,
          position = _this$props.position,
          offset = _this$props.offset;

      if (modal) return;
      var helper = _this.HelperEl.getBoundingClientRect();
      var trigger = _this.TriggerEl.getBoundingClientRect();
      var content = _this.ContentEl.getBoundingClientRect();
      var cords = calculatePosition(trigger, content, position, arrow, offset);
      _this.ContentEl.style.top = cords.top - helper.top + "px";
      _this.ContentEl.style.left = cords.left - helper.left + "px";
      if (arrow) {
        _this.ArrowEl.style['transform'] = cords.transform;
        _this.ArrowEl.style['-ms-transform'] = cords.transform;
        _this.ArrowEl.style['-webkit-transform'] = cords.transform;
        _this.ArrowEl.style.top = cords.arrowTop;
        _this.ArrowEl.style.left = cords.arrowLeft;
      }
      if (_this.TriggerEl.style.position == "static" || _this.TriggerEl.style.position == "") _this.TriggerEl.style.position = "relative";
    };

    _this.addWarperAction = function () {
      var _this$props2 = _this.props,
          contentStyle = _this$props2.contentStyle,
          className = _this$props2.className,
          modal = _this$props2.modal,
          on = _this$props2.on;

      var popupContentStyle = modal ? styles.popupContent.modal : styles.popupContent.tooltip;

      var childrenElementProps = {
        className: "popup-content " + className,
        style: Object.assign({}, popupContentStyle, contentStyle),
        ref: _this.setContentRef,
        onClick: function onClick(e) {
          e.stopPropagation();
        }
      };
      if (!modal && on === "hover") {
        childrenElementProps.onMouseEnter = _this.onMouseEnter;
        childrenElementProps.onMouseLeave = _this.onMouseLeave;
      }
      return childrenElementProps;
    };

    _this.renderTrigger = function () {
      var triggerProps = { key: "T" };
      var on = _this.props.on;

      triggerProps.ref = _this.setTriggerRef;
      switch (on) {
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
      return React.cloneElement(_this.props.trigger, triggerProps);
    };

    _this.renderContent = function () {
      var _this$props3 = _this.props,
          arrow = _this$props3.arrow,
          modal = _this$props3.modal,
          arrowStyle = _this$props3.arrowStyle;

      return React.createElement(
        "div",
        _extends({}, _this.addWarperAction(), { key: "C" }),
        arrow && !modal && React.createElement("div", {
          ref: _this.setArrowRef,
          style: Object.assign({}, styles.popupArrow, arrowStyle)
        }),
        typeof _this.props.children === "function" ? _this.props.children(_this.closePopup, _this.state.isOpen) : _this.props.children
      );
    };

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

  createClass(Popup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.defaultOpen) this.setPosition();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeOut);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          modal = _props.modal,
          overlayStyle = _props.overlayStyle;

      var ovStyle = modal ? styles.overlay.modal : styles.overlay.tooltip;
      return [React.createElement("div", {
        key: "H",
        style: { position: "absolute", top: "0px", left: "0px" },
        ref: this.setHelperRef
      }), this.state.isOpen && React.createElement(
        "div",
        {
          key: "O",
          className: "popup-overlay",
          style: Object.assign({}, ovStyle, overlayStyle),
          onClick: this.props.closeOnDocumentClick ? this.closePopup : undefined
        },
        modal && this.renderContent()
      ), this.state.isOpen && !modal && this.renderContent(), this.renderTrigger()];
    }
  }]);
  return Popup;
}(React.Component);

Popup.defaultProps = {
  children: function children() {
    return React.createElement(
      "span",
      null,
      " Your Content Here !!"
    );
  },
  onOpen: function onOpen() {},
  onClose: function onClose() {},
  closeOnDocumentClick: false,
  defaultOpen: false,
  on: "click",
  contentStyle: {},
  arrowStyle: {},
  overlayStyle: {},
  className: "",
  position: "bottom center",
  modal: false,
  arrow: true,
  offset: 0,
  mouseEnterDelay: 100,
  mouseLeaveDelay: 100
};
if (process.env.NODE_ENV !== "production") {
  var PropTypes = require("prop-types");

  Popup.propTypes = {
    arrowStyle: PropTypes.object,
    contentStyle: PropTypes.object,
    overlayStyle: PropTypes.object,
    className: PropTypes.string,
    modal: PropTypes.bool,
    closeOnDocumentClick: PropTypes.bool,
    offset: PropTypes.number,
    mouseEnterDelay: PropTypes.number,
    mouseLeaveDelay: PropTypes.number,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    trigger: PropTypes.element.isRequired,
    on: PropTypes.oneOf(["hover", "click", "focus"]),
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.element, PropTypes.string]).isRequired,
    position: PropTypes.oneOf(["top left", "top center", "top right", "bottom left", "bottom center", "bottom right", "right top", "right center", "right bottom", "left top", "left center", "left bottom"])
  };
}

export default Popup;
//# sourceMappingURL=reactjsPopup.es.js.map
