import React from "react";
import calculatePosition from "./Utils";

import styles from "./popup.css.js";

export default class Popup extends React.Component {
  static defaultProps = {
    children: () => <span> Your Content Here !!</span>,
    onOpen: () => {},
    onClose: () => {},
    closeOnDocumentClick: false,
    defaultOpen: false,
    on: ["click"],
    contentStyle: {},
    arrowStyle: {},
    overlayStyle: {},
    className: "",
    position: "bottom center",
    modal: false,
    lockScroll: true,
    arrow: true,
    offset: 0,
    mouseEnterDelay: 100,
    mouseLeaveDelay: 100
  };
  state = {
    isOpen: this.props.defaultOpen
  };

  constructor(props) {
    super(props);
    this.setTriggerRef = r => (this.TriggerEl = r);
    this.setContentRef = r => (this.ContentEl = r);
    this.setArrowRef = r => (this.ArrowEl = r);
    this.setHelperRef = r => (this.HelperEl = r);
    this.timeOut = 0;
  }

  componentDidMount() {
    if (this.props.defaultOpen) this.setPosition();
  }
  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  lockScroll = () => {
    if (this.props.modal && this.props.lockScroll)
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
  };
  resetScroll = () => {
    if (this.props.modal && this.props.lockScroll)
      document.getElementsByTagName("body")[0].style.overflow = "auto";
  };

  togglePopup = () => {
    if (this.state.isOpen) this.closePopup();
    else this.openPopup();
  };
  openPopup = () => {
    if (this.state.isOpen) return;
    this.setState({ isOpen: true }, () => {
      this.setPosition();
      this.props.onOpen();
      this.lockScroll();
    });
  };
  closePopup = () => {
    if (!this.state.isOpen) return;
    this.setState({ isOpen: false }, () => {
      this.props.onClose();
      this.resetScroll();
    });
  };
  onMouseEnter = () => {
    clearTimeout(this.timeOut);
    const { mouseEnterDelay } = this.props;
    this.timeOut = setTimeout(() => this.openPopup(), mouseEnterDelay);
  };
  onMouseLeave = () => {
    clearTimeout(this.timeOut);
    const { mouseLeaveDelay } = this.props;
    this.timeOut = setTimeout(() => this.closePopup(), mouseLeaveDelay);
  };

  setPosition = () => {
    const { modal, arrow, position, offset } = this.props;
    if (modal) return;
    const helper = this.HelperEl.getBoundingClientRect();
    const trigger = this.TriggerEl.getBoundingClientRect();
    const content = this.ContentEl.getBoundingClientRect();
    const cords = calculatePosition(trigger, content, position, arrow, offset);
    this.ContentEl.style.top = cords.top - helper.top + "px";
    this.ContentEl.style.left = cords.left - helper.left + "px";
    if (arrow) {
      this.ArrowEl.style["transform"] = cords.transform;
      this.ArrowEl.style["-ms-transform"] = cords.transform;
      this.ArrowEl.style["-webkit-transform"] = cords.transform;
      this.ArrowEl.style.top = cords.arrowTop;
      this.ArrowEl.style.left = cords.arrowLeft;
    }
    if (
      this.TriggerEl.style.position == "static" ||
      this.TriggerEl.style.position == ""
    )
      this.TriggerEl.style.position = "relative";
  };

  addWarperAction = () => {
    const { contentStyle, className, modal, on } = this.props;
    const popupContentStyle = modal
      ? styles.popupContent.modal
      : styles.popupContent.tooltip;

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
  };
  renderTrigger = () => {
    const triggerProps = { key: "T" };
    const { on, trigger } = this.props;
    triggerProps.ref = this.setTriggerRef;
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

    if (typeof trigger === "function")
      return React.cloneElement(trigger(this.state.isOpen), triggerProps);

    return React.cloneElement(trigger, triggerProps);
  };

  renderContent = () => {
    const { arrow, modal, arrowStyle } = this.props;
    return (
      <div {...this.addWarperAction()} key="C">
        {arrow &&
          !modal && (
            <div
              ref={this.setArrowRef}
              style={Object.assign({}, styles.popupArrow, arrowStyle)}
            />
          )}
        {typeof this.props.children === "function"
          ? this.props.children(this.closePopup, this.state.isOpen)
          : this.props.children}
      </div>
    );
  };

  render() {
    const { modal, overlayStyle, closeOnDocumentClick } = this.props;
    const ovStyle = modal ? styles.overlay.modal : styles.overlay.tooltip;
    return [
      <div
        key="H"
        style={{ position: "absolute", top: "0px", left: "0px" }}
        ref={this.setHelperRef}
      />,
      this.state.isOpen && (
        <div
          key="O"
          className="popup-overlay"
          style={Object.assign({}, ovStyle, overlayStyle)}
          onClick={closeOnDocumentClick ? this.closePopup : undefined}
        >
          {modal && this.renderContent()}
        </div>
      ),
      this.state.isOpen && !modal && this.renderContent(),
      this.renderTrigger()
    ];
  }
}

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
    offset: PropTypes.number,
    mouseEnterDelay: PropTypes.number,
    mouseLeaveDelay: PropTypes.number,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    trigger: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
      .isRequired,
    on: PropTypes.oneOfType([
      PropTypes.oneOf(["hover", "click", "focus"]),
      PropTypes.arrayOf(PropTypes.oneOf(["hover", "click", "focus"]))
    ]),
    children: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element,
      PropTypes.string
    ]).isRequired,
    position: PropTypes.oneOf([
      "top left",
      "top center",
      "top right",
      "bottom left",
      "bottom center",
      "bottom right",
      "right top",
      "right center",
      "right bottom",
      "left top",
      "left center",
      "left bottom"
    ])
  };
}
