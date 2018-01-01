'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

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
  var margin = 8;
  var args = position.split(",");
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
      top = triggerBounding.bottom - height + triggerBounding.height;
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
    position: "absolute",
    zIndex: "2",
    width: "200px",
    background: "rgb(255, 255, 255)",
    border: "1px solid rgb(187, 187, 187)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 3px"
  },
  popupArrow: {
    height: "10px",
    width: "10px",
    position: "absolute",
    background: "rgb(255, 255, 255)",
    transform: "rotate(45deg)",
    margin: "-5px",
    boxShadow: "rgba(0, 0, 0, 0.2) 2px 2px 1px"
  },
  overlay: {
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0"
  }
};

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// https://philipwalton.com/articles/what-no-one-told-you-about-z-index/

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
      var helper = _this.HelperEl.getBoundingClientRect();
      var trigger = _this.TriggerEl.getBoundingClientRect();
      var content = _this.ContentEl.getBoundingClientRect();
      var cords = calculatePosition(trigger, content, _this.props.position);
      _this.ContentEl.style.top = cords.top - helper.top + "px";
      _this.ContentEl.style.left = cords.left - helper.left + "px";
      _this.ArrowEl.style.transform = cords.transform;
      _this.ArrowEl.style.top = cords.arrowTop;
      _this.ArrowEl.style.left = cords.arrowLeft;
      if (_this.TriggerEl.style.position == "static" || _this.TriggerEl.style.position == "") _this.TriggerEl.style.position = "relative";
    };

    _this.renderTrigger = function () {
      var triggerProps = {};
      var triggerOn = _this.props.triggerOn;

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
        className: "" + _this.props.className,
        style: Object.assign({}, styles.popupContent, _this.props.style),
        ref: _this.setContentRef,
        onClick: function onClick(e) {
          e.stopPropagation();
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
    _this.setHelperRef = function (r) {
      return _this.HelperEl = r;
    };
    return _this;
  }

  _createClass(Popup, [{
    key: "render",
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement("div", {
          style: { position: "absolute", top: "0px", left: "0px" },
          ref: this.setHelperRef
        }),
        this.state.isOpen && this.props.closeOnDocumentClick && React.createElement("span", {
          style: styles.overlay,
          onClick: this.props.closeOnDocumentClick ? this.closePopup : undefined
        }),
        this.state.isOpen && React.createElement(
          "div",
          this.addWarperAction(),
          React.createElement("div", { ref: this.setArrowRef, style: styles.popupArrow }),
          typeof this.props.children === "function" ? this.props.children(this.state.isOpen, this.closePopup) : this.props.children
        ),
        this.renderTrigger()
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
/*
  render() {
    return (
      <React.Fragment>
        {this.renderTrigger()}
        {this.state.isOpen && (
          <div
            className="overlay"
            onClick={
              this.props.closeOnDocumentClick ? this.closePopup : undefined
            }
          >
            <div {...this.addWarperAction()}>
              <div ref={this.setArrowRef} className="popup-arrow" />
              {typeof this.props.children === "function"
                ? this.props.children(this.state.isOpen, this.closePopup)
                : this.props.children}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
*/

module.exports = Popup;
//# sourceMappingURL=reactjsPopup.browser.js.map
