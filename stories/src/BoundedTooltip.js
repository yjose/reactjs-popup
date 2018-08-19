import React from "react";
import Popup from "../../src/Popup";

export default class BoundedTooltip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const trigger = (
      <button
        className="button"
        style={{ position: "absolute", bottom: 20, right: 20 }}
      >
        Controlled Tooltip{" "}
      </button>
    );

    return (
      <Popup
        trigger={trigger}
        position={this.props.position}
        //open={this.state.open}
        closeOnDocumentClick
        // onClose={this.closeModal}
      >
        {close => (
          <div className="modal">
            <a className="close" onClick={close}>
              &times; remove
            </a>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            magni omnis delectus nemo, maxime molestiae dolorem numquam
            mollitia, voluptate ea, accusamus excepturi deleniti ratione
            sapiente! Laudantium, aperiam doloribus. Odit, aut.
          </div>
        )}
      </Popup>
    );
  }
}
