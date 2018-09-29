export default {
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
