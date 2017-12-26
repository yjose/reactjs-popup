import React from "react";
import PropTypes from "prop-types";
import calculatePosition from "./Utils";

export default class Popup extends React.Component {
  static defaultProps = {
    closeOnDocumentClick: false,
    defaultOpen: false,
    triggerOn: "click",
    style: {},
    className: "",
    position: "bottom,center"
  };
  state = {
    isOpen: this.props.defaultOpen
  };
  timeOut = 0;

  constructor(props) {
    super(props);
    this.setTriggerRef = r => (this.TriggerEl = r);
    this.setContentRef = r => (this.ContentEl = r);
    this.setArrowRef = r => (this.ArrowEl = r);
  }

  togglePopup = () => {
    this.setState(
      prevState => ({
        isOpen: !prevState.isOpen
      }),
      () => this.state.isOpen && this.setPosition()
    );
  };
  openPopup = () => {
    this.setState({ isOpen: true }, () => this.setPosition());
  };
  closePopup = () => {
    this.setState({ isOpen: false });
  };
  onMouseEnter = () => {
    clearTimeout(this.timeOut);
    this.openPopup();
  };
  onMouseLeave = () => {
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(() => this.closePopup(), 300);
  };

  setPosition = () => {
    const trigger = this.TriggerEl.getBoundingClientRect();
    const content = this.ContentEl.getBoundingClientRect();
    const cords = calculatePosition(trigger, content, this.props.position);
    this.ContentEl.style.top = cords.top + "px";
    this.ContentEl.style.left = cords.left + "px";
    this.ArrowEl.style.transform = cords.transform;
    this.ArrowEl.style.top = cords.arrowTop;
    this.ArrowEl.style.left = cords.arrowLeft;
  };

  renderTrigger = () => {
    const triggerProps = {};
    const { triggerOn } = this.props;
    triggerProps.ref = this.setTriggerRef;
    switch (triggerOn) {
      case "click":
        triggerProps.onClick = this.togglePopup;
        break;
      case "hover":
        triggerProps.onMouseEnter = this.onMouseEnter;
        triggerProps.onMouseLeave = this.onMouseLeave;
        break;
    }
    return React.cloneElement(this.props.trigger, triggerProps);
  };

  addWarperAction = () => {
    const childrenElementProps = {
      className: `popup-content  ${this.props.className}`,
      style: Object.assign({ position: "fixed" }, this.props.style),
      ref: this.setContentRef,
      onClick: e => e.stopPropagation()
    };
    if (this.props.triggerOn === "hover") {
      childrenElementProps.onMouseEnter = this.onMouseEnter;
      childrenElementProps.onMouseLeave = this.onMouseLeave;
    }
    return childrenElementProps;
  };

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
Popup.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  trigger: PropTypes.element,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  closeOnDocumentClick: PropTypes.bool,
  triggerOn: PropTypes.oneOf(["hover", "click"]),
  position: PropTypes.oneOf([
    "top,left",
    "top,center",
    "top,right",
    "bottom,left",
    "bottom,center",
    "bottom,right",
    "right,top",
    "right,center",
    "right,bottom",
    "left,top",
    "left,center",
    "left,bottom"
  ])
};
