import React from "react";
import Popup from "../../src/";

export default class ControlledPopup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Popup
        trigger={<button className="button">Controlled Tooltip </button>}
        position="right center"
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
