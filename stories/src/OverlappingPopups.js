import React from "react";
import Popup from "../../src/";

const styles = {
  textAlign: 'center'
}

const OverlappingPopups = () => {
  return (
    <div style={styles}>
      <h3>
        Try clicking the first button, then the second button. Repeat the
        previous sequence one more time.
      </h3>
      <Popup trigger={<button>Trigger</button>}>
        <div> Your Popup content here </div>
      </Popup>
      <Popup trigger={<button>Trigger</button>}>
        <div> Your Popup content here </div>
      </Popup>
      <Popup trigger={<button>Trigger</button>}>
        <div> Your Popup content here </div>
      </Popup>
    </div>
  );
}

export default OverlappingPopups;