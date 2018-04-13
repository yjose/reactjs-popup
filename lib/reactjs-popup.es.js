/*!
 * reactjs-popup v1.0.7
 * (c) 2018-present Youssouf EL AZIZI <youssoufelazizi@gmail.com>
 * Released under the MIT License.
 */
import React from 'react';
import { findDOMNode } from 'react-dom';

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
  const margin = arrow ? 8 : 0;
  const MarginX = margin + offset.offsetX;
  const MarginY = margin + offset.offsetY;
  const args = position.split(" "); // the step N 1 : center the popup content => ok

  const CenterTop = triggerBounding.top + triggerBounding.height / 2;
  const CenterLeft = triggerBounding.left + triggerBounding.width / 2;
  const {
    height,
    width
  } = ContentBounding;
  let top = CenterTop - height / 2;
  let left = CenterLeft - width / 2;
  let transform = "";
  let arrowTop = "0%";
  let arrowLeft = "0%"; // the  step N 2 : => ok

  switch (args[0]) {
    case "top":
      top -= height / 2 + triggerBounding.height / 2 + MarginY;
      transform = `rotate(45deg)`;
      arrowTop = "100%";
      arrowLeft = "50%";
      break;

    case "bottom":
      top += height / 2 + triggerBounding.height / 2 + MarginY;
      transform = `rotate(225deg)`;
      arrowLeft = "50%";
      break;

    case "left":
      left -= width / 2 + triggerBounding.width / 2 + MarginX;
      transform = ` rotate(-45deg)`;
      arrowLeft = "100%";
      arrowTop = "50%";
      break;

    case "right":
      left += width / 2 + triggerBounding.width / 2 + MarginX;
      transform = `rotate(135deg)`;
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
    top,
    left,
    transform,
    arrowLeft,
    arrowTop
  };
}

var styles = {
  popupContent: {
    tooltip: {
      position: "absolute",
      zIndex: "2",
      width: "200px",
      background: `rgb(255, 255, 255)`,
      border: `1px solid rgb(187, 187, 187)`,
      boxShadow: `rgba(0, 0, 0, 0.2) 0px 1px 3px`,
      padding: "5px"
    },
    modal: {
      position: "relative",
      background: `rgb(255, 255, 255)`,
      width: "50%",
      margin: "auto",
      border: `1px solid rgb(187, 187, 187)`,
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
      background: `rgba(0, 0, 0,0.5)`,
      display: "flex",
      zIndex: "999"
    }
  }
};

class Popup extends React.PureComponent {
  constructor(props) {
    super(props);
    Object.defineProperty(this, "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        isOpen: this.props.open || this.props.defaultOpen,
        modal: this.props.modal ? true : !this.props.trigger // we create this modal state because the popup can't be a tooltip if the trigger prop doesn't existe

      }
    });
    Object.defineProperty(this, "lockScroll", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: () => {
        if (this.state.modal && this.props.lockScroll) document.getElementsByTagName("body")[0].style.overflow = "hidden";
      }
    });
    Object.defineProperty(this, "resetScroll", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: () => {
        if (this.state.modal && this.props.lockScroll) document.getElementsByTagName("body")[0].style.overflow = "auto";
      }
    });
    Object.defineProperty(this, "togglePopup", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: () => {
        if (this.state.isOpen) this.closePopup();else this.openPopup();
      }
    });
    Object.defineProperty(this, "openPopup", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: () => {
        if (this.state.isOpen) return;
        this.setState({
          isOpen: true
        }, () => {
          this.setPosition();
          this.props.onOpen();
          this.lockScroll();
        });
      }
    });
    Object.defineProperty(this, "closePopup", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: () => {
        if (!this.state.isOpen) return;
        this.setState({
          isOpen: false
        }, () => {
          this.props.onClose();
          this.resetScroll();
        });
      }
    });
    Object.defineProperty(this, "onMouseEnter", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: () => {
        clearTimeout(this.timeOut);
        const {
          mouseEnterDelay
        } = this.props;
        this.timeOut = setTimeout(() => this.openPopup(), mouseEnterDelay);
      }
    });
    Object.defineProperty(this, "onMouseLeave", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: () => {
        clearTimeout(this.timeOut);
        const {
          mouseLeaveDelay
        } = this.props;
        this.timeOut = setTimeout(() => this.closePopup(), mouseLeaveDelay);
      }
    });
    Object.defineProperty(this, "setPosition", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: () => {
        const {
          arrow,
          position,
          offsetX,
          offsetY
        } = this.props;
        const {
          modal
        } = this.state;
        if (modal) return;
        const helper = this.HelperEl.getBoundingClientRect();
        const trigger = this.TriggerEl.getBoundingClientRect();
        const content = this.ContentEl.getBoundingClientRect();
        const cords = calculatePosition(trigger, content, position, arrow, {
          offsetX,
          offsetY
        });
        this.ContentEl.style.top = cords.top - helper.top + "px";
        this.ContentEl.style.left = cords.left - helper.left + "px";

        if (arrow) {
          this.ArrowEl.style["transform"] = cords.transform;
          this.ArrowEl.style["-ms-transform"] = cords.transform;
          this.ArrowEl.style["-webkit-transform"] = cords.transform;
          this.ArrowEl.style.top = cords.arrowTop;
          this.ArrowEl.style.left = cords.arrowLeft;
        }

        if (window.getComputedStyle(this.TriggerEl, null).getPropertyValue("position") == "static" || window.getComputedStyle(this.TriggerEl, null).getPropertyValue("position") == "") this.TriggerEl.style.position = "relative";
      }
    });
    Object.defineProperty(this, "addWarperAction", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: () => {
        const {
          contentStyle,
          className,
          on
        } = this.props;
        const {
          modal
        } = this.state;
        const popupContentStyle = modal ? styles.popupContent.modal : styles.popupContent.tooltip;
        const childrenElementProps = {
          className: `popup-content ${className}`,
          style: Object.assign({}, popupContentStyle, contentStyle),
          ref: this.setContentRef,
          onClick: e => {
            e.stopPropagation();
          }
        };

        if (!modal && on.includes("hover")) {
          childrenElementProps.onMouseEnter = this.onMouseEnter;
          childrenElementProps.onMouseLeave = this.onMouseLeave;
        }

        return childrenElementProps;
      }
    });
    Object.defineProperty(this, "renderTrigger", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: () => {
        const triggerProps = {
          key: "T"
        };
        const {
          on,
          trigger
        } = this.props;
        const onAsArray = Array.isArray(on) ? on : [on];

        for (let i = 0, len = onAsArray.length; i < len; i++) {
          switch (onAsArray[i]) {
            case "click":
              triggerProps.onClick = this.togglePopup;
              break;

            case "hover":
              triggerProps.onMouseEnter = this.onMouseEnter;
              triggerProps.onMouseLeave = this.onMouseLeave;

            case "focus":
              triggerProps.onFocus = this.onMouseEnter;
              break;
          }
        }

        if (typeof trigger === "function") return React.cloneElement(trigger(this.state.isOpen), triggerProps);
        return React.cloneElement(trigger, triggerProps);
      }
    });
    Object.defineProperty(this, "renderContent", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: () => {
        const {
          arrow,
          arrowStyle
        } = this.props;
        const {
          modal
        } = this.state;
        return React.createElement("div", _extends({}, this.addWarperAction(), {
          key: "C"
        }), arrow && !modal && React.createElement("div", {
          ref: this.setArrowRef,
          style: Object.assign({}, styles.popupArrow, arrowStyle)
        }), typeof this.props.children === "function" ? this.props.children(this.closePopup, this.state.isOpen) : this.props.children);
      }
    });

    this.setTriggerRef = r => this.TriggerEl = r;

    this.setContentRef = r => this.ContentEl = r;

    this.setArrowRef = r => this.ArrowEl = r;

    this.setHelperRef = r => this.HelperEl = r;

    this.timeOut = 0;
  }

  componentDidMount() {
    const {
      closeOnEscape,
      defaultOpen
    } = this.props;
    if (defaultOpen) this.setPosition();

    if (closeOnEscape) {
      window.addEventListener("keyup", e => {
        if (e.key === "Escape") this.closePopup();
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.open === nextProps.open) return;
    if (nextProps.open) this.openPopup();else this.closePopup();
  }

  componentWillUnmount() {
    // kill any function to execute if the component is unmounted
    clearTimeout(this.timeOut);
  }

  render() {
    const {
      overlayStyle,
      closeOnDocumentClick,
      on
    } = this.props;
    const {
      modal
    } = this.state;
    const overlay = this.state.isOpen && !on.includes("hover") && closeOnDocumentClick;
    const ovStyle = modal ? styles.overlay.modal : styles.overlay.tooltip;
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
      onClick: this.closePopup
    }, modal && this.renderContent()), this.state.isOpen && !modal && this.renderContent(), !!this.props.trigger && React.createElement(Ref, {
      innerRef: this.setTriggerRef,
      key: "R"
    }, this.renderTrigger())];
  }

}
Object.defineProperty(Popup, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    children: () => React.createElement("span", null, " Your Content Here !!"),
    trigger: null,
    onOpen: () => {},
    onClose: () => {},
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
    lockScroll: true,
    arrow: true,
    offsetX: 0,
    offsetY: 0,
    mouseEnterDelay: 100,
    mouseLeaveDelay: 100
  }
});

if (process.env.NODE_ENV !== "production") {
  const PropTypes = require("prop-types");

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

class Ref extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      innerRef
    } = this.props;
    if (innerRef) innerRef(findDOMNode(this));
  }

  render() {
    const {
      children
    } = this.props;
    return React.Children.only(children);
  }

}

export default Popup;
