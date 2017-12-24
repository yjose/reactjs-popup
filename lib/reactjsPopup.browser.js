'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

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

function calculatePosition(triggerBounding, ContentBounding, position) {
  var margin = 5;
  var args = position.split(",");
  // the 1 step : center the popup content => ok
  var CenterTop = triggerBounding.top + triggerBounding.height / 2;
  var CenterLeft = triggerBounding.left + triggerBounding.width / 2;
  var height = ContentBounding.height,
      width = ContentBounding.width;

  var top = CenterTop - height / 2;
  var left = CenterLeft - width / 2;
  var transform = "";
  var arrowTop = "0%";
  var arrowLeft = "0%";
  // the 2 step : => ok
  switch (args[0]) {
    case "top":
      top -= height / 2 + triggerBounding.height / 2 + margin;
      transform = "translateX(-50%) rotate(45deg)";
      arrowTop = "100%";
      arrowLeft = "50%";
      break;
    case "bottom":
      top += height / 2 + triggerBounding.height / 2 + margin;
      transform = "translateX(-50%) rotate(225deg)";
      arrowLeft = "50%";
      break;
    case "left":
      left -= width / 2 + triggerBounding.width / 2 + margin;
      transform = " translateY(-50%) rotate(-45deg)";
      arrowLeft = "100%";
      arrowTop = "50%";
      break;
    case "right":
      left += width / 2 + triggerBounding.width / 2 + margin;
      transform = "translateY(-50%) rotate(135deg)";
      arrowTop = "50%";

      break;
  }
  switch (args[1]) {
    case "top":
      top += height / 4;
      arrowTop = "25%";
      break;
    case "bottom":
      top -= height / 4;
      arrowTop = "75%";
      break;
    case "left":
      left += width / 4;
      arrowLeft = "25%";
      break;
    case "right":
      left -= width / 4;
      arrowLeft = "75%";
      break;
  }

  return { top: top, left: left, transform: transform, arrowLeft: arrowLeft, arrowTop: arrowTop };
}

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popup = function (_React$Component) {
  _inherits(Popup, _React$Component);

  function Popup(props) {
    _classCallCheck(this, Popup);

    var _this = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));

    _this.state = {
      isOpen: _this.props.defaultOpen
    };
    _this.timeOut = 0;

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
      _this.setState({ isOpen: true }, function () {
        return _this.setPosition();
      });
    };

    _this.closePopup = function () {
      _this.setState({ isOpen: false });
    };

    _this.onMouseEnter = function () {
      clearTimeout(_this.timeOut);
      _this.openPopup();
    };

    _this.onMouseLeave = function () {
      clearTimeout(_this.timeOut);
      _this.timeOut = setTimeout(function () {
        return _this.closePopup();
      }, 300);
    };

    _this.setPosition = function () {
      var trigger = _this.TriggerEl.getBoundingClientRect();
      var content = _this.ContentEl.getBoundingClientRect();
      var cords = calculatePosition(trigger, content, _this.props.position);
      _this.ContentEl.style.top = cords.top + "px";
      _this.ContentEl.style.left = cords.left + "px";
      _this.ArrowEl.style.transform = cords.transform;
      _this.ArrowEl.style.top = cords.arrowTop;
      _this.ArrowEl.style.left = cords.arrowLeft;
    };

    _this.renderTrigger = function () {
      var triggerProps = {};
      var triggerOn = _this.props.triggerOn || "click";
      triggerProps.ref = _this.setTriggerRef;
      switch (triggerOn) {
        case "click":
          triggerProps.onClick = _this.togglePopup;
          break;
        case "hover":
          triggerProps.onMouseEnter = _this.onMouseEnter;
          triggerProps.onMouseLeave = _this.onMouseLeave;
          break;
      }
      return React.cloneElement(_this.props.trigger, triggerProps);
    };

    _this.addWarperAction = function () {
      var childrenElementProps = {
        className: "popup-content  " + _this.props.className,
        style: Object.assign({ position: "fixed" }, _this.props.style),
        ref: _this.setContentRef,
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      };
      if (_this.props.triggerOn === "hover") {
        childrenElementProps.onMouseEnter = _this.onMouseEnter;
        childrenElementProps.onMouseLeave = _this.onMouseLeave;
      }
      return childrenElementProps;
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
    return _this;
  }

  _createClass(Popup, [{
    key: "render",
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        this.renderTrigger(),
        this.state.isOpen && React.createElement(
          "div",
          {
            className: "overlay",
            onClick: this.props.closeOnDocumentClick ? this.closePopup : undefined
          },
          React.createElement(
            "div",
            this.addWarperAction(),
            React.createElement("div", { ref: this.setArrowRef, className: "popup-arrow" }),
            typeof this.props.children === "function" ? this.props.children(this.state.isOpen, this.closePopup) : this.props.children
          )
        )
      );
    }
  }]);

  return Popup;
}(React.Component);

Popup.defaultProps = {
  closeOnDocumentClick: false,
  defaultOpen: false,
  triggerOn: "click",
  style: {},
  className: "",
  position: "bottom,center"
};
Popup.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOf([PropTypes.func, PropTypes.element, PropTypes.string]),
  closeOnDocumentClick: PropTypes.bool,
  triggerOn: PropTypes.oneOf(["hover", "click"]),
  position: PropTypes.oneOf(["top,left", "top,center", "top,right", "bottom,left", "bottom,center", "bottom,right", "right,top", "right,center", "right,bottom", "left,top", "left,center", "left,bottom"])
};

module.exports = Popup;
//# sourceMappingURL=reactjsPopup.browser.js.map
