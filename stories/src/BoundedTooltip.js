import React from "react";
import Popup from "../../src/";

export default class BoundedTooltip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const trigger = (
      <button className="button" style={this.props.style}>
        Controlled Tooltip{" "}
      </button>
    );

    return (
      <Popup
        trigger={trigger}
        position={this.props.position}
        //open={this.state.open}
        closeOnDocumentClick
        keepTooltipInside={true}
        // onClose={this.closeModal}
      >
        {close => (
          <div className="modal">
            <a className="close" onClick={close} href="#!">
              &times; remove
            </a>
            Lorem ipsum dolor sit amet, consectur adipisicing elit. Beatae magni
            omnis delectus nemo, maxime molestiae dolorem numquam mollitia,
            voluptate ea, accusamus excepturi deleniti ratione sapiente!
            Laudantium, aperiam doloribus. Odit, aut.
          </div>
        )}
      </Popup>
    );
  }
}
